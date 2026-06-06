import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";

const Contact = () => {
    return (
        <div className="min-h-screen bg-gray-50">

            <ContactHero />

            <section className="max-w-7xl mx-auto py-16 px-6 grid md:grid-cols-2 gap-12">
                <ContactInfo />
                <ContactForm />
            </section>

            <ContactMap />

        </div>
    );
};

export default Contact;