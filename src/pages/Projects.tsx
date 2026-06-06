import ProjectsHero from "../components/projects/ProjectsHero";
import ProjectsGrid from "../components/projects/ProjectsGrid";
import ProjectsCTA from "../components/projects/ProjectsCTA";

const Projects = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <ProjectsHero />
            <ProjectsGrid />
            <ProjectsCTA />
        </div>
    );
};

export default Projects;