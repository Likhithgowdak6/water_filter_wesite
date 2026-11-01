'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const highlights = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="13" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 14L12.5 17.5L19 11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: '20-Stage Filtration',
    body: 'Multi-layer filtration architecture designed to reduce water harshness and bring everyday refinement to your shower.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="4" y="8" width="20" height="14" rx="1" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M9 8V6C9 4.895 9.895 4 11 4H17C18.105 4 19 4.895 19 6V8" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Replaceable Cartridge',
    body: 'Self-contained internal cartridge housing allows effortless swapping whenever needed, keeping your outer chrome body permanent.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 5L16.47 10.5H22.5L17.84 14.1L19.76 20L14 16.5L8.24 20L10.16 14.1L5.5 10.5H11.53L14 5Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      </svg>
    ),
    title: 'Tool-Free Installation',
    body: 'Easily hand-tightens onto standard shower arms and shower heads in minutes. No plumber or special tools required for most setups.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M3 7H19V17H3V7Z" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M19 10H23L25 13V17H19V10Z" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="7" cy="19" r="2" stroke="currentColor" strokeWidth="1.5"/>
        <circle cx="21" cy="19" r="2" stroke="currentColor" strokeWidth="1.5"/>
      </svg>
    ),
    title: 'Free Delivery Across India',
    body: 'Doorstep delivery to homes across Indian metros and cities, packaged securely with everything needed for immediate setup.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="9" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M14 5V14L19 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Modern Chrome Design',
    body: 'Reflective, minimalist chrome finish that complements contemporary bathroom interiors, rain showers, and premium fixtures.',
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M14 4C14 4 7 10 7 16C7 19.866 10.134 23 14 23C17.866 23 21 19.866 21 16C21 10 14 4 14 4Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
        <path d="M14 18V14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    title: 'Balanced Water Flow',
    body: 'Engineered flow pathway designed to maintain steady, comfortable shower pressure throughout your daily routine.',
  },
];

export default function BrandHighlights() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-8% 0px' });

  return (
    <section
      id="brand-promise"
      ref={sectionRef}
      style={{ backgroundColor: 'var(--charcoal)', overflow: 'hidden' }}
    >
      <div className="section-container section-pad">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: '5rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
          className="highlights-header"
        >
          <div>
            <span className="label-overline" style={{ color: 'rgba(255,255,255,0.35)', display: 'block', marginBottom: '1rem' }}>
              Our Promise to You
            </span>
            <h2 className="headline-xl" style={{ color: 'white', maxWidth: '560px' }}>
              Crafted with care.<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.65)' }}>Trusted every day.</em>
            </h2>
          </div>
          <p className="body-lead" style={{ color: 'rgba(255,255,255,0.45)', maxWidth: '380px', flexShrink: 0 }}>
            Every design decision behind ShowerFit is driven by one question: what makes your shower the best it can possibly be?
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '1px',
          backgroundColor: 'rgba(255,255,255,0.06)',
        }}
        className="highlights-grid"
        >
          {highlights.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-5% 0px' }}
              transition={{ duration: 0.7, delay: i * 0.07 }}
              style={{
                backgroundColor: 'var(--charcoal)',
                padding: '3rem 2.5rem',
                transition: 'background-color 0.4s ease',
              }}
              whileHover={{ backgroundColor: '#252525' }}
            >
              <div style={{
                color: 'var(--accent-sage)',
                marginBottom: '1.5rem',
              }}>
                {item.icon}
              </div>
              <h3 style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.4rem',
                fontWeight: '500',
                color: 'white',
                marginBottom: '0.75rem',
                lineHeight: 1.2,
              }}>
                {item.title}
              </h3>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.5)',
                lineHeight: 1.65,
              }}>
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Brand statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, delay: 0.3 }}
          style={{
            marginTop: '5rem',
            textAlign: 'center',
          }}
        >
          <div style={{
            width: '1px',
            height: '60px',
            backgroundColor: 'rgba(255,255,255,0.12)',
            margin: '0 auto 2.5rem',
          }} />
          <p style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: 'clamp(1.6rem, 3.5vw, 2.8rem)',
            fontWeight: '400',
            fontStyle: 'italic',
            color: 'rgba(255,255,255,0.8)',
            maxWidth: '720px',
            margin: '0 auto',
            lineHeight: 1.3,
          }}>
            &ldquo;Your shower is the first ritual of your day. Make it count.&rdquo;
          </p>
          <div style={{
            width: '1px',
            height: '60px',
            backgroundColor: 'rgba(255,255,255,0.12)',
            margin: '2.5rem auto 0',
          }} />
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .highlights-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 1.5rem !important;
          }
          .highlights-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .highlights-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
