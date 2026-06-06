import { useState } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaClock } from "react-icons/fa";

type Job = {
    id: string;
    title: string;
    location: string;
    type: string;
    description: string;
};

const jobsData: Job[] = [
    {
        id: "1",
        title: "Site Engineer",
        location: "Addis Ababa",
        type: "Full-time",
        description:
            "Supervise construction sites and ensure safety standards are followed."
    },
    {
        id: "2",
        title: "Project Manager",
        location: "Hawassa",
        type: "Full-time",
        description:
            "Manage construction projects and lead engineering teams."
    },
    {
        id: "3",
        title: "Civil Engineer",
        location: "Dire Dawa",
        type: "Contract",
        description:
            "Design and oversee infrastructure development projects."
    }
];

const CareersList = () => {
    const [selectedJob, setSelectedJob] = useState<Job | null>(null);

    return (
        <section className="w-full bg-white text-gray-900 py-16 px-6">

            {/* JOBS */}
            <div className="max-w-5xl mx-auto grid gap-6">

                {jobsData.map((job) => (
                    <motion.div
                        key={job.id}
                        whileHover={{ scale: 1.02 }}
                        className="border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
                    >
                        <h2 className="text-xl font-bold text-gray-900">
                            {job.title}
                        </h2>

                        <div className="flex gap-4 mt-2 text-gray-500 text-sm">
                            <span className="flex items-center gap-2">
                                <FaMapMarkerAlt />
                                {job.location}
                            </span>

                            <span className="flex items-center gap-2">
                                <FaClock />
                                {job.type}
                            </span>
                        </div>

                        <p className="mt-3 text-gray-600">
                            {job.description}
                        </p>

                        <button
                            onClick={() => setSelectedJob(job)}
                            className="mt-4 bg-black text-white px-5 py-2 rounded-lg"
                        >
                            Apply
                        </button>
                    </motion.div>
                ))}

            </div>

            {/* SIMPLE MODAL */}
            {selectedJob && (
                <div
                    className="fixed inset-0 bg-black/50 flex items-center justify-center px-4"
                    onClick={() => setSelectedJob(null)}
                >
                    <div
                        className="bg-white w-full max-w-md rounded-xl p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2 className="text-xl font-bold">
                            Apply for {selectedJob.title}
                        </h2>

                        <p className="mt-3 text-gray-600">
                            Send your CV to our HR team.
                        </p>

                        <input
                            className="w-full border p-3 rounded-lg mt-4"
                            placeholder="Your Email"
                        />

                        <button className="mt-4 w-full bg-black text-white py-3 rounded-lg">
                            Send Application
                        </button>

                        <button
                            onClick={() => setSelectedJob(null)}
                            className="mt-3 w-full text-gray-500"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}

        </section>
    );
};

export default CareersList;