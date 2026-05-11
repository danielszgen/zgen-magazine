import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Eventos',
  description: 'Galerías fotográficas por evento. Descarga tus fotos en alta resolución.',
}

export default function EventosPage() {
  return (
    <ComingSoon
      label="— Eventos"
      title="Cada evento, una galería."
      description="Explora las galerías por evento. Encuentra tu foto, descárgala en alta resolución. El recuerdo en calidad de archivo."
      eta="Próximamente · Fase 5"
    />
  )
}
