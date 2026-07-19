import { useId, useState } from 'react'
import { getCountryPhrases } from '../data/phrases'
import { speakText } from '../utils/speak'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

export function PhrasePanel({ countryId }: { countryId: string }) {
  const { lang } = useLanguage()
  const phrases = getCountryPhrases(countryId)
  const [open, setOpen] = useState(false)
  const panelId = useId()

  if (!phrases) return null

  return (
    <div className="phrase-panel">
      <button
        type="button"
        className={`phrase-toggle${open ? ' is-open' : ''}`}
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
      >
        {t('simplePhrases', lang)}
        <span className="phrase-toggle-meta" aria-hidden>
          {phrases.languageLabel[lang]}
          <span className="phrase-toggle-chevron">{open ? '▴' : '▾'}</span>
        </span>
      </button>

      {open ? (
        <ul id={panelId} className="phrase-list">
          {phrases.lines.map((line) => (
            <li key={line.id} className="phrase-row">
              <div className="phrase-text">
                <span className="phrase-ko">{line.ko}</span>
                <span className="phrase-native">{line.native}</span>
              </div>
              <button
                type="button"
                className="phrase-play"
                aria-label={`${t('playPhrase', lang)}: ${line.native}`}
                onClick={() => speakText(line.native, phrases.speechLangs)}
              >
                ▶
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  )
}
