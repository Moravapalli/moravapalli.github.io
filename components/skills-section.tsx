"use client"

import { useEffect, useRef, useState } from "react"
import { Badge } from "@/components/ui/badge"

export function SkillsSection() {
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

  const skillCategories = [
    {
      category: "Core Expertise",
      skills: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing", "MLOps"],
    },
    {
      category: "Programming",
      skills: ["Python", "C++", "MATLAB", "SQL", "JavaScript"],
    },
    {
      category: "Frameworks & Libraries",
      skills: ["PyTorch", "TensorFlow", "Keras", "OpenCV", "scikit-learn", "Pandas", "NumPy"],
    },
    {
      category: "Tools & Platforms",
      skills: ["Docker", "Kubernetes", "AWS SageMaker", "FastAPI", "Git", "GitLab CI/CD", "PySpark"],
    },
    {
      category: "Additional Skills",
      skills: ["PyQt", "PySide2", "Angular", "Power BI", "Linux", "Windows"],
    },
  ]

  return (
    <section id="skills" ref={sectionRef} className="relative py-20 md:py-32 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Technical <span className="text-primary">Arsenal</span>
        </h2>

        <div className="max-w-6xl mx-auto space-y-12">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.category}
              className={`transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${categoryIndex * 150}ms` }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-accent">{category.category}</h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <Badge
                    key={skill}
                    variant="secondary"
                    className={`px-4 py-2 text-sm bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 cursor-default ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
                    }`}
                    style={{
                      transitionDelay: `${categoryIndex * 150 + skillIndex * 50}ms`,
                    }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
