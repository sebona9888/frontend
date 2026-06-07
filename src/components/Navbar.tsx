import { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Careers", path: "/careers" },
        { name: "Team", path: "/team" },
        { name: "Contact", path: "/contact" }
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
                    <nav className="hidden md:flex gap-8 text-white font-medium">
                        {links.map((l) => (
                            <NavLink
                                key={l.path}
                                to={l.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-[#D28E28] transition-colors"
                                        : "hover:text-[#D28E28] transition-colors"
                                }
                            >
                                {l.name}
                            </NavLink>
                        ))}
                    </nav>
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
                    <h2 className="text-white font-bold text-lg">Menu</h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="text-white text-2xl hover:text-[#D28E28]"
                    >
                        ✕
                    </button>
                </div>

                {/* CLEAN MOBILE LOGO */}
                <div className="flex justify-center items-center py-6 px-4 border-b border-white/10">
                    <div className="bg-white/5 rounded-xl p-3 flex items-center justify-center">
                        <img
                            src="/images/logo.jpg"
                            alt="GGS Logo"
                            className="max-h-16 w-auto object-contain"
                        />
                    </div>
                </div>

                {/* MENU LINKS */}
                <div className="flex flex-col gap-6 px-6 py-6">
                    {links.map((l) => (
                        <NavLink
                            key={l.path}
                            to={l.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#D28E28] font-medium"
                                    : "text-white hover:text-[#D28E28] transition-colors"
                            }
                        >
                            {l.name}
                        </NavLink>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Navbar;