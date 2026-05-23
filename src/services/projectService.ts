import {
  getAllProjects,
  getProjectBySlug,
  getFeaturedProjects,
} from "../lib/content";
import { Project } from "../types/project";

export function fetchProjects(): Project[] {
  return getAllProjects();
}

export function fetchProjectDetail(slug: string): Project | undefined {
  return getProjectBySlug(slug);
}

export function fetchFeaturedProjects(): Project[] {
  return getFeaturedProjects();
}
