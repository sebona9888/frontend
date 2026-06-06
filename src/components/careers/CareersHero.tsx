import { motion } from "framer-motion";

const CareersHero = () => {
    return (
        <section className="relative w-full h-screen overflow-hidden bg-black">

            {/* 🎬 Background Video (High Quality Rendering) */}
            <video
                className="absolute inset-0 w-full h-full object-cover scale-110"
                src="/videos/careers.mp4"
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
            />

            {/* 🌫 Light Cinematic Overlay (lighter for better visibility) */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* ✨ Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-6 text-center">

                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.9 }}
                    className="max-w-3xl"
                >

                    <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
                        Careers
                    </h1>

                    <p className="mt-6 text-white/80 text-lg md:text-xl">
                        Join our team and help build Ethiopia’s future infrastructure with innovation, strength, and precision.
                    </p>

                    {/* CTA */}
                    <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">

                        <button className="px-7 py-3 rounded-full bg-[#D28E28] text-black font-semibold hover:scale-105 transition">
                            Explore Careers
                        </button>

                        <button className="px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 transition">
                            Learn More
                        </button>

                    </div>

                </motion.div>

            </div>
        </section>
    );
};

export default CareersHero;