const ContactMap = () => {
    return (
        <section className="px-6 pb-16">

            <div className="max-w-7xl mx-auto rounded-2xl overflow-hidden shadow-lg">

                <iframe
                    src="https://www.google.com/maps?q=Addis%20Ababa,%20Ethiopia&output=embed"
                    width="100%"
                    height="400"
                    loading="lazy"
                    className="border-0"
                    allowFullScreen
                ></iframe>

            </div>

        </section>
    );
};

export default ContactMap;