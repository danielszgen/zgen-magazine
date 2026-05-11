import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Foto',
  description: 'Ficha de foto individual. Previsualiza y descarga en alta resolución.',
}

export default function FotoPage({ params }: { params: { id: string } }) {
  return (
    <ComingSoon
      label={`— Foto · #${params.id}`}
      title="La foto en detalle."
      description="Vista ampliada, metadatos del evento, precio de descarga y botón de compra. La ficha completa de cada imagen."
      eta="Próximamente · Fase 5"
    />
  )
}
