'use client';

import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Priya Sharma',
    location: 'Mumbai',
    rating: 5,
    text: 'I have struggled with hair fall for 3 years. After 3 weeks of using ShowerFit, my hair fall has reduced dramatically. The water feels so much softer. Absolutely worth every rupee.',
    detail: 'Hair fall reduced by ~60% in 3 weeks',
    avatar: 'P',
  },
  {
    id: 2,
    name: 'Rahul Mehta',
    location: 'Bengaluru',
    rating: 5,
    text: 'Installation was a breeze — literally 3 minutes. The difference in water quality is immediately noticeable. My skin doesn\'t feel dry after showering anymore. Brilliant product.',
    detail: 'Installed in under 3 minutes, no tools',
    avatar: 'R',
  },
  {
    id: 3,
    name: 'Anjali Nair',
    location: 'Chennai',
    rating: 5,
    text: 'My dermatologist suggested reducing chlorine exposure to help with my eczema. This filter has been a game changer — my flare-ups are far less frequent now.',
    detail: 'Significant reduction in skin flare-ups',
    avatar: 'A',
  },
  {
    id: 4,
    name: 'Vikram Singh',
    location: 'Delhi',
    rating: 5,
    text: 'Bought one for the master bathroom, loved it so much I ordered two more for the other bathrooms. The chrome finish is stunning and blends perfectly with our fixtures.',
    detail: 'Ordered 3 units — one for each bathroom',
    avatar: 'V',
  },
  {
    id: 5,
    name: 'Meera Iyer',
    location: 'Hyderabad',
    rating: 5,
    text: 'The water in Hyderabad is notoriously hard. Since installing ShowerFit, the scale buildup on our shower glass has nearly stopped. My husband\'s dandruff issue is also visibly better.',
    detail: 'Solved hard water scale & dandruff issues',
    avatar: 'M',
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-8% 0px' });
  const [active, setActive] = useState(0);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{ backgroundColor: 'var(--ivory)', overflow: 'hidden' }}
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
            marginBottom: '4rem',
            paddingBottom: '3rem',
            borderBottom: '1px solid var(--stone-200)',
          }}
          className="testimonials-header"
        >
          <div>
            <span className="label-overline" style={{ display: 'block', marginBottom: '1rem' }}>
              Real Customers. Real Results.
            </span>
            <h2 className="headline-xl" style={{ maxWidth: '520px' }}>
              What India&apos;s homes<br />
              are <em style={{ fontStyle: 'italic', color: 'var(--accent-sage-dark)' }}>saying.</em>
            </h2>
          </div>
          <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
            <div style={{ textAlign: 'right' }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '2.8rem',
                fontWeight: '500',
                color: 'var(--charcoal)',
                lineHeight: 1,
              }}>4.9</p>
              <div style={{ display: 'flex', gap: '3px', justifyContent: 'flex-end', marginTop: '4px' }}>
                {[1,2,3,4,5].map(s => (
                  <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill="#B8965A">
                    <path d="M7 1l1.65 3.35L12.5 5l-2.75 2.68.65 3.82L7 9.77 3.6 11.5l.65-3.82L1.5 5l3.85-.65L7 1z"/>
                  </svg>
                ))}
              </div>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.7rem',
                color: 'var(--text-muted)',
                marginTop: '4px',
                letterSpacing: '0.08em',
              }}>AVERAGE RATING</p>
            </div>
          </div>
        </motion.div>

        {/* Testimonial Cards */}
        <div style={{ position: 'relative' }}>
          {/* Navigation dots */}
          <div style={{
            display: 'flex',
            gap: '0.5rem',
            marginBottom: '2.5rem',
          }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                id={`testimonial-nav-${i}`}
                onClick={() => setActive(i)}
                style={{
                  width: i === active ? '2rem' : '6px',
                  height: '6px',
                  borderRadius: '3px',
                  backgroundColor: i === active ? 'var(--charcoal)' : 'var(--stone-300)',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.4s ease',
                  padding: 0,
                }}
              />
            ))}
          </div>

          {/* Cards grid — show 3 at a time on desktop */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '1.5px',
          }}
          className="testimonials-grid"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={t.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                style={{
                  backgroundColor: i === 1 ? 'var(--charcoal)' : 'var(--ivory-warm)',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '340px',
                }}
              >
                {/* Stars */}
                <div>
                  <div style={{ display: 'flex', gap: '3px', marginBottom: '1.5rem' }}>
                    {[1,2,3,4,5].map(s => (
                      <svg key={s} width="14" height="14" viewBox="0 0 14 14" fill={i === 1 ? '#B8965A' : '#B8965A'}>
                        <path d="M7 1l1.65 3.35L12.5 5l-2.75 2.68.65 3.82L7 9.77 3.6 11.5l.65-3.82L1.5 5l3.85-.65L7 1z"/>
                      </svg>
                    ))}
                  </div>

                  <p style={{
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(1.1rem, 1.8vw, 1.35rem)',
                    fontWeight: '400',
                    fontStyle: 'italic',
                    color: i === 1 ? 'rgba(255,255,255,0.9)' : 'var(--charcoal)',
                    lineHeight: 1.5,
                    marginBottom: '1.5rem',
                  }}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div>
                  {/* Detail badge */}
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.4rem',
                    padding: '0.35rem 0.8rem',
                    backgroundColor: i === 1 ? 'rgba(255,255,255,0.07)' : 'var(--stone-100)',
                    marginBottom: '1.25rem',
                  }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: 'var(--accent-sage)', flexShrink: 0 }} />
                    <span style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.7rem',
                      fontWeight: '600',
                      letterSpacing: '0.06em',
                      color: i === 1 ? 'rgba(255,255,255,0.55)' : 'var(--accent-sage-dark)',
                    }}>
                      {t.detail}
                    </span>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <div style={{
                      width: '38px',
                      height: '38px',
                      borderRadius: '50%',
                      backgroundColor: i === 1 ? 'rgba(255,255,255,0.12)' : 'var(--stone-300)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '1.1rem',
                      fontWeight: '500',
                      color: i === 1 ? 'rgba(255,255,255,0.7)' : 'var(--charcoal)',
                      flexShrink: 0,
                    }}>
                      {t.avatar}
                    </div>
                    <div>
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.875rem',
                        fontWeight: '600',
                        color: i === 1 ? 'white' : 'var(--charcoal)',
                      }}>
                        {t.name}
                      </p>
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.75rem',
                        color: i === 1 ? 'rgba(255,255,255,0.4)' : 'var(--text-muted)',
                      }}>
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* 4th & 5th testimonials - shown below in 2-col */}
          {/* Already shown in grid above as 5 items but only 3 cols — items 4 & 5 will naturally stack */}
        </div>

        {/* Trust bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{
            marginTop: '4rem',
            display: 'flex',
            gap: '3rem',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: '2.5rem 3rem',
            backgroundColor: 'var(--ivory-warm)',
            borderTop: '1px solid var(--stone-200)',
          }}
        >
          {[
            { num: '10,000+', label: 'Happy customers' },
            { num: '4.9 / 5', label: 'Average rating' },
            { num: '98%', label: 'Would recommend' },
            { num: '6 mo', label: 'Avg filter life' },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: 'center' }}>
              <p style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.8rem',
                fontWeight: '500',
                color: 'var(--charcoal)',
                lineHeight: 1,
              }}>
                {stat.num}
              </p>
              <p style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.7rem',
                fontWeight: '600',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'var(--text-muted)',
                marginTop: '0.4rem',
              }}>
                {stat.label}
              </p>
            </div>
          ))}
        </motion.div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .testimonials-header {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 2rem !important;
          }
          .testimonials-grid {
            grid-template-columns: 1fr !important;
          }
        }
        @media (min-width: 600px) and (max-width: 900px) {
          .testimonials-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>
    </section>
  );
}
