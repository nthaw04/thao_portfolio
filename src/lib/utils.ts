export function cn(...classes: Array<string | undefined | null | false>) {
  return classes.filter(Boolean).join(" ");
}

export function formatTags(tags: string[]) {
  return tags.join(" • ");
}
