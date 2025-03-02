"use client"
/* eslint-disable react/no-unescaped-entities */
import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast.success("Message sent successfully! I'll get back to you soon.")
    setIsSubmitting(false)
    ;(event.target as HTMLFormElement).reset()
  }

  return (
    <section id="contact" className="relative py-20 md:py-32">
      {/* Background with subtle grid */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background/20" />
        <div className="absolute inset-0 bg-grid-white/[0.02]" />
      </div>

      <div className="container px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Let's Work Together</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            Have a project in mind? I'd love to help you bring it to life. Let's create something amazing together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mt-12 max-w-lg"
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <Input name="name" placeholder="Your name" required className="bg-background/50 backdrop-blur-sm" />
              </div>
              <div className="space-y-2">
                <Input
                  name="email"
                  type="email"
                  placeholder="Your email"
                  required
                  className="bg-background/50 backdrop-blur-sm"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Input name="subject" placeholder="Subject" required className="bg-background/50 backdrop-blur-sm" />
            </div>
            <div className="space-y-2">
              <Textarea
                name="message"
                placeholder="Your message"
                required
                className="min-h-[150px] bg-background/50 backdrop-blur-sm"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-gradient-primary text-primary-foreground hover:opacity-90"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}

