import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import WhyChooseUs from "../components/services/WhyChooseUs";
import ServicesCTA from "../components/services/ServicesCTA";

const Services = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.title = `${t("services.title")} | GGS Infrastructure PLC`;

        window.scrollTo({ top: 0, behavior: "instant" });
    }, [i18n.language, t]);

    return (
        <div
            className="min-h-screen bg-gray-50"
            role="document"
            aria-label={t("services.ariaLabel")}
        >
            <ServicesHero />

            <ServicesGrid />

            <WhyChooseUs />

            <ServicesCTA />
        </div>
    );
};

export default Services;