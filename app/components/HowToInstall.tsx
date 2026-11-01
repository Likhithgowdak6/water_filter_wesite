'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { IMAGES } from '../data/imageMapping';

const steps = [
  {
    number: '01',
    title: 'Remove Your Existing Shower Head',
    description: 'Unscrew your existing shower head by twisting it off the shower arm by hand. No tools needed for most setups.',
    image: IMAGES.installation.step2Hands,
    alt: 'Hands unscrewing shower head by hand',
    note: 'Simple hand twist — no plumbing alterations needed.',
  },
  {
    number: '02',
    title: 'Attach the Filter',
    description: 'Thread the filter onto the pipe, then connect your shower head to the filter outlet.',
    image: IMAGES.installation.step2Diagram,
    alt: 'Installation diagram showing filter attaching to shower pipe and head',
    note: 'Compact inline design fits standard shower pipes.',
  },
  {
    number: '03',
    title: 'Tighten, Turn On, Shower',
    description: 'Hand-tighten both ends, run the water for a few seconds, and you’re done.',
    image: IMAGES.installation.step3Installed,
    alt: 'ShowerFit installed on shower arm with water flowing',
    note: 'Instant everyday shower filtration ready to use.',
  },
];

export default function HowToInstall() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-8% 0px' });

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      style={{ backgroundColor: 'var(--ivory-warm)', overflow: 'hidden' }}
    >
      <div className="section-container section-pad">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          style={{
            textAlign: 'center',
            maxWidth: '640px',
            margin: '0 auto 6rem',
          }}
        >
          <span className="label-overline" style={{ display: 'block', marginBottom: '1rem' }}>
            Installation — 3 Steps
          </span>
          <h2 className="headline-xl" style={{ marginBottom: '1.25rem' }}>
            Install It in Minutes.<br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent-sage-dark)' }}>No Tools Needed for Most Setups.</em>
          </h2>
          <p className="body-lead" style={{ color: 'var(--text-body)' }}>
            ShowerFit connects inline between your existing shower pipe and shower head with a straightforward hand-tight installation.
          </p>
        </motion.div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-8% 0px' }}
              transition={{ duration: 0.85, delay: i * 0.1, ease: "easeOut" }}
              style={{
                display: 'grid',
                gridTemplateColumns: i % 2 === 0 ? '48% 52%' : '52% 48%',
                gap: '2px',
                minHeight: '400px',
              }}
              className="install-row"
            >
              {/* Text Panel */}
              <div
                style={{
                  backgroundColor: i % 2 === 0 ? 'var(--white)' : 'var(--charcoal)',
                  padding: '4rem 4.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  order: i % 2 === 0 ? 0 : 1,
                }}
                className="install-text"
              >
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '4.5rem',
                  fontWeight: '300',
                  color: i % 2 === 0 ? 'var(--stone-200)' : 'rgba(255,255,255,0.1)',
                  lineHeight: 1,
                  marginBottom: '1.5rem',
                }}>
                  {step.number}
                </div>
                <h3
                  className="headline-md"
                  style={{
                    marginBottom: '1rem',
                    color: i % 2 === 0 ? 'var(--charcoal)' : 'white',
                  }}
                >
                  {step.title}
                </h3>
                <p
                  className="body-lead"
                  style={{
                    color: i % 2 === 0 ? 'var(--text-body)' : 'rgba(255,255,255,0.65)',
                    marginBottom: '1.5rem',
                  }}
                >
                  {step.description}
                </p>
                <div style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.6rem',
                  padding: '0.65rem 1.2rem',
                  backgroundColor: i % 2 === 0 ? 'var(--stone-100)' : 'rgba(255,255,255,0.07)',
                  border: `1px solid ${i % 2 === 0 ? 'var(--stone-200)' : 'rgba(255,255,255,0.12)'}`,
                  width: 'fit-content',
                }}>
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <circle cx="7" cy="7" r="6" stroke={i % 2 === 0 ? 'var(--accent-sage)' : 'rgba(255,255,255,0.4)'} strokeWidth="1.5"/>
                    <path d="M7 4.5V7.5L8.5 9" stroke={i % 2 === 0 ? 'var(--accent-sage)' : 'rgba(255,255,255,0.4)'} strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.8rem',
                    color: i % 2 === 0 ? 'var(--text-muted)' : 'rgba(255,255,255,0.45)',
                  }}>
                    {step.note}
                  </span>
                </div>
              </div>

              {/* Image Panel */}
              <div
                style={{
                  position: 'relative',
                  overflow: 'hidden',
                  minHeight: '380px',
                  order: i % 2 === 0 ? 1 : 0,
                }}
                className="install-image"
              >
                <Image
                  src={step.image}
                  alt={step.alt}
                  fill
                  quality={85}
                  style={{
                    objectFit: 'cover',
                    objectPosition: 'center',
                    transition: 'transform 0.9s ease',
                  }}
                  className="install-photo"
                />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85 }}
          style={{
            marginTop: '5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '2rem',
            padding: '3rem 4rem',
            backgroundColor: 'var(--white)',
            border: '1px solid var(--stone-200)',
          }}
          className="install-cta"
        >
          <div>
            <h3 className="headline-md" style={{ marginBottom: '0.5rem' }}>
              That&apos;s really all there is to it.
            </h3>
            <p className="body-text" style={{ color: 'var(--text-muted)', maxWidth: '450px' }}>
              No drilling. No plumber. No special adapter. Works with every standard shower setup in India.
            </p>
          </div>
          <a
            href="#purchase"
            id="install-shop-btn"
            onClick={(e) => { e.preventDefault(); document.querySelector('#purchase')?.scrollIntoView({ behavior: 'smooth' }); }}
            className="btn-primary"
            style={{ flexShrink: 0 }}
          >
            Get ShowerFit
            <span>→</span>
          </a>
        </motion.div>
      </div>

      <style jsx global>{`
        .install-photo:hover {
          transform: scale(1.04);
        }
        @media (max-width: 900px) {
          .install-row {
            grid-template-columns: 1fr !important;
          }
          .install-image {
            order: 0 !important;
            min-height: 260px !important;
          }
          .install-text {
            order: 1 !important;
            padding: 3rem 2rem !important;
          }
          .install-cta {
            flex-direction: column !important;
            align-items: flex-start !important;
            padding: 2.5rem 2rem !important;
          }
        }
      `}</style>
    </section>
  );
}
