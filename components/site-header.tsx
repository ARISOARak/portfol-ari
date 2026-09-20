"use client"

import { useEffect, useState } from "react"
import { navItems, profile } from "@/lib/portfolio-data"
import { cn } from "@/lib/utils"
import { ThemeToggle } from "./theme-toggle"
import { Briefcase, FolderOpen, GraduationCap, Mail, UserRound, Wrench, type LucideIcon } from "lucide-react"

const navIcons: LucideIcon[] = [UserRound, GraduationCap, Briefcase, FolderOpen, Wrench, Mail]

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string>(navItems[0].href)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24)
      let current = navItems[0].href
      for (const item of navItems) {
        const el = document.getElementById(item.href.slice(1))
        if (el && el.getBoundingClientRect().top <= 120) current = item.href
      }
      setActive(current)
    }
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/80 backdrop-blur-md shadow-sm"
          : "border-transparent bg-transparent",
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
        <a href="#top" className="group flex flex-col leading-tight">
          <span className="font-serif text-sm font-semibold tracking-tight text-foreground transition-colors group-hover:text-primary">
            {profile.shortName}
          </span>
          <span className="text-[11px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
            Data Science · Dév. Logiciel
          </span>
        </a>

        <ul className="hidden items-center gap-6 md:flex">
          {navItems.map((item, i) => {
            const Icon = navIcons[i % navIcons.length]
            const isActive = active === item.href
            return (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={cn(
                    "group relative inline-flex items-center gap-2 py-1.5 text-sm transition-colors",
                    isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <Icon className={cn("h-3.5 w-3.5 transition-colors", isActive ? "text-primary" : "text-primary/60")} />
                  {item.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300",
                      isActive ? "w-full" : "w-0 group-hover:w-full",
                    )}
                  />
                </a>
              </li>
            )
          })}
        </ul>

        <div className="flex items-center gap-2.5">
          <ThemeToggle />
          <a
            href="#contact"
            className="btn-shine hidden rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-all hover:-translate-y-0.5 hover:opacity-90 hover:shadow-md hover:shadow-primary/25 md:inline-flex"
          >
            Me contacter
          </a>

          <button
            type="button"
            aria-label="Ouvrir le menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center rounded-md border border-border text-foreground transition-colors hover:bg-secondary md:hidden"
          >
            <span className="sr-only">Menu</span>
            <div className="flex flex-col gap-[5px]">
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-transform",
                  open && "translate-y-[7px] rotate-45",
                )}
              />
              <span
                className={cn("block h-0.5 w-5 bg-current transition-opacity", open && "opacity-0")}
              />
              <span
                className={cn(
                  "block h-0.5 w-5 bg-current transition-transform",
                  open && "-translate-y-[7px] -rotate-45",
                )}
              />
            </div>
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "grid transition-[grid-template-rows] duration-300 ease-out md:hidden",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="overflow-hidden">
          <ul className="mx-auto flex max-w-6xl flex-col px-5 pt-1 pb-3 sm:px-8">
            {navItems.map((item, i) => {
              const Icon = navIcons[i % navIcons.length]
              return (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex items-center gap-3 border-b border-border/50 py-3 text-sm transition-colors",
                      active === item.href
                        ? "font-medium text-foreground"
                        : "text-muted-foreground hover:text-foreground",
                    )}
                  >
                    <Icon className="h-4 w-4 text-primary/70" />
                    {item.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </header>
  )
}