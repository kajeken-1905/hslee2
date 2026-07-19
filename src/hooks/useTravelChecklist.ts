import { useEffect, useState } from 'react'
import { cities } from '../data/cities'
import { countries as countryCatalog } from '../data/countries'
import {
  defaultChecklist,
  emptyCityTrip,
  emptyCountryTrip,
  emptyEurail,
  emptyFlight,
  emptyPassport,
  emptyTraveler,
  resizeTravelers,
  type CityTrip,
  type CountryTrip,
  type EurailInfo,
  type FlightInfo,
  type PassportInfo,
  type TravelChecklist,
  type TravelerInfo,
  MAX_COUNTRIES,
  MAX_CITIES_PER_COUNTRY,
  MAX_TRAVELERS,
} from '../types/checklist'

const STORAGE_KEY = 'mvp-travel-checklist-v3'

function cityToCountryTrip(trip: CityTrip, index: number): CountryTrip {
  const city = cities.find((c) => c.id === trip.cityId)
  const country = city
    ? countryCatalog.find((c) => c.id === city.countryId)
    : undefined
  return {
    id: `country-migrated-${index}-${trip.id}`,
    countryId: country?.id ?? '',
    countryName: country?.name.ko ?? '',
    cities: [trip],
  }
}

/** Group flat v2 city trips by country when possible. */
function migrateCitiesToCountries(flat: CityTrip[]): CountryTrip[] {
  if (!flat.length) return [emptyCountryTrip(1)]
  const groups = new Map<string, CityTrip[]>()
  const order: string[] = []
  for (const trip of flat) {
    const city = cities.find((c) => c.id === trip.cityId)
    const key = city?.countryId || `__orphan-${trip.id}`
    if (!groups.has(key)) {
      groups.set(key, [])
      order.push(key)
    }
    groups.get(key)!.push(trip)
  }
  return order.map((key, i) => {
    const list = groups.get(key)!
    if (key.startsWith('__orphan-')) return cityToCountryTrip(list[0], i)
    const country = countryCatalog.find((c) => c.id === key)
    return {
      id: `country-migrated-${i}-${key}`,
      countryId: country?.id ?? '',
      countryName: country?.name.ko ?? '',
      cities: list.length ? list : [emptyCityTrip(1)],
    }
  })
}

function migrateV1(raw: unknown): TravelChecklist | null {
  if (!raw || typeof raw !== 'object') return null
  const old = raw as Record<string, unknown>
  if (!('passport' in old) || 'travelers' in old) return null
  const traveler = emptyTraveler(1)
  const passport = old.passport as PassportInfo | undefined
  const eurail = old.eurail as EurailInfo | undefined
  const outbound = old.outbound as FlightInfo | undefined
  const inbound = old.inbound as FlightInfo | undefined
  if (passport) traveler.passport = { ...emptyPassport(), ...passport }
  if (eurail) traveler.eurail = { ...emptyEurail(), ...eurail }
  if (outbound) traveler.outbound = { ...emptyFlight(), ...outbound }
  if (inbound) traveler.inbound = { ...emptyFlight(), ...inbound }
  const flat =
    Array.isArray(old.cities) && old.cities.length
      ? (old.cities as CityTrip[])
      : [emptyCityTrip(1)]
  return {
    travelerCount: 1,
    travelers: [traveler],
    countries: migrateCitiesToCountries(flat),
  }
}

function migrateV2(raw: unknown): TravelChecklist | null {
  if (!raw || typeof raw !== 'object') return null
  const old = raw as Record<string, unknown>
  if (!('travelers' in old)) return null
  if ('countries' in old && Array.isArray(old.countries)) {
    return normalize(old as unknown as TravelChecklist)
  }
  const count = Math.min(MAX_TRAVELERS, Math.max(1, Number(old.travelerCount) || 1))
  const flat =
    Array.isArray(old.cities) && old.cities.length
      ? (old.cities as CityTrip[])
      : [emptyCityTrip(1)]
  return {
    travelerCount: count,
    travelers: resizeTravelers((old.travelers as TravelerInfo[]) ?? [], count),
    countries: migrateCitiesToCountries(flat),
  }
}

function normalize(parsed: TravelChecklist): TravelChecklist {
  const count = Math.min(MAX_TRAVELERS, Math.max(1, parsed.travelerCount || 1))
  const countries =
    parsed.countries?.length > 0
      ? parsed.countries.map((ct) => ({
          ...ct,
          cities: ct.cities?.length ? ct.cities : [emptyCityTrip(1)],
        }))
      : [emptyCountryTrip(1)]
  const travelers = resizeTravelers(parsed.travelers ?? [], count).map((tr) => ({
    ...tr,
    name: tr.name ?? '',
    nameEn: tr.nameEn ?? '',
  }))
  return {
    travelerCount: count,
    travelers,
    countries,
  }
}

function load(): TravelChecklist {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) return normalize(JSON.parse(raw) as TravelChecklist)

    const v2 = localStorage.getItem('mvp-travel-checklist-v2')
    if (v2) {
      const migrated = migrateV2(JSON.parse(v2))
      if (migrated) return migrated
    }

    const legacy = localStorage.getItem('mvp-travel-checklist-v1')
    if (legacy) {
      const migrated = migrateV1(JSON.parse(legacy))
      if (migrated) return migrated
    }
    return defaultChecklist()
  } catch {
    return defaultChecklist()
  }
}

export function useTravelChecklist() {
  const [data, setData] = useState<TravelChecklist>(() => load())

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data))
  }, [data])

  const addTraveler = () => {
    setData((prev) => {
      if (prev.travelers.length >= MAX_TRAVELERS) return prev
      const travelers = [...prev.travelers, emptyTraveler(prev.travelers.length + 1)]
      return { ...prev, travelerCount: travelers.length, travelers }
    })
  }

  const removeTraveler = (id: string) => {
    setData((prev) => {
      if (prev.travelers.length <= 1) return prev
      const travelers = prev.travelers.filter((tr) => tr.id !== id)
      return { ...prev, travelerCount: travelers.length, travelers }
    })
  }

  const updateTraveler = (id: string, patch: Partial<TravelerInfo>) => {
    setData((prev) => ({
      ...prev,
      travelers: prev.travelers.map((tr) => (tr.id === id ? { ...tr, ...patch } : tr)),
    }))
  }

  const updatePassport = (id: string, patch: Partial<PassportInfo>) => {
    setData((prev) => ({
      ...prev,
      travelers: prev.travelers.map((tr) =>
        tr.id === id ? { ...tr, passport: { ...tr.passport, ...patch } } : tr,
      ),
    }))
  }

  const updateEurail = (id: string, patch: Partial<EurailInfo>) => {
    setData((prev) => ({
      ...prev,
      travelers: prev.travelers.map((tr) =>
        tr.id === id ? { ...tr, eurail: { ...tr.eurail, ...patch } } : tr,
      ),
    }))
  }

  const updateFlight = (
    id: string,
    key: 'outbound' | 'inbound',
    patch: Partial<FlightInfo>,
  ) => {
    setData((prev) => ({
      ...prev,
      travelers: prev.travelers.map((tr) =>
        tr.id === id ? { ...tr, [key]: { ...tr[key], ...patch } } : tr,
      ),
    }))
  }

  const updateCountry = (id: string, patch: Partial<Omit<CountryTrip, 'cities'>>) => {
    setData((prev) => ({
      ...prev,
      countries: prev.countries.map((c) => (c.id === id ? { ...c, ...patch } : c)),
    }))
  }

  const setCountrySelection = (
    id: string,
    countryId: string,
    countryName: string,
  ) => {
    setData((prev) => ({
      ...prev,
      countries: prev.countries.map((c) => {
        if (c.id !== id) return c
        // Reset city picks that don't belong to the new country
        const allowed = new Set(
          countryCatalog.find((co) => co.id === countryId)?.cityIds ?? [],
        )
        const citiesNext = c.cities.map((city) =>
          city.cityId && !allowed.has(city.cityId)
            ? { ...emptyCityTrip(1), id: city.id }
            : city,
        )
        return {
          ...c,
          countryId,
          countryName,
          cities: citiesNext.length ? citiesNext : [emptyCityTrip(1)],
        }
      }),
    }))
  }

  const updateCityInCountry = (
    countryId: string,
    cityTripId: string,
    patch: Partial<CityTrip>,
  ) => {
    setData((prev) => ({
      ...prev,
      countries: prev.countries.map((c) =>
        c.id !== countryId
          ? c
          : {
              ...c,
              cities: c.cities.map((city) =>
                city.id === cityTripId ? { ...city, ...patch } : city,
              ),
            },
      ),
    }))
  }

  const addCountry = () => {
    setData((prev) => {
      if (prev.countries.length >= MAX_COUNTRIES) return prev
      return {
        ...prev,
        countries: [...prev.countries, emptyCountryTrip(prev.countries.length + 1)],
      }
    })
  }

  const removeCountry = (id: string) => {
    setData((prev) => {
      if (prev.countries.length <= 1) return prev
      return { ...prev, countries: prev.countries.filter((c) => c.id !== id) }
    })
  }

  const addCityToCountry = (countryTripId: string) => {
    setData((prev) => ({
      ...prev,
      countries: prev.countries.map((c) => {
        if (c.id !== countryTripId) return c
        if (c.cities.length >= MAX_CITIES_PER_COUNTRY) return c
        return {
          ...c,
          cities: [...c.cities, emptyCityTrip(c.cities.length + 1)],
        }
      }),
    }))
  }

  const removeCityFromCountry = (countryTripId: string, cityTripId: string) => {
    setData((prev) => ({
      ...prev,
      countries: prev.countries.map((c) => {
        if (c.id !== countryTripId) return c
        if (c.cities.length <= 1) return c
        return { ...c, cities: c.cities.filter((city) => city.id !== cityTripId) }
      }),
    }))
  }

  const reset = () => setData(defaultChecklist())

  return {
    data,
    addTraveler,
    removeTraveler,
    updateTraveler,
    updatePassport,
    updateEurail,
    updateFlight,
    updateCountry,
    setCountrySelection,
    updateCityInCountry,
    addCountry,
    removeCountry,
    addCityToCountry,
    removeCityFromCountry,
    reset,
  }
}
