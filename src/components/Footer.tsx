import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#002B5B] text-white">

            {/* TOP ACCENT */}
            <div className="h-1 bg-[#D28E28]" />

            <div className="max-w-7xl mx-auto px-5 md:px-6 py-12 md:py-16">

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">

                    {/* COMPANY INFO */}
                    <div className="text-center sm:text-left">

                        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 mb-5">

                            {/* CLEAN LOGO ONLY */}
                            <img
                                src="/images/logo.jpg"
                                alt="GGS Infrastructure Logo"
                                className="h-16 md:h-20 w-auto object-contain"
                            />

                            <div>
                                <h2 className="text-xl md:text-3xl font-extrabold leading-tight">
                                    <span className="text-[#D28E28]">GGS</span>
                                </h2>

                                <p className="text-white/80 text-xs md:text-sm font-medium tracking-wide">
                                    INFRASTRUCTURE PLC
                                </p>
                            </div>

                        </div>

                        <p className="text-white/70 text-sm leading-relaxed">
                            GGS Infrastructure PLC delivers high-quality construction,
                            road development, bridge engineering, and civil works
                            across Ethiopia with excellence, innovation, and safety.
                        </p>
                    </div>

                    {/* QUICK LINKS */}
                    <div className="text-center sm:text-left">

                        <h3 className="text-lg font-bold mb-5">
                            Quick Links
                        </h3>

                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-white/70 text-sm">

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
                                <Link to="/team" className="hover:text-[#D28E28] transition">
                                    Team
                                </Link>
                            </li>

                            <li>
                                <Link to="/contact" className="hover:text-[#D28E28] transition">
                                    Contact
                                </Link>
                            </li>

                        </ul>
                    </div>

                    {/* CONTACT */}
                    <div className="text-center sm:text-left">

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
                        <div className="flex flex-wrap justify-center sm:justify-start gap-3 mt-6">

                            <a className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] hover:text-black transition">
                                F
                            </a>

                            <a className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] hover:text-black transition">
                                in
                            </a>

                            <a className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] hover:text-black transition">
                                Tg
                            </a>

                        </div>
                    </div>

                </div>

                {/* BOTTOM */}
                <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">

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