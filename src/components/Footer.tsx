import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#002B5B] text-white mt-20">

            {/* TOP ACCENT */}
            <div className="h-1 bg-[#D28E28]" />

            <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-6 py-12 sm:py-14">

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">

                    {/* COLUMN 1 - BRAND */}
                    <div className="text-center sm:text-left">

                        {/* LOGO + BRAND */}
                        <div className="flex flex-col sm:flex-row items-center sm:items-center gap-3 mb-4">

                            <img
                                src="/images/logo.jpg"
                                alt="GGS Logo"
                                className="h-10 sm:h-12 w-auto object-contain"
                            />

                            <h2 className="text-base sm:text-lg font-semibold text-white text-center sm:text-left">
                                GGS Infrastructure PLC
                            </h2>

                        </div>

                        <p className="text-white/70 text-sm leading-relaxed px-2 sm:px-0">
                            GGS Infrastructure PLC delivers world-class civil engineering,
                            road construction, and bridge infrastructure across Ethiopia
                            with precision, safety, and innovation.
                        </p>
                    </div>

                    {/* COLUMN 2 - LINKS */}
                    <div className="text-center sm:text-left">

                        <h3 className="font-semibold mb-4 text-lg">
                            Quick Links
                        </h3>

                        <div className="grid grid-cols-2 gap-y-3 gap-x-6 text-sm text-white/70">

                            <Link className="hover:text-[#D28E28] transition" to="/">Home</Link>
                            <Link className="hover:text-[#D28E28] transition" to="/about">About</Link>
                            <Link className="hover:text-[#D28E28] transition" to="/services">Services</Link>
                            <Link className="hover:text-[#D28E28] transition" to="/projects">Projects</Link>
                            <Link className="hover:text-[#D28E28] transition" to="/team">Team</Link>
                            <Link className="hover:text-[#D28E28] transition" to="/contact">Contact</Link>

                        </div>
                    </div>

                    {/* COLUMN 3 - CONTACT */}
                    <div className="text-center sm:text-left">

                        <h3 className="font-semibold mb-4 text-lg">
                            Contact
                        </h3>

                        <p className="text-white/70 text-sm leading-relaxed space-y-2">
                            📍 Addis Ababa, Ethiopia <br />
                            📞 +251 902 989 488 <br />
                            ✉️ ggsinfra@gmail.com
                        </p>

                        {/* SOCIAL ICONS */}
                        <div className="flex justify-center sm:justify-start gap-3 mt-6">

                            {/* Facebook */}
                            <a className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] transition">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                    <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.9 0 1.9.1 1.9.1v2.1h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12z" />
                                </svg>
                            </a>

                            {/* LinkedIn */}
                            <a className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] transition">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                    <path d="M4 4h4v16H4zM6 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6 6h4v2h.1c.6-1.2 2-2.2 4-2.2 4 0 5 2.5 5 6V20h-4v-6c0-1.5-.5-3-2.5-3S13 13 13 14.5V20h-4z" />
                                </svg>
                            </a>

                            {/* Telegram */}
                            <a className="w-10 h-10 flex items-center justify-center rounded-full border border-white/20 hover:bg-[#D28E28] transition">
                                <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
                                    <path d="M9 15l-1 5 4-3 5 3 6-18L1 10l8 2 14-8-14 11z" />
                                </svg>
                            </a>

                        </div>
                    </div>

                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-white/10 mt-10 pt-5 text-center text-white/50 text-xs">
                    © 2026 GGS Infrastructure PLC • Designed & Developed by{" "}
                    <span className="text-[#D28E28] font-semibold">
                        SEBONA HAILE
                    </span>
                </div>

            </div>
        </footer>
    );
}