import { Metadata } from 'next'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'
import { MapPin, Calculator, Clock, Phone, Mail, FileText } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Cotización de Servicios | PECVA - Topografía Profesional',
  description: 'Solicita una cotización personalizada para servicios de topografía, batimetría, levantamientos y más. Respuesta rápida y profesional.',
  keywords: 'cotización topografía, presupuesto levantamiento, precio batimetría, servicios topográficos'
}

const serviciosDisponibles = [
  { id: 'levantamientos-topograficos-planimetricos-altimetricos', nombre: 'Levantamientos Topográficos Planimétricos Y Altimétricos', descripcion: 'Mediciones precisas del terreno con tecnología de vanguardia' },
  { id: 'topografia-con-drones', nombre: 'Topografía Con Drones', descripcion: 'Levantamientos aéreos con tecnología de vanguardia' },
  { id: 'batimetria-diseno-vias-niveles-urbanisticos', nombre: 'Batimetría–Diseño De Vías-Diseño De Niveles Urbanísticos', descripcion: 'Estudios urbanísticos y diseños de vías especializados' },
  { id: 'calculo-volumen-fotogrametria', nombre: 'Cálculo De Volumen–Fotogrametría', descripcion: 'Evaluación volumétrica con imágenes de alta definición' },
  { id: 'elaboracion-planos', nombre: 'Elaboración De Planos Topográficos, Arquitectónicos Y Estructurales', descripcion: 'Creación de planos profesionales con software especializado' },
  { id: 'posicionamiento-gps-magna-sirgas', nombre: 'Posicionamiento De Placas GPS Sistema De Referencia MAGNA SIRGAS', descripcion: 'Sistema oficial de coordenadas geográficas precisas' },
  { id: 'trazado-alcantarillado-acueducto', nombre: 'Trazado De Alcantarillado Y Acueducto', descripcion: 'Diseño técnico de redes de infraestructura hídrica' }
]

const tiposProyecto = [
  'Residencial',
  'Comercial',
  'Industrial',
  'Infraestructura',
  'Minería',
  'Agrícola',
  'Forestal',
  'Otro'
]

const urgenciaOpciones = [
  { valor: 'normal', etiqueta: 'Normal (7-10 días)', precio: 'Precio estándar' },
  { valor: 'urgente', etiqueta: 'Urgente (3-5 días)', precio: '+25%' },
  { valor: 'express', etiqueta: 'Express (1-2 días)', precio: '+50%' }
]

export default function CotizacionPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center mb-6">
            <Calculator className="h-12 w-12 text-primary mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-foreground">
              Solicitar Cotización
            </h1>
          </div>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Obtén un presupuesto personalizado para tus proyectos de topografía. 
            Respuesta profesional en menos de 24 horas.
          </p>
        </div>
      </section>

      {/* Formulario de Cotización */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Formulario Principal */}
            <div className="lg:col-span-2">
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-2xl">
                    <FileText className="h-6 w-6 mr-2 text-primary" />
                    Detalles del Proyecto
                  </CardTitle>
                  <CardDescription>
                    Completa la información para recibir una cotización precisa
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Información Personal */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="nombre">Nombre Completo *</Label>
                      <Input id="nombre" placeholder="Tu nombre completo" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="empresa">Empresa/Organización</Label>
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

                  {/* Detalles del Proyecto */}
                  <div className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="ubicacion">Ubicación del Proyecto *</Label>
                      <Input id="ubicacion" placeholder="Dirección, comuna, región" required />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="area">Área Aproximada (m²)</Label>
                        <Input id="area" type="number" placeholder="1000" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="tipo-proyecto">Tipo de Proyecto</Label>
                        <Select>
                          <SelectTrigger>
                            <SelectValue placeholder="Selecciona el tipo" />
                          </SelectTrigger>
                          <SelectContent>
                            {tiposProyecto.map((tipo) => (
                              <SelectItem key={tipo} value={tipo.toLowerCase()}>
                                {tipo}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="urgencia">Urgencia del Proyecto</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecciona la urgencia" />
                        </SelectTrigger>
                        <SelectContent>
                          {urgenciaOpciones.map((opcion) => (
                            <SelectItem key={opcion.valor} value={opcion.valor}>
                              <div className="flex justify-between w-full">
                                <span>{opcion.etiqueta}</span>
                                <span className="text-sm text-muted-foreground ml-2">{opcion.precio}</span>
                              </div>
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Servicios Requeridos */}
                  <div className="space-y-4">
                    <Label className="text-base font-semibold">Servicios Requeridos *</Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {serviciosDisponibles.map((servicio) => (
                        <div key={servicio.id} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-muted/50">
                          <Checkbox id={servicio.id} className="mt-1" />
                          <div className="flex-1">
                            <Label htmlFor={servicio.id} className="font-medium cursor-pointer">
                              {servicio.nombre}
                            </Label>
                            <p className="text-sm text-muted-foreground">{servicio.descripcion}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Descripción Adicional */}
                  <div className="space-y-2">
                    <Label htmlFor="descripcion">Descripción Adicional del Proyecto</Label>
                    <Textarea 
                      id="descripcion" 
                      placeholder="Describe cualquier detalle específico, requisitos especiales, o información adicional que consideres relevante..."
                      rows={4}
                    />
                  </div>

                  {/* Archivos Adjuntos */}
                  <div className="space-y-2">
                    <Label htmlFor="archivos">Archivos Adjuntos (Planos, imágenes, documentos)</Label>
                    <Input id="archivos" type="file" multiple accept=".pdf,.jpg,.jpeg,.png,.dwg,.dxf" />
                    <p className="text-sm text-muted-foreground">
                      Formatos aceptados: PDF, JPG, PNG, DWG, DXF (máx. 10MB por archivo)
                    </p>
                  </div>

                  {/* Botón de Envío */}
                  <div className="pt-6">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-3 text-lg">
                      Solicitar Cotización
                    </Button>
                    <p className="text-sm text-muted-foreground text-center mt-2">
                      Recibirás una respuesta en tu correo electrónico dentro de 24 horas
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Información Lateral */}
            <div className="space-y-6">
              {/* Información de Contacto */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-green-600" />
                    Contacto Directo
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">+56 9 1234 5678</p>
                      <p className="text-sm text-muted-foreground">Lun - Vie: 8:00 - 18:00</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="h-4 w-4 text-primary" />
                    <div>
                      <p className="font-medium">contacto@pecva.cl</p>
                      <p className="text-sm text-muted-foreground">Respuesta en 24hrs</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-primary mt-1" />
                    <div>
                      <p className="font-medium">Oficina Principal</p>
                      <p className="text-sm text-muted-foreground">Santiago, Chile</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Tiempos de Respuesta */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2 text-blue-600" />
                    Tiempos de Entrega
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm">Cotización</span>
                    <span className="text-sm font-medium">24 horas</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Proyecto estándar</span>
                    <span className="text-sm font-medium">7-10 días</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Proyecto urgente</span>
                    <span className="text-sm font-medium">3-5 días</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Proyecto express</span>
                    <span className="text-sm font-medium">1-2 días</span>
                  </div>
                </CardContent>
              </Card>

              {/* Información Adicional */}
              <Card>
                <CardHeader>
                  <CardTitle>¿Necesitas Ayuda?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    Si tienes dudas sobre qué servicios necesitas o cómo completar el formulario, 
                    no dudes en contactarnos.
                  </p>
                  <Button variant="outline" className="w-full">
                    Hablar con un Experto
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}