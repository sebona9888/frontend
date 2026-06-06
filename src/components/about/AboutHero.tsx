import { motion } from "framer-motion";

const AboutHero = () => {
    return (
        <section className="relative w-full min-h-[60vh] md:h-[70vh] flex items-center justify-center text-center overflow-hidden pt-20">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center scale-105"
                style={{
                    backgroundImage: "url('/images/about-hero.jpg')",
                }}
            />

            {/* Dark Overlay (stronger for readability) */}
            <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

            {/* Content */}
            <div className="relative z-10 px-5 sm:px-6 max-w-4xl">

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, scale: 0.85, y: 40 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-snug md:leading-tight"
                >
                    About GGS Infrastructure PLC
                </motion.h1>

                {/* DESCRIPTION */}
                <motion.p
                    initial={{ opacity: 0, y: 25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mt-4 md:mt-6 text-white/90 text-sm sm:text-base md:text-lg lg:text-xl max-w-2xl mx-auto leading-relaxed"
                >
                    Building Ethiopia's future through innovative engineering
                    and infrastructure solutions.
                </motion.p>

                {/* BUTTON */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-8 md:mt-10"
                >
                    <a
                        href="/projects"
                        className="inline-flex items-center px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-4 bg-[#C8851F] hover:bg-[#d69533] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl text-sm sm:text-base"
                    >
                        Explore Our Projects
                    </a>
                </motion.div>

            </div>

        </section>
    );
};

export default AboutHero;