import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";

const Home = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.title = `${t("home.title")} | GGS Infrastructure PLC`;
        window.scrollTo({ top: 0, behavior: "instant" });
    }, [i18n.language, t]); // 🔥 re-run when language changes

    return (
        <div
            className="bg-light text-dark"
            role="document"
            aria-label={t("home.ariaLabel")}
        >
            {/* HERO */}
            <Hero />

            {/* SERVICES */}
            <div className="bg-slate-100">
                <Services />
            </div>

            {/* PROJECTS */}
            <div className="bg-white">
                <Projects />
            </div>
        </div>
    );
};

export default Home;