import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FaGithub, FaXTwitter, FaYoutube, FaLinkedinIn, FaDiscord } from 'react-icons/fa6'
import Logo from './Logo.jsx'

const socials = [
  { href: 'https://github.com/', label: 'GitHub', Icon: FaGithub },
  { href: 'https://x.com/', label: 'X / Twitter', Icon: FaXTwitter },
  { href: 'https://youtube.com/', label: 'YouTube', Icon: FaYoutube },
  { href: 'https://linkedin.com/', label: 'LinkedIn', Icon: FaLinkedinIn },
  { href: 'https://discord.com/', label: 'Discord', Icon: FaDiscord }
]

export default function Footer() {
  return (
    <motion.footer
      className="footer"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
    >
      <div className="container footer-grid">
        <div className="footer-brand">
          <Logo />
          <p className="footer-tagline">
            Helping developers pair Claude with VS Code to ship faster, write cleaner code, and learn as they go.
          </p>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <div className="footer-col">
          <h4>Resources</h4>
          <a href="https://code.visualstudio.com" target="_blank" rel="noreferrer">VS Code</a>
          <a href="https://claude.com/claude-code" target="_blank" rel="noreferrer">Claude Code</a>
          <a href="https://docs.anthropic.com" target="_blank" rel="noreferrer">Anthropic Docs</a>
        </div>

        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:hello@claudeandvscode.com">hello@claudeandvscode.com</a>
          <div className="footer-socials" aria-label="Social links">
            {socials.map(({ href, label, Icon }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target="_blank"
                rel="noreferrer"
                className="social-link"
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} ClaudeAndVSCode.com</span>
        <span className="footer-bottom-meta">Built with React, Vite &amp; a lot of Claude.</span>
      </div>
    </motion.footer>
  )
}
