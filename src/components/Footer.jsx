export default function Footer({ t }) {
  return (
    <footer style={{
      background: 'var(--bg-secondary)',
      borderTop: '1px solid var(--card-border)',
      padding: '40px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      flexWrap: 'wrap',
      gap: '16px',
    }}>
      <div style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: '22px', letterSpacing: '3px',
        color: 'var(--text-primary)',
      }}>
        SAMANDAR ARCHITECT
      </div>

      <div style={{
        fontFamily: 'Montserrat', fontSize: '12px',
        color: 'var(--text-secondary)',
        letterSpacing: '1px',
        textAlign: 'center',
      }}>
        {t.footer.copy}
      </div>

      <a href="#home" style={{
        fontFamily: 'Montserrat', fontSize: '11px', fontWeight: 700,
        letterSpacing: '3px', textTransform: 'uppercase',
        color: 'var(--text-secondary)', textDecoration: 'none',
        border: '1px solid var(--card-border)',
        padding: '10px 20px',
        transition: 'all 0.2s',
      }}
      onMouseOver={e => {
        e.currentTarget.style.color = 'var(--text-primary)'
        e.currentTarget.style.borderColor = 'var(--text-primary)'
      }}
      onMouseOut={e => {
        e.currentTarget.style.color = 'var(--text-secondary)'
        e.currentTarget.style.borderColor = 'var(--card-border)'
      }}>
        ↑ Top
      </a>
    </footer>
  )
}
