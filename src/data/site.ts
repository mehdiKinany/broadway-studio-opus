export type TimeSlot = { start: string; end: string };
export type OpeningDay = { day: string; dayIndex: number; slots: TimeSlot[] };

export const site = {
  name: "BROADWAY STUDIO",
  baseline: "Centre artistique et sportif — Ville Verte, Bouskoura",
  since: 2022,
  address: "Lot n°1, Lotissement Les Jardins de Massignon 2, Av. Patrice Lumumba, Ville Verte, Bouskoura 27182, Maroc",
  phones: ["+212 676 228 232", "+212 662 777 417"],
  email: "contact@bstudio.ma",
  plusCode: "F9QJ+6F Bouskoura",
  googleRating: { score: 4.5, count: 28 },
  social: {
    instagram: "https://www.instagram.com/broadwaystudio_bouskoura/",
    facebook: "https://www.facebook.com/profile.php?id=61565777400150",
    youtube: "https://www.youtube.com/@broadwaystudio.bouskoura",
  },
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=F9QJ%2B6F%20Bouskoura",
  mapEmbedUrl: "https://www.google.com/maps?q=F9QJ%2B6F%20Bouskoura&output=embed",
  hours: [
    { day: "Lundi", dayIndex: 1, slots: [{ start: "15:30", end: "20:00" }] },
    { day: "Mardi", dayIndex: 2, slots: [{ start: "10:30", end: "12:30" }, { start: "15:30", end: "20:00" }] },
    { day: "Mercredi", dayIndex: 3, slots: [{ start: "10:30", end: "12:30" }, { start: "14:00", end: "20:00" }] },
    { day: "Jeudi", dayIndex: 4, slots: [{ start: "10:30", end: "12:30" }, { start: "15:30", end: "20:00" }] },
    { day: "Vendredi", dayIndex: 5, slots: [{ start: "10:30", end: "12:30" }, { start: "15:30", end: "20:00" }] },
    { day: "Samedi", dayIndex: 6, slots: [{ start: "09:00", end: "15:00" }] },
    { day: "Dimanche", dayIndex: 0, slots: [] },
  ] satisfies OpeningDay[],
} as const;

export function getOpenStatus(now = new Date()) {
  const parts = new Intl.DateTimeFormat("fr-FR", { timeZone: "Africa/Casablanca", weekday: "short", hour: "2-digit", minute: "2-digit", hour12: false }).formatToParts(now);
  const weekday = parts.find((part) => part.type === "weekday")?.value.toLowerCase();
  const dayMap: Record<string, number> = { dim: 0, lun: 1, mar: 2, mer: 3, jeu: 4, ven: 5, sam: 6 };
  const dayIndex = weekday ? dayMap[weekday.slice(0, 3)] : undefined;
  const hour = Number(parts.find((part) => part.type === "hour")?.value ?? 0);
  const minute = Number(parts.find((part) => part.type === "minute")?.value ?? 0);
  const current = hour * 60 + minute;
  const today = site.hours.find((item) => item.dayIndex === dayIndex);
  const isOpen = today?.slots.some((slot) => {
    const [startHour, startMinute] = slot.start.split(":").map(Number);
    const [endHour, endMinute] = slot.end.split(":").map(Number);
    return current >= startHour * 60 + startMinute && current < endHour * 60 + endMinute;
  }) ?? false;
  return { isOpen, today };
}

export const phoneHref = (phone: string) => `tel:${phone.replace(/\s/g, "")}`;