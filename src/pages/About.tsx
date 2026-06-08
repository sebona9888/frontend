import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import AboutHero from "../components/about/AboutHero";
import CompanyIntro from "../components/about/CompanyIntro";
import MissionVision from "../components/about/MissionVision";
import WhyChooseUs from "../components/about/WhyChooseUs";

const About = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.title = `${t("about.title")} | GGS Infrastructure PLC`;

        window.scrollTo({ top: 0, behavior: "instant" });
    }, [i18n.language, t]); // 🔥 re-run when language changes

    return (
        <div
            className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-[#D28E28]/30 selection:text-[#002B5B]"
            role="document"
            aria-label={t("about.ariaLabel")}
        >
            {/* HERO */}
            <AboutHero />

            {/* MAIN CONTENT */}
            <main
                id="main-content"
                className="flex-grow space-y-16 md:space-y-28 pb-24 animate-fade-in"
            >
                <section aria-label={t("about.sections.company")}>
                    <CompanyIntro />
                </section>

                <section aria-label={t("about.sections.missionVision")}>
                    <MissionVision />
                </section>

                <section aria-label={t("about.sections.whyChooseUs")}>
                    <WhyChooseUs />
                </section>
            </main>
        </div>
    );
};

export default About;