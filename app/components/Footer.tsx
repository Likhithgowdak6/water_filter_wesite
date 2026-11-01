'use client';

const CURRENT_YEAR = 2026;

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PRODUCT } from '../data/imageMapping';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
    }
  };

  const navLinks = [
    { label: 'The Filter', href: '#filter' },
    { label: 'Benefits', href: '#benefits' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQs', href: '#faqs' },
    { label: 'Order', href: '#purchase' },
  ];

  const handleNavClick = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      id="contact"
      style={{
        backgroundColor: '#0E0D0B',
        color: 'white',
        overflow: 'hidden',
      }}
    >
      {/* Main footer content */}
      <div className="section-container" style={{ padding: '6rem 5vw 4rem' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.6fr 1fr 1fr 1.6fr',
          gap: '4rem',
          paddingBottom: '4rem',
          borderBottom: '1px solid rgba(255,255,255,0.07)',
          marginBottom: '3rem',
        }}
        className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: '1.5rem' }}>
              <span style={{
                fontFamily: "'Cormorant Garamond', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: '500',
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: 'white',
                display: 'block',
              }}>
                ShowerFit
              </span>
              <span style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.55rem',
                letterSpacing: '0.22em',
                fontWeight: '600',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.35)',
                display: 'block',
                marginTop: '2px',
              }}>
                Shower Filtration
              </span>
            </div>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.7,
              maxWidth: '280px',
              marginBottom: '1.5rem',
            }}>
              Advanced 20-stage shower filtration for healthier hair, softer skin, and a better daily routine. Made for Indian water. Made for Indian homes.
            </p>
            {/* Social Links */}
            <div style={{ display: 'flex', gap: '1rem' }}>
              {[
                { label: 'Instagram', href: '#', icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                    <circle cx="12" cy="12" r="4"/>
                    <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                  </svg>
                )},
                { label: 'WhatsApp', href: PRODUCT.whatsappUrl, icon: (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                )},
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  id={`footer-${social.label.toLowerCase()}`}
                  target={social.href !== '#' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  style={{
                    width: '38px',
                    height: '38px',
                    border: '1px solid rgba(255,255,255,0.12)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(255,255,255,0.45)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'rgba(255,255,255,0.35)';
                    el.style.color = 'white';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLAnchorElement;
                    el.style.borderColor = 'rgba(255,255,255,0.12)';
                    el.style.color = 'rgba(255,255,255,0.45)';
                  }}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.65rem',
              fontWeight: '600',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '1.5rem',
            }}>
              Explore
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    id={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                    style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: '0.875rem',
                      color: 'rgba(255,255,255,0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                    }}
                    onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.9)'; }}
                    onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.45)'; }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.65rem',
              fontWeight: '600',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '1.5rem',
            }}>
              Contact
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: '0.3rem',
                }}>
                  WhatsApp / Call
                </p>
                <a
                  href={PRODUCT.whatsappUrl}
                  id="footer-phone"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = 'white'; }}
                  onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  Message on WhatsApp
                </a>
              </div>
              <div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: '0.3rem',
                }}>
                  Email
                </p>
                <a
                  href="mailto:hello@showerfit.in"
                  id="footer-email"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.875rem',
                    color: 'rgba(255,255,255,0.6)',
                    textDecoration: 'none',
                    transition: 'color 0.3s ease',
                  }}
                  onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = 'white'; }}
                  onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.6)'; }}
                >
                  hello@showerfit.in
                </a>
              </div>
              <div>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.7rem',
                  fontWeight: '600',
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.3)',
                  marginBottom: '0.3rem',
                }}>
                  Availability
                </p>
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.875rem',
                  color: 'rgba(255,255,255,0.5)',
                }}>
                  Mon–Sat, 10 am – 7 pm IST
                </p>
              </div>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.65rem',
              fontWeight: '600',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'rgba(255,255,255,0.3)',
              marginBottom: '1.5rem',
            }}>
              Stay Updated
            </h4>
            <p style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: '0.875rem',
              color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.6,
              marginBottom: '1.5rem',
            }}>
              Tips for healthier hair &amp; skin, product updates, and exclusive offers — delivered to your inbox.
            </p>
            {!subscribed ? (
              <form onSubmit={handleSubscribe} style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <input
                  type="email"
                  id="footer-email-input"
                  placeholder="Your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.875rem',
                    padding: '0.9rem 1.25rem',
                    backgroundColor: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'white',
                    outline: 'none',
                    width: '100%',
                  }}
                />
                <button
                  type="submit"
                  id="footer-subscribe-btn"
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    padding: '0.9rem 1.5rem',
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    border: '1px solid rgba(255,255,255,0.2)',
                    color: 'white',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.backgroundColor = 'rgba(255,255,255,0.18)';
                  }}
                  onMouseLeave={(e) => {
                    const el = e.currentTarget as HTMLButtonElement;
                    el.style.backgroundColor = 'rgba(255,255,255,0.1)';
                  }}
                >
                  Subscribe
                </button>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                style={{
                  padding: '1.25rem',
                  backgroundColor: 'rgba(123, 158, 135, 0.15)',
                  border: '1px solid rgba(123, 158, 135, 0.3)',
                }}
              >
                <p style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.875rem',
                  color: 'var(--accent-sage-light)',
                }}>
                  ✓ You&apos;re subscribed. We&apos;ll be in touch!
                </p>
              </motion.div>
            )}
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          gap: '2rem',
          flexWrap: 'wrap',
        }}>
          <p style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: '0.775rem',
            color: 'rgba(255,255,255,0.25)',
          }}>
            © {CURRENT_YEAR} ShowerFit. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Privacy Policy', 'Terms of Use', 'Shipping Policy'].map((item) => (
              <a
                key={item}
                href="#"
                id={`footer-policy-${item.toLowerCase().replace(/\s+/g, '-')}`}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  color: 'rgba(255,255,255,0.25)',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)'; }}
                onMouseLeave={(e) => { (e.target as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.25)'; }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @media (max-width: 900px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 3rem !important;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </footer>
  );
}
