import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#002B5B] text-white">

            {/* TOP BORDER */}
            <div className="h-1 bg-[#D28E28]" />

            <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

                    {/* COMPANY INFO */}
                    <div>

                        <div className="flex items-center gap-3 mb-5">
                            <img
                                src="/images/logo.jpg"
                                alt="GGS Infrastructure Logo"
                                className="h-12 md:h-14 w-auto object-contain bg-white rounded p-1"
                            />

                            <h2 className="text-xl md:text-3xl font-extrabold leading-tight">
                                <span className="text-[#D28E28]">GGS </span>
                                INFRASTRUCTURE
                            </h2>
                        </div>

                        <p className="text-white/70 text-sm leading-relaxed">
                            GGS Infrastructure PLC delivers high-quality construction,
                            road development, bridge engineering, and civil works
                            across Ethiopia with excellence and safety.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div>
                        <h3 className="text-lg font-bold mb-5">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-white/70 text-sm">

                            <li>
                                <Link to="/" className="hover:text-[#D28E28] transition">Home</Link>
                            </li>

                            <li>
                                <Link to="/about" className="hover:text-[#D28E28] transition">About Us</Link>
                            </li>

                            <li>
                                <Link to="/services" className="hover:text-[#D28E28] transition">Services</Link>
                            </li>

                            <li>
                                <Link to="/projects" className="hover:text-[#D28E28] transition">Projects</Link>
                            </li>

                            {/* ✅ ADDED TEAM */}
                            <li>
                                <Link to="/team" className="hover:text-[#D28E28] transition">Team</Link>
                            </li>

                            <li>
                                <Link to="/contact" className="hover:text-[#D28E28] transition">Contact</Link>
                            </li>

                        </ul>
                    </div>

                    {/* CONTACT */}
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

                        {/* SOCIAL */}
                        <div className="flex gap-4 mt-6">

                            <a className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] hover:text-black transition">
                                F
                            </a>

                            <a className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] hover:text-black transition">
                                in
                            </a>

                            <a className="w-9 h-9 md:w-10 md:h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] hover:text-black transition">
                                Tg
                            </a>

                        </div>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-white/10 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center">

                    <p className="text-white/50 text-xs md:text-sm">
                        © 2026 GGS Infrastructure PLC. All Rights Reserved.
                    </p>

                    <div>
                        <p className="text-white/60 text-xs md:text-sm">
                            Designed & Developed by{" "}
                            <span className="text-[#D28E28] font-semibold">
                                Sebona Haile
                            </span>
                        </p>

                        <p className="text-white/40 text-[10px] md:text-xs mt-1">
                            📞 0902989488 | ✉️ sebonahaile@gmail.com
                        </p>
                    </div>

                </div>

            </div>
        </footer>
    );
};

export default Footer;