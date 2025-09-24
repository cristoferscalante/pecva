'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { MapPin, Calendar, Users, Award, ArrowRight, Eye, Download } from 'lucide-react'

const proyectos = [
  {
    id: 1,
    titulo: 'Urbanización Villa del Río',
    descripcion: 'Levantamiento topográfico completo para desarrollo urbanístico de 150 hectáreas',
    categoria: 'Urbano',
    ubicacion: 'Bogotá, Cundinamarca',
    fecha: '2024',
    cliente: 'Constructora Andina S.A.',
    area: '150 hectáreas',
    duracion: '45 días',
    imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=aerial%20view%20of%20large%20residential%20development%20construction%20site%2C%20urban%20planning%2C%20surveying%20work%2C%20modern%20housing%20project&image_size=landscape_4_3',
    servicios: ['Topografía Urbana', 'Fotogrametría', 'Replanteos'],
    destacado: true
  },
  {
    id: 2,
    titulo: 'Embalse La Esperanza',
    descripcion: 'Estudio batimétrico completo para evaluación de capacidad de almacenamiento',
    categoria: 'Hidrografía',
    ubicacion: 'Boyacá',
    fecha: '2024',
    cliente: 'CAR Cundinamarca',
    area: '2.5 km²',
    duracion: '30 días',
    imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=large%20reservoir%20with%20survey%20boat%20conducting%20bathymetric%20measurements%2C%20water%20depth%20mapping%2C%20professional%20hydrographic%20survey&image_size=landscape_4_3',
    servicios: ['Batimetría', 'Topografía'],
    destacado: true
  },
  {
    id: 3,
    titulo: 'Centro Comercial Metropolitano',
    descripcion: 'Levantamiento arquitectónico y replanteo para ampliación de centro comercial',
    categoria: 'Arquitectónico',
    ubicacion: 'Medellín, Antioquia',
    fecha: '2023',
    cliente: 'Grupo Inmobiliario del Norte',
    area: '25.000 m²',
    duracion: '20 días',
    imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=modern%20shopping%20mall%20construction%20site%20with%20surveying%20equipment%2C%20architectural%20measurements%2C%20commercial%20building%20project&image_size=landscape_4_3',
    servicios: ['Levantamientos Arquitectónicos', 'Replanteos'],
    destacado: false
  },
  {
    id: 4,
    titulo: 'Vía Alterna Zipaquirá',
    descripción: 'Levantamiento topográfico para diseño de vía alterna de 12 km',
    categoria: 'Infraestructura',
    ubicacion: 'Zipaquirá, Cundinamarca',
    fecha: '2023',
    cliente: 'INVÍAS',
    area: '12 km lineales',
    duracion: '60 días',
    imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=highway%20construction%20surveying%2C%20road%20infrastructure%20project%2C%20topographic%20measurements%20for%20road%20design%2C%20engineering%20survey&image_size=landscape_4_3',
    servicios: ['Topografía', 'Fotogrametría'],
    destacado: false
  },
  {
    id: 5,
    titulo: 'Parque Industrial Sabana',
    descripcion: 'Desarrollo topográfico integral para parque industrial de 200 hectáreas',
    categoria: 'Industrial',
    ubicacion: 'Funza, Cundinamarca',
    fecha: '2023',
    cliente: 'Desarrollo Industrial S.A.S.',
    area: '200 hectáreas',
    duracion: '90 días',
    imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=large%20industrial%20park%20development%20site%2C%20surveying%20for%20industrial%20construction%2C%20warehouse%20and%20factory%20planning&image_size=landscape_4_3',
    servicios: ['Topografía Urbana', 'Replanteos', 'Fotogrametría'],
    destacado: true
  },
  {
    id: 6,
    titulo: 'Conjunto Residencial Los Pinos',
    descripcion: 'Levantamiento predial y replanteo para conjunto residencial de 80 unidades',
    categoria: 'Residencial',
    ubicacion: 'Chía, Cundinamarca',
    fecha: '2022',
    cliente: 'Constructora Habitat',
    area: '15 hectáreas',
    duracion: '25 días',
    imagen: 'https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=residential%20housing%20development%20construction%2C%20surveying%20for%20residential%20complex%2C%20modern%20housing%20units%20planning&image_size=landscape_4_3',
    servicios: ['Estudios Prediales', 'Replanteos'],
    destacado: false
  }
]

const categorias = ['Todos', 'Urbano', 'Hidrografía', 'Arquitectónico', 'Infraestructura', 'Industrial', 'Residencial']

export default function ProyectosPage() {
  const [categoriaActiva, setCategoriaActiva] = useState('Todos')
  
  const proyectosFiltrados = categoriaActiva === 'Todos' 
    ? proyectos 
    : proyectos.filter(proyecto => proyecto.categoria === categoriaActiva)
  
  const proyectosDestacados = proyectos.filter(proyecto => proyecto.destacado)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white py-20">
        <div className="absolute inset-0 bg-black/20" />
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nuestros <span className="text-secondary-400">Proyectos</span>
            </h1>
            <p className="text-xl md:text-2xl text-primary-100 mb-8">
              Más de 500 proyectos exitosos que respaldan nuestra experiencia y calidad en servicios topográficos
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-secondary-400" />
                <span>+500 Proyectos</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-secondary-400" />
                <span>+200 Clientes</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-secondary-400" />
                <span>15 Departamentos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Proyectos Destacados */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Algunos de nuestros proyectos más representativos que demuestran nuestra capacidad técnica
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {proyectosDestacados.slice(0, 2).map((proyecto) => (
              <Card key={proyecto.id} className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg overflow-hidden">
                <div className="relative overflow-hidden">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-secondary-500 text-white">
                      Destacado
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-white/90 text-primary-700">
                      {proyecto.categoria}
                    </Badge>
                  </div>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-2xl text-primary-700">{proyecto.titulo}</CardTitle>
                  <CardDescription className="text-gray-600 text-base">
                    {proyecto.descripcion}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary-600" />
                      <span>{proyecto.ubicacion}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary-600" />
                      <span>{proyecto.fecha}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">
                      <strong>Cliente:</strong> {proyecto.cliente}
                    </div>
                    <div className="text-sm text-gray-600">
                      <strong>Área:</strong> {proyecto.area} | <strong>Duración:</strong> {proyecto.duracion}
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {proyecto.servicios.map((servicio, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {servicio}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2 pt-4">
                    <Button size="sm" className="bg-primary-600 hover:bg-primary-700">
                      <Eye className="mr-2 h-4 w-4" />
                      Ver Detalles
                    </Button>
                    <Button size="sm" variant="outline">
                      <Download className="mr-2 h-4 w-4" />
                      Descargar
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Todos los Proyectos */}
      <section className="py-20 bg-gray-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Todos Nuestros Proyectos
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore nuestra amplia experiencia en diferentes tipos de proyectos topográficos
            </p>
          </div>
          
          {/* Filtros */}
          <Tabs value={categoriaActiva} onValueChange={setCategoriaActiva} className="mb-12">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-7 mb-8">
              {categorias.map((categoria) => (
                <TabsTrigger key={categoria} value={categoria} className="text-xs lg:text-sm">
                  {categoria}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
          
          {/* Grid de Proyectos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectosFiltrados.map((proyecto) => (
              <Card key={proyecto.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={proyecto.imagen}
                    alt={proyecto.titulo}
                    width={400}
                    height={250}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-primary-600 text-white">
                      {proyecto.categoria}
                    </Badge>
                  </div>
                  {proyecto.destacado && (
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-secondary-500 text-white">
                        Destacado
                      </Badge>
                    </div>
                  )}
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg text-primary-700">{proyecto.titulo}</CardTitle>
                  <CardDescription className="text-gray-600 text-sm">
                    {proyecto.descripcion}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-3">
                  <div className="space-y-1 text-sm">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-primary-600" />
                      <span>{proyecto.ubicacion}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-primary-600" />
                      <span>{proyecto.fecha}</span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-gray-600">
                    <div><strong>Área:</strong> {proyecto.area}</div>
                    <div><strong>Duración:</strong> {proyecto.duracion}</div>
                  </div>
                  
                  <div className="flex flex-wrap gap-1">
                    {proyecto.servicios.slice(0, 2).map((servicio, index) => (
                      <Badge key={index} variant="secondary" className="text-xs">
                        {servicio}
                      </Badge>
                    ))}
                    {proyecto.servicios.length > 2 && (
                      <Badge variant="secondary" className="text-xs">
                        +{proyecto.servicios.length - 2}
                      </Badge>
                    )}
                  </div>
                  
                  <Button size="sm" className="w-full bg-primary-600 hover:bg-primary-700">
                    Ver Proyecto
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Estadísticas */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { numero: '500+', label: 'Proyectos Completados' },
              { numero: '200+', label: 'Clientes Satisfechos' },
              { numero: '15', label: 'Departamentos' },
              { numero: '15+', label: 'Años de Experiencia' }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl md:text-4xl font-bold text-secondary-400 mb-2">
                  {stat.numero}
                </div>
                <div className="text-primary-100">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
            ¿Tiene un proyecto en mente?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Permítanos ser parte de su próximo proyecto exitoso. Contáctenos para una consulta gratuita.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-600 hover:bg-primary-700">
              <Link href="/cotizacion">
                Solicitar Cotización
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
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