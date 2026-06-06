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
        image: "/images/addis.jpg",
        description: "Modern highway construction project.",
    },
    {
        slug: "commercial-building",
        title: "Commercial Building Complex",
        category: "Building",
        image: "/images/commerical.jpg",
        description: "Multi-story commercial building.",
    },
    {
        slug: "bridge-construction",
        title: "Bridge Construction Project",
        category: "Bridge",
        image: "/images/bridga.jpg",
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
        <section className="max-w-7xl mx-auto py-14 sm:py-20 md:py-24 px-4 sm:px-6">

            {/* FILTER BUTTONS */}
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">

                {categories.map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-4 sm:px-5 py-1.5 sm:py-2 rounded-full border text-sm sm:text-base font-medium transition
                        active:scale-95
                        ${filter === cat
                                ? "bg-[#002244] text-white border-[#002244]"
                                : "bg-white text-[#002244] border-gray-300 hover:border-[#002244]"
                            }`}
                    >
                        {cat}
                    </button>
                ))}

            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">

                {filteredProjects.map((project, index) => (
                    <motion.div
                        key={project.slug}
                        onClick={() => navigate(`/projects/${project.slug}`)}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.08 }}
                        viewport={{ once: true }}
                        className="cursor-pointer bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition active:scale-[0.98]"
                    >

                        {/* IMAGE */}
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-48 sm:h-56 md:h-60 object-cover"
                        />

                        {/* CONTENT */}
                        <div className="p-5 sm:p-6">

                            <span className="text-[#C8851F] text-xs sm:text-sm font-semibold">
                                {project.category}
                            </span>

                            <h2 className="text-lg sm:text-xl font-bold text-[#002244] mt-2">
                                {project.title}
                            </h2>

                            <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base leading-relaxed">
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