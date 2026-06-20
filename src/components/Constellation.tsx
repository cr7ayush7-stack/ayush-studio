import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'

type Star = {
  id: number
  label: string
  description: string
  size: 'sm' | 'md' | 'lg'
  color: 'lime' | 'violet'
  x: number // percentage position
  y: number
}

const stars: Star[] = [
  {
    id: 1,
    label: 'DEVELOPMENT',
    description: 'React, TypeScript & modern frameworks',
    size: 'lg',
    color: 'lime',
    x: 25,
    y: 22,
  },
  {
    id: 2,
    label: 'DESIGN',
    description: 'UI/UX systems built to convert',
    size: 'lg',
    color: 'violet',
    x: 65,
    y: 22,
  },
  {
    id: 3,
    label: '3D',
    description: 'Rhino modelling & visual storytelling',
    size: 'md',
    color: 'violet',
    x: 45,
    y: 45,
  },
  {
    id: 4,
    label: 'BRAND',
    description: 'Identity systems & visual language',
    size: 'md',
    color: 'lime',
    x: 25,
    y: 65,
  },
  {
    id: 5,
    label: 'DEPLOYMENT',
    description: 'Cloudflare, Vercel & production-ready setups',
    size: 'md',
    color: 'lime',
    x: 65,
    y: 65,
  },
  {
    id: 6,
    label: 'WIREFRAME',
    description: 'Information architecture & flow mapping',
    size: 'sm',
    color: 'violet',
    x: 45,
    y: 10,
  },
  {
    id: 7,
    label: 'PLAN',
    description: 'BRDs, user stories & scope clarity',
    size: 'sm',
    color: 'violet',
    x: 45,
    y: 85,
  },
]
const sizeMap = {
  sm: { star: 14, glow: 30, ring: 36 },
  md: { star: 20, glow: 50, ring: 52 },
  lg: { star: 28, glow: 70, ring: 70 },
}

const colorMap = {
  lime: { primary: '#CCFF00', soft: 'rgba(204, 255, 0, 0.3)' },
  violet: { primary: '#8B5CF6', soft: 'rgba(139, 92, 246, 0.3)' },
}

// Background twinkling dots (decorative)
const backgroundDots = Array.from({ length: 40 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 100,
  size: Math.random() * 2 + 1,
  delay: Math.random() * 3,
}))

function StarComponent({
  star,
  isActive,
  onHover,
  onLeave,
  isMobile,
}: {
  star: Star
  isActive: boolean
  onHover: () => void
  onLeave: () => void
  isMobile: boolean
}) {
  const size = sizeMap[star.size]
  const color = colorMap[star.color]

  return (
    <div
      onMouseEnter={!isMobile ? onHover : undefined}
      onMouseLeave={!isMobile ? onLeave : undefined}
      style={{
        position: 'absolute',
        left: `${star.x}%`,
        top: `${star.y}%`,
        transform: 'translate(-50%, -50%)',
        cursor: 'none',
        zIndex: isActive ? 10 : 5,
      }}
    >
      {/* Outer glow */}
      <motion.div
        animate={{
          scale: isActive ? 1.5 : 1,
          opacity: isActive ? 1 : 0.4,
        }}
        transition={{ duration: 0.4 }}
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: `${size.glow}px`,
          height: `${size.glow}px`,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${color.soft} 0%, transparent 70%)`,
          filter: 'blur(8px)',
          pointerEvents: 'none',
        }}
      />

      {/* Floating wrapper */}
      <motion.div
        animate={{
          y: [0, -8, 0],
        }}
        transition={{
          duration: 3 + (star.id % 3),
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {/* Ring pulse on active */}
        {isActive && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0.8 }}
            animate={{ scale: 2, opacity: 0 }}
            transition={{ duration: 1.2, repeat: Infinity }}
            style={{
              position: 'absolute',
              width: `${size.ring}px`,
              height: `${size.ring}px`,
              borderRadius: '50%',
              border: `1.5px solid ${color.primary}`,
              pointerEvents: 'none',
            }}
          />
        )}

        {/* Star SVG */}
        <motion.svg
          width={size.star}
          height={size.star}
          viewBox="0 0 24 24"
          animate={{
            scale: isActive ? 1.3 : 1,
            rotate: isActive ? 180 : 0,
          }}
          transition={{ duration: 0.6 }}
          style={{ filter: isActive ? `drop-shadow(0 0 8px ${color.primary})` : 'none' }}
        >
          <path
            d="M12 2L14 10L22 12L14 14L12 22L10 14L2 12L10 10L12 2Z"
            fill={isActive ? color.primary : 'rgba(245, 240, 232, 0.6)'}
            style={{ transition: 'fill 0.3s ease' }}
          />
        </motion.svg>

        {/* Label */}
        <AnimatePresence>
  {isActive && (
    <motion.div
      initial={{ opacity: 0, y: 10, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 5, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      style={{
        position: 'absolute',
        top: 'calc(100% + 10px)',
        // Anchor right side stars to RIGHT edge instead of center
        ...(star.x >= 55
          ? { right: '0', left: 'auto', transform: 'none' }
          : star.x <= 35
          ? { left: '0', right: 'auto', transform: 'none' }
          : { left: '50%', transform: 'translateX(-50%)' }),
        pointerEvents: 'none',
        zIndex: 20,
        width: '110px',
      }}
    >
      <div
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: '0.9rem',
          fontWeight: 700,
          color: color.primary,
          letterSpacing: '-0.01em',
          marginBottom: '0.35rem',
          textAlign:
            star.x >= 55 ? 'right' : star.x <= 35 ? 'left' : 'center',
          whiteSpace: 'normal',
          lineHeight: 1.1,
        }}
      >
        {star.label}
      </div>
      <div
        style={{
          fontFamily: 'var(--font-mono)',
          fontSize: '0.58rem',
          color: 'var(--text-muted)',
          letterSpacing: '0.03em',
          textAlign:
            star.x >= 55 ? 'right' : star.x <= 35 ? 'left' : 'center',
          lineHeight: 1.4,
          whiteSpace: 'normal',
          wordWrap: 'break-word',
        }}
      >
        {star.description}
      </div>
    </motion.div>
  )}
</AnimatePresence>
      </motion.div>
    </div>
  )
}

export default function Constellation() {
  const [activeId, setActiveId] = useState<number | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const [cycleIndex, setCycleIndex] = useState(0)

  // Detect mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window)
    }
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-cycle stars on mobile
  useEffect(() => {
    if (!isMobile) return

    const interval = setInterval(() => {
      setCycleIndex((prev) => (prev + 1) % stars.length)
    }, 2000)

    return () => clearInterval(interval)
  }, [isMobile])

  // Set active based on mobile cycle or hover
  const currentActive = isMobile ? stars[cycleIndex].id : activeId

  // Find connection lines from active star
  const getLines = () => {
    if (!currentActive) return []
    const activeStar = stars.find((s) => s.id === currentActive)
    if (!activeStar) return []
    return stars
      .filter((s) => s.id !== currentActive)
      .slice(0, 3)
      .map((s) => ({ from: activeStar, to: s }))
  }

  return (
    <section
      style={{
        padding: '8rem 2rem 6rem',
        position: 'relative',
        overflow: 'hidden',
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
          style={{ marginBottom: '3rem', textAlign: 'center' }}
        >
          <div
            style={{
              display: 'inline-flex',
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
              — 03 / Our Universe
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 700,
              letterSpacing: '-0.03em',
              lineHeight: 1,
              marginBottom: '1rem',
            }}
          >
            A small{' '}
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px var(--text-primary)',
              }}
            >
              constellation
            </span>{' '}
            of skills.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginTop: '1.5rem',
            }}
          >
            {isMobile ? (
  <>Stars cycling through <span style={{ color: 'var(--accent-lime)' }}>capabilities</span></>
) : (
  <>Hover the stars to <span style={{ color: 'var(--accent-lime)' }}>explore</span></>
)}
          </p>
        </motion.div>

        {/* Star field */}
        <motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.2, delay: 0.3 }}
  className="star-field"
  style={{
    position: 'relative',
    width: '100%',
    height: isMobile ? '400px' : '500px',
    borderRadius: '24px',
    border: '1px solid var(--bg-border)',
    background:
      'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.08) 0%, transparent 70%)',
    overflow: 'hidden',
  }}
>
          {/* Background twinkling dots */}
          {backgroundDots.map((dot) => (
            <motion.div
              key={dot.id}
              animate={{
                opacity: [0.2, 0.8, 0.2],
              }}
              transition={{
                duration: 2 + dot.delay,
                repeat: Infinity,
                delay: dot.delay,
              }}
              style={{
                position: 'absolute',
                left: `${dot.x}%`,
                top: `${dot.y}%`,
                width: `${dot.size}px`,
                height: `${dot.size}px`,
                borderRadius: '50%',
                backgroundColor: 'rgba(245, 240, 232, 0.4)',
              }}
            />
          ))}

          {/* Connection lines (SVG overlay) */}
          <svg
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 3,
            }}
          >
            {getLines().map((line, i) => (
              <motion.line
                key={i}
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.4 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                x1={`${line.from.x}%`}
                y1={`${line.from.y}%`}
                x2={`${line.to.x}%`}
                y2={`${line.to.y}%`}
                stroke="#8B5CF6"
                strokeWidth="1"
                strokeDasharray="4 4"
              />
            ))}
          </svg>

          {/* Stars */}
          {stars.map((star) => (
            <StarComponent
              key={star.id}
              star={star}
              isActive={currentActive === star.id}
              onHover={() => setActiveId(star.id)}
              onLeave={() => setActiveId(null)}
              isMobile={isMobile}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}