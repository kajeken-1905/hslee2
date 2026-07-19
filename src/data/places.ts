import type { CategoryId, Place } from '../types'
import { places as part1 } from './places-part1'
import { placesPart2 } from './places-part2'
import { placesPart3 } from './places-part3'
import { placesPart4 } from './places-part4'
import { placesUKExtra } from './places-uk-extra'
import { placesNLExtra } from './places-nl-extra'
import { placesLUExtra } from './places-lu-extra'
import { placesBEExtra } from './places-be-extra'
import { placesNOExtra } from './places-no-extra'
import { placesFIExtra } from './places-fi-extra'
import { placesSEExtra } from './places-se-extra'
import { placesDKExtra } from './places-dk-extra'
import { sortByRating } from '../utils/sortByRating'

export const places: Place[] = [
  ...part1,
  ...placesPart2,
  ...placesPart3,
  ...placesPart4,
  ...placesUKExtra,
  ...placesNLExtra,
  ...placesLUExtra,
  ...placesBEExtra,
  ...placesNOExtra,
  ...placesFIExtra,
  ...placesSEExtra,
  ...placesDKExtra,
]

export function getPlace(id: string) {
  return places.find((p) => p.id === id)
}

export function getPlacesByCityAndCategory(cityId: string, category: CategoryId) {
  return sortByRating(
    places.filter((p) => p.cityId === cityId && p.category === category),
  )
}
