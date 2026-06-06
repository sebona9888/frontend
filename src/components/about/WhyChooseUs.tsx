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
        <section className="bg-gradient-to-b from-white to-slate-100 py-14 sm:py-20 md:py-24 px-4 sm:px-6">

            <div className="max-w-7xl mx-auto text-center">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800">
                    Why Choose Us
                </h2>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 max-w-2xl md:max-w-3xl mx-auto leading-relaxed">
                    We combine experience, innovation, and dedication to deliver
                    infrastructure solutions that exceed expectations.
                </p>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mt-10 md:mt-14">

                    {stats.map((item, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ y: -6, scale: 1.02 }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-md hover:shadow-xl border-t-4 border-slate-200 active:scale-95 transition"
                        >
                            {/* ICON */}
                            <div className="flex justify-center mb-3 sm:mb-4">
                                <div className="w-10 sm:w-12 h-10 sm:h-12 flex items-center justify-center rounded-full bg-slate-100">
                                    {item.icon}
                                </div>
                            </div>

                            {/* VALUE */}
                            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-orange-500">
                                {item.value}
                            </h3>

                            {/* LABEL */}
                            <p className="mt-2 text-xs sm:text-sm md:text-base text-slate-600 font-medium">
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