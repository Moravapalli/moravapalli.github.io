"use client"

import { useEffect, useRef, useState } from "react"
import { Mail, MapPin, Phone, Github, Linkedin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export function ContactSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "harsham6032@gmail.com",
      href: "mailto:harsham6032@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+49 176 43221078",
      href: "tel:+4917643221078",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Kaiserslautern, Germany",
      href: null,
    },
  ]

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "#" },
    { icon: Linkedin, label: "LinkedIn", href: "#" },
  ]

  return (
    <section id="contact" ref={sectionRef} className="relative py-20 md:py-32 px-4 min-h-screen flex items-center">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-8 transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Let's Build the <span className="text-primary">Future Together</span>
          </h2>

          <p
            className={`text-lg md:text-xl text-muted-foreground mb-16 text-pretty transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <Card
                key={info.label}
                className={`p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-700 ${
                  isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                }`}
                style={{ transitionDelay: `${400 + index * 100}ms` }}
              >
                {info.href ? (
                  <a href={info.href} className="flex flex-col items-center gap-3 group">
                    <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-medium group-hover:text-primary transition-colors">{info.value}</p>
                    </div>
                  </a>
                ) : (
                  <div className="flex flex-col items-center gap-3">
                    <div className="p-3 rounded-lg bg-primary/10">
                      <info.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                      <p className="font-medium">{info.value}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div
            className={`flex justify-center gap-4 mb-12 transition-all duration-1000 delay-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="outline"
                size="icon"
                className="h-12 w-12 rounded-full border-border hover:border-primary hover:bg-primary/10 bg-transparent"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="h-5 w-5" />
                </a>
              </Button>
            ))}
          </div>

          <Button
            size="lg"
            className={`bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-1000 delay-900 ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            }`}
            asChild
          >
            <a href="mailto:harsham6032@gmail.com">Start a Conversation</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-0 right-0 text-center">
        <p className="text-sm text-muted-foreground">© 2025 Harshavardhan Reddy Moravapalli. Crafted with passion.</p>
      </div>
    </section>
  )
}
