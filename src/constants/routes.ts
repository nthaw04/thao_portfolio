export const routes = {
  home: "/",
  about: "/about",
  resume: "/resume",
  projects: "/projects",
  projectDetail: (slug: string) => `/projects/${slug}`,
};
