import { Homepage } from "@/components/HomePage";
import ProjectCard from "@/components/ProjectCard";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import llp from "../../../public/images/LLP.gif";
import todo from "../../../public/images/todo.gif";
import library from "../../../public/images/library.gif";
import pixam from "../../../public/images/pixam.gif";

type Props = {
  params: { locale: string };
};

export default function Index({ params: { locale } }: Props) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("Homepage");
  return (
    <div>
      <Homepage />
      <div className="grid-cols-1 sm:grid md:grid-cols-3 mx-6">
        <ProjectCard
          title={t("hero-title")}
          description={t("hero-description")}
          href={"/projects#llp"}
          src={llp}
        />
        <ProjectCard
          title={t("todo-title")}
          description={t("todo-description")}
          href={"/projects#todo"}
          src={todo}
        />
        <ProjectCard
          title={t("library-title")}
          description={t("library-description")}
          href={"/projects#library"}
          src={library}
        />
        <ProjectCard
          title={t("pixam-title")}
          description={t("pixam-description")}
          href={"/projects#pixam"}
          src={pixam}
        />
      </div>
    </div>
  );
}
