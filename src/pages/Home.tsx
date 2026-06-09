import { useEffect } from "react";

import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";

const Home = () => {

    useEffect(() => {
        document.title = "Home | GGS Infrastructure PLC";
        window.scrollTo({ top: 0, behavior: "instant" });
    }, []);

    return (
        <div
            className="bg-light text-dark"
            role="document"
            aria-label="GGS Infrastructure PLC Homepage"
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