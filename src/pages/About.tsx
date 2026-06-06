import { useEffect } from "react"; 
import AboutHero from "../components/about/AboutHero";
import CompanyIntro from "../components/about/CompanyIntro";
import MissionVision from "../components/about/MissionVision";
import WhyChooseUs from "../components/about/WhyChooseUs";

const About = () => {
    useEffect(() => {
        document.title = "About Us | GGS Infrastructure PLC";

        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div
            className="min-h-screen bg-slate-50 text-slate-800 flex flex-col selection:bg-[#D28E28]/30 selection:text-[#002B5B]"
            role="document"
            aria-label="About GGS Infrastructure PLC"
        >
            {/* Main Hero Banner Node */}
            <AboutHero />

            {/* Main Content Area */}
            <main id="main-content" className="flex-grow space-y-16 md:space-y-28 pb-24 animate-fade-in">

                <section aria-label="Company Overview">
                    <CompanyIntro />
                </section>

                <section aria-label="Corporate Values, Mission and Vision">
                    <MissionVision />
                </section>

                <section aria-label="Operational Performance and Metrics">
                    <WhyChooseUs />
                </section>

            </main>
        </div>
    );
};

export default About;