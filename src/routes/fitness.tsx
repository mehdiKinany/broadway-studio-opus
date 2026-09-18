import { createFileRoute } from "@tanstack/react-router";
import { FitnessPage } from "@/components/site/editorial-pages";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/fitness")({
  head: () => seo("/fitness"),
  component: FitnessPage,
});
