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
        icon: <FaRoad size={40} />,
        title: "Road Construction",
        description:
            "Construction and rehabilitation of highways, urban roads and transportation infrastructure.",
        path: "/services/road-construction",
    },
    {
        icon: <FaBuilding size={40} />,
        title: "Building Construction",
        description:
            "Residential, commercial and industrial construction projects.",
        path: "/services/building-construction",
    },
    {
        icon: <FaWater size={40} />,
        title: "Water Infrastructure",
        description:
            "Water supply systems, drainage and sanitation solutions.",
        path: "/services/water-infrastructure",
    },
    {
        icon: <FaBolt size={40} />,
        title: "Electrical Installation",
        description:
            "Modern electrical systems and infrastructure installation.",
        path: "/services/electrical-installation",
    },
    {
        icon: <FaTruckMoving size={40} />,
        title: "Machinery Rental",
        description:
            "Heavy construction equipment rental services.",
        path: "/services/machinery-rental",
    },
    {
        icon: <FaTools size={40} />,
        title: "Engineering Consultancy",
        description:
            "Engineering design, planning and project management.",
        path: "/services/engineering-consultancy",
    },
];

const ServicesGrid = () => {
    return (
        <section className="max-w-7xl mx-auto py-20 px-6">
            <div className="text-center mb-14">
                <h2 className="text-4xl font-bold text-gray-800">
                    What We Offer
                </h2>

                <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
                    Comprehensive infrastructure and construction solutions tailored to public and private sector projects.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={service.title}
                        initial={{ opacity: 0, y: 60 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white border border-gray-200 p-8 rounded-2xl shadow-md hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                    >
                        <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-900 mb-6">
                            {service.icon}
                        </div>

                        <h3 className="text-2xl font-bold text-gray-800">
                            {service.title}
                        </h3>

                        <p className="mt-4 text-gray-600 leading-relaxed">
                            {service.description}
                        </p>

                        <Link
                            to={service.path}
                            className="mt-6 inline-flex items-center font-semibold text-blue-900 hover:underline"
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