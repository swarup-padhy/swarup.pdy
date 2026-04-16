/**
 * useSection — generic hook for any data-driven section.
 *
 * Consumes any section data object that has a `visible` boolean flag
 * and returns the data alongside a computed `isVisible` property.
 * Components use this to implement the show/hide toggle pattern.
 *
 * @example
 *   const { data, isVisible } = useSection(heroData)
 *   if (!isVisible) return null
 */

import { useMemo } from "react"
import type { WithVisible } from "@/types"

export interface UseSectionReturn<T extends WithVisible> {
  data: T
  isVisible: boolean
}

export function useSection<T extends WithVisible>(sectionData: T): UseSectionReturn<T> {
  return useMemo(
    () => ({
      data: sectionData,
      isVisible: sectionData.visible,
    }),
    // sectionData is a static store reference — stable across renders.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
}
