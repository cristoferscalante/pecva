"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Building, MapPin, Users } from "lucide-react"

const estadisticas = [
  {
    numero: "500+",
    titulo: "Proyectos Completados",
    descripcion: "Proyectos topográficos exitosos en toda España",
    icono: Building,
    color: "text-primary"
  },
  {
    numero: "15+",
    titulo: "Años de Experiencia",
    descripcion: "Trayectoria consolidada en el sector",
    icono: Award,
    color: "text-secondary"
  },
  {
    numero: "50+",
    titulo: "Ciudades Atendidas",
    descripcion: "Cobertura nacional con presencia local",
    icono: MapPin,
    color: "text-primary"
  },
  {
    numero: "200+",
    titulo: "Clientes Satisfechos",
    descripcion: "Constructoras, arquitectos e ingenieros",
    icono: Users,
    color: "text-secondary"
  }
]

export function StatsTopografiaSection() {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">
            Nuestra Trayectoria en Números
          </h2>
          <p className="text-xl text-primary-foreground/80 max-w-3xl mx-auto">
            Más de una década ofreciendo servicios topográficos de excelencia, 
            respaldados por la confianza de nuestros clientes.
          </p>
        </div>

        {/* Grid de estadísticas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {estadisticas.map((stat, index) => {
            const IconoStat = stat.icono
            return (
              <Card key={index} className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/20 hover:bg-primary-foreground/20 transition-all duration-300 group">
                <CardContent className="p-8 text-center">
                  {/* Icono */}
                  <div className="w-16 h-16 bg-primary-foreground/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-secondary transition-colors duration-300">
                    <IconoStat className="h-8 w-8 text-primary-foreground" />
                  </div>
                  
                  {/* Número */}
                  <div className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2 group-hover:text-secondary-foreground transition-colors duration-300">
                    {stat.numero}
                  </div>
                  
                  {/* Título */}
                  <h3 className="text-xl font-semibold text-primary-foreground mb-2 group-hover:text-secondary-foreground transition-colors duration-300">
                    {stat.titulo}
                  </h3>
                  
                  {/* Descripción */}
                  <p className="text-primary-foreground/80 text-sm leading-relaxed group-hover:text-primary-foreground transition-colors duration-300">
                    {stat.descripcion}
                  </p>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Certificaciones y reconocimientos */}
        <div className="mt-16 text-center">
          <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">
              Certificaciones y Reconocimientos
            </h3>
            <div className="flex flex-wrap justify-center gap-8 items-center">
              <div className="text-primary-foreground/80">
                <div className="font-semibold">ISO 9001:2015</div>
                <div className="text-sm">Gestión de Calidad</div>
              </div>
              <div className="text-primary-foreground/80">
                <div className="font-semibold">Colegio Oficial</div>
                <div className="text-sm">Ingenieros Técnicos</div>
              </div>
              <div className="text-primary-foreground/80">
                <div className="font-semibold">AENOR</div>
                <div className="text-sm">Certificación Técnica</div>
              </div>
              <div className="text-primary-foreground/80">
                <div className="font-semibold">Registro Mercantil</div>
                <div className="text-sm">Empresa Autorizada</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}