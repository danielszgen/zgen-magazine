'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

/**
 * ZgenLogo — interactive voxel-Z brand mark.
 * The logo image is sliced into an N×N grid of "voxels" that fly in and
 * assemble on mount, parallax in 3D with the pointer, can be dragged to
 * spin (with inertia), and re-assemble on click.
 *
 * Place inside a square-ish container. Honors prefers-reduced-motion.
 */

interface Tile {
  r: number
  c: number
  sx: number
  sy: number
  sz: number
  rot: number
  depth: number
  delay: number
}

function seeded(seed: number, mul: number): number {
  const x = Math.sin(seed * mul) * 43758.5453
  return x - Math.floor(x)
}

interface Props {
  src?: string
  grid?: number
  className?: string
}

export default function ZgenLogo({ src = '/zgen-z-logo.png', grid = 14, className = '' }: Props) {
  const N = grid
  const stageRef = useRef<HTMLDivElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
  const rootRef = useRef<HTMLDivElement>(null)
  const [assembled, setAssembled] = useState(false)

  const reduce = useMemo(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
    []
  )

  const tiles = useMemo<Tile[]>(() => {
    const a: Tile[] = []
    for (let r = 0; r < N; r++) {
      for (let c = 0; c < N; c++) {
        const s = r * N + c + 1
        a.push({
          r,
          c,
          sx: (seeded(s, 12.9) - 0.5) * 900,
          sy: (seeded(s, 78.2) - 0.5) * 900,
          sz: seeded(s, 3.7) * 600 - 180,
          rot: (seeded(s, 4.1) - 0.5) * 170,
          depth: (seeded(s, 5.9) - 0.5) * 42,
          delay: seeded(s, 6.3) * 0.42,
        })
      }
    }
    return a
  }, [N])

  useEffect(() => {
    const t = setTimeout(() => setAssembled(true), reduce ? 0 : 120)
    return () => clearTimeout(t)
  }, [reduce])

  const st = useRef({ tx: 0, ty: 0, cx: 0, cy: 0, spin: 0, v: 0, drag: false, lastX: 0, idle: 0, hover: false })

  useEffect(() => {
    if (reduce) return
    const root = rootRef.current
    if (!root) return

    const onMove = (e: MouseEvent) => {
      const s = st.current
      s.idle = 0
      const rect = root.getBoundingClientRect()
      const nx = (e.clientX - rect.left) / rect.width - 0.5
      const ny = (e.clientY - rect.top) / rect.height - 0.5
      s.tx = -ny * 16
      s.ty = nx * 22
      if (s.drag) {
        s.v += (e.clientX - s.lastX) * 0.05
        s.lastX = e.clientX
      }
    }
    const onDown = (e: MouseEvent) => {
      st.current.drag = true
      st.current.lastX = e.clientX
    }
    const onUp = () => {
      st.current.drag = false
    }

    root.addEventListener('mousemove', onMove)
    root.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    let id = 0
    const loop = (t: number) => {
      const s = st.current
      s.idle++
      let itx = s.tx
      let ity = s.ty
      if (s.idle > 150) {
        itx += Math.sin(t * 0.0006) * 4.5
        ity += Math.cos(t * 0.0005) * 6.5
      }
      s.cx += (itx - s.cx) * 0.07
      s.cy += (ity - s.cy) * 0.07
      s.spin += s.v
      s.v *= 0.93
      if (stageRef.current) {
        stageRef.current.style.transform = `rotateX(${s.cx.toFixed(2)}deg) rotateY(${(s.cy + s.spin).toFixed(2)}deg)`
      }
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(-50%,-50%) translate(${(s.cy * 1.3).toFixed(1)}px, ${(-s.cx * 1.3).toFixed(1)}px) scale(${s.hover ? 1.12 : 1})`
      }
      id = requestAnimationFrame(loop)
    }
    id = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(id)
      root.removeEventListener('mousemove', onMove)
      root.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [reduce])

  const reassemble = () => {
    if (reduce) return
    setAssembled(false)
    setTimeout(() => setAssembled(true), 650)
  }

  const cell = 100 / N

  return (
    <div
      ref={rootRef}
      onClick={reassemble}
      onMouseEnter={() => {
        st.current.hover = true
      }}
      onMouseLeave={() => {
        st.current.hover = false
      }}
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        aspectRatio: '1 / 1',
        perspective: '1300px',
        cursor: reduce ? 'default' : 'grab',
        userSelect: 'none',
      }}
    >
      {/* brand aura */}
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          width: '120%',
          height: '120%',
          transform: 'translate(-50%,-50%)',
          pointerEvents: 'none',
          background:
            'radial-gradient(ellipse 50% 50% at 50% 50%, rgba(59,240,160,0.16), rgba(96,165,250,0.10) 45%, transparent 70%)',
          animation: reduce ? 'none' : 'pulseGlow 4s ease-in-out infinite',
        }}
      />

      <div ref={stageRef} style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d', willChange: 'transform' }}>
        {/* blurred glow copy */}
        <div
          ref={glowRef}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            width: '76%',
            height: '76%',
            transform: 'translate(-50%,-50%)',
            backgroundImage: `url(${src})`,
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            filter: 'blur(36px) saturate(170%) brightness(1.12)',
            opacity: 0.5,
            pointerEvents: 'none',
          }}
        />
        {/* voxel grid */}
        <div style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}>
          {tiles.map((t, i) => (
            <div
              key={i}
              style={{
                position: 'absolute',
                left: `${t.c * cell}%`,
                top: `${t.r * cell}%`,
                width: `${cell}%`,
                height: `${cell}%`,
                backgroundImage: `url(${src})`,
                backgroundSize: `${N * 100}% ${N * 100}%`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: `${(t.c / (N - 1)) * 100}% ${(t.r / (N - 1)) * 100}%`,
                willChange: 'transform, opacity',
                backfaceVisibility: 'hidden',
                transition: reduce
                  ? 'none'
                  : `transform .85s cubic-bezier(.2,.9,.25,1) ${t.delay}s, opacity .6s ease ${t.delay}s`,
                transform: assembled
                  ? `translate3d(0,0,${t.depth}px) rotate(0deg) scale(1)`
                  : `translate3d(${t.sx}px,${t.sy}px,${t.sz}px) rotate(${t.rot}deg) scale(.35)`,
                opacity: assembled ? 1 : 0,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
