import { motion } from 'framer-motion';
import { ArrowRight, Github, Twitter, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import Logo from '../assets/Logo.svg';
import LogoDark from '../assets/logo-dark.png';


const Footer = ({ theme }) => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { label: 'Docs Reviewer', href: '#product' },
      { label: 'Docs Agent', href: '#product', badge: 'Beta' },
      { label: 'Verified Hosting', href: '#product', badge: 'Soon' },
      { label: 'Pricing', href: '#pricing' },
    ],
    resources: [
      { label: 'Documentation', href: '#' },
      { label: 'API Reference', href: '#' },
      { label: 'Changelog', href: '#' },
      { label: 'Status', href: '#', external: true },
    ],
    company: [
      { label: 'About', href: '#' },
      { label: 'Blog', href: '#' },
      { label: 'Careers', href: '#', badge: 'Hiring' },
      { label: 'Contact', href: '#' },
    ],
    legal: [
      { label: 'Privacy', href: '#' },
      { label: 'Terms', href: '#' },
      { label: 'Security', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: <Github size={18} />, href: '#', label: 'GitHub' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={18} />, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer
      style={{
        position: 'relative',
        borderTop: '1px solid var(--border-subtle)',
        background: 'var(--bg-primary)',
      }}
    >
      {/* Newsletter / CTA Section */}
      <div
        style={{
          borderBottom: '1px solid var(--border-subtle)',
        }}
      >
        <div
          className="container"
          style={{
            padding: 'var(--space-16) var(--space-6)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-8)',
          }}
        >
          <div>
            <h3
              style={{
                fontSize: 'var(--text-2xl)',
                fontWeight: 'var(--font-bold)',
                marginBottom: 'var(--space-2)',
                letterSpacing: 'var(--tracking-tight)',
              }}
            >
              Ready to verify your docs?
            </h3>
            <p
              style={{
                color: 'var(--text-secondary)',
                fontSize: 'var(--text-base)',
              }}
            >
              Start for free. No credit card required.
            </p>
          </div>

          <div
            style={{
              display: 'flex',
              gap: 'var(--space-3)',
            }}
          >
            <motion.button
              className="btn btn-primary btn-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              style={{
                gap: 'var(--space-2)',
              }}
            >
              <span>Get Started</span>
              <ArrowRight size={18} />
            </motion.button>
            <motion.button
              className="btn btn-secondary btn-lg"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Talk to Sales
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container" style={{ padding: 'var(--space-16) var(--space-6)' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '2fr 1fr 1fr 1fr 1fr',
            gap: 'var(--space-12)',
          }}
          className="footer-grid"
        >
          {/* Brand Column */}
          <div>
            <a
              href="#"
              style={{
                display: 'inline-block',
                marginBottom: 'var(--space-4)',
              }}
            >
              <img
                src={theme === 'dark' ? LogoDark : Logo}
                alt="Ekline"
                style={{ height: '24px' }}
              />
            </a>

            <p
              style={{
                color: 'var(--text-tertiary)',
                fontSize: 'var(--text-sm)',
                lineHeight: 'var(--leading-relaxed)',
                maxWidth: '280px',
                marginBottom: 'var(--space-6)',
              }}
            >
              The integrity platform for developer documentation. Verify, detect drift, and generate docs that stay in sync with your code.
            </p>

            {/* Social Links */}
            <div
              style={{
                display: 'flex',
                gap: 'var(--space-3)',
              }}
            >
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '36px',
                    height: '36px',
                    background: 'var(--bg-tertiary)',
                    border: '1px solid var(--border-subtle)',
                    borderRadius: 'var(--radius-md)',
                    color: 'var(--text-secondary)',
                    transition: 'all 0.2s ease',
                  }}
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          <FooterLinkColumn title="Product" links={footerLinks.product} />
          <FooterLinkColumn title="Resources" links={footerLinks.resources} />
          <FooterLinkColumn title="Company" links={footerLinks.company} />
          <FooterLinkColumn title="Legal" links={footerLinks.legal} />
        </div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: '1px solid var(--border-subtle)',
        }}
      >
        <div
          className="container"
          style={{
            padding: 'var(--space-6)',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: 'var(--space-4)',
          }}
        >
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--text-muted)',
            }}
          >
            &copy; {currentYear} Ekline Inc. All rights reserved.
          </p>

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-6)',
            }}
          >
            {/* Status indicator */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                fontSize: 'var(--text-sm)',
                color: 'var(--text-muted)',
              }}
            >
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  background: 'var(--success)',
                  boxShadow: '0 0 8px var(--success)',
                }}
              />
              <span>All systems operational</span>
            </div>

            {/* Version */}
            <span
              style={{
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                padding: 'var(--space-1) var(--space-2)',
                background: 'var(--bg-tertiary)',
                borderRadius: 'var(--radius-sm)',
              }}
            >
              v1.0.0
            </span>
          </div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr 1fr 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: span 4;
            margin-bottom: var(--space-8);
          }
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: span 2;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
          }
          .footer-grid > div:first-child {
            grid-column: span 1;
          }
        }
      `}</style>
    </footer>
  );
};

// Footer link column component
const FooterLinkColumn = ({ title, links }) => (
  <div>
    <h4
      style={{
        fontSize: 'var(--text-sm)',
        fontWeight: 'var(--font-semibold)',
        color: 'var(--text-primary)',
        marginBottom: 'var(--space-4)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}
    >
      {title}
    </h4>

    <ul
      style={{
        listStyle: 'none',
        display: 'flex',
        flexDirection: 'column',
        gap: 'var(--space-3)',
      }}
    >
      {links.map((link) => (
        <li key={link.label}>
          <a
            href={link.href}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              fontSize: 'var(--text-sm)',
              color: 'var(--text-tertiary)',
              transition: 'color 0.2s ease',
            }}
          >
            <span>{link.label}</span>
            {link.badge && (
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'var(--font-mono)',
                  padding: '2px 6px',
                  background:
                    link.badge === 'Beta'
                      ? 'var(--accent-glow)'
                      : link.badge === 'Hiring'
                        ? 'var(--primary-glow)'
                        : 'var(--bg-surface)',
                  color:
                    link.badge === 'Beta'
                      ? 'var(--accent)'
                      : link.badge === 'Hiring'
                        ? 'var(--primary)'
                        : 'var(--text-muted)',
                  borderRadius: 'var(--radius-sm)',
                }}
              >
                {link.badge}
              </span>
            )}
            {link.external && <ArrowUpRight size={12} />}
          </a>
        </li>
      ))}
    </ul>
  </div>
);

export default Footer;
