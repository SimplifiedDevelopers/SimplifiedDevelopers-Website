import mark from '../assets/logo-mark.jpg';

type Props = { size?: number };

/**
 * Logo lockup: the icon tile is the real logo asset; the wordmark and tagline are
 * rendered as text so the tagline stays legible at header sizes.
 * Colors match the logo (navy #15147c, gray #80838d, orange #dba549).
 */
export function Logo({ size = 52 }: Props) {
  const s = size / 52; // scale factor relative to the default lockup
  return (
    <span style={{ display: 'inline-flex', alignItems: 'center', gap: `${12 * s}px` }}>
      <img src={mark} alt="" style={{ width: `${size}px`, height: `${size}px`, borderRadius: `${11 * s}px` }} />
      <span style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
        <span style={{ fontSize: `${19 * s}px`, fontWeight: 800, color: 'var(--navy)', letterSpacing: '-0.02em' }}>
          Simplified
        </span>
        <span style={{ fontSize: `${15 * s}px`, fontWeight: 400, color: '#6b6f7a', marginTop: `${2 * s}px` }}>
          Developers
        </span>
        <span
          style={{
            fontSize: `${9.5 * s}px`,
            fontWeight: 700,
            color: 'var(--accent)',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            marginTop: `${5 * s}px`,
            whiteSpace: 'nowrap',
          }}
        >
          Software Simplified
        </span>
      </span>
    </span>
  );
}
