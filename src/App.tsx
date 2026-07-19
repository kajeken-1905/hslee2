import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { LanguageProvider } from './contexts/LanguageContext'
import { AppShell } from './components/AppShell'
import { HomePage } from './pages/HomePage'
import { CountriesPage } from './pages/CountriesPage'
import { CountryPage } from './pages/CountryPage'
import { CityPage } from './pages/CityPage'
import { PlacePage } from './pages/PlacePage'
import './styles/tokens.css'
import './styles/app.css'

export default function App() {
  return (
    <LanguageProvider>
      <BrowserRouter basename="/hslee2">
        <Routes>
          <Route element={<AppShell />}>
            <Route index element={<HomePage />} />
            <Route path="countries" element={<CountriesPage />} />
            <Route path="country/:countryId" element={<CountryPage />} />
            <Route path="city/:cityId" element={<CityPage />} />
            <Route path="place/:placeId" element={<PlacePage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  )
}
