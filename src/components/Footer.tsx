import logo from '../assets/logo.jpg';
import { ADDRESS_LINE_1, ADDRESS_LINE_2, CCTV_SITE_URL, SSM_SITE_URL, SUPPORT_EMAIL, SUPPORT_PHONE_DISPLAY, SUPPORT_PHONE_HREF } from '../constants';

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '3rem 0 2rem' }}>
      <div
        className="container"
        style={{ display: 'flex', flexWrap: 'wrap', gap: '2.5rem', justifyContent: 'space-between', alignItems: 'flex-start' }}
      >
        <div style={{ maxWidth: '320px' }}>
          <a href="#top" style={{ display: 'inline-block', marginBottom: '0.9rem' }}>
            <img src={logo} alt="Simplified Developers" style={{ height: '40px', width: 'auto' }} />
          </a>
          <p style={{ fontSize: '13.5px', color: 'var(--muted)', lineHeight: 1.6 }}>
            Practical software for security and field-service companies, built in West Palm Beach, Florida.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '14px' }}>
          <span style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Products</span>
          <a className="nav-link" href={CCTV_SITE_URL} target="_blank" rel="noopener">CCTV Health Monitor</a>
          <a className="nav-link" href={SSM_SITE_URL} target="_blank" rel="noopener">Simplified Service Manager</a>
          <a className="nav-link" href="#products">Simplified VMS</a>
          <a className="nav-link" href="#products">Simplified IP Tool</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '14px' }}>
          <span style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Company</span>
          <a className="nav-link" href="#services">Services</a>
          <a className="nav-link" href="#about">About</a>
          <a className="nav-link" href="#contact">Contact</a>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '14px' }}>
          <span style={{ fontWeight: 700, marginBottom: '0.25rem' }}>Reach us</span>
          <a className="nav-link" href={`mailto:${SUPPORT_EMAIL}`}>{SUPPORT_EMAIL}</a>
          <a className="nav-link" href={SUPPORT_PHONE_HREF}>{SUPPORT_PHONE_DISPLAY}</a>
          <span style={{ color: 'var(--muted)' }}>
            {ADDRESS_LINE_1}
            <br />
            {ADDRESS_LINE_2}
          </span>
        </div>
      </div>

      <div className="container" style={{ marginTop: '2.5rem', paddingTop: '1.25rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '0.5rem' }}>
        <p style={{ fontSize: '13px', color: 'var(--muted-light)' }}>
          &copy; {new Date().getFullYear()} Simplified Developers. All rights reserved.
        </p>
        <p style={{ fontSize: '13px', color: 'var(--accent-dark)', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
          Software Simplified
        </p>
      </div>
    </footer>
  );
}
