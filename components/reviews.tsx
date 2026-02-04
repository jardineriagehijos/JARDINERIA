"use client"

import { useEffect, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const reviews = [
  {
    text: "Excelente trabajo, muy prolijos y responsables. Limpiaron todo el jardin en tiempo record y quedaron muy atentos a cada detalle. Super recomendados.",
    author: "Maria Gonzalez",
    location: "Villa del Dique",
  },
  {
    text: "Dejaron el terreno impecable, totalmente recomendables. Teniamos un lote abandonado hace años y lo transformaron por completo. Muy profesionales.",
    author: "Carlos Ramirez",
    location: "Embalse",
  },
  {
    text: "Muy buena atencion y cumplimiento. Guillermo es muy amable y siempre llega puntual. El mantenimiento mensual de mi jardin queda impecable.",
    author: "Laura Martinez",
    location: "Santa Rosa de Calamuchita",
  },
  {
    text: "Gran compromiso y calidad en cada trabajo. Contrate el servicio de desmonte y superaron mis expectativas. Precios justos y trabajo de primera.",
    author: "Roberto Fernandez",
    location: "Villa del Dique",
  },
  {
    text: "Trabajo rapido y profesional. En una sola mañana dejaron mi patio como nuevo. Se nota la experiencia y el cuidado que ponen en cada detalle.",
    author: "Ana Lucero",
    location: "Los Molinos",
  },
  {
    text: "Los vuelvo a llamar sin dudas. Ya es la tercera vez que los contrato y siempre quedan perfectos los trabajos. Confiables y responsables.",
    author: "Miguel Torres",
    location: "Villa del Dique",
  },
]

export function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="resenas" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Reseñas de Clientes
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Lo que dicen nuestros clientes sobre nuestro trabajo
          </p>
        </div>

        {/* Desktop: Show 3 cards */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 mb-8">
          {[0, 1, 2].map((offset) => {
            const index = (currentIndex + offset) % reviews.length
            const review = reviews[index]
            return (
              <Card
                key={`${review.text}-${index}`}
                className="bg-card border-border"
              >
                <CardContent className="p-6">
                  <Quote className="w-8 h-8 text-primary/30 mb-4" />
                  <p className="text-foreground mb-4 text-lg italic">
                    {'"'}{review.text}{'"'}
                  </p>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={`star-${index}-${i}`}
                        className="w-4 h-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <div className="text-sm">
                    <p className="text-foreground font-medium">{review.author}</p>
                    <p className="text-muted-foreground">{review.location}</p>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Mobile: Show 1 card */}
        <div className="md:hidden">
          <Card className="bg-card border-border">
            <CardContent className="p-6">
              <Quote className="w-8 h-8 text-primary/30 mb-4" />
              <p className="text-foreground mb-4 text-lg italic">
                {'"'}{reviews[currentIndex].text}{'"'}
              </p>
              <div className="flex items-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={`star-mobile-${i}`}
                    className="w-4 h-4 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <div className="text-sm">
                <p className="text-foreground font-medium">{reviews[currentIndex].author}</p>
                <p className="text-muted-foreground">{reviews[currentIndex].location}</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Dots indicator */}
        <div className="flex justify-center gap-2 mt-6">
          {reviews.map((_, index) => (
            <button
              key={`dot-${index}`}
              type="button"
              className={`w-2 h-2 rounded-full transition-colors ${
                index === currentIndex ? "bg-primary" : "bg-primary/30"
              }`}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ver reseña ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
