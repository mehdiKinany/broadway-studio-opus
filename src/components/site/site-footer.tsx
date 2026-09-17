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
      <div><h2 className="text-xs font-semibold uppercase text-primary">{t.footer.navigation}</h2><div className="mt-5 flex flex-col gap-3 text-sm">{[[t.nav.planning,"/planning"],[t.nav.events,"/evenements"],[t.nav.gallery,"/gallery"],[t.nav.studio,"/qui-sommes-nous"],[t.nav.contact,"/contact"]].map(([label,to]) => <Link key={to} to={to} className="hover:text-primary">{label}</Link>)}</div></div>
      <div><h2 className="text-xs font-semibold uppercase text-primary">{t.footer.universes}</h2><div className="mt-5 grid gap-3 text-sm">{main.map((item) => <Link key={item.slug} to={item.href} className="hover:text-primary">{item.name}</Link>)}</div></div>
      <div><h2 className="text-xs font-semibold uppercase text-primary">{t.footer.coordinates}</h2><address className="mt-5 space-y-3 text-sm not-italic leading-6 text-hero-foreground/70"><p>{site.address}</p>{site.phones.map((phone) => <a key={phone} href={phoneHref(phone)} className="block hover:text-primary">{phone}</a>)}<a href={`mailto:${site.email}`} className="block hover:text-primary">{site.email}</a></address><h2 className="mt-8 text-xs font-semibold uppercase text-primary">{t.footer.follow}</h2><div className="mt-4 flex gap-3">{[[site.social.instagram,Instagram,"Instagram"],[site.social.facebook,Facebook,"Facebook"],[site.social.youtube,Youtube,"YouTube"]].map(([href,Icon,label]) => <a key={label as string} href={href as string} target="_blank" rel="noreferrer" aria-label={label as string} className="grid size-11 place-items-center border border-hero-foreground/20 hover:border-primary hover:text-primary"><Icon className="size-4" /></a>)}</div></div>
    </div><div className="section-shell pt-7 text-xs text-hero-foreground/45">© {new Date().getFullYear()} {site.name}. {t.footer.rights}</div>
  </footer>;
}