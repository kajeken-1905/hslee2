export type Lang = 'ko' | 'en'

export type CategoryId =
  | 'fine_dining'
  | 'bakery'
  | 'cafe'
  | 'starbucks'
  | 'korean'

export interface Country {
  id: string
  name: { ko: string; en: string }
  /** 해당 나라 공식/공용어로 쓴 국명 */
  nativeName: string
  flag: string
  /** 국기 이미지(SVG) 경로 — 상세 히어로 배경 */
  flagImage: string
  /** 랜드마크 일러스트 배경 이미지 경로 */
  landmarkImage: string
  blurb: { ko: string; en: string }
  /** 인구·면적·수도·화폐 */
  facts: {
    population: { ko: string; en: string }
    area: { ko: string; en: string }
    capital: { ko: string; en: string }
    currency: { ko: string; en: string }
  }
  /** 환율 조회용 ISO 코드 */
  currencyCode: 'GBP' | 'EUR' | 'NOK' | 'SEK' | 'DKK'
  currencySymbol: string
  /** 솅겐 지역 가입 여부 */
  schengen: boolean
  flagColors: {
    primary: string
    secondary: string
    accent: string
    background: string
    text: string
  }
  cityIds: string[]
}

export interface CityHighlight {
  id: string
  name: { ko: string; en: string }
  description: { ko: string; en: string }
  image: string
  mapsUrl: string
}

export interface City {
  id: string
  countryId: string
  name: { ko: string; en: string }
  /** 해당 나라 언어(또는 현지 공식 표기) 도시명 */
  nativeName: string
  blurb: { ko: string; en: string }
  highlights: CityHighlight[]
  /** 도시 시그니처(랜드마크) 배경 이미지 */
  signatureImage: string
}

export interface Place {
  id: string
  cityId: string
  category: CategoryId
  name: string
  description: { ko: string; en: string }
  rating: number
  reviewCount?: number
  address: string
  mapsUrl: string
  lat?: number
  lng?: number
  priceLevel?: string
}

export const CATEGORIES: {
  id: CategoryId
  ko: string
  en: string
}[] = [
  { id: 'fine_dining', ko: '파인 다이닝', en: 'Fine Dining' },
  { id: 'bakery', ko: '베이커리', en: 'Bakery' },
  { id: 'cafe', ko: '카페', en: 'Café' },
  { id: 'starbucks', ko: '스타벅스', en: 'Starbucks' },
  { id: 'korean', ko: '한식당', en: 'Korean' },
]
