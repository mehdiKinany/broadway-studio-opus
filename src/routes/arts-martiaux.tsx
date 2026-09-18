import { createFileRoute } from "@tanstack/react-router";
import { DisciplinePage } from "@/components/site/discipline-page";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/arts-martiaux")({
  head: () => seo("/arts-martiaux"),
  component: Page,
});
function Page() {
  return <DisciplinePage slug="arts-martiaux" />;
}
