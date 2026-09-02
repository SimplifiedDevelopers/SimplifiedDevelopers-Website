import ssmShot from '../assets/screenshots/ssm-dashboard.png';
import cctvShot from '../assets/screenshots/cctv-dashboard.jpg';

export function Hero() {
  return (
    <section
      id="top"
      style={{
        padding: '5rem 0 5.5rem',
        background:
          'radial-gradient(900px 420px at 85% -10%, rgba(43,43,214,0.10), transparent 60%), radial-gradient(600px 300px at 0% 100%, rgba(232,163,61,0.12), transparent 60%)',
      }}
    >
      <div className="container hero-grid" style={{ display: 'grid', gap: '3.5rem', alignItems: 'center' }}>
        <div>
          <span className="eyebrow">Software that works for you</span>
          <h1 style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', fontWeight: 800, marginBottom: '1.25rem' }}>
            Software, <span style={{ color: 'var(--brand)' }}>simplified.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'var(--muted)', lineHeight: 1.65, marginBottom: '2rem', maxWidth: '540px' }}>
            We build clean, reliable tools that make your business run smoother — without the complexity.
            Monitoring, dispatch, and video software for security and field-service companies, plus custom
            builds when off-the-shelf doesn't fit.
          </p>
          <div style={{ display: 'flex', gap: '0.875rem', flexWrap: 'wrap' }}>
            <a href="#contact" className="btn btn-primary" style={{ padding: '0.9rem 1.75rem', fontSize: '1rem' }}>
              Get started
            </a>
            <a href="#products" className="btn btn-secondary" style={{ padding: '0.9rem 1.75rem', fontSize: '1rem' }}>
              See what we build
            </a>
          </div>

          <div style={{ display: 'flex', gap: '1.75rem', flexWrap: 'wrap', marginTop: '2.25rem', fontSize: '13.5px', color: 'var(--muted)' }}>
            <Stat label="West Palm Beach, FL" />
            <Stat label="US-hosted cloud apps" />
            <Stat label="Built for the field" />
          </div>
        </div>

        <div style={{ position: 'relative', minHeight: '360px' }}>
          <div
            className="card"
            style={{
              overflow: 'hidden',
              boxShadow: '0 30px 60px -28px rgba(0,0,124,0.45)',
              transform: 'rotate(-1.5deg)',
            }}
          >
            <img src={ssmShot} alt="Simplified Service Manager dashboard with open, scheduled, and in-progress work orders" />
          </div>
          <div
            className="card"
            style={{
              position: 'absolute',
              right: '-6%',
              bottom: '-12%',
              width: '58%',
              overflow: 'hidden',
              boxShadow: '0 24px 50px -24px rgba(0,0,0,0.5)',
              transform: 'rotate(2deg)',
              border: '1px solid rgba(0,0,0,0.25)',
            }}
          >
            <img src={cctvShot} alt="CCTV Health Monitor dashboard showing device status" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ label }: { label: string }) {
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12l5 5L20 7" />
      </svg>
      {label}
    </span>
  );
}
