export type FxCode = 'GBP' | 'EUR' | 'NOK' | 'SEK' | 'DKK'

export interface DailyRates {
  /** YYYY-MM-DD (로컬 날짜) */
  date: string
  /** 1 외화 = N KRW */
  rates: Record<FxCode, number>
  source: string
}

const STORAGE_KEY = 'mvp-fx-krw-daily-v1'
const CODES: FxCode[] = ['GBP', 'EUR', 'NOK', 'SEK', 'DKK']

function todayKey() {
  const d = new Date()
  const y = d.getFullYear()
  const m = String(d.getMonth() + 1).padStart(2, '0')
  const day = String(d.getDate()).padStart(2, '0')
  return `${y}-${m}-${day}`
}

function readCache(): DailyRates | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as DailyRates
    if (parsed?.date === todayKey() && parsed.rates) return parsed
  } catch {
    /* ignore */
  }
  return null
}

function writeCache(data: DailyRates) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  } catch {
    /* ignore */
  }
}

/** krw.json: 1 KRW = x FOREIGN → 1 FOREIGN = 1/x KRW */
async function fetchFromCurrencyApi(): Promise<DailyRates> {
  const urls = [
    'https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/krw.min.json',
    'https://latest.currency-api.pages.dev/v1/currencies/krw.min.json',
  ]

  let lastError: unknown
  for (const url of urls) {
    try {
      const res = await fetch(url)
      if (!res.ok) throw new Error(`HTTP ${res.status}`)
      const json = (await res.json()) as {
        date?: string
        krw: Record<string, number>
      }
      const krw = json.krw
      const rates = {} as Record<FxCode, number>
      for (const code of CODES) {
        const perKrw = krw[code.toLowerCase()]
        if (!perKrw || perKrw <= 0) throw new Error(`Missing ${code}`)
        rates[code] = 1 / perKrw
      }
      return {
        date: todayKey(),
        rates,
        source: 'currency-api',
      }
    } catch (err) {
      lastError = err
    }
  }
  throw lastError ?? new Error('FX fetch failed')
}

/** open.er-api: base KRW → units of foreign per 1 KRW */
async function fetchFromOpenErApi(): Promise<DailyRates> {
  const res = await fetch('https://open.er-api.com/v6/latest/KRW')
  if (!res.ok) throw new Error(`HTTP ${res.status}`)
  const json = (await res.json()) as {
    result?: string
    rates?: Record<string, number>
  }
  if (json.result !== 'success' || !json.rates) throw new Error('Bad ER response')
  const rates = {} as Record<FxCode, number>
  for (const code of CODES) {
    const perKrw = json.rates[code]
    if (!perKrw || perKrw <= 0) throw new Error(`Missing ${code}`)
    rates[code] = 1 / perKrw
  }
  return { date: todayKey(), rates, source: 'open.er-api' }
}

let inflight: Promise<DailyRates> | null = null

/** 하루 1회 갱신(로컬 날짜 기준). 캐시가 있으면 즉시 반환 */
export async function getDailyRates(): Promise<DailyRates> {
  const cached = readCache()
  if (cached) return cached

  if (!inflight) {
    inflight = (async () => {
      try {
        const data = await fetchFromCurrencyApi()
        writeCache(data)
        return data
      } catch {
        const data = await fetchFromOpenErApi()
        writeCache(data)
        return data
      } finally {
        inflight = null
      }
    })()
  }
  return inflight
}

export function formatKrw(amount: number, lang: 'ko' | 'en'): string {
  const rounded = Math.round(amount)
  if (lang === 'ko') {
    return `${rounded.toLocaleString('ko-KR')}원`
  }
  return `₩${rounded.toLocaleString('en-US')}`
}

export function formatFxLine(
  _code: FxCode,
  symbol: string,
  krwPerUnit: number,
  lang: 'ko' | 'en',
): string {
  const krw = formatKrw(krwPerUnit, lang)
  if (lang === 'ko') return `1 ${symbol} ≈ ${krw}`
  return `1 ${symbol} ≈ ${krw}`
}
