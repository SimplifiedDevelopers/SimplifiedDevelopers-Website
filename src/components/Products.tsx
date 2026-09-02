import { CCTV_SITE_URL, SSM_SITE_URL } from '../constants';
import cctvShot from '../assets/screenshots/cctv-dashboard.jpg';
import ssmShot from '../assets/screenshots/ssm-dispatch.png';

type Product = {
  name: string;
  tag: string;
  description: string;
  bullets: string[];
  href: string;
  image: string;
  alt: string;
};

const PRODUCTS: Product[] = [
  {
    name: 'CCTV Health Monitor',
    tag: 'Cloud app',
    description:
      'Real-time monitoring software for security systems. Keep track of all your devices, cameras, and health status in one dashboard.',
    bullets: ['Multi-vendor DVR, NVR, and camera support', 'Alerts when a device or camera goes offline', 'Site-by-site status for your whole fleet'],
    href: CCTV_SITE_URL,
    image: cctvShot,
    alt: 'CCTV Health Monitor dashboard',
  },
  {
    name: 'Simplified Service Manager',
    tag: 'Cloud app',
    description:
      'Dispatch technicians, schedule appointments, and follow every work order from open to close-out — with photos, signatures, and time tracking captured from the field.',
    bullets: ['Dispatch board and calendar scheduling', 'Technician mobile workflow with GPS', 'Work order history, notes, and time logs'],
    href: SSM_SITE_URL,
    image: ssmShot,
    alt: 'Simplified Service Manager dispatch board',
  },
];

const TOOLS = [
  {
    name: 'Simplified VMS',
    description:
      'One lightweight desktop client for viewing live video and playback across Uniview, TVT, Dahua, and Hikvision recorders — instead of juggling four vendor apps.',
  },
  {
    name: 'Simplified IP Tool',
    description:
      'A network scanner that finds DVRs, NVRs, and IP cameras on a site and identifies them by brand, so installs and service calls start with a clear picture.',
  },
];

export function Products() {
  return (
    <section id="products" className="section section-alt">
      <div className="container">
        <span className="eyebrow">What we build</span>
        <h2 className="section-heading">Practical solutions for real-world problems</h2>
        <p className="section-sub">
          Products we run in production every day — built for security integrators and field-service companies,
          and available to yours.
        </p>

        <div className="products-grid" style={{ display: 'grid', gap: '1.5rem', marginTop: '2.75rem' }}>
          {PRODUCTS.map((p) => (
            <article key={p.name} className="card card-hover" style={{ overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <div className="brand-tile" style={{ padding: '1.5rem 1.5rem 0', borderBottom: '1px solid var(--border)' }}>
                <div style={{ borderRadius: '10px 10px 0 0', overflow: 'hidden', boxShadow: '0 -8px 30px rgba(0,0,0,0.3)' }}>
                  <img src={p.image} alt={p.alt} style={{ aspectRatio: '16 / 9', objectFit: 'cover', objectPosition: 'top' }} />
                </div>
              </div>
              <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.875rem', flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.75rem' }}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{p.name}</h3>
                  <span className="pill pill-navy">{p.tag}</span>
                </div>
                <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6 }}>{p.description}</p>
                <ul style={{ margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', fontSize: '14px', color: 'var(--text)' }}>
                  {p.bullets.map((b) => (
                    <li key={b} style={{ display: 'flex', gap: '0.5rem', alignItems: 'flex-start' }}>
                      <span style={{ color: 'var(--accent)', fontWeight: 800, lineHeight: 1.4 }}>•</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 'auto', paddingTop: '0.5rem' }}>
                  <a href={p.href} target="_blank" rel="noopener" className="btn btn-primary" style={{ fontSize: '14px', padding: '0.6rem 1.2rem' }}>
                    Visit {p.name}
                    <Arrow />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div style={{ marginTop: '3rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.25rem' }}>
            <h3 style={{ fontSize: '1.15rem', fontWeight: 800 }}>Free tools for installers</h3>
            <span className="pill pill-gold">Desktop</span>
          </div>
          <div className="tools-grid" style={{ display: 'grid', gap: '1.25rem' }}>
            {TOOLS.map((t) => (
              <div key={t.name} className="card card-hover" style={{ padding: '1.5rem' }}>
                <h4 style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.5rem' }}>{t.name}</h4>
                <p style={{ color: 'var(--muted)', fontSize: '14.5px', lineHeight: 1.6, marginBottom: '0.9rem' }}>{t.description}</p>
                <a href="#contact" style={{ fontSize: '14px', fontWeight: 600, color: 'var(--brand)', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                  Request access <Arrow />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Arrow() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" />
      <path d="M13 6l6 6-6 6" />
    </svg>
  );
}
