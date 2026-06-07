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
        (m) =>
            m.name.toLowerCase().replace(/\s/g, "-") === name
    );

    if (!machine) {
        return (
            <div className="pt-32 text-center text-xl">
                Machine Not Found
            </div>
        );
    }

    return (
        <div className="pt-28 pb-16 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto px-4">

                <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-[400px] object-cover rounded-2xl"
                />

                <h1 className="text-3xl md:text-4xl font-bold mt-6 text-[#002B5B]">
                    {machine.name}
                </h1>

                <p className="text-gray-600 mt-4">
                    {machine.desc}
                </p>

                <div className="mt-6 bg-white p-5 rounded-xl shadow">
                    <p className="text-[#D28E28] font-bold text-xl">
                        {machine.rate}
                    </p>
                    <p className="text-gray-500">{machine.note}</p>
                </div>

                <div className="mt-8 text-gray-600 space-y-2">
                    <p>✔ Available for short and long term rental</p>
                    <p>✔ Operator available on request</p>
                    <p>✔ Site delivery available</p>
                    <p>✔ 24/7 support</p>
                </div>

                <button className="mt-10 bg-[#002B5B] text-white px-6 py-3 rounded-lg">
                    Request This Machine
                </button>

            </div>
        </div>
    );
};

export default MachineDetails;