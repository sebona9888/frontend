import { FaBriefcase, FaUsers, FaChartLine } from "react-icons/fa";

const CareersWhyJoin = () => {
    return (
        <section className="bg-gradient-to-b from-gray-50 to-white py-12 sm:py-16 px-4 sm:px-6">

            <div className="max-w-6xl mx-auto text-center">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900">
                    Why Join Us?
                </h2>

                <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
                    Grow your career with a company that values innovation, teamwork, and real impact.
                </p>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-12">

                    {/* CARD 1 */}
                    <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition text-center">
                        <FaBriefcase className="text-[#C8851F] mx-auto text-3xl sm:text-4xl" />
                        <h3 className="mt-4 font-semibold text-lg sm:text-xl text-gray-900">
                            Career Growth
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                            Learn and grow in real engineering projects.
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition text-center">
                        <FaUsers className="text-[#C8851F] mx-auto text-3xl sm:text-4xl" />
                        <h3 className="mt-4 font-semibold text-lg sm:text-xl text-gray-900">
                            Team Work
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                            Work with experienced professionals.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="p-6 sm:p-8 bg-white rounded-2xl shadow-sm hover:shadow-md hover:-translate-y-1 transition text-center">
                        <FaChartLine className="text-[#C8851F] mx-auto text-3xl sm:text-4xl" />
                        <h3 className="mt-4 font-semibold text-lg sm:text-xl text-gray-900">
                            Impact
                        </h3>
                        <p className="text-gray-600 mt-2 text-sm sm:text-base leading-relaxed">
                            Build real infrastructure in Ethiopia.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CareersWhyJoin;