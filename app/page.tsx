import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { TrainingMethodsSection } from "@/components/training-methods-section"
import { CurriculumSection } from "@/components/curriculum-section"
import { MethodologySection } from "@/components/methodology-section"
import { ExpertTeamSection } from "@/components/expert-team-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <TrainingMethodsSection />
      <div id="curriculum">
        <CurriculumSection />
      </div>
      <MethodologySection />
      <div id="experts">
        <ExpertTeamSection />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
      <Footer />
    </main>
  )
}
