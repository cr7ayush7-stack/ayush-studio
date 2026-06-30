import { motion } from 'framer-motion'

// Tech stack with their brand colors
const techStack = [
  { name: 'React', color: '#61DAFB', icon: 'react' },
  { name: 'TypeScript', color: '#3178C6', icon: 'typescript' },
  { name: 'Tailwind', color: '#06B6D4', icon: 'tailwind' },
  { name: 'Framer', color: '#0055FF', icon: 'framer' },
  { name: 'Vite', color: '#646CFF', icon: 'vite' },
  { name: 'Supabase', color: '#3ECF8E', icon: 'supabase' },
  { name: 'Vercel', color: '#FFFFFF', icon: 'vercel' },
  { name: 'Cloudflare', color: '#F38020', icon: 'cloudflare' },
  { name: 'GitHub', color: '#FFFFFF', icon: 'github' },
  { name: 'Figma', color: '#F24E1E', icon: 'figma' },
]

// Icon SVGs (simplified, brand-accurate)
const Icons = {
  react: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="12" cy="12" r="2" />
      <ellipse cx="12" cy="12" rx="11" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <ellipse cx="12" cy="12" rx="11" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="11" ry="4.5" fill="none" stroke="currentColor" strokeWidth="1" transform="rotate(120 12 12)" />
    </svg>
  ),
  typescript: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <rect x="2" y="2" width="20" height="20" rx="2" fill="currentColor" />
      <text x="12" y="17" textAnchor="middle" fill="#0d0a14" fontSize="11" fontWeight="bold" fontFamily="sans-serif">TS</text>
    </svg>
  ),
  tailwind: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 6c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.31.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15zM7 12c-2.67 0-4.33 1.33-5 4 1-1.33 2.17-1.83 3.5-1.5.76.19 1.3.74 1.91 1.35.98 1 2.09 2.15 4.59 2.15 2.67 0 4.33-1.33 5-4-1 1.33-2.17 1.83-3.5 1.5-.76-.19-1.3-.74-1.91-1.35-.98-1-2.09-2.15-4.59-2.15z" />
    </svg>
  ),
  framer: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 2h16v6h-8l8 8h-8v6l-8-8h8V8H4z" />
    </svg>
  ),
  vite: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 7l10 15 10-15z" />
    </svg>
  ),
  supabase: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2L3 14h8v8l10-12h-8z" />
    </svg>
  ),
  vercel: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2L2 20h20z" />
    </svg>
  ),
  cloudflare: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.5 12.5c-.3-1.6-1.7-2.8-3.4-2.8h-.4c-.3-1.4-1.5-2.4-3-2.4-1.7 0-3.1 1.3-3.4 3-1.5.1-2.7 1.4-2.7 2.9 0 1.6 1.3 2.9 2.9 2.9h9.6c1.3 0 2.4-1 2.4-2.4 0-.6-.2-1.1-.5-1.5-.5.2-1 .3-1.5.3z" />
    </svg>
  ),
  github: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.09.66-.22.66-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.61.07-.61 1 .07 1.53 1.03 1.53 1.03.89 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02.8-.22 1.65-.33 2.5-.33.85 0 1.7.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.69-4.57 4.94.36.31.68.92.68 1.85V21c0 .27.16.58.67.48A10.01 10.01 0 0022 12c0-5.52-4.48-10-10-10z" />
    </svg>
  ),
  figma: (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
      <path d="M8 24c2.21 0 4-1.79 4-4v-4H8c-2.21 0-4 1.79-4 4s1.79 4 4 4z" />
      <path d="M4 12c0-2.21 1.79-4 4-4h4v8H8c-2.21 0-4-1.79-4-4z" />
      <path d="M4 4c0-2.21 1.79-4 4-4h4v8H8c-2.21 0-4-1.79-4-4z" />
      <path d="M12 0h4c2.21 0 4 1.79 4 4s-1.79 4-4 4h-4V0z" />
      <path d="M20 12c0 2.21-1.79 4-4 4s-4-1.79-4-4 1.79-4 4-4 4 1.79 4 4z" />
    </svg>
  ),
}

export default function Marquee() {
  // Duplicate for seamless infinite loop
  const loopItems = [...techStack, ...techStack]

  return (
    <section
      style={{
        padding: '3rem 0',
        borderTop: '1px solid var(--bg-border)',
        borderBottom: '1px solid var(--bg-border)',
        overflow: 'hidden',
        position: 'relative',
        backgroundColor: 'rgba(17, 16, 24, 0.5)',
      }}
    >
      {/* Edge fades */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '200px',
          height: '100%',
          background: 'linear-gradient(to right, var(--bg-primary), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '200px',
          height: '100%',
          background: 'linear-gradient(to left, var(--bg-primary), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 35,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{
          display: 'flex',
          gap: '4rem',
          whiteSpace: 'nowrap',
          width: 'max-content',
          alignItems: 'center',
        }}
      >
        {loopItems.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              flexShrink: 0,
              opacity: 0.7,
              transition: 'opacity 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.7'
            }}
          >
            <div style={{ color: item.color, display: 'flex' }}>
              {Icons[item.icon as keyof typeof Icons]}
            </div>
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              {item.name}
            </span>
          </div>
        ))}
      </motion.div>
    </section>
  )
}