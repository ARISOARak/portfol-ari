import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { Education } from "@/components/education"
import { Experience } from "@/components/experience"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Reveal } from "@/components/reveal"
import { ScrollProgress } from "@/components/scroll-progress"
import { BrainCircuit, Code2, Database, type LucideIcon } from "lucide-react"

const statsIcons: LucideIcon[] = [BrainCircuit, Code2, Database]

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <ScrollProgress />
      <SiteHeader />
      <Hero />
      <Education />
      <Experience />
      <Skills />
      <Contact />
    </main>
  )
}