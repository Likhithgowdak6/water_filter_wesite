'use client';

import { useRef } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { IMAGES } from '../data/imageMapping';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.2, delayChildren: 0.1 } },
} as const;

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: 'easeOut' as const },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: 'easeOut' as const },
  },
};

export default function IntroFilter() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-8% 0px' });

  return (
    <section
      id="filter"
      ref={sectionRef}
      style={{ backgroundColor: 'var(--ivory)', overflow: 'hidden' }}
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          style={{
            paddingTop: '8rem',
            paddingBottom: '5rem',
            textAlign: 'center',
            maxWidth: '720px',
            margin: '0 auto',
          }}
        >
          <motion.span variants={slideUp} className="label-overline" style={{ display: 'block', marginBottom: '1.25rem', color: 'var(--accent-sage)' }}>
            Introducing ShowerFit
          </motion.span>
          <motion.h2 variants={slideUp} className="headline-xl" style={{ marginBottom: '1.5rem' }}>
            Meet Your Everyday<br />
            <em style={{ fontStyle: 'italic', color: 'var(--accent-sage-dark)' }}>Shower Upgrade.</em>
          </motion.h2>
          <motion.p variants={slideUp} className="body-lead" style={{ color: 'var(--text-body)', maxWidth: '580px', margin: '0 auto' }}>
            Introducing a 20-stage shower filter designed to bring filtration into your everyday shower routine.
          </motion.p>
        </motion.div>

        {/* Main Feature Composition */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px',
            marginBottom: '2px',
          }}
          className="intro-grid-top"
        >
          {/* Large product image */}
          <motion.div
            variants={slideRight}
            style={{
              position: 'relative',
              height: '600px',
              overflow: 'hidden',
              backgroundColor: 'var(--ivory-warm)',
            }}
          >
            <Image
              src={IMAGES.product.onStone}
              alt="ShowerFit shower filter unit — premium chrome finish on stone surface"
              fill
              quality={90}
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                padding: '3rem',
                transition: 'transform 0.8s ease',
              }}
              className="intro-product-img"
            />
            {/* Label strip */}
            <div style={{
              position: 'absolute',
              bottom: '2rem',
              left: '2rem',
              right: '2rem',
            }}>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.65rem',
                fontWeight: '600',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
              }}>
                The ShowerFit Unit
              </span>
            </div>
          </motion.div>

          {/* Right panel — key specs */}
          <motion.div
            variants={slideUp}
            style={{
              backgroundColor: 'var(--charcoal)',
              padding: '4rem 3.5rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '3rem',
            }}
          >
            <div>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.65rem',
                fontWeight: '600',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.4)',
                display: 'block',
                marginBottom: '1.5rem',
              }}>
                What makes it special
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {[
                  {
                    number: '01',
                    title: '20 Stages of Filtration',
                    desc: 'Removes chlorine, heavy metals, sediment, rust, bacteria, hard water minerals, and more through layered filtration media.',
                  },
                  {
                    number: '02',
                    title: 'Universal Compatibility',
                    desc: 'Fits all standard G1/2" shower heads. Works with overhead showers, handheld heads, and rain showers alike.',
                  },
                  {
                    number: '03',
                    title: 'Tool-Free, 3-Minute Install',
                    desc: 'No plumber. No drills. Just screw it between your shower arm and head. That\'s it — you\'re done.',
                  },
                  {
                    number: '04',
                    title: 'Replaceable Filter Cartridge',
                    desc: 'Replace the inner cartridge every 6–12 months depending on use. The durable chrome body lasts for years.',
                  },
                ].map((item) => (
                  <div
                    key={item.number}
                    style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
                  >
                    <span style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '0.95rem',
                      fontWeight: '500',
                      color: 'rgba(255,255,255,0.25)',
                      letterSpacing: '0.04em',
                      flexShrink: 0,
                      paddingTop: '0.1rem',
                    }}>
                      {item.number}
                    </span>
                    <div>
                      <h3 style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: '1.3rem',
                        fontWeight: '500',
                        color: 'white',
                        marginBottom: '0.4rem',
                        lineHeight: 1.2,
                      }}>
                        {item.title}
                      </h3>
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.875rem',
                        color: 'rgba(255,255,255,0.5)',
                        lineHeight: 1.6,
                      }}>
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom row: filter cartridge + lifestyle */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9, delay: 0.5 }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '2px',
            paddingBottom: '8rem',
          }}
          className="intro-grid-bottom"
        >
          {/* Filter cartridge close-up */}
          <div style={{
            position: 'relative',
            height: '340px',
            overflow: 'hidden',
            backgroundColor: 'var(--ivory-warm)',
          }}>
            <Image
              src={IMAGES.filter.cartridgeDetailed}
              alt="20-stage filter media layers — detailed cross-section"
              fill
              quality={85}
              style={{
                objectFit: 'contain',
                objectPosition: 'center',
                padding: '2rem',
              }}
            />
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
            }}>
              <span className="label-overline" style={{ color: 'var(--text-muted)' }}>
                Filter Media Layers
              </span>
            </div>
          </div>

          {/* Middle — key material callout */}
          <div style={{
            backgroundColor: 'var(--accent-sage)',
            padding: '3rem 2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}>
            <span className="label-overline" style={{ color: 'rgba(255,255,255,0.6)' }}>
              Filter Highlights
            </span>
            <div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', margin: '2rem 0' }}>
                {['20-Stage Filtration Design', 'Replaceable Internal Cartridge', 'Modern Polished Chrome', 'Universal Inline Fit', 'Tool-Free Hand Setup', 'Balanced Water Flow'].map((item) => (
                  <div
                    key={item}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.75rem',
                    }}
                  >
                    <span style={{
                      width: '4px',
                      height: '4px',
                      borderRadius: '50%',
                      backgroundColor: 'rgba(255,255,255,0.7)',
                      flexShrink: 0,
                    }} />
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.825rem',
                      color: 'rgba(255,255,255,0.92)',
                      fontWeight: '500',
                    }}>
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <p style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: '1.2rem',
              color: 'rgba(255,255,255,0.95)',
              lineHeight: 1.3,
            }}>
              …and 13 more stages working in perfect sequence.
            </p>
          </div>

          {/* Lifestyle — shower flowing with filter */}
          <div style={{
            position: 'relative',
            height: '340px',
            overflow: 'hidden',
          }}>
            <Image
              src={IMAGES.installation.step3Dark}
              alt="ShowerFit installed — water flowing through filtered shower head"
              fill
              quality={80}
              style={{
                objectFit: 'cover',
                objectPosition: 'center',
              }}
            />
            <div style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.1) 100%)',
            }} />
            <div style={{
              position: 'absolute',
              bottom: '1.5rem',
              left: '1.5rem',
            }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.1rem',
                color: 'white',
                lineHeight: 1.3,
              }}>
                Crystal clear.<br />Every shower.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <style jsx global>{`
        .intro-product-img:hover {
          transform: scale(1.04);
        }
        @media (max-width: 900px) {
          .intro-grid-top {
            grid-template-columns: 1fr !important;
          }
          .intro-grid-bottom {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
