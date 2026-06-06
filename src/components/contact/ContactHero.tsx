import { motion } from "framer-motion";

const ContactHero = () => {
    return (
        <section className="relative min-h-[55vh] md:h-[60vh] overflow-hidden flex items-center justify-center pt-20">

            {/* BACKGROUND IMAGE */}
            <img
                src="/images/contact.jpg"
                alt="Contact"
                className="absolute inset-0 w-full h-full object-cover object-center"
            />

            {/* CLEAN OVERLAY SYSTEM */}
            <div className="absolute inset-0 bg-black/50 md:bg-black/40"></div>

            {/* LIGHT BOOST (subtle) */}
            <div className="absolute inset-0 bg-white/5"></div>

            {/* OPTIONAL GLOW (responsive) */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] sm:w-[350px] md:w-[450px] h-[250px] sm:h-[350px] md:h-[450px] bg-[#C8851F]/10 blur-3xl rounded-full"></div>

            {/* CONTENT */}
            <div className="relative z-10 text-center px-4 sm:px-6 max-w-3xl">

                <motion.h1
                    initial={{ opacity: 0, y: -25 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-xl"
                >
                    Contact Us
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.7 }}
                    className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-medium leading-relaxed px-2 sm:px-0"
                >
                    We are ready to help you with your infrastructure and construction projects.
                </motion.p>

            </div>
        </section>
    );
};

export default ContactHero;