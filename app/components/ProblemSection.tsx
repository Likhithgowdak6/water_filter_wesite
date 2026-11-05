'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { IMAGES } from '../data/imageMapping';

const problems = [
  {
    id: 'hair-loss',
    image: IMAGES.problems.tangledHair1,
    alt: 'Woman with tangled, dry hair',
    headline: 'Hair that falls out more than it should',
    body: 'Hard water deposits weaken hair follicles, leaving your strands brittle, tangled, and prone to breakage — no matter how good your shampoo is.',
  },
  {
    id: 'dry-skin',
    image: IMAGES.problems.drySkin,
    alt: 'Woman touching dry skin after shower',
    headline: 'Skin that never feels truly clean',
    body: 'Chlorine and dissolved minerals in unfiltered water strip away your skin\'s natural moisture, causing dryness, irritation, and a dull, uneven tone.',
  },
  {
    id: 'scalp',
    image: IMAGES.problems.itchyScalp,
    alt: 'Woman scratching itchy scalp',
    headline: 'An itchy, irritated scalp you can\'t shake',
    body: 'Chlorinated water disrupts the scalp\'s delicate pH balance, triggering persistent itchiness, dandruff, and inflammation — even after you\'ve shampooed.',
  },
  {
    id: 'scale-buildup',
    image: IMAGES.problems.waterScale,
    alt: 'Hard water scale buildup on bathroom tap',
    headline: 'Scale Buildup',
    body: 'Hard mineral deposits chalk onto faucets and fixtures, restricting water flow and staining chrome fittings over time.',
  },
  {
    id: 'mineral-deposits',
    image: IMAGES.problems.showerGlassScale,
    alt: 'Scale deposits on shower glass',
    headline: 'Mineral Deposits',
    body: 'Dissolved calcium and magnesium leave cloudy, etched film across shower screens and bathroom tiles that normal wiping can\'t clear.',
  },
  {
    id: 'contaminated-water',
    image: IMAGES.problems.pollutedWater,
    alt: 'Contaminated tap water with rust and sediment',
    headline: 'Contaminated Water',
    body: 'Aging pipelines deliver municipal tap water tainted with chlorine, rust sediment, and microscopic impurities straight to your shower.',
  },
];

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

const slideLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, ease: 'easeOut' as const },
  },
};

export default function ProblemSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-10% 0px' });

  return (
    <section
      id="problems"
      ref={sectionRef}
      style={{ backgroundColor: 'var(--charcoal-mid)', overflow: 'hidden' }}
    >
      <div className="section-container section-pad">
        {/* Header */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          style={{ maxWidth: '680px', marginBottom: '6rem' }}
        >
          <motion.span variants={slideUp} className="label-overline" style={{ color: 'rgba(255,255,255,0.4)', display: 'block', marginBottom: '1rem' }}>
            The Problem
          </motion.span>
          <motion.h2 variants={slideUp} className="headline-xl" style={{ color: 'white', marginBottom: '1.5rem' }}>
            Your Shower Should<br />
            <em style={{ fontStyle: 'italic', color: 'rgba(255,255,255,0.7)' }}>Feel Like Self-Care.</em>
          </motion.h2>
          <motion.p variants={slideUp} className="body-lead" style={{ color: 'rgba(255,255,255,0.65)', maxWidth: '580px' }}>
            Everyday tap water often carries chlorine, sediment, and mineral hardness that leave skin feeling dry, hair easily tangled, and scalps uncomfortable. A thoughtful upgrade can make all the difference.
          </motion.p>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          variants={containerVariants}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '2px',
          }}
          className="problem-grid"
        >
          {problems.map((problem, i) => (
            <motion.div
              key={problem.id}
              variants={slideLeft}
              style={{
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
                aspectRatio: '3/4',
              }}
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
            >
              {/* Image */}
              <Image
                src={problem.image}
                alt={problem.alt}
                fill
                quality={80}
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center top',
                  filter: 'grayscale(25%) brightness(0.75)',
                  transition: 'filter 0.6s ease, transform 0.8s ease',
                }}
                className="problem-img"
              />

              {/* Dark overlay */}
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.05) 100%)',
                zIndex: 1,
              }} />

              {/* Number */}
              <div style={{
                position: 'absolute',
                top: '1.5rem',
                left: '1.5rem',
                zIndex: 2,
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1rem',
                fontWeight: '600',
                letterSpacing: '0.08em',
                color: 'rgba(255,255,255,0.35)',
              }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Text */}
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                padding: '2rem 1.75rem',
                zIndex: 2,
              }}>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '1.45rem',
                  fontWeight: '500',
                  color: 'white',
                  lineHeight: 1.2,
                  marginBottom: '0.75rem',
                }}>
                  {problem.headline}
                </h3>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.6,
                }}>
                  {problem.body}
                </p>
              </div>

            </motion.div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        .problem-img:hover {
          filter: grayscale(0%) brightness(0.8) !important;
        }
        @media (max-width: 900px) {
          .problem-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
