import { useParams } from "react-router-dom";
import { team } from "../components/team/teamData";

const TeamMember = () => {
    const { id } = useParams();

    const member = team.find((m) => m.id === id);

    if (!member) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <h1 className="text-3xl font-bold">
                    Team Member Not Found
                </h1>
            </div>
        );
    }

    return (
        <section className="min-h-screen bg-gray-50 pt-32 pb-16 px-4">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">

                <div className="grid md:grid-cols-2 gap-8 p-8">

                    <div>
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-full h-[500px] object-cover rounded-2xl"
                        />
                    </div>

                    <div>
                        <h1 className="text-4xl font-bold">
                            {member.name}
                        </h1>

                        <p className="text-xl text-[#D28E28] mt-3">
                            {member.role}
                        </p>

                        <div className="mt-6 space-y-3">
                            <p>
                                <strong>Experience:</strong>{" "}
                                {member.experience}
                            </p>

                            <p>
                                <strong>Education:</strong>{" "}
                                {member.education}
                            </p>

                            <p>
                                <strong>Phone:</strong>{" "}
                                {member.phone}
                            </p>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-2xl font-bold mb-4">
                                Professional Profile
                            </h2>

                            <p className="leading-relaxed text-gray-700">
                                {member.bio}
                            </p>
                        </div>
                    </div>

                </div>

            </div>
        </section>
    );
};

export default TeamMember;