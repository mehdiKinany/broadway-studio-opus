import { createFileRoute } from "@tanstack/react-router";
import { BirthdayPage } from "@/components/site/editorial-pages";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/anniversaires")({
  head: () => seo("/anniversaires"),
  component: BirthdayPage,
});
