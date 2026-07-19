import type { YesNo } from '../types/checklist'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

export function YesNoSelect({
  value,
  onChange,
  id,
}: {
  value: YesNo
  onChange: (v: YesNo) => void
  id?: string
}) {
  const { lang } = useLanguage()

  return (
    <select
      id={id}
      className="checklist-select"
      value={value}
      onChange={(e) => onChange(e.target.value as YesNo)}
    >
      <option value="">{t('selectPlaceholder', lang)}</option>
      <option value="yes">{t('yes', lang)}</option>
      <option value="no">{t('no', lang)}</option>
    </select>
  )
}
