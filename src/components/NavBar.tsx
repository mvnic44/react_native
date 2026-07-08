import type { CSSProperties, ReactElement } from 'react'
import { useTheme } from '../useTheme'

interface Tab {
  label: string
  href: string
  icon: string
}

const tabs: Tab[] = [
  { label: 'Home', href: '#home', icon: 'home_app_logo' },
  { label: 'Projects', href: '#projects', icon: 'code_blocks' },
  { label: 'Skills', href: '#skills', icon: 'memory' },
  { label: 'Work', href: '#experience', icon: 'timeline' },
  { label: 'Education', href: '#education', icon: 'history_edu' },
  { label: 'Contact', href: '#contact', icon: 'terminal' },
]

const NavBar = (): ReactElement => {
  const [theme, toggleTheme] = useTheme()

  return (
    <>
      <header style={styles.topBar}>
        <div className="container" style={styles.topInner}>
          <div style={styles.brand}>
            <span className="material-symbols-outlined" style={{ color: 'var(--cyan)', fontSize: 22 }}>terminal</span>
            <span style={styles.topLabel}>Mayur Varshney</span>
          </div>
          <button
            onClick={toggleTheme}
            style={styles.themeBtn}
            className="glass-panel"
            aria-label="Toggle day/night mode"
            title={theme === 'dark' ? 'Switch to day mode' : 'Switch to night mode'}
          >
            <span className="material-symbols-outlined" style={{ fontSize: 20 }}>
              {theme === 'dark' ? 'light_mode' : 'dark_mode'}
            </span>
          </button>
        </div>
      </header>

      <nav style={styles.nav}>
        {tabs.map((t) => (
          <a key={t.href} href={t.href} style={styles.tab}>
            <span className="material-symbols-outlined" style={{ fontSize: 24 }}>{t.icon}</span>
            <span style={styles.tabLabel}>{t.label}</span>
          </a>
        ))}
      </nav>
    </>
  )
}

const styles: Record<string, CSSProperties> = {
  topBar: {
    position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 50,
    height: 64, display: 'flex', alignItems: 'center',
    background: 'var(--bg-container)', backdropFilter: 'blur(10px)',
    borderBottom: '1px solid var(--line)',
    boxShadow: '0 0 20px rgba(0,229,255,0.08)',
  },
  topInner: { width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between' },
  brand: { display: 'flex', alignItems: 'center', gap: 10 },
  topLabel: {
    fontFamily: 'var(--font-mono)', fontSize: 14, fontWeight: 700,
    letterSpacing: '0.1em', color: 'var(--cyan)', textTransform: 'uppercase',
  },
  themeBtn: {
    width: 40, height: 40, borderRadius: '50%', display: 'flex',
    alignItems: 'center', justifyContent: 'center', color: 'var(--cyan)',
    cursor: 'pointer', background: 'var(--bg-container-high)',
  },
  nav: {
    position: 'fixed', bottom: 0, left: 0, width: '100%', zIndex: 50,
    display: 'flex', justifyContent: 'space-around', alignItems: 'center',
    padding: '12px 8px calc(12px + env(safe-area-inset-bottom))',
    background: 'var(--bg-container)', backdropFilter: 'blur(18px)',
    borderTop: '1px solid var(--line)',
    boxShadow: '0 -5px 25px rgba(0,229,255,0.1)',
  },
  tab: {
    display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3,
    color: 'var(--text-faint)', textDecoration: 'none', padding: '4px 6px',
  },
  tabLabel: { fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: '0.04em' },
}

export default NavBar
