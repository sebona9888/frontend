import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Services from "../pages/Services";
import Projects from "../pages/Projects";
import Careers from "../pages/Careers";
import Contact from "../pages/Contact";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import RoadConstruction from "../pages/service-details/RoadConstruction";
import BuildingConstruction from "../pages/service-details/BuildingConstruction";
import WaterInfrastructure from "../pages/service-details/WaterInfrastructure";
import ElectricalInstallation from "../pages/service-details/ElectricalInstallation";
import MachineryRental from "../pages/service-details/MachineryRental";
import EngineeringConsultancy from "../pages/service-details/EngineeringConsultancy";

import ProjectDetails from "../pages/ProjectDetails";
import Team from "../pages/Team";
import TeamMember from "../pages/TeamMember";

const AppRoutes = () => {
    return (
        <>
            <Navbar />

            <Routes>
                {/* MAIN PAGES */}
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/projects/:slug" element={<ProjectDetails />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/contact" element={<Contact />} />

                {/* TEAM */}
                <Route path="/team" element={<Team />} />
                <Route path="/team/:id" element={<TeamMember />} />

                {/* SERVICES DETAILS */}
                <Route path="/services/road-construction" element={<RoadConstruction />} />
                <Route path="/services/building-construction" element={<BuildingConstruction />} />
                <Route path="/services/water-infrastructure" element={<WaterInfrastructure />} />
                <Route path="/services/electrical-installation" element={<ElectricalInstallation />} />
                <Route path="/services/machinery-rental" element={<MachineryRental />} />
                <Route path="/services/engineering-consultancy" element={<EngineeringConsultancy />} />
            </Routes>

            <Footer />
        </>
    );
};

export default AppRoutes;