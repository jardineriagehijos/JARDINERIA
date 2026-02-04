import { Scissors, TreePine, Trash2, Wrench } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const services = [
  {
    icon: Scissors,
    title: "Corte de Pasto",
    description: "Corte profesional de césped para mantener tu jardín siempre prolijo y saludable.",
  },
  {
    icon: TreePine,
    title: "Desmonte",
    description: "Limpieza y desmonte de terrenos, preparación de espacios para nuevos proyectos.",
  },
  {
    icon: Trash2,
    title: "Limpieza de Terrenos",
    description: "Retiro de maleza, escombros y residuos para dejar tu terreno impecable.",
  },
  {
    icon: Wrench,
    title: "Mantenimiento General",
    description: "Cuidado integral de jardines: poda, riego, fertilización y más.",
  },
]

export function Services() {
  return (
    <section id="servicios" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ofrecemos soluciones completas para el cuidado de tus espacios verdes
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <Card
              key={service.title}
              className="bg-card border-border hover:shadow-lg transition-shadow group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
