'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Zap } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const NAV_LINKS = [
  { href: '/#arte',       label: 'Arte' },
  { href: '/#sistema',    label: 'Sistema' },
  { href: '/#tribu',      label: 'Tribu' },
  { href: '/portfolio',   label: 'Portfolio' },
  { href: '/eventos',     label: 'Eventos' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="absolute inset-0 bg-bg/80 backdrop-blur-xl border-b border-border/40" />

      <div className="relative section-wrap h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-display font-bold text-xl tracking-[0.12em] text-text-primary transition-colors"
            style={{ letterSpacing: '0.15em' }}>
            DANIELS
          </span>
          <span className="text-[10px] tracking-[0.25em] text-text-muted uppercase font-mono">
            zgen magazine
          </span>
        </Link>

        {/* Nav desktop */}
        <nav className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href}
              className="text-xs uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors duration-200">
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex">
          <a href="/#newsletter" className="btn-brand text-xs py-2 px-5">
            <Zap size={13} />
            Entrar en la señal
          </a>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)}
          className="md:hidden text-text-muted hover:text-text-primary transition-colors"
          aria-label="Menú">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="relative md:hidden bg-bg-2/95 backdrop-blur-xl border-b border-border px-6 py-6 flex flex-col gap-5">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href} onClick={() => setOpen(false)}
                className="text-sm uppercase tracking-widest text-text-muted hover:text-text-primary transition-colors">
                {link.label}
              </Link>
            ))}
            <a href="/#newsletter" onClick={() => setOpen(false)}
              className="btn-brand text-center text-xs py-2.5 mt-2">
              <Zap size={13} />
              Entrar en la señal
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
