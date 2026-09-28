import { useEffect, useState } from "react";
import axios from "axios";

interface Member {
    _id: string;
    name: string;
    role: string;
    image: string;
}

interface TeamResponse {
    success: boolean;
    data: Member[];
}

const TeamAdmin = () => {
    const [team, setTeam] = useState<Member[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const token = localStorage.getItem("token");

                const response = await axios.get<TeamResponse>(
                    "http://localhost:5000/api/team",
                    {
                        headers: {
                            Authorization: `Bearer ${ token } `,
                        },
                    }
                );

                setTeam(response.data.data);
            } catch (error) {
                console.error("Error loading team:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchTeam();
    }, []);

    if (loading) {
        return (
            <div className="p-8">
                <p>Loading team...</p>
            </div>
        );
    }

    return (
        <div className="p-8">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">
                    Team Management
                </h1>
            </div>

            {team.length === 0 ? (
                <p className="text-gray-600">
                    No team members found.
                </p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {team.map((member) => (
                        <div
                            key={member._id}
                            className="bg-white shadow rounded-lg p-4"
                        >
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-40 object-cover rounded"
                            />

                            <h2 className="text-xl font-bold mt-3">
                                {member.name}
                            </h2>

                            <p className="text-gray-600">
                                {member.role}
                            </p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default TeamAdmin;
