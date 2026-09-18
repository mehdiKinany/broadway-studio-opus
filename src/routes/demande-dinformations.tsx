import { createFileRoute } from "@tanstack/react-router";
import { InfoRequestPage } from "@/components/site/info-request-page";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/demande-dinformations")({
  head: () => seo("/demande-dinformations"),
  component: InfoRequestPage,
});
