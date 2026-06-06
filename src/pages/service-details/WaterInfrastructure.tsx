const WaterInfrastructure = () => {
    return (
        <div className="min-h-screen">

            <section className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">

                <img
                    src="/images/water.jpg"
                    alt="Water Infrastructure"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                />

                <div className="absolute inset-0 bg-black/25"></div>

                <div className="relative z-10 flex items-center justify-center h-full text-center px-6 text-white">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Water Infrastructure
                    </h1>
                </div>

            </section>

            <section className="max-w-5xl mx-auto py-16 px-6 text-center">
                <h2 className="text-3xl font-bold mb-6">
                    Sustainable Water Infrastructure Solutions
                </h2>

                <p className="text-gray-700 text-lg leading-relaxed">
                    Water infrastructure includes systems for clean water supply,
                    drainage, sanitation, wastewater treatment, and irrigation.
                </p>
            </section>

        </div>
    );
};

export default WaterInfrastructure;