import { createFileRoute } from "@tanstack/react-router";
import { DisciplinePage } from "@/components/site/discipline-page";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/musique")({
  head: () => seo("/musique"),
  component: Page,
});
function Page() {
  return <DisciplinePage slug="musique" />;
}
