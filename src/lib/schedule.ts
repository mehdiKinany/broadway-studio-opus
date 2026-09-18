import type { Creneau, Jour } from "@/data/schedule";

export type PublicFilter = "tous" | "enfants" | "ados" | "adultes";

export function publicsForLabel(label?: string): Exclude<PublicFilter, "tous">[] {
  if (!label) return [];
  const normalized = label.toLocaleLowerCase("fr");
  const groups = new Set<Exclude<PublicFilter, "tous">>();
  if (normalized.includes("adultes")) groups.add("adultes");
  if (normalized.includes("ados") || normalized.includes("pré-ados")) groups.add("ados");
  if (normalized.includes("11 ans et +")) {
    groups.add("enfants");
    groups.add("ados");
  }
  const range = normalized.match(/(\d+)\s*[-–]\s*(\d+)\s*ans/);
  if (range && Number(range[2]) <= 12) groups.add("enfants");
  const singleAge = normalized.match(/(\d+)\s*ans/);
  if (singleAge && !normalized.includes("et +") && Number(singleAge[1]) <= 12) groups.add("enfants");
  return [...groups];
}

export function matchesPublic(slot: Creneau, filter: PublicFilter) {
  return filter === "tous" || publicsForLabel(slot.public).includes(filter);
}

export function currentScheduleDay(now = new Date()): Jour | "tous" {
  const day = new Intl.DateTimeFormat("fr-FR", { timeZone: "Africa/Casablanca", weekday: "long" }).format(now).toLowerCase();
  return (["lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"] as Jour[]).includes(day as Jour) ? day as Jour : "tous";
}
