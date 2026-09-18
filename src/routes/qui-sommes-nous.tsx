import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/editorial-pages";

export const Route = createFileRoute("/qui-sommes-nous")({
  head: () => ({ meta: [{ title: "Qui Sommes Nous — Broadway Studio" }, { name: "description", content: "Découvrez qui sommes nous à Broadway Studio, centre artistique et sportif à Ville Verte, Bouskoura." }, { property: "og:title", content: "Qui Sommes Nous — Broadway Studio" }, { property: "og:description", content: "Découvrez qui sommes nous à Broadway Studio, Ville Verte, Bouskoura." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/qui-sommes-nous" }] }),
  component: AboutPage,
});
