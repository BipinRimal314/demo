import { motion } from 'framer-motion';

const TrustedBy = () => {
  // Company logos - using SVG-style text representations
  const companies = [
    { name: 'Vercel', logo: 'VERCEL' },
    { name: 'Stripe', logo: 'STRIPE' },
    { name: 'Linear', logo: 'LINEAR' },
    { name: 'Supabase', logo: 'SUPABASE' },
    { name: 'OpenAI', logo: 'OPENAI' },
    { name: 'Anthropic', logo: 'ANTHROPIC' },
    { name: 'Figma', logo: 'FIGMA' },
    { name: 'Notion', logo: 'NOTION' },
  ];

  // Duplicate for seamless infinite scroll
  const duplicatedCompanies = [...companies, ...companies];

  return (
    <section
      style={{
        position: 'relative',
        borderTop: '1px solid var(--border-subtle)',
        borderBottom: '1px solid var(--border-subtle)',
        background: 'var(--bg-secondary)',
        overflow: 'hidden',
      }}
    >
      {/* Subtle gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, var(--bg-primary) 0%, transparent 30%, transparent 70%, var(--bg-primary) 100%)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="container">
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: 'var(--space-12) 0',
            gap: 'var(--space-8)',
          }}
        >
          {/* Section label */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 'var(--space-3)',
            }}
          >
            <div
              style={{
                width: '40px',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, var(--border-default))',
              }}
            />
            <span
              style={{
                fontSize: 'var(--text-xs)',
                fontFamily: 'var(--font-mono)',
                color: 'var(--text-muted)',
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
              }}
            >
              Trusted by teams at
            </span>
            <div
              style={{
                width: '40px',
                height: '1px',
                background: 'linear-gradient(90deg, var(--border-default), transparent)',
              }}
            />
          </motion.div>

          {/* Infinite scrolling logo carousel */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              overflow: 'hidden',
              maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
              WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            }}
          >
            <motion.div
              animate={{
                x: [0, -50 * companies.length * 4],
              }}
              transition={{
                x: {
                  repeat: Infinity,
                  repeatType: 'loop',
                  duration: 30,
                  ease: 'linear',
                },
              }}
              style={{
                display: 'flex',
                gap: 'var(--space-16)',
                width: 'fit-content',
              }}
            >
              {duplicatedCompanies.map((company, index) => (
                <LogoItem key={`${company.name}-${index}`} company={company} />
              ))}
            </motion.div>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'flex',
              gap: 'var(--space-12)',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginTop: 'var(--space-4)',
            }}
          >
            <StatItem value="10K+" label="Docs Verified" />
            <StatItem value="500+" label="Teams" />
            <StatItem value="99.9%" label="Uptime" />
            <StatItem value="<100ms" label="Avg Response" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// Logo item component
const LogoItem = ({ company }) => (
  <motion.div
    whileHover={{ scale: 1.05, opacity: 1 }}
    style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 'var(--space-4) var(--space-6)',
      fontSize: 'var(--text-lg)',
      fontWeight: 'var(--font-bold)',
      letterSpacing: 'var(--tracking-tight)',
      color: 'var(--text-primary)',
      opacity: 0.4,
      cursor: 'default',
      transition: 'opacity 0.3s ease',
      whiteSpace: 'nowrap',
      userSelect: 'none',
    }}
  >
    {company.logo}
  </motion.div>
);

// Stat item component
const StatItem = ({ value, label }) => (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: 'var(--space-1)',
    }}
  >
    <span
      style={{
        fontSize: 'var(--text-2xl)',
        fontWeight: 'var(--font-bold)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-mono)',
        letterSpacing: 'var(--tracking-tight)',
      }}
    >
      {value}
    </span>
    <span
      style={{
        fontSize: 'var(--text-xs)',
        color: 'var(--text-muted)',
        textTransform: 'uppercase',
        letterSpacing: '0.05em',
      }}
    >
      {label}
    </span>
  </div>
);

export default TrustedBy;
