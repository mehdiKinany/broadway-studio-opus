import { createFileRoute } from "@tanstack/react-router";
import { CheerPage } from "@/components/site/editorial-pages";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/cheerleading")({
  head: () => seo("/cheerleading"),
  component: CheerPage,
});
