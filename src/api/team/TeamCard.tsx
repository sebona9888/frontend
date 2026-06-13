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

    // Custom alignment map for each person's unique photo aspect ratio
    const positionMap: Record<string, string> = {
        "sebona-haile": "center 5%",
        "ayanasa-abdisa": "center 5%",
        "guta-jiregna": "center 5%",
        "girma-haile": "center 20%", // Custom shift for Girma so he is perfectly framed
    };

    // Use the custom position if defined, otherwise default to "center center"
    const objectPosition = positionMap[memberId] || "center center";

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
                        style={{ objectPosition }}
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