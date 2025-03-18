"use client"
/* eslint-disable react/no-unescaped-entities */
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import { AnimatedBackground } from "./components/animated-background"

export default function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <section className="relative min-h-screen overflow-hidden bg-background py-20 md:py-32">
      {/* Animated background */}
      <AnimatedBackground />

      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 h-full w-full">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-y-[30%] translate-x-[20%] rounded-full bg-primary/20 opacity-50 blur-[80px]" />
        <div className="absolute bottom-0 left-0 h-[500px] w-[500px] translate-y-[30%] -translate-x-[20%] rounded-full bg-primary/30 opacity-50 blur-[90px]" />
      </div>

      {/* Rest of the content */}
      <div className="container  z-10 px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-10 text-center">
          <div className="space-y-6">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
                <span className="block">Hi, I'm </span>
                <span className="block mt-2 text-gradient-primary">Shiva</span>
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                I'm a <span className="font-medium text-primary">full-stack developer</span> passionate about building
                beautiful, functional, and user-centered digital experiences.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex relative z-20 items-center justify-center gap-4 w-full max-w-md mx-auto"
            >
              <Button
                asChild
                size="lg"
                className="w-full rounded-full bg-gradient-primary text-primary-foreground hover:opacity-90"
              >
                <Link
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })
                  }}
                  className="inline-flex items-center justify-center"
                >
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                size="lg"
                className="w-full rounded-full border-2 border-primary hover:bg-gradient-primary hover:text-primary-foreground hover:border-transparent transition-all duration-300"
              >
                <Link
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault()
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
                  }}
                >
                  Contact Me
                </Link>
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex items-center justify-center space-x-4"
          >
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-muted/80 hover:text-primary"
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-muted/80 hover:text-primary"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Link>
            <Link
              href="mailto:your.email@example.com"
              className="rounded-full bg-muted p-3 text-muted-foreground transition-colors hover:bg-muted/80 hover:text-primary"
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block"
          >
            <div className="flex flex-col items-center justify-center">
              <div className="h-12 w-0.5 bg-primary/20 animate-pulse" />
              <span className="mt-2 text-sm text-muted-foreground">Scroll Down</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

