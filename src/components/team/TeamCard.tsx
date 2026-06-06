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
            className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-2xl transition"
        >
            {/* IMAGE */}
            <div className="h-80 w-full overflow-hidden bg-gray-100">
                <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover object-[center_20%] hover:scale-105 transition"
                />
            </div>

            {/* INFO */}
            <div className="p-6 text-center">
                <h2 className="text-xl font-bold text-gray-900">
                    {member.name}
                </h2>

                <p className="text-gray-600 mt-1">
                    {member.role}
                </p>
            </div>
        </motion.div>
    );
};

export default TeamCard;