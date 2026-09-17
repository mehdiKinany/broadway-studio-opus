import { createFileRoute } from "@tanstack/react-router";
import { DisciplinePage } from "@/components/site/discipline-page";

export const Route = createFileRoute("/musique")({
  head: () => ({ meta: [{ title: "Musique — Broadway Studio" }, { name: "description", content: "Découvrez musique à Broadway Studio, centre artistique et sportif à Ville Verte, Bouskoura." }, { property: "og:title", content: "Musique — Broadway Studio" }, { property: "og:description", content: "Découvrez musique à Broadway Studio, Ville Verte, Bouskoura." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/musique" }] }),
  component: Page,
});
function Page() { return <DisciplinePage slug="musique" />; }
