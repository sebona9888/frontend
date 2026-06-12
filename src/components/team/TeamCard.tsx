import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type Member = {
    _id?: string;
    id?: string;
    name: string;
    role: string;
    image: string;
    bio?: string;
};

type Props = {
    member: Member;
    index: number;
};

const TeamCard = ({ member, index }: Props) => {
    const memberId = member._id || member.id || "";

    if (!memberId) return null;

    return (
        <Link to={`/team/${memberId}`}>
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-xl transition active:scale-[0.98]"
            >
                {/* IMAGE */}
                <div className="h-64 w-full overflow-hidden bg-gray-100">
                    <img
                        src={member.image || "https://via.placeholder.com/400"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* INFO */}
                <div className="p-5 text-center">
                    <h2 className="text-lg font-bold text-gray-900">
                        {member.name}
                    </h2>

                    <p className="text-gray-600 mt-1">
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