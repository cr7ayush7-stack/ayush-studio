import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'
import arunasarathiImg from '../assets/arunasarathi.webp'
import mallImg from '../assets/mall-of-america.webp'
import filumedImg from '../assets/filumed.webp'
import sweetImg from '../assets/sweet-appetites.webp'

type Project = {
  id: number
  title: string
  type: string
  status: 'LIVE' | 'WIP' | 'SELECTED' | 'DEMO'
  description: string
  stack: string[]
  url: string
  size: 'featured' | 'medium' | 'wide'
  image: string
}

const projects: Project[] = [
  {
    id: 1,
    title: 'Arunasarathi Holidays',
    type: 'Client Work · Phase 2 in Development',
    status: 'WIP',
    description:
      'Live 10-page travel agency website with SSR and dynamic routing. Currently building Phase 2 — a full CRM and admin dashboard with 71 documented features.',
    stack: ['React 19', 'TypeScript', 'TanStack Start', 'Supabase', 'Cloudflare'],
    url: 'https://arunasarathi-journeys.cr7ayush7.workers.dev',
    size: 'featured',
    image: arunasarathiImg
  },
  {
    id: 2,
    title: 'Mall of America',
    type: 'Concept Project · Interactive Deck',
    status: 'DEMO',
    description:
      'Cinematic interactive sales deck with 8 premium sections, smooth scroll and a 90+ Lighthouse performance score.',
    stack: ['React 19', 'TypeScript', 'Framer Motion', 'WebGL'],
    url: 'https://mall-of-america-sales-deck-gamma.vercel.app',
    size: 'medium',
    image: mallImg
  },
  {
    id: 3,
    title: 'Filumed Productions',
    type: 'Agency Website · In Development',
    status: 'DEMO',
    description:
      'Cinematic production house site with WebGL smoke hero, custom cursor and Vimeo integration across 11 pages.',
    stack: ['React', 'TypeScript', 'Framer Motion', 'Vimeo API'],
    url: 'https://dainty-tarsier-21cf5b.netlify.app',
    size: 'medium',
    image: filumedImg
  },
  {
    id: 4,
    title: 'Sweet Appetites',
    type: 'Landing Page · Brand Identity',
    status: 'DEMO',
    description:
      'Premium home bakery landing page with full brand identity and WhatsApp order integration. Mobile-first, conversion focused.',
    stack: ['HTML', 'CSS', 'Tailwind', 'JavaScript'],
    url: 'https://sweet-appetites-mulund-landing.cr7ayush7.workers.dev',
    size: 'wide',
    image: sweetImg
  },
]

function StatusBadge({ status }: { status: Project['status'] }) {
  const colors = {
    LIVE: { bg: 'rgba(204, 255, 0, 0.15)', text: '#CCFF00', dot: '#CCFF00' },
    WIP: { bg: 'rgba(204, 255, 0, 0.12)', text: '#CCFF00', dot: '#CCFF00' },
    SELECTED: { bg: 'rgba(139, 92, 246, 0.15)', text: '#a78bfa', dot: '#8B5CF6' },
    DEMO: { bg: 'rgba(155, 143, 168, 0.12)', text: '#9b8fa8', dot: '#9b8fa8' },
  }
  const c = colors[status]

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        padding: '0.4rem 0.75rem',
        borderRadius: '999px',
        backgroundColor: c.bg,
        fontFamily: 'var(--font-mono)',
        fontSize: '0.7rem',
        color: c.text,
        letterSpacing: '0.1em',
      }}
    >
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: c.dot,
          boxShadow: status === 'LIVE' || status === 'WIP' ? `0 0 8px ${c.dot}` : 'none',
          animation: status === 'WIP' ? 'pulse 2s ease-in-out infinite' : 'none',
        }}
      />
      {status === 'WIP' ? 'LIVE · WIP' : status}
    </div>
  )
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    })
  }

  const isFeatured = project.size === 'featured'

  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: isFeatured ? '3rem' : '2rem',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--bg-border)',
        borderRadius: '20px',
        textDecoration: 'none',
        color: 'inherit',
        overflow: 'hidden',
        minHeight: isFeatured ? '600px' : '290px',
        gridColumn: project.size === 'wide' ? 'span 2' : 'span 1',
        gridRow: project.size === 'featured' ? 'span 2' : 'span 1',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
        cursor: 'none',
      }}
      whileHover={{ borderColor: '#8B5CF6' }}
    >
      {/* Spotlight effect */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle 400px at ${mousePos.x}px ${mousePos.y}px, rgba(139, 92, 246, 0.15), transparent 70%)`,
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.3s ease',
          pointerEvents: 'none',
        }}
      />

      {/* Top section — badge + number */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <StatusBadge status={project.status} />
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--text-muted)',
            letterSpacing: '0.1em',
          }}
        >
          / 0{project.id}
        </span>
      </div>

      {/* Project image */}
<div
  className="project-image-wrapper"
  style={{
    position: 'relative',
    zIndex: 2,
    margin: '1.5rem 0',
    height: isFeatured ? '400px' : '180px',
    borderRadius: '12px',
    overflow: 'hidden',
    border: '1px solid var(--bg-border)',
  }}
>
  <motion.img
    src={project.image}
    alt={project.title}
    animate={{
      scale: isHovered ? 1.05 : 1,
    }}
    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
    style={{
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      objectPosition: 'top center',
      display: 'block',
    }}
  />
  {/* Subtle dark overlay on hover for contrast */}
  <div
    style={{
      position: 'absolute',
      inset: 0,
      background: 'linear-gradient(to bottom, transparent 60%, rgba(13, 10, 20, 0.4) 100%)',
      pointerEvents: 'none',
    }}
  />
</div>
      {/* Bottom section — title, description, stack */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            marginBottom: '0.75rem',
          }}
        >
          {project.type}
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: isFeatured ? 'clamp(2rem, 4vw, 3.5rem)' : 'clamp(1.5rem, 2.5vw, 2rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            marginBottom: '1rem',
            color: 'var(--text-primary)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            flexWrap: 'wrap',
          }}
        >
          {project.title}
          <motion.span
            animate={{
              x: isHovered ? 8 : 0,
              y: isHovered ? -8 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{ display: 'inline-flex' }}
          >
            <ArrowUpRight size={isFeatured ? 36 : 24} strokeWidth={2} />
          </motion.span>
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: isFeatured ? '1.05rem' : '0.95rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            marginBottom: '1.5rem',
            maxWidth: '520px',
          }}
        >
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {project.stack.map((tech) => (
            <span
              key={tech}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                padding: '0.35rem 0.75rem',
                border: '1px solid var(--bg-border)',
                borderRadius: '999px',
                backgroundColor: 'rgba(13, 10, 20, 0.5)',
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

export default function Work() {
  return (
    <section
      id="work"
      style={{
        padding: '8rem 2rem',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
        }}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: '4rem' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '1.5rem',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-violet)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
              }}
            >
              — 02 / Selected Work
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              maxWidth: '900px',
            }}
          >
            Things we've{' '}
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px var(--text-primary)',
              }}
            >
              shipped
            </span>{' '}
            recently.
          </h2>
        </motion.div>

        {/* Bento grid */}
        <div
          className="work-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '1.25rem',
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>

      {/* Mobile responsiveness */}
     <style>{`
  @media (max-width: 768px) {
    .work-grid {
      grid-template-columns: 1fr !important;
    }
    .work-grid > a {
      grid-column: span 1 !important;
      grid-row: span 1 !important;
      min-height: 400px !important;
    }
    .project-image-wrapper {
      height: 280px !important;
    }
  }
`}</style>
    </section>
  )
}