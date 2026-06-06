const BuildingConstruction = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* HERO SECTION */}
            <section className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden">

                {/* IMAGE */}
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

                {/* SOFT OVERLAY (IMPROVED READABILITY) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/60"></div>

                {/* CONTENT */}
                <div className="relative z-10 flex items-center justify-center h-full text-center px-4 sm:px-6">

                    <div className="max-w-3xl">

                        <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
                            Building Construction
                        </h1>

                        <p className="mt-4 text-white/80 text-sm sm:text-base md:text-lg">
                            Designing and delivering strong, safe, and modern structures
                        </p>

                    </div>

                </div>
            </section>

            {/* DEFINITION SECTION */}
            <section className="max-w-4xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6 text-center">

                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 sm:mb-6">
                    What is Building Construction?
                </h2>

                <p className="text-gray-700 leading-relaxed text-base sm:text-lg">
                    Building construction is the process of planning, designing,
                    and assembling structures such as residential homes, commercial
                    buildings, and industrial facilities. It involves site preparation,
                    foundation work, structural framing, roofing, and finishing to
                    ensure safety, durability, and functionality.
                </p>

                <p className="text-gray-600 mt-5 sm:mt-6 leading-relaxed text-sm sm:text-base">
                    Modern construction focuses on high-quality materials, engineering
                    precision, sustainability, and efficient project execution to
                    deliver long-lasting infrastructure.
                </p>

            </section>

        </div>
    );
};

export default BuildingConstruction;