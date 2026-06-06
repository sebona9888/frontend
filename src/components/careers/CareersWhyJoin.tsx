import { FaBriefcase } from "react-icons/fa";

const CareersWhyJoin = () => {
    return (
        <section className="bg-gray-100 py-16 px-6">
            <div className="max-w-6xl mx-auto text-center">

                <h2 className="text-3xl font-bold">
                    Why Join Us?
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mt-12">

                    <div className="p-6 bg-white rounded-xl shadow">
                        <FaBriefcase className="text-black mx-auto text-3xl" />
                        <h3 className="mt-4 font-bold">Career Growth</h3>
                        <p className="text-gray-600 mt-2">
                            Learn and grow in real engineering projects.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow">
                        <FaBriefcase className="text-black mx-auto text-3xl" />
                        <h3 className="mt-4 font-bold">Team Work</h3>
                        <p className="text-gray-600 mt-2">
                            Work with experienced professionals.
                        </p>
                    </div>

                    <div className="p-6 bg-white rounded-xl shadow">
                        <FaBriefcase className="text-black mx-auto text-3xl" />
                        <h3 className="mt-4 font-bold">Impact</h3>
                        <p className="text-gray-600 mt-2">
                            Build real infrastructure in Ethiopia.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default CareersWhyJoin;