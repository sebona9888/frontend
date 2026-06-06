import { useNavigate } from "react-router-dom";

const ProjectsCTA = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-white py-16 text-center px-6">

            <h2 className="text-3xl font-bold text-[#002244]">
                Ready to Start Your Next Project?
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
                Partner with GGS Infrastructure PLC for innovative and reliable infrastructure solutions.
            </p>

            <button
                onClick={() => navigate("/team")}
                className="mt-6 bg-[#C8851F] text-white font-semibold px-6 py-3 rounded-xl hover:scale-105 transition"
            >
                Contact Our Team
            </button>

        </section>
    );
};

export default ProjectsCTA;