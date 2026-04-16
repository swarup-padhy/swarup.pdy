/**
 * Core type definitions for all non-project data sections.
 * Single source of truth for the data layer.
 * Import from "@/types" (barrel) — never import this file directly.
 */

// ─── Global Config ─────────────────────────────────────────────────────────

export interface Config {
  availability: boolean;
  showOpenToWorkBadge: boolean;
  maintenanceMode: boolean;
}

// ─── Personal / Shared ─────────────────────────────────────────────────────

export interface Socials {
  linkedin: string;
  github: string;
  email: string;
}

export interface Personal {
  name: string;
  occupation: string;
  location: string;
  resumeLink: string;
  bio: string;
  socials: Socials;
}

// ─── Shared Primitives ─────────────────────────────────────────────────────

/** Any section that can be toggled on/off via JSON */
export interface WithVisible {
  visible: boolean;
}

/** A standard section label + content pair */
export interface SectionMeta extends WithVisible {
  tagline: string;
  headline: string;
}

// ─── Navbar ────────────────────────────────────────────────────────────────

export interface NavLink {
  label: string;
  href: string;
}

export interface NavbarData {
  links: NavLink[];
}

// ─── Hero ──────────────────────────────────────────────────────────────────

export interface CtaPair {
  primary: { label: string; href: string };
  secondary: { label: string; href: string };
}

export interface HeroData extends WithVisible {
  headline: string;
  subtitle: string;
  skillsLabel: string;
  skills: string[];
  ctas: CtaPair;
}

// ─── Overview ──────────────────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
}

export interface SkillGroup {
  title: string;
  skills: string[];
}

export interface OverviewData extends SectionMeta {
  description: string;
  stats: Stat[];
  skillGroups: SkillGroup[];
}

// ─── About ─────────────────────────────────────────────────────────────────

export interface Highlight {
  label: string;
  value: string;
}

export interface AboutData extends SectionMeta {
  paragraphs: string[];
  highlights: Highlight[];
}

// ─── Contact ───────────────────────────────────────────────────────────────

export interface ContactLink {
  label: string;
  value: string;
  href: string;
}

export interface ContactData extends SectionMeta {
  description: string;
  links: ContactLink[];
}

// ─── Footer ────────────────────────────────────────────────────────────────

export interface FooterData extends WithVisible {
  footerNote: string;
}
