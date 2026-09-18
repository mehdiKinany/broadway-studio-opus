import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { ArrowLeft, ArrowRight, CalendarDays, Check, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Reveal, RevealTitle } from "@/components/site/motion";
import { disciplines } from "@/data/disciplines";
import { phoneHref, site } from "@/data/site";
import { useT } from "@/hooks/use-t";

/** Numéros marocains : mobile 06/07, fixe 05, avec ou sans indicatif +212. */
const normalizePhone = (value: string) => value.replace(/[\s.\-()]/g, "");
const isMoroccanPhone = (value: string) =>
  /^(?:\+212|00212|0)[5-7]\d{8}$/.test(normalizePhone(value));

type Audience = "enfant" | "ado" | "adulte";
type Status = "idle" | "sending" | "success" | "error";

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export function InfoRequestPage() {
  const t = useT();
  const [status, setStatus] = useState<Status>("idle");

  const schema = useMemo(
    () =>
      z
        .object({
          name: z.string().trim().min(3, t.infoPage.nameShort),
          phone: z.string().trim().refine(isMoroccanPhone, t.infoPage.phoneInvalid),
          email: z.union([z.string().trim().email(t.infoPage.emailInvalid), z.literal("")]),
          audience: z.enum(["enfant", "ado", "adulte"]),
          age: z.string().trim(),
          discipline: z.string().min(1, t.infoPage.disciplineRequired),
          message: z.string().trim(),
        })
        .superRefine((values, ctx) => {
          if (values.audience === "adulte") return;
          const age = Number(values.age);
          if (!values.age || Number.isNaN(age) || age < 2 || age > 25) {
            ctx.addIssue({
              code: z.ZodIssueCode.custom,
              path: ["age"],
              message: t.infoPage.ageInvalid,
            });
          }
        }),
    [t],
  );

  type FormValues = z.infer<typeof schema>;

  const { register, handleSubmit, watch, reset, formState } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      audience: "enfant",
      age: "",
      discipline: "",
      message: "",
    },
  });

  const audience = watch("audience") as Audience;
  const needsAge = audience !== "adulte";
  const { errors, isSubmitting } = formState;

  const onSubmit = async (values: FormValues) => {
    setStatus("sending");
    const audienceLabel = {
      enfant: t.infoPage.child,
      ado: t.infoPage.teen,
      adulte: t.infoPage.adult,
    }[values.audience];
    const lines = [
      `${t.infoPage.name} : ${values.name}`,
      `${t.infoPage.phone} : ${values.phone}`,
      values.email ? `${t.infoPage.email} : ${values.email}` : null,
      `${t.infoPage.forWho} : ${audienceLabel}`,
      needsAge ? `${t.infoPage.age} : ${values.age}` : null,
      `${t.infoPage.discipline} : ${values.discipline}`,
      values.message ? `${t.infoPage.message} : ${values.message}` : null,
    ].filter(Boolean);

    if (FORM_ENDPOINT) {
      try {
        const response = await fetch(FORM_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ ...values, audienceLabel, source: "bstudio.ma" }),
        });
        if (!response.ok) throw new Error(String(response.status));
        setStatus("success");
        reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    // Sans point d'envoi configuré, on ouvre le client mail avec la demande pré-remplie.
    const subject = `Demande d'informations — ${values.discipline}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(lines.join("\n"))}`;
    setStatus("success");
    reset();
  };

  if (status === "success") {
    return (
      <main className="bg-surface-deep pb-24 pt-32 text-hero-foreground lg:pt-40">
        <div className="section-shell max-w-3xl">
          <span className="inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground">
            <Check className="size-7" />
          </span>
          <h1 className="editorial-title mt-8 text-6xl sm:text-8xl">{t.infoPage.successTitle}</h1>
          <p className="mt-6 text-xl leading-9 text-hero-foreground/80">{t.infoPage.successText}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="lg">
              <Link to="/planning">
                {t.infoPage.successPlanning}
                <CalendarDays />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/">
                <ArrowLeft />
                {t.infoPage.successBack}
              </Link>
            </Button>
            <Button variant="outline" size="lg" onClick={() => setStatus("idle")}>
              {t.infoPage.another}
            </Button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="bg-background pb-24 pt-32 lg:pt-40">
      <section className="section-shell">
        <Reveal>
          <Link
            to="/"
            className="motion-link inline-flex min-h-11 items-center gap-2 text-xs font-semibold uppercase"
          >
            <ArrowLeft className="size-4" />
            {t.pages.back}
          </Link>
        </Reveal>
        <p className="mt-10 text-xs font-semibold uppercase text-primary">{t.infoPage.eyebrow}</p>
        <RevealTitle
          lines={t.infoPage.titleLines}
          className="mt-5 max-w-5xl text-5xl sm:text-7xl lg:text-8xl"
        />
        <Reveal>
          <p className="mt-8 max-w-2xl text-lg leading-8 text-muted-foreground">
            {t.infoPage.intro}
          </p>
        </Reveal>
      </section>

      <section className="section-shell mt-14 grid gap-14 lg:grid-cols-[1.15fr_.85fr] lg:gap-20">
        <Reveal>
          <form noValidate onSubmit={handleSubmit(onSubmit)} className="border-t fine-rule">
            <div className="grid gap-6 border-b fine-rule py-8 sm:grid-cols-2">
              <div className="sm:col-span-2">
                <Label htmlFor="name">{t.infoPage.name}</Label>
                <Input
                  id="name"
                  autoComplete="name"
                  placeholder={t.infoPage.namePlaceholder}
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="mt-2 h-12"
                  {...register("name")}
                />
                {errors.name ? (
                  <p id="name-error" role="alert" className="mt-2 text-sm text-destructive">
                    {errors.name.message}
                  </p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="phone">{t.infoPage.phone}</Label>
                <Input
                  id="phone"
                  type="tel"
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder={t.infoPage.phonePlaceholder}
                  aria-invalid={Boolean(errors.phone)}
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                  className="mt-2 h-12"
                  {...register("phone")}
                />
                {errors.phone ? (
                  <p id="phone-error" role="alert" className="mt-2 text-sm text-destructive">
                    {errors.phone.message}
                  </p>
                ) : null}
              </div>

              <div>
                <Label htmlFor="email">
                  {t.infoPage.email}{" "}
                  <span className="font-normal text-muted-foreground">({t.infoPage.optional})</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  placeholder={t.infoPage.emailPlaceholder}
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="mt-2 h-12"
                  {...register("email")}
                />
                {errors.email ? (
                  <p id="email-error" role="alert" className="mt-2 text-sm text-destructive">
                    {errors.email.message}
                  </p>
                ) : null}
              </div>
            </div>

            <fieldset className="border-b fine-rule py-8">
              <legend className="text-xs font-semibold uppercase text-primary">
                {t.infoPage.forWho}
              </legend>
              <div className="mt-5 grid gap-px bg-border sm:grid-cols-3">
                {(
                  [
                    ["enfant", t.infoPage.child],
                    ["ado", t.infoPage.teen],
                    ["adulte", t.infoPage.adult],
                  ] as const
                ).map(([value, label]) => (
                  <label
                    key={value}
                    className="flex min-h-12 cursor-pointer items-center gap-3 bg-background p-4 text-sm has-[:checked]:bg-primary has-[:checked]:text-primary-foreground"
                  >
                    <input
                      type="radio"
                      value={value}
                      className="size-4 accent-current"
                      {...register("audience")}
                    />
                    {label}
                  </label>
                ))}
              </div>

              {needsAge ? (
                <div className="mt-6 max-w-[12rem]">
                  <Label htmlFor="age">{t.infoPage.age}</Label>
                  <Input
                    id="age"
                    type="number"
                    inputMode="numeric"
                    min={2}
                    max={25}
                    placeholder={t.infoPage.agePlaceholder}
                    aria-invalid={Boolean(errors.age)}
                    aria-describedby={errors.age ? "age-error" : undefined}
                    className="mt-2 h-12"
                    {...register("age")}
                  />
                  {errors.age ? (
                    <p id="age-error" role="alert" className="mt-2 text-sm text-destructive">
                      {errors.age.message}
                    </p>
                  ) : null}
                </div>
              ) : null}
            </fieldset>

            <div className="border-b fine-rule py-8">
              <Label htmlFor="discipline">{t.infoPage.discipline}</Label>
              <select
                id="discipline"
                aria-invalid={Boolean(errors.discipline)}
                aria-describedby={errors.discipline ? "discipline-error" : undefined}
                className="mt-2 h-12 w-full border border-input bg-background px-3 text-base focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                {...register("discipline")}
              >
                <option value="">{t.infoPage.disciplinePlaceholder}</option>
                {disciplines.map((discipline) => (
                  <option key={discipline.slug} value={discipline.name}>
                    {discipline.name}
                  </option>
                ))}
              </select>
              {errors.discipline ? (
                <p id="discipline-error" role="alert" className="mt-2 text-sm text-destructive">
                  {errors.discipline.message}
                </p>
              ) : null}
            </div>

            <div className="border-b fine-rule py-8">
              <Label htmlFor="message">
                {t.infoPage.message}{" "}
                <span className="font-normal text-muted-foreground">({t.infoPage.optional})</span>
              </Label>
              <Textarea
                id="message"
                rows={4}
                placeholder={t.infoPage.messagePlaceholder}
                className="mt-2"
                {...register("message")}
              />
            </div>

            {status === "error" ? (
              <div role="alert" className="mt-8 border-l-2 border-destructive bg-muted p-5">
                <p className="font-semibold">{t.infoPage.errorTitle}</p>
                <p className="mt-2 text-sm text-muted-foreground">{t.infoPage.errorText}</p>
              </div>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button
                type="submit"
                variant="dark"
                size="lg"
                disabled={isSubmitting || status === "sending"}
              >
                {status === "sending" ? t.infoPage.sending : t.infoPage.submit}
                <ArrowRight />
              </Button>
              <p className="text-sm text-muted-foreground">{t.infoPage.legal}</p>
            </div>
          </form>
        </Reveal>

        <Reveal index={1}>
          <aside className="bg-muted p-7 sm:p-9">
            <p className="text-xs font-semibold uppercase text-primary">{t.infoPage.orCall}</p>
            <ul className="mt-5 space-y-3">
              {site.phones.map((phone) => (
                <li key={phone}>
                  <a
                    href={phoneHref(phone)}
                    className="motion-link inline-flex min-h-11 items-center gap-2 text-lg"
                  >
                    <Phone className="size-4" />
                    {phone}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href={`mailto:${site.email}`}
              className="motion-link mt-4 inline-flex min-h-11 items-center text-lg"
            >
              {site.email}
            </a>
            <div className="mt-8 border-t fine-rule pt-6">
              <p className="text-sm leading-7 text-muted-foreground">{site.address}</p>
              <Button asChild variant="outline" size="lg" className="mt-5">
                <Link to="/contact">
                  {t.nav.contact}
                  <ArrowRight />
                </Link>
              </Button>
            </div>
          </aside>
        </Reveal>
      </section>
    </main>
  );
}
