const ContactMap = () => {
    return (
        <section className="px-4 sm:px-6 pb-12 sm:pb-16">

            <div className="max-w-7xl mx-auto rounded-xl sm:rounded-2xl overflow-hidden shadow-md sm:shadow-lg border border-gray-100">

                {/* MAP CONTAINER */}
                <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px] lg:h-[450px]">

                    <iframe
                        src="https://www.google.com/maps?q=Addis%20Ababa,%20Ethiopia&output=embed"
                        className="absolute inset-0 w-full h-full border-0"
                        loading="lazy"
                        allowFullScreen
                    ></iframe>

                    {/* OPTIONAL OVERLAY (LIGHT BRAND TOUCH) */}
                    <div className="absolute inset-0 pointer-events-none bg-black/5"></div>

                </div>

            </div>

        </section>
    );
};

export default ContactMap;