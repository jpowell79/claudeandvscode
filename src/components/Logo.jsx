import { motion } from 'framer-motion'

export default function Logo({ size = 36 }) {
  return (
    <motion.div
      className="logo"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="ClaudeAndVSCode logo"
      >
        <defs>
          <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#D97757" />
            <stop offset="55%" stopColor="#9b6cc9" />
            <stop offset="100%" stopColor="#007ACC" />
          </linearGradient>
          <filter id="logoGlow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="1.2" />
          </filter>
        </defs>
        <motion.rect
          width="64"
          height="64"
          rx="14"
          fill="url(#logoGrad)"
          animate={{ rotate: [0, 0.4, -0.4, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          style={{ transformOrigin: 'center' }}
        />
        <path
          d="M20 22 L12 32 L20 42"
          stroke="#fff"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44 22 L52 32 L44 42"
          stroke="#fff"
          strokeWidth="3.5"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="32" cy="32" r="5" fill="#fff" filter="url(#logoGlow)" />
        <circle cx="32" cy="32" r="3.2" fill="#fff" />
      </svg>
      <div className="logo-wordmark">
        <span className="logo-word-claude">Claude</span>
        <span className="logo-word-amp">&amp;</span>
        <span className="logo-word-vscode">VS Code</span>
      </div>
    </motion.div>
  )
}
