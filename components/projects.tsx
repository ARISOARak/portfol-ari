import { projects } from "@/lib/portfolio-data"
import { SectionHeading } from "./section-heading"
import { Reveal } from "./reveal"
import { GithubIcon } from "./icons"
import { ArrowUpRight, ScanFace } from "lucide-react"

export function Projects() {
  return (
    <section id="projets">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <SectionHeading
          index="03"
          eyebrow="Projets"
          title="Mes réalisations"
          description="Un aperçu de mes projets, de la modélisation à la mise en œuvre."
        />

        <div className="mt-12 grid gap-5">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 120} direction="up">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1.5 hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 sm:p-8">
                <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-primary via-accent to-primary transition-transform duration-500 group-hover:scale-x-100" />

                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex items-start gap-4">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary text-primary transition-all duration-300 group-hover:rotate-6 group-hover:scale-105 group-hover:border-primary/40 group-hover:bg-primary group-hover:text-primary-foreground">
                      <ScanFace className="h-6 w-6" />
                    </span>
                    <div>
                      <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
                        {project.kind}
                      </span>
                      <h3 className="mt-1 font-serif text-xl font-semibold leading-snug text-foreground sm:text-2xl">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/link inline-flex w-fit shrink-0 items-center gap-2 rounded-full border border-border bg-secondary px-4 py-2 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-md"
                  >
                    <GithubIcon className="h-4 w-4 text-primary" />
                    Voir sur GitHub
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5" />
                  </a>
                </div>

                <p className="mt-5 max-w-3xl text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                <ul className="mt-5 grid max-w-3xl gap-2 sm:grid-cols-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <ul className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-md border border-border px-2.5 py-1 text-xs text-muted-foreground transition-colors group-hover:border-primary/30"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}