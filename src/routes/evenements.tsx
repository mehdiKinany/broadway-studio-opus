import { createFileRoute } from "@tanstack/react-router";
import { EventsPage } from "@/components/site/events-page";

export const Route = createFileRoute("/evenements")({
  head: () => ({ meta: [{ title: "Événements — Broadway Studio" }, { name: "description", content: "Découvrez les prochains événements et les temps forts de Broadway Studio à Ville Verte, Bouskoura." }, { property: "og:title", content: "Événements — Broadway Studio" }, { property: "og:description", content: "Portes Ouvertes, rencontres et temps forts artistiques et sportifs à Broadway Studio." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/evenements" }] }),
  component: EventsPage,
});
