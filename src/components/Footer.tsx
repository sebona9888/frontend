import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-[#111821] text-white border-t border-[#FF6B00]/10 mt-24">

            {/* Top Accent Gradient Bar */}
            <div className="h-1.5 bg-gradient-to-r from-[#FF6B00] via-[#ff8c3b] to-[#1A2530]" />

            <div className="max-w-7xl mx-auto px-6 py-16 sm:py-20">

                {/* Main Grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16">

                    {/* Column 1: Brand Info (Takes 5 cols on desktop) */}
                    <div className="md:col-span-5 text-center md:text-left flex flex-col items-center md:items-start">

                        {/* Logo & Brand Name */}
                        <div className="flex items-center gap-3 mb-5 select-none">
                            <img
                                src="/images/logo.jpg"
                                alt="GGS Logo"
                                className="h-10 w-auto object-contain rounded-sm"
                            />
                            <div className="flex flex-col text-left">
                                <span className="text-white font-extrabold text-lg tracking-wider leading-none">
                                    GGS
                                </span>
                                <span className="text-[#FF6B00] text-[9px] font-bold tracking-widest leading-none mt-1">
                                    INFRASTRUCTURE PLC
                                </span>
                            </div>
                        </div>

                        <p className="text-slate-400 text-sm leading-relaxed max-w-md">
                            GGS Infrastructure PLC delivers world-class civil engineering,
                            road construction, and bridge infrastructure across Ethiopia
                            with precision, safety, and innovation.
                        </p>
                    </div>

                    {/* Column 2: Navigation Links (Takes 3 cols on desktop) */}
                    <div className="md:col-span-3 text-center md:text-left">
                        <h3 className="text-white font-semibold text-base uppercase tracking-wider mb-5">
                            Quick Links
                        </h3>
                        <nav className="grid grid-cols-2 gap-y-3 gap-x-4 text-sm text-slate-400 justify-center md:justify-start">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About", path: "/about" },
                                { name: "Services", path: "/services" },
                                { name: "Projects", path: "/projects" },
                                { name: "Team", path: "/team" },
                                { name: "Contact", path: "/contact" }
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    to={link.path}
                                    className="hover:text-[#FF6B00] hover:translate-x-1 transition-all duration-200 inline-block"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Column 3: Contact Details (Takes 4 cols on desktop) */}
                    <div className="md:col-span-4 text-center md:text-left">
                        <h3 className="text-white font-semibold text-base uppercase tracking-wider mb-5">
                            Contact
                        </h3>

                        <address className="not-italic text-slate-400 text-sm space-y-3 flex flex-col items-center md:items-start">
                            {/* Address */}
                            <span className="flex items-center gap-2.5">
                                <svg className="w-5 h-5 text-[#FF6B00] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Addis Ababa, Ethiopia
                            </span>

                            {/* Phone Link */}
                            <a href="tel:+251902989488" className="flex items-center gap-2.5 hover:text-[#FF6B00] transition-colors">
                                <svg className="w-5 h-5 text-[#FF6B00] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +251 902 989 488
                            </a>

                            {/* Email Link */}
                            <a href="mailto:ggsinfra@gmail.com" className="flex items-center gap-2.5 hover:text-[#FF6B00] transition-colors">
                                <svg className="w-5 h-5 text-[#FF6B00] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                ggsinfra@gmail.com
                            </a>
                        </address>

                        {/* Social Links */}
                        <div className="flex justify-center md:justify-start gap-3 mt-6">
                            {[
                                { name: "Facebook", href: "https://facebook.com", path: "M22 12a10 10 0 1 0-11.5 9.9v-7h-2.2V12h2.2V9.8c0-2.2 1.3-3.4 3.3-3.4.9 0 1.9.1 1.9.1v2.1h-1.1c-1.1 0-1.4.7-1.4 1.4V12h2.4l-.4 2.9h-2v7A10 10 0 0 0 22 12z" },
                                { name: "LinkedIn", href: "https://linkedin.com", path: "M4 4h4v16H4zM6 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm6 6h4v2h.1c.6-1.2 2-2.2 4-2.2 4 0 5 2.5 5 6V20h-4v-6c0-1.5-.5-3-2.5-3S13 13 13 14.5V20h-4z" },
                                { name: "Telegram", href: "https://telegram.org", path: "M9 15l-1 5 4-3 5 3 6-18L1 10l8 2 14-8-14 11z" }
                            ].map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Visit our ${social.name} page`}
                                    className="w-10 h-10 flex items-center justify-center rounded-full border border-slate-700 hover:border-[#FF6B00] hover:bg-[#FF6B00] hover:text-white transition-all duration-300 group"
                                >
                                    <svg className="w-5 h-5 fill-slate-300 group-hover:fill-white transition-colors" viewBox="0 0 24 24">
                                        <path d={social.path} />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="border-t border-slate-800/80 mt-16 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-500 text-xs">
                    <div>
                        © {new Date().getFullYear()} GGS Infrastructure PLC. All rights reserved.
                    </div>
                    <div>
                        Designed & Developed by{" "}
                        <span className="text-[#FF6B00] font-semibold hover:underline cursor-pointer">
                            SEBONA HAILE
                        </span>
                    </div>
                </div>

            </div>
        </footer>
    );
}