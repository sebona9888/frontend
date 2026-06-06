import { useParams, useNavigate } from "react-router-dom";

const projectData = [
    {
        title: "Addis Ababa Highway Project",
        image:
            "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
        description:
            "Modern highway construction project designed to improve transportation infrastructure.",
        details:
            "This project includes road expansion, drainage systems, and asphalt paving across major city routes.",
    },
    {
        title: "Commercial Building Complex",
        image:
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab",
        description:
            "Multi-story commercial building developed with modern engineering standards.",
        details:
            "The building includes offices, retail spaces, and underground parking facilities.",
    },
];

const ProjectDetails = () => {
    const { slug } = useParams();
    const navigate = useNavigate();

    const project = projectData.find(
        (p) =>
            p.title
                .toLowerCase()
                .replace(/\s+/g, "-") === slug
    );

    if (!project) {
        return (
            <div className="p-20 text-center">
                <h1 className="text-2xl font-bold">Project not found</h1>
                <button
                    onClick={() => navigate("/projects")}
                    className="mt-4 bg-[#002244] text-white px-5 py-2 rounded"
                >
                    Back to Projects
                </button>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50">

            {/* HERO IMAGE */}
            <div className="h-[60vh] w-full">
                <img
                    src={project.image}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* CONTENT */}
            <div className="max-w-5xl mx-auto p-6">

                <h1 className="text-3xl md:text-4xl font-bold text-[#002244]">
                    {project.title}
                </h1>

                <p className="mt-4 text-gray-600 text-lg">
                    {project.description}
                </p>

                <div className="mt-6 text-gray-700 leading-relaxed">
                    {project.details}
                </div>

                <button
                    onClick={() => navigate("/projects")}
                    className="mt-8 bg-[#C8851F] text-white px-6 py-3 rounded-lg hover:scale-105 transition"
                >
                    Back to Projects
                </button>

            </div>
        </div>
    );
};

export default ProjectDetails;