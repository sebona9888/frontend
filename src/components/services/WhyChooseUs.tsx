const WhyChooseUs = () => {
    return (
        <section className="py-14 sm:py-20 bg-white">

            <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

                {/* TITLE */}
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
                    Why Choose Us
                </h2>

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mt-10 sm:mt-14">

                    {/* CARD 1 */}
                    <div className="bg-gray-50 p-6 sm:p-7 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition active:scale-95">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                            Quality Assurance
                        </h3>
                        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                            We maintain the highest standards in every project.
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="bg-gray-50 p-6 sm:p-7 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition active:scale-95">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                            Expert Team
                        </h3>
                        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                            Experienced engineers and project managers.
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="bg-gray-50 p-6 sm:p-7 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition active:scale-95">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-800">
                            Timely Delivery
                        </h3>
                        <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed">
                            Efficient execution while maintaining quality and safety.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default WhyChooseUs;