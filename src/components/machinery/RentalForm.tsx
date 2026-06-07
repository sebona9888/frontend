import { motion, AnimatePresence } from "framer-motion";

type Machine = {
    name: string;
    image: string;
    desc: string;
    rate: string;
};

type Props = {
    open: boolean;
    onClose: () => void;
    machines: Machine[];
};

const RentalForm = ({ open, onClose, machines }: Props) => {
    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    className="
                        fixed inset-0 bg-black/70
                        flex items-center justify-center
                        z-[9999] p-3 sm:p-4
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="
                            bg-white rounded-2xl
                            w-full max-w-sm sm:max-w-md
                            p-4 sm:p-6
                        "
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                    >
                        <h2 className="
                            text-xl sm:text-2xl font-bold mb-4
                            text-[#002B5B]
                        ">
                            Request Rental
                        </h2>

                        <form className="space-y-4">

                            {/* NAME */}
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="
                                    w-full border p-2 sm:p-3
                                    rounded-lg text-sm sm:text-base
                                "
                            />

                            {/* PHONE */}
                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="
                                    w-full border p-2 sm:p-3
                                    rounded-lg text-sm sm:text-base
                                "
                            />

                            {/* MACHINE SELECT */}
                            <select className="
                                w-full border p-2 sm:p-3
                                rounded-lg text-sm sm:text-base
                            ">
                                <option>Select Machine</option>

                                {machines.map((machine, i) => (
                                    <option key={i}>
                                        {machine.name}
                                    </option>
                                ))}
                            </select>

                            {/* DETAILS */}
                            <textarea
                                rows={4}
                                placeholder="Project Details"
                                className="
                                    w-full border p-2 sm:p-3
                                    rounded-lg text-sm sm:text-base
                                "
                            />

                            {/* SUBMIT */}
                            <button
                                type="submit"
                                className="
                                    w-full bg-green-600 text-white
                                    py-2 sm:py-3 rounded-lg
                                    hover:bg-green-700 transition
                                "
                            >
                                Submit Request
                            </button>
                        </form>

                        {/* CLOSE */}
                        <button
                            onClick={onClose}
                            className="
                                w-full mt-3 bg-red-500 text-white
                                py-2 sm:py-3 rounded-lg
                                hover:bg-red-600 transition
                            "
                        >
                            Close
                        </button>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default RentalForm;