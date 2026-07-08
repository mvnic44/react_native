import type { CSSProperties, ReactElement } from 'react'
import { useReveal } from '../useReveal'

const Contact = (): ReactElement => {
  const [ref, visible] = useReveal()
  return (
    <section id="contact" className="section">
      <div ref={ref} className={`reveal container ${visible ? 'in' : ''}`} style={styles.inner}>
        <p style={styles.eyebrow}>Get in Touch</p>
        <h2 style={styles.title}>Ready to deploy a project?</h2>
        <p style={styles.subtitle}>Reach out through any of these platforms.</p>
        <div style={styles.links}>
          <a href="mailto:mvnic.44@gmail.com" style={styles.iconBtn} className="glass-panel" title="Email">
            <span className="material-symbols-outlined" style={{ fontSize: 26 }}>mail</span>
          </a>
          <a href="tel:+918077970650" style={styles.iconBtn} className="glass-panel" title="Phone">
            <span className="material-symbols-outlined" style={{ fontSize: 26 }}>call</span>
          </a>
          <a href="https://www.linkedin.com/in/mayurvarshney" target="_blank" rel="noopener noreferrer" style={styles.iconBtn} className="glass-panel" title="LinkedIn">
            <span className="material-symbols-outlined" style={{ fontSize: 26 }}>link</span>
          </a>
        </div>
      </div>
    </section>
  )
}

const styles: Record<string, CSSProperties> = {
  inner: { textAlign: 'center' },
  eyebrow: { fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--cyan)', letterSpacing: '0.15em', textTransform: 'uppercase', margin: '0 0 10px 0' },
  title: { fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,4vw,40px)', fontWeight: 700, color: 'var(--text)', margin: '0 0 12px 0' },
  subtitle: { fontSize: 18, color: 'var(--text-dim)', margin: '0 0 40px 0' },
  links: { display: 'flex', gap: 20, justifyContent: 'center' },
  iconBtn: {
    width: 64, height: 64, borderRadius: '50%', display: 'flex',
    alignItems: 'center', justifyContent: 'center', color: 'var(--cyan)', textDecoration: 'none',
  },
}

export default Contact
