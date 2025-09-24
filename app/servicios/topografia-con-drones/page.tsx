import { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { AnimatedSection } from "@/components/ui/animated-section"
import { ArrowRight, CheckCircle, Phone, Mail, Target, Zap, Shield, Award, Clock, MapPin, Camera, Ruler, FileText, Plane } from "lucide-react"

export const metadata: Metadata = {
  title: "Topografía Con Drones | PECVA",
  description: "Servicios de topografía con drones de última generación. Levantamientos aéreos precisos, rápidos y económicos para sus proyectos.",
  keywords: "topografía con drones, levantamientos aéreos, fotogrametría aérea, mapeo con drones, PECVA",
}

export default function TopografiaDronesPage() {
  const caracteristicas = [
    "Levantamientos aéreos de alta precisión",
    "Cobertura de grandes extensiones en poco tiempo",
    "Acceso a zonas de difícil alcance",
    "Generación de ortofoto y modelos 3D",
    "Menor costo que métodos tradicionales",
    "Entrega rápida de resultados"
  ]

  const proceso = [
    {
      paso: 1,
      titulo: "Planificación del vuelo",
      descripcion: "Diseño de la ruta de vuelo y configuración de parámetros según las necesidades del proyecto."
    },
    {
      paso: 2,
      titulo: "Establecimiento de puntos de control",
      descripcion: "Colocación de puntos de apoyo geodésicos para georreferenciar las imágenes."
    },
    {
      paso: 3,
      titulo: "Ejecución del vuelo",
      descripcion: "Captura de imágenes aéreas siguiendo el plan de vuelo establecido."
    },
    {
      paso: 4,
      titulo: "Procesamiento fotogramétrico",
      descripcion: "Procesamiento de imágenes para generar ortofoto, nubes de puntos y modelos 3D."
    },
    {
      paso: 5,
      titulo: "Generación de productos",
      descripcion: "Creación de planos topográficos, curvas de nivel y modelos digitales del terreno."
    },
    {
      paso: 6,
      titulo: "Entrega de resultados",
      descripcion: "Entrega de productos finales en formatos digitales y análogos según requerimientos."
    }
  ]

  const ventajas = [
    "Reducción significativa de tiempos de campo",
    "Mayor seguridad para el personal técnico",
    "Precisión comparable a métodos tradicionales",
    "Capacidad de repetir levantamientos fácilmente",
    "Documentación visual completa del área",
    "Costos competitivos para grandes áreas"
  ]

  const aplicaciones = [
    "Levantamientos topográficos de grandes extensiones",
    "Monitoreo de obras y avance de construcción",
    "Cálculo de volúmenes de materiales",
    "Inspección de infraestructura",
    "Mapeo de zonas inaccesibles",
    "Estudios ambientales y de impacto"
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-500/10 via-blue-500/5 to-background py-24 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-6">
              <Badge variant="outline" className="w-fit bg-blue-50 text-blue-700 border-blue-200">
                Tecnología Avanzada
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
                Topografía
                <span className="text-blue-600 block">
                  Con Drones
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Revolucionamos los levantamientos topográficos con tecnología de drones, 
                ofreciendo mayor precisión, rapidez y seguridad en la captura de datos 
                geoespaciales para sus proyectos.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="text-lg px-8 bg-blue-600 hover:bg-blue-700">
                  <Link href="/cotizacion">
                    <Plane className="mr-2 h-5 w-5" />
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
            </AnimatedSection>
            <AnimatedSection className="relative">
              <Image
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20drone%20flying%20over%20construction%20site%2C%20aerial%20surveying%2C%20topographic%20mapping%2C%20quadcopter%20with%20camera%2C%20modern%20technology%2C%20blue%20sky%20background%2C%20technical%20photography&image_size=landscape_4_3"
                alt="Drone realizando levantamiento topográfico"
                width={600}
                height={450}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Descripción del Servicio */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">
                ¿Qué es la Topografía con Drones?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  La topografía con drones es una técnica moderna que utiliza vehículos aéreos 
                  no tripulados (UAV) equipados con cámaras de alta resolución y sensores 
                  especializados para capturar datos geoespaciales desde el aire.
                </p>
                <p>
                  Esta tecnología permite realizar levantamientos topográficos de manera más 
                  eficiente, segura y económica, especialmente en áreas extensas o de difícil acceso.
                </p>
                <p>
                  Los datos capturados se procesan mediante técnicas de fotogrametría para generar 
                  ortofoto, modelos digitales del terreno, nubes de puntos y planos topográficos 
                  con alta precisión.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold">Aplicaciones Principales</h3>
              <div className="grid gap-4">
                {aplicaciones.map((aplicacion, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
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
              Utilizamos drones de última generación y software especializado para garantizar 
              resultados precisos y confiables.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caracteristicas.map((caracteristica, index) => (
              <Card key={index} className="h-full border-blue-100">
                <CardContent className="p-6">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-1 flex-shrink-0" />
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
              Seguimos un protocolo riguroso que combina planificación detallada, 
              tecnología avanzada y procesamiento especializado.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {proceso.map((item, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
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

      {/* Ventajas */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <Image
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Aerial%20view%20from%20drone%20showing%20topographic%20survey%20results%2C%20orthophoto%20map%2C%203D%20terrain%20model%2C%20contour%20lines%2C%20digital%20mapping%2C%20technical%20visualization&image_size=landscape_4_3"
                alt="Vista aérea y resultados de topografía con drones"
                width={600}
                height={450}
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Ventajas de la Topografía con Drones</h2>
              <p className="text-xl text-muted-foreground">
                La tecnología de drones ofrece múltiples beneficios que revolucionan 
                la forma tradicional de realizar levantamientos topográficos.
              </p>
              <div className="space-y-4">
                {ventajas.map((ventaja, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="font-medium">{ventaja}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Productos Entregables */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Productos Entregables</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Ofrecemos una amplia gama de productos digitales derivados del procesamiento 
              de las imágenes aéreas capturadas.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                titulo: "Ortofoto",
                descripcion: "Imagen aérea corregida geométricamente con alta resolución",
                icono: Camera
              },
              {
                titulo: "Modelo 3D",
                descripcion: "Representación tridimensional del terreno y estructuras",
                icono: MapPin
              },
              {
                titulo: "Curvas de Nivel",
                descripcion: "Representación topográfica con intervalos personalizados",
                icono: MapPin
              },
              {
                titulo: "Nube de Puntos",
                descripcion: "Conjunto de puntos 3D con coordenadas precisas",
                icono: MapPin
              }
            ].map((producto, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <div className="mx-auto w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <producto.icono className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-lg">{producto.titulo}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {producto.descripcion}
                  </CardDescription>
                </CardContent>
              </Card>
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
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              ¿Listo para Revolucionar sus Levantamientos?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Descubra las ventajas de la topografía con drones. Tecnología de vanguardia para resultados excepcionales.
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
        </div>
      </section>
    </div>
  )
}