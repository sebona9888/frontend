import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Member = {
    _id?: string;
    id?: string;
    name: string;
    role: string;
    image: string;
    phone?: string;
    education?: string;
    experience?: string;
    bio?: string;
};

type Props = {
    member: Member;
    index: number;
};

const TeamCard = ({ member, index }: Props) => {
    return (
        <Link to={`/team/${member._id || member.id}`}>
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition active:scale-[0.98]"
            >
                {/* IMAGE */}
                <div className="h-56 sm:h-64 md:h-72 lg:h-80 w-full overflow-hidden bg-gray-100">
                    <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover object-[50%_15%] hover:scale-105 transition duration-300"
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

                    <p className="mt-3 text-orange-600 font-medium">
                        View Profile →
                    </p>
                </div>
            </motion.div>
        </Link>
    );
};

export default TeamCard;