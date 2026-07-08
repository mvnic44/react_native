import type { CSSProperties, ReactElement } from 'react'
import { SectionHeader } from './About'
import { useReveal } from '../useReveal'

interface Education {
  degree: string
  school: string
  period: string
}

interface Cert {
  name: string
  year: string
  detail: string
}

const education: Education = {
  degree: 'B.Tech, Computer Science',
  school: 'ITM, Aligarh',
  period: '2012 — 2016',
}

const certs: Cert[] = [
  { name: 'Claude & Claude Code Certification', year: '2026', detail: 'AI-assisted development and prompt engineering.' },
  { name: 'GitHub Copilot — Daily Use', year: '2024–26', detail: 'Writing, reviewing, and optimizing code.' },
  { name: 'Android Training', year: '2015–16', detail: 'DUCAT, Noida.' },
  { name: 'Core Java', year: '2014–15', detail: 'NIIT certification course.' },
]

const Certifications = (): ReactElement => {
  const [eduRef, eduVisible] = useReveal()
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeader title="Education & Certifications" subtitle="Academic background and professional credentials" />

        <div ref={eduRef} className={`reveal glass-panel corner-accent ${eduVisible ? 'in' : ''}`} style={styles.eduLog}>
          <div style={styles.eduTimestamp}>
            <span style={styles.eduLabel}>Education</span>
            <span style={styles.eduPeriod}>{education.period}</span>
          </div>
          <div style={styles.eduDivider} />
          <div style={styles.eduBody}>
            <span style={styles.eduTag}>Bachelor of Technology</span>
            <h3 style={styles.eduDegree}>{education.degree}</h3>
            <p style={styles.eduSchool}>{education.school}</p>
          </div>
        </div>

        <div style={styles.certList}>
          {certs.map((c) => <CertRow key={c.name} c={c} />)}
        </div>
      </div>
    </section>
  )
}

interface CertRowProps {
  c: Cert
}

const CertRow = ({ c }: CertRowProps): ReactElement => {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`reveal glass-panel ${visible ? 'in' : ''}`} style={styles.certRow}>
      <span style={styles.certDot} />
      <div>
        <p style={styles.certName}>{c.name} <span style={styles.certYear}>{c.year}</span></p>
        <p style={styles.certDetail}>{c.detail}</p>
      </div>
    </div>
  )
}

const styles: Record<string, CSSProperties> = {
  eduLog: {
    display: 'flex', flexWrap: 'wrap', alignItems: 'stretch', gap: 24,
    padding: 28, marginBottom: 48, borderBottom: '2px solid var(--cyan)',
  },
  eduTimestamp: { display: 'flex', flexDirection: 'column', justifyContent: 'center', minWidth: 140 },
  eduLabel: { fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--text-faint)', letterSpacing: '0.1em', marginBottom: 6 },
  eduPeriod: { fontFamily: 'var(--font-mono)', fontSize: 18, color: 'var(--cyan)', fontWeight: 700 },
  eduDivider: { width: 1, background: 'rgba(255,255,255,0.12)', alignSelf: 'stretch' },
  eduBody: { flex: 1, minWidth: 220 },
  eduTag: { fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--cyan)', letterSpacing: '0.08em', display: 'block', marginBottom: 8, textTransform: 'uppercase' },
  eduDegree: { margin: '0 0 6px 0', fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text)' },
  eduSchool: { margin: 0, fontSize: 16, color: 'var(--text-dim)' },

  certList: { display: 'flex', flexDirection: 'column', gap: 14 },
  certRow: { display: 'flex', gap: 16, alignItems: 'flex-start', padding: '18px 22px' },
  certDot: { width: 8, height: 8, marginTop: 8, borderRadius: '50%', background: 'var(--cyan)', flexShrink: 0, boxShadow: '0 0 8px rgba(0,240,255,0.7)' },
  certName: { margin: 0, fontSize: 17, fontWeight: 600, color: 'var(--text)' },
  certYear: { color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, marginLeft: 10 },
  certDetail: { margin: '6px 0 0 0', fontSize: 15, color: 'var(--text-dim)' },
}

export default Certifications
