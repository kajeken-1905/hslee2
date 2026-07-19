import { useId, useState, type ReactNode } from 'react'

export function ChecklistSection({
  step,
  title,
  children,
  collapsible = false,
  defaultOpen = true,
  summary,
  nested = false,
}: {
  step: number | string
  title: string
  children: ReactNode
  /** When true, body is hidden until the header is clicked */
  collapsible?: boolean
  defaultOpen?: boolean
  /** Extra text shown in the header when collapsed (e.g. traveler name) */
  summary?: string
  /** Nested under a parent section (e.g. 1-1 traveler) */
  nested?: boolean
}) {
  const [open, setOpen] = useState(defaultOpen)
  const bodyId = useId()
  const stepLabel = String(step)
  const stepClass =
    stepLabel.length > 1 ? 'checklist-step checklist-step--wide' : 'checklist-step'
  const sectionClass = nested
    ? `checklist-section checklist-section--nested${collapsible ? ' checklist-section--fold' : ''}${collapsible && open ? ' is-open' : ''}`
    : `checklist-section${collapsible ? ' checklist-section--fold' : ''}${collapsible && open ? ' is-open' : ''}`

  if (!collapsible) {
    return (
      <section className={sectionClass}>
        <header className="checklist-section-head">
          <span className={stepClass}>{stepLabel}</span>
          <h2>{title}</h2>
        </header>
        <div className="checklist-section-body">{children}</div>
      </section>
    )
  }

  return (
    <section className={sectionClass}>
      <button
        type="button"
        className="checklist-section-toggle"
        aria-expanded={open}
        aria-controls={bodyId}
        onClick={() => setOpen((v) => !v)}
      >
        <span className={stepClass}>{stepLabel}</span>
        <span className="checklist-section-toggle-text">
          <span className="checklist-section-toggle-title">{title}</span>
          {!open && summary ? (
            <span className="checklist-section-toggle-summary">{summary}</span>
          ) : null}
        </span>
        <span className="checklist-section-chevron" aria-hidden>
          {open ? '▴' : '▾'}
        </span>
      </button>
      {open ? (
        <div id={bodyId} className="checklist-section-body">
          {children}
        </div>
      ) : null}
    </section>
  )
}

export function Field({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <label className="checklist-field">
      <span className="checklist-field-label">{label}</span>
      {children}
    </label>
  )
}
