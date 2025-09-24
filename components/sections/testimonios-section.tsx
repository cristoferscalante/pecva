"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import Image from "next/image"

const testimonios = [
  {
    id: 1,
    nombre: "Carlos Mendoza",
    cargo: "Director de Proyectos",
    empresa: "Constructora Mediterránea",
    testimonio: "PECVA ha sido nuestro socio estratégico en más de 20 proyectos. Su precisión y profesionalismo son excepcionales. Los planos topográficos siempre llegan a tiempo y con la calidad que necesitamos.",
    rating: 5,
    avatar: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20construction%20director%20portrait%2C%20middle%20aged%20man%20in%20business%20suit%2C%20confident%20smile&image_size=square",
    proyecto: "Urbanización Las Colinas"
  },
  {
    id: 2,
    nombre: "María González",
    cargo: "Arquitecta Principal",
    empresa: "Estudio AG Arquitectos",
    testimonio: "La fotogrametría con drones que realizaron para nuestro proyecto fue impresionante. Los modelos 3D nos permitieron optimizar el diseño y reducir costos significativamente.",
    rating: 5,
    avatar: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20female%20architect%20portrait%2C%20confident%20woman%20in%20business%20attire%2C%20warm%20smile&image_size=square",
    proyecto: "Centro Comercial Valencia"
  },
  {
    id: 3,
    nombre: "Roberto Silva",
    cargo: "Ingeniero Civil",
    empresa: "Infraestructuras del Sur",
    testimonio: "Los estudios batimétricos para nuestro puerto deportivo fueron realizados con una precisión extraordinaria. El equipo de PECVA demostró gran conocimiento técnico y experiencia.",
    rating: 5,
    avatar: "https://trae-api-us.mchost.guru/api/ide/v1/text_to_image?prompt=professional%20civil%20engineer%20portrait%2C%20mature%20man%20with%20hard%20hat%2C%20engineering%20background&image_size=square",
    proyecto: "Puerto Deportivo Almería"
  }
]

const empresasClientes = [
  "Constructora Mediterránea",
  "Grupo Inmobiliario Valencia",
  "Infraestructuras del Sur",
  "Estudio AG Arquitectos",
  "Ingeniería y Proyectos SA",
  "Desarrollos Urbanos Madrid"
]

export function TestimoniosSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Lo Que Dicen Nuestros Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            La confianza de constructoras, arquitectos e ingenieros respalda 
            nuestro compromiso con la excelencia en cada proyecto.
          </p>
        </div>

        {/* Grid de testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonios.map((testimonio) => (
            <Card key={testimonio.id} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg bg-card">
              <CardContent className="p-8">
                {/* Quote icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:bg-secondary/10 transition-colors duration-300">
                  <Quote className="h-6 w-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                </div>
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonio.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                  ))}
                </div>
                
                {/* Testimonio */}
                <blockquote className="text-foreground mb-6 leading-relaxed italic">
                  "{testimonio.testimonio}"
                </blockquote>
                
                {/* Proyecto */}
                <div className="text-sm text-secondary font-medium mb-4">
                  Proyecto: {testimonio.proyecto}
                </div>
                
                {/* Autor */}
                <div className="flex items-center gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden">
                    <Image
                      src={testimonio.avatar}
                      alt={testimonio.nombre}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="font-semibold text-primary group-hover:text-secondary transition-colors duration-300">
                      {testimonio.nombre}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonio.cargo}
                    </div>
                    <div className="text-sm text-muted-foreground/80">
                      {testimonio.empresa}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>



        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-2xl p-8 text-primary-foreground">
            <h3 className="text-2xl font-bold mb-4">
              ¿Listo para tu Próximo Proyecto?
            </h3>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Únete a más de 200 clientes satisfechos que han confiado en PECVA 
              para sus proyectos topográficos más importantes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-secondary text-secondary-foreground px-8 py-3 rounded-full font-semibold hover:bg-secondary/90 transition-colors duration-300">
                Solicitar Cotización
              </button>
              <button className="border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-full font-semibold hover:bg-primary-foreground hover:text-primary transition-all duration-300">
                Ver Proyectos
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}