import TeamHero from "../components/team/TeamHero";
import TeamGrid from "../components/team/TeamGrid";

const Team = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <TeamHero />
            <TeamGrid />
        </div>
    );
};

export default Team;