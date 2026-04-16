/**
 * Type barrel — single entry point for all portfolio types.
 *
 * Usage:
 *   import type { Config, Project, HeroData } from "@/types"
 *
 * Never import from "@/types/core" or "@/types/project" directly.
 */

export type {
  Config,
  Personal,
  Socials,
  NavbarData,
  NavLink,
  HeroData,
  CtaPair,
  OverviewData,
  Stat,
  SkillGroup,
  AboutData,
  Highlight,
  ContactData,
  ContactLink,
  FooterData,
  WithVisible,
  SectionMeta,
} from "./core"

export type {
  Project,
  ProjectCategory,
  ProjectsSection,
  ProjectDetail,
  ChallengeEntry,
  CategoryCounts,
} from "./project"
