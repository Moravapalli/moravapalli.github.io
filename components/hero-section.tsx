"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center px-4">
      <div className="container mx-auto text-center">
        <div
          className={`space-y-6 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-4 text-balance">
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-glow">
                Harshavardhan Reddy
              </span>
            </h1>
            <div className="h-1 w-full bg-gradient-to-r from-transparent via-primary to-transparent animate-glow" />
          </div>

          <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-light text-balance">
            AI Engineer & Computer Vision Specialist
          </p>

          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Transforming complex data into intelligent solutions through deep learning, computer vision, and innovative
            AI applications
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground" asChild>
              <a href="#projects">View My Work</a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="#contact">Get In Touch</a>
            </Button>
          </div>
        </div>

        <a href="#about" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="h-8 w-8 text-primary" />
        </a>
      </div>
    </section>
  )
}
