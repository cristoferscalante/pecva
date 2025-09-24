import type { Metadata } from "next"
import { generatePageMetadata } from "@/lib/metadata"
import { TopografiaHeroSection } from "@/components/sections/topografia-hero-section"
import { ServiciosDestacadosSection } from "@/components/sections/servicios-destacados-section"
import { StatsTopografiaSection } from "@/components/sections/stats-topografia-section"
import { TestimoniosSection } from "@/components/sections/testimonios-section"


export const metadata: Metadata = generatePageMetadata({
  title: "PECVA - Servicios Profesionales de Topografía y Estudios de Terreno",
  description: "Empresa líder en servicios topográficos, mediciones de precisión, estudios de suelo y cartografía. Tecnología avanzada para proyectos de construcción e ingeniería.",
  slug: "",
  image: "/logosy-1.png.webp",
  keywords: ["topografía", "mediciones", "estudios terreno", "cartografía", "replanteos", "batimetría", "fotogrametría"]
})

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <TopografiaHeroSection />
      <ServiciosDestacadosSection />
      <StatsTopografiaSection />
      <TestimoniosSection />

    </main>
  )
}
