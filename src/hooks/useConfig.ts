/**
 * useConfig — typed access to global site configuration flags.
 *
 * Provides semantic, boolean-named properties instead of raw JSON keys.
 * Components consuming this hook are insulated from JSON key renames.
 */

import { useMemo } from "react"
import { config } from "@/store"
import type { Config } from "@/types"

export interface UseConfigReturn {
  /** Raw config object for advanced access */
  raw: Config
  /** Is the owner currently available for work? Controls Hero badge. */
  isAvailable: boolean
  /** Show the animated "Open to Work" status indicator in the Hero? */
  showOpenToWorkBadge: boolean
  /** Put the entire site into maintenance mode (shows splash screen). */
  isMaintenanceMode: boolean
}

export function useConfig(): UseConfigReturn {
  return useMemo(
    () => ({
      raw: config,
      isAvailable: config.availability,
      showOpenToWorkBadge: config.showOpenToWorkBadge,
      isMaintenanceMode: config.maintenanceMode,
    }),
    // config is a static import — dependency array is intentionally empty.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  )
}
