import { motion } from 'framer-motion';
import { Bot, FileCode, Cloud, ArrowRight, Check, Github, Code2, Zap } from 'lucide-react';

const ProductSection = () => {
  const products = [
    {
      id: 'reviewer',
      icon: <Bot size={32} />,
      title: 'Docs Reviewer',
      description: 'Runs in your CI/CD pipeline to catch style violations, broken links, and outdated content. Real-time feedback in VS Code.',
      status: 'available',
      features: [
        'GitHub, GitLab, Bitbucket integration',
        'VS Code extension',
        '24+ built-in rules',
        'Custom rule builder',
      ],
      color: 'var(--primary)',
      span: 8,
      featured: true,
    },
    {
      id: 'agent',
      icon: <FileCode size={32} />,
      title: 'Docs Agent',
      description: 'Generates API references and guides directly from your source code. Supports TypeScript, Python, Go, and Rust.',
      status: 'beta',
      features: [
        'Auto-generate from code',
        'Multi-language support',
        'OpenAPI/Swagger export',
      ],
      color: 'var(--accent)',
      span: 4,
      featured: false,
    },
    {
      id: 'hosting',
      icon: <Cloud size={32} />,
      title: 'Verified Hosting',
      description: 'High-integrity hosting for your verified documentation. Every page comes with a verification badge.',
      status: 'coming',
      features: [
        'Global CDN',
        'Verification badges',
        'Analytics dashboard',
      ],
      color: 'var(--info)',
      span: 12,
      featured: false,
    },
  ];

  return (
    <section
      id="product"
      className="section-padding"
      style={{
        position: 'relative',
        background: 'var(--bg-secondary)',
        overflow: 'hidden',
      }}
    >
      {/* Background pattern */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: `
            radial-gradient(circle at 20% 50%, var(--primary-glow) 0%, transparent 40%),
            radial-gradient(circle at 80% 80%, var(--accent-glow) 0%, transparent 40%)
          `,
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            marginBottom: 'var(--space-16)',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-1) var(--space-3)',
              background: 'var(--primary-glow)',
              border: '1px solid rgba(16, 185, 129, 0.2)',
              borderRadius: 'var(--radius-sm)',
              marginBottom: 'var(--space-4)',
            }}
          >
            <Zap size={14} style={{ color: 'var(--primary)' }} />
            <span
              style={{
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-mono)',
                color: 'var(--primary)',
                letterSpacing: 'var(--tracking-mono)',
                textTransform: 'uppercase',
              }}
            >
              The Suite
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 'var(--font-bold)',
              letterSpacing: 'var(--tracking-tighter)',
              marginBottom: 'var(--space-4)',
            }}
          >
            Three Agents.{' '}
            <span
              style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              One Truth.
            </span>
          </h2>

          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '500px',
              margin: '0 auto',
            }}
          >
            A complete toolkit for documentation that stays in sync with your code.
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="bento-grid">
          {/* Main Product: Docs Reviewer */}
          <motion.div
            className="bento-card bento-card-glow"
            style={{
              gridColumn: 'span 8',
              minHeight: '420px',
              padding: 'var(--space-8)',
              display: 'flex',
              flexDirection: 'column',
              background: `linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-tertiary) 100%)`,
              position: 'relative',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Corner gradient */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '400px',
                height: '400px',
                background: 'radial-gradient(circle at top right, var(--primary-glow) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            {/* Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 'var(--space-8)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: '64px',
                  height: '64px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'var(--primary-glow)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--primary)',
                }}
              >
                <Bot size={32} />
              </div>

              <span
                className="tag tag-available"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                }}
              >
                <span
                  style={{
                    width: '6px',
                    height: '6px',
                    borderRadius: '50%',
                    background: 'var(--primary)',
                    boxShadow: '0 0 8px var(--primary)',
                  }}
                />
                Available Now
              </span>
            </div>

            {/* Content */}
            <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
              <h3
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 'var(--font-bold)',
                  marginBottom: 'var(--space-4)',
                  letterSpacing: 'var(--tracking-tight)',
                }}
              >
                Docs Reviewer
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--text-lg)',
                  lineHeight: 'var(--leading-relaxed)',
                  maxWidth: '480px',
                  marginBottom: 'var(--space-6)',
                }}
              >
                Runs in your CI/CD pipeline to catch style violations, broken links, and outdated content. Get real-time feedback directly in VS Code.
              </p>

              {/* Features grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 'var(--space-3)',
                }}
              >
                {['GitHub Actions', 'VS Code Extension', '24+ Built-in Rules', 'Custom Ruleset'].map((feature) => (
                  <div
                    key={feature}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 'var(--space-2)',
                      fontSize: 'var(--text-sm)',
                      color: 'var(--text-tertiary)',
                    }}
                  >
                    <Check size={14} style={{ color: 'var(--primary)' }} />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <motion.a
              href="#"
              whileHover={{ x: 4 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                fontSize: 'var(--text-base)',
                fontWeight: 'var(--font-medium)',
                color: 'var(--primary)',
                marginTop: 'var(--space-6)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <Github size={18} />
              <span>View Integration Guide</span>
              <ArrowRight size={16} />
            </motion.a>
          </motion.div>

          {/* Secondary: Docs Agent */}
          <motion.div
            className="bento-card"
            style={{
              gridColumn: 'span 4',
              padding: 'var(--space-6)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              position: 'relative',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Corner gradient */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '200px',
                height: '200px',
                background: 'radial-gradient(circle at top right, var(--accent-glow) 0%, transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  width: '48px',
                  height: '48px',
                  borderRadius: 'var(--radius-md)',
                  background: 'var(--accent-glow)',
                  border: '1px solid rgba(139, 92, 246, 0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent)',
                  marginBottom: 'var(--space-6)',
                }}
              >
                <FileCode size={24} />
              </div>

              <h3
                style={{
                  fontSize: 'var(--text-xl)',
                  fontWeight: 'var(--font-semibold)',
                  marginBottom: 'var(--space-3)',
                }}
              >
                Docs Agent
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--text-sm)',
                  lineHeight: 'var(--leading-relaxed)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                Generates API references and guides directly from your source code.
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 'var(--space-2)',
                  marginBottom: 'var(--space-4)',
                }}
              >
                {['TypeScript', 'Python', 'Go', 'Rust'].map((lang) => (
                  <span
                    key={lang}
                    style={{
                      padding: 'var(--space-1) var(--space-2)',
                      background: 'var(--bg-surface)',
                      borderRadius: 'var(--radius-sm)',
                      fontSize: 'var(--text-xs)',
                      fontFamily: 'var(--font-mono)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <span
              className="tag tag-beta"
              style={{
                alignSelf: 'flex-start',
                position: 'relative',
                zIndex: 1,
              }}
            >
              Beta
            </span>
          </motion.div>

          {/* Tertiary: Hosting */}
          <motion.div
            className="bento-card hosting-card"
            style={{
              gridColumn: 'span 12',
              padding: 'var(--space-8)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              background: 'var(--bg-tertiary)',
              position: 'relative',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background pattern */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                  linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px),
                  linear-gradient(var(--border-subtle) 1px, transparent 1px)
                `,
                backgroundSize: '40px 40px',
                opacity: 0.5,
                pointerEvents: 'none',
              }}
            />

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-6)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: 'var(--radius-lg)',
                  background: 'rgba(59, 130, 246, 0.1)',
                  border: '1px solid rgba(59, 130, 246, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--info)',
                }}
              >
                <Cloud size={28} />
              </div>

              <div>
                <h3
                  style={{
                    fontSize: 'var(--text-xl)',
                    fontWeight: 'var(--font-semibold)',
                    marginBottom: 'var(--space-1)',
                  }}
                >
                  Verified Hosting
                </h3>
                <p
                  style={{
                    color: 'var(--text-secondary)',
                    fontSize: 'var(--text-sm)',
                  }}
                >
                  High-integrity hosting for your verified documentation with global CDN and analytics.
                </p>
              </div>
            </div>

            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 'var(--space-4)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--text-muted)',
                }}
              >
                // ARRIVING Q3 2025
              </span>

              <motion.button
                className="btn btn-secondary btn-sm"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Join Waitlist
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Integration logos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            marginTop: 'var(--space-16)',
            textAlign: 'center',
          }}
        >
          <p
            style={{
              fontSize: 'var(--text-sm)',
              color: 'var(--text-muted)',
              marginBottom: 'var(--space-6)',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
            }}
          >
            Integrates with your stack
          </p>

          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 'var(--space-8)',
              flexWrap: 'wrap',
              opacity: 0.6,
            }}
          >
            {['GitHub', 'GitLab', 'VS Code', 'Vercel', 'Netlify'].map((integration) => (
              <span
                key={integration}
                style={{
                  fontSize: 'var(--text-base)',
                  fontWeight: 'var(--font-semibold)',
                  color: 'var(--text-primary)',
                }}
              >
                {integration}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 768px) {
          .bento-grid > div {
            grid-column: span 12 !important;
          }
          .hosting-card {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: var(--space-6) !important;
          }
        }
      `}</style>
    </section>
  );
};

export default ProductSection;
