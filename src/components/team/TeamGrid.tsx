import { useEffect, useState } from "react";
import axios from "axios";
import TeamCard from "./TeamCard";
import { team as mockTeam } from "./teamData";

interface ApiMember {
    _id: string;
    name: string;
    role: string;
    bio?: string;
    image: string;
}

interface Member {
    id: string;
    name: string;
    role: string;
    bio?: string;
    image: string;
}

const TeamGrid = () => {
    const [team, setTeam] = useState<Member[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get<{ success: boolean; data: ApiMember[] }>(
                    "http://localhost:5000/api/team"
                );

                console.log("API RESPONSE:", res.data);

                const apiData = res.data?.data ?? [];

                const formatted: Member[] = apiData.map((m) => ({
                    id: m._id,
                    name: m.name,
                    role: m.role,
                    bio: m.bio,
                    image: m.image,
                }));

                console.log("FORMATTED DATA:", formatted);

                setTeam(formatted);
            } catch (error) {
                console.error("Backend failed, using static data", error);

                const fallback: Member[] = mockTeam;

                setTeam(fallback);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
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
                    <TeamCard key={member.id} member={member} index={index} />
                ))}
            </div>
        </div>
    );
};

export default TeamGrid;