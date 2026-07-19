export type YesNo = '' | 'yes' | 'no'

export interface FlightInfo {
  date: string
  airport: string
  terminal: string
  airline: string
  flightNumber: string
  boardingTime: string
}

export interface PassportInfo {
  ready: YesNo
  number: string
  expiry: string
  notes: string
}

export interface EurailInfo {
  reserved: YesNo
  notes: string
}

export interface TravelerInfo {
  id: string
  /** Optional display name */
  name: string
  passport: PassportInfo
  eurail: EurailInfo
  outbound: FlightInfo
  inbound: FlightInfo
}

export interface CityTrip {
  id: string
  cityId: string
  cityName: string
  fromDate: string
  toDate: string
  lodging: string
  transport: string
}

export interface TravelChecklist {
  travelerCount: number
  travelers: TravelerInfo[]
  cities: CityTrip[]
}

export const EURAIL_APP_URL =
  'https://apps.apple.com/app/rail-planner-eurail-interrail/id573078297'

export const MAX_TRAVELERS = 8

export function emptyFlight(): FlightInfo {
  return {
    date: '',
    airport: '',
    terminal: '',
    airline: '',
    flightNumber: '',
    boardingTime: '',
  }
}

export function emptyPassport(): PassportInfo {
  return { ready: '', number: '', expiry: '', notes: '' }
}

export function emptyEurail(): EurailInfo {
  return { reserved: '', notes: '' }
}

export function emptyTraveler(index: number): TravelerInfo {
  return {
    id: `traveler-${Date.now()}-${index}-${Math.random().toString(36).slice(2, 7)}`,
    name: '',
    passport: emptyPassport(),
    eurail: emptyEurail(),
    outbound: emptyFlight(),
    inbound: emptyFlight(),
  }
}

export function emptyCityTrip(index: number): CityTrip {
  return {
    id: `city-${Date.now()}-${index}`,
    cityId: '',
    cityName: '',
    fromDate: '',
    toDate: '',
    lodging: '',
    transport: '',
  }
}

export function resizeTravelers(
  current: TravelerInfo[],
  count: number,
): TravelerInfo[] {
  const n = Math.min(MAX_TRAVELERS, Math.max(1, count))
  if (current.length === n) return current
  if (current.length > n) return current.slice(0, n)
  const next = [...current]
  while (next.length < n) next.push(emptyTraveler(next.length + 1))
  return next
}

export function defaultChecklist(): TravelChecklist {
  return {
    travelerCount: 1,
    travelers: [emptyTraveler(1)],
    cities: [emptyCityTrip(1)],
  }
}
