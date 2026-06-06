import TeamCard from "./TeamCard";
import { team } from "./teamData";

const TeamGrid = () => {
    return (
        <div className="px-3 sm:px-6 md:px-8 py-10">

            <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 md:gap-8">

                {team.map((member, index) => (
                    <TeamCard
                        key={member.id}
                        member={member}
                        index={index}
                    />
                ))}

            </div>

        </div>
    );
};

export default TeamGrid;