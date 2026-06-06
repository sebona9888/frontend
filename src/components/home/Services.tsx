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
        <section className="bg-slate-50 py-16 md:py-28 px-6">
            <div className="max-w-7xl mx-auto text-center">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold text-[#002B5B] tracking-tight">
                    Our Services
                </h2>

                <p className="mt-4 md:mt-6 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto leading-relaxed">
                    We deliver <span className="font-bold text-[#002B5B]">world-class infrastructure solutions</span> across Ethiopia
                    with precision, safety, and engineering excellence.
                </p>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10 mt-10 md:mt-16">

                    {services.map((service, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -8, scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4 }}
                            className="group relative p-6 md:p-8 rounded-2xl bg-white shadow-md border border-slate-200 overflow-hidden transition-all duration-300"
                        >

                            {/* TOP BAR */}
                            <div className="absolute top-0 left-0 w-full h-1 bg-[#002B5B] group-hover:bg-[#C8851F] transition" />

                            {/* ICON */}
                            <div className="w-14 h-14 md:w-16 md:h-16 mx-auto flex items-center justify-center rounded-full bg-[#002B5B] text-white text-xl md:text-2xl shadow-md group-hover:bg-[#C8851F] transition">
                                {service.icon}
                            </div>

                            {/* TITLE */}
                            <h3 className="mt-5 text-lg md:text-xl font-bold text-[#002B5B] group-hover:text-[#C8851F] transition">
                                {service.title}
                            </h3>

                            {/* DESCRIPTION */}
                            <p className="mt-3 text-sm md:text-base text-slate-600 leading-relaxed group-hover:text-slate-700 transition">
                                Professional execution of{" "}
                                <span className="font-semibold text-[#002B5B]">
                                    {service.title.toLowerCase()}
                                </span>{" "}
                                using modern engineering standards and certified experts.
                            </p>

                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default Services;