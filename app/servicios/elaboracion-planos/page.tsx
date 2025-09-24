import { Metadata } from "next"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import Link from "next/link"
import { ArrowRight, CheckCircle, FileText, Layers, Ruler, Building, Compass, PenTool, Phone, MapPin, Clock, Award } from "lucide-react"

export const metadata: Metadata = {
  title: "Elaboración de Planos Topográficos, Arquitectónicos y Estructurales | PECVA",
  description: "Servicios especializados en elaboración de planos topográficos, arquitectónicos y estructurales. Diseño técnico profesional con precisión y cumplimiento normativo.",
  keywords: "planos topográficos, planos arquitectónicos, planos estructurales, diseño técnico, AutoCAD, dibujo técnico, ingeniería civil",
}

const caracteristicas = [
  {
    icon: FileText,
    title: "Planos Topográficos",
    description: "Representación detallada del terreno con curvas de nivel, cotas y elementos naturales"
  },
  {
    icon: Building,
    title: "Planos Arquitectónicos",
    description: "Diseños arquitectónicos completos con plantas, cortes, fachadas y detalles constructivos"
  },
  {
    icon: Layers,
    title: "Planos Estructurales",
    description: "Diseño de elementos estructurales con especificaciones técnicas y detalles de refuerzo"
  },
  {
    icon: Ruler,
    title: "Precisión Técnica",
    description: "Elaboración con máxima precisión siguiendo normas técnicas y estándares profesionales"
  },
  {
    icon: Compass,
    title: "Georreferenciación",
    description: "Planos georreferenciados en sistema oficial MAGNA-SIRGAS para ubicación precisa"
  },
  {
    icon: PenTool,
    title: "Software Especializado",
    description: "Uso de AutoCAD, Civil 3D y software BIM para máxima calidad y compatibilidad"
  }
]

const tiposPlanos = [
  {
    categoria: "Planos Topográficos",
    tipos: [
      "Planos de levantamiento topográfico",
      "Planos de curvas de nivel",
      "Planos de localización y ubicación",
      "Planos de drenajes naturales",
      "Planos de perfiles longitudinales",
      "Planos de secciones transversales"
    ]
  },
  {
    categoria: "Planos Arquitectónicos",
    tipos: [
      "Plantas arquitectónicas",
      "Cortes y fachadas",
      "Planos de cubiertas",
      "Detalles constructivos",
      "Planos de acabados",
      "Planos de carpintería"
    ]
  },
  {
    categoria: "Planos Estructurales",
    tipos: [
      "Planos de cimentación",
      "Planos de estructura en concreto",
      "Planos de estructura metálica",
      "Detalles de refuerzo",
      "Especificaciones técnicas",
      "Memorias de cálculo"
    ]
  }
]

const procesoElaboracion = [
  {
    paso: "01",
    titulo: "Análisis de Requerimientos",
    descripcion: "Revisión detallada de especificaciones técnicas, normativas aplicables y alcance del proyecto"
  },
  {
    paso: "02",
    titulo: "Levantamiento de Información",
    descripcion: "Recopilación de datos topográficos, arquitectónicos y estructurales necesarios"
  },
  {
    paso: "03",
    titulo: "Diseño y Dibujo Técnico",
    descripcion: "Elaboración de planos utilizando software especializado y estándares profesionales"
  },
  {
    paso: "04",
    titulo: "Revisión y Verificación",
    descripcion: "Control de calidad exhaustivo y verificación de cumplimiento normativo"
  },
  {
    paso: "05",
    titulo: "Entrega Final",
    descripcion: "Entrega de planos en formatos digitales e impresos con documentación técnica"
  }
]

const softwareUtilizado = [
  "AutoCAD - Dibujo técnico 2D/3D",
  "Civil 3D - Diseño de ingeniería civil",
  "Revit - Modelado BIM arquitectónico",
  "SAP2000 - Análisis estructural",
  "ETABS - Diseño de edificaciones",
  "SketchUp - Modelado 3D",
  "ArcGIS - Sistemas de información geográfica"
]

const ventajas = [
  "Cumplimiento de normas NSR-10 y NTC",
  "Compatibilidad con software BIM",
  "Planos georreferenciados oficialmente",
  "Revisiones ilimitadas incluidas",
  "Entrega en múltiples formatos",
  "Soporte técnico post-entrega",
  "Experiencia en proyectos complejos",
  "Tiempos de entrega optimizados"
]

const aplicaciones = [
  "Proyectos de construcción residencial",
  "Desarrollos urbanísticos",
  "Infraestructura vial",
  "Proyectos industriales",
  "Obras de saneamiento",
  "Estructuras especiales",
  "Remodelaciones y ampliaciones",
  "Proyectos de ingeniería civil"
]

export default function ElaboracionPlanosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center max-w-4xl mx-auto">
            <Badge variant="outline" className="mb-4">
              Diseño Técnico Profesional
            </Badge>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Elaboración de Planos Técnicos
            </h1>
            <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
              Servicios especializados en elaboración de planos topográficos, arquitectónicos y estructurales. 
              Diseño técnico de alta calidad con precisión profesional y cumplimiento normativo.
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
                Diseño Técnico Especializado
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Nuestro equipo de profesionales especializados en diseño técnico elabora 
                  planos topográficos, arquitectónicos y estructurales con la máxima precisión 
                  y calidad, cumpliendo con todas las normativas vigentes.
                </p>
                <p>
                  Utilizamos software de última generación como AutoCAD, Civil 3D y Revit 
                  para garantizar planos técnicos de alta calidad, compatibles con 
                  metodologías BIM y estándares internacionales.
                </p>
                <p>
                  Cada proyecto es desarrollado con atención al detalle, desde el análisis 
                  inicial hasta la entrega final, asegurando que todos los planos cumplan 
                  con los requerimientos técnicos y normativos específicos.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection>
              <div className="relative">
                <img
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20technical%20drawing%20workspace%2C%20AutoCAD%20software%20interface%2C%20architectural%20and%20structural%20plans%2C%20engineering%20blueprints%2C%20technical%20specifications%2C%20professional%20drafting%20tools%2C%20detailed%20construction%20drawings%2C%20modern%20engineering%20office&image_size=landscape_4_3"
                  alt="Elaboración de Planos Técnicos"
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
              Nuestras Especialidades
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Servicios integrales de diseño técnico para todos los tipos de proyectos
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

      {/* Tipos de Planos */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Tipos de Planos que Elaboramos
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Amplia gama de planos técnicos para satisfacer todas las necesidades de su proyecto
            </p>
          </AnimatedSection>
          <div className="grid lg:grid-cols-3 gap-8">
            {tiposPlanos.map((categoria, index) => (
              <AnimatedSection key={index}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-xl text-primary">{categoria.categoria}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {categoria.tipos.map((tipo, tipoIndex) => (
                        <div key={tipoIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{tipo}</span>
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

      {/* Proceso de Elaboración */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Proceso de Elaboración
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Metodología estructurada para garantizar calidad y precisión en cada plano
            </p>
          </AnimatedSection>
          <div className="space-y-8">
            {procesoElaboracion.map((paso, index) => (
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

      {/* Software y Aplicaciones */}
      <section className="py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            <AnimatedSection>
              <h2 className="text-3xl font-bold mb-6">Software Especializado</h2>
              <div className="space-y-3">
                {softwareUtilizado.map((software, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{software}</span>
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

      {/* Ventajas */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Ventajas de Nuestros Servicios
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Calidad profesional y cumplimiento normativo garantizado
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {ventajas.map((ventaja, index) => (
              <AnimatedSection key={index}>
                <div className="p-4 rounded-lg bg-card border text-center hover:shadow-md transition-shadow">
                  <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                  <p className="text-sm font-medium">{ventaja}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Fondo degradado animado */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-purple-700 to-indigo-800">
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute top-0 left-0 w-full h-full">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <AnimatedSection className="text-center text-white">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                ¿Necesitas Planos Técnicos Profesionales?
              </h2>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Obtén planos técnicos de alta precisión elaborados por expertos con más de 15 años de experiencia
              </p>
              
              {/* Botones principales */}
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Button asChild size="lg" className="group bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white border-0 shadow-2xl hover:shadow-green-500/25 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl">
                  <Link href="/cotizacion" className="flex items-center">
                    <MapPin className="mr-3 h-5 w-5" />
                    Solicitar Cotización
                    <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="group bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm shadow-2xl hover:shadow-white/10 transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl">
                  <Link href="/contacto" className="flex items-center">
                    <Phone className="mr-3 h-5 w-5" />
                    Contactar Expertos
                  </Link>
                </Button>
              </div>
              
              {/* Información adicional */}
              <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="flex items-center justify-center gap-3 text-blue-100">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Respuesta en 24h</div>
                    <div className="text-sm opacity-80">Atención inmediata</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 text-blue-100">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">Cotización Gratuita</div>
                    <div className="text-sm opacity-80">Sin compromiso</div>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-3 text-blue-100">
                  <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <Award className="h-6 w-6" />
                  </div>
                  <div className="text-left">
                    <div className="font-semibold">15+ Años</div>
                    <div className="text-sm opacity-80">De experiencia</div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  )
}