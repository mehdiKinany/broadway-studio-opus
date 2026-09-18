import { createFileRoute } from "@tanstack/react-router";
import { VisualArtsPage } from "@/components/site/editorial-pages";

export const Route = createFileRoute("/arts-plastiques")({
  head: () => ({ meta: [{ title: "Arts Plastiques — Broadway Studio" }, { name: "description", content: "Découvrez arts plastiques à Broadway Studio, centre artistique et sportif à Ville Verte, Bouskoura." }, { property: "og:title", content: "Arts Plastiques — Broadway Studio" }, { property: "og:description", content: "Découvrez arts plastiques à Broadway Studio, Ville Verte, Bouskoura." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/arts-plastiques" }] }),
  component: VisualArtsPage,
});
