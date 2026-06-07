import { useEffect } from "react";
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

    // 🔥 Prevent background scroll when modal opens
    useEffect(() => {
        if (machine) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [machine]);

    return (
        <AnimatePresence>
            {machine && (
                <motion.div
                    className="
                        fixed inset-0 bg-black/70
                        flex items-center justify-center
                        z-[99999] p-4
                    "
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                >

                    {/* MODAL BOX */}
                    <motion.div
                        className="
                            bg-white rounded-2xl
                            w-full max-w-md sm:max-w-lg
                            max-h-[90vh] overflow-y-auto
                            shadow-2xl
                        "
                        initial={{ scale: 0.85 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0.9 }}
                    >

                        {/* IMAGE */}
                        <img
                            src={machine.image}
                            alt={machine.name}
                            className="
                                w-full
                                h-48 sm:h-56 md:h-64
                                object-cover
                            "
                        />

                        {/* CONTENT */}
                        <div className="p-4 sm:p-6">

                            <h2 className="
                                text-xl sm:text-2xl md:text-3xl
                                font-bold text-[#002B5B]
                            ">
                                {machine.name}
                            </h2>

                            <p className="
                                text-yellow-600 font-bold mt-2
                                text-sm sm:text-base
                            ">
                                {machine.rate}
                            </p>

                            <p className="
                                text-gray-600 mt-4 text-sm sm:text-base
                                leading-relaxed
                            ">
                                {machine.desc}
                            </p>

                            {/* BUTTONS */}
                            <div className="
                                flex flex-col sm:flex-row gap-3 mt-6
                            ">
                                <button
                                    onClick={onRent}
                                    className="
                                        flex-1 bg-yellow-500 text-white
                                        py-2 sm:py-3 rounded-lg
                                        hover:bg-yellow-600 transition
                                    "
                                >
                                    Rent Now
                                </button>

                                <button
                                    onClick={onClose}
                                    className="
                                        flex-1 bg-gray-200
                                        py-2 sm:py-3 rounded-lg
                                        hover:bg-gray-300 transition
                                    "
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