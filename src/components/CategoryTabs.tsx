import { CATEGORIES, type CategoryId } from '../types'
import { useLanguage } from '../contexts/LanguageContext'

const ROW1: CategoryId[] = ['fine_dining', 'korean', 'asian', 'cafe']
const ROW2: CategoryId[] = ['bakery', 'fashion', 'grocery']

export function CategoryTabs({
  value,
  onChange,
}: {
  value: CategoryId
  onChange: (id: CategoryId) => void
}) {
  const { lang } = useLanguage()

  const renderRow = (ids: CategoryId[]) =>
    ids.map((id) => {
      const cat = CATEGORIES.find((c) => c.id === id)
      if (!cat) return null
      return (
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
      )
    })

  return (
    <div className="category-tabs" role="tablist" aria-label="Categories">
      <div className="category-tabs-row">{renderRow(ROW1)}</div>
      <div className="category-tabs-row">{renderRow(ROW2)}</div>
    </div>
  )
}
