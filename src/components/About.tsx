const PRINCIPLES = [
  {
    title: 'Simple by design',
    body: 'Every tool we build is designed to be intuitive, reliable, and easy to use — so you can focus on what matters: running your business.',
  },
  {
    title: 'Built from the field',
    body: 'We run our own security and service operations on this software. If it slows down a tech on a ladder, it doesn’t ship.',
  },
  {
    title: 'Reliable and US-hosted',
    body: 'Our cloud products are hosted in the United States, monitored around the clock, and kept lean so they stay fast.',
  },
];

export function About() {
  return (
    <section
      id="about"
      className="section"
      style={{ background: 'linear-gradient(180deg, var(--navy-surface) 0%, #000058 100%)', color: '#fff' }}
    >
      <div className="container about-grid" style={{ display: 'grid', gap: '3rem', alignItems: 'start' }}>
        <div>
          <span className="eyebrow" style={{ color: 'var(--accent)' }}>Why Simplified?</span>
          <h2 className="section-heading" style={{ color: '#fff' }}>Complex doesn't mean better.</h2>
          <p style={{ fontSize: '1.1rem', color: 'rgba(255,255,255,0.78)', lineHeight: 1.7, maxWidth: '520px' }}>
            We believe software should work for you, not the other way around. Simplified Developers is a
            small software company in West Palm Beach, Florida, building tools for the security and
            field-service trades — and for any business that's tired of fighting its own systems.
          </p>
          <a href="#contact" className="btn btn-accent" style={{ marginTop: '1.75rem', padding: '0.85rem 1.6rem' }}>
            Let's talk
          </a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {PRINCIPLES.map((p, i) => (
            <div
              key={p.title}
              style={{
                display: 'flex',
                gap: '1.1rem',
                padding: '1.25rem 1.4rem',
                borderRadius: '14px',
                background: 'rgba(255,255,255,0.06)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <span
                style={{
                  flexShrink: 0,
                  width: '34px',
                  height: '34px',
                  borderRadius: '9px',
                  background: 'var(--accent)',
                  color: '#1a1200',
                  fontWeight: 800,
                  fontSize: '14px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 style={{ fontSize: '1.02rem', fontWeight: 700, marginBottom: '0.35rem' }}>{p.title}</h3>
                <p style={{ fontSize: '14.5px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{p.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
