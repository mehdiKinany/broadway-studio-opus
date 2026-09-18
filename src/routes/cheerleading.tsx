import { createFileRoute } from "@tanstack/react-router";
import { CheerPage } from "@/components/site/editorial-pages";

export const Route = createFileRoute("/cheerleading")({
  head: () => ({ meta: [{ title: "Cheerleading — Broadway Studio" }, { name: "description", content: "Découvrez cheerleading à Broadway Studio, centre artistique et sportif à Ville Verte, Bouskoura." }, { property: "og:title", content: "Cheerleading — Broadway Studio" }, { property: "og:description", content: "Découvrez cheerleading à Broadway Studio, Ville Verte, Bouskoura." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/cheerleading" }] }),
  component: CheerPage,
});
