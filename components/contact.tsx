import { profile } from "@/lib/portfolio-data"
import { Reveal } from "./reveal"
import { GithubIcon } from "./icons"
import { ArrowUp, ArrowUpRight, Code2, Mail, Phone } from "lucide-react"
import type { ComponentType } from "react"

const hoverAccents = ["hover:border-primary/50", "hover:border-accent/60", "hover:border-foreground/40"]

export function Contact() {
  const contacts: { label: string; value: string; href: string; icon: ComponentType<{ className?: string }> }[] = [
    {
      label: "Email",
      value: profile.email,
      href: `mailto:${profile.email}`,
      icon: Mail,
    },
    {
      label: "Téléphone",
      value: profile.phone,
      href: `tel:${profile.phone.replace(/\s+/g, "")}`,
      icon: Phone,
    },
    {
      label: "GitHub",
      value: profile.githubLabel,
      href: profile.github,
      icon: GithubIcon,
    },
  ]

  return (
    <footer id="contact" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
            <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 font-mono text-xs font-semibold text-primary">
              05
            </span>
            <span className="h-px w-8 bg-border" />
            <span>Contact</span>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="mt-4 max-w-2xl text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            Travaillons ensemble sur votre prochain projet data.
          </h2>
        </Reveal>
        <Reveal delay={200}>
          <p className="mt-4 max-w-xl text-pretty leading-relaxed text-muted-foreground">
            Vous avez une opportunité, un projet ou simplement envie d'échanger&nbsp;? N'hésitez pas à
            me contacter, je vous répondrai avec plaisir.
          </p>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {contacts.map((c, i) => (
            <Reveal key={c.label} delay={i * 120} direction="up">
              <a
                href={c.href}
                target={c.label === "GitHub" ? "_blank" : undefined}
                rel={c.label === "GitHub" ? "noopener noreferrer" : undefined}
                className={`group flex items-center justify-between gap-3 rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-md ${hoverAccents[i % hoverAccents.length]}`}
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-primary transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-primary-foreground">
                    <c.icon className="h-4.5 w-4.5" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-xs uppercase tracking-wide text-muted-foreground">
                      {c.label}
                    </span>
                    <span className="text-sm font-medium text-foreground">{c.value}</span>
                  </span>
                </span>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
              </a>
            </Reveal>
          ))}
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row sm:items-center">
          <Reveal>
            <p className="flex items-center gap-2">
              <Code2 className="h-4 w-4 text-primary" />
              © {new Date().getFullYear()} {profile.name}
            </p>
          </Reveal>
          <div className="flex items-center gap-4">
            <Reveal delay={100}>
              <p>Conçu avec soin · {profile.location}</p>
            </Reveal>
            <a
              href="#top"
              aria-label="Retour en haut"
              title="Retour en haut"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-secondary hover:shadow-md"
            >
              <ArrowUp className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}