import { Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Reveal, RevealTitle } from "@/components/site/motion";
import { getOpenStatus, phoneHref, site } from "@/data/site";
import { useT } from "@/hooks/use-t";

const toDisplayTime = (value: string) => value.replace(":", "h");

export function ContactPage() {
  const t = useT();
  const { isOpen, today } = getOpenStatus();

  return (
    <main className="bg-background pb-24">
      <section className="bg-surface-deep pb-20 pt-32 text-hero-foreground lg:pb-28 lg:pt-40">
        <div className="section-shell">
          <Reveal>
            <Link
              to="/"
              className="motion-link inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase"
            >
              <ArrowLeft className="size-4" />
              {t.pages.back}
            </Link>
          </Reveal>
          <p className="mt-10 text-xs font-semibold uppercase text-primary">
            {t.contactPage.eyebrow}
          </p>
          <RevealTitle
            lines={t.contactPage.titleLines}
            className="mt-5 max-w-5xl text-6xl sm:text-8xl lg:text-9xl"
          />
          <Reveal>
            <p className="mt-8 max-w-2xl text-lg leading-8 text-hero-foreground/75">
              {t.contactPage.intro}
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section-shell py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:gap-16">
          <div>
            <Reveal>
              <div className="border-t fine-rule">
                <div className="border-b fine-rule py-7">
                  <p className="text-xs font-semibold uppercase text-primary">
                    {t.contactPage.addressTitle}
                  </p>
                  <p className="mt-3 text-lg leading-8">{site.address}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {t.contactPage.plusCodeTitle} · {site.plusCode}
                  </p>
                </div>
                <div className="border-b fine-rule py-7">
                  <p className="text-xs font-semibold uppercase text-primary">
                    {t.contactPage.phoneTitle}
                  </p>
                  <ul className="mt-3 space-y-2">
                    {site.phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={phoneHref(phone)}
                          className="motion-link inline-flex min-h-11 items-center text-lg"
                        >
                          {phone}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-b fine-rule py-7">
                  <p className="text-xs font-semibold uppercase text-primary">
                    {t.contactPage.emailTitle}
                  </p>
                  <a
                    href={`mailto:${site.email}`}
                    className="motion-link mt-3 inline-flex min-h-11 items-center text-lg"
                  >
                    {site.email}
                  </a>
                </div>
              </div>
            </Reveal>

            <Reveal index={1}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Button asChild variant="dark" size="lg">
                  <a href={site.mapsUrl} target="_blank" rel="noreferrer">
                    <Navigation />
                    {t.contactPage.directions}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={phoneHref(site.phones[0] ?? "")}>
                    <Phone />
                    {t.contactPage.call}
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href={`mailto:${site.email}`}>
                    <Mail />
                    {t.contactPage.emailTitle}
                  </a>
                </Button>
              </div>
            </Reveal>

            <Reveal index={2}>
              <div className="mt-12">
                <p className="text-xs font-semibold uppercase text-primary">
                  {t.contactPage.socialTitle}
                </p>
                <div className="mt-4 flex flex-wrap gap-5">
                  <a
                    href={site.social.instagram}
                    target="_blank"
                    rel="noreferrer"
                    className="motion-link min-h-11 text-sm font-semibold uppercase"
                  >
                    Instagram
                  </a>
                  <a
                    href={site.social.facebook}
                    target="_blank"
                    rel="noreferrer"
                    className="motion-link min-h-11 text-sm font-semibold uppercase"
                  >
                    Facebook
                  </a>
                  <a
                    href={site.social.youtube}
                    target="_blank"
                    rel="noreferrer"
                    className="motion-link min-h-11 text-sm font-semibold uppercase"
                  >
                    YouTube
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal index={1}>
            <div className="bg-muted p-7 sm:p-9">
              <div className="flex flex-wrap items-baseline justify-between gap-3">
                <p className="text-xs font-semibold uppercase text-primary">
                  {t.contactPage.hoursTitle}
                </p>
                <p className="text-sm font-semibold">
                  {isOpen ? t.contactPage.openNow : t.contactPage.closedNow}
                </p>
              </div>
              <dl className="mt-6 border-t fine-rule">
                {site.hours.map((entry) => {
                  const current = entry.dayIndex === today?.dayIndex;
                  return (
                    <div
                      key={entry.day}
                      className={`flex flex-wrap items-baseline justify-between gap-3 border-b fine-rule py-4 ${current ? "font-semibold" : ""}`}
                    >
                      <dt>
                        {entry.day}
                        {current ? (
                          <span className="ml-2 text-xs uppercase text-primary">
                            {t.contactPage.today}
                          </span>
                        ) : null}
                      </dt>
                      <dd className={entry.slots.length ? "" : "text-muted-foreground"}>
                        {entry.slots.length
                          ? entry.slots
                              .map(
                                (slot) =>
                                  `${toDisplayTime(slot.start)} – ${toDisplayTime(slot.end)}`,
                              )
                              .join(" · ")
                          : t.contactPage.closed}
                      </dd>
                    </div>
                  );
                })}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-shell">
        <Reveal>
          <div className="overflow-hidden border fine-rule">
            <iframe
              src={site.mapEmbedUrl}
              title={t.contactPage.mapTitle}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[24rem] w-full border-0 lg:h-[32rem]"
            />
          </div>
        </Reveal>
      </section>

      <section className="mt-20 bg-primary py-16 text-primary-foreground">
        <div className="section-shell grid gap-7 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <h2 className="font-display text-4xl sm:text-6xl">{t.contactPage.formTitle}</h2>
            <p className="mt-4 max-w-2xl leading-7">{t.contactPage.formText}</p>
          </div>
          <Button asChild variant="dark" size="lg">
            <Link to="/demande-dinformations">
              {t.contactPage.formCta}
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </section>

      <div className="section-shell mt-12 flex items-center gap-2 text-sm text-muted-foreground">
        <MapPin className="size-4 shrink-0" />
        <span>{site.baseline}</span>
      </div>
    </main>
  );
}
