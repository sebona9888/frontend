import { motion } from "framer-motion";

type Machine = {
    name: string;
    image: string;
    desc: string;
    rate: string;
};

type Props = {
    machine: Machine;
    onSelect: (machine: Machine) => void;
};

const MachineCard = ({ machine, onSelect }: Props) => {
    return (
        <motion.div
            whileHover={{ y: -10 }}
            onClick={() => onSelect(machine)}
            className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
        >
            <img
                src={machine.image}
                alt={machine.name}
                className="w-full h-56 object-cover"
            />

            <div className="p-5">
                <h3 className="text-xl font-bold text-[#002B5B]">
                    {machine.name}
                </h3>

                <p className="text-yellow-600 font-bold mt-2">
                    {machine.rate}
                </p>

                <button className="mt-4 w-full bg-[#002B5B] text-white py-2 rounded-lg">
                    View Details
                </button>
            </div>
        </motion.div>
    );
};

export default MachineCard;