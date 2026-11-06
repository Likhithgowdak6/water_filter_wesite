'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { IMAGES } from '../data/imageMapping';

const benefits = [
  {
    id: 'hair',
    label: 'Hair & Scalp',
    headline: 'Hair That Feels Smoother and Easier to Manage.',
    body: 'ShowerFit is designed to reduce the harsh feel of unfiltered water, helping your hair retain its natural softness and feel less tangled after washing.',
    image: IMAGES.benefits.healthyScalp,
    alt: 'Woman with healthy, voluminous hair after using ShowerFit',
    bullets: [
      'Leaves hair feeling noticeably softer and smoother',
      'Helps reduce hard water stiffness and tangling',
      'Supports a cleaner, more comfortable scalp feel',
      'Gentle everyday care for treated or natural hair',
    ],
  },
  {
    id: 'skin',
    label: 'Skin & Bathing',
    headline: 'Give Your Skin a Fresh, Radiant Feel.',
    body: 'Unfiltered water can leave skin feeling tight and dry. ShowerFit helps reduce everyday water harshness so your shower feels like gentle personal care.',
    image: IMAGES.benefits.radiantSkin,
    alt: 'Woman with radiant, glowing skin after shower',
    bullets: [
      'Helps skin retain a softer, more moisturised feel',
      'Reduces the uncomfortable feeling of dry, tight skin',
      'Noticeably fresher, cleaner-feeling shower water',
      'Gentler on sensitive skin and everyday bathing',
    ],
  },
  {
    id: 'family',
    label: 'Everyday Care',
    headline: 'A More Comfortable Bathing Experience for Everyone.',
    body: 'From quick morning routines to evening wind-downs, ShowerFit upgrades your daily shower into a more thoughtful, refreshing ritual for your entire home.',
    image: IMAGES.benefits.familyCare,
    alt: 'Woman experiencing a comfortable, refreshing shower with filtered water',
    bullets: [
      'Thoughtful everyday care for the entire household',
      'Helps keep shower space and glass cleaner over time',
      'Fresher-smelling, more pleasant shower stream',
      'Simple, tool-free installation on existing setups',
    ],
  },
];

export default function Benefits() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-8% 0px' });

  const slideUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, delay: i * 0.15, ease: 'easeOut' as const },
    }),
  };

  return (
    <section
      id="benefits"
      ref={sectionRef}
      style={{ backgroundColor: 'var(--ivory)', overflow: 'hidden' }}
    >
      {/* Section Header */}
      <div className="section-container" style={{ paddingTop: '8rem' }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85, ease: "easeOut" }}
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            gap: '3rem',
            paddingBottom: '5rem',
            borderBottom: '1px solid var(--stone-200)',
          }}
          className="benefits-header"
        >
          <div style={{ maxWidth: '640px' }}>
            <span className="label-overline" style={{ color: 'var(--accent-sage)', display: 'block', marginBottom: '1rem' }}>
              Thoughtful Benefits
            </span>
            <h2 className="headline-xl">
              A Little Change to Your Shower.<br />
              <em style={{ fontStyle: 'italic' }}>A More Thoughtful Routine.</em>
            </h2>
          </div>
          <p className="body-lead" style={{ maxWidth: '400px', color: 'var(--text-body)', flexShrink: 0 }}>
            Bring 20-stage shower water filtration into your daily self-care routine for a cleaner, softer, and more refreshing daily shower.
          </p>
        </motion.div>
      </div>

      {/* Benefits — Full-width alternating panels */}
      {benefits.map((benefit, i) => (
        <div
          key={benefit.id}
          id={`benefit-${benefit.id}`}
          style={{
            display: 'grid',
            gridTemplateColumns: i % 2 === 0 ? '55% 45%' : '45% 55%',
            minHeight: '70vh',
          }}
          className="benefit-row"
        >
          {/* Image */}
          <motion.div
            custom={0}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              order: i % 2 === 0 ? 0 : 1,
            }}
            className="benefit-image"
          >
            <Image
              src={benefit.image}
              alt={benefit.alt}
              fill
              quality={85}
              style={{
                objectFit: 'cover',
                objectPosition: 'center top',
                transition: 'transform 0.9s ease',
              }}
              className="benefit-photo"
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: i % 2 === 0
                ? 'linear-gradient(to right, transparent 60%, var(--ivory) 100%)'
                : 'linear-gradient(to left, transparent 60%, var(--ivory) 100%)',
            }} />
          </motion.div>

          {/* Text */}
          <motion.div
            custom={1}
            variants={slideUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px' }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '5rem 5vw',
              order: i % 2 === 0 ? 1 : 0,
              backgroundColor: 'var(--ivory)',
            }}
          >
            <span className="label-overline" style={{ color: 'var(--accent-sage)', display: 'block', marginBottom: '1.25rem' }}>
              {String(i + 1).padStart(2, '0')} — {benefit.label}
            </span>
            <h3 className="headline-lg" style={{ marginBottom: '1.5rem', maxWidth: '460px' }}>
              {benefit.headline}
            </h3>
            <p className="body-lead" style={{ color: 'var(--text-body)', maxWidth: '420px', marginBottom: '2.5rem' }}>
              {benefit.body}
            </p>

            {/* Bullet list */}
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {benefit.bullets.map((bullet) => (
                <li
                  key={bullet}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.9rem',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.9rem',
                    color: 'var(--text-body)',
                  }}
                >
                  <span style={{
                    width: '20px',
                    height: '20px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--stone-100)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexShrink: 0,
                  }}>
                    <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                      <path d="M1 4L3.5 6.5L9 1" stroke="var(--accent-sage)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      ))}

      {/* Stats bar */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        style={{
          backgroundColor: 'var(--charcoal)',
          padding: '4rem 5vw',
        }}
      >
        <div className="section-container" style={{ padding: 0 }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '2rem',
            textAlign: 'center',
          }}
          className="stats-grid"
          >
            {[
              { value: '20', unit: 'Stages', label: 'Layered filtration media' },
              { value: 'Tool-Free', unit: 'Setup', label: 'Hand-tighten for most setups' },
              { value: 'Chrome', unit: 'Design', label: 'Modern bathroom aesthetic' },
              { value: 'Pan-India', unit: 'Delivery', label: 'Free shipping across India' },
            ].map((stat) => (
              <div key={stat.unit} style={{ padding: '2rem 1rem' }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '3.2rem',
                  fontWeight: '400',
                  color: 'white',
                  lineHeight: 1,
                  marginBottom: '0.25rem',
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  letterSpacing: '0.18em',
                  textTransform: 'uppercase',
                  color: 'var(--accent-sage-light)',
                  marginBottom: '0.5rem',
                }}>
                  {stat.unit}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.8rem',
                  color: 'rgba(255,255,255,0.45)',
                }}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .benefits-header {
            flex-direction: column !important;
            align-items: flex-start !important;
          }
          .benefit-row {
            grid-template-columns: 1fr !important;
          }
          .benefit-image {
            height: 340px;
            order: 0 !important;
          }
          .benefit-photo { object-position: center center !important; }
          .stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 480px) {
          .stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
