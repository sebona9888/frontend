import { motion } from "framer-motion";

const ServicesHero = () => {
    return (
        <section
            className="relative min-h-[60vh] md:h-[70vh] flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center pt-20"
            style={{
                backgroundImage: "url('/images/hero.jpg')",
            }}
        >
            {/* OVERLAY */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 md:from-black/50 md:via-black/30 md:to-black/10" />

            {/* GLOW EFFECT (RESPONSIVE SIZE) */}
            <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] md:w-[350px] h-[200px] sm:h-[300px] md:h-[350px] bg-yellow-400/10 blur-3xl rounded-full" />

            {/* CONTENT */}
            <div className="relative z-10 px-4 sm:px-6 max-w-4xl">

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-snug md:leading-tight drop-shadow-lg"
                >
                    Our Services
                </motion.h1>

                {/* DESCRIPTION */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed px-2 sm:px-0"
                >
                    Delivering innovative construction, engineering and infrastructure
                    solutions with precision, quality, and trust across Ethiopia.
                </motion.p>

            </div>
        </section>
    );
};

export default ServicesHero;