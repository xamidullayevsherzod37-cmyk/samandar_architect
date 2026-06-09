import { MapPin, Phone, Instagram, Send } from 'lucide-react'

export default function Contact({ t }) {
  // Tugma matnini aniqlash: t.contact.start bo'lsa o'shani oladi, 
  // bo'lmasa sarlavha tilidan kelib chiqib "Начать" yoki "Boshlash" qo'yiladi
  const buttonText = t.contact.start || (t.contact.title.includes('Начнём') ? 'Начать' : 'Boshlash');

  return (
    <section id="contact" style={{
      padding: '120px 48px',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Chap taraf: Sarlavha va Havola Tugmasi */}
          <div>
            <div style={{
              fontFamily: 'Montserrat', fontSize: '12px', fontWeight: 700,
              letterSpacing: '5px', textTransform: 'uppercase',
              color: 'var(--text-secondary)', marginBottom: '16px',
            }}>
              ✦ {t.contact.label}
            </div>
            <h2 style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: 'clamp(40px, 5vw, 64px)',
              letterSpacing: '2px',
              color: 'var(--text-primary)',
              whiteSpace: 'pre-line',
              lineHeight: 1.05,
              marginBottom: '48px',
            }}>
              {t.contact.title}
            </h2>

            {/* Link Tugmasi */}
            <a
              href="https://samandar-architect.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-block',
                background: 'var(--btn-bg)',
                color: 'var(--btn-text)',
                textDecoration: 'none',
                textAlign: 'center',
                padding: '18px 48px',
                fontFamily: 'Montserrat',
                fontSize: '13px',
                fontWeight: 700,
                letterSpacing: '3px',
                textTransform: 'uppercase',
                cursor: 'pointer',
                transition: 'all 0.3s',
              }}
              onMouseOver={e => {
                e.currentTarget.style.opacity = '0.9';
              }}
              onMouseOut={e => {
                e.currentTarget.style.opacity = '1';
              }}
            >
              {buttonText} →
            </a>
          </div>

          {/* O'ng taraf: Barcha kontaktlar bir xil chiroyli ustunda (Column) */}
          <div style={{
            background: 'var(--bg-secondary)',
            padding: '48px',
            border: '1px solid var(--card-border)',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                { type: 'text', icon: <MapPin size={18} />, text: t.contact.address },
                { type: 'text', icon: <Phone size={18} />, text: '+998 33 263 42 42' },
                { type: 'link', icon: <Send size={18} />, text: '@uz_702', url: 'https://t.me/uz_702' },
                { type: 'link', icon: <Instagram size={18} />, text: '@samandar_arxitektor', url: 'https://www.instagram.com/samandar_arxitektor/' },
              ].map((item, i) => {
                const isLink = item.type === 'link';

                return (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Ikonaning to'rtburchak sirti (Border) */}
                    <div style={{
                      width: '44px', height: '44px',
                      border: '1px solid var(--card-border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      flexShrink: 0,
                    }}>
                      {item.icon}
                    </div>

                    {/* Matn qismi (Agar havola bo'lsa, bosganda yangi oynada ochiladi) */}
                    {isLink ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          fontFamily: 'Montserrat', fontSize: '14px',
                          color: 'var(--text-secondary)', fontWeight: 500,
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                        }}
                        onMouseOver={e => e.currentTarget.style.color = 'var(--text-primary)'}
                        onMouseOut={e => e.currentTarget.style.color = 'var(--text-secondary)'}
                      >
                        {item.text}
                      </a>
                    ) : (
                      <span style={{
                        fontFamily: 'Montserrat', fontSize: '14px',
                        color: 'var(--text-secondary)', fontWeight: 500,
                      }}>
                        {item.text}
                      </span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          #contact > div > div {
            grid-template-columns: 1fr !important;
            gap: 48px !important;
          }
        }
      `}</style>
    </section>
  )
}