import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Projects = () => {
    const navigate = useNavigate();

    const projects = [
        { id: 1, name: "Highway Development", img: "/images/highway.jpg" },
        { id: 2, name: "Bridge Construction", img: "/images/bridge.jpg" },
        { id: 3, name: "Urban Roads", img: "/images/urban.jpg" },
    ];

    return (
        <section className="bg-slate-100 py-16 md:py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#002B5B]">
                    Our Projects
                </h2>

                <p className="mt-3 md:mt-4 text-sm sm:text-base text-slate-600 max-w-xl mx-auto">
                    Some of our completed infrastructure works across Ethiopia.
                </p>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-12">

                    {projects.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.03 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            onClick={() => navigate(`/projects/${item.id}`)}
                            className="cursor-pointer rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-200"
                        >
                            {/* IMAGE */}
                            <div className="overflow-hidden">
                                <img
                                    src={item.img}
                                    alt={item.name}
                                    className="h-48 sm:h-52 md:h-56 w-full object-cover transition-transform duration-500 hover:scale-105"
                                />
                            </div>

                            {/* TEXT */}
                            <div className="p-4 md:p-5 text-left">
                                <h3 className="font-bold text-[#002B5B] text-base md:text-lg">
                                    {item.name}
                                </h3>

                                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                                    Tap to view project details
                                </p>
                            </div>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Projects;