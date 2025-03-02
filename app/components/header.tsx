"use client"
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import { ThemeToggle } from "@/components/theme-toggle"

export function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-md"
    >
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="text-xl font-bold text-gradient-primary">
          Shiva
        </Link>
        <div className="flex items-center gap-4">
          <ThemeToggle />
          <Button asChild size="sm" className="bg-gradient-primary text-primary-foreground hover:opacity-90">
            <Link
              href="#contact"
              onClick={(e) => {
                e.preventDefault()
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }}
            >
              Let's Collaborate
            </Link>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}

