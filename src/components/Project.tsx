import styles from "../../styles/Project.module.css";
import localFont from "next/font/local";
import { Karla } from "next/font/google";
import { useTranslations } from "next-intl";
import ProjectDetails from "./ProjectDetailsCard";

const myFont = localFont({ src: "../../public/fonts/Broukha.ttf" });

const karla = Karla({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

const llp_technologies = [
  "Next.js",
  "NextAuth.js",
  "Prisma.io",
  "MySQL",
  "TypeScript",
  "React",
  "Tailwind CSS",
];

export default function ProjectPage() {
  const t = useTranslations("Projects");
  return (
    <div className={`${styles.tight}`}>
      <section id="llp">
        <ProjectDetails
          title="Language Learning Platform"
          llp_technologies={llp_technologies}
          github_title={t("github-title")}
          project_link="https://github.com/Feni0108/Language-Learning-Platform"
          project_link_name={t("project-link")}
          last_update={t("last-update")}
        >
          {t.rich("details", {
            p: (chunks: string) => (
              <p className="mb-4 text-xl px-32 text-justify">{chunks}</p>
            ),
            h5: (chunks: string) => (
              <h5 className="mb-2 text-3xl font-black leading-tight text-left px-32">
                {chunks}
              </h5>
            ),
            h4: (chunks: string) => (
              <h4 className="mb-2 text-2xl font-bold leading-tight text-left px-32">
                {chunks}
              </h4>
            ),
          })}
        </ProjectDetails>
      </section>
    </div>
  );
}
