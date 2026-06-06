import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#002B5B] text-white">

            {/* Gold Top Border */}
            <div className="h-1 bg-[#D28E28]" />

            <div className="max-w-7xl mx-auto px-6 py-16">

                <div className="grid md:grid-cols-3 gap-12">

                    {/* Company Info */}
                    <div>

                        {/* LOGO + NAME */}
                        <div className="flex items-center gap-4 mb-5">
                            <img
                                src="/images/logo.jpg"
                                alt="GGS Infrastructure Logo"
                                className="h-14 w-auto object-contain"
                            />

                            <h2 className="text-3xl font-extrabold leading-tight">
                                <span className="text-[#D28E28]">GGS </span>
                                INFRASTRUCTURE
                            </h2>
                        </div>

                        <p className="text-white/70 leading-relaxed text-sm">
                            GGS Infrastructure PLC is committed to delivering
                            high-quality construction, engineering, road
                            development, and civil works projects that contribute
                            to Ethiopia's growth and development.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-white/70">
                            <li>
                                <Link to="/" className="hover:text-[#D28E28] transition">
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link to="/about" className="hover:text-[#D28E28] transition">
                                    About Us
                                </Link>
                            </li>

                            <li>
                                <Link to="/services" className="hover:text-[#D28E28] transition">
                                    Services
                                </Link>
                            </li>

                            <li>
                                <Link to="/projects" className="hover:text-[#D28E28] transition">
                                    Projects
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="hover:text-[#D28E28] transition">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-lg font-bold mb-5">
                            Contact Us
                        </h3>

                        <ul className="space-y-3 text-white/70 text-sm">
                            <li>📍 Addis Ababa, Ethiopia</li>
                            <li>📞 +251 902 989 488</li>
                            <li>✉️ GGSinfra@gmail.com</li>
                            <li>🕒 Mon - Fri, 8:00 AM - 5:00 PM</li>
                        </ul>

                        {/* Social Links */}
                        <div className="flex gap-4 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] hover:text-black transition"
                            >
                                F
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] hover:text-black transition"
                            >
                                in
                            </a>

                            <a
                                href="#"
                                className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] hover:text-black transition"
                            >
                                Tg
                            </a>
                        </div>
                    </div>

                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p className="text-white/50 text-sm text-center">
                        © 2026 GGS Infrastructure PLC. All Rights Reserved.
                    </p>

                    <div className="text-center">
                        <p className="text-white/60 text-sm">
                            Designed & Developed by{" "}
                            <span className="text-[#D28E28] font-semibold">
                                Sebona Haile
                            </span>
                        </p>

                        <p className="text-white/40 text-xs mt-1">
                            📞 0902989488 | ✉️ sebonahaile@gmail.com
                        </p>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;