"use client"

import { useState } from "react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Moon, Sun, Menu, X, Phone, ChevronDown } from "lucide-react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navigation = [
    { name: "Servicios", href: "/servicios" },
    { name: "Proyectos", href: "/proyectos" },
    { name: "Sobre Nosotros", href: "/sobre-nosotros" },
    { name: "Contacto", href: "/contacto" },
  ]

  const serviciosItems = [
    { name: "Topografía Urbana", href: "/servicios/topografia-urbana" },
    { name: "Batimetría", href: "/servicios/batimetria" },
    { name: "Fotogrametría", href: "/servicios/fotogrametria" },
    { name: "Replanteos", href: "/servicios/replanteos" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border relative">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center group">
          <Image 
            src="/logosy-1.png.webp" 
            alt="PECVA Logo" 
            width={60} 
            height={60} 
            className="h-auto w-[60px] transition-transform duration-300 group-hover:scale-110"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {/* Servicios Dropdown */}
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium transition-colors hover:text-primary bg-transparent hover:bg-transparent focus:bg-transparent data-[state=open]:bg-transparent h-auto p-0">
                  Servicios
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[250px] gap-1 p-2">
                    {serviciosItems.map((servicio) => (
                      <NavigationMenuLink key={servicio.name} asChild>
                        <Link
                          href={servicio.href}
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="text-sm font-medium leading-none">{servicio.name}</div>
                        </Link>
                      </NavigationMenuLink>
                    ))}
                    <NavigationMenuLink asChild>
                      <Link
                        href="/servicios"
                        className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground border-t mt-2 pt-3"
                      >
                        <div className="text-sm font-medium leading-none text-primary">Ver Todos los Servicios</div>
                      </Link>
                    </NavigationMenuLink>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          
          {navigation.filter(item => item.name !== "Servicios").map((item) => (
            <Link key={item.name} href={item.href} className="text-sm font-medium transition-colors hover:text-primary">
              {item.name}
            </Link>
          ))}
          
          {/* CTA Button */}
          <Button asChild className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            <Link href="/cotizacion">
              Cotización
            </Link>
          </Button>
        </nav>

        {/* Actions */}
        <div className="flex items-center space-x-2">
          {/* Contacto icono*/}
          <Link href="/contacto">
            <Button variant="ghost" size="icon" className="hidden sm:flex group">
              <motion.div
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, 0],
                  filter: "drop-shadow(0 0 6px hsl(var(--primary)))"
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut"
                }}
              >
                <Phone className="h-4 w-4" />
              </motion.div>
            </Button>
          </Link>

          {/* Theme Toggle */}
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="group">
            <motion.div
                className="flex items-center justify-center"
                whileHover={{
                  scale: 1.2,
                  filter: "drop-shadow(0 0 6px hsl(var(--primary)))"
                }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
              <Sun className="h-4 w-4 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-4 w-4 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            </motion.div>
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Mobile Menu Toggle */}
          <Button variant="ghost" size="icon" className="md:hidden group" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <motion.div
              whileHover={{
                scale: 1.2,
                rotate: isMenuOpen ? [0, -90] : [0, 90],
                filter: "drop-shadow(0 0 6px hsl(var(--primary)))"
              }}
              transition={{
                duration: 0.5,
                ease: "easeInOut"
              }}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </motion.div>
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t border-border bg-background/95 backdrop-blur md:hidden">
          <nav className="container py-4 space-y-2">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block py-2 text-sm font-medium transition-colors hover:text-primary"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            
            {/* Servicios section for mobile */}
            <div className="py-2">
              <div className="text-sm font-medium text-muted-foreground mb-2">Servicios</div>
              {serviciosItems.map((servicio) => (
                <Link
                  key={servicio.name}
                  href={servicio.href}
                  className="block py-2 pl-4 text-sm font-medium transition-colors hover:text-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {servicio.name}
                </Link>
              ))}
            </div>
            
            {/* CTA Button Mobile */}
            <div className="pt-4">
              <Button asChild className="w-full bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Link href="/cotizacion" onClick={() => setIsMenuOpen(false)}>
                  Solicitar Cotización
                </Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
