"use client"

import { useEffect, useRef, useState } from "react"
import { cn } from "@/lib/utils"

type SkillBarProps = {
  value: number
  className?: string
}

export function SkillBar({ value, className }: SkillBarProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [shown, setShown] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setShown(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.3 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={cn("h-1.5 w-full overflow-hidden rounded-full bg-secondary", className)}
    >
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-accent transition-[width] duration-1000 ease-out"
        style={{ width: shown ? `${value}%` : "0%" }}
      />
    </div>
  )
}