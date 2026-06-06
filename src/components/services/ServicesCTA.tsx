import { useNavigate } from "react-router-dom";

const ServicesCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="relative py-24 px-6 text-center bg-white overflow-hidden">

            {/* subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-[#C8851F]/10 blur-3xl rounded-full" />

            <div className="relative z-10 max-w-3xl mx-auto">

                <h2 className="text-4xl md:text-5xl font-bold text-[#002244]">
                    Ready to Start Your Next Project?
                </h2>

                <p className="mt-5 text-slate-600 text-lg leading-relaxed">
                    Partner with GGS Infrastructure PLC for reliable engineering and construction solutions.
                </p>

                <button
                    onClick={() => navigate("/contact")}
                    className="mt-8 bg-[#C8851F] text-white px-8 py-4 rounded-lg font-semibold
                    hover:scale-105 transition duration-300 shadow-md"
                >
                    Contact Us Today
                </button>

            </div>

        </section>
    );
};

export default ServicesCTA;