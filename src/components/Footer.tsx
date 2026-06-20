import { motion } from 'framer-motion'
import { ArrowUpRight, Mail } from 'lucide-react'
import { useState } from 'react'

type IconProps = { size?: number; strokeWidth?: number }

const LinkedInIcon = ({ size = 16, strokeWidth = 2 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const InstagramIcon = ({ size = 16, strokeWidth = 2 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
)

const TwitterIcon = ({ size = 16 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

type SocialItem = {
  name: string
  icon: React.ComponentType<IconProps>
  href: string
}

const socials: SocialItem[] = [
  { name: 'LinkedIn', icon: LinkedInIcon, href: 'https://linkedin.com/in/ayush-hariharan-74b381418' },
  { name: 'Instagram', icon: InstagramIcon, href: 'https://instagram.com/YOUR-IG-USERNAME' },
  { name: 'Twitter', icon: TwitterIcon, href: 'https://x.com/YOUR-X-USERNAME' },
  { name: 'Email', icon: Mail, href: 'mailto:cr7ayush7@gmail.com' },
]

const footerLinks = [
  {
    title: 'Studio',
    links: [
      { name: 'Work', href: '#work' },
      { name: 'Services', href: '#services' },
      { name: 'About', href: '#about' },
    ],
  },
  {
    title: 'Connect',
    links: [
      { name: 'Book a Call', href: 'https://calendly.com/cr7ayush7/30min' },
      { name: 'Email Us', href: 'mailto:cr7ayush7@gmail.com' },
      { name: 'LinkedIn', href: 'https://linkedin.com/in/ayush-hariharan-74b381418' },
      
    ],
  },
  {
    title: 'Resources',
    links: [
      { name: 'Case Studies', href: '#work' },
      { name: 'Process', href: '#services' },
      { name: 'FAQ', href: '#' },
    ],
  },
]

export default function Footer() {
  const [ctaHovered, setCtaHovered] = useState(false)
  const currentYear = new Date().getFullYear()

  return (
    <footer
      id="contact"
      style={{
        position: 'relative',
        padding: '8rem 2rem 3rem',
        backgroundColor: 'var(--bg-surface)',
        borderTop: '1px solid var(--bg-border)',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: '-100px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          maxWidth: '1400px',
          margin: '0 auto',
          position: 'relative',
          zIndex: 2,
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '6rem', textAlign: 'left' }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.75rem',
              marginBottom: '2rem',
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
              — 06 / Get in touch
            </span>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 10vw, 9rem)',
              fontWeight: 700,
              letterSpacing: '-0.04em',
              lineHeight: 0.95,
              marginBottom: '2rem',
            }}
          >
            Let's build{' '}
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px var(--text-primary)',
              }}
            >
              something
            </span>
            <br />
            together.
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.4vw, 1.2rem)',
              color: 'var(--text-muted)',
              maxWidth: '560px',
              lineHeight: 1.6,
              marginBottom: '3rem',
            }}
          >
            Got a project in mind? A weird idea? A site that needs a rebuild? Hop on a quick
            call — no pressure, no pitch, just a real conversation.
          </p>

          <div
            style={{
              display: 'flex',
              gap: '1rem',
              flexWrap: 'wrap',
              alignItems: 'center',
            }}
          >
            <motion.a
              href="https://calendly.com/cr7ayush7/30min"
              target="_blank"
              rel="noopener noreferrer"
              onMouseEnter={() => setCtaHovered(true)}
              onMouseLeave={() => setCtaHovered(false)}
              whileHover={{ scale: 1.04 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                fontWeight: 500,
                color: 'var(--bg-primary)',
                backgroundColor: 'var(--accent-lime)',
                padding: '1.25rem 2rem',
                borderRadius: '999px',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.75rem',
                boxShadow: ctaHovered
                  ? '0 0 40px rgba(204, 255, 0, 0.5)'
                  : '0 0 20px rgba(204, 255, 0, 0.2)',
                transition: 'box-shadow 0.3s ease',
                cursor: 'none',
              }}
            >
              Book a Free Call
              <ArrowUpRight size={22} strokeWidth={2.5} />
            </motion.a>

            <a
              href="mailto:cr7ayush7@gmail.com"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
                backgroundColor: 'transparent',
                padding: '1.25rem 2rem',
                borderRadius: '999px',
                border: '1px solid var(--bg-border)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                transition: 'all 0.3s ease',
                cursor: 'none',
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
              <Mail size={18} strokeWidth={2} />
              Email Us
            </a>
          </div>
        </motion.div>

        <div
          style={{
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, var(--bg-border), transparent)',
            marginBottom: '4rem',
          }}
        />

        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr',
            gap: '3rem',
            marginBottom: '4rem',
          }}
        >
          <div>
            <a
              href="#"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '1.75rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                textDecoration: 'none',
                letterSpacing: '-0.02em',
                display: 'inline-block',
                marginBottom: '1.5rem',
              }}
            >
              ayush<span style={{ color: 'var(--accent-lime)' }}>.</span>studio
            </a>

            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.95rem',
                color: 'var(--text-muted)',
                lineHeight: 1.6,
                maxWidth: '320px',
                marginBottom: '2rem',
              }}
            >
              A small studio building thoughtful digital products for founders who care.
            </p>

            <div style={{ display: 'flex', gap: '0.75rem' }}>
              {socials.map((social) => {
                const Icon = social.icon
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    style={{
                      width: '40px',
                      height: '40px',
                      borderRadius: '50%',
                      border: '1px solid var(--bg-border)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: 'var(--text-muted)',
                      transition: 'all 0.3s ease',
                      cursor: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-lime)'
                      e.currentTarget.style.color = 'var(--accent-lime)'
                      e.currentTarget.style.transform = 'translateY(-2px)'
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--bg-border)'
                      e.currentTarget.style.color = 'var(--text-muted)'
                      e.currentTarget.style.transform = 'translateY(0)'
                    }}
                  >
                    <Icon size={16} strokeWidth={2} />
                  </a>
                )
              })}
            </div>
          </div>

          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.7rem',
                  color: 'var(--text-muted)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  marginBottom: '1.25rem',
                }}
              >
                — {col.title}
              </h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                {col.links.map((link) => (
                  <li key={link.name} style={{ marginBottom: '0.75rem' }}>
                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.95rem',
                        color: 'var(--text-primary)',
                        textDecoration: 'none',
                        transition: 'color 0.2s ease',
                        cursor: 'none',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.color = 'var(--accent-lime)'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.color = 'var(--text-primary)'
                      }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div
          className="footer-bottom"
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingTop: '2rem',
            borderTop: '1px solid var(--bg-border)',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-lime)',
                boxShadow: '0 0 8px var(--accent-lime)',
                animation: 'pulse 2s ease-in-out infinite',
              }}
            />
            AVAILABLE FOR PROJECTS · MUMBAI → WORLDWIDE
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.7rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.1em',
            }}
          >
            © {currentYear} AYUSH.STUDIO — ALL RIGHTS RESERVED
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 968px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 2.5rem !important;
          }
          .footer-grid > div:first-child {
            grid-column: span 2;
          }
        }
        @media (max-width: 640px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: span 1;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start !important;
          }
        }
      `}</style>
    </footer>
  )
}