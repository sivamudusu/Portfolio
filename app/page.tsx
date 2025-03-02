import { Header } from "./components/header"
import HeroSection from "./hero-section"
import { AboutSection } from "./components/about-section"
import { ProjectsSection } from "./components/projects-section"
import { ContactSection } from "./components/contact-section"
import { Footer } from "./components/footer"

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <HeroSection />
      <div className="relative -mt-20">
        <AboutSection />
        <ProjectsSection />
      </div>
      <ContactSection />
      <Footer />
    </main>
  )
}

