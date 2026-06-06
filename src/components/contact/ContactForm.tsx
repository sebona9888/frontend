import { motion } from "framer-motion";

const ContactForm = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
        >
            <form className="space-y-5">

                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />

                <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />

                <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />

                <textarea
                    rows={5}
                    placeholder="Write your message..."
                    className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                />

                <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-opacity-90 transition shadow-md"
                >
                    Send Message
                </button>

            </form>
        </motion.div>
    );
};

export default ContactForm;