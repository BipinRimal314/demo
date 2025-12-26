import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useMotionValue, useSpring } from 'framer-motion';
import { Menu, X, ArrowRight, Sparkles, Sun, Moon } from 'lucide-react';
import Logo from '../assets/Logo.svg';
import LogoDark from '../assets/Logo-Dark.svg';

const Navbar = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  // Smooth spring physics for transforms
  const scrollYSpring = useSpring(scrollY, { stiffness: 100, damping: 30 });

  // Dynamic island effect transforms
  const width = useTransform(scrollYSpring, [0, 100], ['100%', 'min(90%, 900px)']);
  const top = useTransform(scrollYSpring, [0, 100], [0, 16]);
  const borderRadius = useTransform(scrollYSpring, [0, 100], [0, 16]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Why EkLine', href: '#belief' },
    { label: 'Our Process', href: '#process' },
    { label: 'Our Products', href: '#product' },
  ];

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 'var(--z-fixed)',
          display: 'flex',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <motion.nav
          style={{
            width,
            marginTop: top,
            borderRadius,
            pointerEvents: 'auto',
          }}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Navbar inner container with glass effect */}
          <motion.div
            style={{
              position: 'relative',
              padding: '0 var(--space-6)',
              height: '64px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--glass-bg)',
              backdropFilter: `blur(${scrolled ? 20 : 12}px)`,
              WebkitBackdropFilter: `blur(${scrolled ? 20 : 12}px)`,
              borderRadius: 'inherit',
              border: '1px solid var(--glass-border)',
              transition: 'background 0.3s ease, border 0.3s ease',
            }}
          >
            {/* Subtle gradient overlay on top edge */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 50%, transparent)',
                borderRadius: 'inherit',
              }}
            />

            {/* Logo */}
            <a
              href="#"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                textDecoration: 'none',
              }}
            >
              <img
                src={theme === 'dark' ? LogoDark : Logo}
                alt="Ekline"
                style={{ height: '24px' }}
              />
            </a>

            {/* Desktop Navigation */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-1)',
              }}
              className="desktop-nav"
            >
              {navLinks.map((link) => (
                <NavLink key={link.label} href={link.href}>
                  {link.label}
                </NavLink>
              ))}
            </div>

            {/* CTA Button */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)' }}>
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '32px',
                  height: '32px',
                  background: 'transparent',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  borderRadius: 'var(--radius-full)',
                  transition: 'all 0.2s',
                }}
                className="hover:text-primary"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Moon size={18} /> : <Sun size={18} />}
              </button>

              <motion.button
                className="btn btn-primary"
                style={{
                  height: '36px',
                  padding: '0 var(--space-4)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-medium)',
                  gap: 'var(--space-2)',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Sign In</span>
                <ArrowRight size={14} />
              </motion.button>

              <motion.button
                className="btn btn-primary"
                style={{
                  height: '36px',
                  padding: '0 var(--space-4)',
                  fontSize: 'var(--text-sm)',
                  fontWeight: 'var(--font-medium)',
                  gap: 'var(--space-2)',
                }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <span>Get Access</span>
                <ArrowRight size={14} />
              </motion.button>

              {/* Mobile menu toggle */}
              <button
                className="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{
                  display: 'none',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '40px',
                  height: '40px',
                  background: 'transparent',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  color: 'var(--text-primary)',
                  cursor: 'pointer',
                }}
              >
                {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
          </motion.div>
        </motion.nav>
      </div>

      {/* Mobile Menu Overlay */}
      <motion.div
        initial={false}
        animate={{
          opacity: mobileMenuOpen ? 1 : 0,
          pointerEvents: mobileMenuOpen ? 'auto' : 'none',
        }}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 'calc(var(--z-fixed) - 1)',
          background: 'var(--bg-primary)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 'var(--space-8)',
          opacity: 0.98,
        }}
        className="mobile-menu"
      >
        {navLinks.map((link, index) => (
          <motion.a
            key={link.label}
            href={link.href}
            onClick={() => setMobileMenuOpen(false)}
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: mobileMenuOpen ? 1 : 0,
              y: mobileMenuOpen ? 0 : 20,
            }}
            transition={{ delay: index * 0.1 }}
            style={{
              fontSize: 'var(--text-3xl)',
              fontWeight: 'var(--font-semibold)',
              color: 'var(--text-primary)',
              textDecoration: 'none',
              letterSpacing: 'var(--tracking-tight)',
            }}
          >
            {link.label}
          </motion.a>
        ))}
      </motion.div>

      {/* Styles for responsive behavior */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: flex !important;
          }
          .status-badge {
            display: none !important;
          }
        }
      `}</style>
    </>
  );
};

// Reusable NavLink component with hover effect
const NavLink = ({ href, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        padding: 'var(--space-2) var(--space-4)',
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-medium)',
        color: isHovered ? 'var(--text-primary)' : 'var(--text-secondary)',
        textDecoration: 'none',
        borderRadius: 'var(--radius-md)',
        transition: 'color 0.2s ease',
      }}
    >
      {/* Hover background */}
      <motion.span
        style={{
          position: 'absolute',
          inset: 0,
          background: 'var(--bg-surface-interactive)',
          borderRadius: 'var(--radius-md)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />
      <span style={{ position: 'relative', zIndex: 1 }}>{children}</span>
    </motion.a>
  );
};

export default Navbar;
