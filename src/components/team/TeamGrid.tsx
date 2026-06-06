import { useState } from "react";
import TeamCard from "./TeamCard";
import { team } from "./teamData";

type Member = {
    name: string;
    role: string;
    image: string;
    phone?: string;
    education?: string;
};

const TeamGrid = () => {
    const [selected, setSelected] = useState<Member | null>(null);

    return (
        <div>

            {/* GRID */}
            <div className="max-w-7xl mx-auto grid sm:grid-cols-2 md:grid-cols-3 gap-8">
                {team.map((member, index) => (
                    <TeamCard
                        key={index}
                        member={member}
                        index={index}
                        onClick={setSelected}
                    />
                ))}
            </div>

            {/* MODAL */}
            {selected && (
                <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4">

                    <div className="bg-white max-w-lg w-full rounded-2xl overflow-hidden shadow-2xl">

                        {/* IMAGE */}
                        <img
                            src={selected.image}
                            className="h-72 w-full object-cover object-[center_20%]"
                        />

                        {/* CONTENT */}
                        <div className="p-6">

                            <h2 className="text-2xl font-bold text-gray-900">
                                {selected.name}
                            </h2>

                            <p className="text-gray-600 mt-2">
                                {selected.role}
                            </p>

                            <p className="mt-4 text-gray-700">
                                🎓 {selected.education}
                            </p>

                            {selected.phone && (
                                <p className="mt-2 text-gray-700">
                                    📞 {selected.phone}
                                </p>
                            )}

                            <button
                                onClick={() => setSelected(null)}
                                className="mt-6 w-full bg-[#D28E28] text-black py-2 rounded-lg font-semibold"
                            >
                                Close
                            </button>

                        </div>
                    </div>

                </div>
            )}

        </div>
    );
};

export default TeamGrid;