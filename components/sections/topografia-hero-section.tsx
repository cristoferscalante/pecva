"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, MapPin, Ruler, Target, Play, Award, Users, TrendingUp } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useEffect, useState } from "react"

export function TopografiaHeroSection() {
  const [animatedStats, setAnimatedStats] = useState({ projects: 0, clients: 0, years: 0 })
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
    // Animate stats
    const timer = setTimeout(() => {
      const duration = 2000
      const steps = 60
      const stepTime = duration / steps
      let currentStep = 0

      const interval = setInterval(() => {
        currentStep++
        const progress = currentStep / steps
        
        setAnimatedStats({
          projects: Math.floor(progress * 500),
          clients: Math.floor(progress * 150),
          years: Math.floor(progress * 15)
        })

        if (currentStep >= steps) {
          clearInterval(interval)
        }
      }, stepTime)

      return () => clearInterval(interval)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-background overflow-hidden">
      {/* Split Layout Container */}
      <div className="grid lg:grid-cols-2 min-h-screen">
        
        {/* Left Panel - Content */}
        <div className="relative flex flex-col justify-center px-6 lg:px-12 xl:px-16 py-20 bg-gradient-to-br from-background via-background to-muted/20">
          
          {/* Floating Elements */}
          <div className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-40 left-10 w-32 h-32 bg-secondary/10 rounded-full blur-2xl animate-pulse delay-1000" />
          


          {/* Animated Title */}
          <div className="mb-8">
            <h1 className={`text-6xl lg:text-7xl xl:text-8xl font-black leading-none mb-4 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <span className="block text-foreground">TOPO</span>
              <span className="block text-primary bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">GRAFÍA</span>
            </h1>
            <div className={`w-24 h-1 bg-gradient-to-r from-primary to-secondary transform transition-all duration-1000 delay-500 ${isVisible ? 'scale-x-100' : 'scale-x-0'}`} />
          </div>

          {/* Subtitle */}
          <p className={`text-xl lg:text-2xl text-muted-foreground mb-12 max-w-lg leading-relaxed transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            Precisión milimétrica en cada medición.
            <span className="block text-foreground font-semibold mt-2">Tecnología avanzada para proyectos excepcionales.</span>
          </p>

          {/* Stats Grid */}
          <div className={`grid grid-cols-3 gap-6 mb-12 transform transition-all duration-1000 delay-900 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">{animatedStats.projects}+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Proyectos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">{animatedStats.clients}+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Clientes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-1">{animatedStats.years}+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">Años</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 mb-8 transform transition-all duration-1000 delay-1100 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 h-16 text-lg font-bold rounded-lg relative overflow-hidden group"
            >
              <Link href="/cotizacion">
                <span className="relative z-10">SOLICITAR COTIZACIÓN</span>
                <ArrowRight className="ml-3 h-5 w-5 relative z-10 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            </Button>
            <Button 
              asChild 
              variant="outline" 
              size="lg" 
              className="border-2 border-foreground text-foreground hover:bg-foreground hover:text-background px-8 py-6 h-16 text-lg font-bold rounded-lg"
            >
              <Link href="/servicios">
                VER SERVICIOS
              </Link>
            </Button>
          </div>

          {/* Features */}
          <div className={`flex flex-wrap gap-4 transform transition-all duration-1000 delay-1300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
              <Target className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Precisión Milimétrica</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
              <Ruler className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Tecnología Avanzada</span>
            </div>
            <div className="flex items-center gap-2 bg-muted/50 px-4 py-2 rounded-full">
              <MapPin className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium">Cobertura Nacional</span>
            </div>
          </div>
        </div>

        {/* Right Panel - Visual */}
        <div className="relative bg-gradient-to-br from-primary/5 via-primary/10 to-secondary/5 flex items-center justify-center">
          
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }} />
          </div>

          {/* Main Image */}
          <div className={`relative z-10 transform transition-all duration-1500 delay-500 ${isVisible ? 'scale-100 opacity-100' : 'scale-110 opacity-0'}`}>
            <div className="relative w-80 h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-full blur-3xl" />
              <Image
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20surveyor%20with%20advanced%20theodolite%20equipment%2C%20clean%20minimalist%20style%2C%20professional%20engineering%2C%20high%20contrast%2C%20geometric%20composition&image_size=square_hd"
                alt="Topógrafo profesional con equipo moderno"
                fill
                className="object-cover rounded-full"
                priority
              />
            </div>
          </div>

          {/* Floating Cards */}
          <div className={`absolute top-20 left-10 bg-background/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border transform transition-all duration-1000 delay-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <Award className="h-5 w-5 text-primary" />
              </div>
              <div>
                <div className="font-semibold text-sm">Certificación ISO</div>
                <div className="text-xs text-muted-foreground">Calidad Garantizada</div>
              </div>
            </div>
          </div>

          <div className={`absolute bottom-20 right-10 bg-background/90 backdrop-blur-sm p-4 rounded-lg shadow-lg border transform transition-all duration-1000 delay-1200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-secondary/10 rounded-full flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-secondary" />
              </div>
              <div>
                <div className="font-semibold text-sm">99.9% Precisión</div>
                <div className="text-xs text-muted-foreground">Resultados Exactos</div>
              </div>
            </div>
          </div>

          {/* Geometric Elements */}
          <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rotate-45 animate-pulse" />
          <div className="absolute bottom-1/3 left-1/4 w-6 h-6 border-2 border-secondary rounded-full animate-spin" style={{ animationDuration: '8s' }} />
          <div className="absolute top-1/2 left-10 w-2 h-16 bg-gradient-to-b from-primary to-transparent" />
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="animate-bounce">
          <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-foreground/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  )
}