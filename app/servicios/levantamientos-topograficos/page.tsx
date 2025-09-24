import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { ArrowRight, CheckCircle, Phone, Mail, Target, Zap, Shield, Award, Clock, MapPin } from "lucide-react"

export const metadata: Metadata = {
  title: "Levantamientos Topográficos Planimétricos Y Altimétricos | PECVA",
  description: "Servicios profesionales de levantamientos topográficos planimétricos y altimétricos con tecnología de última generación. Precisión garantizada para sus proyectos.",
  keywords: "levantamientos topográficos, planimetría, altimetría, topografía, medición terrenos, PECVA",
}

export default function LevantamientosTopograficosPage() {
  const caracteristicas = [
    "Medición precisa de coordenadas horizontales y verticales",
    "Uso de estaciones totales y GPS de alta precisión",
    "Elaboración de planos detallados",
    "Cálculo de áreas y perímetros",
    "Determinación de cotas y niveles",
    "Entrega en formatos CAD y PDF"
  ]

  const proceso = [
    {
      paso: 1,
      titulo: "Reconocimiento del terreno",
      descripcion: "Visita técnica para evaluar las condiciones del sitio y planificar el levantamiento."
    },
    {
      paso: 2,
      titulo: "Establecimiento de puntos de control",
      descripcion: "Colocación de referencias geodésicas para garantizar la precisión del levantamiento."
    },
    {
      paso: 3,
      titulo: "Medición planimétrica",
      descripcion: "Determinación de coordenadas horizontales de todos los puntos relevantes del terreno."
    },
    {
      paso: 4,
      titulo: "Medición altimétrica",
      descripcion: "Determinación de las cotas y elevaciones del terreno mediante nivelación."
    },
    {
      paso: 5,
      titulo: "Procesamiento de datos",
      descripcion: "Análisis y procesamiento de la información recopilada en campo."
    },
    {
      paso: 6,
      titulo: "Elaboración de planos",
      descripcion: "Creación de planos topográficos detallados con curvas de nivel y elementos relevantes."
    }
  ]

  const beneficios = [
    "Precisión milimétrica en las mediciones",
    "Cumplimiento de normativas técnicas vigentes",
    "Entrega rápida de resultados",
    "Soporte técnico especializado",
    "Equipos de última tecnología",
    "Personal certificado y experimentado"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-primary/5 to-background py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <Badge variant="outline" className="w-fit">
                Servicio Especializado
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Levantamientos Topográficos
                <span className="text-primary block">
                  Planimétricos Y Altimétricos
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Realizamos levantamientos topográficos completos con la más alta precisión, 
                combinando mediciones planimétricas y altimétricas para brindar información 
                detallada y confiable de su terreno.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8">
                  <Link href="/cotizacion">
                    <Phone className="mr-2 h-5 w-5" />
                    Solicitar Cotización
                  </Link>
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8" asChild>
                  <Link href="/contacto">
                    <Mail className="mr-2 h-5 w-5" />
                    Más Información
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <Image
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20surveyor%20using%20total%20station%20equipment%20for%20topographic%20survey%2C%20measuring%20land%20coordinates%2C%20construction%20site%20background%2C%20high%20precision%20instruments%2C%20technical%20photography%20style&image_size=landscape_4_3"
                alt="Levantamiento topográfico con estación total"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Descripción Detallada */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                ¿Qué son los Levantamientos Topográficos?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Los levantamientos topográficos planimétricos y altimétricos son procedimientos 
                  técnicos que permiten determinar con precisión la posición horizontal y vertical 
                  de puntos sobre la superficie terrestre.
                </p>
                <p>
                  La <strong>planimetría</strong> se encarga de medir y representar las coordenadas 
                  horizontales (X, Y) de los elementos del terreno, mientras que la <strong>altimetría</strong> 
                  determina las elevaciones o cotas (Z) de dichos puntos.
                </p>
                <p>
                  Esta información es fundamental para el diseño de proyectos de construcción, 
                  urbanización, infraestructura vial, y cualquier desarrollo que requiera 
                  conocimiento preciso del terreno.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Aplicaciones Principales</h3>
              <div className="grid gap-4">
                {[
                  "Proyectos de construcción residencial y comercial",
                  "Diseño de infraestructura vial y urbana",
                  "Estudios de factibilidad para desarrollos",
                  "Delimitación y amojonamiento de predios",
                  "Cálculos de movimientos de tierra",
                  "Diseño de sistemas de drenaje"
                ].map((aplicacion, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{aplicacion}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Características de Nuestro Servicio</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Utilizamos tecnología de vanguardia y metodologías probadas para garantizar 
              la máxima precisión en cada levantamiento.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caracteristicas.map((caracteristica, index) => (
              <Card key={index} className="h-full">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                    <span className="font-medium">{caracteristica}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Nuestro Proceso de Trabajo</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Seguimos un proceso estructurado y sistemático para garantizar resultados 
              precisos y confiables en cada proyecto.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proceso.map((item, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                      {item.paso}
                    </div>
                    <CardTitle className="text-lg">{item.titulo}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {item.descripcion}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beneficios */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Modern%20surveying%20equipment%20GPS%20and%20total%20station%2C%20topographic%20maps%20and%20technical%20drawings%2C%20professional%20surveying%20tools%2C%20precision%20instruments%2C%20clean%20technical%20style&image_size=landscape_4_3"
                alt="Equipos de topografía modernos"
                width={600}
                height={450}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">¿Por Qué Elegir PECVA?</h2>
              <p className="text-xl text-muted-foreground">
                Nos distinguimos por nuestra experiencia, tecnología avanzada y 
                compromiso con la excelencia en cada proyecto.
              </p>
              <div className="space-y-4">
                {beneficios.map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>
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
                ¿Necesita un Levantamiento Topográfico?
              </h2>
              <p className="text-xl lg:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
                Obtenga mediciones precisas con tecnología de vanguardia y más de 15 años de experiencia
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