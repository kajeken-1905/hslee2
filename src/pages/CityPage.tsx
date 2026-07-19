import { useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getCity } from '../data/cities'
import { getCountry } from '../data/countries'
import { getPlacesByCityAndCategory } from '../data/places'
import { CategoryTabs } from '../components/CategoryTabs'
import { PlaceCard } from '../components/PlaceCard'
import { HighlightCard } from '../components/HighlightCard'
import { LanguageToggle } from '../components/LanguageToggle'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import type { CategoryId } from '../types'

export function CityPage() {
  const { cityId = '' } = useParams()
  const { lang } = useLanguage()
  const city = getCity(cityId)
  const country = city ? getCountry(city.countryId) : undefined
  const [category, setCategory] = useState<CategoryId>('fine_dining')

  const placeList = useMemo(
    () => (city ? getPlacesByCityAndCategory(city.id, category) : []),
    [city, category],
  )

  if (!city || !country) {
    return (
      <div className="page-header">
        <Link to="/" className="back-link">
          ← {t('home', lang)}
        </Link>
        <h2>Not found</h2>
      </div>
    )
  }

  const alt = [city.name.en, city.nativeName]
    .filter((v, i, arr) => v !== city.name.ko && arr.indexOf(v) === i)
    .join(' · ')

  return (
    <>
      <header className="page-header">
        <div className="top-bar" style={{ paddingTop: 0 }}>
          <div>
            <Link to={`/country/${country.id}`} className="back-link">
              ← {country.name.ko}
              {country.name.en !== country.name.ko ? ` · ${country.name.en}` : ''}
            </Link>
            <h2 className="local-title">
              <span className="local-title-main">{city.name.ko}</span>
              {alt ? <span className="local-title-alt">{alt}</span> : null}
            </h2>
            <p className="blurb">{city.blurb[lang]}</p>
          </div>
          <LanguageToggle />
        </div>
      </header>

      <p className="section-label">{t('highlights', lang)}</p>
      <p className="phase-note" style={{ marginTop: 0 }}>
        {t('highlightHint', lang)}
      </p>
      <div className="highlight-list">
        {city.highlights.map((item) => (
          <HighlightCard key={item.id} highlight={item} />
        ))}
      </div>

      <p className="section-label" style={{ marginTop: 22 }}>
        {t('foodGuide', lang)}
      </p>
      <CategoryTabs value={category} onChange={setCategory} />

      {placeList.length === 0 ? (
        <div className="empty-state">{t('limitedCategory', lang)}</div>
      ) : (
        <>
          {placeList.length < 5 ? (
            <p className="phase-note">{t('limitedCategory', lang)}</p>
          ) : null}
          <div className="place-list">
            {placeList.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        </>
      )}
    </>
  )
}
