import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/placeholder-page";
import { useT } from "@/hooks/use-t";

export const Route = createFileRoute("/gymnastique")({
  head: () => ({ meta: [{ title: "Gymnastique — Broadway Studio" }, { name: "description", content: "Découvrez gymnastique à Broadway Studio, centre artistique et sportif à Ville Verte, Bouskoura." }, { property: "og:title", content: "Gymnastique — Broadway Studio" }, { property: "og:description", content: "Découvrez gymnastique à Broadway Studio, Ville Verte, Bouskoura." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/gymnastique" }] }),
  component: Page,
});
function Page() { const t = useT(); return <PlaceholderPage title={t.pages.titles.gymnastique} />; }
