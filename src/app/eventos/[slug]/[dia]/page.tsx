import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Fotos del día',
  description: 'Galería de fotos del día del evento.',
}

export default function DiaPage({
  params,
}: {
  params: { slug: string; dia: string }
}) {
  return (
    <ComingSoon
      label={`— ${params.slug} · ${params.dia}`}
      title="Fotos del día."
      description="El grid completo de fotos de este día. Cada imagen en preview con marca de agua. Descarga en HD tras el pago."
      eta="Próximamente · Fase 6"
    />
  )
}
