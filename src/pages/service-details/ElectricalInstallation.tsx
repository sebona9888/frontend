const ElectricalInstallation = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* HERO SECTION */}
            <section className="relative w-full h-[55vh] sm:h-[65vh] md:h-[75vh] overflow-hidden">

                {/* IMAGE */}
                <img
                    src="/images/electrical.jpg"
                    alt="Electrical Installation"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{
                        transform: "scale(1.03)",
                        filter: "brightness(1.15) contrast(1.1) saturate(1.1)"
                    }}
                />

                {/* SOFT LIGHT OVERLAY (PROFESSIONAL LOOK) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/10 to-black/40"></div>

                {/* CONTENT */}
                <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6">

                    <div className="max-w-3xl">

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-md">
                            Electrical Installation
                        </h1>

                        <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg">
                            Safe, efficient, and modern power systems for all infrastructure types
                        </p>

                    </div>

                </div>
            </section>

            {/* CONTENT SECTION */}
            <section className="max-w-4xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 sm:mb-6">
                    Powering Modern Infrastructure
                </h2>

                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                    Electrical installation involves the design, setup, and maintenance of
                    electrical systems for residential, commercial, and industrial buildings.
                    It includes wiring, power distribution, lighting systems, and safety
                    mechanisms to ensure efficient and reliable energy delivery.
                </p>

                <p className="text-gray-600 mt-5 sm:mt-6 text-sm sm:text-base leading-relaxed">
                    Modern electrical systems require precision engineering, safety compliance,
                    and energy efficiency to support sustainable infrastructure development.
                </p>

            </section>

        </div>
    );
};

export default ElectricalInstallation;