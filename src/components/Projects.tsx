import type { CSSProperties, ReactElement } from 'react'
import { SectionHeader } from './About'
import { useReveal } from '../useReveal'

interface Project {
  name: string
  role: string
  desc: string
  stack: string[]
}

const projects: Project[] = [
  {
    name: 'VioletCaregiver Mobile App',
    role: 'TL / SSE · VioletCaregiver',
    desc: 'Caregiver coordination mobile app with real-time updates and native device integrations.',
    stack: ['React Native', 'Context', 'Firebase', 'Native Modules'],
  },
  {
    name: 'My Profile Microproducts',
    role: 'TL / SSE · OptumRx / Optum (UHG)',
    desc: 'Suite of healthcare microproducts for member profile management at enterprise scale.',
    stack: ['React Native', 'Node.js', 'React', 'Redux'],
  },
  {
    name: 'INNERGY',
    role: 'TL / SSE · IMIH',
    desc: 'Cross-platform health app with offline-first data sync and a full web dashboard.',
    stack: ['React Native', 'Realm', 'Next.js', 'MongoDB'],
  },
  {
    name: 'Oracle Digital Assistant / Chatbot',
    role: 'TL / SSE · Exelon',
    desc: 'Enterprise chatbot on Oracle Digital Assistant integrated into retail workflows.',
    stack: ['ODA Chatbot', 'Azure App Services'],
  },
  {
    name: 'EBS Retail Chatbot',
    role: 'SDE · Exelon',
    desc: 'Retail support chatbot built on Oracle Digital Assistant with custom Node.js backend.',
    stack: ['Oracle Digital Assistant', 'Node.js', 'JavaScript'],
  },
  {
    name: 'INSPYRUS',
    role: 'SDE · Inspyrus',
    desc: 'Hybrid mobile app for invoice and approval workflows built on Ionic.',
    stack: ['Ionic 5', 'Node.js', 'JavaScript'],
  },
  {
    name: 'EMERSON',
    role: 'SDE · Emerson',
    desc: 'Industrial field-service app with offline SQLite storage and native plugin bridges.',
    stack: ['Ionic 3/4', 'TypeScript', 'Android SDK', 'Cordova'],
  },
  {
    name: 'ACTUANT',
    role: 'SDE · Hydra-Tight',
    desc: 'Enterprise tooling built with Oracle JET for equipment tracking workflows.',
    stack: ['Oracle JET', 'Node.js', 'JavaScript'],
  },
  {
    name: 'Mobile Work Force Management',
    role: 'SDE · rStar Technology',
    desc: 'Field workforce scheduling and tracking app with offline capability.',
    stack: ['Ionic v2', 'Node.js', 'SQLite'],
  },
  {
    name: 'Leave Management System',
    role: 'Associate Developer · rStar Technology',
    desc: 'Internal HR tool for leave requests and approvals with chatbot integration.',
    stack: ['Oracle JET', 'Node.js', 'SQLite'],
  },
]

const Projects = (): ReactElement => {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeader title="Projects" subtitle="Selected work and case studies" />
        <div style={styles.grid}>
          {projects.map((p) => <ProjectCard key={p.name} p={p} />)}
        </div>
      </div>
    </section>
  )
}

interface ProjectCardProps {
  p: Project
}

const ProjectCard = ({ p }: ProjectCardProps): ReactElement => {
  const [ref, visible] = useReveal()
  return (
    <div ref={ref} className={`reveal glass-panel corner-accent ${visible ? 'in' : ''}`} style={styles.card}>
      <div className="scan-line" />
      <div style={styles.thumb}>{p.name.slice(0, 2).toUpperCase()}</div>
      <h3 style={styles.name}>{p.name}</h3>
      <p style={styles.role}>{p.role}</p>
      <p style={styles.desc}>{p.desc}</p>
      <div style={styles.tags}>
        {p.stack.map((s) => <span key={s} style={styles.tag}>{s}</span>)}
      </div>
    </div>
  )
}

const styles: Record<string, CSSProperties> = {
  grid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 },
  card: { padding: 28, display: 'flex', flexDirection: 'column' },
  thumb: {
    width: 52, height: 52, display: 'flex', alignItems: 'center', justifyContent: 'center',
    fontFamily: 'var(--font-mono)', fontWeight: 700, fontSize: 16, color: 'var(--cyan)',
    background: 'rgba(0,240,255,0.08)', border: '1px solid rgba(0,240,255,0.25)', marginBottom: 18,
  },
  name: { margin: '0 0 6px 0', fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 700, color: 'var(--cyan)' },
  role: { margin: '0 0 14px 0', fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-faint)', textTransform: 'uppercase' },
  desc: { margin: '0 0 18px 0', fontSize: 16, color: 'var(--text-dim)', lineHeight: 1.65, flexGrow: 1 },
  tags: { display: 'flex', flexWrap: 'wrap', gap: 8 },
  tag: {
    fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.03em',
    color: 'var(--text-dim)', background: 'var(--bg-container-high)',
    border: '1px solid rgba(255,255,255,0.1)', padding: '5px 10px',
  },
}

export default Projects
