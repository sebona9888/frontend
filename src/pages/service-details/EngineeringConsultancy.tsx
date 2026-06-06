import { motion } from "framer-motion";

const ConsultancyHero = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* HERO SECTION */}
            <section className="relative w-full h-[52vh] sm:h-[60vh] md:h-[70vh] overflow-hidden pt-14 md:pt-16">

                {/* IMAGE */}
                <img
                    src="/images/consultance.jpg"
                    alt="Consultancy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{
                        transform: "scale(1.03)",
                        filter: "brightness(1.15) contrast(1.2) saturate(1.05)"
                    }}
                />

                {/* PROFESSIONAL OVERLAY (balanced, not too dark) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60"></div>

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 sm:px-6 text-white">

                    <motion.h1
                        initial={{ opacity: 0, y: -25 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl sm:text-4xl md:text-5xl font-bold drop-shadow-lg"
                    >
                        Consultancy Services
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="mt-4 max-w-2xl text-white/85 text-sm sm:text-base md:text-lg leading-relaxed"
                    >
                        Professional guidance for planning, design, and execution of infrastructure projects.
                    </motion.p>

                </div>
            </section>

            {/* DEFINITION SECTION */}
            <section className="max-w-4xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 sm:mb-6">
                    What is Consultancy?
                </h2>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Consultancy services involve providing expert advice and technical solutions
                    to help clients plan, design, and manage construction and infrastructure projects.
                    It ensures efficiency, cost-effectiveness, and successful execution through
                    professional engineering and strategic planning.
                </p>

            </section>

        </div>
    );
};

export default ConsultancyHero;