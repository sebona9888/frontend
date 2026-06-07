import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-[#002B5B] text-white">

            {/* TOP ACCENT */}
            <div className="h-1 bg-[#D28E28]" />

            <div className="max-w-7xl mx-auto px-4 sm:px-5 md:px-6 py-12 md:py-16">

                {/* MAIN GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">

                    {/* COMPANY INFO (CLEANED) */}
                    <div className="text-center sm:text-left">

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

                        <ul className="grid grid-cols-2 gap-y-3 gap-x-6 text-white/70 text-sm">

                            <li><Link to="/" className="hover:text-[#D28E28] transition">Home</Link></li>
                            <li><Link to="/about" className="hover:text-[#D28E28] transition">About Us</Link></li>
                            <li><Link to="/services" className="hover:text-[#D28E28] transition">Services</Link></li>
                            <li><Link to="/projects" className="hover:text-[#D28E28] transition">Projects</Link></li>
                            <li><Link to="/team" className="hover:text-[#D28E28] transition">Team</Link></li>
                            <li><Link to="/contact" className="hover:text-[#D28E28] transition">Contact</Link></li>

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

                        {/* SOCIAL ICONS (SVG CLEAN) */}
                        <div className="flex gap-3 mt-6 justify-center sm:justify-start">

                            {/* Facebook */}
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] transition">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.9 0 1.9.1 1.9.1v2.1h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12z" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] transition">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M20.4 20.4h-3.6v-5.6c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9v5.7H9.3V9h3.4v1.6h.1c.5-.9 1.7-1.8 3.5-1.8 3.7 0 4.4 2.4 4.4 5.5v6.1zM5.3 7.4a2.1 2.1 0 1 1 0-4.2 2.1 2.1 0 0 1 0 4.2zM7.1 20.4H3.5V9h3.6v11.4z" />
                                </svg>
                            </a>

                            {/* Telegram */}
                            <a href="#" className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] transition">
                                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M9.04 15.47l-.38 5.3c.54 0 .78-.23 1.07-.52l2.54-2.43 5.27 3.86c.97.53 1.66.25 1.9-.9l3.46-16.2c.3-1.38-.5-1.92-1.43-1.58L1.6 9.3c-1.33.52-1.32 1.26-.24 1.6l4.6 1.43L18.7 6.3c.58-.36 1.11-.16.68.2" />
                                </svg>
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