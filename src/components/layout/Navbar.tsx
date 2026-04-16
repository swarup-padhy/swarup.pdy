import { useState, useEffect } from "react"
import { RiMenu3Line, RiDownloadLine } from "@remixicon/react"
import { personal, navbarData as navbar } from "@/store"
import { ModeToggle } from "@/components/theme/ModeToggle"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet"
import { smoothScrollTo } from "@/lib/utils"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScrollEvent = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScrollEvent)
    return () => window.removeEventListener("scroll", handleScrollEvent)
  }, [])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.12)] supports-[backdrop-filter]:bg-background/40 py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6 md:px-8">

        {/* Logo / Name */}
        <a
          href="#overview"
          onClick={(e) => smoothScrollTo(e, "#overview")}
          className="flex flex-col group cursor-pointer"
        >
          <span className="text-xl font-heading font-extrabold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 transition-all group-hover:to-primary">
            {personal.name}
          </span>
          <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-semibold mt-0.5">
            {personal.occupation}
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            {navbar.links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => smoothScrollTo(e, link.href)}
                className="relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-foreground after:transition-all after:duration-300 hover:after:w-full pb-1"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4 border-l border-border/50 pl-8 ml-2">
            <ModeToggle />
            <Button asChild className="rounded-full shadow-md hover:shadow-lg transition-all duration-300 font-semibold px-6">
              <a href={personal.resumeLink} download>
                <span>Resume</span>
                <RiDownloadLine className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </nav>

        {/* Mobile Nav */}
        <div className="flex items-center gap-3 md:hidden">
          <ModeToggle />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-muted/50 transition-colors">
                <RiMenu3Line className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="flex flex-col w-[85vw] sm:w-[400px] border-l-0 shadow-2xl p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>

              <div className="px-8 py-8 border-b border-border/50 bg-muted/20">
                <span className="text-2xl font-heading font-extrabold tracking-tight">{personal.name}</span>
                <p className="text-xs uppercase tracking-widest text-muted-foreground font-semibold mt-1">
                  {personal.occupation}
                </p>
              </div>

              <div className="flex flex-col px-8 py-10 gap-8 overflow-y-auto flex-1">
                {navbar.links.map((link, index) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => smoothScrollTo(e, link.href, () => setIsOpen(false))}
                    className="group flex items-center justify-between text-2xl font-semibold tracking-tight transition-all hover:text-primary hover:translate-x-2 duration-300"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-muted-foreground/50 group-hover:text-primary/50 transition-colors">
                      0{index + 1}
                    </span>
                  </a>
                ))}
              </div>

              <div className="px-8 py-8 border-t border-border/50 bg-background">
                <Button asChild size="lg" className="rounded-full w-full shadow-lg hover:shadow-xl transition-all h-14 text-md">
                  <a href={personal.resumeLink} download>
                    <RiDownloadLine className="mr-2 h-5 w-5" />
                    Download Resume
                  </a>
                </Button>
                {/* Socials wired from portfolio.json */}
                <div className="flex justify-center mt-6 gap-6 text-muted-foreground">
                  <a href={personal.socials.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors text-sm">LinkedIn</a>
                  <a href={personal.socials.github} target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors text-sm">GitHub</a>
                  <a href={personal.socials.email} className="hover:text-foreground transition-colors text-sm">Email</a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
