'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Input } from '@/components/ui/input'
import { MapPin, Calendar, Users, Award, ArrowRight, Eye, Download, Filter, Search, Grid, List, Briefcase } from 'lucide-react'
import { AnimatedSection } from '@/components/ui/animated-section'
import { getAllProyectos, getProyectosByCategoria, getCategorias, getProyectosDestacados, getEstadisticasProyectos, type ProyectoPreview } from '@/services/proyecto-service'

export default function ProyectosPage() {
  const [proyectos, setProyectos] = useState<ProyectoPreview[]>([])
  const [proyectosDestacados, setProyectosDestacados] = useState<ProyectoPreview[]>([])
  const [categorias, setCategorias] = useState<string[]>([])
  const [filtroActivo, setFiltroActivo] = useState('todos')
  const [busqueda, setBusqueda] = useState('')
  const [vistaGrid, setVistaGrid] = useState(true)
  const [proyectosFiltrados, setProyectosFiltrados] = useState<ProyectoPreview[]>([])
  const [loading, setLoading] = useState(true)

  // Cargar datos iniciales
  useEffect(() => {
    const cargarDatos = async () => {
      try {
        setLoading(true)
        const [proyectosData, categoriasData, destacadosData] = await Promise.all([
          getAllProyectos(),
          getCategorias(),
          getProyectosDestacados()
        ])
        
        setProyectos(proyectosData)
        setCategorias(['Todos', ...categoriasData])
        setProyectosDestacados(destacadosData)
        setProyectosFiltrados(proyectosData)
      } catch (error) {
        console.error('Error cargando datos:', error)
      } finally {
        setLoading(false)
      }
    }
    
    cargarDatos()
  }, [])

  // Efecto para filtrar proyectos
  useEffect(() => {
    let filtered = proyectos
    
    // Filtrar por categoría
    if (filtroActivo !== 'todos') {
      filtered = filtered.filter(proyecto => 
        proyecto.frontmatter.categoria.toLowerCase() === filtroActivo.toLowerCase()
      )
    }
    
    // Filtrar por búsqueda
    if (busqueda.trim()) {
      filtered = filtered.filter(proyecto =>
        proyecto.frontmatter.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
        proyecto.frontmatter.descripcion.toLowerCase().includes(busqueda.toLowerCase()) ||
        proyecto.frontmatter.ubicacion.toLowerCase().includes(busqueda.toLowerCase())
      )
    }

    setProyectosFiltrados(filtered)
  }, [filtroActivo, busqueda, proyectos])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 dark:text-gray-400">Cargando proyectos...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 dark:from-gray-900 dark:via-blue-900/10 dark:to-green-900/10">
      {/* Hero Section con Parallax */}
      <AnimatedSection>
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/10 to-green-600/20 dark:from-blue-400/10 dark:via-purple-400/5 dark:to-green-400/10" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.05),transparent_50%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)] dark:bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.05),transparent_50%)]" />
          </div>
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 mb-8">
              <Award className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
              <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Portafolio de Proyectos</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              Nuestros{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-green-600 bg-clip-text text-transparent animate-pulse">
                Proyectos
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Más de 500 proyectos exitosos que respaldan nuestra experiencia y calidad en servicios topográficos
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="group p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Award className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos</div>
              </div>
              <div className="group p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-purple-100 dark:bg-purple-900/30 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <Users className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Clientes</div>
              </div>
              <div className="group p-6 rounded-2xl bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300 hover:scale-105">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <MapPin className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div className="text-2xl font-bold text-gray-900 dark:text-white mb-1">15</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Departamentos</div>
              </div>
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Proyectos Destacados */}
      <AnimatedSection>
        <section className="py-20 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-blue-100 to-green-100 dark:from-blue-900/30 dark:to-green-900/30 mb-6">
                <Award className="h-4 w-4 text-blue-600 dark:text-blue-400 mr-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Proyectos Destacados</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Trabajos{' '}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Representativos
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Conoce algunos de nuestros trabajos más representativos que demuestran nuestra experiencia y calidad
              </p>
            </div>
          
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {proyectosDestacados.map((proyecto, index) => (
                <div key={index} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-green-600/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200/50 dark:border-gray-700/50 group-hover:border-blue-300/50 dark:group-hover:border-blue-600/50 group-hover:scale-105">
                    <div className="relative h-56 overflow-hidden">
                      <Image
                        src={proyecto.frontmatter.imagen}
                        alt={proyecto.frontmatter.titulo}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-4 left-4 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                        {proyecto.frontmatter.categoria}
                      </Badge>
                      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <div className="flex gap-2">
                          <Button size="sm" variant="secondary" className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm hover:bg-white dark:hover:bg-gray-800">
                            <Eye className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {proyecto.frontmatter.titulo}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2 leading-relaxed">
                        {proyecto.frontmatter.descripcion}
                      </p>
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 mr-3">
                            <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <span className="font-medium">{proyecto.frontmatter.ubicacion}</span>
                        </div>
                        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 mr-3">
                            <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="font-medium">{proyecto.frontmatter.fecha}</span>
                        </div>
                      </div>
                      <Button className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white border-0 group-hover:shadow-lg transition-all duration-300">
                        <span>Ver Detalles</span>
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Todos los Proyectos */}
      <AnimatedSection>
        <section className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-green-50/30 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 mb-6">
                <Award className="h-4 w-4 text-gray-600 dark:text-gray-400 mr-2" />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Portafolio Completo</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                Todos los{' '}
                <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">
                  Proyectos
                </span>
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                Explora nuestro portafolio completo de proyectos de ingeniería y construcción
              </p>
            </div>
          
          {/* Controles de Búsqueda y Filtros */}
          <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-gray-200/50 dark:border-gray-700/50 shadow-lg">
            <div className="flex flex-col lg:flex-row gap-6 items-center">
              {/* Búsqueda */}
              <div className="flex-1 w-full lg:max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Buscar proyectos..."
                    value={busqueda}
                    onChange={(e) => setBusqueda(e.target.value)}
                    className="pl-10 pr-4 py-3 w-full bg-white/50 dark:bg-gray-700/50 border-gray-200/50 dark:border-gray-600/50 rounded-xl focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500/50 transition-all duration-300"
                  />
                </div>
              </div>
              
              {/* Vista Toggle */}
              <div className="flex items-center gap-2">
                <Button
                  variant={vistaGrid ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setVistaGrid(true)}
                  className="transition-all duration-300"
                >
                  <Grid className="h-4 w-4" />
                </Button>
                <Button
                  variant={!vistaGrid ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setVistaGrid(false)}
                  className="transition-all duration-300"
                >
                  <List className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            {/* Filtros por Categoría */}
            <div className="flex flex-wrap gap-3 justify-center mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
              {categorias.map((categoria) => {
                const isActive = categoria === 'Todos' 
                  ? filtroActivo === 'todos' 
                  : filtroActivo === categoria.toLowerCase()
                
                const count = categoria === 'Todos' 
                  ? proyectos.length 
                  : proyectos.filter(p => p.frontmatter.categoria === categoria).length;
                
                return (
                  <Button
                    key={categoria}
                    variant={isActive ? 'default' : 'outline'}
                    onClick={() => setFiltroActivo(categoria === 'Todos' ? 'todos' : categoria.toLowerCase())}
                    className={`transition-all duration-300 hover:scale-105 ${
                      isActive
                        ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white border-0' 
                        : ''
                    }`}
                    size="sm"
                  >
                    {categoria === 'Todos' && <Filter className="h-4 w-4 mr-2" />}
                    {categoria} ({count})
                  </Button>
                );
              })}
            </div>
          </div>
          
          {/* Grid de Proyectos */}
          <div className={`grid gap-8 ${vistaGrid ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1'}`}>
            {proyectosFiltrados.length > 0 ? (
              proyectosFiltrados.map((proyecto, index) => (
                <div key={proyecto.slug} className="group relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-green-600/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300 opacity-0 group-hover:opacity-100" />
                  <Card className="relative bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50 group-hover:border-blue-300/50 dark:group-hover:border-blue-600/50 group-hover:scale-105 transition-all duration-500 overflow-hidden shadow-lg hover:shadow-2xl">
                    <div className="relative overflow-hidden">
                      <Image
                        src={proyecto.frontmatter.imagen}
                        alt={proyecto.frontmatter.titulo}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-green-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <Badge className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 text-gray-900 dark:text-white backdrop-blur-sm border border-gray-200/50 dark:border-gray-700/50">
                        {proyecto.frontmatter.categoria}
                      </Badge>
                      <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0">
                        <Badge className="bg-blue-600/90 text-white backdrop-blur-sm">
                          #{index + 1}
                        </Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="text-xl text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300">
                        {proyecto.frontmatter.titulo}
                      </CardTitle>
                      <CardDescription className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {proyecto.frontmatter.descripcion}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="space-y-4">
                      <div className="grid grid-cols-1 gap-3">
                        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30">
                            <MapPin className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          </div>
                          <span className="font-medium">{proyecto.frontmatter.ubicacion}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                          <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30">
                            <Calendar className="h-4 w-4 text-green-600 dark:text-green-400" />
                          </div>
                          <span className="font-medium">{proyecto.frontmatter.fecha}</span>
                        </div>
                      </div>
                      
                      <div className="space-y-2 pt-2 border-t border-gray-200/50 dark:border-gray-700/50">
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Cliente:</span> {proyecto.frontmatter.cliente}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">
                          <span className="font-semibold text-gray-900 dark:text-white">Área:</span> {proyecto.frontmatter.area} | <span className="font-semibold text-gray-900 dark:text-white">Duración:</span> {proyecto.frontmatter.duracion}
                        </div>
                      </div>
                      
                      <div className="flex flex-wrap gap-2 pt-2">
                        {proyecto.frontmatter.servicios.slice(0, 3).map((servicio, index) => (
                          <Badge key={index} variant="secondary" className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
                            {servicio}
                          </Badge>
                        ))}
                        {proyecto.frontmatter.servicios.length > 3 && (
                          <Badge variant="secondary" className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300">
                            +{proyecto.frontmatter.servicios.length - 3} más
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex gap-2 pt-4">
                        <Button size="sm" className="flex-1 bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white border-0 group-hover:shadow-lg transition-all duration-300">
                          <Eye className="mr-2 h-4 w-4" />
                          Ver Detalles
                        </Button>
                        <Button size="sm" variant="outline" className="hover:bg-gray-100 dark:hover:bg-gray-700">
                          <Download className="h-4 w-4" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-16">
                <div className="max-w-md mx-auto">
                  <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                    <Search className="h-12 w-12 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    No se encontraron proyectos
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Intenta ajustar los filtros o términos de búsqueda
                  </p>
                  <Button 
                    onClick={() => {
                      setBusqueda('')
                      setFiltroActivo('todos')
                    }}
                    variant="outline"
                  >
                    Limpiar filtros
                  </Button>
                </div>
              </div>
            )}
          </div>
          </div>
        </section>
      </AnimatedSection>

      {/* Sección de Estadísticas */}
      <AnimatedSection className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-green-600/5 rounded-3xl" />
            <div className="relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-3xl border border-gray-200/50 dark:border-gray-700/50 p-12">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Nuestros Números Hablan
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                  Más de una década de experiencia respaldando cada proyecto
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Briefcase className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">50+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Proyectos Completados</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">15+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Ciudades Atendidas</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Calendar className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">12+</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Años de Experiencia</div>
                </div>
                
                <div className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Eye className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">100%</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">Satisfacción Cliente</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Call to Action */}
      <AnimatedSection className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl blur-3xl opacity-20" />
            <div className="relative bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Tienes un proyecto en mente?
              </h2>
              <p className="text-xl mb-8 text-blue-100">
                Conversemos sobre cómo podemos hacer realidad tu visión con nuestra experiencia en ingeniería civil.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold px-8">
                  Solicitar Cotización
                </Button>
                <Button size="lg" variant="outline" className="border-blue-600 dark:border-white text-blue-600 dark:text-white hover:bg-blue-50 dark:hover:bg-white/10 font-semibold px-8">
                  Ver Más Proyectos
                </Button>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  )
}