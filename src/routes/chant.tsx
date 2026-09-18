import { createFileRoute } from "@tanstack/react-router";
import { ChantPage } from "@/components/site/editorial-pages";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/chant")({
  head: () => seo("/chant"),
  component: ChantPage,
});
