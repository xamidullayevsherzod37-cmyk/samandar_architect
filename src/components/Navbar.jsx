import { useState, useEffect } from 'react'
import { Sun, Moon, Menu, X } from 'lucide-react'

// Logo: SVG recreation of the building icon + text
function Logo({ filter }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
      <svg width="52" height="52" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ filter }}>
        {/* Building blocks - recreating the logo */}
        <g fill="currentColor">
          {/* Ground line */}
          <rect x="5" y="108" width="110" height="3" rx="1.5"/>
          {/* Left column bottom */}
          <rect x="8" y="90" width="12" height="16" rx="2"/>
          <rect x="8" y="72" width="12" height="14" rx="2"/>
          <rect x="8" y="55" width="12" height="13" rx="2"/>
          {/* Left column middle */}
          <rect x="24" y="90" width="14" height="16" rx="2"/>
          <rect x="24" y="70" width="14" height="17" rx="2"/>
          <rect x="24" y="50" width="14" height="17" rx="2"/>
          <rect x="24" y="33" width="14" height="13" rx="2"/>
          {/* Center column - tallest */}
          <rect x="42" y="90" width="16" height="16" rx="2"/>
          <rect x="42" y="68" width="16" height="18" rx="2"/>
          <rect x="42" y="46" width="16" height="18" rx="2"/>
          <rect x="42" y="24" width="16" height="18" rx="2"/>
          <rect x="42" y="5" width="16" height="15" rx="2"/>
          {/* Right column */}
          <rect x="62" y="90" width="14" height="16" rx="2"/>
          <rect x="62" y="70" width="14" height="17" rx="2"/>
          <rect x="62" y="50" width="14" height="17" rx="2"/>
          <rect x="62" y="28" width="14" height="18" rx="2"/>
          {/* Far right small */}
          <rect x="80" y="90" width="12" height="16" rx="2"/>
          <rect x="80" y="72" width="12" height="14" rx="2"/>
          <rect x="80" y="55" width="12" height="13" rx="2"/>
          {/* Top floating blocks */}
          <rect x="55" y="2" width="10" height="8" rx="2" transform="rotate(-10 55 2)"/>
          <rect x="70" y="8" width="14" height="10" rx="2" transform="rotate(8 70 8)"/>
          <rect x="85" y="18" width="10" height="14" rx="2" transform="rotate(15 85 18)"/>
          <rect x="95" y="35" width="12" height="18" rx="2" transform="rotate(10 95 35)"/>
          <rect x="100" y="58" width="10" height="20" rx="2" transform="rotate(5 100 58)"/>
        </g>
      </svg>
      <div style={{ filter }}>
        <div style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: '26px',
          letterSpacing: '3px',
          lineHeight: 1,
          color: 'var(--text-primary)',
        }}>SAMANDAR</div>
        <div style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '11px',
          fontWeight: 600,
          letterSpacing: '4px',
          color: 'var(--text-secondary)',
          marginTop: '2px',
        }}>ARCHITECT</div>
      </div>
    </div>
  )
}

export default function Navbar({ t, theme, toggleTheme, lang, setLang }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
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
    <nav style={{
      position: 'fixed',
      top: 0, left: 0, right: 0,
      zIndex: 1000,
      background: scrolled ? 'var(--nav-bg)' : 'transparent',
      backdropFilter: scrolled ? 'blur(12px)' : 'none',
      boxShadow: scrolled ? 'var(--nav-shadow)' : 'none',
      transition: 'all 0.4s ease',
      padding: scrolled ? '12px 48px' : '20px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}>
      <a href="#home" style={{ textDecoration: 'none' }}>
        <Logo filter={theme === 'dark' ? 'invert(1) brightness(2)' : 'none'} />
      </a>

      {/* Desktop nav */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '36px' }} className="desktop-nav">
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            style={{
              textDecoration: 'none',
              color: 'var(--text-primary)',
              fontFamily: "'Montserrat', sans-serif",
              fontSize: '13px',
              fontWeight: 600,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              transition: 'opacity 0.2s',
            }}
            onMouseOver={e => e.target.style.opacity = '0.6'}
            onMouseOut={e => e.target.style.opacity = '1'}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Controls */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {/* Language switcher */}
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

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          style={{
            background: 'var(--card-border)',
            border: 'none',
            borderRadius: '50%',
            width: '38px', height: '38px',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--text-primary)',
            transition: 'all 0.2s',
          }}
          aria-label="Toggle theme"
        >
          {theme === 'light' ? <Moon size={16} /> : <Sun size={16} />}
        </button>

        {/* Mobile menu */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="mobile-menu-btn"
          style={{
            background: 'none', border: 'none',
            color: 'var(--text-primary)', cursor: 'pointer',
            display: 'none',
          }}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu dropdown */}
      {menuOpen && (
        <div style={{
          position: 'absolute', top: '100%', left: 0, right: 0,
          background: 'var(--nav-bg)', backdropFilter: 'blur(12px)',
          padding: '20px 48px', display: 'flex', flexDirection: 'column', gap: '20px',
          boxShadow: 'var(--nav-shadow)',
          animation: 'fadeInUp 0.3s ease',
        }}>
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                textDecoration: 'none', color: 'var(--text-primary)',
                fontFamily: 'Montserrat', fontSize: '14px', fontWeight: 600,
                letterSpacing: '2px', textTransform: 'uppercase',
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </nav>
  )
}
