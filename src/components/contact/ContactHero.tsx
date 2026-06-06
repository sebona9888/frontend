import { motion } from "framer-motion";

const ContactHero = () => {
    return (
        <section className="relative h-[60vh] overflow-hidden flex items-center justify-center">

            {/* Background Image */}
            <img
                src="/images/contact.jpg"
                alt="Contact"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Balanced Overlay (FIXED) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/40"></div>

            {/* Soft light boost (improves dark images) */}
            <div className="absolute inset-0 bg-white/5"></div>

            {/* Content */}
            <div className="relative z-10 text-center px-6 max-w-3xl">

                <motion.h1
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-5xl md:text-7xl font-bold text-white drop-shadow-2xl"
                >
                    Contact Us
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    className="mt-4 text-lg md:text-xl text-white/90 font-medium drop-shadow-lg"
                >
                    We are ready to help you with your infrastructure and construction projects.
                </motion.p>

            </div>

        </section>
    );
};

export default ContactHero;