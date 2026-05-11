import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Sobre nosotros',
  description: 'La historia y la persona detrás de DANIELS zgen magazine.',
}

export default function AboutPage() {
  return (
    <ComingSoon
      label="— Sobre nosotros"
      title="La persona detrás de la señal."
      description="La historia de por qué existe zgen, quién la construye y qué nos mueve. Porque detrás de todo sistema hay una intención."
      eta="Próximamente · Fase 5"
    />
  )
}
