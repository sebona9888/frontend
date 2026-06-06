import { useNavigate } from "react-router-dom";

const ProjectsCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-white py-14 sm:py-20 md:py-24 text-center px-4 sm:px-6">

            {/* TITLE */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-[#002244] leading-snug">
                Ready to Start Your Next Project?
            </h2>

            {/* DESCRIPTION */}
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-gray-600 max-w-xl md:max-w-2xl mx-auto leading-relaxed px-2 sm:px-0">
                Partner with GGS Infrastructure PLC for innovative and reliable infrastructure solutions.
            </p>

            {/* BUTTON */}
            <button
                onClick={() => navigate("/team")}
                className="mt-6 sm:mt-8 bg-[#C8851F] text-white font-semibold px-5 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-xl
                hover:scale-105 active:scale-95 transition duration-300 shadow-md text-sm sm:text-base"
            >
                Contact Our Team
            </button>

        </section>
    );
};

export default ProjectsCTA;