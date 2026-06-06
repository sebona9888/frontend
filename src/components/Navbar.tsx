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
            <header className="fixed top-0 left-0 w-full z-[1000] bg-[#002B5B]/95 backdrop-blur-md shadow-lg border-b border-white/10">
                <div className="max-w-7xl mx-auto px-5 md:px-6 py-3 flex items-center justify-between">

                    {/* LOGO */}
                    <div className="flex items-center gap-3 z-[1100]">
                        <div className="bg-white rounded-md p-1 shadow-md">
                            <img
                                src="/images/logo.jpg"
                                className="h-10 w-auto object-contain"
                                alt="GGS Logo"
                            />
                        </div>

                        <h1 className="text-white font-bold text-base md:text-lg tracking-wide">
                            GGS <span className="text-[#D28E28]">INFRASTRUCTURE</span>
                        </h1>
                    </div>

                    {/* DESKTOP MENU */}
                    <nav className="hidden md:flex gap-8 text-white font-medium">
                        {links.map((l) => (
                            <NavLink
                                key={l.path}
                                to={l.path}
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-[#D28E28]"
                                        : "hover:text-[#D28E28]"
                                }
                            >
                                {l.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* HAMBURGER (ANIMATED) */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center z-[1100]"
                    >
                        <span
                            className={`block h-0.5 w-6 bg-white transition-all duration-300
                            ${open ? "rotate-45 translate-y-1.5" : ""}`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-white my-1 transition-all duration-300
                            ${open ? "opacity-0" : ""}`}
                        />
                        <span
                            className={`block h-0.5 w-6 bg-white transition-all duration-300
                            ${open ? "-rotate-45 -translate-y-1.5" : ""}`}
                        />
                    </button>
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
                className={`fixed top-0 right-0 h-full w-72 bg-[#001F3F] z-[1002] transform transition-transform duration-300
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* HEADER */}
                <div className="flex justify-between items-center px-5 py-5 border-b border-white/10">
                    <h2 className="text-white font-bold">Menu</h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="text-white text-2xl"
                    >
                        ✕
                    </button>
                </div>

                {/* LINKS */}
                <div className="flex flex-col gap-6 px-6 py-6">
                    {links.map((l) => (
                        <NavLink
                            key={l.path}
                            to={l.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#D28E28]"
                                    : "text-white hover:text-[#D28E28]"
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