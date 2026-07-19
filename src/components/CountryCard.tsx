import { Link } from 'react-router-dom'
import type { Country } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'
import { assetUrl } from '../utils/assetUrl'

export function CountryCard({ country }: { country: Country }) {
  const { lang } = useLanguage()
  const cityCount = country.cityIds.length
  const displayName = country.name[lang]
  const showNative = country.nativeName !== displayName

  return (
    <Link
      to={`/country/${country.id}`}
      className="country-card"
      style={{
        backgroundImage: `
          linear-gradient(160deg, rgba(12, 14, 20, 0.72) 0%, rgba(12, 14, 20, 0.45) 45%, rgba(12, 14, 20, 0.62) 100%),
          url(${assetUrl(country.landmarkImage)})
        `,
      }}
    >
      <div className="name-row">
        <span className="flag" aria-hidden>
          {country.flag}
        </span>
        <h2 className="name">
          {displayName}
          {showNative ? (
            <span className="native-name"> · {country.nativeName}</span>
          ) : null}
        </h2>
      </div>
      <p className="blurb">{country.blurb[lang]}</p>
      <div className="meta">
        {cityCount}
        {t('citiesCount', lang)}
      </div>
    </Link>
  )
}
