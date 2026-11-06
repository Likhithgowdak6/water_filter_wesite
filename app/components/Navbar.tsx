'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'The Filter', href: '#filter' },
  { label: 'Benefits', href: '#benefits' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQs', href: '#faqs' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 900) setMobileOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          zIndex: 100,
          backgroundColor: scrolled ? 'rgba(250, 248, 244, 0.98)' : 'rgba(14, 13, 11, 0.75)',
          borderBottom: scrolled ? '1px solid rgba(200, 189, 177, 0.35)' : '1px solid rgba(255, 255, 255, 0.12)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          transition: 'background-color 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
        }}
      >
        <div className="section-container">
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 0',
            gap: '2rem',
          }}>
            {/* Logo / Wordmark */}
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); handleNavClick('#home'); }}
              style={{ textDecoration: 'none', flexShrink: 0, transition: 'opacity 0.2s ease' }}
              id="navbar-logo"
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1px' }}>
                <span
                  className="font-serif"
                  style={{
                    fontSize: '1.45rem',
                    fontWeight: '500',
                    letterSpacing: '0.12em',
                    color: scrolled ? 'var(--charcoal)' : '#FFFFFF',
                    textTransform: 'uppercase',
                    lineHeight: 1,
                    transition: 'color 0.4s ease',
                  }}
                >
                  ShowerFit
                </span>
                <span
                  style={{
                    fontSize: '0.55rem',
                    letterSpacing: '0.14em',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: '600',
                    textTransform: 'uppercase',
                    color: scrolled ? 'var(--text-muted)' : 'rgba(255,255,255,0.7)',
                    transition: 'color 0.4s ease',
                  }}
                >
                  By Zenora Traders
                </span>
              </div>
            </a>

            {/* Desktop Nav Links */}
            <nav
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '2.5rem',
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  id={`nav-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: '0.75rem',
                    fontWeight: '500',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    textDecoration: 'none',
                    color: scrolled ? 'var(--charcoal)' : 'rgba(255,255,255,0.92)',
                    transition: 'color 0.3s ease',
                    position: 'relative',
                  }}
                  className="nav-link-desktop"
                  onMouseEnter={(e) => {
                    (e.target as HTMLAnchorElement).style.color = scrolled ? 'var(--accent-sage-dark)' : '#FFFFFF';
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLAnchorElement).style.color = scrolled ? 'var(--charcoal)' : 'rgba(255,255,255,0.92)';
                  }}
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }} className="desktop-cta">
              <a
                href="#contact"
                id="nav-contact"
                onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: '500',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  color: scrolled ? 'var(--charcoal)' : 'rgba(255,255,255,0.92)',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  (e.target as HTMLAnchorElement).style.color = scrolled ? 'var(--accent-sage-dark)' : '#FFFFFF';
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLAnchorElement).style.color = scrolled ? 'var(--charcoal)' : 'rgba(255,255,255,0.92)';
                }}
              >
                Contact
              </a>
              <a
                href="#purchase"
                id="nav-shop-now"
                onClick={(e) => { e.preventDefault(); handleNavClick('#purchase'); }}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  textDecoration: 'none',
                  padding: '0.65rem 1.6rem',
                  backgroundColor: scrolled ? 'var(--charcoal)' : 'rgba(255,255,255,0.18)',
                  border: `1.5px solid ${scrolled ? 'var(--charcoal)' : 'rgba(255,255,255,0.75)'}`,
                  color: 'white',
                  transition: 'all 0.3s ease',
                  backdropFilter: 'blur(8px)',
                }}
                onMouseEnter={(e) => {
                  const el = e.target as HTMLAnchorElement;
                  el.style.backgroundColor = scrolled ? 'var(--charcoal-mid)' : 'rgba(255,255,255,0.32)';
                  el.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  const el = e.target as HTMLAnchorElement;
                  el.style.backgroundColor = scrolled ? 'var(--charcoal)' : 'rgba(255,255,255,0.18)';
                  el.style.color = 'white';
                }}
              >
                Shop Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              id="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
              onClick={() => setMobileOpen(!mobileOpen)}
              className="mobile-menu-btn"
              style={{
                display: 'none',
                flexDirection: 'column',
                gap: '5px',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '4px',
              }}
            >
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  style={{
                    display: 'block',
                    width: '22px',
                    height: '1.5px',
                    backgroundColor: scrolled ? 'var(--charcoal)' : 'white',
                    transformOrigin: 'center',
                    transition: 'all 0.3s ease',
                    transform: mobileOpen
                      ? i === 0 ? 'rotate(45deg) translate(4.5px, 4.5px)'
                        : i === 1 ? 'scaleX(0)' : 'rotate(-45deg) translate(4.5px, -4.5px)'
                      : 'none',
                  }}
                />
              ))}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            style={{
              position: 'fixed',
              top: '70px',
              left: 0,
              right: 0,
              zIndex: 49,
              backgroundColor: 'var(--ivory)',
              borderBottom: '1px solid var(--stone-200)',
              padding: '2rem 5vw 3rem',
              boxShadow: '0 12px 40px rgba(0,0,0,0.12)',
            }}
          >
            {[...navLinks, { label: 'Contact', href: '#contact' }].map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4 }}
                style={{
                  display: 'block',
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '1.1rem',
                  fontWeight: '400',
                  color: 'var(--charcoal)',
                  textDecoration: 'none',
                  padding: '1rem 0',
                  borderBottom: '1px solid var(--stone-200)',
                  letterSpacing: '0.04em',
                }}
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#purchase"
              onClick={(e) => { e.preventDefault(); handleNavClick('#purchase'); setMobileOpen(false); }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              style={{
                display: 'inline-block',
                marginTop: '2rem',
                padding: '1rem 2.5rem',
                backgroundColor: 'var(--charcoal)',
                color: 'var(--ivory)',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.875rem',
                fontWeight: '500',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                textDecoration: 'none',
              }}
            >
              Shop Now
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <style jsx global>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .desktop-cta { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  );
}
