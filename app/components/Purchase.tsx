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
              backgroundColor: 'var(--ivory-warm)',
              aspectRatio: '1 / 1.1',
              overflow: 'hidden',
            }}>
              <Image
                src={IMAGES.purchase.productMain}
                alt="ShowerFit 20-Stage Shower Filter — premium chrome"
                fill
                quality={90}
                style={{
                  objectFit: 'contain',
                  padding: '3rem',
                }}
              />
            </div>

            {/* Thumbnail strip */}
            <div style={{
              display: 'flex',
              gap: '2px',
              marginTop: '2px',
            }}>
              {[IMAGES.product.withBox, IMAGES.product.standalone, IMAGES.filter.cartridgeDetailed].map((src, i) => (
                <div
                  key={i}
                  style={{
                    position: 'relative',
                    flex: 1,
                    aspectRatio: '1',
                    backgroundColor: 'var(--ivory-warm)',
                    overflow: 'hidden',
                    cursor: 'pointer',
                    border: i === 0 ? '1.5px solid var(--charcoal)' : '1.5px solid transparent',
                    transition: 'border-color 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = 'var(--stone-300)';
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLDivElement).style.borderColor = i === 0 ? 'var(--charcoal)' : 'transparent';
                  }}
                >
                  <Image
                    src={src}
                    alt={`Product view ${i + 1}`}
                    fill
                    quality={70}
                    style={{
                      objectFit: 'contain',
                      padding: '0.75rem',
                    }}
                  />
                </div>
              ))}
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
              <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.75rem' }}>
                <p style={{
                  fontFamily: "'Cormorant Garamond', Georgia, serif",
                  fontSize: '2.5rem',
                  fontWeight: '500',
                  color: 'var(--charcoal)',
                  letterSpacing: '-0.02em',
                }}>
                  {PRODUCT.priceDisplay}
                </p>
                <span style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  color: 'var(--accent-sage-dark)',
                  backgroundColor: 'var(--ivory-warm)',
                  padding: '0.2rem 0.6rem',
                }}>
                  {PRODUCT.priceNote}
                </span>
              </div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.825rem',
                color: 'var(--text-muted)',
                marginTop: '0.35rem',
              }}>
                Configurable launch pricing · Inclusive of all taxes
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

            {/* CTA Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', marginBottom: '2.5rem' }}>
              <a
                href={PRODUCT.whatsappUrl}
                id="purchase-whatsapp-btn"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.75rem',
                  padding: '1.1rem 2rem',
                  backgroundColor: '#25D366',
                  color: 'white',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.875rem',
                  fontWeight: '600',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  transition: 'background-color 0.3s ease',
                  border: 'none',
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#1ebe5d'; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#25D366'; }}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Order on WhatsApp
              </a>
              <a
                href="#contact"
                id="purchase-enquiry-btn"
                onClick={(e) => { e.preventDefault(); document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' }); }}
                className="btn-secondary"
                style={{ textAlign: 'center', justifyContent: 'center' }}
              >
                Have Questions? Contact Us
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
