"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { profile } from "@/lib/portfolio-data"
import { Reveal } from "./reveal"
import { GithubIcon } from "./icons"
import { ArrowUpRight, Database, MapPin, Send, Sparkles, Terminal } from "lucide-react"

const roles = [
  "Data Science & Data Analysis",
  "Développeuse logiciel",
  "Analyse de données & IA",
]

export function Hero() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index % roles.length]
    let delay: number
    if (!deleting) {
      delay = text === current ? 1700 : 75
    } else {
      delay = 40
    }
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (text === current) setDeleting(true)
          else setText(current.slice(0, text.length + 1))
        } else {
          if (text === "") {
            setDeleting(false)
            setIndex((i) => i + 1)
          } else {
            setText(current.slice(0, text.length - 1))
          }
        }
      },
      delay,
    )
    return () => clearTimeout(timeout)
  }, [text, deleting, index])

  return (
    <section id="top" className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="animate-blob absolute -right-24 -top-24 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
        <div className="animate-blob absolute -left-24 top-1/3 h-72 w-72 rounded-full bg-accent/30 blur-3xl [animation-delay:4s]" />
        <div className="animate-blob absolute bottom-0 right-1/3 h-64 w-64 rounded-full bg-primary/10 blur-3xl [animation-delay:8s]" />
        <div
          className="absolute inset-0 opacity-50"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, var(--color-border) 1px, transparent 0)",
            backgroundSize: "26px 26px",
          }}
        />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:gap-10 md:pb-28 md:pt-24">
        <div className="flex flex-col">
          <Reveal direction="fade" delay={0}>
            <span className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur transition-colors hover:border-primary/40">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Disponible pour opportunités & collaborations
            </span>
          </Reveal>

          <Reveal direction="up" delay={100}>
            <h1 className="mt-6 text-balance font-serif text-4xl font-semibold leading-[1.05] tracking-tight text-foreground sm:text-5xl md:text-6xl">
              {profile.name}
            </h1>
          </Reveal>

          <Reveal direction="up" delay={200}>
            <p className="mt-5 font-mono text-base text-primary sm:text-lg">
              <span className="text-primary/60">&gt;</span> {text}
              <span className="ml-0.5 inline-block h-5 w-[3px] translate-y-0.5 animate-pulse rounded-full bg-primary sm:h-6" />
            </p>
          </Reveal>

          <Reveal direction="up" delay={300}>
            <p className="mt-5 max-w-xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
              {profile.summary}
            </p>
          </Reveal>

          <Reveal direction="up" delay={400}>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#experiences"
                className="btn-shine group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-lg hover:shadow-primary/25"
              >
                Voir mes projets
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-medium text-foreground transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:bg-secondary hover:shadow-md"
              >
                Me contacter
                <Send className="h-4 w-4 text-primary transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </Reveal>

          <Reveal direction="up" delay={500}>
            <div className="mt-9 flex items-center gap-5 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <MapPin className="h-4 w-4 text-primary" />
                {profile.location}
              </span>
              <span className="hidden h-4 w-px bg-border sm:block" />
              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
              >
                <GithubIcon className="h-4 w-4 text-primary transition-transform group-hover:rotate-12" />
                {profile.githubLabel}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal direction="scale" delay={300}>
          <div className="relative mx-auto w-full max-w-md md:max-w-none">
            <div className="animate-spin-slow absolute -inset-6 rounded-full border border-dashed border-primary/25" />
            <div className="relative z-10 aspect-square w-full overflow-hidden rounded-2xl border border-border bg-card animate-float">
              <Image
                src="/hero-abstract.png"
                alt="Logo Data Analytics & Artificial Intelligence"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 40vw"
                className="object-contain transition-transform duration-500 hover:scale-105"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent" />
            </div>

            <div className="animate-float-delayed absolute -right-4 -top-5 z-20 overflow-hidden rounded-full border-4 border-background shadow-lg ring-1 ring-border animate-float">
              <Image
                src="/profil.jpg"
                alt={`Photo de ${profile.shortName}`}
                width={112}
                height={141}
                className="h-28 w-28 rounded-full object-cover transition-transform duration-500 hover:scale-110 sm:h-32 sm:w-32"
              />
            </div>

            <div className="animate-float absolute -left-6 top-8 z-20 hidden items-center gap-2 rounded-xl border border-border bg-card/90 px-3 py-2 shadow-sm backdrop-blur sm:flex">
              <Terminal className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-foreground">Python · Data</span>
            </div>

            <div className="animate-float-delayed absolute -right-5 top-1/2 z-20 hidden items-center gap-2 rounded-xl border border-border bg-card/90 px-3 py-2 shadow-sm backdrop-blur sm:flex">
              <Database className="h-4 w-4 text-primary" />
              <span className="text-xs font-medium text-foreground">SQL · BDD</span>
            </div>

            <div className="animate-float-delayed absolute -bottom-5 -left-4 z-20 hidden rounded-xl border border-border bg-card/90 px-4 py-3 shadow-sm backdrop-blur sm:block">
              <p className="font-serif text-2xl font-semibold text-foreground">M2</p>
              <p className="text-xs text-muted-foreground">Data Science & Analyst</p>
            </div>

            <div className="animate-float absolute -bottom-6 right-6 z-20 hidden items-center gap-2 rounded-full border border-border bg-card/90 px-3 py-1.5 shadow-sm backdrop-blur sm:flex [animation-delay:0.8s]">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              <span className="text-xs font-medium text-muted-foreground">IA</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}