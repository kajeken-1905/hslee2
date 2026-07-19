import { useEffect, useState } from 'react'
import {
  defaultChecklist,
  emptyCityTrip,
  emptyEurail,
  emptyFlight,
  emptyPassport,
  emptyTraveler,
  resizeTravelers,
  type CityTrip,
  type EurailInfo,
  type FlightInfo,
  type PassportInfo,
  type TravelChecklist,
  type TravelerInfo,
  MAX_TRAVELERS,
} from '../types/checklist'

const STORAGE_KEY = 'mvp-travel-checklist-v2'

function migrateV1(raw: unknown): TravelChecklist | null {
  if (!raw || typeof raw !== 'object') return null
  const old = raw as Record<string, unknown>
  // v1 shape had passport / eurail / outbound / inbound at root
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
  const cities = Array.isArray(old.cities) && old.cities.length
    ? (old.cities as CityTrip[])
    : [emptyCityTrip(1)]
  return { travelerCount: 1, travelers: [traveler], cities }
}

function load(): TravelChecklist {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (raw) {
      const parsed = JSON.parse(raw) as TravelChecklist
      const count = Math.min(MAX_TRAVELERS, Math.max(1, parsed.travelerCount || 1))
      return {
        travelerCount: count,
        travelers: resizeTravelers(parsed.travelers ?? [], count),
        cities: parsed.cities?.length ? parsed.cities : [emptyCityTrip(1)],
      }
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

  const setTravelerCount = (count: number) => {
    setData((prev) => {
      const n = Math.min(MAX_TRAVELERS, Math.max(1, count))
      return {
        ...prev,
        travelerCount: n,
        travelers: resizeTravelers(prev.travelers, n),
      }
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

  const updateCity = (id: string, patch: Partial<CityTrip>) => {
    setData((prev) => ({
      ...prev,
      cities: prev.cities.map((c) => (c.id === id ? { ...c, ...patch } : c)),
    }))
  }

  const addCity = () => {
    setData((prev) => {
      if (prev.cities.length >= 10) return prev
      return { ...prev, cities: [...prev.cities, emptyCityTrip(prev.cities.length + 1)] }
    })
  }

  const removeCity = (id: string) => {
    setData((prev) => {
      if (prev.cities.length <= 1) return prev
      return { ...prev, cities: prev.cities.filter((c) => c.id !== id) }
    })
  }

  const reset = () => setData(defaultChecklist())

  return {
    data,
    setTravelerCount,
    updateTraveler,
    updatePassport,
    updateEurail,
    updateFlight,
    updateCity,
    addCity,
    removeCity,
    reset,
  }
}
