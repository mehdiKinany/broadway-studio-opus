import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home-page";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/")({
  head: () => seo("/"),
  component: HomePage,
});
