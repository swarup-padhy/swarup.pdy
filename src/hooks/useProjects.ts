/**
 * useProjects — production-grade hook for case study data.
 *
 * - Consumes projectsData from the central store (not raw JSON)
 * - All derived values (categories, counts) are memoized
 * - Returns stable references — safe for use in dependency arrays
 */

import { useMemo } from "react"
import { projectsData } from "@/store"
import type { Project, ProjectsSection, CategoryCounts } from "@/types"

export interface UseProjectsReturn {
  /** Section-level visibility flag */
  isVisible: boolean
  /** Section headline from projects.json */
  headline: string
  /** Section description from projects.json */
  description: string
  /** Full, typed project list */
  projects: Project[]
  /** Deduplicated, ordered list of categories */
  categories: string[]
  /** Map of category name → count of projects */
  categoryCounts: CategoryCounts
  /** Total number of projects */
  totalCount: number
}

export function useProjects(): UseProjectsReturn {
  const section: ProjectsSection = projectsData

  const projects = useMemo(() => section.projects, [section.projects])

  const categories = useMemo(
    () => Array.from(new Set(projects.map((p) => p.category))),
    [projects]
  )

  const categoryCounts = useMemo(
    () =>
      categories.reduce<CategoryCounts>((acc, cat) => {
        acc[cat] = projects.filter((p) => p.category === cat).length
        return acc
      }, {}),
    [categories, projects]
  )

  return {
    isVisible: section.visible,
    headline: section.headline,
    description: section.description,
    projects,
    categories,
    categoryCounts,
    totalCount: projects.length,
  }
}
