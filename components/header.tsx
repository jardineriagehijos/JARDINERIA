"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#resenas", label: "Reseñas" },
  { href: "#contacto", label: "Contacto" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const whatsappLink = "https://wa.me/5492656439369?text=Hola,%20quiero%20consultar%20por%20servicios%20de%20jardiner%C3%ADa."

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="#inicio" className="flex items-center gap-2">
            <Image
              src="/images/1.png"
              alt="Jardinería G&H Logo"
              width={50}
              height={50}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full"
            />
            <span className="font-bold text-lg md:text-xl text-primary hidden sm:block">
              Jardinería G&H
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* WhatsApp Button */}
          <div className="hidden md:block">
            <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white">
              <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                <Phone className="w-4 h-4 mr-2" />
                WhatsApp
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Cerrar menú" : "Abrir menú"}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-foreground/80 hover:text-primary transition-colors font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild className="bg-[#25D366] hover:bg-[#128C7E] text-white w-full mt-2">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Phone className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
