import { MapPin, Phone, Instagram, Send } from 'lucide-react'

export default function Contact({ t }) {
  // Tugma matnini aniqlash
  const buttonText = t.contact.start || (t.contact.title.includes('Начнём') ? 'Начать' : 'Boshlash');

  return (
    <section id="contact" className="contact-section" style={{
      padding: '120px 48px',
      background: 'var(--bg)',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="contact-grid" style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}>
          {/* Chap taraf: Sarlavha va Havola Tugmasi */}
          <div className="contact-left-content">
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
              className="contact-main-btn"
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
                transition: 'all 0.3s ease',
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
              }}
            >
              {buttonText} →
            </a>
          </div>

          {/* O'ng taraf: Kontaktlar ro'yxati */}
          <div className="contact-info-card" style={{
            background: 'var(--bg-secondary)',
            padding: '48px',
            border: '1px solid var(--card-border)',
            transition: 'transform 0.3s ease',
          }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}>
              {[
                { type: 'text', icon: <MapPin size={18} />, text: t.contact.address },
                { type: 'tel', icon: <Phone size={18} />, text: '+998 33 263 42 42', url: 'tel:+998332634242' },
                { type: 'link', icon: <Send size={18} />, text: '@uz_702', url: 'https://t.me/uz_702' },
                { type: 'link', icon: <Instagram size={18} />, text: '@samandar_arxitektor', url: 'https://www.instagram.com/samandar_arxitektor/' },
              ].map((item, i) => {
                // Telefon yoki ijtimoiy tarmoq linki bo'lsa a tegi generatsiya bo'ladi
                const isClickable = item.type === 'link' || item.type === 'tel';

                return (
                  <div key={i} className="contact-item" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    {/* Ikonaning to'rtburchak sirti */}
                    <div className="contact-icon-box" style={{
                      width: '44px', height: '44px',
                      border: '1px solid var(--card-border)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: 'var(--text-secondary)',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                    }}>
                      {item.icon}
                    </div>

                    {/* Matn qismi */}
                    {isClickable ? (
                      <a
                        href={item.url}
                        // Faqat ijtimoiy tarmoq havolalarini yangi oynada ochadi, tel: havolasi esa o'zida qoladi
                        target={item.type === 'link' ? "_blank" : undefined}
                        rel={item.type === 'link' ? "noopener noreferrer" : undefined}
                        style={{
                          fontFamily: 'Montserrat', fontSize: '14px',
                          color: 'var(--text-secondary)', fontWeight: 500,
                          textDecoration: 'none',
                          transition: 'color 0.2s ease',
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

      {/* STYLING & MOBIL RESPONSIVE */}
      <style>{`
        /* Telefon raqam va havolalar ustiga sichqoncha borganda ikona qutisining rangi o'zgaradi */
        .contact-item:hover .contact-icon-box {
          border-color: var(--text-primary);
          color: var(--text-primary) !important;
        }
        
        .contact-info-card:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.05);
        }

        /* SMARTFONLAR VA PLANSHETLAR UCHUN MOSLASHUV */
        @media (max-width: 768px) {
          .contact-section {
            padding: 80px 24px !important; /* Telefonda chekka masofalar to'g'rilandi */
          }

          .contact-grid {
            grid-template-columns: 1fr !important; /* Ustunlarni bitta qatorga yig'adi */
            gap: 40px !important;
          }

          .contact-left-content {
            text-align: left;
          }

          .contact-left-content h2 {
            margin-bottom: 32px !important;
          }

          /* Asosiy tugmani telefonda to'liq eniga barvasta qilish */
          .contact-main-btn {
            width: 100% !important;
            padding: 16px 20px !important;
          }

          /* O'ng tarafdagi kontakt qutisini telefon ekraniga moslash */
          .contact-info-card {
            padding: 32px 24px !important; /* Ichki padding biroz qisqartirildi */
          }
        }
      `}</style>
    </section>
  )
}