import { useEffect, useState } from "react";
import MachineCard from "../../components/machinery/MachineCard";
import MachineModal from "../../components/machinery/MachineModal";
import RentalForm from "../../components/machinery/RentalForm";

export type Machine = {
    name: string;
    image: string;
    desc: string;
    rate: string;
    note: string;
};

const MachineryRental = () => {
    const [selectedMachine, setSelectedMachine] = useState<Machine | null>(null);
    const [openForm, setOpenForm] = useState(false);

    const machines: Machine[] = [
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

    // 🔒 lock scroll when modal/form is open
    useEffect(() => {
        if (selectedMachine || openForm) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [selectedMachine, openForm]);

    return (
        <div className="min-h-screen bg-gray-50">

            {/* HERO */}
            <section className="relative py-14 sm:py-16 md:py-20 text-center bg-white">

                <div className="max-w-3xl mx-auto px-4">

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#002B5B]">
                        Machinery Rental
                    </h1>

                    <p className="text-gray-600 mt-3 text-sm sm:text-base md:text-lg">
                        Reliable construction equipment rental services for all project sizes.
                    </p>

                    {/* CTA hint */}
                    <div className="mt-5 text-xs sm:text-sm text-gray-500">
                        Select a machine below to view details and request rental
                    </div>

                </div>

            </section>

            {/* GRID */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 pb-16 sm:pb-20">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

                    {machines.map((machine, i) => (
                        <div
                            key={i}
                            className="transition-transform hover:-translate-y-1"
                        >
                            <MachineCard
                                machine={machine}
                                onSelect={() => setSelectedMachine(machine)}
                            />
                        </div>
                    ))}

                </div>

            </section>

            {/* MODAL */}
            {selectedMachine && !openForm && (
                <MachineModal
                    machine={selectedMachine}
                    onClose={() => setSelectedMachine(null)}
                    onRent={() => setOpenForm(true)}
                />
            )}

            {/* FORM */}
            <RentalForm
                open={openForm}
                onClose={() => {
                    setOpenForm(false);
                    setSelectedMachine(null);
                }}
                machines={machines}
            />

        </div>
    );
};

export default MachineryRental;