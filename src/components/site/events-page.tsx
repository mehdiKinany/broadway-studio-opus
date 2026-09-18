import { Link } from "@tanstack/react-router";
import { ArrowRight, CalendarDays, Clock3, Instagram, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealImage, RevealTitle } from "@/components/site/motion";
import { events, previousHighlights, splitEventsByDate, type StudioEvent } from "@/data/events";
import { site } from "@/data/site";
import { useT } from "@/hooks/use-t";

const dateFormatter = new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric", timeZone: "Africa/Casablanca" });

export function EventsPage() {
  const t = useT();
  const { upcoming, past } = splitEventsByDate(events);
  const featured = upcoming[0];
  const otherUpcoming = upcoming.slice(1);
  const schema = events.map(toEventSchema);

  return <main className="bg-background pb-24 pt-32 lg:pt-40">
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    <section className="section-shell"><Reveal><p className="text-xs font-semibold uppercase text-primary">{t.events.eyebrow}</p></Reveal><RevealTitle lines={[t.events.title]} className="mt-5 text-7xl sm:text-9xl" /></section>

    <section className="section-shell mt-12">
      <h2 className="border-b fine-rule pb-4 text-xs font-semibold uppercase text-muted-foreground">{t.events.upcoming}</h2>
      {featured ? <FeaturedEvent event={featured} /> : <p className="py-12 text-muted-foreground">{t.events.noUpcoming}</p>}
      {otherUpcoming.length > 0 && <div className="mt-px grid gap-px bg-border md:grid-cols-2">{otherUpcoming.map((event, index) => <Reveal key={event.id} index={index}><EventCard event={event} /></Reveal>)}</div>}
    </section>

    <section className="mt-20 bg-muted py-20 lg:py-28"><div className="section-shell"><RevealTitle lines={[t.events.past]} className="text-5xl sm:text-7xl" /><div className="mt-10 grid gap-px bg-border md:grid-cols-2">{past.map((event, index) => <Reveal key={event.id} index={index}><EventCard event={event} /></Reveal>)}</div></div></section>

    <section className="section-shell py-20 lg:py-28"><Reveal><h2 className="font-display text-5xl sm:text-7xl">{t.events.highlights}</h2><ul className="mt-10 border-t fine-rule">{previousHighlights.map((item, index) => <li key={item} className="grid grid-cols-[2.5rem_1fr] border-b fine-rule py-5 text-base sm:text-lg"><span className="text-xs text-muted-foreground">{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ul></Reveal></section>

    <section className="bg-primary py-16"><div className="section-shell grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center"><h2 className="font-display max-w-3xl text-5xl sm:text-6xl">{t.events.stayInformed}</h2><div className="flex flex-wrap gap-3"><Button asChild variant="dark" size="lg"><a href={site.social.instagram} target="_blank" rel="noreferrer"><Instagram />{t.events.instagram}</a></Button><Button asChild variant="outline" size="lg"><Link to="/demande-dinformations">{t.events.info}<ArrowRight /></Link></Button></div></div></section>
  </main>;
}

function FeaturedEvent({ event }: { event: StudioEvent }) {
  const t = useT();
  return <article className="grid gap-10 py-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:gap-16">{event.affiche && <RevealImage src={event.affiche} alt={t.events.posterAlt} className="aspect-[4/5] bg-muted" />}<Reveal><p className="text-xs font-semibold uppercase text-primary">{formatDate(event)}</p><h3 className="font-display mt-4 text-5xl sm:text-7xl">{event.titre}</h3><p className="mt-6 text-xl leading-8">{event.description}</p><dl className="mt-8 border-y fine-rule py-5 text-sm"><Info icon={<Clock3 />} label={t.events.time} value={event.horaire} /><Info icon={<MapPin />} label={t.events.place} value={event.lieu} /></dl>{event.disciplines && <div className="mt-7"><p className="text-xs font-semibold uppercase text-muted-foreground">{t.events.disciplines}</p><p className="mt-3 leading-7">{event.disciplines.join(", ")}.</p></div>}</Reveal></article>;
}
function EventCard({ event }: { event: StudioEvent }) { return <article className="h-full bg-background p-6 sm:p-8"><p className="text-xs font-semibold uppercase text-primary">{formatDate(event)}</p><h3 className="font-display mt-4 text-3xl sm:text-4xl">{event.titre}</h3>{event.description && <p className="mt-5 leading-7 text-muted-foreground">{event.description}</p>}<div className="mt-6 space-y-2 text-sm">{event.horaire && <p className="flex items-center gap-2"><Clock3 className="size-4 text-primary" />{event.horaire}</p>}<p className="flex items-center gap-2"><MapPin className="size-4 text-primary" />{event.lieu}</p></div></article>; }
function Info({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) { return <div className="grid grid-cols-[1.25rem_5rem_1fr] gap-3 py-2 [&_svg]:size-4 [&_svg]:text-primary">{icon}<dt className="font-semibold">{label}</dt><dd className="text-muted-foreground">{value}</dd></div>; }
function parseDate(value: string) { const [year, month, day] = value.split("-").map(Number); return new Date(Date.UTC(year, month - 1, day)); }
function formatDate(event: StudioEvent) { const start = dateFormatter.format(parseDate(event.dateDebut)); return event.dateFin ? `${start} — ${dateFormatter.format(parseDate(event.dateFin))}` : start; }
function toEventSchema(event: StudioEvent) { return { "@context": "https://schema.org", "@type": "Event", name: event.titre, startDate: event.dateDebut, ...(event.dateFin ? { endDate: event.dateFin } : {}), description: event.description || event.titre, location: { "@type": "Place", name: event.lieu, address: site.address }, ...(event.affiche ? { image: event.affiche } : {}) }; }
