import type { CSSProperties, ReactElement } from 'react'
const Footer = (): ReactElement => {
  return (
    <footer style={styles.footer}>
      <div className="container" style={styles.inner}>
        <span style={styles.tag} className="text-glow-cyan">Mayur Varshney</span>
        <span style={styles.text}>© {new Date().getFullYear()} · Senior Software Developer / Team Lead</span>
      </div>
    </footer>
  )
}

const styles: Record<string, CSSProperties> = {
  footer: { padding: '48px 0 120px', borderTop: '1px solid rgba(255,255,255,0.06)' },
  inner: { display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, textAlign: 'center' },
  tag: { fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 14, color: 'var(--cyan)', letterSpacing: '0.06em' },
  text: { fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-faint)' },
}

export default Footer
