import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CareersCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="relative bg-white py-16 sm:py-20 px-4 sm:px-6 text-center overflow-hidden">

            {/* BACKGROUND GLOW */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(210,142,40,0.12),transparent_65%)]"></div>

            {/* CONTENT */}
            <div className="relative z-10 max-w-3xl mx-auto">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002244]">
                    Join Our Growing Team
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                    Build your career with GGS Infrastructure PLC and be part of
                    Ethiopia’s future in engineering and construction.
                </p>

                {/* BUTTON */}
                <motion.button
                    whileHover={{
                        scale: 1.05,
                        boxShadow: "0px 10px 25px rgba(210,142,40,0.25)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/contact")}
                    className="mt-6 sm:mt-8 px-8 sm:px-10 py-3 sm:py-3.5 rounded-full bg-[#D28E28] text-black font-semibold
                    text-sm sm:text-base transition"
                >
                    Join Our Team
                </motion.button>

            </div>
        </section>
    );
};

export default CareersCTA;