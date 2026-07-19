import { useEffect, useState } from 'react'
import {
  getDailyRates,
  type DailyRates,
  type FxCode,
} from '../services/exchangeRates'

export function useDailyExchangeRates() {
  const [data, setData] = useState<DailyRates | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let cancelled = false
    setLoading(true)
    getDailyRates()
      .then((rates) => {
        if (!cancelled) {
          setData(rates)
          setError(null)
        }
      })
      .catch(() => {
        if (!cancelled) setError('fx_failed')
      })
      .finally(() => {
        if (!cancelled) setLoading(false)
      })
    return () => {
      cancelled = true
    }
  }, [])

  const getRate = (code: FxCode) => data?.rates[code]

  return { data, loading, error, getRate }
}
