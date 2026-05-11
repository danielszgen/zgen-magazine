import Link from 'next/link'
import Header from '@/components/Header'
import { ArrowLeft } from 'lucide-react'

interface Props {
  label: string          // eyebrow: "— Portfolio"
  title: string          // heading
  description: string    // body copy
  eta?: string           // "Próximamente · Fase 5"
}

export default function ComingSoon({ label, title, description, eta }: Props) {
  return (
    <div className="relative min-h-screen bg-bg flex flex-col overflow-hidden">
      {/* Dot grid */}
      <div className="absolute inset-0 dot-grid opacity-25 pointer-events-none" />
      {/* Glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: 'radial-gradient(ellipse 60% 50% at 50% 40%, rgba(109,40,217,0.1) 0%, transparent 70%)',
      }} />

      <Header />

      <main className="relative flex-1 flex items-center justify-center px-6 py-24">
        <div className="max-w-xl text-center">
          {/* Eyebrow */}
          <span className="font-mono text-xs tracking-[0.2em] text-purple-light uppercase mb-5 block">
            {label}
          </span>

          {/* Title */}
          <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight leading-tight mb-6">
            <span className="text-gradient">{title}</span>
          </h1>

          {/* Description */}
          <p className="text-text-muted text-lg leading-relaxed mb-8">
            {description}
          </p>

          {/* ETA badge */}
          {eta && (
            <div className="inline-flex items-center gap-2 card-glass px-4 py-2 mb-10">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-light animate-pulse" />
              <span className="font-mono text-xs text-text-muted tracking-wide">{eta}</span>
            </div>
          )}

          {/* Back link */}
          <div className="flex justify-center">
            <Link href="/" className="btn-ghost flex items-center gap-2 text-xs">
              <ArrowLeft size={13} />
              Volver al inicio
            </Link>
          </div>

          {/* Decorative DNA-like dots */}
          <div className="mt-16 flex justify-center gap-2 opacity-20">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="w-1.5 h-1.5 rounded-full bg-purple-light"
                style={{ opacity: Math.abs(3 - i) / 3 * 0.8 + 0.2 }} />
            ))}
          </div>
        </div>
      </main>

      {/* Footer strip */}
      <div className="relative border-t border-border/40 py-4 text-center">
        <p className="font-mono text-[11px] text-text-faint tracking-wide">
          zgen.cloud · En construcción
        </p>
      </div>
    </div>
  )
}
