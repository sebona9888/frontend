import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#002B5B] text-white mt-20">

            {/* TOP ACCENT */}
            <div className="h-1 bg-[#D28E28]" />

            <div className="max-w-7xl mx-auto px-6 py-14 grid md:grid-cols-3 gap-10">

                {/* COLUMN 1 - BRAND (NO LOGO) */}
                <div>
                    <h2 className="text-xl font-semibold mb-3 text-white">
                        GGS Infrastructure PLC
                    </h2>

                    <p className="text-white/70 text-sm leading-relaxed">
                        GGS Infrastructure PLC delivers world-class civil engineering,
                        road construction, and bridge infrastructure across Ethiopia
                        with precision, safety, and innovation.
                    </p>
                </div>

                {/* COLUMN 2 - LINKS (UPDATED WITH TEAM) */}
                <div>
                    <h3 className="font-semibold mb-4">Quick Links</h3>

                    <div className="grid grid-cols-2 gap-2 text-sm text-white/70">

                        <Link className="hover:text-[#D28E28]" to="/">Home</Link>
                        <Link className="hover:text-[#D28E28]" to="/about">About</Link>
                        <Link className="hover:text-[#D28E28]" to="/services">Services</Link>
                        <Link className="hover:text-[#D28E28]" to="/projects">Projects</Link>

                        {/* NEW TEAM LINK */}
                        <Link className="hover:text-[#D28E28]" to="/team">Team</Link>

                        <Link className="hover:text-[#D28E28]" to="/contact">Contact</Link>

                    </div>
                </div>

                {/* COLUMN 3 - CONTACT */}
                <div>
                    <h3 className="font-semibold mb-4">Contact</h3>

                    <p className="text-white/70 text-sm space-y-2">
                        📍 Addis Ababa, Ethiopia <br />
                        📞 +251 902 989 488 <br />
                        ✉️ ggsinfra@gmail.com
                    </p>

                    {/* SOCIAL ICONS */}
                    <div className="flex gap-3 mt-5">

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
            <div className="border-t border-white/10 py-4 text-center text-white/50 text-xs">
                © 2026 GGS Infrastructure PLC • Designed & Developed with precision engineering
            </div>

        </footer>
    );
}