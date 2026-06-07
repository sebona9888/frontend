import MachineCard from "../../components/machinery/MachineCard";

export type Machine = {
    name: string;
    image: string;
    desc: string;
    rate: string;
    note: string;
};

const MachineryRental = () => {

    const machines: Machine[] = [
        {
            name: "Hydraulic Excavator",
            image: "/images/machines/excavator.jpg",
            desc: "Heavy-duty earth excavation, trenching, road works and foundation digging.",
            rate: "8,000 ETB / Hour",
            note: "Dry Rate • 8hr Minimum Shift"
        },
        {
            name: "Crawler Bulldozer (CAT D8)",
            image: "/images/machines/bulldozer.jpg",
            desc: "Land clearing, grading and heavy soil pushing for construction sites.",
            rate: "7,000 ETB / Hour",
            note: "Dry Rate • 8hr Minimum Shift"
        },
        {
            name: "Sino Dump Truck (20m³)",
            image: "/images/machines/dump-truck.jpg",
            desc: "Material transport including soil, gravel, sand, and debris removal.",
            rate: "3,000 ETB / Hour",
            note: "Fuel option available"
        },
        {
            name: "Mobile Crane (25-Ton)",
            image: "/images/machines/crane.jpg",
            desc: "Heavy lifting for steel structures and construction materials.",
            rate: "10,000 ETB / Hour",
            note: "Certified operator included"
        },
        {
            name: "Concrete Mixer Truck",
            image: "/images/machines/concrete-mixer.jpg",
            desc: "Ready-mix concrete delivery for construction projects.",
            rate: "5,000 ETB / Hour",
            note: "Batch & hourly options"
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50">

            {/* HERO */}
            <section className="py-16 text-center bg-white">
                <h1 className="text-4xl font-bold text-[#002B5B]">
                    Machinery Rental
                </h1>

                <p className="text-gray-600 mt-3">
                    Click any machine and send request directly on WhatsApp
                </p>
            </section>

            {/* GRID */}
            <section className="max-w-7xl mx-auto px-4 py-10">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

                    {machines.map((machine, i) => (
                        <MachineCard key={i} machine={machine} />
                    ))}

                </div>

            </section>

        </div>
    );
};

export default MachineryRental;