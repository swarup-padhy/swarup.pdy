import { useEffect } from "react"
import { useParams, Link, Navigate } from "react-router-dom"
import { RiArrowLeftLine } from "@remixicon/react"
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

  // If a user manually types a URL for a project that doesn't have a case study
  if (!content) {
    return <Navigate to="/" replace />
  }

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
                {content.sections.map((section, idx) => (
                  <a key={section.id} href={`#${section.id}`} className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors hover:translate-x-1 duration-200">
                    {idx + 1}. {section.title}
                  </a>
                ))}
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
          <article className="w-full min-w-0 space-y-16">
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

            {content.sections.map((section) => (
              <section key={section.id} id={section.id} className="scroll-mt-28 space-y-6">
                <div className="flex items-center gap-2 mb-6">
                  <h2 className="text-h3">{section.title}</h2>
                </div>
                
                {section.type === "text" && (
                  <p className="text-body text-foreground/90 whitespace-pre-wrap">
                    {section.content}
                  </p>
                )}

                {section.type === "list" && section.items && (
                  <ol className="space-y-6 list-none ml-0 pl-0">
                    {section.items.map((item, idx) => (
                      <li key={idx} className="flex gap-4 items-start bg-secondary/30 p-5 rounded-2xl border border-border/50">
                        <div className="flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <p className="text-body text-foreground/90 whitespace-pre-wrap">{item}</p>
                      </li>
                    ))}
                  </ol>
                )}

                {section.type === "code" && section.content && (
                  <div className="bg-zinc-950 rounded-2xl overflow-hidden border border-border/50 shadow-sm">
                    <div className="flex items-center px-4 py-2 border-b border-zinc-800 bg-zinc-900/50">
                      <span className="text-xs font-mono text-zinc-400">{section.language || 'text'}</span>
                    </div>
                    <pre className="p-4 overflow-x-auto">
                      <code className="text-sm font-mono text-zinc-300 whitespace-pre">
                        {section.content}
                      </code>
                    </pre>
                  </div>
                )}

                {section.type === "challenges" && section.challenges && (
                  <div className="space-y-6">
                    {section.challenges.map((item, idx) => (
                      <div key={idx} className="bg-card text-card-foreground p-6 rounded-2xl border shadow-sm space-y-4 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-orange-500/50" />
                        <div>
                          <h4 className="text-xs font-bold uppercase text-orange-500/90 tracking-wider mb-2">The Challenge</h4>
                          <p className="text-body whitespace-pre-wrap">{item.challenge}</p>
                        </div>
                        <div className="border-t pt-4">
                          <h4 className="text-xs font-bold uppercase text-primary/90 tracking-wider mb-2">The Solution</h4>
                          <p className="text-body whitespace-pre-wrap">{item.solution}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {section.type === "table" && section.table && (
                  <div className="overflow-x-auto rounded-2xl border border-border/50 shadow-sm bg-card">
                    <table className="w-full text-left border-collapse text-sm">
                      <thead className="bg-secondary/50">
                        <tr>
                          {section.table.headers.map((header, idx) => (
                            <th key={idx} className="p-4 font-semibold border-b text-muted-foreground whitespace-nowrap">{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {section.table.rows.map((row, rIdx) => (
                          <tr key={rIdx} className="border-b last:border-0 hover:bg-muted/30 transition-colors">
                            {row.map((cell, cIdx) => (
                              <td key={cIdx} className="p-4 align-top whitespace-pre-wrap min-w-[150px]">
                                {cell.startsWith('/evidence/') ? (
                                  cell.toLowerCase().endsWith('.mp4') ? (
                                    <video src={cell} controls className="max-w-[240px] rounded border bg-black/5" />
                                  ) : (
                                    <a href={cell} target="_blank" rel="noopener noreferrer">
                                      <img src={cell} alt="Evidence" className="max-w-[240px] rounded border bg-black/5 hover:opacity-80 transition-opacity" />
                                    </a>
                                  )
                                ) : (
                                  cell
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}

                {section.type === "metrics" && section.metrics && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {section.metrics.map((result, idx) => (
                      <div key={idx} className="flex items-start gap-4 p-5 rounded-2xl bg-primary/5 border border-primary/20">
                        <span className="text-primary text-2xl mt-1 leading-none font-black block">
                          {(idx + 1).toString().padStart(2, '0')}
                        </span>
                        <p className="text-body font-medium">{result}</p>
                      </div>
                    ))}
                  </div>
                )}
              </section>
            ))}

          </article>
        </div>
      </div>
      <Footer />
    </>
  )
}
