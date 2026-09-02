const SERVICES = [
  {
    title: 'Custom Software',
    description:
      'Tailored applications built for your specific needs. From internal tools to customer-facing solutions, we build what your business actually runs on.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M8 9l-4 3 4 3" />
        <path d="M16 9l4 3-4 3" />
        <path d="M14 5l-4 14" />
      </svg>
    ),
  },
  {
    title: 'System Integration',
    description:
      'Connect your existing systems and streamline workflows. No more manual data entry or disconnected tools — your data moves where it needs to on its own.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="5" cy="12" r="2.5" />
        <circle cx="19" cy="6" r="2.5" />
        <circle cx="19" cy="18" r="2.5" />
        <path d="M7.3 11l9.4-4M7.3 13l9.4 4" />
      </svg>
    ),
  },
  {
    title: 'Security & Field Service Software',
    description:
      'Our specialty. Monitoring, dispatch, and video tools shaped by running real camera fleets and service crews — not by guessing what the field needs.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="6" width="13" height="10" rx="2" />
        <path d="M16 10l5-2v8l-5-2z" />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <span className="eyebrow">Services</span>
        <h2 className="section-heading">Need something that doesn't exist yet?</h2>
        <p className="section-sub">
          Beyond our products, we take on custom work for businesses that have outgrown spreadsheets and
          off-the-shelf tools.
        </p>

        <div className="services-grid" style={{ display: 'grid', gap: '1.25rem', marginTop: '2.75rem' }}>
          {SERVICES.map((s) => (
            <div key={s.title} className="card card-hover" style={{ padding: '1.75rem' }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, var(--brand-light), var(--brand))',
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem',
                }}
              >
                {s.icon}
              </div>
              <h3 style={{ fontSize: '1.1rem', fontWeight: 700, marginBottom: '0.6rem' }}>{s.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: 1.65 }}>{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
