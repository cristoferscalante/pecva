import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import Link from "next/link"
import { ArrowRight, CheckCircle, Satellite, MapPin, Target, Globe, Navigation, Shield, Phone } from "lucide-react"

export const metadata: Metadata = {
  title: "Posicionamiento GPS MAGNA SIRGAS | PECVA",
  description: "Servicios especializados en posicionamiento de placas GPS en sistema de referencia MAGNA SIRGAS. Georreferenciación oficial y control geodésico de alta precisión.",
  keywords: "GPS MAGNA SIRGAS, posicionamiento GPS, georreferenciación, control geodésico, sistema de referencia, topografía GPS, coordenadas oficiales",
}

const caracteristicas = [
  {
    icon: Satellite,
    title: "Sistema MAGNA SIRGAS",
    description: "Posicionamiento oficial en el sistema de referencia geocéntrico nacional MAGNA-SIRGAS"
  },
  {
    icon: Target,
    title: "Alta Precisión",
    description: "Precisión centimétrica en coordenadas con equipos GPS de doble frecuencia"
  },
  {
    icon: MapPin,
    title: "Placas Geodésicas",
    description: "Instalación y posicionamiento de placas GPS permanentes para control geodésico"
  },
  {
    icon: Globe,
    title: "Cobertura Nacional",
    description: "Servicios disponibles en todo el territorio nacional con certificación oficial"
  },
  {
    icon: Navigation,
    title: "Metodología RTK",
    description: "Técnicas RTK y post-procesamiento para máxima precisión en tiempo real"
  },
  {
    icon: Shield,
    title: "Certificación Oficial",
    description: "Certificados avalados por el IGAC y cumplimiento de normativas geodésicas"
  }
]

const tiposServicios = [
  {
    categoria: "Posicionamiento GPS",
    servicios: [
      "Posicionamiento de vértices geodésicos",
      "Establecimiento de redes GPS locales",
      "Densificación de redes geodésicas",
      "Control geodésico de proyectos",
      "Posicionamiento de BMs (Bench Marks)",
      "Georreferenciación de levantamientos"
    ]
  },
  {
    categoria: "Placas y Monumentación",
    servicios: [
      "Instalación de placas geodésicas",
      "Monumentación permanente",
      "Placas de concreto especializadas",
      "Señalización geodésica",
      "Mantenimiento de vértices",
      "Recuperación de puntos geodésicos"
    ]
  },
  {
    categoria: "Certificación y Documentación",
    servicios: [
      "Certificados de coordenadas MAGNA-SIRGAS",
      "Fichas técnicas de vértices",
      "Reportes de precisión",
      "Documentación fotográfica",
      "Archivos de observación GPS",
      "Memorias técnicas especializadas"
    ]
  }
]

const procesoTrabajo = [
  {
    paso: "01",
    titulo: "Planificación Geodésica",
    descripcion: "Diseño de la red GPS considerando precisión requerida, distribución y accesibilidad"
  },
  {
    paso: "02",
    titulo: "Reconocimiento de Campo",
    descripcion: "Inspección del terreno y selección de ubicaciones óptimas para las placas GPS"
  },
  {
    paso: "03",
    titulo: "Monumentación",
    descripcion: "Instalación de placas geodésicas permanentes con especificaciones técnicas oficiales"
  },
  {
    paso: "04",
    titulo: "Observación GPS",
    descripcion: "Medición con equipos de doble frecuencia y sesiones de observación prolongadas"
  },
  {
    paso: "05",
    titulo: "Procesamiento y Ajuste",
    descripcion: "Cálculo de coordenadas MAGNA-SIRGAS con software geodésico especializado"
  },
  {
    paso: "06",
    titulo: "Certificación Oficial",
    descripcion: "Emisión de certificados oficiales y documentación técnica completa"
  }
]

const equiposUtilizados = [
  "Receptores GPS de doble frecuencia",
  "Antenas geodésicas de precisión",
  "Trípodes y bases nivelantes",
  "Placas geodésicas de concreto",
  "Equipos de comunicación RTK",
  "Software de procesamiento GPS",
  "Instrumentos de nivelación",
  "Herramientas de monumentación"
]

const aplicaciones = [
  "Proyectos de ingeniería civil",
  "Desarrollos urbanísticos",
  "Infraestructura vial",
  "Proyectos mineros",
  "Catastro y registro",
  "Estudios ambientales",
  "Proyectos de saneamiento",
  "Obras de infraestructura"
]

const ventajas = [
  "Precisión centimétrica garantizada",
  "Certificación oficial IGAC",
  "Cumplimiento normativo completo",
  "Trazabilidad geodésica nacional",
  "Monumentación permanente",
  "Documentación técnica completa",
  "Experiencia en proyectos complejos",
  "Soporte técnico especializado"
]

const normativaAplicable = [
  "Resolución 068 de 2005 - IGAC",
  "Especificaciones técnicas MAGNA-SIRGAS",
  "Normas geodésicas nacionales",
  "Estándares de precisión GPS",
  "Protocolos de monumentación",
  "Procedimientos de certificación"
]

export default function PosicionamientoGPSPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Sistema Oficial MAGNA-SIRGAS
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Posicionamiento GPS MAGNA SIRGAS
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Servicios especializados en posicionamiento de placas GPS en sistema de referencia oficial MAGNA-SIRGAS. 
              Control geodésico de alta precisión con certificación IGAC.
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
                Control Geodésico Oficial
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nuestros servicios de posicionamiento GPS MAGNA-SIRGAS proporcionan 
                  control geodésico oficial con la máxima precisión, utilizando equipos 
                  de doble frecuencia y metodologías certificadas por el IGAC.
                </p>
                <p>
                  El sistema MAGNA-SIRGAS es el marco de referencia geodésico oficial 
                  de Colombia, garantizando la trazabilidad y compatibilidad de todas 
                  las mediciones con los estándares nacionales e internacionales.
                </p>
                <p>
                  Instalamos placas geodésicas permanentes con monumentación especializada, 
                  proporcionando puntos de control confiables para proyectos de cualquier 
                  escala y complejidad técnica.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="relative">
                <img
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20GPS%20surveying%20equipment%2C%20geodetic%20monument%20installation%2C%20GNSS%20receiver%20on%20tripod%2C%20concrete%20geodetic%20marker%2C%20satellite%20positioning%20technology%2C%20surveyor%20working%20with%20GPS%20equipment%2C%20precise%20geodetic%20control%20point&image_size=landscape_4_3"
                  alt="Posicionamiento GPS MAGNA SIRGAS"
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
              Características del Servicio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tecnología GPS de precisión con certificación oficial y cumplimiento normativo
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

      {/* Tipos de Servicios */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Servicios Especializados
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Amplia gama de servicios geodésicos para control y posicionamiento GPS
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-8">
            {tiposServicios.map((categoria, index) => (
              <AnimatedSection key={index}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{categoria.categoria}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categoria.servicios.map((servicio, servicioIndex) => (
                        <div key={servicioIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{servicio}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Proceso de Trabajo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Metodología geodésica estructurada para garantizar precisión y certificación oficial
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

      {/* Equipos y Aplicaciones */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Equipos Especializados</h2>
              <div className="space-y-3">
                {equiposUtilizados.map((equipo, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{equipo}</span>
                  </div>
                ))}
              </div>
            </AnimatedSection>
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
          </div>
        </div>
      </section>

      {/* Ventajas y Normativa */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
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
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Normativa Aplicable</h2>
              <div className="space-y-3">
                {normativaAplicable.map((norma, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <Shield className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{norma}</span>
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
              ¿Necesitas Control Geodésico Oficial?
            </h2>
            <p className="text-xl lg:text-2xl mb-12 opacity-95 max-w-3xl mx-auto leading-relaxed">
              Contáctanos para una consulta especializada en posicionamiento GPS MAGNA-SIRGAS con certificación oficial
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