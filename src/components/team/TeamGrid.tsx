import { useEffect, useState } from "react";
import axios from "axios";
import TeamCard from "./TeamCard";

interface ApiTeamMember {
    _id: string;
    name: string;
    role: string;
    bio: string;
    image: string;
}

interface Member extends ApiTeamMember {
    id: string;
}

const TeamGrid = () => {
    const [team, setTeam] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const res = await axios.get<{ success: boolean; data: ApiTeamMember[] }>(
                    "http://localhost:5000/api/team"
                );

                // IMPORTANT: backend returns { success, data }
                setTeam(
                    res.data.data.map((member) => ({
                        ...member,
                        id: member._id,
                    }))
                );
            } catch (error) {
                console.log("Error fetching team:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeam();
    }, []);

    if (loading) {
        return (
            <div className="text-center py-10 text-gray-500">
                Loading team...
            </div>
        );
    }

    return (
        <div className="px-3 sm:px-6 md:px-8 py-10">
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                {team.map((member, index) => (
                    <TeamCard
                        key={member._id}
                        member={member}
                        index={index}
                    />
                ))}
            </div>
        </div>
    );
};

export default TeamGrid;