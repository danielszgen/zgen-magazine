import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Dashboard Admin',
  description: 'Dashboard privado de gestión.',
}

export default function AdminDashboardPage() {
  return (
    <ComingSoon
      label="— Admin · Dashboard"
      title="Centro de mando."
      description="Crea eventos, sube y organiza fotos, asigna precios, revisa pedidos y reenvía enlaces de descarga. Todo desde aquí."
      eta="Próximamente · Fase 8"
    />
  )
}
