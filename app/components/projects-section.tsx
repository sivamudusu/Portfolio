"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRef } from "react"

interface Project {
  title: string
  description: string
  image: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-stack e-commerce platform with real-time inventory management, user authentication, and secure payment processing. Features include dynamic product filtering, real-time cart updates, and an admin dashboard for inventory management.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "Stripe"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "AI Chat Application",
    description:
      "Real-time chat application powered by AI, featuring message translation and sentiment analysis. Includes features like voice messages, file sharing, and customizable chat interfaces with different AI personalities.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "Node.js", "Socket.io", "OpenAI API", "MongoDB"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management System",
    description:
      "Collaborative task management tool with real-time updates, file sharing, and team analytics. Features include customizable workflows, time tracking, and detailed progress reports with beautiful data visualizations.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS", "TypeScript"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
  {
    title: "Portfolio Generator",
    description:
      "An intuitive portfolio generator that helps developers showcase their work. Features include customizable themes, automatic project imports from GitHub, and built-in analytics to track portfolio engagement.",
    image: "/placeholder.svg?height=600&width=800",
    technologies: ["React", "GraphQL", "Node.js", "MongoDB", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
  },
]

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scaleTransforms = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacityTransforms = useTransform(scrollYProgress, [0, 1], [0.3, 1])
  const xTransformsEven = useTransform(scrollYProgress, [0, 1], [-100, 0])
  const xTransformsOdd = useTransform(scrollYProgress, [0, 1], [100, 0])

  return (
    <section id="projects" ref={containerRef} className="relative py-20 md:py-32">
      {/* Background with subtle grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="container relative px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-center mb-20"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Featured Projects</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Here are some of my recent projects that showcase my skills and passion for building innovative solutions.
          </p>
        </motion.div>

        <div className="space-y-40">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              style={{
                scale: scaleTransforms,
                opacity: opacityTransforms,
                x: index % 2 === 0 ? xTransformsEven : xTransformsOdd,
              }}
              className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
            >
              {/* Project Image */}
              <div className="w-full md:w-1/2">
                <div className="relative aspect-video overflow-hidden rounded-xl bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-sm border border-white/10">
                  <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
                </div>
              </div>

              {/* Project Details */}
              <div className="w-full md:w-1/2 space-y-6">
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span key={tech} className="px-3 py-1 text-sm rounded-full bg-secondary text-secondary-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 pt-4">
                  {project.githubUrl && (
                    <Button variant="outline" asChild>
                      <Link href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        View Code
                      </Link>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button asChild className="bg-gradient-primary text-primary-foreground hover:opacity-90">
                      <Link href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Link>
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

