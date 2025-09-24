import Link from "next/link"
import Image from "next/image"
import { Heart, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-background/95 backdrop-blur-sm">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center group">
              <Image 
                src="/logosy-1.png.webp" 
                alt="PECVA Logo" 
                width={70} 
                height={70} 
                className="h-auto w-[70px] transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(255,255,255,0.8)] dark:drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]"
              />
            </Link>
            <p className="text-sm text-muted-foreground">
              Servicios profesionales de topografía, mediciones precisas y soluciones geoespaciales para todo Chile.
            </p>
            
            {/* Información de contacto */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Phone className="h-4 w-4" />
                <span>+56 9 1234 5678</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <Mail className="h-4 w-4" />
                <span>contacto@pecva.cl</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>Santiago, Chile</span>
              </div>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="/servicios" className="text-muted-foreground hover:text-foreground transition-colors">
                  Servicios
                </Link>
              </li>
              <li>
                <Link href="/proyectos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="/sobre-nosotros" className="text-muted-foreground hover:text-foreground transition-colors">
                  Sobre Nosotros
                </Link>
              </li>
              <li>
                <Link href="/cotizacion" className="text-muted-foreground hover:text-foreground transition-colors">
                  Cotización
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Servicios */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/servicios/levantamientos-topograficos" className="text-muted-foreground hover:text-foreground transition-colors">
                  Levantamientos Topográficos
                </Link>
              </li>
              <li>
                <Link href="/servicios/batimetria-diseno-vias" className="text-muted-foreground hover:text-foreground transition-colors">Batimetría y Diseño de Vías</Link>
              </li>
              <li>
                <Link href="/servicios/calculo-volumen-fotogrametria" className="text-muted-foreground hover:text-foreground transition-colors">Cálculo de Volumen</Link>
              </li>
              <li>
                <Link href="/servicios/elaboracion-planos" className="text-muted-foreground hover:text-foreground transition-colors">Elaboración de Planos</Link>
              </li>
              <li>
                <Link href="/servicios/topografia-con-drones" className="text-muted-foreground hover:text-foreground transition-colors">Topografía con Drones</Link>
              </li>
            </ul>
          </div>

          {/* Contacto y Horarios */}
          <div>
            <h3 className="text-sm font-semibold mb-4">Contacto</h3>
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-medium text-foreground">Horarios de Atención</p>
                <p className="text-muted-foreground">Lun - Vie: 8:00 - 18:00</p>
                <p className="text-muted-foreground">Sáb: 9:00 - 13:00</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Emergencias</p>
                <p className="text-muted-foreground">24/7 disponible</p>
              </div>
              <div className="pt-2">
                <Link href="/cotizacion" className="inline-flex items-center px-3 py-1 bg-primary text-primary-foreground rounded-md text-xs hover:bg-primary/90 transition-colors">
                  Solicitar Cotización
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} PECVA - Servicios Profesionales de Topografía. Todos los derechos reservados.
          </p>
          <p className="mt-2">
            <span className="mx-2">Desarrollado con</span>
            <Link 
              href="https://v1tr0.com/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-destructive hover:text-destructive/80 transition-colors duration-200 hover:scale-110 transform"
            >
              <Heart className="h-4 w-4 fill-current" />
            </Link>
            <span className="ml-2">por V1tr0</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
