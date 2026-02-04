import { Leaf, Shield, ThumbsUp } from "lucide-react"

export function About() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Sobre Nosotros
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-12 text-pretty">
            En Jardinería G&H nos especializamos en el mantenimiento, limpieza y mejora de espacios verdes. 
            Brindamos soluciones prácticas y eficientes para hogares y terrenos, trabajando con responsabilidad, 
            prolijidad y compromiso.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Leaf className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Experiencia</h3>
              <p className="text-muted-foreground text-center">
                Años de experiencia cuidando espacios verdes
              </p>
            </div>

            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Shield className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Responsabilidad</h3>
              <p className="text-muted-foreground text-center">
                Compromiso con cada trabajo que realizamos
              </p>
            </div>

            <div className="flex flex-col items-center p-6">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <ThumbsUp className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-lg mb-2 text-foreground">Calidad</h3>
              <p className="text-muted-foreground text-center">
                Resultados que superan expectativas
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
