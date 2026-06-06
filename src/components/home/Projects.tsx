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
        <section className="bg-slate-100 py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">

                <h2 className="text-4xl font-extrabold text-primary">
                    Our Projects
                </h2>

                <p className="mt-4 text-slate-600">
                    Some of our completed infrastructure works.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-12">

                    {projects.map((item) => (
                        <motion.div
                            key={item.id}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            onClick={() => navigate(`/projects/${item.id}`)}
                            className="cursor-pointer rounded-2xl overflow-hidden shadow-xl bg-white border border-slate-200"
                        >
                            <img
                                src={item.img}
                                alt={item.name}
                                className="h-56 w-full object-cover"
                            />

                            <div className="p-5">
                                <h3 className="font-bold text-primary text-lg">
                                    {item.name}
                                </h3>

                                <p className="text-sm text-slate-500 mt-1">
                                    Click to view project details
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