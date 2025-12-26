import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, CheckCircle, Terminal, Zap, Shield } from 'lucide-react';
import CodePlayground from './CodePlayground';

const Hero = () => {
  const { scrollY } = useScroll();
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const demoCode = `// ekline.config.ts
export default defineConfig({
  rules: {
    'style/active-voice': 'error',
    'terminology/product-names': 'error',
    'links/broken': 'warn'
  },
  ai: {
    backend: 'openai',
    model: 'gpt-4o'
  }
});`;

  return (
    <section
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'var(--space-32)',
        paddingBottom: 'var(--space-16)',
        overflow: 'hidden',
      }}
    >
      {/* Animated background effects */}
      <HeroBackground backgroundY={backgroundY} opacity={opacity} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: 'var(--space-16)',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Status badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 'var(--space-2)',
                marginBottom: 'var(--space-6)',
              }}
            >
              <span
                className="tag tag-available"
                style={{
                  display: 'inline-flex',
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
                v1.0 Available
              </span>
              <span
                className="tag"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                }}
              >
                <Terminal size={12} />
                CLI Ready
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              style={{
                fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                lineHeight: 'var(--leading-tight)',
                marginBottom: 'var(--space-6)',
                letterSpacing: 'var(--tracking-tighter)',
                fontWeight: 'var(--font-bold)',
              }}
            >
              <span style={{ display: 'block' }}>Automated</span>
              <span
                style={{
                  display: 'block',
                  background: 'linear-gradient(135deg, var(--primary) 0%, var(--primary-light) 50%, var(--accent-light) 100%)',
                  backgroundClip: 'text',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Documentation QA
              </span>
              <span style={{ display: 'block', color: 'var(--text-secondary)' }}>
                for Developers.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              style={{
                fontSize: 'var(--text-xl)',
                color: 'var(--text-secondary)',
                marginBottom: 'var(--space-8)',
                maxWidth: '520px',
                lineHeight: 'var(--leading-relaxed)',
              }}
            >
              Run your first doc check in{' '}
              <span style={{ color: 'var(--text-primary)', fontWeight: 'var(--font-medium)' }}>
                3 minutes
              </span>
              . Catch issues you didn't know existed before your users do.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              style={{
                display: 'flex',
                gap: 'var(--space-4)',
                flexWrap: 'wrap',
              }}
            >
              <motion.button
                className="btn btn-primary btn-lg"
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px var(--primary-glow-intense)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  gap: 'var(--space-2)',
                }}
              >
                <span>Start Verifying</span>
                <ArrowRight size={18} />
              </motion.button>
              <motion.button
                className="btn btn-secondary btn-lg"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Read the Docs
              </motion.button>
            </motion.div>

            {/* Trust signals */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              style={{
                marginTop: 'var(--space-8)',
                display: 'flex',
                gap: 'var(--space-6)',
                flexWrap: 'wrap',
              }}
            >
              <TrustSignal icon={<CheckCircle size={16} />} text="Free for Open Source" />
              <TrustSignal icon={<Zap size={16} />} text="Setup in 60 seconds" />
              <TrustSignal icon={<Shield size={16} />} text="SOC 2 Compliant" />
            </motion.div>
          </motion.div>

          {/* Right Visual - Code Editor */}
          <motion.div
            initial={{ opacity: 0, x: 60, rotateY: -10 }}
            animate={{ opacity: 1, x: 0, rotateY: 0 }}
            transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
            style={{
              position: 'relative',
              perspective: '1000px',
            }}
          >
            {/* Glow effect behind code editor */}
            <div
              style={{
                position: 'absolute',
                inset: '-40px',
                background: `
                  radial-gradient(ellipse at 30% 20%, var(--primary-glow-intense) 0%, transparent 50%),
                  radial-gradient(ellipse at 70% 80%, var(--accent-glow) 0%, transparent 50%)
                `,
                filter: 'blur(60px)',
                opacity: 0.6,
                zIndex: -1,
                animation: 'pulse-glow 4s ease-in-out infinite',
              }}
            />

            {/* Floating decorative elements */}
            <FloatingElement
              delay={0}
              style={{ top: '-20px', right: '-10px' }}
            >
              <div
                style={{
                  padding: 'var(--space-2) var(--space-3)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--primary)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                }}
              >
                <CheckCircle size={12} />
                12 rules passed
              </div>
            </FloatingElement>

            <FloatingElement
              delay={0.5}
              style={{ bottom: '40px', left: '-30px' }}
            >
              <div
                style={{
                  padding: 'var(--space-2) var(--space-3)',
                  background: 'var(--bg-elevated)',
                  border: '1px solid var(--border-subtle)',
                  borderRadius: 'var(--radius-md)',
                  fontSize: 'var(--text-xs)',
                  fontFamily: 'var(--font-mono)',
                  color: 'var(--warning)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 'var(--space-2)',
                }}
              >
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--warning)' }} />
                2 warnings
              </div>
            </FloatingElement>

            {/* Code editor */}
            <div
              style={{
                position: 'relative',
                borderRadius: 'var(--radius-xl)',
                overflow: 'hidden',
                boxShadow: `
                  0 0 0 1px var(--border-subtle),
                  0 20px 40px -20px rgba(0, 0, 0, 0.5),
                  0 0 60px -30px var(--primary-glow)
                `,
              }}
            >
              <CodePlayground
                code={demoCode}
                filename="ekline.config.ts"
                height="420px"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-12) !important;
            text-align: center;
          }
          .hero-grid > div:first-child {
            display: flex;
            flex-direction: column;
            align-items: center;
          }
          .hero-grid p {
            max-width: 100% !important;
          }
        }
      `}</style>
    </section>
  );
};

// Background component with animated gradients
const HeroBackground = ({ backgroundY, opacity }) => (
  <>
    {/* Primary gradient glow */}
    <motion.div
      style={{
        position: 'absolute',
        top: '-20%',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '140%',
        height: '800px',
        background: `
          radial-gradient(ellipse 80% 50% at 50% 0%, var(--primary-glow) 0%, transparent 100%),
          radial-gradient(ellipse 60% 40% at 60% 10%, var(--accent-glow) 0%, transparent 100%)
        `,
        y: backgroundY,
        opacity,
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />

    {/* Grid pattern overlay */}
    <div
      style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(var(--border-subtle) 1px, transparent 1px),
          linear-gradient(90deg, var(--border-subtle) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        maskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
        WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none',
        opacity: 0.5,
      }}
    />

    {/* Subtle radial gradient at bottom */}
    <div
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '400px',
        background: 'linear-gradient(to top, var(--bg-primary), transparent)',
        zIndex: 0,
        pointerEvents: 'none',
      }}
    />
  </>
);

// Trust signal component
const TrustSignal = ({ icon, text }) => (
  <div
    style={{
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)',
      fontSize: 'var(--text-sm)',
      color: 'var(--text-tertiary)',
    }}
  >
    <span style={{ color: 'var(--primary)' }}>{icon}</span>
    <span>{text}</span>
  </div>
);

// Floating element component with animation
const FloatingElement = ({ children, delay = 0, style = {} }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.8 + delay, duration: 0.6 }}
    style={{
      position: 'absolute',
      zIndex: 10,
      ...style,
    }}
  >
    <motion.div
      animate={{
        y: [0, -8, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
        delay: delay,
      }}
    >
      {children}
    </motion.div>
  </motion.div>
);

export default Hero;
