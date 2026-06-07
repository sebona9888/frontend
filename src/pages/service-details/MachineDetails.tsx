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
        <div className="pt-24 md:pt-28 pb-14 bg-gray-50 min-h-screen">

            <div className="max-w-4xl mx-auto px-4">

                {/* IMAGE (SMALLER + CLEAN) */}
                <div className="rounded-xl overflow-hidden shadow-md">
                    <img
                        src={machine.image}
                        alt={machine.name}
                        className="w-full h-56 sm:h-72 md:h-80 object-cover"
                    />
                </div>

                {/* TITLE */}
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold mt-5 text-[#002B5B]">
                    {machine.name}
                </h1>

                {/* DESCRIPTION */}
                <p className="text-gray-600 mt-3 text-sm sm:text-base leading-relaxed">
                    {machine.desc}
                </p>

                {/* PRICE BOX */}
                <div className="mt-5 bg-white p-4 rounded-lg shadow border-l-4 border-[#D28E28]">
                    <p className="text-[#D28E28] font-bold text-base sm:text-lg">
                        {machine.rate}
                    </p>
                    <p className="text-gray-500 text-sm">
                        {machine.note}
                    </p>
                </div>

                {/* FEATURES */}
                <div className="mt-6 text-gray-600 text-sm space-y-2">
                    <p>✔ Available for short & long term rental</p>
                    <p>✔ Operator available on request</p>
                    <p>✔ Delivery to site available</p>
                    <p>✔ 24/7 support for projects</p>
                </div>

                {/* BUTTON */}
                <button className="mt-8 w-full sm:w-auto bg-[#002B5B] text-white px-6 py-3 rounded-lg hover:bg-[#001a3a] transition">
                    Request This Machine
                </button>

            </div>
        </div>
    );
};

export default MachineDetails;