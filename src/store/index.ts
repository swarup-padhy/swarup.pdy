/**
 * Central data store — the ONLY module that imports raw JSON files.
 *
 * All components and hooks must consume data through this module.
 * To migrate from static JSON to a live API, only this file needs changing.
 *
 * Exports typed, named constants — no `as` casts scattered across the codebase.
 */

import type {
  Config,
  Personal,
  NavbarData,
  HeroData,
  OverviewData,
  AboutData,
  ContactData,
  FooterData,
  ProjectsSection,
} from "@/types"

// ─── Raw JSON imports (only place in the codebase) ─────────────────────────

import _config from "@/data/config.json"
import _personal from "@/data/personal.json"
import _navbar from "@/data/navbar.json"
import _hero from "@/data/hero.json"
import _overview from "@/data/overview.json"
import _projects from "@/data/projects.json"
import _about from "@/data/about.json"
import _contact from "@/data/contact.json"
import _footer from "@/data/footer.json"

// ─── Typed, validated exports ───────────────────────────────────────────────
// Using satisfies instead of `as` — TypeScript validates the shape matches
// the interface without widening the type (catches missing/extra fields).

export const config: Config = _config satisfies Config
export const personal: Personal = _personal satisfies Personal
export const navbarData: NavbarData = _navbar satisfies NavbarData
export const heroData: HeroData = _hero satisfies HeroData
export const overviewData: OverviewData = _overview satisfies OverviewData
export const projectsData: ProjectsSection = _projects satisfies ProjectsSection
export const aboutData: AboutData = _about satisfies AboutData
export const contactData: ContactData = _contact satisfies ContactData
export const footerData: FooterData = _footer satisfies FooterData
