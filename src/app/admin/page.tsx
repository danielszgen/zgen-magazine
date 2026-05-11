import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Admin',
  description: 'Panel de administración privado.',
}

export default function AdminPage() {
  return (
    <ComingSoon
      label="— Admin"
      title="Panel de control."
      description="Acceso privado. Gestión de eventos, subida de fotos, asignación de precios, pedidos y reenvío de descargas."
      eta="Próximamente · Fase 8"
    />
  )
}
