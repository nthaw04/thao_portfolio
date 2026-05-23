import fs from "fs";
import path from "path";
import { Project } from "../types/project";

const projectsPath = path.join(process.cwd(), "src/data/projects.json");
const projectData = JSON.parse(
  fs.readFileSync(projectsPath, "utf-8"),
) as Project[];

export function getAllProjects(): Project[] {
  return projectData;
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projectData.find((project) => project.slug === slug);
}

export function getFeaturedProjects(limit = 3): Project[] {
  return projectData.slice(0, limit);
}
