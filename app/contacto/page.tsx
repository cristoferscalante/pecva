import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { MapPin, Phone, Mail, Clock, MessageSquare, Send } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contacto | PECVA - Topografía Profesional',
  description: 'Contáctanos para consultas sobre servicios de topografía, batimetría y levantamientos. Atención personalizada y respuesta rápida.',
  keywords: 'contacto topografía, consultas batimetría, servicios topográficos Chile'
}

export default function ContactoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 dark:from-gray-900 dark:to-gray-800">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <MessageSquare className="h-12 w-12 text-blue-600 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Contáctanos
            </h1>
          </div>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
            Estamos aquí para ayudarte con tus proyectos de topografía. 
            Contáctanos y recibe atención personalizada de nuestros expertos.
          </p>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulario de Contacto */}
            <div>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <Send className="h-6 w-6 mr-2 text-blue-600" />
                    Envíanos un Mensaje
                  </CardTitle>
                  <CardDescription>
                    Completa el formulario y te responderemos a la brevedad
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input id="nombre" placeholder="Tu nombre completo" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa</Label>
                      <Input id="empresa" placeholder="Nombre de la empresa" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Correo Electrónico *</Label>
                      <Input id="email" type="email" placeholder="tu@email.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="telefono">Teléfono *</Label>
                      <Input id="telefono" placeholder="+56 9 1234 5678" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="asunto">Asunto</Label>
                    <Input id="asunto" placeholder="Motivo de tu consulta" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="mensaje">Mensaje *</Label>
                    <Textarea 
                      id="mensaje" 
                      placeholder="Describe tu consulta o proyecto en detalle..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg">
                    <Send className="h-5 w-5 mr-2" />
                    Enviar Mensaje
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Te responderemos dentro de 24 horas
                  </p>
                </CardContent>
              </Card>
            </div>

            {/* Información de Contacto */}
            <div className="space-y-6">
              {/* Datos de Contacto */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-green-600" />
                    Información de Contacto
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Teléfono</h3>
                      <p className="text-gray-600">+56 9 1234 5678</p>
                      <p className="text-sm text-gray-500">Llamadas y WhatsApp</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Correo Electrónico</h3>
                      <p className="text-gray-600">contacto@pecva.cl</p>
                      <p className="text-sm text-gray-500">Respuesta en 24 horas</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">Ubicación</h3>
                      <p className="text-gray-600">Santiago, Chile</p>
                      <p className="text-sm text-gray-500">Cobertura nacional</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Horarios de Atención */}
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-green-600" />
                    Horarios de Atención
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Lunes - Viernes</span>
                    <span className="text-gray-600">8:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b">
                    <span className="font-medium">Sábados</span>
                    <span className="text-gray-600">9:00 - 13:00</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="font-medium">Emergencias</span>
                    <span className="text-green-600 font-medium">24/7</span>
                  </div>
                  
                  <div className="mt-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                    <p className="text-sm text-blue-800 dark:text-blue-200">
                      <strong>Nota:</strong> Para proyectos urgentes o emergencias, 
                      estamos disponibles las 24 horas del día.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Botón de Cotización */}
              <Card className="shadow-lg bg-gradient-to-r from-blue-600 to-green-600 text-white">
                <CardContent className="p-6 text-center">
                  <h3 className="text-xl font-bold mb-2">¿Necesitas una Cotización?</h3>
                  <p className="mb-4 opacity-90">
                    Obtén un presupuesto personalizado para tu proyecto
                  </p>
                  <Button 
                    variant="secondary" 
                    className="w-full bg-white text-blue-600 hover:bg-gray-100"
                  >
                    Solicitar Cotización
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Sección de Servicios Rápidos */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
            ¿En qué podemos ayudarte?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Levantamientos Topográficos</h3>
                <p className="text-sm text-gray-600">
                  Mediciones precisas para proyectos de construcción e ingeniería
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Phone className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Consultoría Especializada</h3>
                <p className="text-sm text-gray-600">
                  Asesoría técnica para optimizar tus proyectos topográficos
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6 text-center">
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Servicios de Emergencia</h3>
                <p className="text-sm text-gray-600">
                  Atención 24/7 para proyectos urgentes y situaciones críticas
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}