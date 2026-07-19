import { Link, useParams } from 'react-router-dom'
import { getCountry } from '../data/countries'
import { getCitiesByCountry } from '../data/cities'
import { CityListItem } from '../components/CityListItem'
import { LanguageToggle } from '../components/LanguageToggle'
import { PhrasePanel } from '../components/PhrasePanel'
import { useLanguage } from '../contexts/LanguageContext'
import { useDailyExchangeRates } from '../hooks/useDailyExchangeRates'
import { formatFxLine } from '../services/exchangeRates'
import { t } from '../i18n/ui'

export function CountryPage() {
  const { countryId = '' } = useParams()
  const { lang } = useLanguage()
  const country = getCountry(countryId)
  const cityList = getCitiesByCountry(countryId)
  const { getRate, loading, error, data } = useDailyExchangeRates()

  if (!country) {
    return (
      <div className="page-header">
        <Link to="/" className="back-link">
          ← {t('home', lang)}
        </Link>
        <h2>Not found</h2>
      </div>
    )
  }

  const altNames = [country.name.en, country.nativeName]
    .filter((v, i, arr) => v !== country.name.ko && arr.indexOf(v) === i)
    .join(' · ')

  const rate = getRate(country.currencyCode)
  let rateText = t('exchangeRateLoading', lang)
  if (!loading && error) rateText = t('exchangeRateError', lang)
  if (!loading && rate) {
    rateText = formatFxLine(country.currencyCode, country.currencySymbol, rate, lang)
  }

  const factItems = [
    { label: t('population', lang), value: country.facts.population[lang] },
    { label: t('area', lang), value: country.facts.area[lang] },
    {
      label: t('capital', lang),
      value: country.facts.capital[lang],
      badge: country.schengen ? t('schengenYes', lang) : t('schengenNo', lang),
      badgeTone: country.schengen ? 'yes' : 'no',
    },
    {
      label: t('currency', lang),
      value: country.facts.currency[lang],
      extra: rateText,
      extraLabel: t('exchangeRate', lang),
    },
  ] as const

  return (
    <>
      <section
        className="country-hero country-hero--flag"
        style={{
          backgroundImage: `
            linear-gradient(180deg, rgba(8, 10, 16, 0.78) 0%, rgba(8, 10, 16, 0.55) 45%, rgba(8, 10, 16, 0.82) 100%),
            url(${country.flagImage})
          `,
        }}
      >
        <div className="top-bar" style={{ paddingTop: 0 }}>
          <div>
            <Link to="/" className="back-link">
              ← {t('home', lang)}
            </Link>
            <h2 className="local-title">
              <span className="local-title-main">
                <span className="flag" aria-hidden>
                  {country.flag}
                </span>{' '}
                {country.name.ko}
              </span>
              {altNames ? <span className="local-title-alt">{altNames}</span> : null}
            </h2>
            <p className="blurb">{country.blurb[lang]}</p>
          </div>
          <LanguageToggle />
        </div>

        <div className="country-facts" aria-label={t('countryFacts', lang)}>
          {factItems.map((item) => (
            <div
              className={`country-fact${
                'extra' in item || 'badge' in item ? ' country-fact--wide' : ''
              }`}
              key={item.label}
            >
              <span className="country-fact-label">{item.label}</span>
              <div className="country-fact-main">
                <strong className="country-fact-value">{item.value}</strong>
                {'badge' in item ? (
                  <span
                    className={`schengen-badge schengen-badge--${item.badgeTone}`}
                    title={t('schengen', lang)}
                  >
                    {item.badge}
                  </span>
                ) : null}
              </div>
              {'extra' in item ? (
                <p className="country-fact-rate">
                  <span className="country-fact-rate-label">{item.extraLabel}</span>
                  {item.extra}
                </p>
              ) : null}
            </div>
          ))}
        </div>
        {data ? (
          <p className="fx-note">{t('exchangeRateUpdated', lang)}</p>
        ) : null}
      </section>

      <PhrasePanel countryId={country.id} />

      <p className="section-label">{t('cities', lang)}</p>
      <div className="city-list">
        {cityList.map((city) => (
          <CityListItem key={city.id} city={city} />
        ))}
      </div>
      <p className="phase-note">{t('phaseNote', lang)}</p>
    </>
  )
}
