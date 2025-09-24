import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import Link from "next/link"
import { ArrowRight, CheckCircle, MapPin, Ruler, Waves, Route, Building, Zap, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Batimetría - Diseño de Vías - Diseño de Niveles Urbanísticos | PECVA",
  description: "Servicios especializados en batimetría, diseño de vías y niveles urbanísticos. Medición de profundidades acuáticas y planificación urbana integral con tecnología avanzada.",
  keywords: "batimetría, diseño de vías, niveles urbanísticos, medición acuática, planificación urbana, topografía acuática, ingeniería vial",
}

const caracteristicas = [
  {
    icon: Waves,
    title: "Batimetría de Precisión",
    description: "Medición exacta de profundidades y relieves subacuáticos con equipos especializados"
  },
  {
    icon: Route,
    title: "Diseño Vial Integral",
    description: "Planificación completa de vías con criterios técnicos y normativos actualizados"
  },
  {
    icon: Building,
    title: "Niveles Urbanísticos",
    description: "Diseño de niveles y pendientes para desarrollos urbanos sostenibles"
  },
  {
    icon: MapPin,
    title: "Georreferenciación",
    description: "Ubicación precisa de todos los elementos del proyecto en coordenadas oficiales"
  },
  {
    icon: Ruler,
    title: "Mediciones Exactas",
    description: "Levantamientos topográficos de alta precisión para bases de diseño confiables"
  },
  {
    icon: Zap,
    title: "Tecnología Avanzada",
    description: "Uso de equipos de última generación para resultados óptimos"
  }
]

const procesoTrabajo = [
  {
    paso: "01",
    titulo: "Reconocimiento del Área",
    descripcion: "Inspección inicial del terreno y cuerpos de agua para planificar el levantamiento"
  },
  {
    paso: "02",
    titulo: "Medición Batimétrica",
    descripcion: "Levantamiento de profundidades y características del fondo acuático"
  },
  {
    paso: "03",
    titulo: "Levantamiento Topográfico",
    descripcion: "Medición del terreno circundante y puntos de control geodésicos"
  },
  {
    paso: "04",
    titulo: "Diseño y Planificación",
    descripcion: "Desarrollo de diseños viales y urbanísticos según normativas vigentes"
  },
  {
    paso: "05",
    titulo: "Entrega de Productos",
    descripcion: "Planos técnicos, memorias de cálculo y archivos digitales especializados"
  }
]

const beneficios = [
  "Diseños viales optimizados para el tráfico vehicular",
  "Planificación urbana sostenible y funcional",
  "Cumplimiento de normativas técnicas vigentes",
  "Integración de sistemas de drenaje eficientes",
  "Minimización de impactos ambientales",
  "Optimización de costos de construcción"
]

const productosEntregables = [
  "Planos batimétricos detallados",
  "Diseños geométricos de vías",
  "Planos de niveles urbanísticos",
  "Perfiles longitudinales y transversales",
  "Memorias de cálculo especializadas",
  "Archivos CAD y GIS",
  "Especificaciones técnicas de construcción"
]

export default function BatimetriaDisenioViasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Servicios Especializados
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Batimetría - Diseño de Vías - Niveles Urbanísticos
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Servicios integrales de medición acuática, diseño vial y planificación urbanística 
              con tecnología de vanguardia para proyectos de infraestructura sostenible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="group">
                <Link href="/cotizacion">
                  Solicitar Cotización
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/contacto">
                  Más Información
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Descripción Detallada */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                Soluciones Integrales para Infraestructura
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nuestros servicios de batimetría, diseño de vías y niveles urbanísticos 
                  combinan la precisión técnica con la innovación tecnológica para entregar 
                  soluciones completas en proyectos de infraestructura.
                </p>
                <p>
                  La batimetría nos permite conocer con exactitud las características del 
                  fondo acuático, mientras que nuestros diseños viales y urbanísticos 
                  garantizan desarrollos funcionales y sostenibles.
                </p>
                <p>
                  Trabajamos con equipos especializados y metodologías probadas para 
                  asegurar la calidad y precisión en cada proyecto, cumpliendo con las 
                  normativas técnicas más exigentes del sector.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="relative">
                <img
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20bathymetry%20survey%20boat%20with%20sonar%20equipment%20measuring%20water%20depths%2C%20modern%20road%20design%20blueprints%2C%20urban%20planning%20levels%2C%20technical%20engineering%20workspace%2C%20high-tech%20surveying%20instruments%2C%20professional%20lighting%2C%20detailed%20technical%20illustration&image_size=landscape_4_3"
                  alt="Batimetría y Diseño de Vías"
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Características de Nuestros Servicios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnología avanzada y metodologías especializadas para resultados excepcionales
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caracteristicas.map((caracteristica, index) => (
              <AnimatedSection key={index}>
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <caracteristica.icon className="h-12 w-12 text-primary mb-4" />
                    <CardTitle className="text-xl">{caracteristica.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {caracteristica.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Metodología estructurada para garantizar la calidad y precisión en cada proyecto
            </p>
          </AnimatedSection>
          <div className="space-y-8">
            {procesoTrabajo.map((paso, index) => (
              <AnimatedSection key={index}>
                <div className="flex flex-col md:flex-row items-start gap-6 p-6 rounded-lg bg-card border">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                      {paso.paso}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{paso.titulo}</h3>
                    <p className="text-muted-foreground">{paso.descripcion}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios y Productos Entregables */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Beneficios del Servicio</h2>
              <div className="space-y-3">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{beneficio}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Productos Entregables</h2>
              <div className="space-y-3">
                {productosEntregables.map((producto, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{producto}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-primary to-green-600">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-10 right-10 w-96 h-96 bg-green-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-400/15 rounded-full blur-3xl animate-pulse delay-500" />
          </div>
        </div>
        
        <div className="relative container mx-auto px-4">
          <AnimatedSection className="text-center text-white">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              ¿Necesitas Servicios de Batimetría o Diseño Vial?
            </h2>
            <p className="text-xl lg:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
              Contáctanos para una consulta personalizada y cotización detallada de tu proyecto de infraestructura
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <Button 
                asChild 
                size="lg" 
                className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Link href="/cotizacion" className="flex items-center">
                  <MapPin className="mr-3 h-5 w-5" />
                  Solicitar Cotización
                  <ArrowRight className="ml-3 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button 
                asChild 
                size="lg" 
                className="group bg-white/10 backdrop-blur-sm text-white border-2 border-white/30 hover:bg-white hover:text-primary shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
              >
                <Link href="/contacto" className="flex items-center">
                  <Phone className="mr-3 h-5 w-5" />
                  Contactar Expertos
                </Link>
              </Button>
            </div>
            
            {/* Additional Info */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">24h</div>
                <div className="text-white/90">Respuesta Garantizada</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">100%</div>
                <div className="text-white/90">Cotización Gratuita</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-300 mb-2">15+</div>
                <div className="text-white/90">Años de Experiencia</div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}