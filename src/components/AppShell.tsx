import { NavLink, Outlet } from 'react-router-dom'
import { useLanguage } from '../contexts/LanguageContext'
import { t } from '../i18n/ui'

const ADMIN_EMAIL = 'kajeken@gmail.com'

export function AppShell() {
  const { lang } = useLanguage()

  return (
    <div className="app-root">
      <div className="phone-shell">
        <div className="phone-status" />
        <div className="phone-content">
          <Outlet />
        </div>
        <footer className="admin-footer">
          <p className="admin-footer-line">
            admin:{' '}
            <a
              className="admin-footer-email"
              href={`mailto:${ADMIN_EMAIL}?subject=${encodeURIComponent('My Vacation Plan 문의/건의')}`}
            >
              {ADMIN_EMAIL}
            </a>
          </p>
          <p className="admin-footer-note">{t('adminContactNote', lang)}</p>
        </footer>
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
