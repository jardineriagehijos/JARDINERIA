import Image from "next/image"
import { MapPin, Phone } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <Image
              src="/images/1.png"
              alt="Jardinería G&H Logo"
              width={80}
              height={80}
              className="mb-4 rounded-full"
            />
            <p className="text-lg font-semibold mb-2">Jardinería G&H</p>
            <p className="text-background/70">Jardinería Integral</p>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4">Contacto</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-background/80">
                <Phone className="w-4 h-4" />
                <a href="tel:+5492656439369" className="hover:text-background transition-colors">
                  2656-439369
                </a>
              </div>
              <div className="flex items-center gap-2 text-background/80">
                <MapPin className="w-4 h-4" />
                <span>Villa del Dique, Córdoba</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-semibold text-lg mb-4">Enlaces</h3>
            <nav className="flex flex-col gap-2">
              <a href="#inicio" className="text-background/80 hover:text-background transition-colors">
                Inicio
              </a>
              <a href="#servicios" className="text-background/80 hover:text-background transition-colors">
                Servicios
              </a>
              <a href="#resenas" className="text-background/80 hover:text-background transition-colors">
                Reseñas
              </a>
              <a href="#contacto" className="text-background/80 hover:text-background transition-colors">
                Contacto
              </a>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-background/20 pt-8 text-center">
          <p className="text-background/60 text-sm">
            © {currentYear} Jardinería G&H - Jardinería Integral. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
