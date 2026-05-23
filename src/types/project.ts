export interface Project {
  slug: string;
  title: string;
  category: string;
  description: string;
  preview: string;
  tags: string[];
  heroImage: string;
  githubUrl?: string;
  githubUrlClient?: string;
  githubUrlMobile?: string;
  liveUrl?: string;
  liveUrlClient?: string;
}
