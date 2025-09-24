import { Metadata } from 'next'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Award, Users, Calendar, MapPin, Target, Zap, Mail, Phone } from 'lucide-react'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sobre Nosotros - PECVA | Historia y Equipo Profesional',
  description: 'Conoce la historia de PECVA, nuestro equipo de profesionales en topografía y las certificaciones que nos respaldan. Más de 15 años de experiencia en servicios topográficos.',
  keywords: ['sobre PECVA', 'historia topografía', 'equipo profesional', 'certificaciones topográficas', 'empresa topografía'],
}

const equipoMiembros = [
  {
    nombre: 'Ing. Carlos Mendoza',
    cargo: 'Director General',
    especialidad: 'Topografía e Ingeniería Civil',
    experiencia: '20 años',
    imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20civil%20engineer%20portrait%2C%20middle%20aged%20man%20with%20hard%20hat%2C%20construction%20background%2C%20confident%20expression&image_size=portrait_4_3',
    descripcion: 'Especialista en proyectos de gran escala con certificación internacional en topografía de precisión.'
  },
  {
    nombre: 'Ing. María González',
    cargo: 'Jefa de Operaciones',
    especialidad: 'Fotogrametría y Cartografía',
    experiencia: '15 años',
    imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20surveyor%20portrait%2C%20woman%20engineer%20with%20surveying%20equipment%2C%20outdoor%20construction%20site&image_size=portrait_4_3',
    descripcion: 'Experta en tecnologías de medición avanzada y procesamiento de datos geoespaciales.'
  },
  {
    nombre: 'Tec. Roberto Silva',
    cargo: 'Especialista en Campo',
    especialidad: 'Batimetría y Topografía Urbana',
    experiencia: '12 años',
    imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=surveyor%20technician%20portrait%2C%20man%20with%20theodolite%20equipment%2C%20professional%20field%20work%20attire&image_size=portrait_4_3',
    descripcion: 'Técnico especializado en mediciones de precisión y levantamientos topográficos complejos.'
  }
]

const certificaciones = [
  {
    nombre: 'ISO 9001:2015',
    descripcion: 'Sistema de Gestión de Calidad',
    año: '2020',
    icono: Award
  },
  {
    nombre: 'Colegio de Ingenieros',
    descripcion: 'Registro Profesional Vigente',
    año: '2008',
    icono: Users
  },
  {
    nombre: 'Certificación GPS/GNSS',
    descripcion: 'Tecnología de Posicionamiento Satelital',
    año: '2019',
    icono: Target
  },
  {
    nombre: 'Drone Pilot License',
    descripcion: 'Operación de Drones para Fotogrametría',
    año: '2021',
    icono: Zap
  }
]

const hitos = [
  {
    año: '2008',
    evento: 'Fundación de PECVA',
    descripcion: 'Inicio de operaciones con enfoque en topografía urbana y rural.'
  },
  {
    año: '2012',
    evento: 'Expansión de Servicios',
    descripcion: 'Incorporación de batimetría y fotogrametría con drones.'
  },
  {
    año: '2018',
    evento: 'Certificación ISO 9001',
    descripcion: 'Implementación de sistema de gestión de calidad internacional.'
  },
  {
    año: '2023',
    evento: 'Tecnología Avanzada',
    descripcion: 'Adopción de equipos láser 3D y procesamiento en la nube.'
  }
]

export default function SobreNosotrosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Sobre
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto leading-relaxed">
            Más de 15 años brindando servicios profesionales de topografía con precisión, 
            tecnología avanzada y compromiso con la excelencia.
          </p>
        </div>
      </section>

      {/* Historia Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Nuestra <span className="text-primary">Historia</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  PECVA nació en 2008 con la visión de revolucionar los servicios topográficos 
                  en el país, combinando la experiencia tradicional con las tecnologías más avanzadas 
                  del mercado.
                </p>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Desde nuestros inicios, nos hemos especializado en brindar mediciones de precisión 
                  milimétrica para proyectos de construcción, ingeniería civil y desarrollo urbano.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Hoy somos reconocidos como líderes en el sector, habiendo participado en más de 
                  500 proyectos exitosos a nivel nacional.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=surveying%20team%20working%20with%20modern%20equipment%2C%20construction%20site%20background%2C%20professional%20topography%20work&image_size=landscape_4_3"
                  alt="Equipo PECVA trabajando en campo"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Timeline */}
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-center mb-8">Hitos Importantes</h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {hitos.map((hito, index) => (
                  <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                        <Calendar className="h-8 w-8 text-primary-foreground" />
                      </div>
                      <CardTitle className="text-primary text-2xl">{hito.año}</CardTitle>
                      <CardDescription className="font-semibold text-lg">{hito.evento}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">{hito.descripcion}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipo Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Nuestro <span className="text-primary">Equipo</span>
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {equipoMiembros.map((miembro, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <Image
                      src={miembro.imagen}
                      alt={miembro.nombre}
                      fill
                      className="rounded-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{miembro.nombre}</CardTitle>
                  <CardDescription className="text-primary font-semibold">{miembro.cargo}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Badge variant="secondary" className="mb-2">{miembro.especialidad}</Badge>
                  <p className="text-sm text-muted-foreground flex items-center justify-center gap-2">
                    <Calendar className="h-4 w-4" />
                    {miembro.experiencia} de experiencia
                  </p>
                  <p className="text-sm text-muted-foreground">{miembro.descripcion}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certificaciones Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Certificaciones y <span className="text-primary">Reconocimientos</span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {certificaciones.map((cert, index) => {
              const IconComponent = cert.icono
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconComponent className="h-8 w-8 text-secondary-foreground" />
                    </div>
                    <CardTitle className="text-lg">{cert.nombre}</CardTitle>
                    <CardDescription>{cert.descripcion}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="outline">Desde {cert.año}</Badge>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            <span className="text-primary">Contáctanos</span>
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Email Card */}
            <Card className="text-center hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-8 w-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl mb-2">Email de Soporte</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="mailto:soporte@topografiapecva.com" 
                  className="text-primary hover:text-primary/80 font-semibold text-lg transition-colors"
                >
                  soporte@topografiapecva.com
                </a>
                <p className="text-muted-foreground mt-2">
                  Escríbenos para consultas técnicas y cotizaciones
                </p>
              </CardContent>
            </Card>

            {/* WhatsApp Card */}
            <Card className="text-center hover:shadow-lg transition-shadow group">
              <CardHeader>
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <CardTitle className="text-xl mb-2">WhatsApp</CardTitle>
              </CardHeader>
              <CardContent>
                <a 
                  href="tel:+573226219982" 
                  className="text-green-600 hover:text-green-500 font-semibold text-lg transition-colors"
                >
                  +57 322 621 9982
                </a>
                <p className="text-muted-foreground mt-2">
                  Atención inmediata por WhatsApp
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary/80">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para trabajar con nosotros?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Contáctanos hoy mismo y descubre por qué somos la opción preferida 
            para servicios topográficos profesionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Link href="/cotizacion">
                Solicitar Cotización
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              <Link href="/contacto">
                Contactar Ahora
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}