import { useEffect, useState } from "react";
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

    // ESC key close (UX improvement)
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelected(null);
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    return (
        <div className="px-4 sm:px-6">

            {/* GRID */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-7 md:gap-8">
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
                <div
                    onClick={() => setSelected(null)}
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-4 py-6"
                >
                    {/* MODAL CARD */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white max-w-md w-full rounded-2xl overflow-hidden shadow-2xl animate-in fade-in zoom-in duration-200"
                    >

                        {/* IMAGE */}
                        <div className="h-56 sm:h-64 md:h-72 w-full overflow-hidden">
                            <img
                                src={selected.image}
                                alt={selected.name}
                                className="w-full h-full object-cover object-[center_20%]"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-5 sm:p-6">

                            <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
                                {selected.name}
                            </h2>

                            <p className="text-sm sm:text-base text-gray-600 mt-2">
                                {selected.role}
                            </p>

                            <p className="mt-4 text-sm sm:text-base text-gray-700">
                                🎓 {selected.education}
                            </p>

                            {selected.phone && (
                                <p className="mt-2 text-sm sm:text-base text-gray-700">
                                    📞 {selected.phone}
                                </p>
                            )}

                            {/* BUTTON */}
                            <button
                                onClick={() => setSelected(null)}
                                className="mt-6 w-full bg-[#D28E28] text-white py-2.5 rounded-lg font-semibold
                                hover:bg-[#c07a1f] active:scale-95 transition"
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