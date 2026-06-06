import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section
            className="relative min-h-screen flex items-center overflow-hidden bg-cover bg-center"
            style={{
                backgroundImage: "url('/images/construction-materials.jpg')",
            }}
        >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#002244]/70 via-[#002244]/40 to-transparent" />

            {/* Decorative Glow */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C8851F]/20 rounded-full blur-3xl" />

            {/* Main Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <motion.div
                    initial={{ opacity: 0, x: -60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Badge */}
                    <div className="inline-flex items-center px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[#F4C46A] text-sm font-semibold mb-6">
                        Trusted Construction Company in Ethiopia
                    </div>

                    {/* Heading */}
                    <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1]">
                        Building Ethiopia’s
                        <span className="block text-[#F4C46A]">
                            Future Infrastructure
                        </span>
                    </h1>

                    {/* Description */}
                    <p className="mt-6 text-white/85 text-lg md:text-xl leading-relaxed max-w-xl">
                        GGS Infrastructure PLC delivers world-class construction,
                        road development, bridge engineering, and civil works with
                        innovation, safety, and excellence.
                    </p>

                    {/* Buttons */}
                    <div className="mt-10 flex flex-wrap gap-4">

                        <button
                            onClick={() => navigate("/projects")}
                            className="px-8 py-4 rounded-xl bg-[#C8851F] text-white font-semibold shadow-lg hover:scale-105 transition duration-300"
                        >
                            Explore Projects
                        </button>

                        <button
                            onClick={() => navigate("/contact")}
                            className="px-8 py-4 rounded-xl border border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white hover:text-[#002244] transition duration-300"
                        >
                            Contact Us
                        </button>

                    </div>

                    {/* Stats */}
                    <div className="mt-12 flex gap-10 flex-wrap">
                        <div>
                            <h3 className="text-3xl font-bold text-white">10+</h3>
                            <p className="text-white/70 text-sm">Years Experience</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-white">100+</h3>
                            <p className="text-white/70 text-sm">Projects Completed</p>
                        </div>

                        <div>
                            <h3 className="text-3xl font-bold text-white">50+</h3>
                            <p className="text-white/70 text-sm">Expert Engineers</p>
                        </div>
                    </div>
                </motion.div>

                {/* RIGHT IMAGE SECTION */}
                <motion.div
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="hidden md:block"
                >
                    <div className="relative group">

                        {/* Main Image */}
                        <img
                            src="/images/construction-materials.jpg"
                            alt="Construction Project"
                            className="rounded-3xl border border-white/20 shadow-2xl transition duration-700 group-hover:scale-105"
                        />

                        {/* Floating Project Card (FIXED) */}
                        <div className="absolute -bottom-6 left-6 bg-white/90 backdrop-blur-xl p-5 rounded-2xl shadow-2xl w-[260px]">

                            <p className="text-sm text-gray-500">
                                Ongoing Project
                            </p>

                            <h4 className="font-bold text-[#002244] text-lg">
                                Highway Expansion
                            </h4>

                            <p className="text-sm text-gray-600 mt-1">
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