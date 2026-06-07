import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Machine = {
    name: string;
    image: string;
    desc: string;
    rate: string;
};

type Props = {
    machine: Machine;
};

const MachineCard = ({ machine }: Props) => {

    const navigate = useNavigate();

    const handleOpen = () => {
        const slug = machine.name.toLowerCase().replace(/\s/g, "-");
        navigate(`/services/machinery/${slug}`);
    };

    return (
        <motion.div
            whileHover={{ y: -6 }}
            onClick={handleOpen}
            className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer"
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

                <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                    {machine.desc}
                </p>

                <button className="mt-4 w-full bg-[#002B5B] text-white py-2 rounded-lg">
                    View Details
                </button>
            </div>
        </motion.div>
    );
};

export default MachineCard;