import { education } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { ArrowRight, Code2, Cpu, GraduationCap, Shield, Wifi, type LucideIcon } from "lucide-react"

const icons: LucideIcon[] = [GraduationCap, Shield, Code2, Wifi, Cpu]

export function Education() {
  return (
    <section id="parcours" className="border-t border-border bg-secondary/40">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="01"
          eyebrow="Formations & Diplômes"
          title="Un parcours entre génie logiciel et data science"
          description="De la programmation embarquée à la data science, une progression continue vers l'analyse et l'intelligence artificielle."
        />

        <ol className="mt-12 space-y-0">
          {education.map((item, i) => {
            const Icon = icons[i % icons.length]
            return (
              <li
                key={item.school + item.period}
                className="group grid gap-2 border-t border-border py-6 transition-colors last:border-b md:grid-cols-[140px_1fr] md:gap-8 md:py-7"
              >
                <Reveal direction="left" delay={i * 90}>
                  <div className="flex items-center gap-2 text-sm font-medium text-primary md:pt-0.5">
                    <span className="relative">
                      <span className="font-mono">{item.period}</span>
                    </span>
                  </div>
                </Reveal>
                <Reveal direction="up" delay={i * 90}>
                  <div className="flex items-start gap-4">
                    <span className="mt-0.5 hidden h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground sm:flex">
                      <Icon className="h-4.5 w-4.5 transition-transform group-hover:scale-110" />
                    </span>
                    <div className="flex-1 transition-transform duration-300 group-hover:translate-x-1">
                      <h3 className="font-serif text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm font-medium text-muted-foreground">{item.school}</p>
                      <p className="mt-1 text-sm text-muted-foreground/80">{item.detail}</p>
                    </div>
                    <ArrowRight className="mt-1 hidden h-4 w-4 shrink-0 self-center text-primary opacity-0 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100 sm:block" />
                  </div>
                </Reveal>
              </li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}