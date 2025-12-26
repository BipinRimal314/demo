import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { CheckCircle, AlertCircle, XCircle, Terminal, ArrowRight, Sparkles } from 'lucide-react';

const DifferentiatorSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' });

  const steps = [
    {
      number: '01',
      title: 'Review',
      description: 'Automated QA in CI/CD. Catch style, grammar, and structural issues instantly.',
      color: 'var(--primary)',
      icon: <CheckCircle size={20} />,
    },
    {
      number: '02',
      title: 'Detect',
      description: 'Semantic drift detection alerts you when code and docs diverge.',
      color: 'var(--accent)',
      icon: <AlertCircle size={20} />,
    },
    {
      number: '03',
      title: 'Generate',
      description: 'Turn verified code into API references automatically.',
      color: 'var(--info)',
      icon: <Sparkles size={20} />,
    },
  ];

  // Auto-advance steps
  useEffect(() => {
    if (!isInView) return;
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isInView]);

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding"
      style={{
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Background gradient */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '150%',
          height: '100%',
          background: `
            radial-gradient(ellipse 40% 50% at 20% 50%, var(--primary-glow) 0%, transparent 70%),
            radial-gradient(ellipse 40% 50% at 80% 50%, var(--accent-glow) 0%, transparent 70%)
          `,
          opacity: 0.5,
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
            textAlign: 'center',
            marginBottom: 'var(--space-16)',
          }}
        >
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 'var(--space-2)',
              padding: 'var(--space-1) var(--space-3)',
              background: 'var(--accent-glow)',
              border: '1px solid var(--border-subtle)',
              borderRadius: 'var(--radius-sm)',
              marginBottom: 'var(--space-4)',
            }}
          >
            <Terminal size={14} style={{ color: 'var(--accent)' }} />
            <span
              style={{
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-mono)',
                color: 'var(--accent)',
                letterSpacing: 'var(--tracking-mono)',
                textTransform: 'uppercase',
              }}
            >
              The Process
            </span>
          </div>

          <h2
            style={{
              fontSize: 'clamp(2rem, 5vw, 3.5rem)',
              fontWeight: 'var(--font-bold)',
              letterSpacing: 'var(--tracking-tighter)',
              lineHeight: 'var(--leading-tight)',
              marginBottom: 'var(--space-4)',
            }}
          >
            <span style={{ color: 'var(--text-primary)' }}>Docs as </span>
            <span
              style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                backgroundClip: 'text',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Code.
            </span>
          </h2>

          <p
            style={{
              fontSize: 'var(--text-lg)',
              color: 'var(--text-secondary)',
              maxWidth: '600px',
              margin: '0 auto',
              lineHeight: 'var(--leading-relaxed)',
            }}
          >
            Treat documentation with the same rigor as your codebase.
            Lint it. Test it. Deploy it.
          </p>
        </motion.div>

        {/* Main content grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.3fr',
            gap: 'var(--space-16)',
            alignItems: 'center',
          }}
          className="process-grid"
        >
          {/* Steps */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: 'var(--space-4)',
            }}
          >
            {steps.map((step, index) => (
              <StepCard
                key={step.number}
                step={step}
                isActive={activeStep === index}
                onClick={() => setActiveStep(index)}
              />
            ))}
          </motion.div>

          {/* Terminal Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              position: 'relative',
            }}
          >
            {/* Glow effect */}
            <div
              style={{
                position: 'absolute',
                inset: '-30px',
                background: `radial-gradient(ellipse at center, ${steps[activeStep].color}20 0%, transparent 70%)`,
                filter: 'blur(40px)',
                opacity: 0.6,
                transition: 'background 0.5s ease',
                zIndex: -1,
              }}
            />

            <AnimatedTerminal activeStep={activeStep} />
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            marginTop: 'var(--space-16)',
            textAlign: 'center',
          }}
        >
          <motion.button
            className="btn btn-secondary btn-lg"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              gap: 'var(--space-2)',
            }}
          >
            <span>View Documentation</span>
            <ArrowRight size={18} />
          </motion.button>
        </motion.div>
      </div>

      {/* Responsive styles */}
      <style>{`
        @media (max-width: 1024px) {
          .process-grid {
            grid-template-columns: 1fr !important;
            gap: var(--space-8) !important;
          }
        }
      `}</style>
    </section>
  );
};

// Step card component
const StepCard = ({ step, isActive, onClick }) => (
  <motion.div
    onClick={onClick}
    whileHover={{ x: 4 }}
    style={{
      display: 'flex',
      gap: 'var(--space-4)',
      padding: 'var(--space-5)',
      background: isActive ? 'var(--bg-elevated)' : 'transparent',
      border: `1px solid ${isActive ? step.color : 'var(--border-subtle)'}`,
      borderRadius: 'var(--radius-lg)',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    {/* Active indicator line */}
    <motion.div
      initial={false}
      animate={{
        scaleY: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
      }}
      style={{
        position: 'absolute',
        left: 0,
        top: '10%',
        bottom: '10%',
        width: '3px',
        background: step.color,
        borderRadius: 'var(--radius-full)',
        originY: 0,
      }}
    />

    {/* Number */}
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        background: isActive ? `${step.color}20` : 'var(--bg-tertiary)',
        borderRadius: 'var(--radius-md)',
        color: isActive ? step.color : 'var(--text-muted)',
        transition: 'all 0.3s ease',
      }}
    >
      {step.icon}
    </div>

    {/* Content */}
    <div style={{ flex: 1 }}>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 'var(--space-2)',
          marginBottom: 'var(--space-1)',
        }}
      >
        <span
          style={{
            fontSize: 'var(--text-xs)',
            fontFamily: 'var(--font-mono)',
            color: isActive ? step.color : 'var(--text-muted)',
            letterSpacing: 'var(--tracking-mono)',
          }}
        >
          {step.number}
        </span>
        <h3
          style={{
            fontSize: 'var(--text-lg)',
            fontWeight: 'var(--font-semibold)',
            color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
            transition: 'color 0.3s ease',
          }}
        >
          {step.title}
        </h3>
      </div>
      <p
        style={{
          fontSize: 'var(--text-sm)',
          color: 'var(--text-tertiary)',
          lineHeight: 'var(--leading-relaxed)',
        }}
      >
        {step.description}
      </p>
    </div>
  </motion.div>
);

// Animated terminal component
const AnimatedTerminal = ({ activeStep }) => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const terminalOutputs = [
    // Step 0: Review
    [
      { type: 'command', text: '> ekline review docs/' },
      { type: 'info', text: '' },
      { type: 'success', text: '[PASS] Style check: 24/24 rules passed' },
      { type: 'success', text: '[PASS] Grammar check: No issues found' },
      { type: 'success', text: '[PASS] Link validation: All links valid' },
      { type: 'success', text: '[PASS] Code blocks: Syntax verified' },
      { type: 'info', text: '' },
      { type: 'complete', text: 'Review complete. 0 errors, 0 warnings.' },
    ],
    // Step 1: Detect
    [
      { type: 'command', text: '> ekline detect --source ./src' },
      { type: 'info', text: '' },
      { type: 'info', text: 'Analyzing code changes since last sync...' },
      { type: 'warning', text: '' },
      { type: 'error', text: '[DRIFT] api/auth.ts:42' },
      { type: 'diff-remove', text: '- Docs: authenticate(user: User)' },
      { type: 'diff-add', text: '+ Code: authenticate(user: User, tenant?: string)' },
      { type: 'info', text: '' },
      { type: 'error', text: 'Drift detected. Docs out of sync with code.' },
    ],
    // Step 2: Generate
    [
      { type: 'command', text: '> ekline generate --output ./docs/api' },
      { type: 'info', text: '' },
      { type: 'info', text: 'Generating API reference from source...' },
      { type: 'success', text: '[GEN] AuthService - 12 methods documented' },
      { type: 'success', text: '[GEN] UserService - 8 methods documented' },
      { type: 'success', text: '[GEN] DataService - 15 methods documented' },
      { type: 'info', text: '' },
      { type: 'complete', text: 'Generated 35 API docs. Ready for review.' },
    ],
  ];

  useEffect(() => {
    setDisplayedLines([]);
    setIsTyping(true);

    const lines = terminalOutputs[activeStep] || terminalOutputs[0];
    if (!lines) return;

    let currentIndex = 0;
    let timeoutId;

    const typeNextLine = () => {
      if (currentIndex < lines.length) {
        setDisplayedLines((prev) => [...prev, lines[currentIndex]]);
        currentIndex++;
        timeoutId = setTimeout(typeNextLine, 150);
      } else {
        setIsTyping(false);
      }
    };

    timeoutId = setTimeout(typeNextLine, 300);
    return () => clearTimeout(timeoutId);
  }, [activeStep]);

  const getLineColor = (type) => {
    switch (type) {
      case 'command': return 'var(--term-text)';
      case 'success': return 'var(--term-success)';
      case 'error': return 'var(--term-error)';
      case 'warning': return 'var(--term-warning)';
      case 'diff-add': return 'var(--term-success)';
      case 'diff-remove': return 'var(--term-error)';
      case 'complete': return 'var(--term-blue)';
      case 'info': return 'var(--term-info)';
      default: return 'var(--term-info)';
    }
  };

  return (
    <div
      style={{
        background: 'var(--term-bg)',
        border: '1px solid var(--border-default)',
        borderRadius: 'var(--radius-xl)',
        overflow: 'hidden',
        fontFamily: 'var(--font-mono)',
        fontSize: 'var(--text-sm)',
        boxShadow: 'var(--shadow-lg)',
      }}
    >
      {/* Terminal header */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: 'var(--space-3) var(--space-4)',
          borderBottom: '1px solid var(--border-subtle)',
          background: 'var(--term-header)',
        }}
      >
        <div style={{ display: 'flex', gap: 'var(--space-2)' }}>
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#ff5f57' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#febc2e' }} />
          <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#28c840' }} />
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-2)',
            fontSize: 'var(--text-xs)',
            color: 'var(--term-info)',
          }}
        >
          <Terminal size={12} />
          <span>ekline-cli</span>
        </div>
        <div style={{ width: '52px' }} />
      </div>

      {/* Terminal content */}
      <div
        style={{
          padding: 'var(--space-4)',
          minHeight: '320px',
          lineHeight: '1.8',
        }}
      >
        {displayedLines.map((line, index) => {
          if (!line) return null;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.2 }}
              style={{
                color: getLineColor(line.type),
                display: 'block',
                minHeight: line.text ? 'auto' : '1.8em',
              }}
            >
              {line.text}
            </motion.div>
          );
        })}
        {isTyping && (
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ duration: 0.5, repeat: Infinity }}
            style={{
              display: 'inline-block',
              width: '8px',
              height: '16px',
              background: 'var(--text-primary)',
              marginLeft: '2px',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default DifferentiatorSection;
