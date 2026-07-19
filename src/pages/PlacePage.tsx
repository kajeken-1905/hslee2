import { Link, useParams } from 'react-router-dom'
import { getPlace } from '../data/places'
import { getCity } from '../data/cities'
import { RatingStars } from '../components/RatingStars'
import { MapLinks } from '../components/MapLinks'
import { LanguageToggle } from '../components/LanguageToggle'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import { CATEGORIES } from '../types'

export function PlacePage() {
  const { placeId = '' } = useParams()
  const { lang } = useLanguage()
  const place = getPlace(placeId)
  const city = place ? getCity(place.cityId) : undefined
  const category = CATEGORIES.find((c) => c.id === place?.category)

  if (!place || !city) {
    return (
      <div className="page-header">
        <Link to="/" className="back-link">
          ← {t('home', lang)}
        </Link>
        <h2>Not found</h2>
      </div>
    )
  }

  const mapEmbed =
    place.lat != null && place.lng != null
      ? `https://www.openstreetmap.org/export/embed.html?bbox=${place.lng - 0.01}%2C${place.lat - 0.01}%2C${place.lng + 0.01}%2C${place.lat + 0.01}&layer=mapnik&marker=${place.lat}%2C${place.lng}`
      : null

  return (
    <>
      <header className="page-header">
        <div className="top-bar" style={{ paddingTop: 0 }}>
          <div>
            <Link to={`/city/${city.id}`} className="back-link">
              ← {city.name[lang]}
            </Link>
          </div>
          <LanguageToggle />
        </div>
      </header>

      <article className="place-detail">
        <p className="section-label">
          {category ? (lang === 'ko' ? category.ko : category.en) : ''}
        </p>
        <h2>{place.name}</h2>
        <RatingStars rating={place.rating} />
        {place.reviewCount ? (
          <p className="addr" style={{ marginTop: 6 }}>
            {place.reviewCount.toLocaleString()} {t('reviews', lang)}
          </p>
        ) : null}
        <p className="desc" style={{ marginTop: 12 }}>
          {place.description[lang]}
        </p>
        <p className="addr">{place.address}</p>
        {place.priceLevel ? <p className="addr">{place.priceLevel}</p> : null}
        <MapLinks url={place.mapsUrl} />
      </article>

      {mapEmbed ? (
        <div style={{ marginTop: 14, borderRadius: 16, overflow: 'hidden' }}>
          <iframe
            title="map"
            src={mapEmbed}
            style={{ border: 0, width: '100%', height: 220 }}
            loading="lazy"
          />
        </div>
      ) : null}

      <p className="disclaimer">{t('disclaimer', lang)}</p>
    </>
  )
}
