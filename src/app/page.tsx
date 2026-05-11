'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { ArrowRight, Zap, Brain, Globe, User, Code2, ChevronRight, Eye, Camera, Layers, Users, Flame, Star } from 'lucide-react'
import Header from '@/components/Header'
import DNAViz from '@/components/DNAViz'
import MatrixLoader from '@/components/MatrixLoader'

// ─── Helpers ─────────────────────────────────────────────────────────────────

const easeOut = [0.22, 1, 0.36, 1]

function RevealSection({ children, className = '', delay = 0 }: {
  children: React.ReactNode; className?: string; delay?: number
}) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-70px' })
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 28 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.75, ease: easeOut, delay }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const ART_PANELS = [
  {
    label: 'Identidad visual',
    title: 'El ser humano como imagen',
    desc: 'Cada fotografía es una hipótesis. Una forma de preguntar quién eres cuando nadie te define.',
    gradient: 'linear-gradient(135deg, #1a0533 0%, #2d1b69 50%, #1e3a5f 100%)',
    accent: '#A78BFA',
    icon: Eye,
    stat: '340+ obras',
  },
  {
    label: 'Cultura visual',
    title: 'Lo que ves te construye',
    desc: 'Las imágenes que consumes modelan tu conducta. La estética que eliges dice más que tus palabras.',
    gradient: 'linear-gradient(135deg, #0c1a2e 0%, #1a3a4f 50%, #0d2d3a 100%)',
    accent: '#22D3EE',
    icon: Camera,
    stat: '12 ediciones',
  },
  {
    label: 'Arte generativo',
    title: 'El código como pincel',
    desc: 'La evolución personal también es código. Sistemas que producen belleza porque están bien diseñados.',
    gradient: 'linear-gradient(135deg, #0f0f2e 0%, #1a1a5e 50%, #2a1060 100%)',
    accent: '#818CF8',
    icon: Layers,
    stat: '80+ piezas',
  },
]

const SISTEMA_CARDS = [
  {
    icon: Brain,
    label: 'Conducta humana',
    desc: 'Patrones, sesgos y arquitectura del comportamiento. Entender cómo funcionamos para reprogramarnos.',
    glow: 'rgba(124,58,237,0.18)',
    border: 'rgba(124,58,237,0.3)',
  },
  {
    icon: Code2,
    label: 'Mejora diaria',
    desc: 'Sistemas, hábitos y decisiones de bajo nivel que componen resultados de alto impacto.',
    glow: 'rgba(59,130,246,0.18)',
    border: 'rgba(59,130,246,0.3)',
  },
  {
    icon: Globe,
    label: 'Cultura digital',
    desc: 'Tendencias e ideas filtradas, contextualizadas y procesadas con criterio real.',
    glow: 'rgba(6,182,212,0.18)',
    border: 'rgba(6,182,212,0.3)',
  },
  {
    icon: User,
    label: 'Identidad',
    desc: 'La diferencia entre personaje y persona. Entre imagen construida y carácter real.',
    glow: 'rgba(109,40,217,0.18)',
    border: 'rgba(109,40,217,0.3)',
  },
]

const TRIBU_TRAITS = [
  { icon: Flame, text: 'Quieres crecer pero rechazas el ruido del self-help genérico' },
  { icon: Eye,   text: 'El arte y la estética te importan tanto como la estrategia' },
  { icon: Brain, text: 'Crees que la mente es un sistema que se puede mejorar' },
  { icon: Star,  text: 'Prefieres una idea potente a diez contenidos vacíos' },
  { icon: Code2, text: 'Lo digital no te da miedo, te da ventaja' },
  { icon: Users, text: 'Buscas una comunidad que te obligue a pensar mejor' },
]

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  const [matrixDone, setMatrixDone] = useState(false)

  return (
    <>
      {/* ── MATRIX LOADER ──────────────────────────────────────────────── */}
      <MatrixLoader onDone={() => setMatrixDone(true)} />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: matrixDone ? 1 : 0 }}
        transition={{ duration: 0.6 }}
        className="relative min-h-screen bg-bg overflow-hidden"
      >
        <Header />

        {/* ── 1. HERO ──────────────────────────────────────────────────── */}
        <section className="relative pt-16 min-h-screen flex items-center">
          <div className="absolute inset-0 dot-grid opacity-30" />
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 70% 60% at 62% 50%, rgba(109,40,217,0.13) 0%, transparent 70%)',
          }} />

          <div className="relative section-wrap w-full py-20 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={matrixDone ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="inline-flex items-center gap-2 mb-8"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-light animate-pulse" />
                <span className="font-mono text-xs tracking-[0.2em] text-purple-light uppercase">
                  www.zgen.cloud
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={matrixDone ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2, ease: easeOut }}
                className="font-display font-bold text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.04] tracking-tight mb-6"
              >
                La revista para una generación que quiere{' '}
                <span className="text-gradient">reprogramarse.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={matrixDone ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.35 }}
                className="text-text-muted text-lg leading-relaxed mb-4 max-w-xl"
              >
                Daniels zgen magazine es una revista viva sobre conducta humana,
                mejora diaria y cultura digital. Una señal diaria para convertir
                ideas potentes en claridad, criterio y acción real.
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={matrixDone ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45 }}
                className="font-mono text-xs text-text-faint tracking-widest uppercase mb-10"
              >
                El ADN visual nace de una idea:{' '}
                <span className="text-gradient-subtle">la evolución personal también es código.</span>
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={matrixDone ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.55 }}
                className="flex flex-wrap gap-4"
              >
                <a href="#tribu" className="btn-brand">
                  <Zap size={14} />
                  Unirme al manifiesto
                </a>
                <a href="#sistema" className="btn-ghost">
                  Ver el sistema
                  <ChevronRight size={14} />
                </a>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={matrixDone ? { opacity: 1 } : {}}
                transition={{ duration: 0.6, delay: 0.75 }}
                className="mt-12 flex items-center gap-4"
              >
                <div className="flex -space-x-2">
                  {[...Array(4)].map((_, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border border-bg-3" style={{
                      background: `linear-gradient(135deg, hsl(${250 + i * 20}, 70%, 60%), hsl(${200 + i * 20}, 80%, 55%))`,
                    }} />
                  ))}
                </div>
                <p className="text-text-muted text-xs">
                  <span className="text-text-primary font-medium">+2.400 personas</span>{' '}ya en la señal
                </p>
              </motion.div>
            </div>

            {/* DNA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={matrixDone ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1.1, delay: 0.3, ease: easeOut }}
              className="flex justify-center lg:justify-end items-center relative"
            >
              <div className="absolute w-72 h-72 rounded-full pointer-events-none" style={{
                background: 'radial-gradient(ellipse, rgba(124,58,237,0.2) 0%, transparent 70%)',
                animation: 'pulseGlow 4s ease-in-out infinite',
                top: '50%', left: '50%', transform: 'translate(-50%, -50%)',
              }} />
              <DNAViz />
            </motion.div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-25">
            <div className="w-px h-10 bg-gradient-to-b from-transparent via-purple-light to-transparent" />
            <span className="font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase">scroll</span>
          </div>
        </section>

        {/* ── 2. ARTE VISUAL ─────────────────────────────────────────────── */}
        <section id="arte" className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 100% 50% at 50% 100%, rgba(13,13,26,0.8) 0%, transparent 60%)',
          }} />

          <div className="relative section-wrap">
            <RevealSection className="mb-16">
              <div className="max-w-2xl">
                <span className="font-mono text-xs tracking-[0.2em] text-cyan-light uppercase mb-4 block">
                  — Arte &amp; imagen
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-5">
                  El arte que te{' '}
                  <span className="text-gradient">detiene.</span>
                </h2>
                <p className="text-text-muted text-lg leading-relaxed">
                  No hacemos contenido para el scroll. Hacemos imágenes para el silencio.
                  Piezas que interrumpen, que preguntan, que dejan huella.
                </p>
              </div>
            </RevealSection>

            {/* Art panels grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-16">
              {ART_PANELS.map((panel, i) => {
                const Icon = panel.icon
                return (
                  <motion.div
                    key={panel.label}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.7, delay: i * 0.12, ease: easeOut }}
                    className="group relative overflow-hidden rounded-none cursor-pointer"
                    style={{ aspectRatio: i === 1 ? '3/4' : '2/3', minHeight: 320 }}
                  >
                    {/* Background */}
                    <div className="absolute inset-0" style={{ background: panel.gradient }} />

                    {/* Glow overlay on hover */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{ background: `radial-gradient(ellipse at 40% 40%, ${panel.accent}22 0%, transparent 70%)` }}
                    />

                    {/* Abstract visual element */}
                    <div className="absolute inset-0 overflow-hidden">
                      {/* Geometric lines */}
                      <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full opacity-10 border"
                        style={{ borderColor: panel.accent }} />
                      <div className="absolute top-1/3 left-1/3 w-20 h-20 rounded-full opacity-10 border"
                        style={{ borderColor: panel.accent }} />
                      <div className="absolute bottom-1/4 right-1/4 w-24 h-px opacity-20"
                        style={{ background: panel.accent }} />
                      <div className="absolute top-1/2 right-1/3 w-px h-24 opacity-20"
                        style={{ background: panel.accent }} />
                      {/* Corner decorative */}
                      <div className="absolute top-0 right-0 w-20 h-20 opacity-5"
                        style={{ background: `linear-gradient(225deg, ${panel.accent}, transparent)` }} />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-0 flex flex-col justify-between p-6">
                      <div className="flex items-start justify-between">
                        <span className="font-mono text-[10px] tracking-[0.18em] uppercase"
                          style={{ color: panel.accent }}>
                          {panel.label}
                        </span>
                        <div className="w-8 h-8 flex items-center justify-center rounded-full border opacity-40 group-hover:opacity-80 transition-opacity"
                          style={{ borderColor: panel.accent }}>
                          <Icon size={14} style={{ color: panel.accent }} />
                        </div>
                      </div>

                      <div>
                        <h3 className="font-display font-bold text-xl text-text-primary mb-2 leading-tight">
                          {panel.title}
                        </h3>
                        <p className="text-text-muted text-sm leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          {panel.desc}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-mono text-xs" style={{ color: panel.accent }}>
                            {panel.stat}
                          </span>
                          <ArrowRight size={14} className="text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                        </div>
                      </div>
                    </div>

                    {/* Bottom border accent */}
                    <div className="absolute bottom-0 left-0 right-0 h-px group-hover:opacity-100 opacity-0 transition-opacity duration-300"
                      style={{ background: panel.accent }} />
                  </motion.div>
                )
              })}
            </div>

            {/* Stats strip */}
            <RevealSection>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { n: '340+', label: 'Obras publicadas' },
                  { n: '12',   label: 'Ediciones' },
                  { n: '2.4K', label: 'Lectores activos' },
                  { n: '4',    label: 'Años de señal' },
                ].map((s) => (
                  <div key={s.label} className="card-glass p-6 text-center">
                    <p className="font-display font-bold text-3xl text-gradient mb-1">{s.n}</p>
                    <p className="font-mono text-[11px] tracking-widest text-text-muted uppercase">{s.label}</p>
                  </div>
                ))}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ── 3. SISTEMA ─────────────────────────────────────────────────── */}
        <section id="sistema" className="py-28 relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 80% 40% at 50% 50%, rgba(28,28,46,0.5) 0%, transparent 70%)',
          }} />
          <div className="relative section-wrap">
            <RevealSection className="mb-16">
              <div className="max-w-2xl">
                <span className="font-mono text-xs tracking-[0.2em] text-purple-light uppercase mb-4 block">
                  — El sistema
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-5">
                  No es motivación.{' '}
                  <span className="text-gradient">Es arquitectura de conducta.</span>
                </h2>
                <p className="text-text-muted text-lg leading-relaxed">
                  Cuatro capas que componen el marco editorial de zgen. No son categorías. Son sistemas.
                </p>
              </div>
            </RevealSection>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SISTEMA_CARDS.map((card, i) => {
                const Icon = card.icon
                return (
                  <motion.div
                    key={card.label}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: easeOut }}
                    className="card-glass p-8 group cursor-default"
                  >
                    <div className="inline-flex items-center justify-center w-10 h-10 rounded mb-5"
                      style={{ background: card.glow, border: `1px solid ${card.border}` }}>
                      <Icon size={18} className="text-text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg text-text-primary mb-3 tracking-tight">
                      {card.label}
                    </h3>
                    <p className="text-text-muted text-sm leading-relaxed">{card.desc}</p>
                    <div className="mt-6 h-px w-0 group-hover:w-full transition-all duration-500"
                      style={{ background: `linear-gradient(90deg, ${card.border.replace('0.3','0.7')}, transparent)` }} />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── 4. TRIBU ───────────────────────────────────────────────────── */}
        <section id="tribu" className="py-28 relative overflow-hidden">
          {/* Side glows */}
          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-[600px] pointer-events-none" style={{
            background: 'radial-gradient(ellipse at left, rgba(124,58,237,0.1) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }} />
          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-64 h-[600px] pointer-events-none" style={{
            background: 'radial-gradient(ellipse at right, rgba(6,182,212,0.07) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }} />

          <div className="relative section-wrap">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Left */}
              <RevealSection>
                <span className="font-mono text-xs tracking-[0.2em] text-cyan-light uppercase mb-4 block">
                  — La tribu
                </span>
                <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-6">
                  Esto no es para todos.{' '}
                  <span className="text-gradient">Es para ti si...</span>
                </h2>
                <p className="text-text-muted text-lg leading-relaxed mb-8">
                  zgen no es un newsletter más. Es una señal para los que ya saben
                  que crecer requiere un sistema mejor, no más esfuerzo.
                </p>
                <a href="#newsletter" className="btn-brand">
                  <Users size={14} />
                  Unirme a la tribu
                </a>
              </RevealSection>

              {/* Right: trait list */}
              <div className="flex flex-col gap-3">
                {TRIBU_TRAITS.map((trait, i) => {
                  const Icon = trait.icon
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.5, delay: i * 0.08, ease: easeOut }}
                      className="card-glass flex items-start gap-4 px-5 py-4 group hover:border-purple-DEFAULT/40 transition-colors"
                    >
                      <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded" style={{
                        background: 'rgba(124,58,237,0.12)',
                        border: '1px solid rgba(124,58,237,0.2)',
                      }}>
                        <Icon size={15} className="text-purple-light" />
                      </div>
                      <p className="text-text-muted text-sm leading-relaxed pt-1 group-hover:text-text-primary transition-colors">
                        {trait.text}
                      </p>
                    </motion.div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* ── 5. MISIÓN / MANIFIESTO ─────────────────────────────────────── */}
        <section id="manifiesto" className="py-28 relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" style={{
            backgroundImage:
              'linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(to right, rgba(124,58,237,0.04) 1px, transparent 1px)',
            backgroundSize: '80px 80px',
          }} />

          <div className="relative section-wrap max-w-3xl">
            <RevealSection>
              <span className="font-mono text-xs tracking-[0.2em] text-purple-light uppercase mb-6 block">
                — Manifiesto
              </span>
              <h2 className="font-display font-bold text-3xl md:text-4xl lg:text-5xl leading-tight tracking-tight mb-10">
                &ldquo;La nueva generación no necesita{' '}
                <span className="text-gradient">más ruido.</span>&rdquo;
              </h2>

              <div className="space-y-5 text-text-muted text-lg leading-relaxed">
                <p>Necesita mejores preguntas. Mejores sistemas. Mejores referentes.</p>
                <p>Más verdad interna y menos personaje externo.</p>
                <p className="text-text-primary">
                  zgen magazine existe para eso. Para ser la señal dentro del ruido.
                  Para que cada idea que consumas te haga más tú, no menos.
                </p>
              </div>

              <div className="mt-12 pt-10 border-t border-border/50 font-mono text-xs tracking-[0.15em] text-text-faint uppercase">
                Daniels · zgen magazine · {new Date().getFullYear()}
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ── 6. NEWSLETTER ──────────────────────────────────────────────── */}
        <section id="newsletter" className="py-28 relative">
          <div className="absolute inset-0 pointer-events-none" style={{
            background: 'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(59,130,246,0.04) 0%, transparent 70%)',
          }} />

          <div className="relative section-wrap">
            <RevealSection>
              <div className="card-glass max-w-2xl mx-auto p-10 md:p-14 text-center relative overflow-hidden">
                <div className="absolute inset-0 pointer-events-none" style={{
                  background: 'radial-gradient(ellipse 80% 80% at 50% -10%, rgba(124,58,237,0.07) 0%, transparent 60%)',
                }} />

                <span className="relative font-mono text-xs tracking-[0.2em] text-purple-light uppercase mb-4 block">
                  — Señal diaria
                </span>
                <h2 className="relative font-display font-bold text-3xl md:text-4xl leading-tight tracking-tight mb-4">
                  Recibe ideas que te obliguen a{' '}
                  <span className="text-gradient">pensar mejor.</span>
                </h2>
                <p className="relative text-text-muted mb-10 max-w-md mx-auto leading-relaxed">
                  Una idea al día. Sin relleno. Sin spam. Solo señal.
                </p>

                <form onSubmit={(e) => e.preventDefault()} className="relative flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="tu@email.com"
                    className="flex-1 bg-bg-3 border border-border focus:border-purple-glow text-text-primary placeholder:text-text-faint
                               text-sm px-4 py-3 outline-none transition-colors duration-200
                               focus:ring-1 focus:ring-purple-glow/30 font-mono"
                  />
                  <button type="submit" className="btn-brand whitespace-nowrap justify-center">
                    <ArrowRight size={14} />
                    Entrar
                  </button>
                </form>

                <p className="relative mt-5 font-mono text-[11px] text-text-faint tracking-wide">
                  Sin spam · Cancela cuando quieras · zgen.cloud
                </p>
              </div>
            </RevealSection>
          </div>
        </section>

        {/* ── FOOTER ─────────────────────────────────────────────────────── */}
        <footer className="border-t border-border/50 py-10">
          <div className="section-wrap flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col items-center md:items-start">
              <span className="font-display font-bold text-base tracking-[0.15em] text-text-primary">DANIELS</span>
              <span className="font-mono text-[10px] tracking-[0.2em] text-text-muted uppercase">zgen magazine</span>
            </div>

            <nav className="flex gap-6 flex-wrap justify-center">
              {[
                { href: '#arte', label: 'Arte' },
                { href: '#sistema', label: 'Sistema' },
                { href: '#tribu', label: 'Tribu' },
                { href: '#manifiesto', label: 'Manifiesto' },
                { href: '/portfolio', label: 'Portfolio' },
                { href: '/eventos', label: 'Eventos' },
              ].map((l) => (
                <a key={l.href} href={l.href}
                  className="font-mono text-[11px] tracking-widest uppercase text-text-muted hover:text-text-primary transition-colors">
                  {l.label}
                </a>
              ))}
            </nav>

            <p className="font-mono text-[11px] text-text-faint tracking-wide">
              © {new Date().getFullYear()} zgen.cloud
            </p>
          </div>
        </footer>
      </motion.div>
    </>
  )
}
