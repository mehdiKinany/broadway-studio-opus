import { createFileRoute } from "@tanstack/react-router";
import { DisciplinePage } from "@/components/site/discipline-page";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/danse")({
  head: () => seo("/danse"),
  component: Page,
});
function Page() {
  return <DisciplinePage slug="danse" />;
}
