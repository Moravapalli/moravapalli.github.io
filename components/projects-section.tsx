"use client"

import { useEffect, useRef, useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

export function ProjectsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "Representation Learning for Image-to-Image Translation",
      period: "Jul 2022 - Jan 2023",
      grade: "Grade: 1.3",
      description:
        "Developed realistic datasets from synthetic images using VQGAN. Implemented a model learning realistic latent space from computer-generated gaming images using GANs and Transformers.",
      tags: ["GANs", "Transformers", "VQGAN", "PyTorch", "Computer Vision"],
      highlight: true,
    },
    {
      title: "Multi-class Anomaly Detection in X-rays",
      period: "Dec 2021",
      description:
        "Classification of various pulmonary diseases including Covid-19 and Lung opacity, employing SVM, Clustering, Random Forests, and CNN for accurate medical diagnosis.",
      tags: ["CNN", "SVM", "Random Forests", "Medical Imaging", "Classification"],
    },
    {
      title: "CNN-Based Stereo Depth Estimation",
      period: "May 2020 - Nov 2020",
      description:
        "Estimation of depth by disparities from the Kitti stereo image dataset. Training and testing using convolutional neural networks with PyTorch framework.",
      tags: ["CNN", "PyTorch", "Depth Estimation", "Stereo Vision", "DFKI"],
    },
    {
      title: "Covid-19 Dashboard & SIR Model",
      period: "May 2020 - Nov 2020",
      description:
        "Performed Covid data handling and visualization across various countries. Implemented dynamic dashboard for the SIR (Susceptible, Infected, Recovered) model using Python libraries.",
      tags: ["Data Visualization", "Python", "Dashboard", "Epidemiology", "Analytics"],
    },
    {
      title: "Deep Learning Mini-Projects",
      period: "Sep 2019 - Mar 2020",
      description:
        "Investigation of various neural network architectures. Worked on image classification, image segmentation, and object detection tasks with state-of-the-art models.",
      tags: ["Deep Learning", "Image Segmentation", "Object Detection", "Neural Networks"],
    },
  ]

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 md:py-32 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <h2
          className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Featured <span className="text-primary">Projects</span>
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`p-6 md:p-8 bg-card/50 backdrop-blur-sm border-border hover:border-primary transition-all duration-700 group ${
                project.highlight ? "lg:col-span-2" : ""
              } ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-semibold mb-2 group-hover:text-primary transition-colors text-balance">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                    <span>{project.period}</span>
                    {project.grade && (
                      <>
                        <span>•</span>
                        <span className="text-accent font-medium">{project.grade}</span>
                      </>
                    )}
                  </div>
                </div>
                <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
              </div>

              <p className="text-muted-foreground mb-6 leading-relaxed text-pretty">{project.description}</p>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
