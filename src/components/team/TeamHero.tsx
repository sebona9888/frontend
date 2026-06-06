import { motion } from "framer-motion";

const TeamHero = () => {
    return (
        <section className="relative min-h-[70vh] md:h-screen w-full flex items-center justify-center px-4 sm:px-6 pt-20 overflow-hidden">

            {/* BACKGROUND IMAGE */}
            <img
                src="/images/team.jpg"
                alt="Our Team"
                className="absolute inset-0 w-full h-full object-cover object-[50%_20%] z-0 brightness-110 md:brightness-125 contrast-105 md:contrast-110"
            />

            {/* SINGLE CLEAN OVERLAY */}
            <div className="absolute inset-0 bg-[#002B5B]/30 md:bg-[#002B5B]/20 z-10"></div>

            {/* GLOW EFFECT (RESPONSIVE) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-[#D28E28]/10 blur-3xl rounded-full z-10"></div>

            {/* CONTENT */}
            <div className="relative z-20 text-center max-w-3xl mx-auto">

                {/* TITLE */}
                <motion.h1
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
                >
                    Our Team
                </motion.h1>

                {/* DIVIDER */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-16 sm:w-20 h-1 bg-[#D28E28] mx-auto my-5 sm:my-6 rounded-full"
                />

                {/* DESCRIPTION */}
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 leading-relaxed px-2 sm:px-0"
                >
                    Meet the dedicated engineers, architects, and professionals
                    behind our infrastructure projects shaping Ethiopia’s future.
                </motion.p>

            </div>
        </section>
    );
};

export default TeamHero;