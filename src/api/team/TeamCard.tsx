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

    // Define which members need their photos adjusted (using "center 15%" positioning)
    const topAdjusted = [
        "ayanasa-abdisa",
        "guta-jiregna",
        "girma-haile"
    ];

    return (
        <Link to={`/team/${memberId}`} className="block group">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden cursor-pointer active:scale-[0.98]"
            >
                {/* IMAGE */}
                <div className="h-64 w-full overflow-hidden bg-gray-100">
                    <img
                        src={member.image || "https://via.placeholder.com/400"}
                        alt={member.name}
                        style={{
                            // Only align to "center 15%" if in list, otherwise "center center"
                            objectPosition: topAdjusted.includes(memberId)
                                ? "center 15%"
                                : "center center"
                        }}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                    />
                </div>

                {/* INFO */}
                <div className="p-5 text-center">
                    <h2 className="text-lg font-bold text-gray-900 group-hover:text-orange-600 transition-colors duration-200">
                        {member.name}
                    </h2>

                    <p className="text-gray-500 mt-1 font-medium text-sm">
                        {member.role}
                    </p>

                    <div className="mt-4 flex items-center justify-center gap-1 text-orange-600 font-semibold text-sm">
                        <span>View Profile</span>
                        <span className="transform group-hover:translate-x-1 transition-transform duration-200">
                            →
                        </span>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
};

export default TeamCard;