import { motion } from "framer-motion";

const ProjectsHero = () => {
    return (
        <section
            className="relative min-h-[55vh] md:h-[60vh] flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center pt-20"
            style={{
                backgroundImage: "url('/images/projects-hero.jpg')",
            }}
        >
            {/* OVERLAY (CLEAN + CONSISTENT) */}
            <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

            {/* LIGHT GLOW */}
            <div className="absolute top-0 right-0 w-[200px] sm:w-[300px] md:w-[350px] h-[200px] sm:h-[300px] md:h-[350px] bg-yellow-300/10 blur-3xl rounded-full" />

            {/* CONTENT */}
            <div className="relative z-10 px-4 sm:px-6 max-w-3xl">

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-snug md:leading-tight drop-shadow-lg"
                >
                    Our Projects
                </motion.h1>

                {/* DESCRIPTION */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed px-2 sm:px-0"
                >
                    Explore some of our successful infrastructure and construction projects.
                </motion.p>

            </div>
        </section>
    );
};

export default ProjectsHero;