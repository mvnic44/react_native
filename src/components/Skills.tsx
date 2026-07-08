import type { CSSProperties, ReactElement } from 'react'
import { SectionHeader } from './About'
import { useReveal } from '../useReveal'

const skills: string[] = [
  'React Native', 'React', 'Next.js', 'Node.js', 'Redux', 'JavaScript', 'TypeScript',
  'HTML', 'CSS', 'Bootstrap', 'SASS', 'MongoDB', 'Firebase', 'Xcode', 'Android Studio',
  'System Integration', 'REST APIs', 'GitHub Copilot', 'Claude', 'Claude Code', 'ChatGPT',
]

const Skills = (): ReactElement => {
  const [ref, visible] = useReveal()
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeader title="Skills" subtitle="Technical competencies & tools" />
        <div ref={ref} className={`reveal ${visible ? 'in' : ''}`} style={styles.grid}>
          {skills.map((s) => (
            <div key={s} style={styles.chip}>
              <span style={styles.dot} />
              <span style={styles.label}>{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const styles: Record<string, CSSProperties> = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(170px, 1fr))', gap: 12 },
  chip: {
    display: 'flex', alignItems: 'center', gap: 10, padding: '14px 16px',
    background: 'var(--bg-container-low)', border: '1px solid rgba(255,255,255,0.1)',
  },
  dot: { width: 8, height: 8, borderRadius: '50%', background: 'var(--cyan)', flexShrink: 0, boxShadow: '0 0 8px rgba(0,240,255,0.7)' },
  label: { fontFamily: 'var(--font-mono)', fontSize: 14, textTransform: 'uppercase', letterSpacing: '0.02em' },
}

export default Skills
