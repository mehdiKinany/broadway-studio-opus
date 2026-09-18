import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CalendarDays, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealImage, RevealTitle } from "@/components/site/motion";
import { disciplines } from "@/data/disciplines";
import { disciplineMedia } from "@/data/media";
import { schedule } from "@/data/schedule";
import { getOpenStatus, phoneHref, site } from "@/data/site";
import { testimonials } from "@/data/testimonials";
import { useT } from "@/hooks/use-t";
import heroAsset from "@/assets/studio-exterieur.jpg.asset.json";
import eventAsset from "@/assets/affiche-portes-ouvertes-sept-2026.png.asset.json";
import signAsset from "@/assets/enseigne-lumineuse.jpeg.asset.json";

const SectionLabel = ({ children }: { children: string }) => <p className="text-xs font-bold uppercase text-primary">{children}</p>;

export function HomePage() {
  const t = useT();
  const [quote, setQuote] = useState(0);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const currentTestimonial = testimonials[quote] ?? testimonials[0];
  const status = getOpenStatus();
  const universeItems = disciplines;
  const scheduleLabel = (slug: string) => {
    if (slug === "musique") return t.disciplines.reservation;
    const count = schedule.filter((slot) => slot.discipline === slug).length;
    if (count === 0) return undefined;
    return count === 1 ? t.disciplines.oneScheduledCourse : `${count} ${t.disciplines.scheduledCourses}`;
  };
  useEffect(() => {
    const image = heroImageRef.current;
    if (!image || window.matchMedia("(max-width: 1023px), (prefers-reduced-motion: reduce)").matches) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      const progress = Math.min(window.scrollY / Math.max(window.innerHeight, 1), 1);
      image.style.setProperty("--parallax-y", `${progress * 12}%`);
    };
    const onScroll = () => { if (!frame) frame = window.requestAnimationFrame(update); };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (frame) window.cancelAnimationFrame(frame); };
  }, []);
  return <main>
    <section className="relative flex min-h-[92svh] items-end overflow-hidden bg-surface-deep pb-14 pt-32 text-hero-foreground sm:pb-20 lg:min-h-[94svh] lg:pb-24">
      <div ref={heroImageRef} className="hero-parallax absolute inset-0"><img src={heroAsset.url} alt={t.hero.imageAlt} className="hero-image size-full object-cover" /></div>
      <div className="absolute inset-0 bg-surface-deep/65" />
      <div className="section-shell relative z-10">
        <p className="mb-5 text-xs font-semibold uppercase text-primary">{site.baseline}</p>
         <h1 className="editorial-title max-w-5xl text-5xl sm:text-7xl lg:text-8xl xl:text-9xl">{t.hero.titleLines.map((line) => <span key={line} className="hero-title-line">{line}</span>)}</h1>
        <div className="mt-7 grid gap-7 border-t border-hero-foreground/35 pt-7 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <p className="hero-subtitle max-w-2xl text-base leading-7 text-hero-foreground/85 sm:text-lg">{t.hero.subtitle}</p>
          <div className="hero-actions flex flex-wrap gap-3"><Button asChild variant="hero" size="lg"><a href="#disciplines">{t.hero.disciplines}<ArrowRight /></a></Button><Button asChild variant="heroOutline" size="lg"><Link to="/planning">{t.hero.planning}</Link></Button></div>
        </div>
        <Link to="/demande-dinformations" className="motion-link hero-actions mt-6 inline-flex min-h-11 items-center gap-2 text-sm hover:text-primary">{t.hero.info}<ArrowRight className="size-4" /></Link>
      </div>
    </section>

    <div className="overflow-hidden border-y fine-rule bg-background py-5"><div className="flex min-w-max animate-none items-center gap-5 px-4 text-xs font-bold uppercase sm:justify-center">{t.trust.map((item, index) => <span key={item} className="flex items-center gap-5">{index > 0 && <span className="size-1 rounded-full bg-primary" />}{item}</span>)}</div></div>

    <section className="bg-background py-20 lg:py-28"><div className="section-shell grid items-center gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
       <RevealImage src={eventAsset.url} alt={t.event.imageAlt} className="aspect-[4/5] bg-muted" />
       <Reveal><SectionLabel>{t.event.eyebrow}</SectionLabel><RevealTitle lines={[t.event.title]} className="mt-5 text-5xl sm:text-7xl lg:text-8xl" /><div className="mt-8 border-y fine-rule py-7"><p className="text-xl font-semibold sm:text-2xl">{t.event.date}</p><p className="mt-2 text-lg text-muted-foreground">{t.event.time} · {t.event.place}</p></div><p className="mt-7 max-w-xl text-lg leading-8">{t.event.intro}</p><p className="mt-4 max-w-xl text-sm leading-7 text-muted-foreground">{t.event.disciplines}</p><Button asChild variant="dark" size="lg" className="mt-8"><Link to="/demande-dinformations">{t.nav.info}<ArrowRight /></Link></Button></Reveal>
    </div></section>

    <section id="disciplines" className="bg-surface-deep py-20 text-hero-foreground lg:py-28"><div className="section-shell"><SectionLabel>{t.disciplines.eyebrow}</SectionLabel><RevealTitle lines={[t.disciplines.title]} className="mt-5 max-w-4xl text-6xl sm:text-7xl lg:text-9xl" /><div className="mt-12 grid auto-rows-[15rem] grid-cols-1 gap-px bg-hero-foreground/15 sm:grid-cols-2 lg:grid-cols-4">
       {universeItems.map((item, index) => { const media = disciplineMedia[item.slug as keyof typeof disciplineMedia]?.[0]; const mediaText = t.media[item.slug as keyof typeof t.media]?.[0]; const planningInfo = scheduleLabel(item.slug); return <Reveal key={item.slug} index={index} className={`${index === 0 || index === 7 ? "lg:col-span-2" : ""} ${index === 2 ? "lg:row-span-2" : ""}`}><Link to={item.href} className="discipline-card group relative flex size-full overflow-hidden bg-surface-dark p-6">{media && <img src={media} alt={mediaText?.alt ?? item.name} className="discipline-card-media absolute inset-0 size-full object-cover" />}<span className="discipline-card-overlay absolute inset-0 bg-surface-deep" /><div className="relative mt-auto">{planningInfo && <p className="text-xs uppercase text-primary">{planningInfo}</p>}<h3 className={`discipline-card-name editorial-title text-4xl sm:text-5xl ${planningInfo ? "mt-2" : ""}`}>{item.name}</h3><span className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase">{t.disciplines.discover}<ArrowRight className="size-4" /></span><span className="discipline-card-rule mt-4 block h-0.5 w-full bg-primary" /></div></Link></Reveal>; })}
    </div></div></section>

    <section className="bg-background py-20 lg:py-28"><div className="section-shell"><SectionLabel>{t.audiences.eyebrow}</SectionLabel><h2 className="editorial-title mt-5 max-w-3xl text-5xl sm:text-7xl">{t.audiences.title}</h2><div className="mt-12 grid border-l border-t fine-rule sm:grid-cols-2 lg:grid-cols-4">{t.audiences.items.map((item) => <a key={item} href="#disciplines" className="group flex min-h-56 flex-col justify-end border-b border-r fine-rule p-6 hover:bg-primary"><div><h3 className="font-display text-4xl">{item}</h3><p className="mt-3 flex items-center gap-2 text-xs font-semibold uppercase">{t.audiences.discover}<ArrowRight className="size-4" /></p></div></a>)}</div></div></section>

    <section className="bg-muted py-20 lg:py-28"><div className="section-shell grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-20"><RevealImage src={signAsset.url} alt={t.about.imageAlt} className="aspect-[4/3] lg:order-2" /><Reveal><SectionLabel>{t.about.eyebrow}</SectionLabel><RevealTitle lines={t.about.titleLines} className="mt-5 text-5xl sm:text-7xl" /><p className="mt-7 max-w-2xl text-base leading-8 text-muted-foreground">{t.about.text}</p><Link to="/qui-sommes-nous" className="motion-link mt-7 inline-flex min-h-11 items-center gap-2 text-sm font-semibold uppercase hover:text-primary">{t.about.link}<ArrowRight className="size-4" /></Link></Reveal></div></section>

    <section className="bg-background py-20 lg:py-28"><div className="section-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><SectionLabel>{t.schedule.eyebrow}</SectionLabel><h2 className="editorial-title mt-5 text-5xl sm:text-7xl">{t.schedule.title}</h2><div className="mt-7 flex items-center gap-3"><span className={`size-2.5 rounded-full ${status.isOpen ? "bg-primary" : "bg-muted-foreground"}`} /><span className="font-semibold">{status.isOpen ? t.schedule.open : t.schedule.closed}</span>{status.today && <span className="text-muted-foreground">· {t.schedule.today}</span>}</div><Button asChild variant="dark" size="lg" className="mt-8"><Link to="/planning">{t.schedule.link}<CalendarDays /></Link></Button></div><div><h3 className="mb-5 text-xs font-semibold uppercase text-muted-foreground">{t.schedule.subtitle}</h3>{site.hours.map((entry) => <div key={entry.day} className="grid grid-cols-[6.5rem_minmax(0,1fr)] border-t fine-rule py-4 text-sm sm:grid-cols-[9rem_minmax(0,1fr)]"><span className="font-semibold">{entry.day}</span><span className="text-right text-muted-foreground">{entry.slots.length ? entry.slots.map((slot) => `${slot.start.replace(":","h")} – ${slot.end.replace(":","h")}`).join("  ·  ") : t.schedule.closed}</span></div>)}</div></div></section>

    {currentTestimonial && <section className="bg-surface-dark py-20 text-hero-foreground lg:py-28"><div className="section-shell"><div className="grid gap-6 lg:grid-cols-[1fr_auto] lg:items-end"><div><SectionLabel>{t.testimonials.eyebrow}</SectionLabel><RevealTitle lines={[t.testimonials.title]} className="mt-5 max-w-4xl text-5xl sm:text-7xl" /></div><a href={site.mapsUrl} target="_blank" rel="noreferrer" className="motion-link text-sm text-primary">{t.testimonials.google}</a></div><div className="mt-12 hidden border-y border-hero-foreground/15 py-10 md:block"><blockquote key={quote} className="testimonial-enter max-w-5xl font-display text-3xl leading-tight sm:text-4xl lg:text-5xl">“{currentTestimonial.text}”</blockquote>{currentTestimonial.attribution && <cite className="mt-6 block text-sm not-italic text-primary">— {t.testimonials.student}</cite>}<div className="mt-9 flex items-center gap-3"><Button variant="heroOutline" size="icon" aria-label={t.testimonials.previous} onClick={() => setQuote((quote - 1 + testimonials.length) % testimonials.length)}><ArrowLeft /></Button><span className="min-w-16 text-center text-xs text-hero-foreground/60">{quote + 1} / {testimonials.length}</span><Button variant="heroOutline" size="icon" aria-label={t.testimonials.next} onClick={() => setQuote((quote + 1) % testimonials.length)}><ArrowRight /></Button></div></div><div className="testimonial-snap -mx-4 mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto px-4 md:hidden">{testimonials.map((item, index) => <blockquote key={index} className="min-w-[88%] snap-start border-y border-hero-foreground/15 py-8 font-display text-3xl leading-tight">“{item.text}”</blockquote>)}</div></div></section>}

    <section className="bg-primary py-16 text-primary-foreground lg:py-20"><div className="section-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center"><div><h2 className="font-display text-5xl sm:text-6xl">{t.cta.title}</h2><p className="mt-3 max-w-xl">{t.cta.text}</p></div><div className="flex flex-wrap gap-3"><Button asChild variant="dark" size="lg"><Link to="/demande-dinformations">{t.cta.button}<ArrowRight /></Link></Button>{site.phones.map((phone) => <Button key={phone} asChild variant="outline" size="lg"><a href={phoneHref(phone)}><Phone />{phone}</a></Button>)}</div></div></section>

    <section className="bg-background py-20 lg:py-28"><div className="section-shell"><div className="grid gap-12 lg:grid-cols-[.85fr_1.15fr] lg:gap-16"><div><SectionLabel>{t.contact.eyebrow}</SectionLabel><h2 className="editorial-title mt-5 text-6xl sm:text-7xl">{t.contact.title}</h2><div className="mt-9 space-y-7 text-sm"><div className="flex gap-4"><MapPin className="mt-1 size-5 shrink-0 text-primary"/><div><strong>{t.contact.address}</strong><p className="mt-1 leading-6 text-muted-foreground">{site.address}</p></div></div><div className="flex gap-4"><Phone className="mt-1 size-5 shrink-0 text-primary"/><div><strong>{t.contact.phone}</strong>{site.phones.map((phone)=><a key={phone} href={phoneHref(phone)} className="mt-1 block text-muted-foreground hover:text-primary">{phone}</a>)}</div></div><div className="flex gap-4"><Mail className="mt-1 size-5 shrink-0 text-primary"/><div><strong>{t.contact.email}</strong><a href={`mailto:${site.email}`} className="mt-1 block text-muted-foreground hover:text-primary">{site.email}</a></div></div><div className="flex gap-4"><Clock3 className="mt-1 size-5 shrink-0 text-primary"/><div><strong>{t.contact.hours}</strong><p className="mt-1 text-muted-foreground">{status.isOpen ? t.schedule.open : t.schedule.closed}</p></div></div></div><Button asChild variant="dark" size="lg" className="mt-8"><a href={site.mapsUrl} target="_blank" rel="noreferrer">{t.contact.directions}<MapPin /></a></Button></div><iframe title={t.contact.mapTitle} src={site.mapEmbedUrl} className="min-h-[28rem] w-full border-0 grayscale" loading="lazy" referrerPolicy="no-referrer-when-downgrade" /></div></div></section>
  </main>;
}