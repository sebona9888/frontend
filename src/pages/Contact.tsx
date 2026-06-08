import { useEffect } from "react";
import { useTranslation } from "react-i18next";

import ContactHero from "../components/contact/ContactHero";
import ContactInfo from "../components/contact/ContactInfo";
import ContactForm from "../components/contact/ContactForm";
import ContactMap from "../components/contact/ContactMap";

const Contact = () => {
    const { t, i18n } = useTranslation();

    useEffect(() => {
        document.title = `${t("contact.title")} | GGS Infrastructure PLC`;

        window.scrollTo({ top: 0, behavior: "instant" });
    }, [i18n.language, t]);

    return (
        <div
            className="min-h-screen bg-gray-50"
            role="document"
            aria-label={t("contact.ariaLabel")}
        >
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