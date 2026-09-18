import { createFileRoute } from "@tanstack/react-router";
import { FitnessPage } from "@/components/site/editorial-pages";

export const Route = createFileRoute("/fitness")({
  head: () => ({ meta: [{ title: "Fitness — Broadway Studio" }, { name: "description", content: "Découvrez fitness à Broadway Studio, centre artistique et sportif à Ville Verte, Bouskoura." }, { property: "og:title", content: "Fitness — Broadway Studio" }, { property: "og:description", content: "Découvrez fitness à Broadway Studio, Ville Verte, Bouskoura." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/fitness" }] }),
  component: FitnessPage,
});
