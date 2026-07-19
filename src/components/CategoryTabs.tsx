import { CATEGORIES, type CategoryId } from '../types'
import { useLanguage } from '../contexts/LanguageContext'

export function CategoryTabs({
  value,
  onChange,
}: {
  value: CategoryId
  onChange: (id: CategoryId) => void
}) {
  const { lang } = useLanguage()

  return (
    <div className="category-tabs" role="tablist" aria-label="Categories">
      {CATEGORIES.map((cat) => (
        <button
          key={cat.id}
          type="button"
          role="tab"
          aria-selected={value === cat.id}
          className={value === cat.id ? 'active' : undefined}
          onClick={() => onChange(cat.id)}
        >
          {lang === 'ko' ? cat.ko : cat.en}
        </button>
      ))}
    </div>
  )
}
