'use client'

import { useEffect, useRef, useState, useCallback } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

// ─── Config ──────────────────────────────────────────────────────────────────
const KATAKANA = 'ｦｧｨｪｫｬｭｮｯｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ'
const LATIN   = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>{}[]|/\\'
const CHARS   = KATAKANA + LATIN

const FONT_SIZE = 15       // px per cell
const TRAIL_ALPHA = 0.055  // how quickly old characters fade
const REVEAL_TIMINGS = [1600, 2150, 2700]   // ms: when each word appears
const WORDS = ['DANIELS', 'ZGEN', 'MAGAZINE']
const TOTAL_MS = 3900      // ms until fade begins
const FADE_MS  = 700       // fade duration

// Brand palette for the rain
const COLORS = {
  head:   'rgba(200, 255, 232, 0.98)', // brightest — lead char
  mid1:   'rgba(59, 240, 160, 0.88)',  // phosphor green (signature)
  mid2:   'rgba(20, 168, 113, 0.62)',  // green deep
  tail1:  'rgba(96, 165, 250, 0.40)',  // blue
  tail2:  'rgba(34, 211, 238, 0.25)',  // cyan — far trail
  word:   '#FFFFFF',
  wordGlow:'rgba(111, 255, 194, 0.9)',
}

// ─── Component ───────────────────────────────────────────────────────────────

interface Props { onDone: () => void }

export default function MatrixLoader({ onDone }: Props) {
  const canvasRef  = useRef<HTMLCanvasElement>(null)
  const [phase, setPhase] = useState<'rain' | 'fading' | 'done'>('rain')
  const [revealedWords, setRevealedWords] = useState<number[]>([])

  const startAnimation = useCallback(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let W = window.innerWidth
    let H = window.innerHeight
    canvas.width  = W
    canvas.height = H

    const cols  = Math.floor(W / FONT_SIZE)
    const drops = Array.from({ length: cols }, () => -(Math.random() * 40))
    const speeds = Array.from({ length: cols }, () => 0.4 + Math.random() * 1.2)

    let frameId: number
    const startTime = performance.now()

    const draw = (now: number) => {
      const elapsed = now - startTime

      // Dark trail (intentionally slow-clearing for glow buildup)
      ctx.fillStyle = `rgba(8, 8, 18, ${TRAIL_ALPHA})`
      ctx.fillRect(0, 0, W, H)

      ctx.font = `${FONT_SIZE}px 'JetBrains Mono', 'Courier New', monospace`

      for (let i = 0; i < cols; i++) {
        const char = CHARS[Math.floor(Math.random() * CHARS.length)]
        const y = drops[i] * FONT_SIZE

        // Color by position in column (head = brightest)
        const depthRatio = (drops[i] % 30) / 30
        if (depthRatio > 0.95)      ctx.fillStyle = COLORS.head
        else if (depthRatio > 0.80) ctx.fillStyle = COLORS.mid1
        else if (depthRatio > 0.60) ctx.fillStyle = COLORS.mid2
        else if (depthRatio > 0.35) ctx.fillStyle = COLORS.tail1
        else                         ctx.fillStyle = COLORS.tail2

        ctx.fillText(char, i * FONT_SIZE, y)

        if (y > H && Math.random() > 0.978) drops[i] = 0
        drops[i] += speeds[i] * 0.45
      }

      frameId = requestAnimationFrame(draw)
    }

    frameId = requestAnimationFrame(draw)

    // Reveal words at staggered times
    REVEAL_TIMINGS.forEach((t, i) => {
      setTimeout(() => {
        setRevealedWords(prev => [...prev, i])
      }, t)
    })

    // Start fade-out
    setTimeout(() => {
      setPhase('fading')
      setTimeout(() => {
        cancelAnimationFrame(frameId)
        setPhase('done')
        onDone()
      }, FADE_MS + 100)
    }, TOTAL_MS)

    const handleResize = () => {
      W = window.innerWidth
      H = window.innerHeight
      canvas.width  = W
      canvas.height = H
    }
    window.addEventListener('resize', handleResize)
    return () => {
      cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
    }
  }, [onDone])

  useEffect(() => {
    const cleanup = startAnimation()
    return () => { cleanup?.() }
  }, [startAnimation])

  if (phase === 'done') return null

  return (
    <AnimatePresence>
      <motion.div
        key="matrix"
        initial={{ opacity: 1 }}
        animate={{ opacity: phase === 'fading' ? 0 : 1 }}
        transition={{ duration: FADE_MS / 1000, ease: 'easeInOut' }}
        className="fixed inset-0 z-[200] overflow-hidden"
        style={{ background: '#080812' }}
      >
        {/* Canvas rain */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />

        {/* Words overlay — centered on screen */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none gap-3">
          {WORDS.map((word, i) => (
            <AnimatePresence key={word}>
              {revealedWords.includes(i) && (
                <motion.div
                  initial={{ opacity: 0, letterSpacing: '0.6em', filter: 'blur(8px)' }}
                  animate={{ opacity: 1, letterSpacing: '0.25em', filter: 'blur(0px)' }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    fontFamily: "'JetBrains Mono', 'Courier New', monospace",
                    fontSize: i === 0 ? '2.8rem' : i === 1 ? '1.8rem' : '3.5rem',
                    fontWeight: 700,
                    color: '#fff',
                    textShadow: `
                      0 0 8px ${COLORS.wordGlow},
                      0 0 20px ${COLORS.wordGlow},
                      0 0 45px rgba(59, 240, 160, 0.55),
                      0 0 80px rgba(59, 240, 160, 0.3)
                    `,
                    lineHeight: 1,
                  }}
                >
                  {/* Character-by-character glitch reveal */}
                  {word.split('').map((char, ci) => (
                    <motion.span
                      key={ci}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: ci * 0.06, duration: 0.3 }}
                    >
                      {char}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
          ))}
        </div>

        {/* Subtle scanline overlay for CRT feel */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.04) 2px, rgba(0,0,0,0.04) 4px)',
          }}
        />

        {/* Corner watermark */}
        <div
          className="absolute bottom-6 right-6"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: '10px',
            letterSpacing: '0.15em',
            color: 'rgba(111, 255, 194, 0.45)',
            textTransform: 'uppercase',
          }}
        >
          zgen.cloud · initializing
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
