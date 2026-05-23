import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiCheckCircle, FiSend, FiCopy } from 'react-icons/fi'
import { FaGithub, FaXTwitter, FaLinkedinIn } from 'react-icons/fa6'
import PageTransition from '../components/PageTransition.jsx'

const CONTACT_EMAIL = 'hello@claudeandvscode.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState('idle')
  const [copied, setCopied] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    setStatus('sending')
    const body = encodeURIComponent(
      `From: ${form.name} <${form.email}>\n\n${form.message}`
    )
    const subject = encodeURIComponent(form.subject || 'Hello from ClaudeAndVSCode.com')
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
    setTimeout(() => setStatus('sent'), 600)
  }

  const onChange = (e) => setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(CONTACT_EMAIL)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

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
            Contact
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="page-title"
          >
            Let's talk Claude &amp; VS Code
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="page-lede"
          >
            Got a workflow you love? A question stuck in your head? Spotted something wrong on the
            site? We genuinely want to hear from you.
          </motion.p>
        </div>
      </section>

      <section className="section section--no-pad-top">
        <div className="container contact-grid">
          <motion.div
            className="contact-card"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h2>Drop us a line</h2>
            <p>Or email directly — we read every message.</p>

            <div className="contact-email-row">
              <FiMail />
              <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
              <button
                type="button"
                className="copy-btn"
                onClick={copyEmail}
                aria-label="Copy email address"
              >
                {copied ? <FiCheckCircle /> : <FiCopy />}
                <span>{copied ? 'Copied' : 'Copy'}</span>
              </button>
            </div>

            <div className="contact-socials">
              <a href="https://github.com/" aria-label="GitHub" target="_blank" rel="noreferrer"><FaGithub /></a>
              <a href="https://x.com/" aria-label="X" target="_blank" rel="noreferrer"><FaXTwitter /></a>
              <a href="https://linkedin.com/" aria-label="LinkedIn" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </div>

            <div className="contact-promise">
              <strong>Typical reply time:</strong> within 1–2 working days.
            </div>
          </motion.div>

          <motion.form
            className="contact-form"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onSubmit={onSubmit}
          >
            {status === 'sent' ? (
              <motion.div
                className="form-success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <FiCheckCircle size={42} />
                <h3>Email client opened</h3>
                <p>Send the message from your mail app — we'll get back to you shortly.</p>
                <button
                  type="button"
                  className="btn btn--ghost"
                  onClick={() => {
                    setStatus('idle')
                    setForm({ name: '', email: '', subject: '', message: '' })
                  }}
                >
                  Send another
                </button>
              </motion.div>
            ) : (
              <>
                <div className="form-row">
                  <label>
                    <span>Your name</span>
                    <input
                      name="name"
                      value={form.name}
                      onChange={onChange}
                      type="text"
                      required
                      placeholder="Ada Lovelace"
                    />
                  </label>
                  <label>
                    <span>Email</span>
                    <input
                      name="email"
                      value={form.email}
                      onChange={onChange}
                      type="email"
                      required
                      placeholder="you@example.com"
                    />
                  </label>
                </div>
                <label>
                  <span>Subject</span>
                  <input
                    name="subject"
                    value={form.subject}
                    onChange={onChange}
                    type="text"
                    placeholder="What's this about?"
                  />
                </label>
                <label>
                  <span>Message</span>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    rows={6}
                    required
                    placeholder="Tell us a little..."
                  />
                </label>
                <button type="submit" className="btn btn--primary btn--lg" disabled={status === 'sending'}>
                  {status === 'sending' ? 'Opening your mail app…' : <>Send message <FiSend /></>}
                </button>
                <p className="form-note">
                  This form opens your default mail client pre-filled and addressed to{' '}
                  <code>{CONTACT_EMAIL}</code>.
                </p>
              </>
            )}
          </motion.form>
        </div>
      </section>
    </PageTransition>
  )
}
