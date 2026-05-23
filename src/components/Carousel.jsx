import { useEffect, useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

const slides = [
  {
    tag: 'AI Pair Programming',
    title: 'Code at the speed of thought',
    body: 'Claude in VS Code becomes your always-on pair programmer — refactoring, explaining, and shipping with you in real time.',
    gradient: 'linear-gradient(135deg, #f59e0b 0%, #D97757 55%, #c44d3f 100%)'
  },
  {
    tag: 'Inline Edits',
    title: 'Edits exactly where you need them',
    body: 'Stop copy-pasting from a chat tab. Claude reads your project, edits the right files, and explains the diff inline.',
    gradient: 'linear-gradient(135deg, #fbbf24 0%, #f97316 50%, #b91c1c 100%)'
  },
  {
    tag: 'Agentic Workflows',
    title: 'Delegate the boring parts',
    body: 'Run tests, scaffold features, migrate APIs — Claude handles the multi-step work so you stay in flow.',
    gradient: 'linear-gradient(135deg, #ffd166 0%, #ef8354 50%, #9a3412 100%)'
  },
  {
    tag: 'Learn As You Build',
    title: 'A senior engineer, on tap',
    body: 'Ask why a pattern exists, request a code review, or get an architecture critique — without leaving your editor.',
    gradient: 'linear-gradient(135deg, #fcd34d 0%, #D97757 50%, #7c2d12 100%)'
  }
]

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)

  const next = useCallback(() => setIndex((i) => (i + 1) % slides.length), [])
  const prev = useCallback(() => setIndex((i) => (i - 1 + slides.length) % slides.length), [])

  useEffect(() => {
    if (paused) return
    const id = setInterval(next, 5500)
    return () => clearInterval(id)
  }, [next, paused])

  const slide = slides[index]

  return (
    <div
      className="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          className="carousel-slide"
          style={{ background: slide.gradient }}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="carousel-noise" />
          <div className="carousel-content">
            <motion.span
              className="carousel-tag"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {slide.tag}
            </motion.span>
            <motion.h3
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.55 }}
            >
              {slide.title}
            </motion.h3>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.22, duration: 0.55 }}
            >
              {slide.body}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>

      <button className="carousel-nav carousel-nav--prev" onClick={prev} aria-label="Previous slide">
        <FiChevronLeft size={22} />
      </button>
      <button className="carousel-nav carousel-nav--next" onClick={next} aria-label="Next slide">
        <FiChevronRight size={22} />
      </button>

      <div className="carousel-dots" role="tablist">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to slide ${i + 1}`}
            className={`carousel-dot ${i === index ? 'carousel-dot--active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
