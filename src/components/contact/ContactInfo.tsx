import {
    FaPhoneAlt,
    FaEnvelope,
    FaMapMarkerAlt,
} from "react-icons/fa";
import { motion } from "framer-motion";

const ContactInfo = () => {
    return (
        <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
        >
            <h2 className="text-3xl font-bold text-gray-800">
                Get In Touch
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
                Contact Sadan Infrastructure PLC for inquiries,
                partnerships, project discussions, or career opportunities.
            </p>

            <div className="mt-10 space-y-6">

                <div className="flex items-center gap-4">
                    <div className="bg-secondary text-black p-4 rounded-full">
                        <FaPhoneAlt />
                    </div>

                    <div>
                        <h3 className="font-bold">Phone</h3>
                        <p className="text-gray-600">+251 902989488</p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-secondary text-black p-4 rounded-full">
                        <FaEnvelope />
                    </div>

                    <div>
                        <h3 className="font-bold">Email</h3>
                        <p className="text-gray-600">
                            info@sadaninfrastructure.com
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-4">
                    <div className="bg-secondary text-black p-4 rounded-full">
                        <FaMapMarkerAlt />
                    </div>

                    <div>
                        <h3 className="font-bold">Location</h3>
                        <p className="text-gray-600">
                            Addis Ababa, Ethiopia
                        </p>
                    </div>
                </div>

            </div>
        </motion.div>
    );
};

export default ContactInfo;