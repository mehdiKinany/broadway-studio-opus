import { createFileRoute } from "@tanstack/react-router";
import { ChantPage } from "@/components/site/editorial-pages";

export const Route = createFileRoute("/chant")({
  head: () => ({ meta: [{ title: "Chant — Broadway Studio" }, { name: "description", content: "Découvrez chant à Broadway Studio, centre artistique et sportif à Ville Verte, Bouskoura." }, { property: "og:title", content: "Chant — Broadway Studio" }, { property: "og:description", content: "Découvrez chant à Broadway Studio, Ville Verte, Bouskoura." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/chant" }] }),
  component: ChantPage,
});
