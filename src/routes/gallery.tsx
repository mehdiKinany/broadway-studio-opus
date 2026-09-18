import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/site/gallery-page";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/gallery")({
  head: () => seo("/gallery"),
  component: GalleryPage,
});
