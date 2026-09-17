import { createFileRoute } from "@tanstack/react-router";
import { PlaceholderPage } from "@/components/site/placeholder-page";
import { useT } from "@/hooks/use-t";

export const Route = createFileRoute("/cheerleading")({
  head: () => ({ meta: [{ title: "Cheerleading — Broadway Studio" }, { name: "description", content: "Découvrez cheerleading à Broadway Studio, centre artistique et sportif à Ville Verte, Bouskoura." }, { property: "og:title", content: "Cheerleading — Broadway Studio" }, { property: "og:description", content: "Découvrez cheerleading à Broadway Studio, Ville Verte, Bouskoura." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/cheerleading" }] }),
  component: Page,
});
function Page() { const t = useT(); return <PlaceholderPage title={t.pages.titles.cheer} />; }
