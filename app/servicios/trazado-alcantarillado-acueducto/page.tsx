import { Metadata } from 'next'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle, Phone, Mail, Target, Zap, Shield, Award, MapPin, Droplets, Wrench, FileText, Clock, Settings } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Trazado de Alcantarillado y Acueducto | PECVA - Servicios de Ingeniería',
  description: 'Servicios especializados en trazado y diseño de sistemas de alcantarillado y acueducto. Proyectos de infraestructura hidráulica con tecnología avanzada y cumplimiento normativo.',
  keywords: 'trazado alcantarillado, diseño acueducto, infraestructura hidráulica, sistemas sanitarios, ingeniería hidráulica, PECVA',
}

export default function TrazadoAlcantarilladoAcueductoPage() {
  const caracteristicas = [
    {
      icon: <Droplets className="h-6 w-6" />,
      titulo: "Diseño Hidráulico Integral",
      descripcion: "Cálculos hidráulicos completos para sistemas de distribución y recolección de aguas"
    },
    {
      icon: <Settings className="h-6 w-6" />,
      titulo: "Tecnología Especializada",
      descripcion: "Uso de software especializado para modelado y simulación de sistemas hidráulicos"
    },
    {
      icon: <Target className="h-6 w-6" />,
      titulo: "Precisión en Trazados",
      descripcion: "Trazados precisos con consideración de topografía y condiciones del terreno"
    },
    {
      icon: <Shield className="h-6 w-6" />,
      titulo: "Cumplimiento Normativo",
      descripcion: "Diseños que cumplen con normativas RAS, NTC y regulaciones locales"
    }
  ]

  const tiposServicios = [
    "Trazado de redes de alcantarillado sanitario",
    "Diseño de sistemas de acueducto",
    "Trazado de alcantarillado pluvial",
    "Diseño de plantas de tratamiento",
    "Sistemas de bombeo y estaciones elevadoras",
    "Redes de distribución domiciliaria",
    "Conexiones domiciliarias",
    "Sistemas de almacenamiento"
  ]

  const procesoTrabajo = [
    {
      paso: "01",
      titulo: "Estudio Preliminar",
      descripcion: "Análisis de la zona, población objetivo y demanda hídrica"
    },
    {
      paso: "02",
      titulo: "Levantamiento Topográfico",
      descripcion: "Relevamiento detallado del terreno y infraestructura existente"
    },
    {
      paso: "03",
      titulo: "Diseño Hidráulico",
      descripcion: "Cálculos de caudales, diámetros y pendientes óptimas"
    },
    {
      paso: "04",
      titulo: "Trazado de Redes",
      descripcion: "Definición de rutas y ubicación de elementos del sistema"
    },
    {
      paso: "05",
      titulo: "Planos y Especificaciones",
      descripcion: "Elaboración de planos técnicos y especificaciones constructivas"
    },
    {
      paso: "06",
      titulo: "Presupuesto y Cronograma",
      descripcion: "Estimación de costos y programación de actividades"
    }
  ]

  const ventajas = [
    "Optimización de recursos hídricos",
    "Reducción de costos de construcción",
    "Sistemas eficientes y sostenibles",
    "Cumplimiento de normativas vigentes",
    "Facilidad de mantenimiento",
    "Adaptabilidad a crecimiento urbano"
  ]

  const productosEntregables = [
    "Planos de trazado de redes",
    "Memorias de cálculo hidráulico",
    "Especificaciones técnicas",
    "Presupuesto detallado",
    "Cronograma de ejecución",
    "Manual de operación y mantenimiento"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 dark:from-blue-400/5 dark:to-green-400/5" />
        <div className="relative max-w-7xl mx-auto text-center">
          <Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
            Infraestructura Hidráulica
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Trazado de Alcantarillado
            <span className="block text-blue-600 dark:text-blue-400">y Acueducto</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Diseño y trazado especializado de sistemas de alcantarillado y acueducto con tecnología avanzada 
            y cumplimiento de normativas técnicas para proyectos de infraestructura hidráulica.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="/cotizacion" className="flex items-center">
                Solicitar Cotización
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline">
              <Link href="/contacto" className="flex items-center">
                <Phone className="mr-2 h-5 w-5" />
                Contactar Especialista
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Descripción Detallada */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Sistemas de Infraestructura Hidráulica Integral
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Nuestro servicio de trazado de alcantarillado y acueducto abarca el diseño completo de sistemas 
                de infraestructura hidráulica, desde la captación y distribución de agua potable hasta la 
                recolección y tratamiento de aguas residuales.
              </p>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Utilizamos tecnología de punta y metodologías especializadas para garantizar sistemas eficientes, 
                sostenibles y que cumplan con todas las normativas técnicas vigentes, optimizando recursos y 
                minimizando impactos ambientales.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {ventajas.slice(0, 4).map((ventaja, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span className="text-sm text-gray-600 dark:text-gray-300">{ventaja}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Professional%20hydraulic%20infrastructure%20design%20with%20water%20pipes%20and%20sewage%20systems%2C%20technical%20blueprints%2C%20engineering%20precision%2C%20modern%20water%20treatment%20facilities%2C%20clean%20technical%20style&image_size=landscape_4_3"
                alt="Trazado de Alcantarillado y Acueducto"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Características */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Características de Nuestro Servicio
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Ofrecemos soluciones integrales en diseño de sistemas hidráulicos con los más altos estándares de calidad.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {caracteristicas.map((caracteristica, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400 rounded-lg mb-4">
                    {caracteristica.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                    {caracteristica.titulo}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {caracteristica.descripcion}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Servicios */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Tipos de Servicios
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Cubrimos todos los aspectos del diseño y trazado de sistemas hidráulicos urbanos y rurales.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tiposServicios.map((servicio, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 dark:bg-blue-400 rounded-full flex-shrink-0" />
                    <span className="text-sm text-gray-700 dark:text-gray-300">{servicio}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Proceso de Trabajo */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
              Proceso de Trabajo
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Metodología estructurada que garantiza resultados óptimos en cada proyecto.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {procesoTrabajo.map((proceso, index) => (
              <Card key={index} className="relative hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-600 dark:bg-blue-500 text-white rounded-lg flex items-center justify-center font-bold text-lg mr-4">
                      {proceso.paso}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                      {proceso.titulo}
                    </h3>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {proceso.descripcion}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Productos Entregables */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                Productos Entregables
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Reciba documentación técnica completa y detallada para la ejecución exitosa de su proyecto.
              </p>
              <div className="space-y-4">
                {productosEntregables.map((producto, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{producto}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=Technical%20blueprints%20and%20engineering%20documents%20for%20water%20systems%2C%20detailed%20hydraulic%20calculations%2C%20professional%20technical%20drawings%2C%20clean%20engineering%20style&image_size=landscape_4_3"
                alt="Productos Entregables"
                className="rounded-lg shadow-2xl w-full h-auto"
              />
            </div>
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
              ¿Necesita Diseño de Sistemas Hidráulicos?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto leading-relaxed">
              Contáctenos para obtener una cotización personalizada para su proyecto de infraestructura hidráulica con tecnología de vanguardia.
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