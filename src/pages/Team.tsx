import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import TeamHero from "../components/team/TeamHero";
import TeamGrid from "../components/team/TeamGrid";

const Team = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.title = `${t("team.title")} | GGS Infrastructure PLC`;

        window.scrollTo({ top: 0, behavior: "instant" });
    }, [i18n.language, t]);

    return (
        <div
            className="min-h-screen bg-gray-50"
            role="document"
            aria-label={t("team.ariaLabel")}
        >
            <TeamHero />
            <TeamGrid />
        </div>
    );
};

export default Team;