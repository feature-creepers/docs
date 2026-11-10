/* Rendered by next/og (Satori): only inline styles and flexbox are supported. */

export function OgImage({ title, description, section }: { title: string; description?: string; section?: string }) {
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
        <svg width="64" height="64" viewBox="0 0 32 32" fill="none" role="img" aria-label="Feature Creepers logo">
          <defs>
            <linearGradient id="g" x1="2" y1="2" x2="30" y2="30" gradientUnits="userSpaceOnUse">
              <stop stopColor="#bef264" />
              <stop offset="0.5" stopColor="#22c55e" />
              <stop offset="1" stopColor="#7c3aed" />
            </linearGradient>
          </defs>
          <rect x="1" y="1" width="30" height="30" rx="9" fill="url(#g)" />
          <path
            d="M16 25.5c0-3.6 0-6.9.2-10.5M10.5 25.5h11"
            stroke="#0c0b15"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M16 18.6c-4.6.2-7.6-2.4-8-7.3 4.7-.3 7.7 2.3 8 7.3Z" fill="#0c0b15" />
          <path d="M16.2 15.2c-.1-5 2.6-8.2 7.8-8.6.2 5.1-2.6 8.2-7.8 8.6Z" fill="#0c0b15" />
        </svg>
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 800 }}>
          Feature<span style={{ color: '#a3e635' }}>Creepers</span>
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
