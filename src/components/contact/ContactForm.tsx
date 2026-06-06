import { motion } from "framer-motion";

const ContactForm = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white p-5 sm:p-6 md:p-8 rounded-2xl shadow-lg border border-gray-100 w-full"
        >
            <form className="space-y-4 sm:space-y-5">

                {/* FULL NAME */}
                <div>
                    <label className="text-sm text-gray-600 font-medium">Full Name</label>
                    <input
                        type="text"
                        placeholder="Enter your full name"
                        className="mt-1 w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                        placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#C8851F] focus:border-transparent transition"
                    />
                </div>

                {/* EMAIL */}
                <div>
                    <label className="text-sm text-gray-600 font-medium">Email Address</label>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        className="mt-1 w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                        placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#C8851F] focus:border-transparent transition"
                    />
                </div>

                {/* SUBJECT */}
                <div>
                    <label className="text-sm text-gray-600 font-medium">Subject</label>
                    <input
                        type="text"
                        placeholder="Enter subject"
                        className="mt-1 w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                        placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#C8851F] focus:border-transparent transition"
                    />
                </div>

                {/* MESSAGE */}
                <div>
                    <label className="text-sm text-gray-600 font-medium">Message</label>
                    <textarea
                        rows={5}
                        placeholder="Write your message..."
                        className="mt-1 w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-gray-900
                        placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-[#C8851F] focus:border-transparent transition resize-none"
                    />
                </div>

                {/* BUTTON */}
                <button
                    type="submit"
                    className="w-full bg-[#C8851F] text-white py-3 rounded-xl font-semibold
                    hover:bg-[#b8741b] active:scale-95 transition shadow-md"
                >
                    Send Message
                </button>

            </form>
        </motion.div>
    );
};

export default ContactForm;