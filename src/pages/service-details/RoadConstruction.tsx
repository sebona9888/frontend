const RoadConstruction = () => {
    return (
        <div className="min-h-screen bg-white">

            {/* HERO SECTION */}
            <section className="relative h-[55vh] sm:h-[65vh] md:h-[75vh] text-white text-center overflow-hidden">

                {/* BACKGROUND IMAGE */}
                <img
                    src="/images/road.jpg"
                    alt="Road Construction"
                    className="absolute inset-0 w-full h-full object-cover object-bottom"
                />

                {/* SOFT OVERLAY (NOT TOO DARK) */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50"></div>

                {/* CONTENT */}
                <div className="relative z-20 flex flex-col items-center justify-center h-full px-4 sm:px-6">

                    <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold drop-shadow-lg">
                        Road Construction
                    </h1>

                    <p className="mt-4 max-w-2xl text-white/85 text-sm sm:text-base md:text-lg leading-relaxed">
                        Building modern and durable transportation infrastructure across Ethiopia.
                    </p>

                </div>

            </section>

            {/* CONTENT SECTION */}
            <section className="max-w-5xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6">

                {/* OVERVIEW */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-5">
                    Overview
                </h2>

                <p className="text-gray-600 text-base sm:text-lg leading-relaxed">
                    GGS Infrastructure PLC specializes in road construction,
                    rehabilitation, asphalt paving, gravel roads, drainage systems,
                    and transportation infrastructure projects.
                </p>

                {/* CAPABILITIES */}
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-10 sm:mt-14 mb-5">
                    Our Capabilities
                </h2>

                <ul className="grid sm:grid-cols-2 gap-4 text-gray-600 text-sm sm:text-base">
                    <li className="bg-gray-50 p-4 rounded-lg shadow-sm">✓ Highway Construction</li>
                    <li className="bg-gray-50 p-4 rounded-lg shadow-sm">✓ Asphalt Paving</li>
                    <li className="bg-gray-50 p-4 rounded-lg shadow-sm">✓ Road Rehabilitation</li>
                    <li className="bg-gray-50 p-4 rounded-lg shadow-sm">✓ Drainage Systems</li>
                    <li className="bg-gray-50 p-4 rounded-lg shadow-sm">✓ Bridge Approaches</li>
                </ul>

            </section>

        </div>
    );
};

export default RoadConstruction;