import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import CareersHero from "../components/careers/CareersHero";
import CareersList from "../components/careers/CareersList";
import CareersWhyJoin from "../components/careers/CareersWhyJoin";
import CareersCTA from "../components/careers/CareersCTA";

const Careers = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.title = `${t("careers.title")} | GGS Infrastructure PLC`;
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [i18n.language, t]);

    return (
        <div
            role="document"
            aria-label={t("careers.ariaLabel")}
            className="min-h-screen"
        >
            <CareersHero />

            <CareersList />

            <CareersWhyJoin />

            <CareersCTA />
        </div>
    );
};

export default Careers;