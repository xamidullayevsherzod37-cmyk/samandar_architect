import { useState, useEffect } from 'react'
import { Sun, Moon } from 'lucide-react'

// Logo: SVG recreation of the building icon + text
function Logo({ filter }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
      <svg width="42" height="42" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter }}>
        <g fill="currentColor">
          <rect x="5" y="108" width="110" height="3" rx="1.5"/>
          <rect x="8" y="90" width="12" height="16" rx="2"/>
          <rect x="8" y="72" width="12" height="14" rx="2"/>
          <rect x="8" y="55" width="12" height="13" rx="2"/>
          <rect x="24" y="90" width="14" height="16" rx="2"/>
          <rect x="24" y="70" width="14" height="17" rx="2"/>
          <rect x="24" y="50" width="14" height="17" rx="2"/>
          <rect x="24" y="33" width="14" height="13" rx="2"/>
          <rect x="42" y="90" width="16" height="16" rx="2"/>
          <rect x="42" y="68" width="16" height="18" rx="2"/>
          <rect x="42" y="46" width="16" height="18" rx="2"/>
          <rect x="42" y="24" width="16" height="18" rx="2"/>
          <rect x="42" y="5" width="16" height="15" rx="2"/>
          <rect x="62" y="90" width="14" height="16" rx="2"/>
          <rect x="62" y="70" width="14" height="17" rx="2"/>
          <rect x="62" y="50" width="14" height="17" rx="2"/>
          <rect x="62" y="28" width="14" height="18" rx="2"/>
          <rect x="80" y="90" width="12" height="16" rx="2"/>
          <rect x="80" y="72" width="12" height="14" rx="2"/>
          <rect x="80" y="55" width="12" height="13" rx="2"/>
          <rect x="55" y="2" width="10" height="8" rx="2" transform="rotate(-10 55 2)"/>
          <rect x="70" y="8" width="14" height="10" rx="2" transform="rotate(8 70 8)"/>
          <rect x="85" y="18" width="10" height="14" rx="2" transform="rotate(15 85 18)"/>
          <rect x="95" y="35" width="12" height="18" rx="2" transform="rotate(10 95 35)"/>
          <rect x="100" y="58" width="10" height="20" rx="2" transform="rotate(5 100 58)"/>
        </g>
      </svg>
      <div>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '22px',
          letterSpacing: '3px',
          lineHeight: 1,
          color: 'var(--text-primary)',
        }}>SAMANDAR</div>
        <div style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '10px',
          fontWeight: 600,
          letterSpacing: '3px',
          color: 'var(--text-secondary)',
          marginTop: '2px',
        }}>ARCHITECT</div>
      </div>
    </div>
  )
}

export default function Navbar({ t, theme, toggleTheme, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('#home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)

      // Qaysi sahifada turganini aniqlash (Aktiv klass uchun)
      const sections = ['home', 'about', 'projects', 'services', 'contact']
      const scrollPosition = window.scrollY + 200

      for (const section of sections) {
        const el = document.getElementById(section)
        if (el && scrollPosition >= el.offsetTop && scrollPosition < el.offsetTop + el.offsetHeight) {
          setActiveSection(`#${section}`)
          break
        }
      }
    }

    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: t.nav.home },
    { href: '#about', label: t.nav.about },
    { href: '#projects', label: t.nav.projects },
    { href: '#services', label: t.nav.services },
    { href: '#contact', label: t.nav.contact },
  ]

  return (
    <>
      {/* YUQORI NAVIGATSIYA PANEL */}
      <nav 
        className="top-navbar"
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 1000,
          background: scrolled ? 'var(--nav-bg)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
          boxShadow: scrolled ? 'var(--nav-shadow)' : 'none',
          transition: 'all 0.4s ease',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <a href="#home" style={{ textDecoration: 'none' }}>
          <Logo filter={theme === 'dark' ? 'invert(1) brightness(2)' : 'none'} />
        </a>

        {/* Desktop menyu (Katta ekranda) */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="desktop-nav">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: activeSection === link.href ? 'var(--text-primary)' : 'var(--text-secondary)',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '13px',
                fontWeight: 600,
                letterSpacing: '1.5px',
                textTransform: 'uppercase',
                transition: 'all 0.3s ease',
                borderBottom: activeSection === link.href ? '2px solid var(--text-primary)' : '2px solid transparent',
                paddingBottom: '4px'
              }}
              onMouseOver={e => {
                e.target.style.color = 'var(--text-primary)'
              }}
              onMouseOut={e => {
                if (activeSection !== link.href) {
                  e.target.style.color = 'var(--text-secondary)'
                }
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* O'ng tarafdagi boshqaruvlar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Til almashtirgich */}
          <div style={{ display: 'flex', gap: '2px', background: 'var(--card-border)', borderRadius: '6px', padding: '3px' }}>
            {['uz', 'ru'].map(l => (
              <button
                key={l}
                onClick={() => setLang(l)}
                style={{
                  border: 'none',
                  background: lang === l ? 'var(--btn-bg)' : 'transparent',
                  color: lang === l ? 'var(--btn-text)' : 'var(--text-secondary)',
                  padding: '4px 10px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  fontSize: '12px',
                  fontWeight: 700,
                  fontFamily: 'Montserrat',
                  letterSpacing: '1px',
                  textTransform: 'uppercase',
                  transition: 'all 0.2s',
                }}
              >
                {l.toUpperCase()}
              </button>
            ))}
          </div>

          {/* Tema (Kunduzgi/Tungi) almashtirgich */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'var(--card-border)',
              border: 'none',
              borderRadius: '50%',
              width: '34px', height: '34px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              cursor: 'pointer',
              color: 'var(--text-primary)',
              transition: 'all 0.2s',
            }}
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon size={15} /> : <Sun size={15} />}
          </button>
        </div>
      </nav>

      {/* PAZKI NAVIGATSIYA PANEL (Faqat mobil telefonlar uchun) */}
      <div className="mobile-bottom-nav">
        {navLinks.map(link => {
          const isCurrent = activeSection === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`mobile-nav-link ${isCurrent ? 'active-link' : ''}`}
            >
              {link.label}
            </a>
          );
        })}
      </div>

      {/* STYLING & RESPONSIVE EFFECT MECHANISM */}
      <style>{`
        .top-navbar { padding: 20px 48px; }
        .desktop-nav { display: flex; }
        .mobile-bottom-nav { display: none; }

        @media (max-width: 768px) {
          .top-navbar {
            padding: 12px 20px !important;
            background: var(--nav-bg) !important;
            backdrop-filter: blur(12px) !important;
            box-shadow: var(--nav-shadow) !important;
          }
          
          .desktop-nav { display: none !important; }

          /* Pastki menyu paneli dizayni */
          .mobile-bottom-nav {
            display: flex !important;
            position: fixed;
            bottom: 0; left: 0; right: 0;
            z-index: 1000;
            background: var(--bg); /* Oq fonda oq, qorada to'q qora bo'ladi */
            border-top: 1px solid var(--card-border);
            box-shadow: 0 -4px 30px rgba(0, 0, 0, 0.08);
            padding: 16px 12px;
            justify-content: space-around;
            align-items: center;
          }

          /* Mobil linklar standart rangi va shriftlari */
          .mobile-nav-link {
            text-decoration: none;
            /* Dinamik rang: CSS o'zgaruvchisidan oq fon bo'lsa qora, qora bo'lsa oq rangni oladi */
            color: var(--text-primary); 
            font-family: 'Montserrat', sans-serif;
            font-size: 10px;
            font-weight: 600;
            letter-spacing: 0.8px;
            text-transform: uppercase;
            opacity: 0.4; /* Oddiy turganda biroz xiraroq (chiroyli effekt uchun) */
            padding: 8px 4px;
            text-align: center;
            flex: 1;
            transition: all 0.2s ease;
          }
          
          /* HOVER va ACTIVE effektlari */
          .mobile-nav-link:hover {
            opacity: 0.8;
          }

          /* Hozirgi kirilgan yoki bosilgan sahifa effekti (Oq fon bo'lsa to'liq qora, qorada to'liq oq bo'ladi) */
          .mobile-nav-link.active-link {
            opacity: 1 !important;
            font-weight: 800;
            transform: translateY(-2px); /* Kichik yuqoriga ko'tarilish effekti */
          }

          body {
            padding-bottom: 70px !important;
          }
        }
      `}</style>
    </>
  )
}