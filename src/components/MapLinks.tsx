import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

export function MapLinks({ url }: { url: string }) {
  const { lang } = useLanguage()
  return (
    <a className="maps-btn" href={url} target="_blank" rel="noreferrer">
      {t('openMaps', lang)}
    </a>
  )
}
