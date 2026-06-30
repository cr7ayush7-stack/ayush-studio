import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'

interface SectionWipeProps {
  children: ReactNode
  wipeColor?: string
  delay?: number
}

export default function SectionWipe({
  children,
  wipeColor = '#0d0a14',
  delay = 0,
}: SectionWipeProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-10%' })

  return (
    <div ref={ref} style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Top wipe panel — slides up to reveal */}
      <motion.div
        initial={{ y: '0%' }}
        animate={isInView ? { y: '-100%' } : { y: '0%' }}
        transition={{
          duration: 1.4,
          delay: delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50%',
          backgroundColor: wipeColor,
          zIndex: 50,
          pointerEvents: 'none',
        }}
      />

      {/* Bottom wipe panel — slides down to reveal */}
      <motion.div
        initial={{ y: '0%' }}
        animate={isInView ? { y: '100%' } : { y: '0%' }}
        transition={{
          duration: 1.4,
          delay: delay,
          ease: [0.76, 0, 0.24, 1],
        }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50%',
          backgroundColor: wipeColor,
          zIndex: 50,
          pointerEvents: 'none',
        }}
      />

      {/* Lime accent line at the meeting point */}
      <motion.div
        initial={{ scaleX: 0, opacity: 0 }}
        animate={isInView ? { scaleX: 1, opacity: [0, 1, 1, 0] } : { scaleX: 0, opacity: 0 }}
        transition={{
          duration: 1.4,
          delay: delay,
          ease: [0.76, 0, 0.24, 1],
          opacity: { duration: 1.4, times: [0, 0.2, 0.6, 1] },
        }}
        style={{
          position: 'absolute',
          top: '50%',
          left: 0,
          width: '100%',
          height: '2px',
          backgroundColor: 'var(--accent-lime)',
          boxShadow: '0 0 20px var(--accent-lime), 0 0 40px var(--accent-lime)',
          transformOrigin: 'center',
          zIndex: 51,
          pointerEvents: 'none',
        }}
      />

      {/* Children content */}
      {children}
    </div>
  )
}