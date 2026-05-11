import Link from 'next/link'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-zgen-border bg-zgen-surface mt-auto">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Marca */}
          <div>
            <Link
              href="/"
              className="font-display text-xl font-bold text-zgen-white hover:text-zgen-accent transition-colors"
            >
              zgen<span className="text-zgen-accent">.</span>
            </Link>
            <p className="text-zgen-muted text-sm mt-3 leading-relaxed max-w-xs">
              Arte digital para la nueva generación. Descarga, colecciona e interactúa.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-zgen-white text-xs uppercase tracking-widest mb-4">
              Navegación
            </p>
            <ul className="space-y-2">
              {[
                { href: '/', label: 'Inicio' },
                { href: '/gallery', label: 'Galería' },
                { href: '/about', label: 'Nosotros' },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-zgen-muted hover:text-zgen-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <p className="text-zgen-white text-xs uppercase tracking-widest mb-4">
              Contacto
            </p>
            <a
              href="mailto:dani.96.lg@gmail.com"
              className="text-zgen-muted hover:text-zgen-accent text-sm transition-colors"
            >
              dani.96.lg@gmail.com
            </a>
          </div>
        </div>

        <div className="border-t border-zgen-border mt-10 pt-6 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="text-zgen-muted text-xs">
            © {year} zgen Magazine. Todos los derechos reservados.
          </p>
          <p className="text-zgen-muted text-xs">
            Hecho con arte y código.
          </p>
        </div>
      </div>
    </footer>
  )
}
