"use client"

import { useEffect, useRef, useState } from "react"
import { Brain, Code, Lightbulb, Target } from "lucide-react"
import { Card } from "@/components/ui/card"

export function AboutSection() {
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

  const traits = [
    {
      icon: Brain,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge AI solutions",
    },
    {
      icon: Target,
      title: "Precision",
      description: "Meticulous attention to detail in every project",
    },
    {
      icon: Code,
      title: "Technical Excellence",
      description: "Deep expertise in ML frameworks and algorithms",
    },
    {
      icon: Lightbulb,
      title: "Vision",
      description: "Forward-thinking approach to problem-solving",
    },
  ]

  return (
    <section id="about" ref={sectionRef} className="relative py-20 md:py-32 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            About <span className="text-primary">Me</span>
          </h2>

          <div
            className={`prose prose-invert max-w-none mb-16 transition-all duration-1000 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-lg md:text-xl text-muted-foreground text-center text-pretty leading-relaxed">
              I'm a Research Assistant at Asklepios Proresearch, specializing in developing advanced AI solutions for
              medical imaging. With a Master's in Commercial Vehicle Technology from TU Kaiserslautern, I combine deep
              technical expertise with innovative problem-solving to create impactful AI applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {traits.map((trait, index) => (
              <Card
                key={trait.title}
                className={`p-6 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-500 ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                }`}
                style={{ transitionDelay: `${300 + index * 100}ms` }}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <trait.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{trait.title}</h3>
                    <p className="text-muted-foreground">{trait.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
