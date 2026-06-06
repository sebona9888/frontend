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

    // ESC key close (good UX)
    useEffect(() => {
        const handleKey = (e: KeyboardEvent) => {
            if (e.key === "Escape") setSelected(null);
        };

        window.addEventListener("keydown", handleKey);
        return () => window.removeEventListener("keydown", handleKey);
    }, []);

    return (
        <div className="px-3 sm:px-6 md:px-8 py-10">

            {/* GRID (responsive improved spacing) */}
            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">

                {team.map((member, index) => (
                    <TeamCard
                        key={index}
                        member={member}
                        index={index}
                        onClick={setSelected}
                    />
                ))}

            </div>

            {/* MODAL (mobile + tablet improved) */}
            {selected && (
                <div
                    onClick={() => setSelected(null)}
                    className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 px-3 sm:px-4 py-6"
                >

                    {/* CARD */}
                    <div
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white w-full max-w-sm sm:max-w-md md:max-w-lg 
                        rounded-2xl overflow-hidden shadow-2xl 
                        transform transition-all duration-200 scale-100"
                    >

                        {/* IMAGE (better fit for mobile faces) */}
                        <div className="h-52 sm:h-60 md:h-72 w-full bg-gray-100 flex items-center justify-center">

                            <img
                                src={selected.image}
                                alt={selected.name}
                                className="w-full h-full object-cover object-center sm:object-[center_15%]"
                            />

                        </div>

                        {/* CONTENT */}
                        <div className="p-4 sm:p-5 md:p-6">

                            <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 break-words">
                                {selected.name}
                            </h2>

                            <p className="text-sm sm:text-base text-gray-600 mt-2 break-words">
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