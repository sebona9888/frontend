import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const location = useLocation();

    const links = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Careers", path: "/careers" },
        { name: "Contact", path: "/contact" },
        { name: "Team", path: "/team" }
    ];

    // Auto close menu on route change
    useEffect(() => {
        if (!open) return;

        const frame = window.requestAnimationFrame(() => {
            setOpen(false);
        });

        return () => window.cancelAnimationFrame(frame);
    }, [location, open]);

    return (
        <nav className="sticky top-0 z-50 bg-[#002B5B]/95 backdrop-blur-md border-b border-white/10 shadow-lg">

            {/* MAIN CONTAINER */}
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">

                {/* LEFT: HAMBURGER (MOBILE) */}
                <button
                    onClick={() => setOpen(!open)}
                    className="md:hidden text-3xl text-white"
                >
                    <span className="leading-none">
                        {open ? "✕" : "☰"}
                    </span>
                </button>

                {/* LOGO */}
                <div className="flex items-center gap-3">
                    <div className="bg-white px-2 py-1 rounded-lg shadow-md">
                        <img
                            src="/images/logo.jpg"
                            alt="GGS Logo"
                            className="h-10 w-auto transition hover:scale-105 duration-300"
                        />
                    </div>

                    <h1 className="text-lg md:text-2xl font-extrabold tracking-wide text-white leading-tight">
                        GGS{" "}
                        <span className="text-[#D28E28]">
                            INFRASTRUCTURE
                        </span>
                    </h1>
                </div>

                {/* DESKTOP MENU */}
                <ul className="hidden md:flex items-center gap-10 font-medium">
                    {links.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative text-sm tracking-wide transition duration-300
                                    after:content-[''] after:absolute after:left-0 after:-bottom-1
                                    after:w-0 after:h-[2px] after:bg-[#D28E28]
                                    hover:after:w-full after:transition-all
                                    ${isActive
                                        ? "text-[#D28E28]"
                                        : "text-white hover:text-[#D28E28]"
                                    }`
                                }
                            >
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
            </div>

            {/* MOBILE MENU */}
            <div
                className={`md:hidden bg-[#002B5B] border-t border-white/10 px-6 space-y-4 overflow-hidden transition-all duration-300 ${open
                        ? "max-h-screen py-5 opacity-100"
                        : "max-h-0 py-0 opacity-0"
                    }`}
            >
                {links.map((link) => (
                    <NavLink
                        key={link.path}
                        to={link.path}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                            `block py-2 text-lg transition ${isActive
                                ? "text-[#D28E28]"
                                : "text-white hover:text-[#D28E28]"
                            }`
                        }
                    >
                        {link.name}
                    </NavLink>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;