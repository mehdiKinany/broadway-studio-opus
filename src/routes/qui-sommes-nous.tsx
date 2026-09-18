import { createFileRoute } from "@tanstack/react-router";
import { AboutPage } from "@/components/site/editorial-pages";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/qui-sommes-nous")({
  head: () => seo("/qui-sommes-nous"),
  component: AboutPage,
});
