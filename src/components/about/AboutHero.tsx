import { motion } from "framer-motion";

const AboutHero = () => {
    return (
        <section className="relative w-full h-[70vh] flex items-center justify-center text-center overflow-hidden">

            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: "url('/images/about-hero.jpg')",
                }}
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30" />

            {/* Content */}
            <div className="relative z-10 px-6 max-w-4xl">

                <motion.h1
                    initial={{
                        opacity: 0,
                        scale: 0.8,
                        y: 50,
                    }}
                    animate={{
                        opacity: 1,
                        scale: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1.2,
                        ease: "easeOut",
                    }}
                    className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white"
                >
                    About GGS Infrastructure PLC
                </motion.h1>

                <motion.p
                    initial={{
                        opacity: 0,
                        y: 30,
                    }}
                    animate={{
                        opacity: 1,
                        y: 0,
                    }}
                    transition={{
                        duration: 1,
                        delay: 0.5,
                        ease: "easeOut",
                    }}
                    className="mt-6 text-white/90 max-w-3xl mx-auto text-base md:text-xl leading-relaxed"
                >
                    Building Ethiopia's future through innovative engineering
                    and infrastructure solutions.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.9,
                    }}
                    className="mt-10"
                >
                    <a
                        href="/projects"
                        className="inline-flex items-center px-8 py-4 bg-[#C8851F] hover:bg-[#d69533] text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                        Explore Our Projects
                    </a>
                </motion.div>

            </div>

        </section>
    );
};

export default AboutHero;