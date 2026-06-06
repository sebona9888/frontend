const RoadConstruction = () => {
    return (
        <div className="min-h-screen">

            <section className="relative text-white py-24 text-center overflow-hidden">

                {/* Background Image */}
                <img
                    src="/images/road.jpg"
                    alt="Road Construction"
                    className="absolute inset-0 w-full h-full object-cover object-bottom z-0"
                />

                {/* Light overlay (keep visible but not black) */}
                <div className="absolute inset-0 bg-black/25 z-10"></div>

                {/* Content */}
                <div className="relative z-20">
                    <h1 className="text-5xl font-bold">Road Construction</h1>
                    <p className="mt-4 max-w-3xl mx-auto">
                        Building modern and durable transportation infrastructure across Ethiopia.
                    </p>
                </div>

            </section>

            <section className="max-w-6xl mx-auto py-16 px-6">

                <h2 className="text-3xl font-bold mb-6">Overview</h2>

                <p className="text-gray-600 leading-relaxed">
                    GGS Infrastructure PLC specializes in road construction,
                    rehabilitation, asphalt paving, gravel roads, drainage systems,
                    and transportation infrastructure projects.
                </p>

                <h2 className="text-3xl font-bold mt-12 mb-6">
                    Our Capabilities
                </h2>

                <ul className="space-y-3 text-gray-600">
                    <li>✓ Highway Construction</li>
                    <li>✓ Asphalt Paving</li>
                    <li>✓ Road Rehabilitation</li>
                    <li>✓ Drainage Systems</li>
                    <li>✓ Bridge Approaches</li>
                </ul>

            </section>

        </div>
    );
};

export default RoadConstruction;