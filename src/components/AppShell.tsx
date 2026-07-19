import { NavLink, Outlet } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

export function AppShell() {
  const { lang } = useLanguage()

  return (
    <div className="app-root">
      <div className="phone-shell">
        <div className="phone-status" />
        <div className="phone-content">
          <Outlet />
        </div>
        <nav className="bottom-tab" aria-label="Primary">
          <NavLink to="/" end>
            {t('home', lang)}
          </NavLink>
          <NavLink to="/countries">{t('countries', lang)}</NavLink>
        </nav>
      </div>
    </div>
  )
}
