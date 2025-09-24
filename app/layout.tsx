import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Space_Grotesk } from "next/font/google"
import { ThemeProvider } from "@/components/providers/theme-provider"
import { MotionProvider } from "@/components/providers/motion-provider"
import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { MatrixBackground } from "@/components/ui/matrix-background"
import { Toaster } from "@/components/ui/sonner"
import { StructuredData } from "@/components/seo/structured-data"
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics"
import "./globals.css"

const orbitron = Orbitron({ 
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-orbitron"
})

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk"
})

export const metadata: Metadata = {
  title: {
    default: "PECVA - Servicios Profesionales de Topografía",
    template: "%s | PECVA"
  },
  description:
    "Empresa líder en servicios topográficos, mediciones de precisión, estudios de suelo y cartografía. Tecnología avanzada para proyectos de construcción e ingeniería.",
  keywords: ["topografía", "mediciones", "estudios terreno", "cartografía", "replanteos", "batimetría", "fotogrametría", "construcción", "ingeniería"],
  authors: [{ name: "PECVA Team" }],
  creator: "PECVA",
  publisher: "PECVA",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://pecva.com",
    siteName: "PECVA",
    title: "PECVA - Servicios Profesionales de Topografía",
    description: "Empresa líder en servicios topográficos, mediciones de precisión, estudios de suelo y cartografía. Tecnología avanzada para proyectos de construcción e ingeniería.",
    images: [
      {
        url: "https://pecva.com/logosy-1.png.webp",
        width: 1200,
        height: 630,
        alt: "PECVA - Servicios Profesionales de Topografía",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PECVA - Servicios Profesionales de Topografía",
    description: "Empresa líder en servicios topográficos, mediciones de precisión y estudios de suelo.",
    creator: "@pecva",
    images: ["https://pecva.com/logosy-1.png.webp"],
  },
  alternates: {
    canonical: "https://pecva.com",
  },
  category: "technology",
  other: {
    'google-site-verification': process.env.GOOGLE_SITE_VERIFICATION || '',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <StructuredData type="website" />
        <StructuredData type="organization" />
        <GoogleAnalytics />
      </head>
      <body className={`${orbitron.variable} ${spaceGrotesk.variable} font-space-grotesk`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <MotionProvider>
            <div className="relative flex min-h-screen flex-col">
              <MatrixBackground />
              <Header />
              <main className="flex-1 relative z-10">{children}</main>
              <Footer />
              <Toaster />
            </div>
          </MotionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}
