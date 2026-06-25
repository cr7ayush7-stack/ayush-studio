import { motion } from 'framer-motion'
import { Check, ArrowUpRight, MessageCircle } from 'lucide-react'
import { useState } from 'react'

type Service = {
  number: string
  title: string
  duration: string
  description: string
  includes: string[]
  startingFrom: string
}

const services: Service[] = [
  {
    number: '01',
    title: 'Launch',
    duration: '5 – 7 days',
    description:
      'A high-converting, mobile-first landing page designed to launch fast and capture leads from day one.',
    includes: [
      'Custom UI / UX design',
      'Mobile-first development',
      'Lead capture + Calendly integration',
      'Basic SEO + analytics setup',
    ],
    startingFrom: '₹15,000',
  },
  {
    number: '02',
    title: 'Scale',
    duration: '2 – 3 weeks',
    description:
      'A complete 4–6 page website with design system, smooth animations, and performance built in from the ground up.',
    includes: [
      'Full design system + brand consistency',
      'Up to 6 custom pages',
      'CMS integration (optional)',
      'Performance + SEO optimization',
    ],
    startingFrom: '₹ 20,000',
  },
  {
    number: '03',
    title: 'Build',
    duration: '4 – 6 weeks',
    description:
      'Custom dashboards, CRMs and internal tools — from requirement docs to schema design to live deployment.',
    includes: [
      'Requirements doc + user stories',
      'Database schema + auth setup',
      'Admin dashboard + role management',
      'Full deployment + handover',
    ],
    startingFrom: '₹40,000',
  },
]

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        padding: '2.5rem',
        backgroundColor: 'var(--bg-surface)',
        border: '1px solid var(--bg-border)',
        borderRadius: '20px',
        overflow: 'hidden',
        transition: 'border-color 0.3s ease, transform 0.3s ease',
        cursor: 'none',
      }}
      whileHover={{ y: -8, borderColor: '#8B5CF6' }}
    >
      {/* Glow on hover */}
      <div
        style={{
          position: 'absolute',
          top: '-50%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '300px',
          height: '300px',
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(40px)',
          opacity: isHovered ? 1 : 0,
          transition: 'opacity 0.4s ease',
          pointerEvents: 'none',
        }}
      />

      <div style={{ position: 'relative', zIndex: 2 }}>
        {/* Top — number + duration */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '2rem',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '4rem',
              fontWeight: 700,
              color: 'transparent',
              WebkitTextStroke: isHovered ? '1.5px #CCFF00' : '1.5px var(--bg-border)',
              letterSpacing: '-0.04em',
              lineHeight: 1,
              transition: 'all 0.3s ease',
            }}
          >
            {service.number}
          </span>

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              padding: '0.4rem 0.75rem',
              border: '1px solid var(--bg-border)',
              borderRadius: '999px',
            }}
          >
            {service.duration}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '1rem',
            color: 'var(--text-primary)',
          }}
        >
          {service.title}
        </h3>

        {/* Description */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: 'var(--text-muted)',
            lineHeight: 1.6,
            marginBottom: '2rem',
          }}
        >
          {service.description}
        </p>

        {/* Divider */}
        <div
          style={{
            height: '1px',
            backgroundColor: 'var(--bg-border)',
            marginBottom: '1.5rem',
          }}
        />

        {/* What's included */}
        <div style={{ marginBottom: '2rem' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '1rem',
            }}
          >
            — Includes
          </div>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {service.includes.map((item, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.75rem',
                  marginBottom: '0.75rem',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: 'var(--text-primary)',
                  lineHeight: 1.5,
                }}
              >
                <Check
                  size={16}
                  strokeWidth={2.5}
                  style={{
                    color: 'var(--accent-lime)',
                    flexShrink: 0,
                    marginTop: '3px',
                  }}
                />
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Footer — price + CTA */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '1.5rem',
            borderTop: '1px solid var(--bg-border)',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--text-muted)',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                marginBottom: '0.25rem',
              }}
            >
              Starting from
            </div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
              }}
            >
              {service.startingFrom}
            </div>
          </div>

          <motion.div
            animate={{
              x: isHovered ? 4 : 0,
              y: isHovered ? -4 : 0,
            }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            style={{
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              backgroundColor: isHovered ? 'var(--accent-lime)' : 'transparent',
              border: '1px solid',
              borderColor: isHovered ? 'var(--accent-lime)' : 'var(--bg-border)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'background-color 0.3s ease, border-color 0.3s ease',
            }}
          >
            <ArrowUpRight
              size={20}
              strokeWidth={2}
              color={isHovered ? '#0d0a14' : 'var(--text-muted)'}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

// "Talk to us" card — different style
function TalkCard({ index }: { index: number }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.a
      href="https://calendly.com/cr7ayush7/30min"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        padding: '2.5rem',
        backgroundColor: isHovered ? 'var(--accent-lime)' : 'rgba(204, 255, 0, 0.05)',
        border: '1px dashed',
        borderColor: isHovered ? 'var(--accent-lime)' : 'rgba(204, 255, 0, 0.4)',
        borderRadius: '20px',
        overflow: 'hidden',
        textDecoration: 'none',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        transition: 'all 0.4s ease',
        cursor: 'none',
        minHeight: '100%',
      }}
      whileHover={{ y: -8 }}
    >
      {/* Top */}
      <div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '2rem',
          }}
        >
          <MessageCircle
            size={48}
            strokeWidth={1.5}
            color={isHovered ? 'var(--bg-primary)' : 'var(--accent-lime)'}
            style={{ transition: 'color 0.3s ease' }}
          />

          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: isHovered ? 'var(--bg-primary)' : 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              padding: '0.4rem 0.75rem',
              border: '1px solid',
              borderColor: isHovered ? 'var(--bg-primary)' : 'var(--bg-border)',
              borderRadius: '999px',
              transition: 'all 0.3s ease',
            }}
          >
            Custom
          </span>
        </div>

        <h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
            fontWeight: 700,
            letterSpacing: '-0.02em',
            lineHeight: 1.1,
            marginBottom: '1rem',
            color: isHovered ? 'var(--bg-primary)' : 'var(--text-primary)',
            transition: 'color 0.3s ease',
          }}
        >
          Talk to us
        </h3>

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: '0.95rem',
            color: isHovered ? 'rgba(13, 10, 20, 0.7)' : 'var(--text-muted)',
            lineHeight: 1.6,
            marginBottom: '2rem',
            transition: 'color 0.3s ease',
          }}
        >
          Got something different in mind? Retainers, audits, consulting, or a custom build —
          let's hop on a quick call.
        </p>
      </div>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingTop: '1.5rem',
          borderTop: '1px solid',
          borderColor: isHovered ? 'rgba(13, 10, 20, 0.2)' : 'var(--bg-border)',
          transition: 'border-color 0.3s ease',
        }}
      >
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.65rem',
              color: isHovered ? 'rgba(13, 10, 20, 0.6)' : 'var(--text-muted)',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              marginBottom: '0.25rem',
              transition: 'color 0.3s ease',
            }}
          >
            Book a free call
          </div>
          <div
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: '1.3rem',
              fontWeight: 700,
              color: isHovered ? 'var(--bg-primary)' : 'var(--text-primary)',
              transition: 'color 0.3s ease',
            }}
          >
            30 min discovery
          </div>
        </div>

        <motion.div
          animate={{
            x: isHovered ? 4 : 0,
            y: isHovered ? -4 : 0,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          style={{
            width: '44px',
            height: '44px',
            borderRadius: '50%',
            backgroundColor: isHovered ? 'var(--bg-primary)' : 'var(--accent-lime)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background-color 0.3s ease',
          }}
        >
          <ArrowUpRight
            size={20}
            strokeWidth={2.5}
            color={isHovered ? 'var(--accent-lime)' : 'var(--bg-primary)'}
          />
        </motion.div>
      </div>
    </motion.a>
  )
}

export default function Services() {
  return (
    <section
      id="services"
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
              — 04 / Services
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
              marginBottom: '1.5rem',
            }}
          >
            Pick a{' '}
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px var(--text-primary)',
              }}
            >
              package
            </span>{' '}
            or build your own.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              color: 'var(--text-muted)',
              maxWidth: '560px',
              lineHeight: 1.6,
            }}
          >
            Fixed scope. Fixed timeline. No surprises. Or hop on a call to scope something custom.
          </p>
        </motion.div>

        {/* Services grid — 4 cards (3 packages + Talk to us) */}
        <div
          className="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1.25rem',
            alignItems: 'stretch',
          }}
        >
          {services.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
          <TalkCard index={3} />
        </div>
      </div>

      {/* Mobile responsiveness */}
      <style>{`
        @media (max-width: 1200px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .services-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  )
}