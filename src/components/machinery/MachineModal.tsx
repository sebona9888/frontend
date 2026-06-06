import { motion, AnimatePresence } from "framer-motion";

type Machine = {
    name: string;
    image: string;
    desc: string;
    rate: string;
};

type Props = {
    machine: Machine | null;
    onClose: () => void;
    onRent: () => void;
};

const MachineModal = ({ machine, onClose, onRent }: Props) => {
    return (
        <AnimatePresence>
            {machine && (
                <motion.div
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >
                    <motion.div
                        className="bg-white rounded-2xl max-w-lg w-full overflow-hidden"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                    >
                        <img
                            src={machine.image}
                            alt={machine.name}
                            className="w-full h-64 object-cover"
                        />

                        <div className="p-6">
                            <h2 className="text-3xl font-bold text-[#002B5B]">
                                {machine.name}
                            </h2>

                            <p className="text-yellow-600 font-bold mt-2">
                                {machine.rate}
                            </p>

                            <p className="text-gray-600 mt-4">
                                {machine.desc}
                            </p>

                            <div className="flex gap-3 mt-6">
                                <button
                                    onClick={onRent}
                                    className="flex-1 bg-yellow-500 text-white py-3 rounded-lg"
                                >
                                    Rent Now
                                </button>

                                <button
                                    onClick={onClose}
                                    className="flex-1 bg-gray-200 py-3 rounded-lg"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default MachineModal;