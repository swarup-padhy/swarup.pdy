import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { RiGithubFill, RiArrowRightUpLine, RiCheckLine } from "@remixicon/react"
import type { Project } from "@/types"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"


interface ProjectCardProps {
  project: Project
  index: number
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.article
      id={`project-${project.slug}`}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start py-10 first:pt-0"
    >
      {/* Left side: Summary & Intro */}
      <div className="w-full lg:w-5/12 space-y-6">
        <div className="flex items-center gap-3">
          <span className="text-xs font-semibold tracking-widest text-muted-foreground uppercase">
            {project.category}
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-border" />
          <span className="text-xs font-medium text-muted-foreground">{project.duration}</span>
        </div>

        <h3 className="text-h2">{project.title}</h3>

        <p className="text-body text-muted-foreground">{project.summary}</p>

        <div className="pt-2 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="text-[10px] font-semibold tracking-wide text-muted-foreground border-border/50 hover:border-primary/40 hover:text-primary transition-colors duration-200 px-2 py-0.5 rounded-md"
            >
              {tech}
            </Badge>
          ))}
        </div>

        {(project.detailContent || project.githubUrl) && (
          <div className="pt-6 flex flex-wrap items-center gap-4">
            {project.detailContent && (
              <Button asChild size="lg" className="rounded-full px-7 font-medium">
                <Link 
                  to={`/case-studies/${project.slug}`}
                  onClick={() => sessionStorage.setItem("lastVisitedProject", project.slug)}
                >
                  Read Case Study <RiArrowRightUpLine className="ml-2 size-4" />
                </Link>
              </Button>
            )}
            {project.githubUrl && (
              <Button variant="outline" size="lg" className="rounded-full px-7 font-medium" asChild>
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                  <RiGithubFill className="mr-2 size-5" /> View Code
                </a>
              </Button>
            )}
          </div>
        )}
      </div>

      {/* Right side: Details Grid */}
      <div className="w-full lg:w-7/12 grid sm:grid-cols-2 gap-8 lg:gap-12 bg-muted/20 rounded-3xl p-8 lg:p-10 border border-border/40">
        <div className="space-y-5">
          <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-foreground/70">
            What I Covered
          </h4>
          <ul className="space-y-4">
            {project.whatCovered.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-body-small text-muted-foreground">
                <div className="mt-2 w-1.5 h-1.5 rounded-full bg-foreground/30 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-5">
          <h4 className="text-xs font-bold tracking-[0.15em] uppercase text-foreground/70">
            Impact & Results
          </h4>
          <ul className="space-y-4">
            {project.impact.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-body-small text-foreground/90 font-medium">
                <RiCheckLine className="mt-[2px] size-4 text-primary shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.article>
  )
}
