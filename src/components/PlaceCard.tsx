import { Link } from 'react-router-dom'
import type { Place } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { RatingStars } from './RatingStars'
import { MapLinks } from './MapLinks'
import { t } from '../i18n/ui'

export function PlaceCard({ place }: { place: Place }) {
  const { lang } = useLanguage()

  return (
    <article className="place-card">
      <div className="row">
        <Link to={`/place/${place.id}`}>
          <h3>{place.name}</h3>
        </Link>
        <RatingStars rating={place.rating} />
      </div>
      <p className="desc">{place.description[lang]}</p>
      <p className="addr">{place.address}</p>
      {place.reviewCount ? (
        <p className="addr">
          {place.reviewCount.toLocaleString()} {t('reviews', lang)}
        </p>
      ) : null}
      <MapLinks url={place.mapsUrl} />
    </article>
  )
}
