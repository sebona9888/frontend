import { useEffect } from "react";

import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ProjectsCTA from "../components/projects/ProjectsCTA";

const Projects = () => {

    useEffect(() => {
        document.title = "Projects | GGS Infrastructure PLC";

        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div
            className="min-h-screen bg-gray-50"
            role="document"
            aria-label="GGS Infrastructure PLC Projects"
        >
            <ProjectsHero />

            <ProjectsGrid />

            <ProjectsCTA />
        </div>
    );
};

export default Projects;