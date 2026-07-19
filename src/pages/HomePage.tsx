import { Link } from 'react-router-dom'
import { LanguageToggle } from '../components/LanguageToggle'
import { ChecklistSection, Field } from '../components/ChecklistSection'
import { YesNoSelect } from '../components/YesNoSelect'
import { useLanguage } from '../contexts/LanguageContext'
import { useTravelChecklist } from '../hooks/useTravelChecklist'
import { cities } from '../data/cities'
import { countries } from '../data/countries'
import { t } from '../i18n/ui'
import {
  EURAIL_APP_URL,
  MAX_COUNTRIES,
  MAX_CITIES_PER_COUNTRY,
  MAX_TRAVELERS,
  type CityTrip,
  type CountryTrip,
  type FlightInfo,
  type TravelerInfo,
} from '../types/checklist'

function cityLabel(ko: string, en: string, native: string): string {
  const parts: string[] = []
  for (const part of [ko, en, native]) {
    if (part && !parts.includes(part)) parts.push(part)
  }
  return parts.join(' · ')
}

function FlightFields({
  value,
  onChange,
}: {
  value: FlightInfo
  onChange: (patch: Partial<FlightInfo>) => void
}) {
  const { lang } = useLanguage()

  return (
    <div className="checklist-grid">
      <Field label={t('flightDate', lang)}>
        <input
          type="date"
          className="checklist-input"
          value={value.date}
          onChange={(e) => onChange({ date: e.target.value })}
        />
      </Field>
      <Field label={t('airport', lang)}>
        <input
          className="checklist-input"
          value={value.airport}
          onChange={(e) => onChange({ airport: e.target.value })}
          placeholder={lang === 'ko' ? '예: ICN, AMS' : 'e.g. ICN, AMS'}
        />
      </Field>
      <Field label={t('terminal', lang)}>
        <input
          className="checklist-input"
          value={value.terminal}
          onChange={(e) => onChange({ terminal: e.target.value })}
          placeholder={lang === 'ko' ? '예: T1, T2' : 'e.g. T1, T2'}
        />
      </Field>
      <Field label={t('airline', lang)}>
        <input
          className="checklist-input"
          value={value.airline}
          onChange={(e) => onChange({ airline: e.target.value })}
        />
      </Field>
      <Field label={t('flightNumber', lang)}>
        <input
          className="checklist-input"
          value={value.flightNumber}
          onChange={(e) => onChange({ flightNumber: e.target.value })}
          placeholder={lang === 'ko' ? '예: KE925' : 'e.g. KE925'}
        />
      </Field>
      <Field label={t('boardingTime', lang)}>
        <input
          type="time"
          className="checklist-input"
          value={value.boardingTime}
          onChange={(e) => onChange({ boardingTime: e.target.value })}
        />
      </Field>
    </div>
  )
}

function TravelerBlock({
  traveler,
  index,
  canRemove,
  onName,
  onPassport,
  onEurail,
  onFlight,
  onRemove,
}: {
  traveler: TravelerInfo
  index: number
  canRemove: boolean
  onName: (name: string) => void
  onPassport: (patch: Partial<TravelerInfo['passport']>) => void
  onEurail: (patch: Partial<TravelerInfo['eurail']>) => void
  onFlight: (key: 'outbound' | 'inbound', patch: Partial<FlightInfo>) => void
  onRemove: () => void
}) {
  const { lang } = useLanguage()
  const n = index + 1
  const baseTitle = `${t('traveler', lang)} ${n}`
  const title = traveler.name.trim()
    ? `${baseTitle}  ${traveler.name.trim()}`
    : baseTitle

  return (
    <ChecklistSection
      step={`1-${n})`}
      title={title}
      nested
      collapsible
      defaultOpen={false}
      summary={traveler.name.trim() || undefined}
    >
      <div className="checklist-grid">
        <Field label={t('travelerNameKo', lang)}>
          <input
            className="checklist-input"
            value={traveler.name}
            onChange={(e) => onName(e.target.value)}
            placeholder={lang === 'ko' ? '예: 김민수' : 'Korean name'}
          />
        </Field>
      </div>

      <div className="traveler-subblock">
        <h3 className="traveler-subtitle">{t('passportInfo', lang)}</h3>
        <div className="checklist-grid">
          <Field label={t('prepared', lang)}>
            <YesNoSelect
              value={traveler.passport.ready}
              onChange={(ready) => onPassport({ ready })}
            />
          </Field>
          <Field label={t('passportNumber', lang)}>
            <input
              className="checklist-input"
              value={traveler.passport.number}
              onChange={(e) => onPassport({ number: e.target.value })}
              autoComplete="off"
            />
          </Field>
          <Field label={t('passportExpiry', lang)}>
            <input
              type="date"
              className="checklist-input"
              value={traveler.passport.expiry}
              onChange={(e) => onPassport({ expiry: e.target.value })}
            />
          </Field>
          <Field label={t('notes', lang)}>
            <input
              className="checklist-input"
              value={traveler.passport.notes}
              onChange={(e) => onPassport({ notes: e.target.value })}
            />
          </Field>
        </div>
      </div>

      <div className="traveler-subblock">
        <h3 className="traveler-subtitle">{t('eurailInfo', lang)}</h3>
        <div className="checklist-grid">
          <Field label={t('eurailReserved', lang)}>
            <YesNoSelect
              value={traveler.eurail.reserved}
              onChange={(reserved) => onEurail({ reserved })}
            />
          </Field>
          <Field label={t('notes', lang)}>
            <input
              className="checklist-input"
              value={traveler.eurail.notes}
              onChange={(e) => onEurail({ notes: e.target.value })}
            />
          </Field>
        </div>
        <a
          className="checklist-shortcut"
          href={EURAIL_APP_URL}
          target="_blank"
          rel="noreferrer"
        >
          {t('openEurailApp', lang)}
        </a>
      </div>

      <div className="traveler-subblock">
        <h3 className="traveler-subtitle">{t('outboundFlight', lang)}</h3>
        <FlightFields
          value={traveler.outbound}
          onChange={(patch) => onFlight('outbound', patch)}
        />
      </div>

      <div className="traveler-subblock">
        <h3 className="traveler-subtitle">{t('inboundFlight', lang)}</h3>
        <FlightFields
          value={traveler.inbound}
          onChange={(patch) => onFlight('inbound', patch)}
        />
      </div>

      {canRemove ? (
        <button type="button" className="checklist-remove" onClick={onRemove}>
          {t('removeTraveler', lang)}
        </button>
      ) : null}
    </ChecklistSection>
  )
}

function CityTripFields({
  trip,
  index,
  countryId,
  cityOptions,
  canRemove,
  onChange,
  onRemove,
}: {
  trip: CityTrip
  index: number
  countryId: string
  cityOptions: { id: string; label: string }[]
  canRemove: boolean
  onChange: (patch: Partial<CityTrip>) => void
  onRemove: () => void
}) {
  const { lang } = useLanguage()
  const n = index + 1
  const selected = cityOptions.find((o) => o.id === trip.cityId)
  const baseTitle = `${t('city', lang)} ${n}`
  const title = trip.cityName.trim()
    ? `${baseTitle}  ${trip.cityName.trim()}`
    : selected
      ? `${baseTitle}  ${selected.label.split(' · ')[0]}`
      : baseTitle
  const summaryParts = [trip.fromDate, trip.toDate].filter(Boolean)
  const summary =
    summaryParts.length > 0
      ? summaryParts.join(' → ')
      : trip.cityName.trim() || undefined

  return (
    <ChecklistSection
      step={n}
      title={title}
      nested
      collapsible
      defaultOpen={false}
      summary={summary}
    >
      <div className="checklist-grid">
        <Field label={t('city', lang)}>
          <select
            className="checklist-select"
            value={trip.cityId}
            disabled={!countryId}
            onChange={(e) => {
              const cityId = e.target.value
              const found = cities.find((c) => c.id === cityId)
              onChange({
                cityId,
                cityName: found ? found.name[lang] : '',
              })
            }}
          >
            <option value="">
              {countryId ? t('selectCity', lang) : t('selectCountryFirst', lang)}
            </option>
            {cityOptions.map((opt) => (
              <option key={opt.id} value={opt.id}>
                {opt.label}
              </option>
            ))}
          </select>
        </Field>
        {trip.cityId ? (
          <Link
            to={`/city/${trip.cityId}`}
            className="checklist-shortcut checklist-shortcut--inline"
            aria-label={t('shortcutCity', lang)}
          >
            {t('shortcut', lang)}
          </Link>
        ) : null}
        <Field label={t('fromDate', lang)}>
          <input
            type="date"
            className="checklist-input"
            value={trip.fromDate}
            onChange={(e) => onChange({ fromDate: e.target.value })}
          />
        </Field>
        <Field label={t('toDate', lang)}>
          <input
            type="date"
            className="checklist-input"
            value={trip.toDate}
            onChange={(e) => onChange({ toDate: e.target.value })}
          />
        </Field>
        <Field label={t('lodging', lang)}>
          <input
            className="checklist-input"
            value={trip.lodging}
            onChange={(e) => onChange({ lodging: e.target.value })}
            placeholder={lang === 'ko' ? '호텔 / 에어비앤비' : 'Hotel / Airbnb'}
          />
        </Field>
        <Field label={t('cityTransport', lang)}>
          <input
            className="checklist-input"
            value={trip.transport}
            onChange={(e) => onChange({ transport: e.target.value })}
            placeholder={
              lang === 'ko' ? '기차 / 항공 / 버스' : 'Train / flight / bus'
            }
          />
        </Field>
      </div>
      {canRemove ? (
        <button type="button" className="checklist-remove" onClick={onRemove}>
          {t('removeCity', lang)}
        </button>
      ) : null}
    </ChecklistSection>
  )
}

function CountryTripBlock({
  trip,
  index,
  onSelectCountry,
  onUpdateCity,
  onAddCity,
  onRemoveCity,
  onRemoveCountry,
  canRemoveCountry,
}: {
  trip: CountryTrip
  index: number
  onSelectCountry: (countryId: string, countryName: string) => void
  onUpdateCity: (cityTripId: string, patch: Partial<CityTrip>) => void
  onAddCity: () => void
  onRemoveCity: (cityTripId: string) => void
  onRemoveCountry: () => void
  canRemoveCountry: boolean
}) {
  const { lang } = useLanguage()
  const step = index + 2
  const baseTitle = `${t('travelCountry', lang)} ${index + 1}`
  const title = trip.countryName.trim()
    ? `${baseTitle}  ${trip.countryName.trim()}`
    : baseTitle
  const cityOptions = cities
    .filter((c) => c.countryId === trip.countryId)
    .map((c) => ({
      id: c.id,
      label: cityLabel(c.name.ko, c.name.en, c.nativeName),
    }))
  const citySummary = trip.cities
    .map((c) => c.cityName.trim())
    .filter(Boolean)
    .join(', ')

  return (
    <ChecklistSection
      step={step}
      title={title}
      collapsible
      defaultOpen={false}
      summary={citySummary || trip.countryName.trim() || undefined}
    >
      <div className="checklist-grid">
        <Field label={t('country', lang)}>
          <select
            className="checklist-select"
            value={trip.countryId}
            onChange={(e) => {
              const countryId = e.target.value
              const found = countries.find((c) => c.id === countryId)
              onSelectCountry(countryId, found ? found.name[lang] : '')
            }}
          >
            <option value="">{t('selectCountry', lang)}</option>
            {countries.map((c) => (
              <option key={c.id} value={c.id}>
                {c.name.ko}
                {c.name.en !== c.name.ko ? ` · ${c.name.en}` : ''}
              </option>
            ))}
          </select>
        </Field>
        {trip.countryId ? (
          <Link
            to={`/country/${trip.countryId}`}
            className="checklist-shortcut checklist-shortcut--inline"
            aria-label={t('shortcutCountry', lang)}
          >
            {t('shortcut', lang)}
          </Link>
        ) : null}
      </div>

      <div className="country-city-tree">
        {trip.cities.map((cityTrip, cityIndex) => (
          <CityTripFields
            key={cityTrip.id}
            trip={cityTrip}
            index={cityIndex}
            countryId={trip.countryId}
            cityOptions={cityOptions}
            canRemove={trip.cities.length > 1}
            onChange={(patch) => onUpdateCity(cityTrip.id, patch)}
            onRemove={() => onRemoveCity(cityTrip.id)}
          />
        ))}
      </div>

      <button
        type="button"
        className="checklist-add checklist-add--ghost"
        onClick={onAddCity}
        disabled={!trip.countryId || trip.cities.length >= MAX_CITIES_PER_COUNTRY}
      >
        + {t('addCityUnderCountry', lang)}
      </button>

      {canRemoveCountry ? (
        <button type="button" className="checklist-remove" onClick={onRemoveCountry}>
          {t('removeCountry', lang)}
        </button>
      ) : null}
    </ChecklistSection>
  )
}

export function HomePage() {
  const { lang } = useLanguage()
  const {
    data,
    addTraveler,
    removeTraveler,
    updateTraveler,
    updatePassport,
    updateEurail,
    updateFlight,
    setCountrySelection,
    updateCityInCountry,
    addCountry,
    removeCountry,
    addCityToCountry,
    removeCityFromCountry,
    reset,
  } = useTravelChecklist()

  return (
    <>
      <header className="top-bar">
        <div>
          <h1>{t('appTitle', lang)}</h1>
          <p>{t('checklistSubtitle', lang)}</p>
        </div>
        <LanguageToggle />
      </header>

      <p className="phase-note">{t('checklistHint', lang)}</p>

      <div className="checklist">
        <ChecklistSection
          step={1}
          title={t('travelerCount', lang)}
          collapsible
          defaultOpen={false}
          summary={
            data.travelers.length > 0
              ? data.travelers
                  .map((tr, i) =>
                    tr.name.trim()
                      ? `${t('traveler', lang)} ${i + 1} ${tr.name.trim()}`
                      : `${t('traveler', lang)} ${i + 1}`,
                  )
                  .join(', ')
              : undefined
          }
        >
          <div className="traveler-tree">
            {data.travelers.map((traveler, index) => (
              <TravelerBlock
                key={traveler.id}
                traveler={traveler}
                index={index}
                canRemove={data.travelers.length > 1}
                onName={(name) => updateTraveler(traveler.id, { name })}
                onPassport={(patch) => updatePassport(traveler.id, patch)}
                onEurail={(patch) => updateEurail(traveler.id, patch)}
                onFlight={(key, patch) => updateFlight(traveler.id, key, patch)}
                onRemove={() => removeTraveler(traveler.id)}
              />
            ))}
          </div>

          <button
            type="button"
            className="checklist-add checklist-add--ghost"
            onClick={addTraveler}
            disabled={data.travelers.length >= MAX_TRAVELERS}
          >
            + {t('addTraveler', lang)}
          </button>
        </ChecklistSection>

        {data.countries.map((countryTrip, index) => (
          <CountryTripBlock
            key={countryTrip.id}
            trip={countryTrip}
            index={index}
            onSelectCountry={(countryId, countryName) =>
              setCountrySelection(countryTrip.id, countryId, countryName)
            }
            onUpdateCity={(cityTripId, patch) =>
              updateCityInCountry(countryTrip.id, cityTripId, patch)
            }
            onAddCity={() => addCityToCountry(countryTrip.id)}
            onRemoveCity={(cityTripId) =>
              removeCityFromCountry(countryTrip.id, cityTripId)
            }
            onRemoveCountry={() => removeCountry(countryTrip.id)}
            canRemoveCountry={data.countries.length > 1}
          />
        ))}

        <div className="checklist-actions">
          <button
            type="button"
            className="checklist-add"
            onClick={addCountry}
            disabled={data.countries.length >= MAX_COUNTRIES}
          >
            + {t('addCountry', lang)}
          </button>
          <button type="button" className="checklist-reset" onClick={reset}>
            {t('resetChecklist', lang)}
          </button>
        </div>
      </div>
    </>
  )
}
