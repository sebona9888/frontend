const BuildingConstruction = () => {
    return (
        <div className="min-h-screen">

            {/* HERO SECTION */}
            <section className="relative w-full h-[70vh] md:h-[80vh] overflow-hidden">

                {/* High-quality image rendering */}
                <img
                    src="/images/build.jpg"
                    alt="Building Construction"
                    className="absolute inset-0 w-full h-full object-cover object-center scale-105"
                    loading="lazy"
                    decoding="async"
                    style={{
                        imageRendering: "auto",
                        transform: "translateZ(0)"
                    }}
                />

                {/* Soft gradient overlay (better than flat black) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/40"></div>

                {/* Content */}
                <div className="relative z-10 flex items-center justify-center h-full text-center px-6 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold drop-shadow-lg">
                        Building Construction
                    </h1>
                </div>
            </section>

            {/* DEFINITION SECTION */}
            <section className="max-w-5xl mx-auto py-16 px-6 text-center">

                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    What is Building Construction?
                </h2>

                <p className="text-gray-700 leading-relaxed text-lg">
                    Building construction is the process of planning, designing,
                    and assembling structures such as residential homes, commercial
                    buildings, and industrial facilities. It involves site preparation,
                    foundation work, structural framing, roofing, and finishing to
                    ensure safety, durability, and functionality.
                </p>

                <p className="text-gray-600 mt-6 leading-relaxed">
                    Modern construction focuses on high-quality materials, engineering
                    precision, sustainability, and efficient project execution to
                    deliver long-lasting infrastructure.
                </p>

            </section>

        </div>
    );
};

export default BuildingConstruction;