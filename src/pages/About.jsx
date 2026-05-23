import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FiCompass, FiUsers, FiBookOpen, FiHeart, FiArrowRight } from 'react-icons/fi'
import PageTransition from '../components/PageTransition.jsx'

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.55, ease: 'easeOut' }
  })
}

const values = [
  {
    icon: FiCompass,
    title: 'Cut through the hype',
    body: 'Most AI-coding content is marketing. We focus on what actually works in a real day of shipping code.'
  },
  {
    icon: FiUsers,
    title: 'Built by developers',
    body: 'Every guide on this site is written by someone who uses Claude inside VS Code every single working day.'
  },
  {
    icon: FiBookOpen,
    title: 'Always evolving',
    body: 'New Claude releases, new VS Code features — we update guides constantly so nothing here goes stale.'
  },
  {
    icon: FiHeart,
    title: 'Free, forever',
    body: 'No paywalls. No upsells. Just clear, honest content for people who love their craft.'
  }
]

export default function About() {
  return (
    <PageTransition>
      <section className="section section--page-head">
        <div className="container narrow">
          <motion.span
            className="section-eyebrow"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            About
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="page-title"
          >
            Why ClaudeAndVSCode.com exists
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="page-lede"
          >
            This site was born out of a simple frustration: getting started with Claude inside
            Visual Studio Code is genuinely transformative — but the setup, the workflows, and the
            "what should I actually do with this?" gap can feel surprisingly large.
          </motion.p>
        </div>
      </section>

      <section className="section section--no-pad-top">
        <div className="container narrow about-prose">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2>The story</h2>
            <p>
              I started using Claude inside VS Code in early 2025. Within a week, my output had
              roughly doubled — not because the AI was writing all my code, but because I had a
              tireless, opinionated reviewer sitting next to me. Refactors that used to take an
              afternoon were taking twenty minutes. Tests I had been putting off appeared. Boilerplate
              dissolved.
            </p>
            <p>
              The problem was that almost every friend I recommended Claude to bounced off the setup,
              picked the wrong model, or never built the habits that make it useful. They'd come back
              and say, <em>"I tried it for a day and it wasn't that different from the others."</em>
            </p>
            <p>
              <strong>ClaudeAndVSCode.com</strong> is my answer to that. It is the missing onboarding
              guide — the resource I wish existed when I first wired Claude into my editor. Real
              workflows. Real configuration. No hot takes, no benchmarks-as-marketing, no five-minute
              demos that fall apart the moment you try to build something real.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
          >
            <h2>What you'll find here</h2>
            <p>
              Step-by-step setup guides, opinionated workflow recipes, model-selection guidance,
              prompt patterns that actually move the needle, and a steadily growing library of
              real-world case studies. If it helps you ship better software with Claude inside VS Code,
              it belongs on this site.
            </p>
          </motion.div>
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
            <span className="section-eyebrow">Principles</span>
            <h2>What this site believes</h2>
          </motion.div>
          <div className="feature-grid">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                className="feature-card"
                variants={fadeUp}
                custom={i}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: '-80px' }}
              >
                <div className="feature-icon"><v.icon /></div>
                <h3>{v.title}</h3>
                <p>{v.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--cta">
        <div className="container cta-card">
          <div className="cta-inner">
            <h2>Got a workflow we should write up?</h2>
            <p>Drop us a line — the best content on this site comes straight from readers like you.</p>
            <Link to="/contact" className="btn btn--primary btn--lg">
              Get in touch <FiArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  )
}
