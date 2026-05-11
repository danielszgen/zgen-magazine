import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Confirmación de pago',
  description: 'Tu descarga está lista.',
}

export default function ConfirmacionPage() {
  return (
    <ComingSoon
      label="— Confirmación"
      title="Pago completado."
      description="Aquí aparecerá el enlace de descarga en alta resolución y el resumen del pedido. También te llegará un email con todo."
      eta="Próximamente · Fase 7"
    />
  )
}
