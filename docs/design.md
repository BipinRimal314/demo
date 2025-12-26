# Ekline Website Design Documentation

> Automated Documentation QA for Developers

## Table of Contents

1. [Overview](#overview)
2. [Design Philosophy](#design-philosophy)
3. [Technology Stack](#technology-stack)
4. [Design System](#design-system)
5. [Component Architecture](#component-architecture)
6. [Page Sections](#page-sections)
7. [Animation System](#animation-system)
8. [Responsive Design](#responsive-design)
9. [Competitive Inspiration](#competitive-inspiration)

---

## Overview

**Ekline** is an automated documentation QA platform that ensures developer documentation stays in sync with actual code. The website serves as the primary marketing and product showcase, communicating the platform's value proposition to software development teams, API maintainers, and technical documentation teams.

### Core Value Proposition

- **Problem:** Developers update code frequently but documentation updates lag behind, creating trust issues and reducing API adoption
- **Solution:** Automated documentation QA that runs in CI/CD pipelines
- **Promise:** "Run your first doc check in 3 minutes. Catch issues you didn't know existed before your users do."

### Key Philosophy

> "Incorrect documentation is a bug, not a typo."

---

## Design Philosophy

### Visual Identity

The website follows a **premium developer-focused aesthetic** combining:

- **Dark-first design** with true blacks and subtle depth gradients
- **Glassmorphism** for modern, layered UI elements
- **Bento grid layouts** for organized content presentation
- **Micro-interactions** that respond to user behavior
- **Terminal/code-centric visuals** that resonate with developers

### Design Principles

1. **Clarity over decoration** - Every element serves a purpose
2. **Show, don't tell** - Interactive demos over static descriptions
3. **Progressive disclosure** - Information revealed through scroll and interaction
4. **Developer empathy** - Familiar patterns (terminals, code blocks, CLI syntax)
5. **Performance matters** - Smooth 60fps animations, optimized bundle size

---

## Technology Stack

### Core Framework

| Technology | Version | Purpose |
|------------|---------|---------|
| React | 19.2.0 | UI component library |
| Vite | 7.2.4 | Build tool & dev server |
| Framer Motion | 12.23.26 | Animation library |
| Lucide React | 0.561.0 | Icon system |

### Development Tools

| Tool | Purpose |
|------|---------|
| ESLint | Code linting with React-specific rules |
| ES Modules | Modern JavaScript module system |

### Styling Approach

- **Pure CSS** with CSS custom properties (variables)
- **No preprocessors** (SCSS/LESS) - keeps build simple
- **Inline styles** via React for component-specific logic
- **@keyframes** for custom animations
- **backdrop-filter** for glassmorphism effects

---

## Design System

### Color Palette

#### Dark Theme (Default)
```css
/* Primary Colors */
--color-primary: #10B981;        /* Emerald green - brand color */
--color-accent: #8b5cf6;         /* Purple - secondary accent */

/* Semantic Colors */
--color-success: #22c55e;
--color-warning: #f59e0b;
--color-error: #ef4444;
--color-info: #3b82f6;

/* Background Scale */
--color-bg-primary: #000000;     /* True black base */
--color-bg-secondary: #0a0a0a;
--color-bg-tertiary: #0d0d0d;
--color-bg-elevated: #111111;
--color-bg-surface: #161616;

/* Text Scale */
--color-text-primary: #fafafa;   /* Highest contrast */
--color-text-secondary: #a3a3a3;
--color-text-tertiary: #737373;
--color-text-muted: #525252;

/* Border Colors */
--color-border-default: rgba(255, 255, 255, 0.1);
--color-border-subtle: rgba(255, 255, 255, 0.05);
--color-border-emphasis: rgba(255, 255, 255, 0.2);
```

#### Light Theme
```css
/* Background Scale */
--color-bg-primary: #fafafa;     /* Zinc-50 - Soft white */
--color-bg-secondary: #f4f4f5;   /* Zinc-100 */
--color-bg-tertiary: #e4e4e7;    /* Zinc-200 */
--color-bg-elevated: #ffffff;    /* Pure white */
--color-bg-surface: #ffffff;

/* Text Scale */
--color-text-primary: #09090b;   /* Zinc-950 - Deep ink */
--color-text-secondary: #3f3f46; /* Zinc-700 */
--color-text-tertiary: #71717a; /* Zinc-500 */
--color-text-muted: #a1a1aa;    /* Zinc-400 */

/* Primary & Brand */
--color-primary: #dc2626;        /* Red 600 */
--color-primary-dark: #b91c1c;

/* Border Colors */
--color-border-default: #d4d4d8; /* Zinc-300 */
--color-border-subtle: #e4e4e7;  /* Zinc-200 */
--color-border-strong: #a1a1aa;  /* Zinc-400 */
```

### Typography

```css
/* Font Families */
--font-sans: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
--font-mono: 'JetBrains Mono', 'Fira Code', monospace;

/* Font Scale */
--text-xs: 0.75rem;      /* 12px */
--text-sm: 0.875rem;     /* 14px */
--text-base: 1rem;       /* 16px */
--text-lg: 1.125rem;     /* 18px */
--text-xl: 1.25rem;      /* 20px */
--text-2xl: 1.5rem;      /* 24px */
--text-3xl: 1.875rem;    /* 30px */
--text-4xl: 2.25rem;     /* 36px */
--text-5xl: 3rem;        /* 48px */
--text-6xl: 3.75rem;     /* 60px */
--text-7xl: 4.5rem;      /* 72px */

/* Font Weights */
--font-normal: 400;
--font-medium: 500;
--font-semibold: 600;
--font-bold: 700;
```

### Spacing Scale

```css
--space-0: 0;
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-6: 1.5rem;    /* 24px */
--space-8: 2rem;      /* 32px */
--space-10: 2.5rem;   /* 40px */
--space-12: 3rem;     /* 48px */
--space-16: 4rem;     /* 64px */
--space-20: 5rem;     /* 80px */
--space-24: 6rem;     /* 96px */
--space-32: 8rem;     /* 128px */
```

### Border Radius

```css
--radius-sm: 4px;
--radius-md: 8px;
--radius-lg: 12px;
--radius-xl: 16px;
--radius-2xl: 24px;
--radius-full: 9999px;
```

### Z-Index System

```css
--z-base: 0;
--z-dropdown: 100;
--z-sticky: 200;
--z-fixed: 300;
--z-modal-backdrop: 400;
--z-modal: 500;
--z-tooltip: 600;
```

### Shadows & Effects

```css
/* Glassmorphism */
backdrop-filter: blur(20px);
-webkit-backdrop-filter: blur(20px);
background: rgba(0, 0, 0, 0.6);
border: 1px solid rgba(255, 255, 255, 0.1);

/* Glow Effect */
box-shadow: 0 0 60px rgba(16, 185, 129, 0.3);

/* Card Shadow */
box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
```

---

## Component Architecture

### File Structure

```
src/
├── components/
│   ├── Navbar.jsx           # Fixed navigation with mobile menu
│   ├── Hero.jsx             # Landing section with code demo
│   ├── TrustedBy.jsx        # Logo carousel & statistics
│   ├── BeliefSection.jsx    # Problem statement bento grid
│   ├── DifferentiatorSection.jsx  # Process workflow
│   ├── ProductSection.jsx   # Product offerings
│   ├── Footer.jsx           # Links & newsletter CTA
│   └── CodePlayground.jsx   # Syntax-highlighted code editor
├── assets/
├── App.jsx                  # Root component
├── App.css                  # App-specific styles
├── index.css                # Design tokens & base styles
└── main.jsx                 # Entry point
```

### Component Patterns

#### 1. Motion-Enhanced Components

All major sections utilize Framer Motion for:

```jsx
// Scroll-triggered animations
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.6 }}
>
```

#### 2. Glassmorphism Cards

```jsx
const cardStyle = {
  background: 'rgba(0, 0, 0, 0.4)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  border: '1px solid rgba(255, 255, 255, 0.1)',
  borderRadius: '16px',
};
```

#### 3. Bento Grid Layout

```jsx
const bentoGrid = {
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: '1rem',
};

// Card spanning example
const mainCard = { gridColumn: 'span 8' };
const sideCard = { gridColumn: 'span 4' };
```

#### 4. Interactive Code Editor

```jsx
<CodePlayground
  code={configExample}
  language="typescript"
  showLineNumbers={true}
  copyable={true}
/>
```

### Reusable Sub-Components

| Component | Purpose |
|-----------|---------|
| `NavLink` | Hover-animated navigation links |
| `FloatingElement` | Animated floating badges |
| `StepCard` | Interactive process step cards |
| `SmallCard` | Icon + title + description cards |
| `LogoItem` | Animated logo in carousel |
| `StatItem` | Statistics display |
| `FooterLinkColumn` | Footer link groups with badges |
| `TrafficLight` | Code editor window chrome dots |

---

## Page Sections

### 1. Navigation Bar

**Features:**
- Fixed position with glassmorphism background
- Dynamic island effect on scroll
- Logo: "ekline" with green accent dot
- Navigation links: Belief, Process, Product
- Status badge: "Beta"
- CTA button: "Get Access"
- Mobile hamburger menu

### 2. Hero Section

**Layout:** Two-column (content + code demo)

**Left Column:**
- v1.0 Available tag
- CLI Ready tag
- Main headline
- Trust signals (Free for Open Source, Setup in 60 seconds, SOC 2 Compliant)
- CTA buttons

**Right Column:**
- Interactive CodePlayground component
- Floating animated status badges
- Terminal window styling

### 3. Trusted By Section

**Elements:**
- Infinite scroll logo carousel (Vercel, Stripe, Linear, Supabase, OpenAI, Anthropic, Figma, Notion)
- Statistics row:
  - 10K+ Docs Verified
  - 500+ Teams
  - 99.9% Uptime
  - <100ms Avg Response

### 4. Belief Section (id="belief")

**Content:** Problem statement - "Documentation is Broken"

**Bento Grid Layout:**
- Main card: "The Lie of Static Docs"
- Visual card: Animated bug icon
- Supporting cards: "Outdated" and "Hallucinated"

**Impact Statistics:**
- 47% API adoption drop from poor docs
- 3.2hrs lost per developer per week
- 68% cite bad docs as adoption barrier

### 5. Differentiator Section (id="process")

**Content:** Process - "Docs as Code"

**Three-Step Workflow:**
1. **Review** - Automated QA in CI/CD pipeline
2. **Detect** - Semantic drift detection
3. **Generate** - Turn verified code into API refs

**Interactive Elements:**
- Auto-advancing step cards (8s interval)
- Terminal showing command outputs
- Active state indicators

### 6. Product Section (id="product")

**Content:** "The Suite: Three Agents. One Truth"

**Products:**
| Product | Status | Description |
|---------|--------|-------------|
| Docs Reviewer | Available | CI/CD integration, style violations, broken links |
| Docs Agent | Beta | Generates API references from source code |
| Verified Hosting | Coming Q3 2025 | Global CDN, verification badges, analytics |

**Integration Logos:** GitHub, GitLab, VS Code, Vercel, Netlify

### 7. Footer

**Elements:**
- Newsletter CTA with email input
- Link columns: Product, Resources, Company, Legal
- Social links (GitHub, Twitter, LinkedIn)
- Status indicator: "All systems operational"
- Version badge: v1.0.0

---

## Animation System

### Scroll Animations

```jsx
// Fade up on scroll
const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

// Staggered children
const containerVariant = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};
```

### Parallax Effects

```jsx
const { scrollYProgress } = useScroll();
const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
```

### Hover Interactions

```jsx
<motion.button
  whileHover={{ scale: 1.02, y: -2 }}
  whileTap={{ scale: 0.98 }}
  transition={{ type: 'spring', stiffness: 400 }}
>
```

### Continuous Animations

```css
/* Float animation */
@keyframes float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
}

/* Pulse glow */
@keyframes pulse-glow {
  0%, 100% { opacity: 0.5; }
  50% { opacity: 1; }
}

/* Infinite scroll */
@keyframes scroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

### Animation Timing

| Effect | Duration | Easing |
|--------|----------|--------|
| Page transitions | 0.6s | ease-out |
| Hover states | 0.2s | ease |
| Scroll reveals | 0.5-0.8s | spring |
| Auto-advance | 8s | linear |
| Float | 3s | ease-in-out |

---

## Responsive Design

### Breakpoints

```css
/* Mobile first approach */
@media (max-width: 480px)  { /* Small mobile */ }
@media (max-width: 768px)  { /* Tablet/mobile */ }
@media (max-width: 1024px) { /* Small desktop */ }
```

### Responsive Patterns

**Navigation:**
- Desktop: Horizontal links + CTA button
- Mobile: Hamburger menu + slide-out panel

**Hero Section:**
- Desktop: Two-column layout
- Mobile: Single column, code demo below text

**Bento Grid:**
- Desktop: 12-column grid with spanning
- Mobile: Single column stack

**Typography:**
- Uses `clamp()` for fluid sizing
- Example: `clamp(2rem, 5vw, 4rem)`

### Mobile-Specific Adjustments

```jsx
// Hide on mobile
@media (max-width: 768px) {
  .desktop-nav { display: none; }
  .status-badge { display: none; }
}

// Grid collapse
gridTemplateColumns: window.innerWidth < 768
  ? '1fr'
  : 'repeat(12, 1fr)'
```

---

## Competitive Inspiration

The Ekline website design incorporates best practices from leading developer documentation and tooling platforms:

### Mintlify

- **Bento grid layouts** for organized content presentation
- **Clean typography hierarchy** with clear visual distinction
- **Subtle glassmorphism** effects on cards and navigation

### Fern

- **Developer-centric aesthetic** with terminal visuals
- **Process-focused storytelling** (step-by-step workflows)
- **Dark theme with green accent** color scheme

### Supabase

- **Premium dark mode design** with depth layers
- **Animated code playgrounds** that demonstrate functionality
- **Trust signals** (logos, statistics) placement

### Linear

- **Minimal, focused design** without clutter
- **Smooth micro-interactions** on all interactive elements
- **Clear information hierarchy** in product sections

### Vercel

- **Performance-focused messaging**
- **Status badges and version indicators**
- **Clean footer organization** with link categories

### Key Integrations

| Aspect | Inspiration Source |
|--------|-------------------|
| Bento grid layout | Mintlify, Supabase |
| Code playground | Vercel, Supabase |
| Glassmorphism navbar | Linear, Mintlify |
| Trust logo carousel | Stripe, Vercel |
| Terminal animations | Fern, Railway |
| Statistics display | Stripe, Linear |
| Dark theme palette | Supabase, Linear |
| Product cards | Mintlify, Fern |

---

## Performance Optimizations

### Bundle Optimization

- **Vite** for fast builds and tree-shaking
- Production CSS: ~10.6 KB
- Production JS: ~378.9 KB (includes React + Framer Motion)

### Animation Performance

- **GPU-accelerated properties:** transform, opacity
- **will-change** hints for animated elements
- **requestAnimationFrame** via Framer Motion
- **Lazy loading** through intersection observer (`whileInView`)

### Image Optimization

- SVG icons via Lucide React (no image sprites)
- Text-based company logos (no logo images)
- CSS-generated visual effects (gradients, patterns)

---

## Accessibility Features

- **Focus-visible states** for keyboard navigation
- **ARIA labels** on social links and buttons
- **Semantic HTML** structure (header, main, section, footer)
- **High contrast** text colors (WCAG AA compliant)
- **Smooth scroll behavior** respects `prefers-reduced-motion`
- **Alt text** on decorative elements where appropriate

---

## Browser Support

### Fully Supported

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### CSS Features Used

- CSS Grid & Flexbox
- CSS Custom Properties
- backdrop-filter (with webkit prefix)
- clamp() for fluid typography
- mask-image for gradients

### Webkit Prefixes

```css
-webkit-backdrop-filter: blur(20px);
-webkit-text-fill-color: transparent;
-webkit-mask-image: linear-gradient(...);
```

---

## Future Considerations

### Planned Enhancements

- [ ] Dark/light theme toggle
- [ ] Internationalization (i18n)
- [ ] Blog section integration
- [ ] Changelog page
- [ ] Pricing comparison table
- [ ] Interactive demo sandbox

### Technical Debt

- Consider extracting CSS-in-JS to styled-components or CSS modules
- Add unit tests for component rendering
- Implement Storybook for component documentation
- Add error boundaries for graceful failures

---

## Quick Reference

### Color Usage

| Purpose | Color |
|---------|-------|
| Primary actions | `#10B981` |
| Secondary actions | `#8b5cf6` |
| Success states | `#22c55e` |
| Warnings | `#f59e0b` |
| Errors | `#ef4444` |
| Body text | `#fafafa` |
| Muted text | `#a3a3a3` |
| Borders | `rgba(255,255,255,0.1)` |

### Common Patterns

```jsx
// Standard section wrapper
<section style={{ padding: '6rem 0' }}>
  <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 1.5rem' }}>
    {/* content */}
  </div>
</section>

// Standard card
<div style={{
  background: 'rgba(0,0,0,0.4)',
  backdropFilter: 'blur(20px)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '16px',
  padding: '2rem',
}}>

// Standard CTA button
<motion.button
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  style={{
    background: '#10B981',
    color: '#000',
    padding: '0.875rem 1.75rem',
    borderRadius: '8px',
    fontWeight: 600,
  }}
>
```

---

*Last updated: December 2024*
*Version: 1.0.0*
