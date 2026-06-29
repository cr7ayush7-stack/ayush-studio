import { motion } from 'framer-motion'
import { ArrowUpRight, ArrowDown } from 'lucide-react'

export default function Hero() {
  // Headline split into words for stagger animation
  const headlineWords = ['Design +', 'React builds.', 'Fast', 'Production ready']

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const wordVariants = {
    hidden: { y: 100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  }

  return (
    <section
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
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

      {/* Glow orb behind content */}
      <div
        style={{
          position: 'absolute',
          top: '40%',
          right: '15%',
          width: '500px',
          height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.25) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          width: '100%',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
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
            Founder-led studio (Ayush & team)
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(3rem, 9vw, 8.5rem)',
            fontWeight: 700,
            lineHeight: 0.95,
            letterSpacing: '-0.04em',
            marginBottom: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.2em 0.3em',
          }}
        >
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              variants={wordVariants}
              style={{
                display: 'inline-block',
                color: i === 2 ? 'transparent' : 'var(--text-primary)',
                WebkitTextStroke: i === 2 ? '2px var(--text-primary)' : 'none',
              }}
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.4vw, 1.25rem)',
            color: 'var(--text-muted)',
            maxWidth: '540px',
            lineHeight: 1.6,
            marginBottom: '3rem',
          }}
        >
          A boutique design + dev studio building high-converting websites,
          dashboards and brand systems for founders who want more than a template.
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
            href="#contact"
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

        {/* Bottom decorative info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.8 }}
          style={{
            position: 'absolute',
            bottom: '-2rem',
            right: '0',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.7rem',
            color: 'var(--text-muted)',
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            textAlign: 'right',
            lineHeight: 1.8,
          }}
        >
          <div>— 01 / Available for projects</div>
          <div>— Mumbai → Worldwide</div>
        </motion.div>
      </div>
    </section>
  )
}