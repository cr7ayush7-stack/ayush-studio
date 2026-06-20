import { motion } from 'framer-motion'
import { useState } from 'react'

const stats = [
  { number: '4+', label: 'Projects shipped' },
  { number: '5', label: 'Platforms mastered' },
  { number: '2', label: 'Person studio' },
  { number: '∞', label: 'Interactions welcome' },
]

const principles = [
  {
    title: 'Built, not assembled',
    desc: 'No drag-and-drop templates. Every site is hand-coded in React.',
  },
  {
    title: 'Design + dev as one',
    desc: 'Designed and developed by the same team. No handoff loss.',
  },
  {
    title: 'Performance first',
    desc: 'Fast loads, smooth animations, mobile-perfect from day one.',
  },
]

// Animated abstract visual on the right
function AbstractVisual() {
  return (
    <div
      style={{
        position: 'relative',
        width: '100%',
        height: '100%',
        minHeight: '500px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Background glow */}
      <div
        style={{
          position: 'absolute',
          width: '400px',
          height: '400px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Outer rotating ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '420px',
          height: '420px',
          borderRadius: '50%',
          border: '1px dashed rgba(139, 92, 246, 0.3)',
        }}
      />

      {/* Middle ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '320px',
          height: '320px',
          borderRadius: '50%',
          border: '1px solid rgba(204, 255, 0, 0.15)',
        }}
      />

      {/* Inner ring with dots */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        style={{
          position: 'absolute',
          width: '240px',
          height: '240px',
          borderRadius: '50%',
          border: '1px solid var(--bg-border)',
        }}
      >
        {/* Dots on the ring */}
        {[0, 90, 180, 270].map((angle) => (
          <div
            key={angle}
            style={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor:
                angle === 0 || angle === 180 ? 'var(--accent-lime)' : 'var(--accent-violet)',
              transform: `rotate(${angle}deg) translateY(-120px) translateX(-4px)`,
              boxShadow: `0 0 12px ${
                angle === 0 || angle === 180 ? 'var(--accent-lime)' : 'var(--accent-violet)'
              }`,
            }}
          />
        ))}
      </motion.div>

      {/* Center pulsing core */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.9, 1, 0.9],
        }}
        transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'relative',
          width: '120px',
          height: '120px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle at 30% 30%, var(--accent-violet) 0%, rgba(139, 92, 246, 0.3) 70%, transparent 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 0 60px rgba(139, 92, 246, 0.4)',
        }}
      >
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: '2rem',
            fontWeight: 800,
            color: 'var(--bg-primary)',
            letterSpacing: '-0.05em',
          }}
        >
          AS
        </motion.div>
      </motion.div>

      {/* Floating mini orbs */}
      {[
        { x: -180, y: -150, size: 12, color: 'lime', delay: 0 },
        { x: 200, y: -80, size: 8, color: 'violet', delay: 0.5 },
        { x: -200, y: 100, size: 10, color: 'violet', delay: 1 },
        { x: 180, y: 180, size: 14, color: 'lime', delay: 1.5 },
      ].map((orb, i) => (
        <motion.div
          key={i}
          animate={{
            y: [orb.y, orb.y - 15, orb.y],
            opacity: [0.4, 1, 0.4],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: orb.delay,
            ease: 'easeInOut',
          }}
          style={{
            position: 'absolute',
            left: `calc(50% + ${orb.x}px)`,
            top: `calc(50% + ${orb.y}px)`,
            width: `${orb.size}px`,
            height: `${orb.size}px`,
            borderRadius: '50%',
            backgroundColor:
              orb.color === 'lime' ? 'var(--accent-lime)' : 'var(--accent-violet)',
            boxShadow: `0 0 16px ${
              orb.color === 'lime' ? 'var(--accent-lime)' : 'var(--accent-violet)'
            }`,
          }}
        />
      ))}
    </div>
  )
}

export default function About() {
  const [hoveredStat, setHoveredStat] = useState<number | null>(null)

  return (
    <section
      id="about"
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
              — 05 / About
            </span>
          </div>
        </motion.div>

        {/* Main grid */}
        <div
          className="about-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '1.2fr 1fr',
            gap: '5rem',
            alignItems: 'center',
          }}
        >
          {/* LEFT — Text content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                lineHeight: 1.05,
                marginBottom: '2rem',
              }}
            >
              A studio {' '}
              <span
                style={{
                  color: 'transparent',
                  WebkitTextStroke: '2px var(--text-primary)',
                }}
              >
              </span>
              obsessed with the details.
            </h2>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '1.5rem',
                maxWidth: '540px',
              }}
            >
              I'm <span style={{ color: 'var(--text-primary)' }}>Ayush</span> — a Mumbai-based
              developer and designer who went from using AI website builders to shipping
              production-grade React apps for real clients. I now run Ayush Studio with my
              partner, a product designer and 3D modeller.
            </p>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                color: 'var(--text-muted)',
                lineHeight: 1.7,
                marginBottom: '3rem',
                maxWidth: '540px',
              }}
            >
              We work small, ship fast, and care deeply about the craft. No bloated agencies,
              no template builders, no surprises — just clean design and code, delivered with{' '}
              <span style={{ color: 'var(--accent-lime)' }}>intention</span>.
            </p>

            {/* Principles */}
            <div style={{ marginBottom: '3rem' }}>
              {principles.map((p, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  style={{
                    display: 'flex',
                    gap: '1rem',
                    paddingBlock: '1.25rem',
                    borderBottom: '1px solid var(--bg-border)',
                  }}
                >
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      color: 'var(--accent-violet)',
                      letterSpacing: '0.1em',
                      paddingTop: '4px',
                      flexShrink: 0,
                    }}
                  >
                    / 0{i + 1}
                  </span>
                  <div>
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.15rem',
                        fontWeight: 700,
                        color: 'var(--text-primary)',
                        marginBottom: '0.35rem',
                        letterSpacing: '-0.01em',
                      }}
                    >
                      {p.title}
                    </h4>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        color: 'var(--text-muted)',
                        lineHeight: 1.5,
                      }}
                    >
                      {p.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Stats grid */}
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(4, 1fr)',
                gap: '1rem',
              }}
              className="stats-grid"
            >
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  onMouseEnter={() => setHoveredStat(i)}
                  onMouseLeave={() => setHoveredStat(null)}
                  style={{
                    padding: '1.25rem 1rem',
                    border: '1px solid var(--bg-border)',
                    borderRadius: '12px',
                    backgroundColor:
                      hoveredStat === i ? 'rgba(204, 255, 0, 0.05)' : 'var(--bg-surface)',
                    transition: 'all 0.3s ease',
                    cursor: 'none',
                  }}
                >
                  <div
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '2rem',
                      fontWeight: 700,
                      color:
                        hoveredStat === i ? 'var(--accent-lime)' : 'var(--text-primary)',
                      lineHeight: 1,
                      marginBottom: '0.5rem',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {stat.number}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.65rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.1em',
                      lineHeight: 1.3,
                    }}
                  >
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Abstract visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="about-visual"
          >
            <AbstractVisual />
          </motion.div>
        </div>
      </div>

      {/* Mobile responsiveness */}
      <style>{`
        @media (max-width: 968px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .about-visual {
            order: -1;
            min-height: 350px !important;
          }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  )
}