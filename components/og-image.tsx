/* Rendered by next/og (Satori): only inline styles and flexbox are supported. */

export function OgImage({
  title,
  description,
  section,
  logo,
}: {
  title: string;
  description?: string;
  section?: string;
  /** data URI of public/logo.svg, from loadOgLogo() */
  logo: string;
}) {
  return (
    <div
      style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: '64px 72px',
        backgroundColor: '#0c0b15',
        backgroundImage:
          'radial-gradient(circle at 85% 15%, rgba(124,58,237,0.45), transparent 45%), radial-gradient(circle at 10% 100%, rgba(163,230,53,0.35), transparent 50%)',
        color: '#eeeef6',
        fontFamily: 'Bricolage Grotesque',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        {/* biome-ignore lint/performance/noImgElement: rendered by next/og, not in the browser */}
        <img src={logo} width={64} height={64} alt="" />
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 800 }}>
          Feature<span style={{ color: '#a3e635', marginLeft: 6 }}>Creepers</span>
        </div>
        {section ? (
          <div
            style={{
              display: 'flex',
              marginLeft: 12,
              padding: '6px 18px',
              borderRadius: 999,
              border: '2px solid rgba(163,230,53,0.5)',
              color: '#bef264',
              fontSize: 24,
            }}
          >
            {section}
          </div>
        ) : null}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
        <div style={{ display: 'flex', fontSize: 76, fontWeight: 800, lineHeight: 1.05, letterSpacing: -2 }}>
          {title}
        </div>
        {description ? (
          <div style={{ display: 'flex', fontSize: 32, color: '#b4b3c9', lineHeight: 1.35, maxWidth: 1000 }}>
            {description}
          </div>
        ) : null}
      </div>

      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 24, color: '#8f8ea8' }}>
        <div style={{ display: 'flex' }}>Build awesome apps. And dumb ones.</div>
        <div style={{ display: 'flex' }}>feature-creepers.github.io/docs</div>
      </div>
    </div>
  );
}
