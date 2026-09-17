import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/placeholder-page";
import { useT } from "@/hooks/use-t";

export const Route = createFileRoute("/theatre")({
  head: () => ({ meta: [{ title: "Theatre — Broadway Studio" }, { name: "description", content: "Découvrez theatre à Broadway Studio, centre artistique et sportif à Ville Verte, Bouskoura." }, { property: "og:title", content: "Theatre — Broadway Studio" }, { property: "og:description", content: "Découvrez theatre à Broadway Studio, Ville Verte, Bouskoura." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/theatre" }] }),
  component: Page,
});
function Page() { const t = useT(); return <PlaceholderPage title={t.pages.titles.theatre} />; }
