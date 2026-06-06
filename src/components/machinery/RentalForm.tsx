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
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    <motion.div
                        className="bg-white p-6 rounded-2xl w-full max-w-md"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                    >
                        <h2 className="text-2xl font-bold mb-4">
                            Request Rental
                        </h2>

                        <form className="space-y-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full border p-3 rounded-lg"
                            />

                            <input
                                type="text"
                                placeholder="Phone Number"
                                className="w-full border p-3 rounded-lg"
                            />

                            <select className="w-full border p-3 rounded-lg">
                                <option>Select Machine</option>

                                {machines.map((machine, i) => (
                                    <option key={i}>{machine.name}</option>
                                ))}
                            </select>

                            <textarea
                                rows={4}
                                placeholder="Project Details"
                                className="w-full border p-3 rounded-lg"
                            />

                            <button
                                type="submit"
                                className="w-full bg-green-600 text-white py-3 rounded-lg"
                            >
                                Submit Request
                            </button>
                        </form>

                        <button
                            onClick={onClose}
                            className="w-full mt-3 bg-red-500 text-white py-3 rounded-lg"
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