"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Marquee } from "@/components/ui/marquee"
import { MapPin, Ruler, Camera, Mountain, Calculator, FileText, Navigation, Wrench } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const servicios = [
  {
    id: 1,
    slug: "levantamientos-topograficos",
    titulo: "Levantamientos Topográficos Planimétricos Y Altimétricos",
    descripcion: "Utilizamos tecnología de vanguardia como estaciones totales y receptores GPS de doble frecuencia para obtener mediciones precisas del terreno en coordenadas planimétricas y altimétricas.",
    icono: MapPin,
    imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=surveyor%20using%20total%20station%20and%20GPS%20equipment%20for%20planimetric%20altimetric%20measurements%2C%20professional%20topographic%20survey&image_size=square_hd",
    caracteristicas: ["Estaciones totales", "GPS doble frecuencia", "Mapas detallados"]
  },
  {
    id: 2,
    slug: "topografia-con-drones",
    titulo: "Topografía Con Drones",
    descripcion: "Levantamientos topográficos con drones equipados con cámaras y sensores de alta resolución para generar modelos digitales del terreno de mayor calidad y precisión.",
    icono: Camera,
    imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20drone%20with%20high%20resolution%20camera%20and%20sensors%20for%20topographic%20surveying%2C%20aerial%20mapping%20technology&image_size=square_hd",
    caracteristicas: ["Drones profesionales", "Sensores alta resolución", "Modelos digitales 3D"]
  },
  {
    id: 3,
    slug: "batimetria-diseno-vias",
    titulo: "Batimetría–Diseño De Vías-Diseño De Niveles Urbanísticos",
    descripcion: "Acompañamiento técnico y profesional en estudios urbanísticos, diseños de vías e hidrología con enfoque personalizado para cada proyecto de intervención.",
    icono: Mountain,
    imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=bathymetric%20survey%20and%20urban%20planning%20design%2C%20road%20design%20and%20hydraulic%20engineering%2C%20professional%20technical%20work&image_size=square_hd",
    caracteristicas: ["Estudios urbanísticos", "Diseño de vías", "Análisis hidrológico"]
  },
  {
    id: 4,
    slug: "calculo-volumen-fotogrametria",
    titulo: "Cálculo De Volumen–Fotogrametría",
    descripcion: "Servicio de fotogrametría para evaluar y definir con alta precisión las características y dimensiones de objetos o áreas utilizando imágenes de alta definición.",
    icono: Calculator,
    imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=photogrammetry%20volume%20calculation%20with%20high%20definition%20images%2C%203D%20modeling%20and%20precise%20measurements&image_size=square_hd",
    caracteristicas: ["Imágenes alta definición", "Modelos tridimensionales", "Cálculos volumétricos"]
  },
  {
    id: 5,
    slug: "elaboracion-planos",
    titulo: "Elaboración De Planos Topográficos, Arquitectónicos Y Estructurales",
    descripcion: "Creación de planos profesionales estandarizados utilizando software de alto nivel, entregados en formato digital y físico con presentación impecable.",
    icono: FileText,
    imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20architectural%20and%20structural%20plans%20creation%2C%20CAD%20software%20technical%20drawing%2C%20engineering%20documentation&image_size=square_hd",
    caracteristicas: ["Software especializado", "Formato digital y físico", "Estándares profesionales"]
  },
  {
    id: 6,
    slug: "posicionamiento-gps-magna-sirgas",
    titulo: "Posicionamiento De Placas GPS Sistema De Referencia MAGNA SIRGAS",
    descripcion: "Sistema de referencia oficial del país que garantiza precisión y coherencia de coordenadas geográficas a través de técnicas de posicionamiento estandarizadas.",
    icono: Navigation,
    imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=GPS%20positioning%20system%20MAGNA%20SIRGAS%20reference%20plates%2C%20official%20coordinate%20system%20surveying%20equipment&image_size=square_hd",
    caracteristicas: ["Sistema oficial nacional", "Coordenadas precisas", "Técnicas estandarizadas"]
  },
  {
    id: 7,
    slug: "trazado-alcantarillado-acueducto",
    titulo: "Trazado De Alcantarillado Y Acueducto",
    descripcion: "Acompañamiento técnico y profesional en el trazo de redes de alcantarillado y acueducto cumpliendo con los más altos estándares profesionales.",
    icono: Wrench,
    imagen: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=sewer%20and%20aqueduct%20network%20layout%20design%2C%20professional%20technical%20assistance%20infrastructure%20planning&image_size=square_hd",
    caracteristicas: ["Redes de alcantarillado", "Sistemas de acueducto", "Estándares profesionales"]
  }
]

export function ServiciosDestacadosSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Nuestros Servicios Especializados
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ofrecemos una amplia gama de servicios topográficos con la más alta precisión 
            y tecnología avanzada para satisfacer las necesidades de tu proyecto.
          </p>
        </div>

        {/* Carrusel de servicios */}
        <div className="relative flex w-full flex-col items-center justify-center overflow-hidden mb-12">
          <Marquee pauseOnHover className="[--duration:30s]">
            {servicios.slice(0, Math.ceil(servicios.length / 2)).map((servicio) => {
              const IconoServicio = servicio.icono
              return (
                <Card key={servicio.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg flex flex-col h-full w-80 mx-4">
                  <CardHeader className="text-center pb-4">
                    {/* Imagen del servicio */}
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={servicio.imagen}
                        alt={servicio.titulo}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300" />
                    </div>
                    
                    {/* Icono */}
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors duration-300">
                      <IconoServicio className="h-8 w-8 text-primary-foreground" />
                    </div>
                    
                    <CardTitle className="text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                      {servicio.titulo}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center flex flex-col flex-1">
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {servicio.descripcion}
                    </CardDescription>
                    
                    {/* Características */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {servicio.caracteristicas.slice(0, 3).map((caracteristica, index) => (
                        <li key={index} className="text-sm text-muted-foreground/80 flex items-center justify-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          {caracteristica}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:border-secondary group-hover:text-secondary group-hover:hover:bg-secondary group-hover:hover:text-secondary-foreground transition-all duration-300 mt-auto"
                    >
                      <Link href={`/servicios/${servicio.slug}`}>
                        Ver Detalles
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </Marquee>
          
          <Marquee reverse pauseOnHover className="[--duration:30s]">
            {servicios.slice(Math.ceil(servicios.length / 2)).map((servicio) => {
              const IconoServicio = servicio.icono
              return (
                <Card key={servicio.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg flex flex-col h-full w-80 mx-4">
                  <CardHeader className="text-center pb-4">
                    {/* Imagen del servicio */}
                    <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
                      <Image
                        src={servicio.imagen}
                        alt={servicio.titulo}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-primary/20 group-hover:bg-primary/10 transition-colors duration-300" />
                    </div>
                    
                    {/* Icono */}
                    <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-secondary transition-colors duration-300">
                      <IconoServicio className="h-8 w-8 text-primary-foreground" />
                    </div>
                    
                    <CardTitle className="text-lg font-bold text-primary group-hover:text-secondary transition-colors duration-300 line-clamp-2">
                      {servicio.titulo}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="text-center flex flex-col flex-1">
                    <CardDescription className="text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                      {servicio.descripcion}
                    </CardDescription>
                    
                    {/* Características */}
                    <ul className="space-y-2 mb-6 flex-1">
                      {servicio.caracteristicas.slice(0, 3).map((caracteristica, index) => (
                        <li key={index} className="text-sm text-muted-foreground/80 flex items-center justify-center gap-2">
                          <div className="w-1.5 h-1.5 bg-secondary rounded-full" />
                          {caracteristica}
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      asChild 
                      variant="outline" 
                      className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground group-hover:border-secondary group-hover:text-secondary group-hover:hover:bg-secondary group-hover:hover:text-secondary-foreground transition-all duration-300 mt-auto"
                    >
                      <Link href={`/servicios/${servicio.slug}`}>
                        Ver Detalles
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </Marquee>
          
          {/* Gradientes de fade */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-muted/50"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-muted/50"></div>
        </div>

        {/* CTA para ver todos los servicios */}
        <div className="text-center">
          <Button 
            asChild 
            size="lg" 
            className="bg-secondary hover:bg-secondary/90 text-secondary-foreground px-8 py-4 text-lg font-semibold rounded-full"
          >
            <Link href="/servicios">
              Ver Todos los Servicios
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}