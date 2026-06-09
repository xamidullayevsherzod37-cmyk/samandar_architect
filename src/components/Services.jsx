import { useState } from 'react'

const icons = [
  // Blueprint/design
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="4" y="4" width="24" height="24" rx="1" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="4" y1="10" x2="28" y2="10" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="10" y1="10" x2="10" y2="28" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="14" y="14" width="10" height="8" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="14" y1="18" x2="24" y2="18" stroke="currentColor" strokeWidth="1"/>
  </svg>,
  // Interior
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 28 L4 10 L16 4 L28 10 L28 28 Z" stroke="currentColor" strokeWidth="1.5"/>
    <rect x="12" y="18" width="8" height="10" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="6" y="14" width="6" height="5" stroke="currentColor" strokeWidth="1.2"/>
    <rect x="20" y="14" width="6" height="5" stroke="currentColor" strokeWidth="1.2"/>
  </svg>,
  // Renovation
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8 24 L8 12 L24 12 L24 24 Z" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M6 12 L16 5 L26 12" stroke="currentColor" strokeWidth="1.5"/>
    <path d="M20 8 L20 5 L24 5 L24 12" stroke="currentColor" strokeWidth="1.2"/>
    <path d="M12 24 L12 18 L20 18 L20 24" stroke="currentColor" strokeWidth="1.2"/>
    <line x1="4" y1="28" x2="28" y2="28" stroke="currentColor" strokeWidth="1.5"/>
  </svg>,
  // Consultation
  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5"/>
    <line x1="16" y1="10" x2="16" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="21" r="1.2" fill="currentColor"/>
  </svg>,
]

export default function Services({ t }) {
  const [hovered, setHovered] = useState(null)

  return (
    <section id="services" style={{
      padding: '120px 48px',
      background: 'var(--bg-secondary)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{ marginBottom: '64px' }}>
          <div style={{
            fontFamily: 'Montserrat', fontSize: '12px', fontWeight: 700,
            letterSpacing: '5px', textTransform: 'uppercase',
            color: 'var(--text-secondary)', marginBottom: '16px',
          }}>
            ✦ {t.services.label}
          </div>
          <h2 style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: 'clamp(40px, 6vw, 72px)',
            letterSpacing: '3px',
            color: 'var(--text-primary)',
          }}>
            {t.services.title}
          </h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)',
          gap: '2px',
        }}>
          {t.services.items.map((item, i) => (
            <div
              key={i}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: hovered === i ? 'var(--btn-bg)' : 'var(--card-bg)',
                color: hovered === i ? 'var(--btn-text)' : 'var(--text-primary)',
                padding: '48px 32px',
                transition: 'all 0.35s ease',
                cursor: 'default',
                border: '1px solid var(--card-border)',
              }}
            >
              <div style={{
                marginBottom: '24px',
                color: hovered === i ? 'var(--btn-text)' : 'var(--text-primary)',
                opacity: hovered === i ? 1 : 0.7,
                transition: 'all 0.35s ease',
              }}>
                {icons[i]}
              </div>
              <div style={{
                fontFamily: 'Montserrat', fontSize: '11px', fontWeight: 700,
                letterSpacing: '3px', textTransform: 'uppercase',
                marginBottom: '12px',
                opacity: 0.6,
              }}>
                0{i + 1}
              </div>
              <h3 style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: '28px', letterSpacing: '1.5px',
                marginBottom: '16px',
                lineHeight: 1.1,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: 'Montserrat',
                fontSize: '13px', lineHeight: 1.8,
                opacity: hovered === i ? 0.85 : 0.6,
                transition: 'opacity 0.35s ease',
              }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #services > div > div:last-child {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 540px) {
          #services > div > div:last-child {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}
