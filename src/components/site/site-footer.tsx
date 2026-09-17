import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube } from "lucide-react";
import { disciplines } from "@/data/disciplines";
import { phoneHref, site } from "@/data/site";
import { useT } from "@/hooks/use-t";
import logoAsset from "@/assets/broadway-studio-logo.png.asset.json";

export function SiteFooter() {
  const t = useT();
  const main = disciplines.filter((item) => item.main);
  return <footer className="bg-surface-deep pb-24 pt-16 text-hero-foreground md:pb-10 lg:pt-24">
    <div className="section-shell grid gap-12 border-b border-hero-foreground/15 pb-14 md:grid-cols-2 lg:grid-cols-[1.3fr_.8fr_1fr_1.2fr]">
      <div><img src={logoAsset.url} alt={t.brand.name} className="h-16 w-auto" /><p className="mt-6 max-w-sm text-sm leading-7 text-hero-foreground/65">{t.footer.text}</p><p className="mt-5 font-display text-2xl italic text-primary">{t.brand.signature}</p></div>
      <div><h2 className="text-xs font-semibold uppercase text-primary">{t.footer.navigation}</h2><div className="mt-5 flex flex-col gap-3 text-sm"><Link to="/planning" className="hover:text-primary">{t.nav.planning}</Link><Link to="/evenements" className="hover:text-primary">{t.nav.events}</Link><Link to="/gallery" className="hover:text-primary">{t.nav.gallery}</Link><Link to="/qui-sommes-nous" className="hover:text-primary">{t.nav.studio}</Link><Link to="/contact" className="hover:text-primary">{t.nav.contact}</Link></div></div>
      <div><h2 className="text-xs font-semibold uppercase text-primary">{t.footer.universes}</h2><div className="mt-5 grid gap-3 text-sm">{main.map((item) => <Link key={item.slug} to={item.href} className="hover:text-primary">{item.name}</Link>)}</div></div>
      <div><h2 className="text-xs font-semibold uppercase text-primary">{t.footer.coordinates}</h2><address className="mt-5 space-y-3 text-sm not-italic leading-6 text-hero-foreground/70"><p>{site.address}</p>{site.phones.map((phone) => <a key={phone} href={phoneHref(phone)} className="block hover:text-primary">{phone}</a>)}<a href={`mailto:${site.email}`} className="block hover:text-primary">{site.email}</a></address><h2 className="mt-8 text-xs font-semibold uppercase text-primary">{t.footer.follow}</h2><div className="mt-4 flex gap-3"><a href={site.social.instagram} target="_blank" rel="noreferrer" aria-label="Instagram" className="grid size-11 place-items-center border border-hero-foreground/20 hover:border-primary hover:text-primary"><Instagram className="size-4" /></a><a href={site.social.facebook} target="_blank" rel="noreferrer" aria-label="Facebook" className="grid size-11 place-items-center border border-hero-foreground/20 hover:border-primary hover:text-primary"><Facebook className="size-4" /></a><a href={site.social.youtube} target="_blank" rel="noreferrer" aria-label="YouTube" className="grid size-11 place-items-center border border-hero-foreground/20 hover:border-primary hover:text-primary"><Youtube className="size-4" /></a></div></div>
    </div><div className="section-shell pt-7 text-xs text-hero-foreground/45">© {new Date().getFullYear()} {site.name}. {t.footer.rights}</div>
  </footer>;
}