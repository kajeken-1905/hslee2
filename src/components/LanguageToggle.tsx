import { useLanguage } from '../contexts/LanguageContext'

export function LanguageToggle() {
  const { lang, toggle } = useLanguage()
  return (
    <button
      type="button"
      className="lang-toggle"
      onClick={toggle}
      aria-label={lang === 'ko' ? 'Switch to English' : '한국어로 전환'}
    >
      {lang === 'ko' ? 'EN' : 'KO'}
    </button>
  )
}
