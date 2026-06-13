import { useEffect } from "react";

import TeamHero from "../api/team/TeamHero";
import TeamGrid from "../api/team/TeamGrid";

const Team = () => {

    useEffect(() => {
        document.title = "Team | GGS Infrastructure PLC";

        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div
            className="min-h-screen bg-gray-50"
            role="document"
            aria-label="GGS Infrastructure PLC Team"
        >
            <TeamHero />
            <TeamGrid />
        </div>
    );
};

export default Team;