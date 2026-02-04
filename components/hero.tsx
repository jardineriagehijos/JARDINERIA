import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MessageCircle } from "lucide-react"

export function Hero() {
  const whatsappLink = "https://wa.me/5492656439369?text=Hola,%20quiero%20consultar%20por%20servicios%20de%20jardiner%C3%ADa."

  return (
    <section id="inicio" className="relative min-h-[100svh] flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/portada.png"
          alt="Jardinería profesional"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-3xl mx-auto">
          {/* Logo */}
          <div className="mb-6">
            <Image
              src="/images/1.png"
              alt="Jardinería G&H Logo"
              width={150}
              height={150}
              className="mx-auto w-28 h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 rounded-full bg-white/90 p-1"
              priority
            />
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-3 text-balance">
            Jardinería G&H
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl font-semibold mb-4 text-white/90">
            Jardinería Integral
          </p>
          <p className="text-lg md:text-xl mb-8 text-white/80 max-w-xl mx-auto text-pretty">
            Cuidamos y transformamos tus espacios verdes
          </p>

          <Button
            asChild
            size="lg"
            className="bg-[#25D366] hover:bg-[#128C7E] text-white text-lg px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all"
          >
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactanos por WhatsApp
            </a>
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-white/50 rounded-full" />
        </div>
      </div>
    </section>
  )
}
