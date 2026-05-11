import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Evento',
  description: 'Galería fotográfica del evento.',
}

// Next.js requires this for dynamic routes with generateStaticParams
// in static export. In dev / SSR mode it works without it.
export default function EventoPage({ params }: { params: { slug: string } }) {
  return (
    <ComingSoon
      label={`— Evento · ${params.slug}`}
      title="Galería del evento."
      description="Aquí verás todas las fotos del evento organizadas por día. Selecciona, previsualiza y descarga en alta resolución tras el pago."
      eta="Próximamente · Fase 5"
    />
  )
}
