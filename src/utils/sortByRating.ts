import type { Place } from '../types'

export function sortByRating(list: Place[]): Place[] {
  return [...list].sort((a, b) => b.rating - a.rating || (b.reviewCount ?? 0) - (a.reviewCount ?? 0))
}
