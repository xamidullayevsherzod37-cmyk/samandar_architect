export default function About({ t }) {
  const stats = [
    { num: '10+', label: t.about.exp },
    { num: '80+', label: t.about.proj },
    { num: '12', label: t.about.award },
  ]

  return (
    <section id="about" style={{
      padding: '120px 48px',
      background: 'var(--bg-secondary)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Left: Image mosaic */}
          <div style={{ position: 'relative', height: '500px' }}>
            <div style={{
              position: 'absolute', top: 0, left: 0,
              width: '65%', height: '70%',
              background: 'var(--card-border)',
              overflow: 'hidden',
            }}>
              <img
                src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80"
                alt="Architecture"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
              />
            </div>
            <div style={{
              position: 'absolute', right: 0, bottom: 0,
              width: '55%', height: '55%',
              background: 'var(--card-border)',
              overflow: 'hidden',
              border: '8px solid var(--bg-secondary)',
            }}>
              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80"
                alt="Architecture detail"
                style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'grayscale(20%)' }}
              />
            </div>
            {/* Decorative element */}
            <div style={{
              position: 'absolute', top: '60%', left: '55%',
              width: '80px', height: '80px',
              border: '3px solid var(--text-secondary)',
              opacity: 0.3,
            }} />
          </div>

          {/* Right: Text */}
          <div>
            <div style={{
              fontFamily: 'Montserrat', fontSize: '12px', fontWeight: 700,
              letterSpacing: '5px', textTransform: 'uppercase',
              color: 'var(--text-secondary)', marginBottom: '20px',
            }}>
              ✦ {t.about.label}
            </div>

            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(42px, 5vw, 64px)',
              lineHeight: 1.05,
              letterSpacing: '2px',
              color: 'var(--text-primary)',
              marginBottom: '32px',
              whiteSpace: 'pre-line',
            }}>
              {t.about.title}
            </h2>

            <p style={{
              fontFamily: 'Montserrat', fontSize: '15px', lineHeight: 1.8,
              color: 'var(--text-secondary)', marginBottom: '20px',
            }}>
              {t.about.text1}
            </p>
            <p style={{
              fontFamily: 'Montserrat', fontSize: '15px', lineHeight: 1.8,
              color: 'var(--text-secondary)', marginBottom: '48px',
            }}>
              {t.about.text2}
            </p>

            {/* Stats */}
            <div style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '24px', borderTop: '1px solid var(--card-border)',
              paddingTop: '40px',
            }}>
              {stats.map((s, i) => (
                <div key={i}>
                  <div style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: '48px', letterSpacing: '2px',
                    color: 'var(--text-primary)', lineHeight: 1,
                  }}>{s.num}</div>
                  <div style={{
                    fontFamily: 'Montserrat', fontSize: '12px', fontWeight: 600,
                    letterSpacing: '2px', textTransform: 'uppercase',
                    color: 'var(--text-secondary)', marginTop: '6px',
                  }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #about > div > div {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
