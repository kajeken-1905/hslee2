import type { CityHighlight } from '../types'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

export function HighlightCard({ highlight }: { highlight: CityHighlight }) {
  const { lang } = useLanguage()

  return (
    <a
      className="highlight-card"
      href={highlight.mapsUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={`${highlight.name[lang]} — ${t('openMaps', lang)}`}
    >
      <div
        className="highlight-card-media"
        style={{ backgroundImage: `url(${highlight.image})` }}
        role="img"
        aria-label={highlight.name[lang]}
      />
      <div className="highlight-card-body">
        <h3>{highlight.name[lang]}</h3>
        <p>{highlight.description[lang]}</p>
        <span className="highlight-card-maps">{t('openMaps', lang)}</span>
      </div>
    </a>
  )
}
