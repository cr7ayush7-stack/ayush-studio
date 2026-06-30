import { motion, AnimatePresence } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'
import { useState, useEffect } from 'react'

import arunasarathiImg from '../assets/arunasarathi.webp'
import mallImg from '../assets/mall-of-america.webp'
import filumedImg from '../assets/filumed.webp'

const projects = [
  { name: 'arunasarathi-holidays.com', img: arunasarathiImg },
  { name: 'mall-of-america.studio', img: mallImg },
  { name: 'filumed-productions.com', img: filumedImg },
]

export default function Hero() {
  const [activeProject, setActiveProject] = useState(0)
  const headlineWords = ['We', 'Build', 'Digital', 'Experiences']

  // Auto-cycle through projects every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveProject((prev) => (prev + 1) % projects.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '8rem 2rem 4rem',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle grid background */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            linear-gradient(rgba(139, 92, 246, 0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(139, 92, 246, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      

      <div
        className="hero-grid"
        style={{
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1.1fr 0.9fr',
          gap: '4rem',
          alignItems: 'center',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* LEFT — Text content */}
        <div>
          {/* Small label */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '2.5rem',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-lime)',
                boxShadow: '0 0 10px var(--accent-lime)',
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
              Creative Studio — Est. 2025
            </span>
          </motion.div>

          {/* Main headline — letter scatter animation */}
<h1
  style={{
    fontFamily: 'var(--font-display)',
    fontSize: 'clamp(2.5rem, 7vw, 6rem)',
    fontWeight: 700,
    lineHeight: 0.95,
    letterSpacing: '-0.04em',
    marginBottom: '2rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.2em 0.3em',
  }}
>
  {headlineWords.map((word, wordIdx) => (
    <span
      key={wordIdx}
      style={{
        display: 'inline-flex',
        overflow: 'visible',
      }}
    >
      {word.split('').map((letter, letterIdx) => {
        // Random scatter start position for each letter
        const randomX = (Math.random() - 0.5) * 400
        const randomY = (Math.random() - 0.5) * 300
        const randomRotate = (Math.random() - 0.5) * 180

        return (
          <motion.span
            key={letterIdx}
            initial={{
              x: randomX,
              y: randomY,
              rotate: randomRotate,
              opacity: 0,
              scale: 0.3,
            }}
            animate={{
              x: 0,
              y: 0,
              rotate: 0,
              opacity: 1,
              scale: 1,
            }}
            transition={{
              duration: 1.2,
              delay: 0.3 + wordIdx * 0.15 + letterIdx * 0.04,
              ease: [0.16, 1, 0.3, 1],
              opacity: { duration: 0.4, delay: 0.3 + wordIdx * 0.15 + letterIdx * 0.04 },
            }}
            style={{
              display: 'inline-block',
              color: wordIdx === 2 ? 'transparent' : 'var(--text-primary)',
              WebkitTextStroke: wordIdx === 2 ? '2px var(--text-primary)' : 'none',
              transformOrigin: 'center',
            }}
          >
            {letter}
          </motion.span>
        )
      })}
    </span>
  ))}
</h1>

          {/* Subtext — NEW personalized copy */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              color: 'var(--text-muted)',
              maxWidth: '480px',
              lineHeight: 1.6,
              marginBottom: '2.5rem',
            }}
          >
            AI builders and template agencies have made every 
website look the same. We don't. We design and build 
custom sites that actually convert — for founders 
who care about quality.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
            }}
          >
            <a
              href="https://calendly.com/cr7ayush7/30min"
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="book"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--bg-primary)',
                backgroundColor: 'var(--accent-lime)',
                padding: '1rem 1.75rem',
                borderRadius: '999px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'transform 0.2s ease, box-shadow 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.04)'
                e.currentTarget.style.boxShadow = '0 0 30px rgba(204, 255, 0, 0.4)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              Book a Free Call <ArrowUpRight size={18} strokeWidth={2.5} />
            </a>

            <a
              href="#work"
              data-cursor="view"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                backgroundColor: 'transparent',
                padding: '1rem 1.75rem',
                borderRadius: '999px',
                border: '1px solid var(--bg-border)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'border-color 0.2s ease, background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'var(--accent-violet)'
                e.currentTarget.style.backgroundColor = 'rgba(139, 92, 246, 0.08)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'var(--bg-border)'
                e.currentTarget.style.backgroundColor = 'transparent'
              }}
            >
              View Work <ArrowDown size={18} strokeWidth={2.5} />
            </a>
          </motion.div>

          {/* Bottom info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.8 }}
            style={{
              marginTop: '3rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              lineHeight: 1.8,
            }}
          >
            <div>— 01 / Available for projects</div>
            <div>— Mumbai → Worldwide</div>
          </motion.div>
        </div>

        {/* RIGHT — Animated Browser Preview */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: -20 }}
          animate={{ opacity: 1, scale: 1, rotateY: -8 }}
          transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="browser-preview"
          style={{
            perspective: '1500px',
            transformStyle: 'preserve-3d',
          }}
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              transform: 'rotateY(-8deg) rotateX(3deg)',
              boxShadow: '0 30px 80px rgba(139, 92, 246, 0.25), 0 0 60px rgba(204, 255, 0, 0.1)',
              borderRadius: '12px',
              overflow: 'hidden',
              border: '1px solid var(--bg-border)',
              backgroundColor: 'var(--bg-surface)',
            }}
          >
            {/* Browser chrome */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.75rem 1rem',
                backgroundColor: 'rgba(17, 16, 24, 0.95)',
                borderBottom: '1px solid var(--bg-border)',
              }}
            >
              {/* Traffic lights */}
              <div style={{ display: 'flex', gap: '0.4rem' }}>
                <span
                  style={{
                    width: '11px',
                    height: '11px',
                    borderRadius: '50%',
                    backgroundColor: '#FF5F57',
                  }}
                />
                <span
                  style={{
                    width: '11px',
                    height: '11px',
                    borderRadius: '50%',
                    backgroundColor: '#FFBD2E',
                  }}
                />
                <span
                  style={{
                    width: '11px',
                    height: '11px',
                    borderRadius: '50%',
                    backgroundColor: '#28C840',
                  }}
                />
              </div>

              {/* URL bar */}
              <div
                style={{
                  flex: 1,
                  marginLeft: '1rem',
                  padding: '0.35rem 0.75rem',
                  backgroundColor: 'rgba(13, 10, 20, 0.8)',
                  borderRadius: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-lime)',
                    boxShadow: '0 0 6px var(--accent-lime)',
                  }}
                />
                <AnimatePresence mode="wait">
                  <motion.span
                    key={activeProject}
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {projects[activeProject].name}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>

            {/* Browser viewport — cycles through projects */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16 / 11',
                overflow: 'hidden',
                backgroundColor: 'var(--bg-primary)',
              }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={activeProject}
                  src={projects[activeProject].img}
                  alt={projects[activeProject].name}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top center',
                  }}
                />
              </AnimatePresence>

              {/* Project counter overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '1rem',
                  right: '1rem',
                  display: 'flex',
                  gap: '0.4rem',
                  zIndex: 2,
                }}
              >
                {projects.map((_, i) => (
                  <span
                    key={i}
                    style={{
                      width: i === activeProject ? '20px' : '6px',
                      height: '6px',
                      borderRadius: '999px',
                      backgroundColor:
                        i === activeProject ? 'var(--accent-lime)' : 'rgba(245, 240, 232, 0.3)',
                      transition: 'all 0.4s ease',
                    }}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Mobile responsiveness */}
      <style>{`
        @media (max-width: 968px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .browser-preview {
            order: -1;
            perspective: none !important;
          }
          .browser-preview > div {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}