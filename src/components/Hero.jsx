export default function Hero({ t }) {
  return (
    <section id="home" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      background: 'var(--bg)',
    }}>
      {/* Background geometric pattern */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `
          linear-gradient(var(--card-border) 1px, transparent 1px),
          linear-gradient(90deg, var(--card-border) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        opacity: 0.4,
      }} />

      {/* Right side architectural illustration */}
      <div style={{
        position: 'absolute', right: '-60px', top: '50%',
        transform: 'translateY(-50%)',
        opacity: 0.06,
      }}>
        <svg width="600" height="700" viewBox="0 0 600 700" fill="none">
          <rect x="100" y="200" width="120" height="500" fill="currentColor" />
          <rect x="240" y="100" width="100" height="600" fill="currentColor" />
          <rect x="360" y="300" width="90" height="400" fill="currentColor" />
          <rect x="470" y="150" width="80" height="550" fill="currentColor" />
          <rect x="0" y="400" width="80" height="300" fill="currentColor" />
          <rect x="550" y="250" width="50" height="450" fill="currentColor" />
        </svg>
      </div>

      <div style={{
        position: 'relative', zIndex: 1,
        padding: '0 48px', maxWidth: '900px',
        marginTop: '80px',
        animation: 'fadeInUp 0.8s ease',
      }}>
        <div style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '13px',
          fontWeight: 700,
          letterSpacing: '5px',
          textTransform: 'uppercase',
          color: 'var(--text-secondary)',
          marginBottom: '24px',
          animation: 'fadeInUp 0.6s ease',
        }}>
          ✦ Architecture Portfolio
        </div>

        <h1 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(72px, 12vw, 160px)',
          lineHeight: 0.9,
          letterSpacing: '4px',
          color: 'var(--text-primary)',
          animation: 'fadeInUp 0.7s ease 0.1s both',
        }}>
          {t.hero.title}
        </h1>

        <h2 style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: 'clamp(36px, 6vw, 80px)',
          lineHeight: 1,
          letterSpacing: '12px',
          color: 'var(--text-secondary)',
          marginBottom: '40px',
          animation: 'fadeInUp 0.7s ease 0.2s both',
        }}>
          {t.hero.subtitle}
        </h2>

        <p style={{
          fontFamily: "'Playfair Display', serif",
          fontStyle: 'italic',
          fontSize: 'clamp(16px, 2vw, 22px)',
          color: 'var(--text-secondary)',
          maxWidth: '500px',
          lineHeight: 1.6,
          marginBottom: '48px',
          animation: 'fadeInUp 0.7s ease 0.3s both',
        }}>
          "{t.hero.tagline}"
        </p>

        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', animation: 'fadeInUp 0.7s ease 0.4s both' }}>
          <a href="#projects" style={{
            display: 'inline-block',
            background: 'var(--btn-bg)',
            color: 'var(--btn-text)',
            padding: '16px 40px',
            textDecoration: 'none',
            fontFamily: 'Montserrat',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            transition: 'all 0.3s',
            border: '2px solid transparent',
          }}
            onMouseOver={e => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = 'var(--text-primary)'
              e.currentTarget.style.borderColor = 'var(--text-primary)'
            }}
            onMouseOut={e => {
              e.currentTarget.style.background = 'var(--btn-bg)'
              e.currentTarget.style.color = 'var(--btn-text)'
              e.currentTarget.style.borderColor = 'transparent'
            }}>
            {t.hero.cta}
          </a>

          <a href="#contact" style={{
            display: 'inline-block',
            background: 'transparent',
            color: 'var(--text-primary)',
            padding: '16px 40px',
            textDecoration: 'none',
            fontFamily: 'Montserrat',
            fontSize: '13px',
            fontWeight: 700,
            letterSpacing: '3px',
            textTransform: 'uppercase',
            border: '2px solid var(--card-border)',
            transition: 'all 0.3s',
          }}
            onMouseOver={e => {
              e.currentTarget.style.borderColor = 'var(--text-primary)'
            }}
            onMouseOut={e => {
              e.currentTarget.style.borderColor = 'var(--card-border)'
            }}>
            {t.hero.ctaContact}
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{
        position: 'absolute', bottom: '40px', left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px',
        animation: 'fadeIn 1s ease 1s both',
      }}>
        <div style={{
          width: '1px', height: '60px',
          background: 'linear-gradient(to bottom, var(--text-secondary), transparent)',
          animation: 'fadeInUp 1s ease infinite',
        }} />
      </div>
    </section>
  )
}
