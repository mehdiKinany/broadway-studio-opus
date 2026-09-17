import { Link, useRouterState } from "@tanstack/react-router";
import { ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { disciplines } from "@/data/disciplines";
import { useT } from "@/hooks/use-t";
import logoAsset from "@/assets/broadway-studio-logo.png.asset.json";

export function SiteHeader() {
  const t = useT();
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  useEffect(() => setOpen(false), [pathname]);
  const mainDisciplines = disciplines.filter((item) => item.main);
  const nav = [
    { label: t.nav.home, to: "/" }, { label: t.nav.planning, to: "/planning" },
    { label: t.nav.events, to: "/evenements" }, { label: t.nav.gallery, to: "/gallery" },
    { label: t.nav.studio, to: "/qui-sommes-nous" }, { label: t.nav.contact, to: "/contact" },
  ] as const;
  return <header className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${scrolled || pathname !== "/" ? "border-hero-foreground/10 bg-surface-deep" : "border-transparent bg-surface-deep/35"}`}>
    <div className="section-shell grid h-20 grid-cols-[minmax(0,1fr)_auto] items-center gap-4 lg:h-24 lg:grid-cols-[auto_minmax(0,1fr)_auto]">
      <Link to="/" aria-label={t.brand.name} className="w-fit shrink-0"><img src={logoAsset.url} alt={t.brand.name} className="h-12 w-auto lg:h-14" /></Link>
      <nav aria-label={t.nav.home} className="hidden min-w-0 items-center justify-center gap-5 lg:flex xl:gap-7">
        <Link to="/" className="text-xs font-semibold uppercase text-hero-foreground transition-colors hover:text-primary">{t.nav.home}</Link>
        <div className="group relative">
          <button className="flex min-h-11 items-center gap-1 text-xs font-semibold uppercase text-hero-foreground transition-colors hover:text-primary" aria-haspopup="true">{t.nav.disciplines}<ChevronDown className="size-3.5" /></button>
          <div className="invisible absolute left-1/2 top-full w-64 -translate-x-1/2 border border-hero-foreground/10 bg-surface-deep p-2 opacity-0 transition-all group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
            {mainDisciplines.map((item) => <Link key={item.slug} to={item.href} className="block px-4 py-3 text-sm text-hero-foreground transition-colors hover:bg-primary hover:text-primary-foreground">{item.name}</Link>)}
          </div>
        </div>
        {nav.slice(1).map((item) => <Link key={item.to} to={item.to} className="text-xs font-semibold uppercase text-hero-foreground transition-colors hover:text-primary">{item.label}</Link>)}
      </nav>
      <Button asChild variant="hero" className="hidden xl:inline-flex"><Link to="/demande-dinformations">{t.nav.info}</Link></Button>
      <Button variant="ghost" size="icon" className="text-hero-foreground hover:bg-hero-foreground/10 hover:text-primary lg:hidden" onClick={() => setOpen(!open)} aria-label={open ? t.nav.closeMenu : t.nav.openMenu} aria-expanded={open}>{open ? <X /> : <Menu />}</Button>
    </div>
    {open && <div className="fixed inset-x-0 bottom-0 top-20 overflow-y-auto bg-surface-deep px-6 py-8 lg:hidden">
      <nav className="mx-auto flex max-w-xl flex-col" aria-label={t.nav.home}>
        {nav.map((item) => <Link key={item.to} to={item.to} className="border-b border-hero-foreground/15 py-4 font-display text-3xl text-hero-foreground hover:text-primary">{item.label}</Link>)}
        <p className="mt-8 text-xs font-semibold uppercase text-primary">{t.nav.disciplines}</p>
        <div className="mt-3 grid grid-cols-2 gap-x-6">{mainDisciplines.map((item) => <Link key={item.slug} to={item.href} className="border-b border-hero-foreground/10 py-3 text-sm text-hero-foreground">{item.name}</Link>)}</div>
        <Button asChild variant="hero" className="mt-8 w-full"><Link to="/demande-dinformations">{t.nav.info}</Link></Button>
      </nav>
    </div>}
  </header>;
}