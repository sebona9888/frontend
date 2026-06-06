import { motion } from "framer-motion";

const ServicesHero = () => {
    return (
        <section
            className="relative h-[70vh] flex items-center justify-center text-center text-white overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/hero.jpg')",
            }}
        >
            {/* SOFT GRADIENT OVERLAY (NOT TOO DARK) */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />

            {/* OPTIONAL LIGHT GLOW EFFECT */}
            <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-yellow-400/10 blur-3xl rounded-full" />

            {/* CONTENT */}
            <div className="relative z-10 px-6 max-w-4xl">

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-5xl md:text-7xl font-bold drop-shadow-lg"
                >
                    Our Services
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="mt-6 text-lg md:text-xl text-white/90 leading-relaxed"
                >
                    Delivering innovative construction, engineering and infrastructure
                    solutions with precision, quality, and trust across Ethiopia.
                </motion.p>

            </div>
        </section>
    );
};

export default ServicesHero;