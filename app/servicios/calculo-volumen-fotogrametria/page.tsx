import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import Link from "next/link"
import { ArrowRight, CheckCircle, Camera, Calculator, Box, Zap, MapPin, BarChart3, Phone, Award, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Cálculo de Volumen - Fotogrametría | PECVA",
  description: "Servicios especializados en cálculo de volúmenes y fotogrametría aérea. Medición precisa de stockpiles, excavaciones y análisis volumétrico con drones y tecnología avanzada.",
  keywords: "cálculo de volumen, fotogrametría, drones, stockpiles, excavaciones, medición volumétrica, topografía aérea, análisis 3D",
}

const caracteristicas = [
  {
    icon: Calculator,
    title: "Cálculo Volumétrico Preciso",
    description: "Medición exacta de volúmenes de tierra, agregados y materiales con precisión milimétrica"
  },
  {
    icon: Camera,
    title: "Fotogrametría Aérea",
    description: "Captura de imágenes aéreas de alta resolución para modelado 3D detallado"
  },
  {
    icon: Box,
    title: "Modelos 3D Detallados",
    description: "Generación de modelos tridimensionales precisos para análisis volumétrico"
  },
  {
    icon: BarChart3,
    title: "Análisis Comparativo",
    description: "Comparación de volúmenes entre diferentes períodos para control de inventarios"
  },
  {
    icon: MapPin,
    title: "Georreferenciación",
    description: "Ubicación precisa de mediciones en coordenadas oficiales MAGNA-SIRGAS"
  },
  {
    icon: Zap,
    title: "Procesamiento Rápido",
    description: "Entrega de resultados en tiempo récord con tecnología de procesamiento avanzada"
  }
]

const procesoTrabajo = [
  {
    paso: "01",
    titulo: "Planificación del Vuelo",
    descripcion: "Diseño de la misión fotogramétrica considerando área, resolución y condiciones del sitio"
  },
  {
    paso: "02",
    titulo: "Captura Aérea",
    descripcion: "Vuelo con drones especializados para captura de imágenes de alta resolución"
  },
  {
    paso: "03",
    titulo: "Procesamiento Digital",
    descripcion: "Generación de ortomosaicos, modelos digitales de superficie y nubes de puntos"
  },
  {
    paso: "04",
    titulo: "Cálculo Volumétrico",
    descripcion: "Análisis detallado de volúmenes utilizando software especializado de alta precisión"
  },
  {
    paso: "05",
    titulo: "Entrega de Resultados",
    descripcion: "Reportes técnicos, modelos 3D y archivos digitales especializados"
  }
]

const aplicaciones = [
  "Control de inventarios en canteras y minas",
  "Medición de stockpiles de materiales",
  "Cálculo de volúmenes de excavación",
  "Monitoreo de rellenos sanitarios",
  "Control de avance en obras civiles",
  "Análisis de erosión y sedimentación",
  "Gestión de recursos naturales"
]

const ventajas = [
  "Precisión superior al 95% en mediciones",
  "Reducción significativa de tiempos de medición",
  "Acceso a áreas de difícil alcance",
  "Documentación visual completa del proyecto",
  "Menor riesgo para el personal de campo",
  "Capacidad de medición en grandes extensiones",
  "Registro histórico para análisis temporal"
]

const productosEntregables = [
  "Ortomosaicos de alta resolución",
  "Modelos digitales de superficie (MDS)",
  "Nubes de puntos clasificadas",
  "Reportes de cálculo volumétrico",
  "Modelos 3D interactivos",
  "Archivos CAD y GIS",
  "Certificados de medición",
  "Videos y animaciones 3D"
]

export default function CalculoVolumenFotogrametriaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Tecnología Avanzada
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Cálculo de Volumen - Fotogrametría
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Servicios especializados en medición volumétrica y fotogrametría aérea con drones. 
              Precisión excepcional para control de inventarios, excavaciones y análisis 3D.
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
                Medición Volumétrica de Precisión
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nuestros servicios de cálculo de volumen y fotogrametría combinan la 
                  tecnología de drones con software especializado para entregar mediciones 
                  volumétricas de máxima precisión y confiabilidad.
                </p>
                <p>
                  Utilizamos equipos de última generación y metodologías probadas para 
                  generar modelos 3D detallados que permiten cálculos volumétricos exactos, 
                  ideales para control de inventarios y seguimiento de proyectos.
                </p>
                <p>
                  La fotogrametría aérea nos permite acceder a áreas extensas y de difícil 
                  acceso, proporcionando una visión completa y detallada del terreno con 
                  resoluciones centimétricas.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="relative">
                <img
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20drone%20photogrammetry%20survey%2C%20aerial%20view%20of%20stockpiles%20and%20excavation%20sites%2C%203D%20volumetric%20calculations%2C%20digital%20surface%20models%2C%20high-tech%20surveying%20equipment%2C%20detailed%20technical%20analysis%2C%20professional%20engineering%20workspace&image_size=landscape_4_3"
                  alt="Cálculo de Volumen y Fotogrametría"
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
              Tecnología de vanguardia para mediciones volumétricas precisas y confiables
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
              Metodología estructurada para garantizar precisión y calidad en cada medición
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

      {/* Aplicaciones y Ventajas */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Aplicaciones del Servicio</h2>
              <div className="space-y-3">
                {aplicaciones.map((aplicacion, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{aplicacion}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Ventajas Competitivas</h2>
              <div className="space-y-3">
                {ventajas.map((ventaja, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{ventaja}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Productos Entregables */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Productos Entregables
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Documentación técnica completa y archivos digitales especializados
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {productosEntregables.map((producto, index) => (
              <AnimatedSection key={index}>
                <div className="p-4 rounded-lg bg-card border text-center hover:shadow-md transition-shadow">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium">{producto}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Fondo con gradiente animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 to-purple-600/90 animate-pulse"></div>
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl animate-bounce"></div>
            <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/5 rounded-full blur-2xl animate-pulse"></div>
            <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-white/10 rounded-full blur-lg animate-bounce delay-1000"></div>
          </div>
        </div>
        
        <div className="relative container mx-auto max-w-5xl text-center text-white">
          <AnimatedSection>
            <div className="mb-8">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                ¿Necesitas Cálculo de Volúmenes Precisos?
              </h2>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Contáctanos para una consulta personalizada y descubre cómo podemos optimizar tus mediciones con tecnología de vanguardia.
              </p>
            </div>
            
            {/* Información adicional */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="flex items-center justify-center gap-3 text-blue-100">
                <Clock className="h-6 w-6 text-blue-300" />
                <span className="font-medium">Respuesta en 24 horas</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-blue-100">
                <CheckCircle className="h-6 w-6 text-green-400" />
                <span className="font-medium">Cotización gratuita</span>
              </div>
              <div className="flex items-center justify-center gap-3 text-blue-100">
                <Award className="h-6 w-6 text-yellow-400" />
                <span className="font-medium">15+ años de experiencia</span>
              </div>
            </div>
            
            {/* Botones mejorados */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                size="lg" 
                className="group relative text-lg px-10 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white border-0 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 rounded-xl font-semibold min-w-[200px]" 
                asChild
              >
                <Link href="/cotizacion">
                  <MapPin className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Solicitar Cotización
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
              
              <Button 
                size="lg" 
                className="group relative text-lg px-10 py-4 bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm shadow-2xl hover:shadow-white/10 transform hover:scale-105 transition-all duration-300 rounded-xl font-semibold min-w-[200px]" 
                asChild
              >
                <Link href="/contacto">
                  <Phone className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  Contactar Ahora
                  <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}