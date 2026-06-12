import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);

    // Close mobile menu when pressing Escape key
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

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
            {/* NAVBAR HEADER */}
            <header className="fixed top-0 left-0 w-full z-[1000] bg-[#1A2530]/95 backdrop-blur-md shadow-xl border-b border-[#FF6B00]/10 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-5 md:px-8 py-3 flex items-center justify-between relative min-h-[64px] md:min-h-[72px]">

                    {/* MOBILE HAMBURGER (Absolutely positioned on mobile to ensure logo centers perfectly) */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 flex flex-col justify-center items-center rounded-full hover:bg-white/5 transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF6B00]/50"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                    >
                        <span
                            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "rotate-45 translate-y-1.5" : ""
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300 ${open ? "opacity-0" : "opacity-100"
                                }`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-white transition-all duration-300 ${open ? "-rotate-45 -translate-y-1.5" : ""
                                }`}
                        />
                    </button>

                    {/* LOGO AREA (Centered on mobile, left-aligned on desktop) */}
                    <div className="flex items-center gap-3 mx-auto md:mx-0 select-none">
                        <img
                            src="/images/logo.jpg"
                            alt="GGS Logo"
                            className="h-9 md:h-11 w-auto object-contain rounded-sm"
                        />
                        <div className="flex flex-col">
                            <span className="text-white font-extrabold text-base md:text-lg tracking-wider leading-none">
                                GGS
                            </span>
                            <span className="text-[#FF6B00] text-[9px] md:text-[10px] font-bold tracking-widest leading-none mt-1">
                                INFRASTRUCTURE PLC
                            </span>
                        </div>
                    </div>

                    {/* DESKTOP MENU */}
                    <nav className="hidden md:flex items-center gap-8" aria-label="Main Navigation">
                        {links.map((l) => (
                            <NavLink
                                key={l.name}
                                to={l.path}
                                className={({ isActive }) =>
                                    `relative py-2 text-sm font-medium transition-colors duration-300 hover:text-[#FF6B00] focus:outline-none focus:text-[#FF6B00] ${isActive ? "text-[#FF6B00]" : "text-slate-300"
                                    }`
                                }
                            >
                                {({ isActive }) => (
                                    <>
                                        {l.name}
                                        {/* Premium active slide underline */}
                                        <span
                                            className={`absolute bottom-0 left-0 w-full h-[2px] bg-[#FF6B00] transition-transform duration-300 origin-left ${isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                                                }`}
                                        />
                                    </>
                                )}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </header>

            {/* OVERLAY & DRAWER CONTAINER (Lifted outside header stacking context to z-[1001]+) */}
            <div className={`fixed inset-0 z-[1100] pointer-events-none transition-all duration-300 ${open ? "opacity-100" : "opacity-0"}`}>

                {/* Backdrop Blur Overlay */}
                <div
                    onClick={() => setOpen(false)}
                    className={`absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity duration-300 ${open ? "pointer-events-auto opacity-100" : "opacity-0"
                        }`}
                />

                {/* Mobile Navigation Drawer (Consistent brand bg `#131B24`) */}
                <aside
                    className={`absolute top-0 left-0 h-full w-72 bg-[#131B24] border-r border-[#FF6B00]/10 shadow-2xl flex flex-col pointer-events-auto transform transition-transform duration-300 ease-out ${open ? "translate-x-0" : "-translate-x-full"
                        }`}
                    aria-label="Mobile Navigation"
                >
                    {/* Drawer Header */}
                    <div className="flex justify-between items-center px-6 py-5 border-b border-[#FF6B00]/10">
                        <div className="flex items-center gap-2">
                            <span className="text-white font-extrabold text-lg tracking-wider">GGS</span>
                            <span className="text-[#FF6B00] text-[9px] font-bold tracking-widest">INFRASTRUCTURE</span>
                        </div>

                        <button
                            onClick={() => setOpen(false)}
                            className="w-8 h-8 flex items-center justify-center text-slate-400 hover:text-white rounded-full hover:bg-white/5 transition-colors focus:outline-none"
                            aria-label="Close menu"
                        >
                            ✕
                        </button>
                    </div>

                    {/* Drawer Navigation Links */}
                    <nav className="flex flex-col gap-2 px-4 py-6 overflow-y-auto">
                        {links.map((l) => (
                            <NavLink
                                key={l.name}
                                to={l.path}
                                onClick={() => setOpen(false)}
                                className={({ isActive }) =>
                                    `flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-all ${isActive
                                        ? "bg-[#FF6B00]/10 text-[#FF6B00] border-l-4 border-[#FF6B00]"
                                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                                    }`
                                }
                            >
                                {l.name}
                            </NavLink>
                        ))}
                    </nav>
                </aside>
            </div>
        </>
    );
};

export default Navbar;