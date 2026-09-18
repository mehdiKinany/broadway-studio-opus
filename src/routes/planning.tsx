import { createFileRoute } from "@tanstack/react-router";
import { PlanningPage } from "@/components/site/planning-page";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/planning")({
  head: () => seo("/planning"),
  component: PlanningPage,
});
