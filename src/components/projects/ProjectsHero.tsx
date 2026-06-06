import { motion } from "framer-motion";

const ProjectsHero = () => {
    return (
        <section
            className="relative h-[60vh] flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/projects-hero.jpg')",
            }}
        >
            {/* LIGHT OVERLAY (LESS DARK) */}
            <div className="absolute inset-0 bg-black/25" />

            {/* EXTRA LIGHT BRIGHTNESS LAYER */}
            <div className="absolute inset-0 bg-white/10" />

            {/* SOFT GLOW */}
            <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-yellow-300/10 blur-3xl rounded-full" />

            {/* CONTENT */}
            <div className="relative z-10 px-6 max-w-3xl">

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-4xl md:text-6xl font-bold drop-shadow-lg"
                >
                    Our Projects
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="mt-4 text-white/95 text-lg md:text-xl"
                >
                    Explore some of our successful infrastructure and construction projects.
                </motion.p>

            </div>
        </section>
    );
};

export default ProjectsHero;