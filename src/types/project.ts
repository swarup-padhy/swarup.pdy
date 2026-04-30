/**
 * Type definitions for project/case-study data.
 * Import from "@/types" (barrel) — never import this file directly.
 */

import type { WithVisible } from "./core"

// ─── Project Detail ────────────────────────────────────────────────────────

export type SectionType = "text" | "list" | "challenges" | "metrics" | "code" | "table";

export interface ChallengeEntry {
  challenge: string;
  solution: string;
}

export interface TableSection {
  headers: string[];
  rows: string[][];
}

export interface ProjectSection {
  id: string;
  title: string;
  type: SectionType;
  content?: string;
  language?: string;
  items?: string[];
  challenges?: ChallengeEntry[];
  metrics?: string[];
  table?: TableSection;
}

export interface ProjectDetail {
  sections: ProjectSection[];
}

// ─── Project ───────────────────────────────────────────────────────────────

// Category is driven dynamically from projects.json — not hardcoded here.
// Adding/removing a project category automatically flows through the whole app.
export type ProjectCategory = string;

export interface Project {
  id: string;
  slug: string;
  title: string;
  category: ProjectCategory;
  duration: string;
  summary: string;
  whatCovered: string[];
  impact: string[];
  techStack: string[];
  githubUrl?: string;
  detailContent?: ProjectDetail;
}

// ─── Projects Section ──────────────────────────────────────────────────────

/** The full shape of projects.json — projects array + section-level metadata */
export interface ProjectsSection extends WithVisible {
  headline: string;
  description: string;
  projects: Project[];
}

// ─── Derived Types (computed, not stored) ──────────────────────────────────

export type CategoryCounts = Record<ProjectCategory, number>;
