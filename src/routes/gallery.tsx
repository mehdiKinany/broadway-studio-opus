import { createFileRoute } from "@tanstack/react-router";
import { GalleryPage } from "@/components/site/gallery-page";

export const Route = createFileRoute("/gallery")({
  head: () => ({ meta: [{ title: "Gallery — Broadway Studio" }, { name: "description", content: "Découvrez gallery à Broadway Studio, centre artistique et sportif à Ville Verte, Bouskoura." }, { property: "og:title", content: "Gallery — Broadway Studio" }, { property: "og:description", content: "Découvrez gallery à Broadway Studio, Ville Verte, Bouskoura." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/gallery" }] }),
  component: GalleryPage,
});
