import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealImage, RevealTitle } from "@/components/site/motion";
import { disciplines } from "@/data/disciplines";
import { disciplineMedia, type DisciplineMediaSlug } from "@/data/media";
import { useT } from "@/hooks/use-t";

export function DisciplinePage({ slug }: { slug: DisciplineMediaSlug }) {
  const t = useT();
  const discipline = disciplines.find((item) => item.slug === slug);
  if (!discipline) return null;
  const images = disciplineMedia[slug];
  const descriptions = t.media[slug];
  return <main className="bg-background pb-24 pt-32 lg:pt-40">
    <section className="section-shell">
      <Reveal><Link to="/" className="motion-link inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase"><ArrowLeft className="size-4" />{t.pages.back}</Link></Reveal>
      <div className="mt-8 grid gap-8 border-t fine-rule pt-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
        <RevealTitle lines={[discipline.name.toUpperCase()]} className="text-6xl sm:text-8xl lg:text-9xl" />
        <Reveal><p className="text-lg leading-8 text-muted-foreground">{discipline.summary}</p><Button asChild variant="dark" size="lg" className="mt-7"><Link to="/demande-dinformations">{t.nav.info}<ArrowRight /></Link></Button></Reveal>
      </div>
    </section>
    <section className="section-shell mt-16 grid gap-4 lg:mt-24 lg:grid-cols-12">
      {images.map((src, index) => <figure key={src} className={index === 0 ? "lg:col-span-7" : "lg:col-span-5"}>
        <RevealImage src={src} alt={descriptions[index]?.alt ?? discipline.name} className={index === 0 ? "aspect-[4/3]" : "aspect-[4/3]"} />
        <figcaption className="mt-3 text-sm text-muted-foreground">{descriptions[index]?.caption}</figcaption>
      </figure>)}
    </section>
    <section className="section-shell mt-20 border-t fine-rule pt-10"><Reveal><p className="text-xs font-semibold uppercase text-primary">{t.disciplines.program}</p><ul className="mt-5 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">{discipline.subDisciplines.map((item) => <li key={item} className="bg-background p-5 text-lg">{item}</li>)}</ul></Reveal></section>
  </main>;
}