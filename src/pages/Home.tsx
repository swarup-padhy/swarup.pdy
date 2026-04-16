import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/sections/hero/Hero"
import { Overview } from "@/sections/overview/Overview"
import { CaseStudies } from "@/sections/case-studies/CaseStudies"
import { About } from "@/sections/about/About"
import { Contact } from "@/sections/contact/Contact"
import { SEO } from "@/components/layout/SEO"
import { Footer } from "@/components/layout/Footer"
import { useConfig } from "@/hooks"

export function Home() {
  const { isMaintenanceMode } = useConfig()
  if (isMaintenanceMode) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-background">
        <div className="text-center space-y-4">
          <h1 className="text-h2 font-heading tracking-tight">Portfolio Under Construction</h1>
          <p className="text-muted-foreground">I'm currently updating my workspace. Please check back soon!</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <SEO />
      <Navbar />
      <main>
        <Hero />
        <Overview />
        <CaseStudies />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
