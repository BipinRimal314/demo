import { motion, useScroll, useTransform } from 'framer-motion';
import { AlertTriangle, Bug, FileWarning, XCircle, TrendingDown, Clock, Frown } from 'lucide-react';
import { useRef } from 'react';

const BeliefSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

  return (
    <section
      id="belief"
      ref={sectionRef}
      className="section-padding"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient that fades in on scroll */}
      <motion.div
        style={{
          position: 'absolute',
          top: '10%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '120%',
          height: '80%',
          background: `
            radial-gradient(ellipse 50% 50% at 30% 50%, rgba(239, 68, 68, 0.08) 0%, transparent 70%),
            radial-gradient(ellipse 40% 40% at 70% 30%, rgba(249, 115, 22, 0.06) 0%, transparent 70%)
          `,
          opacity: backgroundOpacity,
          pointerEvents: 'none',
          zIndex: 0,
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
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 'var(--space-8)',
            alignItems: 'end',
          }}
          className="belief-header"
        >
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                padding: 'var(--space-1) var(--space-3)',
                background: 'rgba(239, 68, 68, 0.1)',
                border: '1px solid rgba(239, 68, 68, 0.2)',
                borderRadius: 'var(--radius-sm)',
                marginBottom: 'var(--space-4)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  background: 'var(--error)',
                  animation: 'pulse-glow 2s ease-in-out infinite',
                }}
              />
              <span
                style={{
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--error)',
                  letterSpacing: 'var(--tracking-mono)',
                  textTransform: 'uppercase',
                }}
              >
                The Problem
              </span>
            </motion.div>

            <h2
              style={{
                fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                fontWeight: 'var(--font-bold)',
                letterSpacing: 'var(--tracking-tighter)',
                lineHeight: 'var(--leading-tight)',
              }}
            >
              <span style={{ color: 'var(--text-primary)' }}>Documentation</span>
              <br />
              <span
                style={{
                  background: 'linear-gradient(135deg, var(--error) 0%, #f97316 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                is Broken.
              </span>
            </h2>
          </div>

          <p
            style={{
              maxWidth: '380px',
              color: 'var(--text-secondary)',
              fontSize: 'var(--text-lg)',
              lineHeight: 'var(--leading-relaxed)',
            }}
            className="belief-description"
          >
            Incorrect documentation is a <strong style={{ color: 'var(--text-primary)' }}>bug</strong>, not a typo.
            It breaks trust and kills adoption.
          </p>
        </motion.div>

        {/* Enhanced Bento Grid */}
        <div
          className="bento-grid"
          style={{
            gridTemplateRows: 'auto auto',
          }}
        >
          {/* Main Large Card - The Lie */}
          <motion.div
            className="bento-card"
            style={{
              gridColumn: 'span 8',
              minHeight: '380px',
              padding: 'var(--space-8)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              background: `
                linear-gradient(135deg, var(--bg-elevated) 0%, var(--bg-tertiary) 100%)
              `,
              position: 'relative',
              overflow: 'hidden',
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {/* Decorative corner gradient */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                right: 0,
                width: '300px',
                height: '300px',
                background: 'radial-gradient(circle at top right, rgba(239, 68, 68, 0.1), transparent 70%)',
                pointerEvents: 'none',
              }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                  marginBottom: 'var(--space-4)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'var(--text-sm)',
                  color: 'var(--error)',
                }}
              >
                <XCircle size={16} />
                <span>ERROR: 404_TRUST_NOT_FOUND</span>
              </div>

              <h3
                style={{
                  fontSize: 'var(--text-3xl)',
                  fontWeight: 'var(--font-bold)',
                  marginBottom: 'var(--space-4)',
                  letterSpacing: 'var(--tracking-tight)',
                }}
              >
                The "Lie" of Static Docs
              </h3>

              <p
                style={{
                  color: 'var(--text-secondary)',
                  maxWidth: '500px',
                  fontSize: 'var(--text-lg)',
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                When code ships daily but docs update monthly, you aren't just missing features.
                <strong style={{ color: 'var(--text-primary)' }}> You're lying to your users.</strong>
              </p>
            </div>

            {/* Code comparison visual */}
            <div
              style={{
                marginTop: 'var(--space-6)',
                padding: 'var(--space-6)',
                background: 'var(--bg-primary)',
                border: '1px dashed rgba(239, 68, 68, 0.3)',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 'var(--space-8)',
                position: 'relative',
                zIndex: 1,
              }}
            >
              <CodeBlock label="Code" version="v2.4.1" color="var(--primary)" />
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{
                  fontSize: 'var(--text-2xl)',
                  color: 'var(--error)',
                  fontFamily: 'var(--font-mono)',
                }}
              >
                !=
              </motion.div>
              <CodeBlock label="Docs" version="v1.8.0" color="var(--error)" outdated />
            </div>
          </motion.div>

          {/* Side Card - Bug Visual */}
          <motion.div
            className="bento-card"
            style={{
              gridColumn: 'span 4',
              gridRow: 'span 2',
              padding: 'var(--space-6)',
              background: 'var(--bg-tertiary)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Bug animation container */}
            <div
              style={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
              }}
            >
              <motion.div
                animate={{
                  rotate: [0, 5, -5, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                style={{
                  position: 'relative',
                }}
              >
                <Bug
                  size={100}
                  style={{
                    color: 'var(--text-muted)',
                    opacity: 0.3,
                  }}
                />
                {/* Pulsing glow */}
                <motion.div
                  animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{
                    position: 'absolute',
                    inset: '-20px',
                    background: 'radial-gradient(circle, var(--error) 0%, transparent 70%)',
                    opacity: 0.2,
                    filter: 'blur(20px)',
                    zIndex: -1,
                  }}
                />
              </motion.div>
            </div>

            <div>
              <h3
                style={{
                  fontSize: 'var(--text-2xl)',
                  fontWeight: 'var(--font-semibold)',
                  marginBottom: 'var(--space-2)',
                  letterSpacing: 'var(--tracking-tight)',
                }}
              >
                It's a Bug.
              </h3>
              <p
                style={{
                  color: 'var(--text-secondary)',
                  fontSize: 'var(--text-base)',
                  lineHeight: 'var(--leading-relaxed)',
                }}
              >
                If it compiles but the docs are wrong, is it really working?
              </p>
            </div>
          </motion.div>

          {/* Bottom Row Cards */}
          <SmallCard
            icon={<Clock size={28} />}
            iconColor="var(--warning)"
            title="Outdated"
            description="Code changes, docs stay static. A recipe for frustration."
            delay={0.2}
          />

          <SmallCard
            icon={<FileWarning size={28} />}
            iconColor="#f97316"
            title="Hallucinated"
            description="AI writers that guess rather than verify."
            delay={0.3}
          />
        </div>

        {/* Impact stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          style={{
            marginTop: 'var(--space-12)',
            padding: 'var(--space-6)',
            background: 'var(--bg-tertiary)',
            border: '1px solid var(--border-subtle)',
            borderRadius: 'var(--radius-lg)',
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 'var(--space-8)',
            textAlign: 'center',
          }}
          className="impact-stats"
        >
          <ImpactStat
            icon={<TrendingDown size={20} />}
            value="47%"
            label="Drop in API adoption with outdated docs"
          />
          <ImpactStat
            icon={<Clock size={20} />}
            value="3.2hrs"
            label="Avg time lost per developer per week"
          />
          <ImpactStat
            icon={<Frown size={20} />}
            value="68%"
            label="Users cite bad docs as top complaint"
          />
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .belief-header {
            grid-template-columns: 1fr !important;
          }
          .belief-description {
            max-width: 100% !important;
          }
          .impact-stats {
            grid-template-columns: 1fr !important;
          }
        }
        @media (max-width: 768px) {
          .bento-grid > div {
            grid-column: span 12 !important;
            grid-row: span 1 !important;
          }
        }
      `}</style>
    </section>
  );
};

// Code block component for visual comparison
const CodeBlock = ({ label, version, color, outdated }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-2)',
    }}
  >
    <div
      style={{
        padding: 'var(--space-3) var(--space-4)',
        background: outdated ? 'rgba(239, 68, 68, 0.1)' : 'rgba(16, 185, 129, 0.1)',
        border: `1px solid ${outdated ? 'rgba(239, 68, 68, 0.3)' : 'rgba(16, 185, 129, 0.3)'}`,
        borderRadius: 'var(--radius-md)',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        color: color,
      }}
    >
      &lt;{label} /&gt;
    </div>
    <span
      style={{
        fontSize: 'var(--text-xs)',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-muted)',
      }}
    >
      {version}
    </span>
  </div>
);

// Small bento card component
const SmallCard = ({ icon, iconColor, title, description, delay }) => (
  <motion.div
    className="bento-card"
    style={{
      gridColumn: 'span 4',
      padding: 'var(--space-6)',
    }}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    <div
      style={{
        marginBottom: 'var(--space-4)',
        color: iconColor,
      }}
    >
      {icon}
    </div>
    <h4
      style={{
        fontSize: 'var(--text-xl)',
        fontWeight: 'var(--font-semibold)',
        marginBottom: 'var(--space-2)',
      }}
    >
      {title}
    </h4>
    <p
      style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--text-secondary)',
        lineHeight: 'var(--leading-relaxed)',
      }}
    >
      {description}
    </p>
  </motion.div>
);

// Impact stat component
const ImpactStat = ({ icon, value, label }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-2)',
    }}
  >
    <div style={{ color: 'var(--error)', marginBottom: 'var(--space-1)' }}>{icon}</div>
    <span
      style={{
        fontSize: 'var(--text-3xl)',
        fontWeight: 'var(--font-bold)',
        fontFamily: 'var(--font-mono)',
        color: 'var(--text-primary)',
      }}
    >
      {value}
    </span>
    <span
      style={{
        fontSize: 'var(--text-sm)',
        color: 'var(--text-muted)',
        maxWidth: '200px',
      }}
    >
      {label}
    </span>
  </div>
);

export default BeliefSection;
