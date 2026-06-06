import { motion } from "framer-motion";

type Member = {
    name: string;
    role: string;
    image: string;
    phone?: string;
    education?: string;
};

type Props = {
    member: Member;
    index: number;
    onClick: (member: Member) => void;
};

const TeamCard = ({ member, index, onClick }: Props) => {
    return (
        <motion.div
            onClick={() => onClick(member)}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer
            hover:shadow-xl transition active:scale-[0.98]"
        >

            {/* IMAGE WRAPPER */}
            <div className="h-60 sm:h-64 md:h-72 lg:h-80 w-full bg-gray-100 flex items-center justify-center overflow-hidden">

                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-contain sm:object-contain md:object-contain
                    transition duration-300 hover:scale-105"
                />

            </div>

            {/* INFO */}
            <div className="p-4 sm:p-5 md:p-6 text-center">

                <h2 className="text-lg sm:text-xl font-bold text-gray-900">
                    {member.name}
                </h2>

                <p className="text-sm sm:text-base text-gray-600 mt-1">
                    {member.role}
                </p>

            </div>

        </motion.div>
    );
};

export default TeamCard;