import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

// Inline icons (no external dependency)
const MenuIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="4" y1="6" x2="20" y2="6" />
        <line x1="4" y1="12" x2="20" y2="12" />
        <line x1="4" y1="18" x2="20" y2="18" />
    </svg>
);

const CloseIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
);

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Careers", path: "/careers" },
        { name: "Team", path: "/team" },
        { name: "Contact", path: "/contact" },
    ];

    // Lock body scroll + close on Escape while the mobile menu is open
    useEffect(() => {
        if (!open) return;

        document.body.style.overflow = "hidden";

        const onKeyDown = (e) => {
            if (e.key === "Escape") setOpen(false);
        };
        window.addEventListener("keydown", onKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    return (
        <>
            {/* NAVBAR */}
            <header className="fixed top-0 left-0 w-full z-50 bg-[#1A2530]/95 backdrop-blur-md shadow-xl border-b border-[#FF6B00]/20">
                <div className="max-w-7xl mx-auto px-5 md:px-6 py-2 flex items-center justify-between">

                    {/* MOBILE HAMBURGER */}
                    <button
                        onClick={() => setOpen(true)}
                        aria-label="Open menu"
                        aria-expanded={open}
                        aria-controls="mobile-menu"
                        className="md:hidden relative w-10 h-10 flex items-center justify-center text-white hover:text-[#FF6B00] transition-colors"
                    >
                        <MenuIcon className="w-6 h-6" />
                    </button>

                    {/* LOGO */}
                    <div className="flex items-center gap-2 flex-1 justify-center md:justify-start">
                        <img
                            src="/images/logo.jpg"
                            alt="GGS Infrastructure PLC logo"
                            className="h-8 md:h-10 lg:h-12 w-auto object-contain"
                        />

                        <div>
                            <h1 className="text-white font-bold text-sm md:text-base lg:text-lg tracking-wide leading-tight">
                                GGS
                            </h1>

                            <p className="text-[#FF6B00] text-[10px] md:text-xs font-semibold tracking-wider">
                                INFRASTRUCTURE PLC
                            </p>
                        </div>
                    </div>

                    {/* DESKTOP MENU */}
                    <nav className="hidden md:flex gap-8 font-medium">
                        {links.map((l) => (
                            <NavLink
                                key={l.name}
                                to={l.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-[#FF6B00] font-semibold transition-colors"
                                        : "text-white hover:text-[#FF6B00] transition-colors"
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
                    aria-hidden="true"
                    className="fixed inset-0 bg-black/50 z-40 md:hidden"
                />
            )}

            {/* MOBILE MENU */}
            <div
                id="mobile-menu"
                role="dialog"
                aria-modal="true"
                aria-label="Mobile navigation"
                className={`fixed top-0 left-0 h-full w-72 bg-[#1A2530] z-50 transform transition-transform duration-300 md:hidden ${open ? "translate-x-0" : "-translate-x-full"
                    }`}
            >
                {/* MENU HEADER */}
                <div className="flex justify-between items-center px-5 py-5 border-b border-[#FF6B00]/20">
                    <h2 className="text-white font-bold text-lg tracking-wide">
                        Menu
                    </h2>

                    <button
                        onClick={() => setOpen(false)}
                        aria-label="Close menu"
                        className="text-white hover:text-[#FF6B00] transition-colors"
                    >
                        <CloseIcon className="w-6 h-6" />
                    </button>
                </div>

                {/* MOBILE LINKS */}
                <div className="flex flex-col gap-6 px-6 py-6">
                    {links.map((l) => (
                        <NavLink
                            key={l.name}
                            to={l.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#FF6B00] font-semibold"
                                    : "text-white hover:text-[#FF6B00] transition-colors"
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