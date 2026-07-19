import { Link } from 'react-router-dom'
import { countries } from '../data/countries'
import { CountryCard } from '../components/CountryCard'
import { LanguageToggle } from '../components/LanguageToggle'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

export function CountriesPage() {
  const { lang } = useLanguage()

  return (
    <>
      <header className="top-bar">
        <div>
          <Link to="/" className="back-link">
            ← {t('home', lang)}
          </Link>
          <h1>{t('countries', lang)}</h1>
        </div>
        <LanguageToggle />
      </header>
      <div className="country-grid">
        {countries.map((country) => (
          <CountryCard key={country.id} country={country} />
        ))}
      </div>
    </>
  )
}
