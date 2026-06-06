import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const CareersCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="relative bg-white py-20 px-6 text-center overflow-hidden">

            {/* subtle glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(210,142,40,0.10),transparent_60%)]"></div>

            <div className="relative z-10 max-w-3xl mx-auto">

                <motion.button
                    whileHover={{
                        scale: 1.08,
                        boxShadow: "0px 10px 30px rgba(210,142,40,0.25)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => navigate("/contact")}
                    className="px-10 py-3 rounded-full bg-[#D28E28] text-black font-semibold"
                >
                    Join Our Team
                </motion.button>

            </div>
        </section>
    );
};

export default CareersCTA;