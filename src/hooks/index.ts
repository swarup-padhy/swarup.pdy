/**
 * Hooks barrel — single entry point for all custom hooks.
 *
 * Usage:
 *   import { useConfig, useProjects, useSection } from "@/hooks"
 */

export { useConfig } from "./useConfig"
export type { UseConfigReturn } from "./useConfig"

export { useSection } from "./useSection"
export type { UseSectionReturn } from "./useSection"

export { useProjects } from "./useProjects"
export type { UseProjectsReturn } from "./useProjects"
