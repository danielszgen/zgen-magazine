import type { Metadata } from 'next'
import ComingSoon from '@/components/ComingSoon'

export const metadata: Metadata = {
  title: 'Checkout',
  description: 'Completa tu compra de forma segura con Stripe.',
}

export default function CheckoutPage() {
  return (
    <ComingSoon
      label="— Checkout"
      title="El paso final."
      description="Pago seguro con Stripe. Una vez completado, recibirás un enlace de descarga directo en tu email. Sin cuentas, sin fricciones."
      eta="Próximamente · Fase 7"
    />
  )
}
