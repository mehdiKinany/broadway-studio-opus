import { createFileRoute } from "@tanstack/react-router";
import { DisciplinePage } from "@/components/site/discipline-page";

export const Route = createFileRoute("/danse")({
  head: () => ({ meta: [{ title: "Danse — Broadway Studio" }, { name: "description", content: "Découvrez danse à Broadway Studio, centre artistique et sportif à Ville Verte, Bouskoura." }, { property: "og:title", content: "Danse — Broadway Studio" }, { property: "og:description", content: "Découvrez danse à Broadway Studio, Ville Verte, Bouskoura." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/danse" }] }),
  component: Page,
});
function Page() { return <DisciplinePage slug="danse" />; }
