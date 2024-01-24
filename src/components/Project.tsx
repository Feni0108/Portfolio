import styles from "../../styles/Project.module.css";
import { useTranslations } from "next-intl";
import ProjectDetails from "./ProjectDetailsCard";
import llp from "../../public/images/LLP.gif";
import todo from "../../public/images/todo.gif";
import library from "../../public/images/library.gif";
import pixam from "../../public/images/pixam.gif";

const llp_technologies = [
  "Next.js",
  "NextAuth.js",
  "Prisma.io",
  "MySQL",
  "TypeScript",
  "React",
  "Tailwind CSS",
];
const backend_technologies = [
  "Java",
  "Spring Boot",
  "Hibernate",
  "MySQL",
  "Gradle",
  "Thymeleaf",
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
          src={llp}
        >
          {t.rich("details", {
            p: (chunks: string) => (
              <p className="mb-4 text-xl sm:px-32 text-justify">{chunks}</p>
            ),
            h5: (chunks: string) => (
              <h5 className="mb-2 text-3xl font-black leading-tight text-left sm:px-32">
                {chunks}
              </h5>
            ),
            h4: (chunks: string) => (
              <h4 className="mb-2 text-2xl font-bold leading-tight text-left sm:px-32">
                {chunks}
              </h4>
            ),
          })}
        </ProjectDetails>
      </section>
      <section id="todo">
        <ProjectDetails
          title="To-do"
          llp_technologies={backend_technologies}
          github_title={t("github-title")}
          project_link="#"
          project_link_name={t("project-link")}
          last_update={t("last-update")}
          src={todo}
        >
          {t.rich("todo-details", {
            p: (chunks: string) => (
              <p className="mb-4 text-xl sm:px-32 text-justify">{chunks}</p>
            ),
            h5: (chunks: string) => (
              <h5 className="mb-2 text-3xl font-black leading-tight text-left sm:px-32">
                {chunks}
              </h5>
            ),
            h4: (chunks: string) => (
              <h4 className="mb-2 text-2xl font-bold leading-tight text-left sm:px-32">
                {chunks}
              </h4>
            ),
          })}
        </ProjectDetails>
      </section>
      <section id="library">
        <ProjectDetails
          title={t("library-title")}
          llp_technologies={backend_technologies}
          github_title={t("github-title")}
          project_link="#"
          project_link_name={t("project-link")}
          last_update={t("last-update")}
          src={library}
        >
          {t.rich("library", {
            p: (chunks: string) => (
              <p className="mb-4 text-xl sm:px-32 text-justify">{chunks}</p>
            ),
            h5: (chunks: string) => (
              <h5 className="mb-2 text-3xl font-black leading-tight text-left sm:px-32">
                {chunks}
              </h5>
            ),
            h4: (chunks: string) => (
              <h4 className="mb-2 text-2xl font-bold leading-tight text-left sm:px-32">
                {chunks}
              </h4>
            ),
          })}
        </ProjectDetails>
      </section>
      <section id="pixam">
        <ProjectDetails
          title="Pixam"
          llp_technologies={backend_technologies}
          github_title={t("github-title")}
          project_link="#"
          project_link_name={t("project-link")}
          last_update={t("last-update")}
          src={pixam}
        >
          {t.rich("pixam-details", {
            p: (chunks: string) => (
              <p className="mb-4 text-xl sm:px-32 text-justify">{chunks}</p>
            ),
            h5: (chunks: string) => (
              <h5 className="mb-2 text-3xl font-black leading-tight text-left sm:px-32">
                {chunks}
              </h5>
            ),
          })}
        </ProjectDetails>
      </section>
    </div>
  );
}
