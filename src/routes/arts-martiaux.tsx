import { createFileRoute } from "@tanstack/react-router";
import { DisciplinePage } from "@/components/site/discipline-page";

export const Route = createFileRoute("/arts-martiaux")({
  head: () => ({ meta: [{ title: "Arts Martiaux — Broadway Studio" }, { name: "description", content: "Découvrez arts martiaux à Broadway Studio, centre artistique et sportif à Ville Verte, Bouskoura." }, { property: "og:title", content: "Arts Martiaux — Broadway Studio" }, { property: "og:description", content: "Découvrez arts martiaux à Broadway Studio, Ville Verte, Bouskoura." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/arts-martiaux" }] }),
  component: Page,
});
function Page() { return <DisciplinePage slug="arts-martiaux" />; }
