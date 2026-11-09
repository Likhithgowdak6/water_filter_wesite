'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { IMAGES, PRODUCT } from '../data/imageMapping';

export default function Purchase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-8% 0px' });

  return (
    <section
      id="purchase"
      ref={sectionRef}
      style={{ backgroundColor: 'var(--ivory)', overflow: 'hidden' }}
    >
      <div className="section-container section-pad">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '6rem',
          alignItems: 'center',
        }}
        className="purchase-grid"
        >
          {/* Left: Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: "easeOut" }}
            style={{
              position: 'relative',
            }}
          >
            {/* Main product image */}
            <div style={{
              position: 'relative',
              backgroundColor: '#F7F7F7',
              aspectRatio: '1 / 1.05',
              overflow: 'hidden',
              borderRadius: '2px',
            }}>
              <Image
                src={IMAGES.purchase.productMain}
                alt="ShowerFit 20-Stage Shower Filter complete kit with cutaway view and accessories"
                fill
                quality={95}
                style={{
                  objectFit: 'contain',
                  padding: '1.5rem',
                }}
              />
            </div>
          </motion.div>

          {/* Right: Purchase panel */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          >
            <span className="label-overline" style={{ color: 'var(--accent-sage)', display: 'block', marginBottom: '1rem' }}>
              Order ShowerFit
            </span>
            <h2 className="headline-lg" style={{ marginBottom: '0.75rem' }}>
              ShowerFit<br />20-Stage Shower Filter
            </h2>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.8rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              color: 'var(--text-muted)',
              marginBottom: '1.5rem',
            }}>
              Modern Chrome Finish · Replaceable Cartridge · 20-Stage Filtration
            </p>

            <div style={{
              borderTop: '1px solid var(--stone-200)',
              borderBottom: '1px solid var(--stone-200)',
              padding: '1.5rem 0',
              marginBottom: '2.5rem',
            }}>
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.85rem', flexWrap: 'wrap' }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '2.75rem',
                  fontWeight: '600',
                  color: 'var(--charcoal)',
                  letterSpacing: '-0.02em',
                  lineHeight: 1,
                }}>
                  {PRODUCT.priceDisplay}
                </p>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '1.25rem',
                  color: 'var(--stone-400)',
                  textDecoration: 'line-through',
                  fontWeight: '400',
                }}>
                  {PRODUCT.originalPrice}
                </span>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: '700',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: '#FFFFFF',
                  backgroundColor: 'var(--accent-sage-dark)',
                  padding: '0.3rem 0.75rem',
                  borderRadius: '2px',
                }}>
                  {PRODUCT.discountText}
                </span>
              </div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.825rem',
                color: 'var(--text-muted)',
                marginTop: '0.5rem',
              }}>
                Special introductory offer · Free delivery across India · Inclusive of all taxes
              </p>
            </div>

            {/* What's included */}
            <div style={{ marginBottom: '2.5rem' }}>
              <p className="label-overline" style={{ marginBottom: '1rem' }}>
                In the Box
              </p>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
                {[
                  '1× ShowerFit 20-Stage Filter Unit (Modern Chrome)',
                  '1× Replaceable Filter Cartridge (Pre-installed)',
                  '1× Thread sealing tape for easy leak-free setup',
                  '1× Step-by-step installation instructions',
                ].map((item) => (
                  <li key={item} style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem',
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.875rem',
                    color: 'var(--text-body)',
                  }}>
                    <span style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-sage)',
                      flexShrink: 0,
                      marginTop: '0.5rem',
                    }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Button — Cashfree Payment Gateway */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', marginBottom: '2.5rem' }}>
              <a
                href={PRODUCT.paymentUrl}
                id="purchase-buy-now-btn"
                className="btn-primary"
                style={{
                  width: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1.2rem 2rem',
                  fontSize: '0.925rem',
                  letterSpacing: '0.08em',
                  cursor: 'pointer',
                  border: 'none',
                  textDecoration: 'none',
                }}
              >
                Buy Now — ₹1,800
                <span style={{ fontSize: '1.1rem' }}>→</span>
              </a>
            </div>

            {/* Trust signals */}
            <div style={{
              display: 'flex',
              gap: '2rem',
              paddingTop: '1.5rem',
              borderTop: '1px solid var(--stone-200)',
              flexWrap: 'wrap',
            }}>
              {[
                { icon: '🚚', label: 'Free Delivery', sub: 'Across India' },
                { icon: '🔧', label: 'Tool-Free Setup', sub: 'For most shower heads' },
                { icon: '✨', label: 'Modern Chrome', sub: 'Reflective luxury finish' },
              ].map((t) => (
                <div key={t.label} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
                  <span style={{ fontSize: '1rem' }}>{t.icon}</span>
                  <div>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.775rem',
                      fontWeight: '600',
                      color: 'var(--charcoal)',
                    }}>
                      {t.label}
                    </p>
                    <p style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.7rem',
                      color: 'var(--text-muted)',
                    }}>
                      {t.sub}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .purchase-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
        }
      `}</style>
    </section>
  );
}
