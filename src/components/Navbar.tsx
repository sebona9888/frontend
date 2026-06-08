import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const { t, i18n } = useTranslation();

    // ✅ ONLY KEYS (IMPORTANT FIX)
    const links = [
        { key: "home", path: "/" },
        { key: "about", path: "/about" },
        { key: "services", path: "/services" },
        { key: "projects", path: "/projects" },
        { key: "careers", path: "/careers" },
        { key: "team", path: "/team" },
        { key: "contact", path: "/contact" }
    ];

    return (
        <>
            {/* NAVBAR */}
            <header className="fixed top-0 left-0 w-full z-[1000] bg-[#0B0F14]/95 backdrop-blur-md shadow-lg border-b border-white/10">
                <div className="max-w-7xl mx-auto px-5 md:px-6 py-2 flex items-center justify-between">

                    {/* MOBILE HAMBURGER */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center z-[1100]"
                    >
                        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ${open ? "opacity-0" : ""}`} />
                        <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""}`} />
                    </button>

                    {/* LOGO */}
                    <div className="flex items-center gap-3 flex-1 justify-center md:justify-start">
                        <img
                            src="/images/logo.jpg"
                            alt="GGS Logo"
                            className="h-14 md:h-16 lg:h-20 w-auto object-contain"
                        />

                        <div>
                            <h1 className="text-white font-bold text-base md:text-lg lg:text-xl tracking-wide leading-tight">
                                GGS
                            </h1>

                            <p className="text-[#D28E28] text-xs md:text-sm font-semibold tracking-wider">
                                INFRASTRUCTURE PLC
                            </p>
                        </div>
                    </div>

                    {/* DESKTOP MENU */}
                    <div className="hidden md:flex items-center gap-8">
                        <nav className="flex gap-8 text-white font-medium">
                            {links.map((l) => (
                                <NavLink
                                    key={l.key}
                                    to={l.path}
                                    className={({ isActive }) =>
                                        isActive
                                            ? "text-[#D28E28] transition-colors"
                                            : "hover:text-[#D28E28] transition-colors"
                                    }
                                >
                                    {t(`nav.${l.key}`)}
                                </NavLink>
                            ))}
                        </nav>

                        {/* LANGUAGE SWITCHER */}
                        <select
                            value={i18n.language}
                            onChange={(e) => i18n.changeLanguage(e.target.value)}
                            className="bg-[#111827] text-white border border-[#D28E28] rounded px-3 py-1 text-sm outline-none"
                        >
                            <option value="en">EN</option>
                            <option value="am">አማ</option>
                            <option value="om">ORM</option>
                        </select>
                    </div>
                </div>
            </header>

            {/* OVERLAY */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/60 z-[1001]"
                />
            )}

            {/* MOBILE MENU */}
            <div
                className={`fixed top-0 left-0 h-full w-72 bg-[#111827] z-[1002] transform transition-transform duration-300 ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* MENU HEADER */}
                <div className="flex justify-between items-center px-5 py-5 border-b border-white/10">
                    <h2 className="text-white font-bold text-lg tracking-wide">
                        {t("nav.menu")}
                    </h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="text-white text-2xl hover:text-[#D28E28] transition"
                    >
                        ✕
                    </button>
                </div>

                {/* MOBILE LANGUAGE */}
                <div className="px-6 py-4 border-b border-white/10">
                    <select
                        value={i18n.language}
                        onChange={(e) => i18n.changeLanguage(e.target.value)}
                        className="w-full bg-[#1F2937] text-white border border-[#D28E28] rounded px-3 py-2 outline-none"
                    >
                        <option value="en">English</option>
                        <option value="am">አማርኛ</option>
                        <option value="om">Afaan Oromoo</option>
                    </select>
                </div>

                {/* MOBILE LINKS */}
                <div className="flex flex-col gap-6 px-6 py-6">
                    {links.map((l) => (
                        <NavLink
                            key={l.key}
                            to={l.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#D28E28] font-medium"
                                    : "text-white hover:text-[#D28E28] transition-colors"
                            }
                        >
                            {t(`nav.${l.key}`)}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;