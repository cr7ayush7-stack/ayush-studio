import { motion } from 'framer-motion'

export default function Marquee() {
  const items = [
    'React',
    'TypeScript',
    'Framer Motion',
    'UI / UX Design',
    'Supabase',
    'Cloudflare',
    'Brand Identity',
    'Tailwind CSS',
    'Web Apps',
    'Landing Pages',
    'Dashboards',
    '3D Visuals',
  ]

  // Duplicate items for seamless infinite loop
  const loopItems = [...items, ...items]

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
      {/* Fade edges left + right for cinematic effect */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '150px',
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
          width: '150px',
          height: '100%',
          background: 'linear-gradient(to left, var(--bg-primary), transparent)',
          zIndex: 2,
          pointerEvents: 'none',
        }}
      />

      <motion.div
        animate={{ x: ['0%', '-50%'] }}
        transition={{
          duration: 40,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{
          display: 'flex',
          gap: '3rem',
          whiteSpace: 'nowrap',
          width: 'max-content',
        }}
      >
        {loopItems.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '3rem',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 4vw, 3.5rem)',
                fontWeight: 600,
                color: 'var(--text-primary)',
                letterSpacing: '-0.02em',
              }}
            >
              {item}
            </span>
            <span
              style={{
                width: '12px',
                height: '12px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-violet)',
                flexShrink: 0,
              }}
            />
          </div>
        ))}
      </motion.div>
    </section>
  )
}