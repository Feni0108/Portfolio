import { Homepage } from "@/components/HomePage";
import Profile from "@/components/Profile";
import ProjectCard from "@/components/ProjectCard";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

type Props = {
  params: { locale: string };
};

export default function Index({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Homepage");
  return (
    <div>
      <Homepage />
      <div className="grid-cols-1 sm:grid md:grid-cols-2 mx-6">
        <ProjectCard
          title={t("hero-title")}
          description={t("hero-description")}
          href={"/projects#llp"}
        />
      </div>
    </div>
  );
}
