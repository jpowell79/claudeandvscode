import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiDownload, FiKey, FiTerminal, FiPlay, FiZap, FiShield, FiCpu, FiCode, FiArrowRight } from 'react-icons/fi'
import PageTransition from '../components/PageTransition.jsx'
import Carousel from '../components/Carousel.jsx'
import TypedHeading from '../components/TypedHeading.jsx'

const setupSteps = [
  {
    icon: FiDownload,
    title: 'Install VS Code',
    body: 'Grab the latest stable build of Visual Studio Code for your platform. It is free and ships with first-class extension support.',
    code: '# macOS\nbrew install --cask visual-studio-code\n\n# Windows\nwinget install Microsoft.VisualStudioCode'
  },
  {
    icon: FiKey,
    title: 'Get a Claude API key',
    body: 'Sign in at console.anthropic.com and create an API key. Keep it private — never commit keys to source control.',
    code: '# Store it in a local .env file\nANTHROPIC_API_KEY=sk-ant-...'
  },
  {
    icon: FiTerminal,
    title: 'Install Claude Code',
    body: 'Claude Code is the official CLI that plugs Claude into your editor and terminal. Install it globally with npm.',
    code: 'npm install -g @anthropic-ai/claude-code\nclaude --version'
  },
  {
    icon: FiPlay,
    title: 'Launch inside VS Code',
    body: 'Open the integrated terminal in VS Code, run claude, and start pairing. Claude reads your project context automatically.',
    code: '# In VS Code: Ctrl+` to open terminal\nclaude'
  }
]

const features = [
  {
    icon: FiZap,
    title: 'Lightning workflows',
    body: 'Refactor sprawling files, generate boilerplate, and write tests in seconds — without leaving the editor.'
  },
  {
    icon: FiShield,
    title: 'Safety-first defaults',
    body: 'Claude asks before risky actions and gives you an audit trail of every change it makes.'
  },
  {
    icon: FiCpu,
    title: 'Project-aware context',
    body: 'It reads your CLAUDE.md, your repo structure, and your style — so suggestions match your codebase.'
  },
  {
    icon: FiCode,
    title: 'Multi-language fluency',
    body: 'TypeScript, Python, Go, Rust, SQL, shell — Claude is comfortable across the modern stack.'
  }
]

const stack = [
  { name: 'Claude Sonnet', desc: 'Default everyday driver.' },
  { name: 'Claude Opus', desc: 'For deep reasoning tasks.' },
  { name: 'Claude Haiku', desc: 'When you need speed.' }
]

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: 'easeOut' }
  })
}

export default function Home() {
  return (
    <PageTransition>
      <section className="hero">
        <div className="hero-bg" aria-hidden="true">
          <div className="hero-orb hero-orb--1" />
          <div className="hero-orb hero-orb--2" />
          <div className="hero-orb hero-orb--3" />
        </div>
        <div className="container hero-inner">
          <motion.span
            className="hero-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Claude + VS Code · The developer's super-duo
          </motion.span>
          <h1 className="hero-title">
            Build software faster with{' '}
            <TypedHeading
              phrases={[
                'Claude.',
                'an AI pair programmer.',
                'a senior engineer on tap.',
                'a teammate that never sleeps.'
              ]}
            />
          </h1>
          <motion.p
            className="hero-sub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Everything you need to set up Claude inside Visual Studio Code — guides, tips, and
            opinionated workflows that turn your editor into a real AI development environment.
          </motion.p>
          <motion.div
            className="hero-ctas"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
          >
            <a href="#setup" className="btn btn--primary btn--lg">
              Setup guide <FiArrowRight />
            </a>
            <Link to="/contact" className="btn btn--ghost btn--lg">
              Get in touch
            </Link>
          </motion.div>
          <motion.div
            className="hero-meta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <span><strong>10k+</strong> developers onboarded</span>
            <span><strong>4 min</strong> average setup</span>
            <span><strong>Free</strong> &amp; open guides</span>
          </motion.div>
        </div>
      </section>

      <section className="section section--no-pad-top">
        <div className="container">
          <Carousel />
        </div>
      </section>

      <section className="section" id="setup">
        <div className="container">
          <motion.div
            className="section-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <span className="section-eyebrow">Setup in 4 steps</span>
            <h2>Get Claude running inside VS Code</h2>
            <p>A pragmatic, copy-paste-friendly walkthrough. Most developers are pairing with Claude inside their editor in under five minutes.</p>
          </motion.div>

          <div className="steps-grid">
            {setupSteps.map((step, i) => (
              <motion.div
                key={step.title}
                className="step-card"
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
              >
                <div className="step-card-head">
                  <div className="step-number">{String(i + 1).padStart(2, '0')}</div>
                  <div className="step-icon"><step.icon /></div>
                </div>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
                <pre className="code-block"><code>{step.code}</code></pre>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <motion.div
            className="section-head"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-100px' }}
          >
            <span className="section-eyebrow">Why pair them</span>
            <h2>VS Code gives you the canvas. Claude gives you the co-pilot.</h2>
            <p>The combo turns an already-loved editor into a serious AI development environment without giving up the tools you know.</p>
          </motion.div>

          <div className="feature-grid">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                className="feature-card"
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
              >
                <div className="feature-icon"><f.icon /></div>
                <h3>{f.title}</h3>
                <p>{f.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="split">
            <motion.div
              className="split-text"
              variants={fadeUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-100px' }}
            >
              <span className="section-eyebrow">Pick your model</span>
              <h2>One editor. Three Claude models, each tuned for a different job.</h2>
              <p>
                Switch models on demand. Use Sonnet for the daily grind, Opus when a task needs deep
                reasoning, and Haiku when you want answers at the speed of thought.
              </p>
              <Link to="/about" className="btn btn--ghost">
                Why we built this site <FiArrowRight />
              </Link>
            </motion.div>

            <div className="stack-list">
              {stack.map((s, i) => (
                <motion.div
                  key={s.name}
                  className="stack-row"
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                >
                  <div>
                    <div className="stack-name">{s.name}</div>
                    <div className="stack-desc">{s.desc}</div>
                  </div>
                  <FiArrowRight className="stack-arrow" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container cta-card">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-120px' }}
            transition={{ duration: 0.6 }}
            className="cta-inner"
          >
            <h2>Ready to pair-program with Claude?</h2>
            <p>Spin up VS Code, drop in your API key, and let's build something today.</p>
            <div className="hero-ctas">
              <a href="#setup" className="btn btn--primary btn--lg">Start setup</a>
              <Link to="/contact" className="btn btn--ghost btn--lg">Say hello</Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
