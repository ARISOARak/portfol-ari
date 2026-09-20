import { Reveal } from "./reveal"
import { ArrowRight } from "lucide-react"

interface SectionHeadingProps {
  index: string
  eyebrow: string
  title: string
  description?: string
}

export function SectionHeading({ index, eyebrow, title, description }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="max-w-2xl">
        <div className="flex items-center gap-3 text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-primary/10 font-mono text-xs font-semibold text-primary">
            {index}
          </span>
          <span className="h-px w-8 bg-border" />
          <span>{eyebrow}</span>
          <ArrowRight className="h-3.5 w-3.5 text-primary/60" />
        </div>
        <h2 className="mt-4 text-balance font-serif text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">{description}</p>
        )}
      </div>
    </Reveal>
  )
}