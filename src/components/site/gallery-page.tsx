import { useEffect, useMemo, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealTitle } from "@/components/site/motion";
import { galleryMedia, type MediaCategory } from "@/data/media";
import { useT } from "@/hooks/use-t";

type Filter = "all" | MediaCategory;

export function GalleryPage() {
  const t = useT();
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState<number | null>(null);
  const openerRef = useRef<HTMLElement | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const touchStart = useRef<number | null>(null);
  const categories = useMemo(() => Array.from(new Set(galleryMedia.map((item) => item.category))), []);
  const visible = filter === "all" ? galleryMedia : galleryMedia.filter((item) => item.category === filter);
  const current = selected === null ? undefined : visible[selected];
  const copyFor = (id: string) => t.galleryPage.items[id as keyof typeof t.galleryPage.items];
  const move = (direction: number) => setSelected((value) => value === null ? 0 : (value + direction + visible.length) % visible.length);
  const close = () => { setSelected(null); window.requestAnimationFrame(() => openerRef.current?.focus()); };

  useEffect(() => {
    if (!current) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialogRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
      if (event.key === "ArrowLeft") move(-1);
      if (event.key === "ArrowRight") move(1);
      if (event.key === "Tab") {
        const focusable = Array.from(dialogRef.current?.querySelectorAll<HTMLElement>('button,[href],[tabindex]:not([tabindex="-1"])') ?? []);
        const first = focusable[0];
        const last = focusable[focusable.length - 1];
        if (!first || !last) return;
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = previousOverflow; window.removeEventListener("keydown", onKey); };
  }, [current, visible.length]);

  return <main className="bg-background pb-24 pt-32 lg:pt-40"><section className="section-shell"><Reveal><p className="text-xs font-semibold uppercase text-primary">{t.galleryPage.eyebrow}</p></Reveal><RevealTitle lines={[t.galleryPage.title]} className="mt-5 text-7xl sm:text-9xl" /><Reveal><p className="mt-7 max-w-2xl text-lg leading-8 text-muted-foreground">{t.galleryPage.intro}</p></Reveal><div className="mt-10 border-y fine-rule py-5" aria-label={t.galleryPage.filters}><div className="flex flex-wrap gap-2"><Button variant={filter === "all" ? "dark" : "outline"} onClick={() => setFilter("all")}>{t.galleryPage.all}</Button>{categories.map((category) => <Button key={category} variant={filter === category ? "dark" : "outline"} onClick={() => setFilter(category)}>{t.galleryPage.categories[category]}</Button>)}</div></div></section><section className="section-shell mt-10 columns-1 gap-5 sm:columns-2 lg:columns-3">{visible.map((item,index) => { const copy = copyFor(item.id); return <Reveal key={item.id} index={index} className="mb-5 break-inside-avoid"><button ref={(node) => { if (selected === index && node) openerRef.current = node; }} type="button" className="group block w-full text-left" onClick={(event) => { openerRef.current = event.currentTarget; setSelected(index); }} aria-label={`${t.galleryPage.open} : ${copy.caption}`}><span className="block overflow-hidden bg-muted"><img src={item.src} alt={copy.alt} width={item.width} height={item.height} loading="lazy" className="gallery-media h-auto w-full" /></span><span className="mt-3 block text-sm text-muted-foreground">{copy.caption}</span></button></Reveal>; })}</section>{current && copyFor(current.id) && <div ref={dialogRef} role="dialog" aria-modal="true" aria-label={copyFor(current.id).caption} tabIndex={-1} className="fixed inset-0 z-[100] flex flex-col bg-surface-deep text-hero-foreground outline-none"><div className="flex min-h-16 items-center justify-between border-b border-hero-foreground/15 px-4 sm:px-6"><p className="truncate pr-4 text-sm">{copyFor(current.id).caption}</p><Button variant="heroOutline" size="icon" onClick={close} aria-label={t.galleryPage.close}><X /></Button></div><div className="relative flex min-h-0 flex-1 items-center justify-center p-4 sm:p-8" onTouchStart={(event) => { touchStart.current = event.touches[0]?.clientX ?? null; }} onTouchEnd={(event) => { const start = touchStart.current; const end = event.changedTouches[0]?.clientX; if (start !== null && end !== undefined && Math.abs(end - start) > 50) move(end < start ? 1 : -1); touchStart.current = null; }}><img src={current.src} alt={copyFor(current.id).alt} width={current.width} height={current.height} className="max-h-full max-w-full object-contain" /><Button variant="heroOutline" size="icon" className="absolute left-3 sm:left-6" onClick={() => move(-1)} aria-label={t.galleryPage.previous}><ChevronLeft /></Button><Button variant="heroOutline" size="icon" className="absolute right-3 sm:right-6" onClick={() => move(1)} aria-label={t.galleryPage.next}><ChevronRight /></Button></div><p className="border-t border-hero-foreground/15 px-4 py-4 text-center text-xs text-hero-foreground/65">{(selected ?? 0) + 1} {t.galleryPage.imageCount} {visible.length}</p></div>}</main>;
}