import {
  ADDRESS_LINE_1,
  ADDRESS_LINE_2,
  CONTACT_FORM_ACTION,
  SUPPORT_EMAIL,
  SUPPORT_PHONE_DISPLAY,
  SUPPORT_PHONE_HREF,
} from '../constants';

export function Contact() {
  return (
    <section id="contact" className="section section-alt">
      <div className="container contact-grid" style={{ display: 'grid', gap: '3rem', alignItems: 'start' }}>
        <div>
          <span className="eyebrow">Contact</span>
          <h2 className="section-heading">Let's talk</h2>
          <p className="section-sub" style={{ marginBottom: '2rem' }}>
            Have a project in mind, or want a walkthrough of one of our products? We'd love to hear from you.
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem', fontSize: '15px' }}>
            <ContactRow label="Email">
              <a className="nav-link" href={`mailto:${SUPPORT_EMAIL}`} style={{ color: 'var(--brand)', fontWeight: 600 }}>{SUPPORT_EMAIL}</a>
            </ContactRow>
            <ContactRow label="Phone">
              <a className="nav-link" href={SUPPORT_PHONE_HREF} style={{ color: 'var(--brand)', fontWeight: 600 }}>{SUPPORT_PHONE_DISPLAY}</a>
            </ContactRow>
            <ContactRow label="Office">
              <span style={{ color: 'var(--muted)' }}>
                {ADDRESS_LINE_1}
                <br />
                {ADDRESS_LINE_2}
              </span>
            </ContactRow>
          </div>
        </div>

        <form
          className="card"
          action={CONTACT_FORM_ACTION}
          method="POST"
          style={{ padding: '2rem', display: 'flex', flexDirection: 'column', gap: '1.1rem' }}
        >
          <div className="field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" type="text" autoComplete="name" required />
          </div>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required />
          </div>
          <div className="field">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" required placeholder="Tell us a little about what you're working on." />
          </div>
          <button type="submit" className="btn btn-primary" style={{ padding: '0.9rem 1.5rem', fontSize: '1rem' }}>
            Send message
          </button>
          <p style={{ fontSize: '12.5px', color: 'var(--muted-light)', textAlign: 'center' }}>
            We typically reply within one business day.
          </p>
        </form>
      </div>
    </section>
  );
}

function ContactRow({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: '0.75rem', alignItems: 'start' }}>
      <span style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--muted-light)', paddingTop: '3px' }}>
        {label}
      </span>
      <div>{children}</div>
    </div>
  );
}
