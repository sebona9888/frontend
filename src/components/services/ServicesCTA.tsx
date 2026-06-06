import { useNavigate } from "react-router-dom";

const ServicesCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-14 sm:py-20 md:py-24 px-4 sm:px-6 text-center bg-white overflow-hidden">

            {/* background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[250px] sm:w-[350px] md:w-[400px] h-[250px] sm:h-[350px] md:h-[400px] bg-[#C8851F]/10 blur-3xl rounded-full" />

            <div className="relative z-10 max-w-3xl mx-auto">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#002244] leading-snug md:leading-tight">
                    Ready to Start Your Next Project?
                </h2>

                {/* DESCRIPTION */}
                <p className="mt-4 sm:mt-5 text-sm sm:text-base md:text-lg text-slate-600 leading-relaxed px-2 sm:px-0">
                    Partner with GGS Infrastructure PLC for reliable engineering and construction solutions.
                </p>

                {/* BUTTON */}
                <button
                    onClick={() => navigate("/contact")}
                    className="mt-6 sm:mt-8 bg-[#C8851F] text-white px-6 sm:px-7 md:px-8 py-3 sm:py-3.5 md:py-4 rounded-lg font-semibold
                    hover:scale-105 active:scale-95 transition duration-300 shadow-md text-sm sm:text-base"
                >
                    Contact Us Today
                </button>

            </div>
        </section>
    );
};

export default ServicesCTA;