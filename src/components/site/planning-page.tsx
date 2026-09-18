import { Link } from "@tanstack/react-router";
import { CalendarDays, Clock3, Music2, Phone } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealTitle } from "@/components/site/motion";
import { disciplines } from "@/data/disciplines";
import { JOURS, NOTE_MUSIQUE, schedule, type Creneau, type Jour } from "@/data/schedule";
import { phoneHref, site } from "@/data/site";
import { currentScheduleDay, matchesPublic, type PublicFilter } from "@/lib/schedule";
import { useT } from "@/hooks/use-t";

type DayFilter = Jour | "tous";
const selectClass = "min-h-11 w-full border border-border bg-background px-3 text-sm text-foreground focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring";

export function PlanningPage() {
  const t = useT();
  const [day, setDay] = useState<DayFilter>("tous");
  const [discipline, setDiscipline] = useState("toutes");
  const [audience, setAudience] = useState<PublicFilter>("tous");

  useEffect(() => {
    if (window.matchMedia("(max-width: 767px)").matches) setDay(currentScheduleDay());
  }, []);

  const availableDisciplines = useMemo(() => [...new Set(schedule.map((slot) => slot.discipline))].sort((a, b) => disciplineName(a, t.planning.disciplineNames).localeCompare(disciplineName(b, t.planning.disciplineNames), "fr")), [t]);
  const filtered = useMemo(() => schedule.filter((slot) => (day === "tous" || slot.jour === day) && (discipline === "toutes" || slot.discipline === discipline) && matchesPublic(slot, audience)), [day, discipline, audience]);
  const active = day !== "tous" || discipline !== "toutes" || audience !== "tous";
  const visibleDays = JOURS.filter((item) => filtered.some((slot) => slot.jour === item));
  const reset = () => { setDay("tous"); setDiscipline("toutes"); setAudience("tous"); };

  return <main className="bg-background pb-24 pt-32 lg:pt-40">
    <section className="section-shell">
      <Reveal><p className="text-xs font-semibold uppercase text-primary">{t.planning.eyebrow}</p></Reveal>
      <RevealTitle lines={[t.planning.title]} className="mt-5 max-w-5xl text-6xl sm:text-8xl lg:text-9xl" />
      <Reveal><p className="mt-5 text-lg text-muted-foreground">{t.planning.subtitle}</p></Reveal>
    </section>

    <section className="section-shell mt-12 border-y fine-rule py-7" aria-labelledby="planning-filters">
      <h2 id="planning-filters" className="text-xs font-semibold uppercase text-muted-foreground">{t.planning.filters}</h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-3">
        <Filter label={t.planning.day}><select className={selectClass} value={day} onChange={(event) => setDay(event.target.value as DayFilter)}><option value="tous">{t.planning.allDays}</option>{JOURS.map((item) => <option key={item} value={item}>{capitalize(item)}</option>)}</select></Filter>
        <Filter label={t.planning.discipline}><select className={selectClass} value={discipline} onChange={(event) => setDiscipline(event.target.value)}><option value="toutes">{t.planning.allDisciplines}</option>{availableDisciplines.map((slug) => <option key={slug} value={slug}>{disciplineName(slug, t.planning.disciplineNames)}</option>)}</select></Filter>
        <Filter label={t.planning.audience}><select className={selectClass} value={audience} onChange={(event) => setAudience(event.target.value as PublicFilter)}><option value="tous">{t.planning.allAudiences}</option><option value="enfants">{t.planning.children}</option><option value="ados">{t.planning.teens}</option><option value="adultes">{t.planning.adults}</option></select></Filter>
      </div>
      <div className="mt-5 flex min-h-11 items-center justify-between gap-4"><p aria-live="polite" className="font-semibold">{filtered.length === 1 ? t.planning.oneResult : `${filtered.length} ${t.planning.results}`}</p>{active && <Button variant="outline" onClick={reset}>{t.planning.reset}</Button>}</div>
    </section>

    <section className="section-shell mt-10">
      {filtered.length === 0 ? <div className="border-y fine-rule py-16 text-center"><p className="text-lg">{t.planning.empty}</p><Button variant="dark" className="mt-6" onClick={reset}>{t.planning.reset}</Button></div> : <>
        <div className="space-y-10 md:hidden">{visibleDays.map((item) => <DayGroup key={item} day={item} slots={filtered.filter((slot) => slot.jour === item)} names={t.planning.disciplineNames} confirm={t.planning.confirm} current={item === currentScheduleDay()} />)}</div>
        <div className={`hidden gap-px bg-border md:grid ${day === "tous" ? "md:grid-cols-3 xl:grid-cols-6" : "md:grid-cols-1"}`}>{visibleDays.map((item) => <DayColumn key={item} day={item} slots={filtered.filter((slot) => slot.jour === item)} names={t.planning.disciplineNames} confirm={t.planning.confirm} current={item === currentScheduleDay()} />)}</div>
      </>}
    </section>

    <section className="section-shell mt-20 grid gap-px bg-border lg:grid-cols-2">
      <Reveal className="bg-primary p-7 sm:p-10"><Music2 className="size-6" /><h2 className="font-display mt-6 text-4xl">{t.planning.musicTitle}</h2><p className="mt-4 max-w-xl leading-7">{NOTE_MUSIQUE}</p><Button asChild variant="dark" size="lg" className="mt-7"><Link to="/demande-dinformations">{t.planning.info}</Link></Button></Reveal>
      <Reveal className="bg-surface-deep p-7 text-hero-foreground sm:p-10"><CalendarDays className="size-6 text-primary" /><p className="mt-6 max-w-xl text-lg leading-8">{t.planning.notice}</p><div className="mt-7 space-y-2">{site.phones.map((phone) => <a key={phone} href={phoneHref(phone)} className="motion-link flex min-h-11 items-center gap-3 text-primary"><Phone className="size-4" />{phone}</a>)}</div></Reveal>
    </section>
  </main>;
}

function Filter({ label, children }: { label: string; children: React.ReactNode }) { return <label className="grid gap-2 text-sm font-semibold">{label}{children}</label>; }
function capitalize(value: string) { return value.charAt(0).toUpperCase() + value.slice(1); }
function disciplineName(slug: string, names: Record<string, string>) { return names[slug] ?? capitalize(slug.replaceAll("-", " ")); }
function disciplineHref(slug: string) { return disciplines.find((item) => item.slug === slug && item.href !== "/planning")?.href; }
function SlotCard({ slot, names, confirm, mobile = false }: { slot: Creneau; names: Record<string, string>; confirm: string; mobile?: boolean }) {
  const href = disciplineHref(slot.discipline);
  const label = disciplineName(slot.discipline, names);
  return <article className="bg-background p-4">
    <p className={`flex items-center gap-2 font-semibold ${mobile ? "font-display text-3xl" : "text-sm"}`}><Clock3 className="size-4 text-primary" />{slot.debut.replace(":", "h")}–{slot.fin.replace(":", "h")}</p>
    <h3 className="mt-3 text-base font-bold leading-5">{slot.cours}</h3>
    {slot.public && <p className="mt-2 text-xs text-muted-foreground">{slot.public}</p>}
    {href ? <Link to={href} className="motion-link mt-3 inline-block text-xs font-semibold uppercase text-muted-foreground hover:text-primary">{label}</Link> : <p className="mt-3 text-xs font-semibold uppercase text-muted-foreground">{label}</p>}
    {slot.aConfirmer && <p className="mt-3 border-l-2 border-primary pl-2 text-xs text-muted-foreground">{confirm}</p>}
  </article>;
}
function DayGroup({ day, slots, names, confirm, current }: { day: Jour; slots: Creneau[]; names: Record<string, string>; confirm: string; current: boolean }) { return <section><h2 className={`border-b-2 pb-3 font-display text-4xl ${current ? "border-primary" : "border-foreground"}`}>{capitalize(day)}{current && <span className="ml-3 align-middle font-sans text-xs font-semibold uppercase text-primary">Aujourd’hui</span>}</h2><div className="mt-4 grid gap-px bg-border">{slots.map((slot) => <SlotCard key={slot.id} slot={slot} names={names} confirm={confirm} mobile />)}</div></section>; }
function DayColumn({ day, slots, names, confirm, current }: { day: Jour; slots: Creneau[]; names: Record<string, string>; confirm: string; current: boolean }) { return <section className="min-w-0 bg-muted"><h2 className={`sticky top-[4.25rem] z-10 border-b-2 bg-surface-deep px-3 py-4 text-sm font-semibold uppercase text-hero-foreground ${current ? "border-primary" : "border-transparent"}`}>{capitalize(day)}</h2><div className="grid gap-px bg-border">{slots.map((slot) => <SlotCard key={slot.id} slot={slot} names={names} confirm={confirm} />)}</div></section>; }
