'use client'

import { motion } from 'framer-motion'

const RUNG_COUNT = 13
const SVG_W = 260
const SVG_H = 560
const CX = SVG_W / 2
const AMP = 78        // helix amplitude
const TOP_PAD = 40
const BOT_PAD = 40

interface Rung {
  y: number
  x1: number
  x2: number
  phase: number
  depth1: number // 0=back, 1=front
  depth2: number
}

function buildRungs(): Rung[] {
  return Array.from({ length: RUNG_COUNT }, (_, i) => {
    const t = i / (RUNG_COUNT - 1)
    const y = TOP_PAD + t * (SVG_H - TOP_PAD - BOT_PAD)
    const phase = t * Math.PI * 3.5 // 1.75 full turns
    const x1 = CX + Math.sin(phase) * AMP
    const x2 = CX - Math.sin(phase) * AMP
    // depth: how "in front" is each node (0=back, 1=front)
    const depth1 = (Math.sin(phase) + 1) / 2
    const depth2 = 1 - depth1
    return { y, x1, x2, phase, depth1, depth2 }
  })
}

const rungs = buildRungs()

// Build smooth SVG path for a strand (array of {x,y} points)
function smoothPath(points: { x: number; y: number }[]): string {
  if (points.length < 2) return ''
  let d = `M ${points[0].x} ${points[0].y}`
  for (let i = 1; i < points.length; i++) {
    const prev = points[i - 1]
    const curr = points[i]
    const cpY = (prev.y + curr.y) / 2
    d += ` C ${prev.x} ${cpY}, ${curr.x} ${cpY}, ${curr.x} ${curr.y}`
  }
  return d
}

const strand1Path = smoothPath(rungs.map((r) => ({ x: r.x1, y: r.y })))
const strand2Path = smoothPath(rungs.map((r) => ({ x: r.x2, y: r.y })))

export default function DNAViz() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: 'easeOut' }}
      className="relative flex items-center justify-center select-none"
      style={{ width: SVG_W, height: SVG_H }}
    >
      {/* Ambient glow behind */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(109,40,217,0.18) 0%, transparent 70%)',
          animation: 'pulseGlow 4s ease-in-out infinite',
        }}
      />

      {/* The SVG helix */}
      <motion.svg
        viewBox={`0 0 ${SVG_W} ${SVG_H}`}
        width={SVG_W}
        height={SVG_H}
        style={{ animation: 'float 7s ease-in-out infinite' }}
        overflow="visible"
      >
        <defs>
          {/* Main brand gradient */}
          <linearGradient id="dna-gradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#A78BFA" />
            <stop offset="40%" stopColor="#60A5FA" />
            <stop offset="100%" stopColor="#22D3EE" />
          </linearGradient>

          {/* Bright glow gradient for front nodes */}
          <radialGradient id="node-gradient" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#E0D0FF" />
            <stop offset="50%" stopColor="#A78BFA" />
            <stop offset="100%" stopColor="#3B82F6" />
          </radialGradient>

          {/* Dimmer gradient for back nodes */}
          <radialGradient id="node-back-gradient" cx="35%" cy="30%" r="65%">
            <stop offset="0%" stopColor="#7C3AED" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </radialGradient>

          {/* Glow filter — soft */}
          <filter id="glow-soft" x="-60%" y="-60%" width="220%" height="220%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Glow filter — strong (front nodes) */}
          <filter id="glow-strong" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="9" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Clip to keep things tidy */}
          <clipPath id="dna-clip">
            <rect x="0" y="0" width={SVG_W} height={SVG_H} />
          </clipPath>
        </defs>

        <g clipPath="url(#dna-clip)">
          {/* ── Strand backbones ── */}
          <path
            d={strand1Path}
            fill="none"
            stroke="url(#dna-gradient)"
            strokeWidth="1.5"
            opacity="0.25"
            strokeLinecap="round"
          />
          <path
            d={strand2Path}
            fill="none"
            stroke="url(#dna-gradient)"
            strokeWidth="1.5"
            opacity="0.25"
            strokeLinecap="round"
          />

          {/* ── Rungs: connecting bars + nodes ── */}
          {rungs.map((r, i) => {
            const frontIsX1 = r.x1 > CX
            const frontR = frontIsX1 ? r : { ...r, x1: r.x2, x2: r.x1, depth1: r.depth2, depth2: r.depth1 }

            const rBack = 7 + frontR.depth2 * 5   // back node radius
            const rFront = 9 + frontR.depth1 * 7  // front node radius (bigger = inflated)

            return (
              <g key={i}>
                {/* Base pair bar */}
                <line
                  x1={r.x1} y1={r.y}
                  x2={r.x2} y2={r.y}
                  stroke="url(#dna-gradient)"
                  strokeWidth={1 + frontR.depth1 * 1.5}
                  opacity={0.15 + frontR.depth1 * 0.3}
                  strokeLinecap="round"
                />

                {/* Back node (dimmer, smaller, no strong glow) */}
                <circle
                  cx={frontIsX1 ? r.x2 : r.x1}
                  cy={r.y}
                  r={rBack}
                  fill="url(#node-back-gradient)"
                  opacity={0.35 + frontR.depth2 * 0.25}
                  filter="url(#glow-soft)"
                />

                {/* Front node — inflated, bright, glowing */}
                <circle
                  cx={frontIsX1 ? r.x1 : r.x2}
                  cy={r.y}
                  r={rFront}
                  fill="url(#node-gradient)"
                  opacity={0.7 + frontR.depth1 * 0.3}
                  filter="url(#glow-strong)"
                />

                {/* Specular highlight (Y2K / Lego inflated effect) */}
                <ellipse
                  cx={(frontIsX1 ? r.x1 : r.x2) - rFront * 0.25}
                  cy={r.y - rFront * 0.28}
                  rx={rFront * 0.35}
                  ry={rFront * 0.2}
                  fill="white"
                  opacity={0.35 * frontR.depth1}
                />
              </g>
            )
          })}
        </g>
      </motion.svg>

      {/* Subtle orbital rings */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          border: '1px solid rgba(124,58,237,0.08)',
          borderRadius: '50%',
          width: '85%',
          height: '85%',
          top: '7.5%',
          left: '7.5%',
          animation: 'rotateOrbit 30s linear infinite',
        }}
      />
    </motion.div>
  )
}
