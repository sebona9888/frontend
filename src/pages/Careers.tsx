import { useEffect } from "react";

import CareersHero from "../components/careers/CareersHero";
import CareersList from "../components/careers/CareersList";
import CareersWhyJoin from "../components/careers/CareersWhyJoin";
import CareersCTA from "../components/careers/CareersCTA";

const Careers = () => {

    useEffect(() => {
        document.title = "Careers | GGS Infrastructure PLC";
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div
            role="document"
            aria-label="Careers at GGS Infrastructure PLC"
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