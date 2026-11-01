'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import Image from 'next/image';
import { IMAGES } from '../data/imageMapping';

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
} as const;

const slideUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: 'easeOut' as const },
  },
};

export default function FinalCTA() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-10% 0px' });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['-8%', '8%']);

  return (
    <section
      id="cta"
      ref={sectionRef}
      style={{
        position: 'relative',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Parallax background */}
      <motion.div
        style={{
          position: 'absolute',
          inset: '-15%',
          y: imageY,
        }}
      >
        <Image
          src={IMAGES.finalCta.background}
          alt="Premium shower experience with ShowerFit filtered water"
          fill
          quality={85}
          style={{
            objectFit: 'cover',
            objectPosition: 'center',
          }}
        />
      </motion.div>

      {/* Overlays */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to bottom right, rgba(15,12,8,0.88) 0%, rgba(15,12,8,0.6) 100%)',
        zIndex: 1,
      }} />

      {/* Content */}
      <div className="section-container" style={{ position: 'relative', zIndex: 2, width: '100%', padding: '8rem 5vw' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          style={{ maxWidth: '760px' }}
        >
          <motion.span
            variants={slideUp}
            className="label-overline"
            style={{ color: 'rgba(255,255,255,0.4)', display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}
          >
            <span style={{ width: '2rem', height: '1px', backgroundColor: 'rgba(255,255,255,0.3)', display: 'inline-block' }} />
            Ready to upgrade?
          </motion.span>

          <motion.h2
            variants={slideUp}
            style={{
              fontFamily: "'Cormorant Garamond', Georgia, serif",
              fontSize: 'clamp(2.8rem, 6vw, 5.5rem)',
              fontWeight: '400',
              color: 'white',
              lineHeight: 1.08,
              letterSpacing: '-0.02em',
              marginBottom: '2rem',
            }}
          >
            Your best shower<br />
            starts <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.75)' }}>today.</em>
          </motion.h2>

          <motion.p
            variants={slideUp}
            className="body-lead"
            style={{ color: 'rgba(255,255,255,0.6)', maxWidth: '520px', marginBottom: '3.5rem' }}
          >
            Bring advanced 20-stage shower water filtration into your daily self-care routine with ShowerFit. Simple tool-free setup and free delivery across India.
          </motion.p>

          <motion.div
            variants={slideUp}
            style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}
          >
            <a
              href="#purchase"
              id="cta-shop-btn"
              onClick={(e) => { e.preventDefault(); document.querySelector('#purchase')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1.1rem 2.5rem',
                backgroundColor: 'white',
                color: 'var(--charcoal)',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.875rem',
                fontWeight: '600',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                border: '1.5px solid white',
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = 'transparent';
                el.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.backgroundColor = 'white';
                el.style.color = 'var(--charcoal)';
              }}
            >
              Order ShowerFit
              <span style={{ fontSize: '1rem' }}>→</span>
            </a>
            <a
              href="https://wa.me/919999999999?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20ShowerFit"
              id="cta-whatsapp-btn"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '1.1rem 2.5rem',
                backgroundColor: 'transparent',
                color: 'rgba(255,255,255,0.85)',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.875rem',
                fontWeight: '500',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                border: '1.5px solid rgba(255,255,255,0.35)',
                transition: 'all 0.4s ease',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = 'rgba(255,255,255,0.7)';
                el.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.borderColor = 'rgba(255,255,255,0.35)';
                el.style.color = 'rgba(255,255,255,0.85)';
              }}
            >
              Ask Us Anything
            </a>
          </motion.div>

          {/* Mini stats */}
          <motion.div
            variants={slideUp}
            style={{
              display: 'flex',
              gap: '3rem',
              paddingTop: '2rem',
              borderTop: '1px solid rgba(255,255,255,0.1)',
            }}
            className="cta-stats"
          >
            {[
              { value: 'Free', label: 'Pan-India shipping' },
              { value: '3 min', label: 'Setup time' },
              { value: '6 mo', label: 'Cartridge life' },
            ].map((s) => (
              <div key={s.label}>
                <div style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.6rem',
                  fontWeight: '400',
                  color: 'white',
                  lineHeight: 1,
                  marginBottom: '0.3rem',
                }}>
                  {s.value}
                </div>
                <div style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: '500',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.4)',
                }}>
                  {s.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 480px) {
          .cta-stats {
            gap: 1.5rem !important;
          }
        }
      `}</style>
    </section>
  );
}
