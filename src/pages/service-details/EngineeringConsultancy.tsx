import { motion } from "framer-motion";

const ConsultancyHero = () => {
    return (
        <div className="min-h-screen">

            {/* HERO SECTION (reduced top padding) */}
            <section className="relative w-full h-[55vh] md:h-[65vh] overflow-hidden pt-14 md:pt-16">

                {/* IMAGE (clean + sharper look) */}
                <img
                    src="/images/consultance.jpg"
                    alt="Consultancy"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{
                        transform: "scale(1.02)",
                        filter: "brightness(1.2) contrast(1.25) saturate(1.1)"
                    }}
                />

                {/* STRONGER readability overlay (fix text visibility) */}
                <div className="absolute inset-0 bg-black/55"></div>

                {/* TEXT */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6 text-white">

                    <motion.h1
                        initial={{ opacity: 0, y: -30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl md:text-5xl font-bold drop-shadow-xl"
                    >
                        Consultancy Services
                    </motion.h1>

                    <p className="mt-3 max-w-2xl text-gray-100 text-sm md:text-base">
                        Professional guidance for planning, design, and execution of infrastructure projects.
                    </p>

                </div>
            </section>

            {/* DEFINITION SECTION */}
            <section className="max-w-5xl mx-auto py-14 px-6 text-center">

                <h2 className="text-3xl font-bold text-gray-900 mb-5">
                    What is Consultancy?
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed">
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