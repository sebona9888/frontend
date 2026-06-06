const WhyChooseUs = () => {
    return (
        <section className="py-20 bg-white">

            <div className="max-w-6xl mx-auto px-6 text-center">

                <h2 className="text-4xl font-bold text-gray-800">
                    Why Choose Us
                </h2>

                <div className="grid md:grid-cols-3 gap-8 mt-14">

                    <div className="bg-gray-50 p-8 rounded-2xl shadow">
                        <h3 className="text-xl font-bold">Quality Assurance</h3>
                        <p className="mt-3 text-gray-600">
                            We maintain the highest standards in every project.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl shadow">
                        <h3 className="text-xl font-bold">Expert Team</h3>
                        <p className="mt-3 text-gray-600">
                            Experienced engineers and project managers.
                        </p>
                    </div>

                    <div className="bg-gray-50 p-8 rounded-2xl shadow">
                        <h3 className="text-xl font-bold">Timely Delivery</h3>
                        <p className="mt-3 text-gray-600">
                            Efficient execution while maintaining quality and safety.
                        </p>
                    </div>

                </div>

            </div>

        </section>
    );
};

export default WhyChooseUs;