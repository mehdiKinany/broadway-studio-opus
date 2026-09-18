import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/site/home-page";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Broadway Studio — Centre artistique et sportif à Bouskoura" },
      {
        name: "description",
        content:
          "Broadway Studio, centre artistique et sportif à Ville Verte, Bouskoura : musique, chant, danse, gymnastique, arts martiaux, arts plastiques, théâtre, cheerleading et fitness.",
      },
      {
        property: "og:title",
        content: "Broadway Studio — Centre artistique et sportif à Bouskoura",
      },
      {
        property: "og:description",
        content:
          "Un lieu où enfants, adolescents et adultes développent leur créativité, leur confiance et leur talent.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: HomePage,
});
