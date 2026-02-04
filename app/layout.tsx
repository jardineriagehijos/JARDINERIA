import React from "react"
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Jardinería G&H | Jardinería Integral en Villa del Dique, Córdoba',
  description: 'Servicios profesionales de jardinería integral: corte de pasto, desmonte, limpieza de terrenos y mantenimiento de jardines en Villa del Dique, Córdoba, Argentina.',
  keywords: 'jardinería, corte de pasto, desmonte, limpieza terrenos, mantenimiento jardines, Villa del Dique, Córdoba',
  authors: [{ name: 'Jardinería G&H' }],
  creator: 'Jardinería G&H',
  manifest: '/manifest.json',
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'Jardinería G&H',
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    title: 'Jardinería G&H | Jardinería Integral',
    description: 'Cuidamos y transformamos tus espacios verdes. Servicios profesionales de jardinería en Villa del Dique, Córdoba.',
    siteName: 'Jardinería G&H',
  },
}

export const viewport: Viewport = {
  themeColor: '#2d5a27',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="apple-touch-icon" href="/icon-192.jpg" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
