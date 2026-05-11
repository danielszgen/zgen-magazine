import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'El portfolio visual de DANIELS zgen magazine.',
}

export default function PortfolioPage() {
  return (
    <ComingSoon
      label="— Portfolio"
      title="El archivo visual."
      description="Aquí vivirá el portfolio completo: cada obra, cada serie, cada mirada. Imágenes que no son decoración — son argumentos."
      eta="Próximamente · Fase 5"
    />
  )
}
