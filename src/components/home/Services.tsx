import { motion } from "framer-motion";
import {
    FaRoad,
    FaBuilding,
    FaArchway,
    FaWater,
    FaProjectDiagram,
    FaTools
} from "react-icons/fa";

const Services = () => {
    const services = [
        { title: "Road Construction", icon: <FaRoad /> },
        { title: "Building Construction", icon: <FaBuilding /> },
        { title: "Bridge Engineering", icon: <FaArchway /> },
        { title: "Water Infrastructure", icon: <FaWater /> },
        { title: "Project Management", icon: <FaProjectDiagram /> },
        { title: "Civil Works", icon: <FaTools /> },
    ];

    return (
        <section className="bg-slate-50 py-28 px-6">
            <div className="max-w-7xl mx-auto text-center">

                {/* TITLE */}
                <h2 className="text-4xl md:text-5xl font-extrabold text-primary tracking-tight">
                    Our Services
                </h2>

                <p className="mt-5 text-slate-600 max-w-2xl mx-auto leading-[1.8]">
                    We deliver <span className="font-bold text-dark">world-class infrastructure solutions</span> across Ethiopia
                    with <span className="font-bold text-dark">precision</span>, <span className="font-bold text-dark">safety</span>, and
                    <span className="font-bold text-dark"> engineering excellence</span>.
                </p>

                {/* GRID */}
                <div className="grid md:grid-cols-3 gap-10 mt-16">

                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -12, scale: 1.03 }}
                            className="group relative p-8 rounded-2xl bg-white shadow-md border border-slate-200 overflow-hidden transition-all duration-300"
                        >

                            {/* TOP ACCENT BAR */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-primary group-hover:bg-gold transition"></div>

                            {/* ICON */}
                            <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary text-white text-2xl shadow-md group-hover:bg-gold group-hover:text-dark transition">
                                {service.icon}
                            </div>

                            {/* TITLE (BOLD) */}
                            <h3 className="mt-6 text-xl font-bold text-dark group-hover:text-primary transition">
                                <span className="font-extrabold">{service.title}</span>
                            </h3>

                            {/* DESCRIPTION (BOLD KEY WORDS) */}
                            <p className="mt-3 text-slate-600 leading-[1.8] group-hover:text-slate-700 transition">
                                Professional execution of{" "}
                                <span className="font-bold text-dark">{service.title.toLowerCase()}</span>
                                {" "}using <span className="font-bold text-dark">modern engineering standards</span> and
                                <span className="font-bold text-dark"> certified experts</span>.
                            </p>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Services;