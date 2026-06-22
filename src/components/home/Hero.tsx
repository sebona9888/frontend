import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center pt-24"
            style={{
                backgroundImage: "url('/images/construction-materials.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#002244]/80 via-[#002244]/50 to-black/30" />

            {/* Glow (hidden on small screens for performance) */}
            <div className="hidden md:block absolute top-0 right-0 w-[400px] h-[400px] bg-[#C8851F]/20 rounded-full blur-3xl" />

            {/* CONTENT WRAPPER */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="text-center lg:text-left"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F4C46A] text-xs sm:text-sm font-semibold mb-5">
                        Trusted Construction Company in Ethiopia
                    </div>

                    {/* Heading */}
                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-white leading-tight">
                        Building Ethiopia’s
                        <span className="block text-[#F4C46A]">
                            Future Infrastructure
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-5 text-white/85 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
                        GGS Infrastructure PLC delivers world-class construction,
                        road development, bridge engineering, and civil works with
                        innovation, safety, and excellence.
                    </p>

                    {/* Buttons */}
                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">

                        <button
                            onClick={() => navigate("/projects")}
                            className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl bg-[#C8851F] text-white font-semibold shadow-lg hover:scale-105 transition"
                        >
                            Explore Projects
                        </button>

                        <button
                            onClick={() => navigate("/contact")}
                            className="px-6 py-3 sm:px-8 sm:py-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#002244] transition"
                        >
                            Contact Us
                        </button>

                    </div>

                    {/* Stats */}
                    <div className="mt-10 grid grid-cols-3 gap-4 text-center lg:text-left">

                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                10+
                            </h3>
                            <p className="text-white/70 text-xs sm:text-sm">
                                Years Experience
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                100+
                            </h3>
                            <p className="text-white/70 text-xs sm:text-sm">
                                Projects Completed
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                                50+
                            </h3>
                            <p className="text-white/70 text-xs sm:text-sm">
                                Engineers
                            </p>
                        </div>

                    </div>
                </motion.div>

                {/* RIGHT IMAGE (TABLET + DESKTOP ONLY) */}
                <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7 }}
                    className="hidden lg:block"
                >
                    <div className="relative group">

                        <img
                            src="/images/construction-materials.jpg"
                            alt="Construction Project"
                            className="rounded-3xl border border-white/20 shadow-2xl transition duration-700 group-hover:scale-105"
                        />

                        {/* Floating Card */}
                        <div className="absolute -bottom-6 left-6 bg-white/90 backdrop-blur-xl p-4 rounded-2xl shadow-2xl w-[240px]">

                            <p className="text-xs text-gray-500">
                                Ongoing Project
                            </p>

                            <h4 className="font-bold text-[#002244] text-base">
                                Highway Expansion
                            </h4>

                            <p className="text-xs text-gray-600 mt-1">
                                Addis Ababa, Ethiopia
                            </p>

                        </div>

                    </div>
                </motion.div>

            </div>
        </section>
    );
};

export default Hero;