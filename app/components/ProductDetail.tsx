'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { IMAGES } from '../data/imageMapping';

const filterStages = [
  { stage: '01', material: '20-Stage Filtration Design', role: 'Multi-layer internal media matrix engineered for daily shower water refinement' },
  { stage: '02', material: 'Replaceable Cartridge System', role: 'Self-contained internal module designed for clean, tool-free replacement' },
  { stage: '03', material: 'Polished Chrome Exterior', role: 'Sleek, modern metallic finish that complements contemporary bathroom fittings' },
  { stage: '04', material: 'Universal Shower Connection', role: 'Standard thread engineered to install inline between your shower pipe and head' },
  { stage: '05', material: 'Leak-Resistant Threaded Housing', role: 'Precision threading engineered to maintain consistent flow and prevent drips' },
  { stage: '06', material: 'Everyday Self-Care Upgrade', role: 'Designed to reduce everyday water harshness for a softer, more refreshing shower' },
];

export default function ProductDetail() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-8% 0px' });

  return (
    <section
      id="product-detail"
      ref={sectionRef}
      style={{ backgroundColor: 'var(--ivory)', overflow: 'hidden' }}
    >
      <div className="section-container section-pad">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.85 }}
          style={{ marginBottom: '6rem' }}
        >
          <span className="label-overline" style={{ color: 'var(--accent-sage)', display: 'block', marginBottom: '1rem' }}>
            Product Detail
          </span>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', alignItems: 'end' }} className="detail-header-grid">
            <h2 className="headline-xl">
              20 stages.<br />
              <em style={{ fontStyle: 'italic' }}>Each one matters.</em>
            </h2>
            <p className="body-lead" style={{ color: 'var(--text-body)' }}>
              Unlike basic single-stage filters, ShowerFit uses a meticulously layered sequence of filtration media — each one targeting a specific water contaminant for comprehensive whole-water purification.
            </p>
          </div>
        </motion.div>

        {/* Main layout: filter image + stage list */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'start',
        }}
        className="detail-main-grid"
        >
          {/* Left: Filter Cartridge Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{ position: 'sticky', top: '8rem' }}
            className="detail-sticky"
          >
            <div style={{
              position: 'relative',
              backgroundColor: 'var(--ivory-warm)',
              padding: '3rem 2rem',
              marginBottom: '1.5rem',
            }}>
              <Image
                src={IMAGES.filter.cartridgeDetailed}
                alt="ShowerFit 20-stage filter cartridge — cross-section view showing all media layers"
                width={500}
                height={540}
                quality={90}
                style={{
                  width: '100%',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
              {/* Label overlays */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                backgroundColor: 'white',
                padding: '0.75rem 1.25rem',
                border: '1px solid var(--stone-200)',
              }}>
                <span style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '2rem',
                  fontWeight: '500',
                  color: 'var(--charcoal)',
                  display: 'block',
                  lineHeight: 1,
                }}>
                  20
                </span>
                <span className="label-overline" style={{ marginTop: '0.2rem', display: 'block' }}>
                  Stages
                </span>
              </div>
            </div>

            {/* Spec list */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '1px',
              backgroundColor: 'var(--stone-200)',
              border: '1px solid var(--stone-200)',
            }}>
              {[
                { label: 'Filtration', value: '20-Stage Media Architecture' },
                { label: 'Exterior', value: 'Modern Polished Chrome' },
                { label: 'Cartridge', value: 'Replaceable Core System' },
                { label: 'Fitting', value: 'Standard Shower Arm Connection' },
                { label: 'Installation', value: 'Tool-free for most setups' },
                { label: 'Maintenance', value: 'Simple hand twist cartridge swap' },
              ].map((spec) => (
                <div
                  key={spec.label}
                  style={{
                    backgroundColor: 'var(--white)',
                    padding: '1rem 1.25rem',
                  }}
                >
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                    display: 'block',
                    marginBottom: '0.25rem',
                  }}>
                    {spec.label}
                  </span>
                  <span style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.875rem',
                    color: 'var(--charcoal)',
                    fontWeight: '500',
                  }}>
                    {spec.value}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Stage list */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {filterStages.map((stage, i) => (
                <motion.div
                  key={stage.stage}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-5% 0px' }}
                  transition={{ duration: 0.6, delay: i * 0.04 }}
                  style={{
                    display: 'flex',
                    gap: '1.5rem',
                    padding: '1.5rem 0',
                    borderBottom: '1px solid var(--stone-200)',
                    alignItems: 'flex-start',
                    cursor: 'default',
                    transition: 'background-color 0.3s ease',
                  }}
                  whileHover={{ backgroundColor: 'rgba(123, 158, 135, 0.05)' }}
                >
                  {/* Stage number */}
                  <span style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '1rem',
                    fontWeight: '500',
                    color: 'var(--stone-300)',
                    letterSpacing: '0.04em',
                    minWidth: '36px',
                    paddingTop: '0.1rem',
                    flexShrink: 0,
                  }}>
                    {stage.stage}
                  </span>

                  {/* Divider */}
                  <div style={{
                    width: '1px',
                    backgroundColor: 'var(--stone-200)',
                    alignSelf: 'stretch',
                    flexShrink: 0,
                  }} />

                  {/* Content */}
                  <div>
                    <h4 style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '1.15rem',
                      fontWeight: '500',
                      color: 'var(--charcoal)',
                      marginBottom: '0.3rem',
                      lineHeight: 1.2,
                    }}>
                      {stage.material}
                    </h4>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.825rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.5,
                    }}>
                      {stage.role}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Compatibility note */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              style={{
                marginTop: '2.5rem',
                padding: '2rem',
                backgroundColor: 'var(--ivory-warm)',
                border: '1px solid var(--stone-200)',
              }}
            >
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.2rem',
                color: 'var(--charcoal)',
                lineHeight: 1.4,
                marginBottom: '0.75rem',
              }}>
                Designed for standard Indian shower setups.
              </p>
              <p className="body-text" style={{ color: 'var(--text-muted)' }}>
                Easily connects inline between your existing shower arm and shower head — engineered for wall-mounted, overhead, and handheld setups with no plumbing modifications needed for most homes.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 1024px) {
          .detail-sticky {
            position: static !important;
          }
        }
        @media (max-width: 900px) {
          .detail-header-grid {
            grid-template-columns: 1fr !important;
            gap: 1.5rem !important;
          }
          .detail-main-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
