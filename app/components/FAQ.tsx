'use client';

import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    id: 'faq-1',
    question: 'Will this fit my shower?',
    answer: 'Yes. ShowerFit is designed with standard threading to connect seamlessly with most wall-mounted shower arms, overhead showers, and handheld shower connections in Indian homes. For most setups, it twists directly into place by hand with no special tools or plumbing alterations required.',
  },
  {
    id: 'faq-2',
    question: 'Does it reduce water pressure?',
    answer: 'No. ShowerFit is engineered to maintain balanced, satisfying shower flow without noticeable water pressure drops, allowing you to enjoy your shower without compromising pressure.',
  },
  {
    id: 'faq-3',
    question: 'How often do I need to replace the filter cartridge?',
    answer: 'Cartridge life depends on your household usage and local municipal or borewell water quality. With typical everyday use, regular cartridge replacement ensures your shower water remains consistently fresh. The outer chrome housing is permanent — only the internal cartridge is replaced.',
  },
  {
    id: 'faq-4',
    question: 'How will I know when to replace the cartridge?',
    answer: 'You will typically notice when it is time for a replacement: water may begin to feel less soft, lather may decrease, or shower flow may slightly decline as the filtration media captures particles over time.',
  },
  {
    id: 'faq-5',
    question: 'What benefits will I notice after installing ShowerFit?',
    answer: 'Many users notice that skin feels less tight and dry after stepping out of the shower, hair feels smoother and easier to manage, and the strong chlorine odour in shower water is noticeably reduced.',
  },
  {
    id: 'faq-6',
    question: 'Is ShowerFit suitable for the whole family?',
    answer: 'Yes. ShowerFit brings a gentler, more comfortable shower experience to everyone in the household, making daily bathing more pleasant for sensitive skin, hair, and everyday personal care.',
  },
  {
    id: 'faq-7',
    question: 'Can it be used with a geyser or hot water supply?',
    answer: 'Yes. ShowerFit is designed for typical residential bathing temperatures, including heated water from instant geysers, storage water heaters, and solar heating systems.',
  },
  {
    id: 'faq-8',
    question: 'Does it work with hard shower water?',
    answer: 'Yes. ShowerFit is built for everyday Indian shower water conditions. While it is an inline shower filter rather than a whole-house water softener, its 20-stage filtration reduces water harshness, helping keep your hair softer and shower area cleaner.',
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, margin: '-8% 0px' });

  const toggle = (id: string) => setOpenId(openId === id ? null : id);

  return (
    <section
      id="faqs"
      ref={sectionRef}
      style={{ backgroundColor: 'var(--ivory-warm)', overflow: 'hidden' }}
    >
      <div className="section-container section-pad">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '6rem',
          alignItems: 'start',
        }}
        className="faq-grid"
        >
          {/* Left: Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85 }}
            style={{ position: 'sticky', top: '8rem' }}
            className="faq-header-sticky"
          >
            <span className="label-overline" style={{ display: 'block', marginBottom: '1.25rem' }}>
              Common Questions
            </span>
            <h2 className="headline-xl" style={{ marginBottom: '1.5rem' }}>
              Everything<br />
              you need<br />
              to <em style={{ fontStyle: 'italic', color: 'var(--accent-sage-dark)' }}>know.</em>
            </h2>
            <p className="body-text" style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>
              Still have questions? We&apos;re just a message away.
            </p>
            <a
              href="mailto:showerfitindia@gmail.com"
              id="faq-contact-btn"
              className="btn-secondary"
            >
              Email: showerfitindia@gmail.com
            </a>
          </motion.div>

          {/* Right: FAQ items */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.85, delay: 0.2 }}
          >
            {faqs.map((faq, i) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                style={{ borderBottom: '1px solid var(--stone-200)' }}
              >
                <button
                  id={faq.id}
                  onClick={() => toggle(faq.id)}
                  aria-expanded={openId === faq.id}
                  aria-controls={`${faq.id}-answer`}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    padding: '1.75rem 0',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    textAlign: 'left',
                    gap: '2rem',
                  }}
                >
                  <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'baseline' }}>
                    <span style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: '0.9rem',
                      color: 'var(--stone-300)',
                      fontWeight: '500',
                      flexShrink: 0,
                    }}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                      fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                      fontWeight: '500',
                      color: 'var(--charcoal)',
                      lineHeight: 1.25,
                    }}>
                      {faq.question}
                    </h3>
                  </div>
                  {/* Toggle icon */}
                  <motion.span
                    animate={{ rotate: openId === faq.id ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    style={{
                      flexShrink: 0,
                      width: '28px',
                      height: '28px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--stone-300)',
                      borderRadius: '50%',
                      color: 'var(--charcoal)',
                    }}
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                      <path d="M6 2V10M2 6H10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                    </svg>
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {openId === faq.id && (
                    <motion.div
                      id={`${faq.id}-answer`}
                      role="region"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: '0.9375rem',
                        color: 'var(--text-body)',
                        lineHeight: 1.7,
                        paddingBottom: '1.75rem',
                        paddingLeft: '2.8rem',
                        maxWidth: '680px',
                      }}>
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .faq-grid {
            grid-template-columns: 1fr !important;
            gap: 3rem !important;
          }
          .faq-header-sticky {
            position: static !important;
          }
        }
      `}</style>
    </section>
  );
}
