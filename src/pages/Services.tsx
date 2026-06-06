import ServicesHero from "../components/services/ServicesHero";
import ServicesGrid from "../components/services/ServicesGrid";
import WhyChooseUs from "../components/services/WhyChooseUs";
import ServicesCTA from "../components/services/ServicesCTA";

const Services = () => {
    return (
        <div className="min-h-screen bg-gray-50">
            <ServicesHero />
            <ServicesGrid />
            <WhyChooseUs />
            <ServicesCTA />
        </div>
    );
};

export default Services;