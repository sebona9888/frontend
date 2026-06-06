const ElectricalInstallation = () => {
    return (
        <div className="min-h-screen">

            {/* HERO SECTION */}
            <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">

                <img
                    src="/images/electrical.jpg"
                    alt="Electrical Installation"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    style={{
                        transform: "scale(1.02)", // very slight natural depth (not zoomed)
                        filter: "brightness(1.1) contrast(1.1) saturate(1.1)"
                    }}
                />

                {/* soft natural lighting overlay (not dark) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30"></div>

                {/* TITLE */}
                <div className="relative z-10 flex items-center justify-center h-full text-center px-6 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-md">
                        Electrical Installation
                    </h1>
                </div>
            </section>

            {/* CONTENT */}
            <section className="max-w-5xl mx-auto py-16 px-6 text-center">

                <h2 className="text-3xl font-bold mb-6 text-gray-900">
                    Powering Modern Infrastructure
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed">
                    Electrical installation involves the design, setup, and maintenance of
                    electrical systems for residential, commercial, and industrial buildings.
                    It includes wiring, power distribution, lighting systems, and safety
                    mechanisms to ensure efficient and reliable energy delivery.
                </p>

            </section>

        </div>
    );
};

export default ElectricalInstallation;