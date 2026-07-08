import type { CSSProperties, ReactElement } from 'react'
import { SectionHeader } from './About'
import { useReveal } from '../useReveal'

interface Job {
  role: string
  company: string
  period: string
  current: boolean
  points: string[]
}

const jobs: Job[] = [
  {
    role: 'Senior Associate - Projects',
    company: 'Cognizant',
    period: 'Feb 2025 — Present',
    current: true,
    points: [
      'Leading development and optimization of React Native applications.',
      'Using GitHub Copilot and Claude Code daily to speed up coding and catch issues early.',
      'Mentoring junior developers on coding standards and AI-assisted best practices.',
      'Driving Agile delivery across cross-functional teams.',
      'Collaborating with QA and product teams to streamline release cycles.',
    ],
  },
  {
    role: 'Senior Software Developer / TL',
    company: 'rStar Technologies Pvt Ltd',
    period: 'Mar 2017 — Feb 2025',
    current: false,
    points: [
      'Led a team delivering React Native, React, and Node.js apps — 25% faster system performance.',
      'Optimized front-end code for 30% faster page loads and better cross-browser support.',
      'Adopted AI coding tools (Copilot, Claude) to accelerate delivery and reduce defects.',
      'Owned end-to-end architecture and code reviews across multiple client engagements.',
      'Contributed to hiring and technical interviews for engineering roles.',
    ],
  },
]

const Experience = (): ReactElement => {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeader title="Experience" subtitle="Professional work history" />
        <div style={styles.list}>
          {jobs.map((job) => <JobCard key={job.company} job={job} />)}
        </div>
      </div>
    </section>
  )
}

interface JobCardProps {
  job: Job
}

const JobCard = ({ job }: JobCardProps): ReactElement => {
  const [ref, visible] = useReveal()
  // Border/marker accent can stay a neutral divider color for past roles.
  const borderAccent = job.current ? 'var(--cyan)' : 'var(--line)'
  // Text accent must always meet contrast against the panel background in both themes.
  const textAccent = job.current ? 'var(--cyan)' : 'var(--text-faint)'
  return (
    <div
      ref={ref}
      className={`reveal glass-panel corner-accent ${visible ? 'in' : ''}`}
      style={{ ...styles.card, borderLeft: `2px solid ${borderAccent}` }}
    >
      <div style={{ ...styles.marker, background: borderAccent }} />
      <div style={styles.top}>
        <div>
          <span style={{ ...styles.timestamp, color: textAccent }}>{job.period}</span>
          <h3 style={styles.role}>{job.role}</h3>
          <p style={styles.company}>@ {job.company}</p>
        </div>
        {job.current && <div style={styles.statusPill}>Current Role</div>}
      </div>
      <ul style={styles.points}>
        {job.points.map((p, i) => (
          <li key={i} style={styles.point}>
            <span style={{ color: textAccent, fontFamily: 'var(--font-mono)', marginRight: 10 }}>&gt;</span>{p}
          </li>
        ))}
      </ul>
    </div>
  )
}

const styles: Record<string, CSSProperties> = {
  list: { display: 'flex', flexDirection: 'column', gap: 32 },
  card: { position: 'relative', padding: '32px 32px 32px 44px' },
  marker: {
    position: 'absolute', left: 0, top: 40, width: 14, height: 14,
    transform: 'translateX(-50%) rotate(45deg)', border: '3px solid var(--bg)',
  },
  top: { display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, marginBottom: 20 },
  timestamp: { display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 6 },
  role: { margin: 0, fontFamily: 'var(--font-display)', fontSize: 22, fontWeight: 700, color: 'var(--text)' },
  company: { margin: '4px 0 0 0', fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text-dim)' },
  statusPill: {
    fontFamily: 'var(--font-mono)', fontSize: 10, letterSpacing: '0.06em',
    color: 'var(--cyan)', border: '1px solid rgba(0,240,255,0.3)', padding: '6px 12px',
    textTransform: 'uppercase', whiteSpace: 'nowrap',
  },
  points: { margin: 0, padding: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 12 },
  point: { fontSize: 16, lineHeight: 1.65, color: 'var(--text-dim)' },
}

export default Experience
