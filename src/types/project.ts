/**
 * Type definitions for project/case-study data.
 * Import from "@/types" (barrel) — never import this file directly.
 */

import type { WithVisible } from "./core"

// ─── Project Detail ────────────────────────────────────────────────────────

export interface ChallengeEntry {
  challenge: string;
  solution: string;
}

export interface ProjectDetail {
  overview: string;
  stepsFollowed: string[];
  challengesFaced: ChallengeEntry[];
  resultsAndMetrics: string[];
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
