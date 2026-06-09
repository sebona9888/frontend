import { useEffect } from "react";

import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import WhyChooseUs from "../components/services/WhyChooseUs";
import ServicesCTA from "../components/services/ServicesCTA";

const Services = () => {

    useEffect(() => {
        document.title = "Services | GGS Infrastructure PLC";

        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div
            className="min-h-screen bg-gray-50"
            role="document"
            aria-label="GGS Infrastructure PLC Services"
        >
            <ServicesHero />

            <ServicesGrid />

            <WhyChooseUs />

            <ServicesCTA />
        </div>
    );
};

export default Services;