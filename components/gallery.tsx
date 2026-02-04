"use client"

import Image from "next/image"
import { useState } from "react"
import { X } from "lucide-react"

const galleryImages = [
  {
    src: "/images/gallery-1.jpg",
    alt: "Trabajo de jardinería - Corte de césped",
  },
  {
    src: "/images/gallery-2.jpg",
    alt: "Trabajo de jardinería - Limpieza de terreno",
  },
  {
    src: "/images/gallery-3.jpg",
    alt: "Trabajo de jardinería - Mantenimiento de jardín",
  },
  {
    src: "/images/gallery-4.jpg",
    alt: "Trabajo de jardinería - Desmonte",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Galería de Trabajos
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Algunos de nuestros trabajos realizados
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <button
              key={image.src}
              type="button"
              className="relative aspect-square rounded-lg overflow-hidden group cursor-pointer"
              onClick={() => setSelectedImage(image.src)}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform group-hover:scale-110"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
          onKeyDown={(e) => e.key === "Escape" && setSelectedImage(null)}
          role="button"
          tabIndex={0}
        >
          <button
            type="button"
            className="absolute top-4 right-4 text-white hover:text-white/80 transition-colors"
            onClick={() => setSelectedImage(null)}
            aria-label="Cerrar imagen"
          >
            <X className="w-8 h-8" />
          </button>
          <div className="relative w-full max-w-4xl aspect-video">
            <Image
              src={selectedImage || "/placeholder.svg"}
              alt="Imagen ampliada"
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        </div>
      )}
    </section>
  )
}
