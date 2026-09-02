import { useState } from 'react';
import logo from '../assets/logo.jpg';

const NAV = [
  { href: '#products', label: 'Products' },
  { href: '#services', label: 'Services' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 20,
        background: 'rgba(255,255,255,0.92)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid var(--border)',
      }}
    >
      <div
        className="container"
        style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}
      >
        <a href="#top" aria-label="Simplified Developers home" style={{ display: 'flex', alignItems: 'center' }}>
          <img src={logo} alt="Simplified Developers — Software Simplified" className="header-logo" style={{ height: '44px', width: 'auto' }} />
        </a>

        <nav className="desktop-nav" style={{ display: 'flex', alignItems: 'center', gap: '1.75rem', fontSize: '14.5px', fontWeight: 500 }}>
          {NAV.map((n) => (
            <a key={n.href} className="nav-link" href={n.href}>{n.label}</a>
          ))}
          <a href="#contact" className="btn btn-primary" style={{ padding: '0.55rem 1.15rem', fontSize: '14px' }}>
            Get in touch
          </a>
        </nav>

        <button
          className="mobile-menu-btn"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '8px',
            border: '1px solid var(--border)',
            background: '#fff',
            cursor: 'pointer',
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
            {open ? (
              <>
                <path d="M6 6l12 12" />
                <path d="M18 6L6 18" />
              </>
            ) : (
              <>
                <path d="M4 7h16" />
                <path d="M4 12h16" />
                <path d="M4 17h16" />
              </>
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div style={{ borderTop: '1px solid var(--border)', background: '#fff' }}>
          <div className="container" style={{ display: 'flex', flexDirection: 'column', padding: '0.75rem 1.5rem 1.25rem' }}>
            {NAV.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                style={{ padding: '0.75rem 0', fontWeight: 500, fontSize: '15px', borderBottom: '1px solid var(--border)' }}
              >
                {n.label}
              </a>
            ))}
            <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary" style={{ marginTop: '1rem' }}>
              Get in touch
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
