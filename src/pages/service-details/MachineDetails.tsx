import { useParams } from "react-router-dom";

const machines = [
    {
        name: "Hydraulic Excavator",
        image: "/images/machines/excavator.jpg",
        desc: "Heavy-duty digging and earthmoving machine.",
        rate: "8,000 ETB / Hour",
        note: "Dry Rate • 8hr Min"
    },
    {
        name: "Crawler Bulldozer (CAT D8)",
        image: "/images/machines/bulldozer.jpg",
        desc: "Land clearing and grading machine.",
        rate: "7,000 ETB / Hour",
        note: "Dry Rate • 8hr Min"
    },
    {
        name: "Sino Dump Truck (20m³)",
        image: "/images/machines/dump-truck.jpg",
        desc: "Material transport and hauling.",
        rate: "3,000 ETB / Hour",
        note: "Fuel option available"
    },
    {
        name: "Mobile Crane (25-Ton)",
        image: "/images/machines/crane.jpg",
        desc: "Heavy lifting operations.",
        rate: "10,000 ETB / Hour",
        note: "Includes operator"
    },
    {
        name: "Concrete Mixer Truck",
        image: "/images/machines/concrete-mixer.jpg",
        desc: "Concrete mixing and transport.",
        rate: "5,000 ETB / Hour",
        note: "Per batch or hourly"
    }
];

const MachineDetails = () => {
    const { name } = useParams();

    const machine = machines.find(
        (m) => m.name.toLowerCase().replace(/\s/g, "-") === name
    );

    if (!machine) {
        return (
            <div className="pt-24 text-center text-xl">
                Machine Not Found
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-gray-50 pt-24 pb-16">

            {/* HERO */}
            <div className="bg-white border-b">
                <div className="max-w-6xl mx-auto px-6 py-10">

                    <h1 className="text-3xl md:text-4xl font-bold text-[#002B5B] capitalize">
                        {machine.name}
                    </h1>

                    <p className="text-gray-600 mt-2">
                        Professional machinery rental service in Ethiopia
                    </p>

                </div>
            </div>

            {/* MAIN CONTENT */}
            <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-2 gap-10">

                {/* IMAGE */}
                <div className="rounded-2xl overflow-hidden shadow-lg bg-white">
                    <img
                        src={machine.image}
                        alt={machine.name}
                        className="w-full h-[420px] object-cover"
                    />
                </div>

                {/* DETAILS */}
                <div className="bg-white rounded-2xl shadow-lg p-6">

                    <h2 className="text-2xl font-bold text-[#002B5B]">
                        Machine Overview
                    </h2>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        {machine.desc}
                    </p>

                    {/* PRICE */}
                    <div className="mt-6 bg-gray-50 p-4 rounded-lg border-l-4 border-[#D28E28]">
                        <p className="text-[#D28E28] font-bold text-xl">
                            {machine.rate}
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                            {machine.note}
                        </p>
                    </div>

                    {/* FEATURES */}
                    <div className="mt-6 space-y-2 text-gray-600 text-sm">
                        <p>✔ Available for short & long term rental</p>
                        <p>✔ Operator available on request</p>
                        <p>✔ Delivery to site available</p>
                        <p>✔ 24/7 support for projects</p>
                    </div>

                    {/* BUTTON */}
                    <button className="mt-8 w-full bg-[#002B5B] text-white py-3 rounded-lg hover:bg-[#001a3a] transition">
                        Request This Machine
                    </button>

                </div>
            </div>
        </div>
    );
};

export default MachineDetails;