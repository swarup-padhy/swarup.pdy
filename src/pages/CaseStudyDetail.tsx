import { useEffect } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { RiArrowLeftLine, RiCheckLine, RiLightbulbFlashLine, RiFileList3Line, RiBarChartBoxLine } from "@remixicon/react"
import { projectsData } from "@/store"
import type { Project } from "@/types"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { SEO } from "@/components/layout/SEO"
import { Footer } from "@/components/layout/Footer"

export function CaseStudyDetail() {
  const { slug } = useParams<{ slug: string }>()
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const project = projectsData.projects.find((p: Project) => p.slug === slug)

  if (!project) {
    return <Navigate to="/404" replace />
  }

  const content = project.detailContent

  return (
    <>
      <SEO 
        title={project.title} 
        description={project.summary} 
      />
      <div className="min-h-screen bg-background text-foreground pb-24">
        {/* Top Header / Navigation */}
        <div className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
          <div className="container mx-auto px-4 h-16 flex items-center">
            <Button variant="ghost" size="sm" asChild className="-ml-2 hover:bg-secondary">
              <Link to="/">
                <RiArrowLeftLine className="mr-2 size-5" />
                <span className="font-medium">Back to Portfolio</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="container mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-12 items-start">
          {/* Left Sidebar: Table of Contents */}
          <aside className="hidden lg:block sticky top-28 space-y-6">
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-4">Contents</h4>
              <nav className="flex flex-col space-y-3">
                <a href="#overview" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors hover:translate-x-1 duration-200">
                  1. Overview
                </a>
                <a href="#steps" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors hover:translate-x-1 duration-200">
                  2. Execution Steps
                </a>
                <a href="#challenges" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors hover:translate-x-1 duration-200">
                  3. Challenges & Solutions
                </a>
                <a href="#results" className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors hover:translate-x-1 duration-200">
                  4. Results & Metrics
                </a>
              </nav>
            </div>
            
            <div className="pt-6 border-t">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map(tech => (
                  <Badge key={tech} variant="secondary" className="font-normal text-xs">{tech}</Badge>
                ))}
              </div>
            </div>
          </aside>

          {/* Right Content: Document Style */}
          <article className="max-w-3xl space-y-16">
            {/* Hero Section of the Article */}
            <header className="space-y-6">
              <div className="flex flex-wrap items-center gap-3">
                <Badge>{project.category}</Badge>
                <span className="text-sm text-muted-foreground font-medium">{project.duration}</span>
              </div>
              <h1 className="text-h1">
                {project.title}
              </h1>
              <p className="text-body-large text-muted-foreground">
                {project.summary}
              </p>
            </header>

            {/* Section: Overview */}
            <section id="overview" className="scroll-mt-28 space-y-4">
              <div className="flex items-center gap-2 mb-6">
                <RiFileList3Line className="size-6 text-primary" />
                <h2 className="text-h3">Overview</h2>
              </div>
              <p className="text-body text-foreground/90 whitespace-pre-wrap">
                {content.overview}
              </p>
            </section>

            {/* Section: Steps Followed */}
            <section id="steps" className="scroll-mt-28 space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <RiCheckLine className="size-6 text-primary" />
                <h2 className="text-h3">Execution Steps</h2>
              </div>
              <ol className="space-y-6 list-none ml-0 pl-0">
                {content.stepsFollowed.map((step, idx) => (
                  <li key={idx} className="flex gap-4 items-start bg-secondary/30 p-5 rounded-2xl border border-border/50">
                    <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary font-bold shrink-0 mt-0.5">
                      {idx + 1}
                    </div>
                    <p className="text-body text-foreground/90">{step}</p>
                  </li>
                ))}
              </ol>
            </section>

            {/* Section: Challenges Faced */}
            <section id="challenges" className="scroll-mt-28 space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <RiLightbulbFlashLine className="size-6 text-primary" />
                <h2 className="text-h3">Challenges & Solutions</h2>
              </div>
              <div className="space-y-6">
                {content.challengesFaced.map((item, idx) => (
                  <div key={idx} className="bg-card text-card-foreground p-6 rounded-2xl border shadow-sm space-y-4 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-1 h-full bg-orange-500/50" />
                    <div>
                      <h4 className="text-xs font-bold uppercase text-orange-500/90 tracking-wider mb-2">The Challenge</h4>
                      <p className="text-body">{item.challenge}</p>
                    </div>
                    <div className="border-t pt-4">
                      <h4 className="text-xs font-bold uppercase text-primary/90 tracking-wider mb-2">The Solution</h4>
                      <p className="text-body">{item.solution}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Section: Results & Metrics */}
            <section id="results" className="scroll-mt-28 space-y-6">
              <div className="flex items-center gap-2 mb-6">
                <RiBarChartBoxLine className="size-6 text-primary" />
                <h2 className="text-h3">Results & Metrics</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {content.resultsAndMetrics.map((result, idx) => (
                  <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/20">
                    <span className="text-primary text-2xl mt-1 leading-none font-black block">
                      {(idx + 1).toString().padStart(2, '0')}
                    </span>
                    <p className="text-body font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </section>

          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}
