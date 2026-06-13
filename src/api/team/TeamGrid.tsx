import { useEffect, useState } from "react";
import axios from "axios";
import TeamCard from "./TeamCard";
import { team as mockTeam } from "./teamData";

interface ApiMember {
    _id?: string;
    id?: string;
    name: string;
    role: string;
    bio?: string;
    image?: string;
    phone?: string;
    education?: string;
    experience?: string;
    skills?: string[];
    highlights?: string[];
}

interface Member {
    id: string;
    name: string;
    role: string;
    bio?: string;
    image?: string;
    phone?: string;
    education?: string;
    experience?: string;
    skills?: string[];
    highlights?: string[];
}

const TeamGrid = () => {
    // 1. Initialize state with the static mockTeam data
    const [team, setTeam] = useState<Member[]>(mockTeam as Member[]);
    const [fetchingBackend, setFetchingBackend] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Fetch dynamic members from your Render backend URL
                const res = await axios.get("https://ggs-backend-uad3.onrender.com/api/team");

                console.log("API RESPONSE:", res.data);

                const apiData: ApiMember[] = Array.isArray(res.data)
                    ? res.data
                    : (res.data?.data ?? []);

                const formatted: Member[] = apiData.map((m) => ({
                    id: m._id || m.id || "",
                    name: m.name,
                    role: m.role,
                    bio: m.bio,
                    image: m.image,
                    phone: m.phone,
                    education: m.education,
                    experience: m.experience,
                    skills: m.skills,
                    highlights: m.highlights,
                }));

                // 2. Merge static mockTeam and backend team (avoiding duplicates)
                const mergedTeam: Member[] = [...(mockTeam as Member[])];

                formatted.forEach((backendMember: Member) => {
                    if (backendMember.id && !mergedTeam.some((m: Member) => m.id === backendMember.id)) {
                        mergedTeam.push(backendMember);
                    }
                });

                setTeam(mergedTeam);
            } catch (error) {
                console.error("Could not fetch backend members, showing static data only.", error);
            } finally {
                setFetchingBackend(false);
            }
        };

        fetchData();
    }, []);

    return (
        <div className="px-3 sm:px-6 md:px-8 py-10">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">
                    {team.map((member, index) => (
                        <TeamCard
                            key={member.id}
                            member={{
                                id: member.id,
                                name: member.name,
                                role: member.role,
                                image: member.image || "",
                                bio: member.bio
                            }}
                            index={index}
                        />
                    ))}
                </div>

                {fetchingBackend && (
                    <div className="text-center py-6 text-xs text-gray-400 animate-pulse">
                        Syncing live team members from database...
                    </div>
                )}
            </div>
        </div>
    );
};

export default TeamGrid;