import { motion } from "framer-motion";

const TeamHero = () => {
    return (
        <section className="relative h-screen w-full flex items-center justify-center px-6 pt-[80px] overflow-hidden">

            {/* Background Image */}
            <img
                src="/images/team.jpg"
                alt="Our Team"
                className="absolute inset-0 w-full h-full object-cover object-[50%_20%] z-0 brightness-125 contrast-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-[#002B5B]/10 z-10"></div>

            {/* Glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#002B5B]/20 via-[#002B5B]/5 to-[#002B5B]/25 z-10"></div>

            {/* Content */}
            <div className="relative z-20 text-center max-w-3xl mx-auto">

                <motion.h1
                    initial={{ opacity: 0, y: -30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl md:text-6xl font-bold text-white"
                >
                    Our Team
                </motion.h1>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="w-20 h-1 bg-[#D28E28] mx-auto my-6 rounded-full"
                />

                <motion.p className="text-white/90 text-lg md:text-xl leading-relaxed">
                    Meet the dedicated engineers, architects, and professionals
                    behind our infrastructure projects shaping Ethiopia’s future.
                </motion.p>

            </div>
        </section>
    );
};

export default TeamHero;