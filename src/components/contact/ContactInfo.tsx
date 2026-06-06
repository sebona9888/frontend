import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactInfo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
        >
            {/* TITLE */}
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                Get In Touch
            </h2>

            <p className="mt-3 sm:mt-4 text-sm sm:text-base text-gray-600 leading-relaxed">
                Contact GSS Infrastructure PLC for inquiries,
                partnerships, project discussions, or career opportunities.
            </p>

            {/* CONTACT ITEMS */}
            <div className="mt-8 sm:mt-10 space-y-5 sm:space-y-6">

                {/* PHONE */}
                <div className="flex items-start gap-4 group">
                    <div className="bg-[#C8851F]/10 text-[#C8851F] p-3 sm:p-4 rounded-full
                        group-hover:bg-[#C8851F] group-hover:text-white transition">
                        <FaPhoneAlt />
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800">Phone</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            +251 902 989 488
                        </p>
                    </div>
                </div>

                {/* EMAIL */}
                <div className="flex items-start gap-4 group">
                    <div className="bg-[#C8851F]/10 text-[#C8851F] p-3 sm:p-4 rounded-full
                        group-hover:bg-[#C8851F] group-hover:text-white transition">
                        <FaEnvelope />
                    </div>

                    <div className="min-w-0">
                        <h3 className="font-semibold text-gray-800">Email</h3>
                        <p className="text-gray-600 text-sm sm:text-base break-all">
                            info@GSSinfrastructure.com
                        </p>
                    </div>
                </div>

                {/* LOCATION */}
                <div className="flex items-start gap-4 group">
                    <div className="bg-[#C8851F]/10 text-[#C8851F] p-3 sm:p-4 rounded-full
                        group-hover:bg-[#C8851F] group-hover:text-white transition">
                        <FaMapMarkerAlt />
                    </div>

                    <div>
                        <h3 className="font-semibold text-gray-800">Location</h3>
                        <p className="text-gray-600 text-sm sm:text-base">
                            Addis Ababa, Ethiopia
                        </p>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default ContactInfo;