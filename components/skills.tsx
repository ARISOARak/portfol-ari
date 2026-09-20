import { interests, languages, skillGroups } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { SkillBar } from "./skill-bar"
import {
  BrainCircuit,
  Database,
  Dumbbell,
  Gamepad2,
  Globe,
  Languages,
  Music,
  Wrench,
  Workflow,
  type LucideIcon,
} from "lucide-react"

const groupIcons: LucideIcon[] = [BrainCircuit, Database, Globe, Wrench, Workflow]
const interestIcons: LucideIcon[] = [Gamepad2, Music, Dumbbell]

export function Skills() {
  return (
    <section id="competences" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="04"
          eyebrow="Compétences"
          title="Ma boîte à outils"
          description="Technologies, langages et méthodologies que j'utilise au quotidien."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-[1.4fr_1fr]">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {skillGroups.map((group, i) => {
              const Icon = groupIcons[i % groupIcons.length]
              return (
                <Reveal key={group.label} delay={i * 80} direction="up" className="h-full">
                  <div className="h-full bg-card p-6">
                    <h3 className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-foreground">
                      <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 text-primary">
                        <Icon className="h-4 w-4" />
                      </span>
                      {group.label}
                    </h3>
                    <ul className="mt-4 flex flex-wrap gap-2">
                      {group.items.map((item) => (
                        <li
                          key={item}
                          className="cursor-default rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary hover:text-primary-foreground"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              )
            })}
          </div>

          <div className="flex flex-col gap-6">
            <Reveal delay={150} direction="right">
              <div className="rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/30">
                <h3 className="flex items-center gap-2 font-serif text-lg font-semibold text-foreground">
                  <Languages className="h-4.5 w-4.5 text-primary" />
                  Langues
                </h3>
                <ul className="mt-5 space-y-5">
                  {languages.map((lang) => (
                    <li key={lang.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{lang.name}</span>
                        <span className="text-muted-foreground">{lang.level}</span>
                      </div>
                      <div className="mt-2">
                        <SkillBar value={lang.value} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal delay={250} direction="right">
              <div className="rounded-2xl border border-border bg-card p-6 transition-colors duration-300 hover:border-primary/30">
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  Centres d'intérêt
                </h3>
                <ul className="mt-5 flex flex-wrap gap-3">
                  {interests.map((interest, i) => {
                    const Icon = interestIcons[i % interestIcons.length]
                    return (
                      <li
                        key={interest}
                        className="group inline-flex cursor-default items-center gap-2 rounded-full border border-border px-3 py-1.5 text-sm text-foreground transition-all duration-200 hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary"
                      >
                        <Icon className="h-4 w-4 text-primary transition-transform duration-300 group-hover:rotate-12" />
                        {interest}
                      </li>
                    )
                  })}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}