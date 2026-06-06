import { motion } from "framer-motion";

const MissionVision = () => {
    return (
        <section className="py-14 sm:py-20 md:py-24 px-4 sm:px-6 bg-gradient-to-b from-slate-50 to-slate-100">

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">

                {/* MISSION */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-md border-t-4 border-blue-800 hover:shadow-xl transition"
                >
                    <div className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-full bg-blue-100 mb-4 sm:mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-7 h-6 sm:h-7 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                        Our Mission
                    </h3>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                        To deliver safe, reliable, and high-quality infrastructure solutions
                        that improve lives, strengthen communities, and support sustainable development.
                    </p>
                </motion.div>

                {/* VISION */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-md border-t-4 border-orange-500 hover:shadow-xl transition"
                >
                    <div className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-full bg-orange-100 mb-4 sm:mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-7 h-6 sm:h-7 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                        Our Vision
                    </h3>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                        To become one of Ethiopia’s most trusted and innovative infrastructure companies,
                        delivering excellence in every project we undertake.
                    </p>
                </motion.div>

                {/* VALUES */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white p-6 sm:p-7 md:p-8 rounded-2xl shadow-md border-t-4 border-blue-800 hover:shadow-xl transition"
                >
                    <div className="w-12 sm:w-14 h-12 sm:h-14 flex items-center justify-center rounded-full bg-blue-100 mb-4 sm:mb-5">
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-6 sm:w-7 h-6 sm:h-7 text-blue-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                                d="M12 8c-1.657 0-3 1.343-3 3 0 1.306.835 2.417 2 2.83V18a1 1 0 102 0v-4.17A3.001 3.001 0 0015 11c0-1.657-1.343-3-3-3z" />
                        </svg>
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-800">
                        Our Values
                    </h3>

                    <p className="mt-3 sm:mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                        Integrity, Quality, Safety, Innovation, Sustainability,
                        and Commitment to Excellence in every construction project.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default MissionVision;