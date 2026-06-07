import { useParams } from "react-router-dom";

// IMPORTANT: same machines data (must match your list)
const machines = [
    {
        name: "Hydraulic Excavator",
        image: "/images/machines/excavator.jpg",
        desc: "Heavy-duty digging and earthmoving. Available with rock-breaker attachment.",
        rate: "8,000 ETB / Hour",
        note: "Dry Rate • 8hr Min. Shift"
    },
    {
        name: "Crawler Bulldozer (CAT D8)",
        image: "/images/machines/bulldozer.jpg",
        desc: "High-power land clearing, ripping, and grading for rough terrain.",
        rate: "7,000 ETB / Hour",
        note: "Dry Rate • 8hr Min. Shift"
    },
    {
        name: "Sino Dump Truck (20m³)",
        image: "/images/machines/dump-truck.jpg",
        desc: "Bulk material transport and site clearing hauling.",
        rate: "3,000 ETB / Hour",
        note: "Fuel Included option available"
    },
    {
        name: "Mobile Crane (25-Ton)",
        image: "/images/machines/crane.jpg",
        desc: "Heavy structural lifting and high-altitude material handling.",
        rate: "10,000 ETB / Hour",
        note: "Includes Certified Operator"
    },
    {
        name: "Concrete Mixer Truck",
        image: "/images/machines/concrete-mixer.jpg",
        desc: "On-the-move concrete mixing and transit hauling.",
        rate: "5,000 ETB / Hour",
        note: "Per batch / hourly shift options"
    }
];

const MachineDetails = () => {
    const { name } = useParams();

    const machine = machines.find(
        (m) => m.name.toLowerCase().replace(/\s/g, "-") === name
    );

    if (!machine) {
        return (
            <div className="pt-24 min-h-screen flex items-center justify-center">
                <h1 className="text-2xl font-bold text-gray-700">
                    Machine Not Found
                </h1>
            </div>
        );
    }

    return (
        <div className="pt-24 min-h-screen bg-gray-50">

            {/* IMAGE */}
            <div className="max-w-6xl mx-auto px-4">
                <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-[450px] object-cover rounded-2xl shadow-lg"
                />

                {/* CONTENT */}
                <div className="mt-8">

                    <h1 className="text-3xl md:text-4xl font-bold text-[#002B5B]">
                        {machine.name}
                    </h1>

                    <p className="text-gray-600 mt-4 text-base md:text-lg leading-relaxed">
                        {machine.desc}
                    </p>

                    {/* PRICE BOX */}
                    <div className="mt-6 bg-white shadow-md rounded-xl p-5 border-l-4 border-[#D28E28]">
                        <p className="text-xl font-bold text-[#D28E28]">
                            {machine.rate}
                        </p>

                        <p className="text-gray-500 mt-1">
                            {machine.note}
                        </p>
                    </div>

                    {/* EXTRA INFO */}
                    <div className="mt-10 text-gray-600 space-y-3">
                        <p>✔ Available for short-term and long-term rental</p>
                        <p>✔ Operator available on request</p>
                        <p>✔ Delivery to site can be arranged</p>
                        <p>✔ 24/7 support for active projects</p>
                    </div>

                    {/* BUTTON */}
                    <div className="mt-10">
                        <button className="bg-[#002B5B] text-white px-6 py-3 rounded-lg hover:bg-[#001a3a] transition">
                            Request This Machine
                        </button>
                    </div>

                </div>
            </div>

        </div>
    );
};

export default MachineDetails;