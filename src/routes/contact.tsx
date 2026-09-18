import { createFileRoute } from "@tanstack/react-router";
import { ContactPage } from "@/components/site/contact-page";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/contact")({
  head: () => seo("/contact"),
  component: ContactPage,
});
