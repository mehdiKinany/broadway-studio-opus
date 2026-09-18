import { createFileRoute } from "@tanstack/react-router";
import { EventsPage } from "@/components/site/events-page";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/evenements")({
  head: () => seo("/evenements"),
  component: EventsPage,
});
