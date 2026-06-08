import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ProjectsCTA from "../components/projects/ProjectsCTA";

const Projects = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.title = `${t("projects.title")} | GGS Infrastructure PLC`;

        window.scrollTo({ top: 0, behavior: "instant" });
    }, [i18n.language, t]);

    return (
        <div
            className="min-h-screen bg-gray-50"
            role="document"
            aria-label={t("projects.ariaLabel")}
        >
            <ProjectsHero />

            <ProjectsGrid />

            <ProjectsCTA />
        </div>
    );
};

export default Projects;