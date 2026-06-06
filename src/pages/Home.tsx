import Hero from "../components/home/Hero";
import Services from "../components/home/Services";
import Projects from "../components/home/Projects";

const Home = () => {
    return (
        <div className="bg-light text-dark">

            {/* HERO */}
            <Hero />

            {/* SECTION DIVIDER */}
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