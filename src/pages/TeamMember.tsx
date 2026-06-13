import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { team as staticTeam } from "../api/team/teamData"; // Adjust path if needed

interface Member {
    id?: string;
    _id?: string;
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

const TeamMember = () => {
    const { id } = useParams<{ id: string }>();
    const [member, setMember] = useState<Member | null>(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const staticMember = staticTeam.find((m) => m.id === id);
        let cancelled = false;

        const scheduleStateUpdate = (update: () => void) => {
            Promise.resolve().then(() => {
                if (!cancelled) {
                    update();
                }
            });
        };

        if (staticMember) {
            scheduleStateUpdate(() => {
                setMember(staticMember as Member);
                setLoading(false);
            });

            return () => {
                cancelled = true;
            };
        }

        scheduleStateUpdate(() => {
            setMember(null);
            setLoading(true);
        });

        const fetchMember = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/team/${id}`);
                const apiData = res.data?.data;

                if (!cancelled && apiData) {
                    setMember({
                        id: apiData._id || apiData.id || "",
                        name: apiData.name,
                        role: apiData.role,
                        bio: apiData.bio,
                        image: apiData.image,
                        phone: apiData.phone,
                        education: apiData.education,
                        experience: apiData.experience,
                        skills: apiData.skills,
                        highlights: apiData.highlights,
                    });
                }
            } catch (error) {
                if (!cancelled) {
                    console.error("Failed to fetch member details from backend:", error);
                }
            } finally {
                if (!cancelled) {
                    setLoading(false);
                }
            }
        };

        fetchMember();

        return () => {
            cancelled = true;
        };
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-48 bg-gray-50">
                <div className="animate-pulse text-lg font-medium text-gray-500">
                    Loading profile...
                </div>
            </div>
        );
    }

    if (!member) {
        return (
            <div className="min-h-screen flex items-center justify-center pt-48 bg-gray-50">
                <h1 className="text-3xl font-bold text-gray-800">
                    Team Member Not Found
                </h1>
            </div>
        );
    }

    // Members that need image repositioning (fix head cropping)
    const topAdjusted = [
        "ayanasa-abdisa",
        "guta-jiregna",
        "girma-haile"
    ];

    return (
        <section className="min-h-screen bg-gray-50 pt-48 pb-16 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl overflow-visible relative">

                {/* PROFILE IMAGE */}
                <div className="flex justify-center">
                    <div className="relative -mt-24 z-20">
                        <img
                            src={member.image || "https://via.placeholder.com/400"}
                            alt={member.name}
                            style={{
                                objectPosition: topAdjusted.includes(member.id || "")
                                    ? "center 15%"
                                    : "center center",
                            }}
                            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-8 border-white shadow-2xl"
                        />
                    </div>
                </div>

                {/* CONTENT */}
                <div className="px-8 md:px-12 pb-12 pt-6 text-center">

                    <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                        {member.name}
                    </h1>

                    <p className="text-xl md:text-2xl text-[#D28E28] font-semibold mt-3">
                        {member.role}
                    </p>

                    {/* INFO GRID */}
                    <div className="grid md:grid-cols-3 gap-6 mt-10 text-left">
                        <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
                            <h3 className="font-bold text-lg mb-2">
                                Experience
                            </h3>
                            <p>{member.experience || "N/A"}</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
                            <h3 className="font-bold text-lg mb-2">
                                Education
                            </h3>
                            <p>{member.education || "N/A"}</p>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-5 shadow-sm">
                            <h3 className="font-bold text-lg mb-2">
                                Contact
                            </h3>
                            <p>{member.phone || "N/A"}</p>
                        </div>
                    </div>

                    {/* BIO */}
                    <div className="mt-12 text-left">
                        <h2 className="text-3xl font-bold mb-6">
                            Professional Profile
                        </h2>
                        <p className="leading-8 text-gray-700 text-lg whitespace-pre-line">
                            {member.bio || "No professional profile provided."}
                        </p>
                    </div>

                    {/* SKILLS */}
                    {member.skills && member.skills.length > 0 && (
                        <div className="mt-12 text-left">
                            <h2 className="text-3xl font-bold mb-6">
                                Key Skills
                            </h2>
                            <div className="flex flex-wrap gap-3">
                                {member.skills.map((skill, index) => (
                                    <span
                                        key={index}
                                        className="px-4 py-2 bg-[#D28E28] text-white rounded-full text-sm font-medium"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* HIGHLIGHTS */}
                    {member.highlights && member.highlights.length > 0 && (
                        <div className="mt-12 text-left">
                            <h2 className="text-3xl font-bold mb-6">
                                Highlights
                            </h2>
                            <ul className="space-y-3">
                                {member.highlights.map((item, index) => (
                                    <li key={index} className="flex gap-3">
                                        <span className="text-[#D28E28] font-bold">
                                            ✓
                                        </span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
};

export default TeamMember;