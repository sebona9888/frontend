import { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Project = {
    slug: string;
    title: string;
    category: string;
    image: string;
    description: string;
};

const allProjects: Project[] = [
    {
        slug: "addis-ababa-highway",
        title: "Addis Ababa Highway Project",
        category: "Road",
        image: "/public/images/addis.jpg",
        description: "Modern highway construction project.",
    },
    {
        slug: "commercial-building",
        title: "Commercial Building Complex",
        category: "Building",
        image: "/public/images/commerical.jpg",
        description: "Multi-story commercial building.",
    },
    {
        slug: "bridge-construction",
        title: "Bridge Construction Project",
        category: "Bridge",
        image: "/public/images/bridga.jpg",
        description: "High-capacity bridge project.",
    },
];

const ProjectsGrid = () => {
    const [filter, setFilter] = useState("All");
    const navigate = useNavigate();

    const categories = ["All", "Road", "Building", "Bridge"];

    const filteredProjects =
        filter === "All"
            ? allProjects
            : allProjects.filter((p) => p.category === filter);

    return (
        <section className="max-w-7xl mx-auto py-16 px-6">

            {/* FILTER BUTTONS */}
            <div className="flex flex-wrap justify-center gap-4 mb-10">
                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-5 py-2 rounded-full border transition font-medium
                        ${filter === cat
                                ? "bg-[#002244] text-white"
                                : "bg-white text-[#002244] border-gray-300"
                            }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* GRID */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.slug}
                        onClick={() =>
                            navigate(`/projects/${project.slug}`)
                        }
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
                    >
                        {/* IMAGE */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-60 object-cover"
                        />

                        {/* CONTENT */}
                        <div className="p-6">
                            <span className="text-[#C8851F] text-sm font-semibold">
                                {project.category}
                            </span>

                            <h2 className="text-xl font-bold text-[#002244] mt-2">
                                {project.title}
                            </h2>

                            <p className="text-gray-600 mt-3 text-sm">
                                {project.description}
                            </p>
                        </div>
                    </motion.div>
                ))}

            </div>

        </section>
    );
};

export default ProjectsGrid;