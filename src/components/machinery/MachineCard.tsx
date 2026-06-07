import { motion } from "framer-motion";

type Machine = {
    name: string;
    image: string;
    desc: string;
    rate: string;
    note?: string;
};

type Props = {
    machine: Machine;
};

const MachineCard = ({ machine }: Props) => {

    // 👉 your WhatsApp number (replace if needed)
    const phoneNumber = "251902989488";

    const handleWhatsApp = () => {
        const message = `
Hello GGS Infrastructure,

I want to rent this machine:

📌 Machine: ${machine.name}
💰 Rate: ${machine.rate}
📝 Details: ${machine.desc}

Please provide availability and booking details.
        `;

        const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(url, "_blank");
    };

    return (
        <motion.div
            whileHover={{ y: -10 }}
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

                <p className="text-gray-600 text-sm mt-3 line-clamp-2">
                    {machine.desc}
                </p>

                {/* WHATSAPP BUTTON */}
                <button
                    onClick={handleWhatsApp}
                    className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition"
                >
                    📲 Request on WhatsApp
                </button>
            </div>
        </motion.div>
    );
};

export default MachineCard;