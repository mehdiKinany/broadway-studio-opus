import { createFileRoute } from "@tanstack/react-router";
import { PlanningPage } from "@/components/site/planning-page";

export const Route = createFileRoute("/planning")({
  head: () => ({ meta: [{ title: "Planning des cours 2026-2027 — Broadway Studio" }, { name: "description", content: "Consultez le planning 2026-2027 des cours collectifs de Broadway Studio à Ville Verte, Bouskoura." }, { property: "og:title", content: "Planning des cours 2026-2027 — Broadway Studio" }, { property: "og:description", content: "Jours, horaires, disciplines et publics des cours collectifs de Broadway Studio." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/planning" }] }),
  component: PlanningPage,
});
