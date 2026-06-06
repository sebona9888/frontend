import { motion } from "framer-motion";

const WhyChooseUs = () => {
    const stats = [
        {
            value: "10+",
            label: "Years Experience",
            icon: (
                <svg className="w-6 h-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M12 8v4l3 3" />
                </svg>
            ),
        },
        {
            value: "100+",
            label: "Projects Delivered",
            icon: (
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M9 12h6m2 4H7m10-8H7" />
                </svg>
            ),
        },
        {
            value: "50+",
            label: "Professional Experts",
            icon: (
                <svg className="w-6 h-6 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M5.121 17.804A7 7 0 1118.364 4.56" />
                </svg>
            ),
        },
        {
            value: "100%",
            label: "Client Commitment",
            icon: (
                <svg className="w-6 h-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                        d="M5 13l4 4L19 7" />
                </svg>
            ),
        },
    ];

    return (
        <section className="bg-gradient-to-b from-white to-slate-100 py-24 px-6">
            <div className="max-w-7xl mx-auto text-center">

                {/* Title */}
                <h2 className="text-4xl font-bold text-slate-800">
                    Why Choose Us
                </h2>

                <p className="mt-4 text-slate-600 max-w-3xl mx-auto">
                    We combine experience, innovation, and dedication to deliver
                    infrastructure solutions that exceed expectations.
                </p>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-4 gap-8 mt-14">

                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -8, scale: 1.03 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border-t-4 border-slate-200"
                        >
                            <div className="flex justify-center mb-4">
                                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100">
                                    {item.icon}
                                </div>
                            </div>

                            <h3 className="text-4xl font-bold text-orange-500">
                                {item.value}
                            </h3>

                            <p className="mt-2 text-slate-600 font-medium">
                                {item.label}
                            </p>
                        </motion.div>
                    ))}

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;