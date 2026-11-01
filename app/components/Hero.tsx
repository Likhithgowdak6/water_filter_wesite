'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { IMAGES } from '../data/imageMapping';

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.4 },
  },
} as const;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' as const },
  },
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: 'easeOut' as const },
  },
};

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        backgroundColor: '#0E0D0B',
      }}
    >
      {/* Background image with parallax */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-10%',
          y: imageY,
        }}
      >
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
          style={{ position: 'absolute', inset: 0 }}
        >
          <Image
            src={IMAGES.hero.lifestylePrimary}
            alt="Woman showering under premium rain shower head"
            fill
            priority
            quality={90}
            style={{
              objectFit: 'cover',
              objectPosition: 'center 30%',
            }}
          />
        </motion.div>
      </motion.div>

      {/* Layered gradient overlays for cinematic feel */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to right, rgba(8,7,6,0.92) 0%, rgba(8,7,6,0.65) 50%, rgba(8,7,6,0.25) 100%)',
        zIndex: 2,
      }} />
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(8,7,6,0.8) 0%, rgba(8,7,6,0) 60%)',
        zIndex: 2,
      }} />

      {/* Content */}
      <div className="section-container" style={{ position: 'relative', zIndex: 3, width: '100%' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '4rem',
          alignItems: 'center',
          minHeight: '100vh',
          padding: '10rem 0 6rem',
        }}
        className="hero-grid"
        >
          {/* Left: Text */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ y: textY }}
          >
            <motion.div variants={fadeUp} style={{ marginBottom: '1.5rem' }}>
              <span className="label-overline" style={{
                color: 'rgba(255,255,255,0.5)',
                display: 'flex',
                alignItems: 'center',
                gap: '1rem',
              }}>
                <span style={{ width: '2rem', height: '1px', backgroundColor: 'rgba(255,255,255,0.35)', display: 'inline-block', flexShrink: 0 }} />
                Introducing ShowerFit
              </span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="headline-hero" style={{ color: 'white', marginBottom: '1.5rem' }}>
              Your Daily<br />
              Shower.<br />
              <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.85)' }}>A Better Kind</em><br />
              of Clean.
            </motion.h1>

            <motion.p variants={fadeUp} className="body-lead" style={{
              color: 'rgba(255,255,255,0.65)',
              maxWidth: '440px',
              marginBottom: '3rem',
            }}>
              Bring advanced shower water filtration into your everyday self-care routine with ShowerFit&apos;s 20-stage shower filter.
            </motion.p>

            <motion.div variants={fadeUp} style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <a
                href="#filter"
                id="hero-discover-btn"
                onClick={(e) => { e.preventDefault(); document.querySelector('#filter')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-primary-light"
                style={{ backgroundColor: 'white', color: 'var(--charcoal)', border: '1.5px solid white' }}
              >
                Discover ShowerFit
                <span style={{ fontSize: '1rem' }}>→</span>
              </a>
              <a
                href="#how-it-works"
                id="hero-howitworks-btn"
                onClick={(e) => { e.preventDefault(); document.querySelector('#how-it-works')?.scrollIntoView({ behavior: 'smooth' }); }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: '500',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '1rem 2.2rem',
                  backgroundColor: 'transparent',
                  border: '1.5px solid rgba(255,255,255,0.35)',
                  color: 'rgba(255,255,255,0.85)',
                  transition: 'all 0.4s ease',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.7)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.borderColor = 'rgba(255,255,255,0.35)';
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.85)';
                }}
              >
                Explore How It Works
              </a>
            </motion.div>

            {/* Stats strip */}
            <motion.div
              variants={fadeUp}
              style={{
                display: 'flex',
                gap: '3rem',
                marginTop: '4rem',
                paddingTop: '2.5rem',
                borderTop: '1px solid rgba(255,255,255,0.12)',
              }}
              className="hero-stats"
            >
              {[
                { number: '20', label: 'Filtration Stages' },
                { number: '100%', label: 'Tool-Free Install' },
                { number: '∞', label: 'Everyday Use' },
              ].map((stat) => (
                <div key={stat.label}>
                  <div style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: '2.2rem',
                    fontWeight: '500',
                    color: 'white',
                    lineHeight: 1,
                    marginBottom: '0.35rem',
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.7rem',
                    fontWeight: '500',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(255,255,255,0.45)',
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right: Product image composition */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.4, delay: 0.6, ease: "easeOut" }}
            style={{
              position: 'relative',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            className="hero-product-visual"
          >
            {/* Product image card */}
            <motion.div
              style={{
                position: 'relative',
                width: '380px',
                height: '480px',
                backgroundColor: 'rgba(255,255,255,0.06)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.12)',
              }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.5 }}
            >
              <Image
                src={IMAGES.hero.productPrimary}
                alt="ShowerFit 20-Stage Shower Filter — premium chrome finish"
                fill
                priority
                quality={90}
                style={{
                  objectFit: 'contain',
                  padding: '2.5rem',
                }}
              />

              {/* Product badge */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                right: '1.5rem',
                backgroundColor: 'rgba(255,255,255,0.1)',
                backdropFilter: 'blur(12px)',
                border: '1px solid rgba(255,255,255,0.15)',
                padding: '0.75rem 1.25rem',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.8rem',
                  fontWeight: '600',
                  color: 'white',
                  lineHeight: 1,
                }}>
                  20
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.6rem',
                  fontWeight: '600',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.65)',
                  marginTop: '0.2rem',
                }}>
                  Stage Filter
                </div>
              </div>

              {/* Bottom label */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '1.5rem',
                background: 'linear-gradient(to top, rgba(0,0,0,0.7), transparent)',
              }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.1rem',
                  color: 'rgba(255,255,255,0.9)',
                  fontWeight: '400',
                  letterSpacing: '0.04em',
                }}>
                  Universal Shower Filter
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  color: 'rgba(255,255,255,0.5)',
                  marginTop: '0.2rem',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}>
                  Chrome finish · Replaceable cartridge
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        style={{
          position: 'absolute',
          bottom: '2.5rem',
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 3,
          opacity,
        }}
      >
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
          }}
        >
          <span style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.65rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.4)',
          }}>
            Scroll
          </span>
          <div style={{
            width: '1px',
            height: '40px',
            background: 'linear-gradient(to bottom, rgba(255,255,255,0.4), transparent)',
          }} />
        </motion.div>
      </motion.div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            padding: 8rem 0 4rem !important;
          }
          .hero-product-visual {
            display: none !important;
          }
          .hero-stats {
            gap: 2rem !important;
          }
        }
        @media (max-width: 480px) {
          .hero-stats {
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
