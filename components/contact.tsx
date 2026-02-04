"use client"

import React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, User, Send } from "lucide-react"

export function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    telefono: "",
    mensaje: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const message = `Hola, soy ${formData.nombre}. Mi teléfono es ${formData.telefono}. ${formData.mensaje}`
    const whatsappUrl = `https://wa.me/5492656439369?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  return (
    <section id="contacto" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Contacto
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Contactanos para solicitar un presupuesto sin compromiso
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Envianos un mensaje</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-foreground mb-1">
                    Nombre
                  </label>
                  <Input
                    id="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.nombre}
                    onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="telefono" className="block text-sm font-medium text-foreground mb-1">
                    Teléfono
                  </label>
                  <Input
                    id="telefono"
                    type="tel"
                    placeholder="Tu teléfono"
                    value={formData.telefono}
                    onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
                    required
                    className="bg-background"
                  />
                </div>
                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-foreground mb-1">
                    Mensaje
                  </label>
                  <Textarea
                    id="mensaje"
                    placeholder="Contanos qué necesitas..."
                    value={formData.mensaje}
                    onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
                    required
                    rows={4}
                    className="bg-background"
                  />
                </div>
                <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar por WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info & Map */}
          <div className="space-y-6">
            {/* Contact Info */}
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Datos de contacto</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Contacto</p>
                    <p className="font-medium text-foreground">Guillermo</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp / Teléfono</p>
                    <a 
                      href="tel:+5492656439369" 
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      2656-439369
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Ubicación</p>
                    <p className="font-medium text-foreground">Villa del Dique, Córdoba, Argentina</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Map */}
            <Card className="bg-card border-border overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13544.87095066898!2d-64.45888!3d-32.17972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95d2a1c9e5c8f8e7%3A0x8e8f8e8f8e8f8e8f!2sVilla%20del%20Dique%2C%20C%C3%B3rdoba%2C%20Argentina!5e0!3m2!1ses!2sar!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de Jardinería G&H en Villa del Dique"
                />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
