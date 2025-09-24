"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react"
import Link from "next/link"

const informacionContacto = [
  {
    icono: Phone,
    titulo: "Teléfono",
    contenido: "+34 965 123 456",
    enlace: "tel:+34965123456",
    descripcion: "Lunes a Viernes 8:00 - 18:00"
  },
  {
    icono: Mail,
    titulo: "Email",
    contenido: "info@pecva.es",
    enlace: "mailto:info@pecva.es",
    descripcion: "Respuesta en 24 horas"
  },
  {
    icono: MapPin,
    titulo: "Oficina Principal",
    contenido: "Valencia, España",
    enlace: "#",
    descripcion: "Calle Topografía 123, 46001"
  },
  {
    icono: Clock,
    titulo: "Horario",
    contenido: "Lun - Vie: 8:00 - 18:00",
    enlace: "#",
    descripcion: "Sábados: 9:00 - 14:00"
  }
]

export function ContactoSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">
            Contacta con Nosotros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ¿Tienes un proyecto en mente? Nuestro equipo de expertos está listo 
            para ayudarte con una solución topográfica personalizada.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Información de contacto */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-8">
              Información de Contacto
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {informacionContacto.map((info, index) => {
                const IconoInfo = info.icono
                return (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-border">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-secondary/10 transition-colors duration-300">
                          <IconoInfo className="h-6 w-6 text-primary group-hover:text-secondary transition-colors duration-300" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-primary mb-1 group-hover:text-secondary transition-colors duration-300">
                            {info.titulo}
                          </h4>
                          {info.enlace !== "#" ? (
                            <Link 
                              href={info.enlace} 
                              className="text-foreground font-medium hover:text-primary transition-colors duration-300"
                            >
                              {info.contenido}
                            </Link>
                          ) : (
                            <div className="text-foreground font-medium">
                              {info.contenido}
                            </div>
                          )}
                          <p className="text-sm text-muted-foreground mt-1">
                            {info.descripcion}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Mapa o información adicional */}
            <Card className="bg-gradient-to-br from-primary to-secondary text-primary-foreground">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold mb-4">
                  Cobertura Nacional
                </h4>
                <p className="text-primary-foreground/80 mb-4">
                  Ofrecemos servicios topográficos en toda España, con equipos 
                  especializados que se desplazan a cualquier ubicación.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Valencia", "Madrid", "Barcelona", "Sevilla", "Bilbao", "Zaragoza"].map((ciudad) => (
                    <span key={ciudad} className="bg-primary-foreground/20 px-3 py-1 rounded-full text-sm">
                      {ciudad}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Formulario de contacto */}
          <div>
            <Card className="shadow-xl border-0">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-primary">
                  Solicita tu Cotización
                </CardTitle>
                <p className="text-muted-foreground">
                  Completa el formulario y te contactaremos en menos de 24 horas 
                  con una propuesta personalizada.
                </p>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Nombre *
                      </label>
                      <Input 
                        placeholder="Tu nombre completo"
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Empresa
                      </label>
                      <Input 
                        placeholder="Nombre de tu empresa"
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Email *
                      </label>
                      <Input 
                        type="email"
                        placeholder="tu@email.com"
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Teléfono *
                      </label>
                      <Input 
                        type="tel"
                        placeholder="+34 600 000 000"
                        className="border-border focus:border-primary focus:ring-primary"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Tipo de Servicio *
                    </label>
                    <select className="w-full p-3 border border-border rounded-md focus:border-primary focus:ring-primary focus:ring-1 bg-background text-foreground">
                      <option value="">Selecciona un servicio</option>
                      <option value="topografia-urbana">Topografía Urbana</option>
                      <option value="batimetria">Batimetría</option>
                      <option value="fotogrametria">Fotogrametría</option>
                      <option value="replanteos">Replanteos</option>
                      <option value="otros">Otros servicios</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Descripción del Proyecto *
                    </label>
                    <Textarea 
                      placeholder="Describe tu proyecto, ubicación, plazos y cualquier detalle relevante..."
                      rows={4}
                      className="border-border focus:border-primary focus:ring-primary resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground font-semibold py-4 rounded-full transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Send className="h-5 w-5" />
                    Enviar Solicitud
                  </Button>
                </form>
                
                <div className="text-center pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    Al enviar este formulario, aceptas nuestros términos y condiciones. 
                    <Link href="/privacidad" className="text-primary hover:underline">
                      Política de privacidad
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}