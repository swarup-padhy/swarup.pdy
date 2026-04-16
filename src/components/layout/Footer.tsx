import { personal, footerData } from "@/store"
import { useSection } from "@/hooks"

export function Footer() {
  const { isVisible } = useSection(footerData)
  if (!isVisible) return null
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border/40 bg-background py-12">
      <div className="container mx-auto px-6 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-heading font-bold tracking-tight">
              {personal.name}
            </span>
            <p className="text-sm text-muted-foreground mt-1 text-center md:text-left">
              {personal.occupation} — Building resilient systems.
            </p>
          </div>


          <div className="text-sm text-muted-foreground/60 font-medium">
            © {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}
