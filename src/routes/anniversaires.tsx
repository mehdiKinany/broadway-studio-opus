import { createFileRoute } from "@tanstack/react-router";
import { BirthdayPage } from "@/components/site/editorial-pages";

export const Route = createFileRoute("/anniversaires")({
  head: () => ({ meta: [{ title: "Anniversaires — Broadway Studio" }, { name: "description", content: "Découvrez anniversaires à Broadway Studio, centre artistique et sportif à Ville Verte, Bouskoura." }, { property: "og:title", content: "Anniversaires — Broadway Studio" }, { property: "og:description", content: "Découvrez anniversaires à Broadway Studio, Ville Verte, Bouskoura." }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }], links: [{ rel: "canonical", href: "/anniversaires" }] }),
  component: BirthdayPage,
});
