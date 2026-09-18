import { createFileRoute } from "@tanstack/react-router";
import { VisualArtsPage } from "@/components/site/editorial-pages";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/arts-plastiques")({
  head: () => seo("/arts-plastiques"),
  component: VisualArtsPage,
});
