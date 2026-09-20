"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { cn } from "@/lib/utils"

export function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light")

  useEffect(() => {
    const stored = localStorage.getItem("theme")
    if (stored === "light" || stored === "dark") {
      setTheme(stored)
      applyTheme(stored)
    }
  }, [])

  function applyTheme(next: "light" | "dark") {
    const root = document.documentElement
    root.classList.remove("light", "dark")
    root.classList.add(next)
  }

  function toggle() {
    const next = theme === "light" ? "dark" : "light"
    setTheme(next)
    applyTheme(next)
    localStorage.setItem("theme", next)
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={theme === "light" ? "Activer le mode sombre" : "Activer le mode clair"}
      title={theme === "light" ? "Mode sombre" : "Mode clair"}
      className="relative flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card text-foreground transition-all hover:scale-105 hover:border-primary/40 hover:bg-secondary"
    >
      <Sun
        className={cn(
          "absolute h-4 w-4 transition-all duration-300",
          theme === "dark" ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100",
        )}
      />
      <Moon
        className={cn(
          "absolute h-4 w-4 transition-all duration-300",
          theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0",
        )}
      />
    </button>
  )
}