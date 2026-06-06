import { useEffect, useState } from "react";
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

    // lock scroll when modal open
    useEffect(() => {
        if (selectedJob) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedJob]);

    return (
        <section className="w-full bg-white text-gray-900 py-12 sm:py-16 px-4 sm:px-6">

            {/* JOB LIST */}
            <div className="max-w-5xl mx-auto grid gap-5 sm:gap-6">

                {jobsData.map((job) => (
                    <motion.div
                        key={job.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.01 }}
                        className="border border-gray-200 rounded-2xl p-5 sm:p-6 shadow-sm hover:shadow-md transition bg-white"
                    >
                        {/* TITLE */}
                        <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                            {job.title}
                        </h2>

                        {/* META */}
                        <div className="flex flex-wrap gap-3 sm:gap-4 mt-2 text-gray-500 text-xs sm:text-sm">
                            <span className="flex items-center gap-2">
                                <FaMapMarkerAlt />
                                {job.location}
                            </span>

                            <span className="flex items-center gap-2">
                                <FaClock />
                                {job.type}
                            </span>

                            {/* JOB TYPE BADGE */}
                            <span className={`px-2 py-1 rounded-full text-xs font-medium
                                ${job.type === "Full-time"
                                    ? "bg-green-100 text-green-700"
                                    : "bg-yellow-100 text-yellow-700"
                                }`}
                            >
                                {job.type}
                            </span>
                        </div>

                        {/* DESCRIPTION */}
                        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                            {job.description}
                        </p>

                        {/* BUTTON */}
                        <button
                            onClick={() => setSelectedJob(job)}
                            className="mt-4 bg-black text-white px-4 sm:px-5 py-2 rounded-lg
                            hover:bg-gray-800 active:scale-95 transition text-sm sm:text-base"
                        >
                            Apply
                        </button>
                    </motion.div>
                ))}

            </div>

            {/* MODAL */}
            {selectedJob && (
                <div
                    className="fixed inset-0 bg-black/60 flex items-center justify-center px-4 z-50"
                    onClick={() => setSelectedJob(null)}
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.2 }}
                        className="bg-white w-full max-w-md rounded-2xl p-5 sm:p-6 shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* TITLE */}
                        <h2 className="text-lg sm:text-xl font-bold">
                            Apply for {selectedJob.title}
                        </h2>

                        <p className="mt-3 text-sm sm:text-base text-gray-600">
                            Send your CV to our HR team.
                        </p>

                        {/* INPUT */}
                        <input
                            className="w-full border p-3 rounded-lg mt-4 text-sm sm:text-base
                            focus:ring-2 focus:ring-black outline-none"
                            placeholder="Your Email"
                        />

                        {/* BUTTON */}
                        <button className="mt-4 w-full bg-black text-white py-3 rounded-lg
                        hover:bg-gray-800 active:scale-95 transition">
                            Send Application
                        </button>

                        {/* CLOSE */}
                        <button
                            onClick={() => setSelectedJob(null)}
                            className="mt-3 w-full text-gray-500 hover:text-black transition text-sm"
                        >
                            Close
                        </button>
                    </motion.div>
                </div>
            )}

        </section>
    );
};

export default CareersList;