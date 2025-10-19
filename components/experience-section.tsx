"use client"

import { useEffect, useRef, useState } from "react"
import { Briefcase, GraduationCap } from "lucide-react"
import { Card } from "@/components/ui/card"

export function ExperienceSection() {
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

  const experiences = [
    {
      type: "work",
      title: "Research Assistant",
      organization: "Asklepios Proresearch",
      period: "Jul 2022 - Present",
      description: [
        "Performing advanced image processing with OpenCV for medical imaging",
        "Researching and implementing algorithms for stroke detection from CT perfusion maps",
        "Developing end-to-end tools for automated stroke detection from CT scans",
      ],
    },
    {
      type: "work",
      title: "Internship",
      organization: "IAV Automotive Engineering",
      period: "Feb 2021 - Dec 2021",
      description: [
        "Implemented object detection and depth estimation models for ADAS using TensorFlow and Keras",
        "Proposed innovative sonification model mapping sound and image parameters",
        "Developed GUI tool for sonification using PyQt and PySide2",
        "Worked in agile environment managing product backlog with Jira",
      ],
    },
    {
      type: "education",
      title: "M.Sc Commercial Vehicle Technology",
      organization: "Technical University of Kaiserslautern",
      period: "Sep 2018 - Jan 2023",
      description: [
        "Focus: Deep Learning, 2D Image Processing, 3D Computer Vision, Data Science",
        "Master Thesis: Representation Learning for Image-to-Image Translation (Grade: 1.3)",
      ],
    },
    {
      type: "education",
      title: "B.Tech Mechanical Engineering",
      organization: "Dr MGR Educational and Research Institute University",
      period: "Sep 2013 - May 2017",
      description: ["Foundation in engineering principles and problem-solving"],
    },
  ]

  return (
    <section id="experience" ref={sectionRef} className="relative py-20 md:py-32 px-4">
      <div className="container mx-auto">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Journey & <span className="text-primary">Milestones</span>
        </h2>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-700 ${
                isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 flex-shrink-0">
                  {exp.type === "work" ? (
                    <Briefcase className="h-6 w-6 text-primary" />
                  ) : (
                    <GraduationCap className="h-6 w-6 text-accent" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                    <h3 className="text-xl md:text-2xl font-semibold">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-accent font-medium mb-4">{exp.organization}</p>
                  <ul className="space-y-2">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1.5">•</span>
                        <span className="text-pretty">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
