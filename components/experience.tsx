import { experiences } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { Bot, Globe, Rocket, type LucideIcon } from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  ai: Bot,
  hackathon: Rocket,
  web: Globe,
}

export function Experience() {
  return (
    <section id="experiences">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="02"
          eyebrow="Expériences & Projets"
          title="Ce sur quoi j'ai travaillé"
          description="Des projets concrets mêlant analyse de données, développement web et travail d'équipe."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {experiences.map((exp, i) => {
            const Icon = iconMap[exp.icon] ?? Globe
            return (
              <Reveal key={exp.title} delay={i * 120} direction="up">
                <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10">
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary via-accent to-primary transition-transform duration-500 group-hover:scale-x-100" />

                  <div className="flex items-center justify-between gap-3">
                    <span className="inline-flex w-fit items-center rounded-full bg-secondary px-2.5 py-1 text-xs font-medium text-secondary-foreground">
                      {exp.period}
                    </span>
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-all duration-300 group-hover:rotate-6 group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="h-5 w-5" />
                    </span>
                  </div>

                  <h3 className="mt-4 font-serif text-xl font-semibold leading-snug text-foreground">
                    {exp.title}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">{exp.org}</p>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {exp.description}
                  </p>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {exp.tags.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-md border border-border px-2 py-0.5 text-xs text-muted-foreground transition-colors group-hover:border-primary/30"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}