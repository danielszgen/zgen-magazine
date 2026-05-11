import type { Metadata } from 'next'
import { Inter, Space_Grotesk, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'DANIELS — zgen magazine',
    template: '%s | DANIELS zgen magazine',
  },
  description:
    'Revista viva sobre conducta humana, mejora diaria y cultura digital. Una señal diaria para convertir ideas potentes en claridad, criterio y acción real.',
  keywords: ['zgen', 'revista digital', 'conducta humana', 'mejora personal', 'cultura digital', 'mindset'],
  authors: [{ name: 'Daniel' }],
  creator: 'Daniel',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    title: 'DANIELS — zgen magazine',
    description: 'La revista para una generación que quiere reprogramarse.',
    siteName: 'DANIELS zgen magazine',
    url: 'https://www.zgen.cloud',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DANIELS — zgen magazine',
    description: 'La revista para una generación que quiere reprogramarse.',
  },
  robots: { index: true, follow: true },
  metadataBase: new URL('https://www.zgen.cloud'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable}`}>
      <body className="min-h-screen bg-bg text-text-primary font-body antialiased">
        {children}
      </body>
    </html>
  )
}
