import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

type CursorVariant = 'default' | 'view' | 'book' | 'link'

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [variant, setVariant] = useState<CursorVariant>('default')
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => setIsVisible(false)

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement

      // Check for data-cursor attribute
      const cursorEl = target.closest('[data-cursor]') as HTMLElement
      if (cursorEl) {
        const cursorType = cursorEl.getAttribute('data-cursor') as CursorVariant
        setVariant(cursorType || 'default')
        return
      }

      // Default link/button behavior
      if (
        target.tagName === 'A' ||
        target.tagName === 'BUTTON' ||
        target.closest('a') ||
        target.closest('button')
      ) {
        setVariant('link')
      } else {
        setVariant('default')
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('mouseover', handleMouseOver)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('mouseover', handleMouseOver)
    }
  }, [])

  if (typeof window !== 'undefined' && 'ontouchstart' in window) {
    return null
  }

  // Cursor sizes/styles for each variant
  const isExpanded = variant === 'view' || variant === 'book' || variant === 'link'

  return (
    <>
      {/* Small dot */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          backgroundColor: 'var(--accent-lime)',
          pointerEvents: 'none',
          zIndex: 9999,
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          x: position.x - 4,
          y: position.y - 4,
          scale: isExpanded ? 0 : 1,
        }}
        transition={{ type: 'spring', stiffness: 500, damping: 28, mass: 0.3 }}
      />

      {/* Larger circle / text bubble */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9998,
          opacity: isVisible ? 1 : 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.65rem',
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          color: 'var(--bg-primary)',
          whiteSpace: 'nowrap',
          overflow: 'hidden',
        }}
        animate={{
          x: position.x - (variant === 'view' || variant === 'book' ? 50 : 18),
          y: position.y - (variant === 'view' || variant === 'book' ? 22 : 18),
          width: variant === 'view' || variant === 'book' ? '100px' : '36px',
          height: variant === 'view' || variant === 'book' ? '44px' : '36px',
          borderRadius: variant === 'view' || variant === 'book' ? '999px' : '50%',
          backgroundColor:
            variant === 'view'
              ? 'var(--accent-lime)'
              : variant === 'book'
              ? 'var(--accent-lime)'
              : variant === 'link'
              ? 'rgba(139, 92, 246, 0.15)'
              : 'transparent',
          borderWidth: '1.5px',
          borderStyle: 'solid',
          borderColor:
            variant === 'view' || variant === 'book'
              ? 'var(--accent-lime)'
              : 'var(--accent-violet)',
          scale: variant === 'link' ? 1.5 : 1,
        }}
        transition={{ type: 'spring', stiffness: 200, damping: 20, mass: 0.5 }}
      >
        <AnimatePresence mode="wait">
          {variant === 'view' && (
            <motion.span
              key="view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              VIEW ↗
            </motion.span>
          )}
          {variant === 'book' && (
            <motion.span
              key="book"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              BOOK ↗
            </motion.span>
          )}
        </AnimatePresence>
      </motion.div>
    </>
  )
}