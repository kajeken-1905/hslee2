import { Link } from 'react-router-dom'
import type { City } from '../types'
import { useLanguage } from '../contexts/LanguageContext'

export function CityListItem({ city }: { city: City }) {
  const { lang } = useLanguage()
  const highlight = city.highlights[0]?.name[lang] ?? ''
  const altNames = [city.name.en, city.nativeName]
    .filter((v, i, arr) => v !== city.name.ko && arr.indexOf(v) === i)
    .join(' · ')

  return (
    <Link
      to={`/city/${city.id}`}
      className="city-item"
      style={{
        backgroundImage: `
          linear-gradient(100deg, rgba(10, 12, 18, 0.78) 0%, rgba(10, 12, 18, 0.35) 55%, rgba(10, 12, 18, 0.55) 100%),
          url(${city.signatureImage})
        `,
      }}
    >
      <strong className="local-title">
        <span className="local-title-main">{city.name.ko}</span>
        {altNames ? <span className="local-title-alt">{altNames}</span> : null}
      </strong>
      <span className="city-highlight">{highlight}</span>
    </Link>
  )
}
