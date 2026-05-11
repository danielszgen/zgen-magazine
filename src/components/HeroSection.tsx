import Link from 'next/link'

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden px-6">
      {/* Fondo con gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-zgen-black via-zgen-surface to-zgen-black" />

      {/* Grid decorativo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(to right, #D4AF37 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Círculo decorativo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-zgen-accent/10 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] rounded-full border border-zgen-accent/5 pointer-events-none" />

      {/* Contenido */}
      <div className="relative z-10 text-center max-w-4xl mx-auto animate-fade-in">
        <p className="text-zgen-accent uppercase tracking-[0.3em] text-xs mb-6">
          Nueva generación de arte digital
        </p>

        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-zgen-white mb-6 leading-none">
          zgen
          <br />
          <span className="text-zgen-accent">Magazine</span>
        </h1>

        <p className="text-zgen-muted text-lg md:text-xl max-w-xl mx-auto mb-10 leading-relaxed">
          Descarga, colecciona e interactúa con arte digital exclusivo.
          Un espacio para la creatividad sin límites.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/gallery" className="btn-primary w-full sm:w-auto">
            Explorar la galería
          </Link>
          <Link href="/about" className="btn-outline w-full sm:w-auto">
            Conocer el proyecto
          </Link>
        </div>
      </div>

      {/* Indicador scroll */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zgen-muted/50">
        <span className="text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-zgen-muted/50 to-transparent" />
      </div>
    </section>
  )
}
