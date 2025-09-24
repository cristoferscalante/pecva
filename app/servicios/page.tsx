import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Clock, Users, Award, ArrowRight, CheckCircle, Eye, Phone } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Servicios de Topografía | PECVA - Profesionales en Topografía',
  description: 'Servicios profesionales de topografía, batimetría, fotogrametría y replanteos. Más de 15 años de experiencia en proyectos topográficos en toda Colombia.',
  keywords: 'servicios topografía, batimetría, fotogrametría, replanteos, topografía urbana, levantamientos topográficos, Colombia',
  openGraph: {
    title: 'Servicios de Topografía | PECVA',
    description: 'Servicios profesionales de topografía con tecnología de vanguardia',
    images: ['/logosy-1.png.webp'],
  },
}

const servicios = [
  {
    id: 1,
    titulo: "Levantamientos Topográficos Planimétricos Y Altimétricos",
    descripcion: "Utilizamos tecnología de vanguardia como estaciones totales y receptores GPS de doble frecuencia para obtener mediciones precisas del terreno en coordenadas planimétricas y altimétricas.",
    imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=surveyor%20using%20total%20station%20and%20GPS%20equipment%20for%20planimetric%20altimetric%20measurements%2C%20professional%20topographic%20survey&image_size=square_hd",
    caracteristicas: ["Estaciones totales", "GPS doble frecuencia", "Mapas detallados"],
    categoria: "Topografía",
    slug: "levantamientos-topograficos"
  },
  {
    id: 2,
    titulo: "Topografía Con Drones",
    descripcion: "Levantamientos topográficos con drones equipados con cámaras y sensores de alta resolución para generar modelos digitales del terreno de mayor calidad y precisión.",
    imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20drone%20with%20high%20resolution%20camera%20and%20sensors%20for%20topographic%20surveying%2C%20aerial%20mapping%20technology&image_size=square_hd",
    caracteristicas: ["Drones profesionales", "Sensores alta resolución", "Modelos digitales 3D"],
    categoria: "Aéreo",
    slug: "topografia-con-drones"
  },
  {
    id: 3,
    titulo: "Batimetría–Diseño De Vías-Diseño De Niveles Urbanísticos",
    descripcion: "Acompañamiento técnico y profesional en estudios urbanísticos, diseños de vías e hidrología con enfoque personalizado para cada proyecto de intervención.",
    imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=bathymetric%20survey%20and%20urban%20planning%20design%2C%20road%20design%20and%20hydraulic%20engineering%2C%20professional%20technical%20work&image_size=square_hd",
    caracteristicas: ["Estudios urbanísticos", "Diseño de vías", "Análisis hidrológico"],
    categoria: "Urbanismo",
    slug: "batimetria-diseno-vias"
  },
  {
    id: 4,
    titulo: "Cálculo De Volumen–Fotogrametría",
    descripcion: "Servicio de fotogrametría para evaluar y definir con alta precisión las características y dimensiones de objetos o áreas utilizando imágenes de alta definición.",
    imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=photogrammetry%20volume%20calculation%20with%20high%20definition%20images%2C%203D%20modeling%20and%20precise%20measurements&image_size=square_hd",
    caracteristicas: ["Imágenes alta definición", "Modelos tridimensionales", "Cálculos volumétricos"],
    categoria: "Fotogrametría",
    slug: "calculo-volumen-fotogrametria"
  },
  {
    id: 5,
    titulo: "Elaboración De Planos Topográficos, Arquitectónicos Y Estructurales",
    descripcion: "Creación de planos profesionales estandarizados utilizando software de alto nivel, entregados en formato digital y físico con presentación impecable.",
    imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20architectural%20and%20structural%20plans%20creation%2C%20CAD%20software%20technical%20drawing%2C%20engineering%20documentation&image_size=square_hd",
    caracteristicas: ["Software especializado", "Formato digital y físico", "Estándares profesionales"],
    categoria: "Planos",
    slug: "elaboracion-planos"
  },
  {
    id: 6,
    titulo: "Posicionamiento De Placas GPS Sistema De Referencia MAGNA SIRGAS",
    descripcion: "Sistema de referencia oficial del país que garantiza precisión y coherencia de coordenadas geográficas a través de técnicas de posicionamiento estandarizadas.",
    imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=GPS%20positioning%20system%20MAGNA%20SIRGAS%20reference%20plates%2C%20official%20coordinate%20system%20surveying%20equipment&image_size=square_hd",
    caracteristicas: ["Sistema oficial nacional", "Coordenadas precisas", "Técnicas estandarizadas"],
    categoria: "GPS",
    slug: "posicionamiento-gps-magna-sirgas"
  },
  {
    id: 7,
    titulo: "Trazado De Alcantarillado Y Acueducto",
    descripcion: "Acompañamiento técnico y profesional en el trazo de redes de alcantarillado y acueducto cumpliendo con los más altos estándares profesionales.",
    imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=sewer%20and%20aqueduct%20network%20layout%20design%2C%20professional%20technical%20assistance%20infrastructure%20planning&image_size=square_hd",
    caracteristicas: ["Redes de alcantarillado", "Sistemas de acueducto", "Estándares profesionales"],
    categoria: "Infraestructura",
    slug: "trazado-alcantarillado-acueducto"
  }
]

const categorias = ['Todos', 'Urbano', 'Hidrografía', 'Aéreo', 'Construcción', 'Arquitectónico', 'Legal']

export default function ServiciosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/80 text-primary-foreground py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestros <span className="text-secondary">Servicios</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-foreground/80 mb-8">
              Soluciones topográficas integrales con tecnología de vanguardia y más de 15 años de experiencia
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary" />
                <span>Certificados IGAC</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary" />
                <span>+500 Proyectos</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary" />
                <span>Cobertura Nacional</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicios.map((servicio) => (
              <Card key={servicio.id} className="h-full flex flex-col group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={servicio.imagen}
                    alt={servicio.titulo}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-secondary text-secondary-foreground">
                      {servicio.categoria}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl text-primary">{servicio.titulo}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {servicio.descripcion}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col">
                  <div className="space-y-2 flex-1">
                    {servicio.caracteristicas.map((caracteristica, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span>{caracteristica}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t mt-auto">
                    <div className="flex gap-2">
                      <Button asChild variant="outline" className="flex-1">
                        <Link href={`/servicios/${servicio.slug}`}>
                          Ver Detalles
                          <Eye className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                      <Button asChild className="flex-1 bg-primary hover:bg-primary/90">
                        <Link href="/cotizacion">
                          Cotizar
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-20 bg-muted/50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Nuestro Proceso de Trabajo
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Metodología probada que garantiza resultados precisos y entregas oportunas
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                paso: '01',
                titulo: 'Consulta Inicial',
                descripcion: 'Evaluamos sus necesidades y definimos el alcance del proyecto'
              },
              {
                paso: '02',
                titulo: 'Planificación',
                descripcion: 'Diseñamos la metodología y programamos las actividades de campo'
              },
              {
                paso: '03',
                titulo: 'Trabajo de Campo',
                descripcion: 'Ejecutamos los levantamientos con equipos de última tecnología'
              },
              {
                paso: '04',
                titulo: 'Entrega',
                descripcion: 'Procesamos datos y entregamos productos finales certificados'
              }
            ].map((proceso, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {proceso.paso}
                </div>
                <h3 className="text-xl font-semibold text-primary mb-2">{proceso.titulo}</h3>
                <p className="text-muted-foreground">{proceso.descripcion}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/90 via-transparent to-green-500/20" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.3),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.2),transparent_50%)]" />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/5 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-24 h-24 bg-green-400/10 rounded-full blur-xl animate-pulse" />
        </div>

        <div className="container relative z-10 text-center">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
            ¿Listo para iniciar su proyecto?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-3xl mx-auto leading-relaxed">
            Contáctenos hoy mismo y reciba una cotización personalizada para su proyecto topográfico
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
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
              variant="outline" 
              className="group bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white hover:bg-white hover:text-blue-700 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-4 text-lg font-semibold rounded-xl"
            >
              <Link href="/contacto" className="flex items-center">
                <Phone className="mr-3 h-5 w-5" />
                Contactar Ahora
              </Link>
            </Button>
          </div>
          
          {/* Additional info */}
          <div className="mt-12 flex flex-col sm:flex-row gap-8 justify-center items-center text-blue-100">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Respuesta en 24 horas</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Cotización gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">15+ años de experiencia</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}