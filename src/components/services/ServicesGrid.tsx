import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
    FaRoad,
    FaBuilding,
    FaWater,
    FaBolt,
    FaTruckMoving,
    FaTools,
} from "react-icons/fa";

const services = [
    {
        icon: <FaRoad size={34} />,
        title: "Road Construction",
        description:
            "Construction and rehabilitation of highways, urban roads and transportation infrastructure.",
        path: "/services/road-construction",
    },
    {
        icon: <FaBuilding size={34} />,
        title: "Building Construction",
        description:
            "Residential, commercial and industrial construction projects.",
        path: "/services/building-construction",
    },
    {
        icon: <FaWater size={34} />,
        title: "Water Infrastructure",
        description:
            "Water supply systems, drainage and sanitation solutions.",
        path: "/services/water-infrastructure",
    },
    {
        icon: <FaBolt size={34} />,
        title: "Electrical Installation",
        description:
            "Modern electrical systems and infrastructure installation.",
        path: "/services/electrical-installation",
    },
    {
        icon: <FaTruckMoving size={34} />,
        title: "Machinery Rental",
        description:
            "Heavy construction equipment rental services.",
        path: "/services/machinery-rental",
    },
    {
        icon: <FaTools size={34} />,
        title: "Engineering Consultancy",
        description:
            "Engineering design, planning and project management.",
        path: "/services/engineering-consultancy",
    },
];

const ServicesGrid = () => {
    return (
        <section className="max-w-7xl mx-auto py-14 sm:py-20 md:py-24 px-4 sm:px-6">

            {/* HEADER */}
            <div className="text-center mb-10 sm:mb-14">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                    What We Offer
                </h2>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
                    Comprehensive infrastructure and construction solutions tailored to public and private sector projects.
                </p>

            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 md:gap-8">

                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-200 p-6 sm:p-7 md:p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 active:scale-95"
                    >
                        {/* ICON */}
                        <div className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 mb-4 sm:mb-6">
                            {service.icon}
                        </div>

                        {/* TITLE */}
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
                            {service.title}
                        </h3>

                        {/* DESCRIPTION */}
                        <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                            {service.description}
                        </p>

                        {/* LINK */}
                        <Link
                            to={service.path}
                            className="mt-5 sm:mt-6 inline-flex items-center font-semibold text-blue-900 hover:underline text-sm sm:text-base"
                        >
                            Learn More →
                        </Link>
                    </motion.div>
                ))}

            </div>
        </section>
    );
};

export default ServicesGrid;