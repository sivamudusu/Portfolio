"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiNodedotjs,
  SiPython,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiDocker,
  SiAmazonwebservices,
  SiGit,
  SiFirebase,
  SiFigma,
  SiSpringboot,
} from "react-icons/si"

const skills = [
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: SiAmazonwebservices, color: "#FF9900" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Figma", icon: SiFigma, color: "#F24E1E" },
  { name: "SpringBoot", icon: SiSpringboot, color: "#61DAFB" },
]

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  // Create three rows of skills
  const rows = [skills.slice(0, 6), skills.slice(6, 11), skills.slice(11)]

  // Create transforms for each row
  const row1X = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const row2X = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"])
  const row3X = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  const transforms = [row1X, row2X, row3X]

  return (
    <section id="about" ref={containerRef} className="relative py-16 overflow-hidden">
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
          className="space-y-6 text-center mb-12"
        >
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About Me</h2>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-lg">
            With a passion for creating beautiful and functional web experiences, I bring ideas to life through clean
            code and intuitive design. Here are some technologies I work with:
          </p>
        </motion.div>

        <div className="space-y-20">
          {rows.map((row, rowIndex) => (
            <div key={rowIndex} className="relative">
              <div className="flex gap-8 overflow-hidden -mx-4">
                <motion.div style={{ x: transforms[rowIndex] }} className="flex gap-8 min-w-full px-4">
                  {[...row, ...row, ...row].map((skill, index) => (
                    <motion.div
                      key={index}
                      whileHover={{
                        scale: 1.1,
                        filter: "brightness(1.2)",
                      }}
                      className="relative group"
                    >
                      <div className="flex-shrink-0 w-20 h-24 rounded-xl bg-gradient-to-br from-background/80 to-background/30 backdrop-blur-sm border-2 border-white/10 flex flex-col items-center justify-center gap-2 transition-all duration-300 group-hover:border-white/20 p-4">
                        {skill.icon && (
                          <skill.icon
                            className="w-8 h-8 transition-transform duration-300 group-hover:scale-110"
                            style={{ color: skill.color }}
                          />
                        )}
                        <span className="text-xs text-center text-muted-foreground font-medium">{skill.name}</span>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

