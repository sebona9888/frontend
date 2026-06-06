import { motion } from "framer-motion";

const CareersHero = () => {
    return (
        <section className="relative w-full min-h-[80vh] md:h-screen overflow-hidden bg-black">

            {/* 🎬 BACKGROUND VIDEO */}
            <video
                className="absolute inset-0 w-full h-full object-cover object-center scale-105"
                src="/videos/careers.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster="/images/careers-poster.jpg"
            />

            {/* 🌫 OVERLAY (RESPONSIVE) */}
            <div className="absolute inset-0 bg-black/60 md:bg-black/50"></div>

            {/* ✨ CONTENT */}
            <div className="relative z-10 flex items-center justify-center min-h-[80vh] md:h-screen px-4 sm:px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-3xl"
                >

                    {/* TITLE */}
                    <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
                        Careers
                    </h1>

                    {/* DESCRIPTION */}
                    <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white/80 leading-relaxed px-2 sm:px-0">
                        Join our team and help build Ethiopia’s future infrastructure
                        with innovation, strength, and precision.
                    </p>

                    {/* CTA BUTTONS */}
                    <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">

                        <button className="px-6 sm:px-7 py-3 rounded-full bg-[#D28E28] text-black font-semibold
                        hover:scale-105 active:scale-95 transition text-sm sm:text-base">
                            Explore Careers
                        </button>

                        <button className="px-6 sm:px-7 py-3 rounded-full border border-white/30 text-white
                        hover:bg-white/10 transition text-sm sm:text-base">
                            Learn More
                        </button>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default CareersHero;