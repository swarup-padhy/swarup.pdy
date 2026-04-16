import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { useProjects } from "@/hooks"
import { ProjectCard } from "./ProjectCard"

const ALL_CATEGORY = "All"

export function CaseStudies() {
  const { projects, categories, categoryCounts, isVisible, headline, description } = useProjects()
  const [activeFilter, setActiveFilter] = useState<string>(ALL_CATEGORY)

  // Restore scroll position when returning from Case Study Detail via Session Storage
  useEffect(() => {
    const lastVisited = sessionStorage.getItem("lastVisitedProject")
    if (lastVisited) {
      // Small timeout allows initial DOM block + framer-motion variants to shift into layout
      const timer = setTimeout(() => {
        const el = document.getElementById(`project-${lastVisited}`)
        if (el) {
          const y = el.getBoundingClientRect().top + window.scrollY - 100 // -100px offset for fixed navbar
          window.scrollTo({ top: y, behavior: "instant" })
        }
        sessionStorage.removeItem("lastVisitedProject")
      }, 150)
      return () => clearTimeout(timer)
    }
  }, [])

  if (!isVisible) return null
  
  const allCategories = [ALL_CATEGORY, ...categories]
  const counts: Record<string, number> = {
    [ALL_CATEGORY]: projects.length,
    ...categoryCounts,
  }

  const filteredProjects = projects.filter((project) =>
    activeFilter === ALL_CATEGORY ? true : project.category === activeFilter
  )

  return (
    <section id="case-study" className="section-padding bg-background relative border-t border-border/40">
      <div className="container-layout">

        {/* Header */}
        <div className="flex flex-col gap-10 mb-16 lg:mb-20 pb-12 border-b border-border/80">
          <div className="max-w-2xl space-y-5">
            <h2 className="text-h1">{headline}</h2>
            <p className="text-body-large text-muted-foreground">
              {description}
            </p>
          </div>

          {/* Filter bar */}
          <div
            className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4"
            role="group"
            aria-label="Filter case studies"
          >
            {allCategories.map((category) => {
              const isActive = activeFilter === category
              return (
                <button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  aria-pressed={isActive}
                  className={`relative pb-1.5 text-sm font-medium transition-colors duration-300 hover:text-foreground ${
                    isActive ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <span className="flex items-center gap-1.5">
                    {category}
                    <span className="text-[10px] opacity-60">({counts[category]})</span>
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="active-filter-underline"
                      className="absolute bottom-0 left-0 right-0 h-px bg-foreground"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Project List */}
        <div className="grid grid-cols-1 gap-16 lg:gap-24 divide-y divide-border/40">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-24 text-center space-y-4"
          >
            <p className="text-h3 text-muted-foreground">No projects found.</p>
            <Button
              variant="outline"
              onClick={() => setActiveFilter(ALL_CATEGORY)}
              className="rounded-full px-6"
            >
              View All Work
            </Button>
          </motion.div>
        )}
      </div>
    </section>
  )
}
