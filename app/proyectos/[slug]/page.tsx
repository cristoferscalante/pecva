'use client'

import { useState, useEffect, use } from 'react'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ArrowLeft, MapPin, Calendar, Users, Briefcase, Clock, Award, Download, Share2, Eye, ChevronLeft, ChevronRight } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/animated-section'
import { getProyectoPorSlug, getAllProyectos, type ProyectoPreview } from '@/services/proyecto-service'

interface ProyectoPageProps {
  params: Promise<{
    slug: string
  }>
}

export default function ProyectoPage({ params }: ProyectoPageProps) {
  const resolvedParams = use(params)
  const [proyecto, setProyecto] = useState<any>(null)
  const [proyectosRelacionados, setProyectosRelacionados] = useState<ProyectoPreview[]>([])
  const [loading, setLoading] = useState(true)
  const [imagenActual, setImagenActual] = useState(0)

  useEffect(() => {
    const cargarProyecto = async () => {
      try {
        setLoading(true)
        const proyectoData = await getProyectoPorSlug(resolvedParams.slug)
        
        if (!proyectoData) {
          notFound()
          return
        }

        setProyecto(proyectoData)

        // Cargar proyectos relacionados (misma categoría)
        const todosProyectos = await getAllProyectos()
        const relacionados = todosProyectos
          .filter(p => 
            p.frontmatter.categoria === proyectoData.frontmatter.categoria && 
            p.slug !== resolvedParams.slug
          )
          .slice(0, 3)
        
        setProyectosRelacionados(relacionados)
      } catch (error) {
        console.error('Error cargando proyecto:', error)
        notFound()
      } finally {
        setLoading(false)
      }
    }

    cargarProyecto()
  }, [resolvedParams.slug])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Cargando proyecto...</p>
        </div>
      </div>
    )
  }

  if (!proyecto) {
    notFound()
  }

  const imagenes = [
    proyecto.frontmatter.imagen,
    // Agregar más imágenes si están disponibles en el frontmatter
    ...(proyecto.frontmatter.galeria || [])
  ]

  const siguienteImagen = () => {
    setImagenActual((prev) => (prev + 1) % imagenes.length)
  }

  const imagenAnterior = () => {
    setImagenActual((prev) => (prev - 1 + imagenes.length) % imagenes.length)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-green-900/10">
      {/* Navegación */}
      <div className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200/50 dark:border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link href="/proyectos">
              <Button variant="ghost" className="group">
                <ArrowLeft className="h-4 w-4 mr-2 group-hover:-translate-x-1 transition-transform duration-200" />
                Volver a Proyectos
              </Button>
            </Link>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                Compartir
              </Button>
              <Button variant="outline" size="sm">
                <Download className="h-4 w-4 mr-2" />
                Descargar
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <AnimatedSection>
        <section className="relative py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-purple-600/5 to-green-600/10 dark:from-blue-400/5 dark:via-purple-400/3 dark:to-green-400/5" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Información del proyecto */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <Badge className="bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700">
                    {proyecto.frontmatter.categoria}
                  </Badge>
                  {proyecto.frontmatter.destacado && (
                    <Badge className="bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 border-yellow-200 dark:border-yellow-700">
                      <Award className="h-3 w-3 mr-1" />
                      Destacado
                    </Badge>
                  )}
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
                  {proyecto.frontmatter.titulo}
                </h1>
                <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  {proyecto.frontmatter.descripcion}
                </p>
                
                {/* Información clave */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 mr-4">
                      <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Ubicación</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{proyecto.frontmatter.ubicacion}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 mr-4">
                      <Calendar className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Fecha</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{proyecto.frontmatter.fecha}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 mr-4">
                      <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Cliente</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{proyecto.frontmatter.cliente}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-orange-100 dark:bg-orange-900/30 mr-4">
                      <Clock className="h-6 w-6 text-orange-600 dark:text-orange-400" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-500 dark:text-gray-400">Duración</div>
                      <div className="font-semibold text-gray-900 dark:text-white">{proyecto.frontmatter.duracion}</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Galería de imágenes */}
              <div className="relative">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src={imagenes[imagenActual]}
                    alt={proyecto.frontmatter.titulo}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                  
                  {/* Controles de navegación */}
                  {imagenes.length > 1 && (
                    <>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
                        onClick={imagenAnterior}
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="secondary"
                        size="sm"
                        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm"
                        onClick={siguienteImagen}
                      >
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                      
                      {/* Indicadores */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                        {imagenes.map((_, index) => (
                          <button
                            key={index}
                            className={`w-2 h-2 rounded-full transition-all duration-200 ${
                              index === imagenActual 
                                ? 'bg-white scale-125' 
                                : 'bg-white/50 hover:bg-white/75'
                            }`}
                            onClick={() => setImagenActual(index)}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Contenido del proyecto */}
      <AnimatedSection>
        <section className="py-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <div dangerouslySetInnerHTML={{ __html: proyecto.content }} />
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Información técnica */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Información Técnica
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Briefcase className="h-5 w-5 mr-2 text-blue-600 dark:text-blue-400" />
                    Área del Proyecto
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{proyecto.frontmatter.area}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-green-600 dark:text-green-400" />
                    Duración
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">{proyecto.frontmatter.duracion}</p>
                </CardContent>
              </Card>
              
              <Card className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 mr-2 text-purple-600 dark:text-purple-400" />
                    Servicios
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {proyecto.frontmatter.servicios.map((servicio: string, index: number) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {servicio}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Proyectos relacionados */}
      {proyectosRelacionados.length > 0 && (
        <AnimatedSection>
          <section className="py-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
                Proyectos Relacionados
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {proyectosRelacionados.map((proyectoRel, index) => (
                  <Link key={index} href={`/proyectos/${proyectoRel.slug}`}>
                    <Card className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
                      <div className="relative h-48 overflow-hidden rounded-t-lg">
                        <Image
                          src={proyectoRel.frontmatter.imagen}
                          alt={proyectoRel.frontmatter.titulo}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        <Badge className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm">
                          {proyectoRel.frontmatter.categoria}
                        </Badge>
                      </div>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                          {proyectoRel.frontmatter.titulo}
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 text-sm line-clamp-2 mb-4">
                          {proyectoRel.frontmatter.descripcion}
                        </p>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <MapPin className="h-4 w-4 mr-1" />
                          {proyectoRel.frontmatter.ubicacion}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* CTA Section */}
      <AnimatedSection>
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                ¿Tienes un proyecto similar?
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Contáctanos para discutir cómo podemos ayudarte con tu proyecto
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contacto">
                  <Button size="lg" variant="secondary" className="bg-white text-blue-600 hover:bg-gray-100">
                    Solicitar Cotización
                  </Button>
                </Link>
                <Link href="/proyectos">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Ver Más Proyectos
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>
    </div>
  )
}