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
            <header className="fixed top-0 left-0 w-full z-50 bg-[#002B5B]/95 backdrop-blur-md border-b border-white/10 shadow-lg">
                <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">

                    {/* LEFT: LOGO */}
                    <div className="flex items-center gap-3">
                        <div className="bg-white px-2 py-1 rounded-md shadow-md">
                            <img
                                src="/images/logo.jpg"
                                alt="Logo"
                                className="h-10 w-auto"
                            />
                        </div>

                        <h1 className="text-lg md:text-2xl font-extrabold text-white leading-tight">
                            GGS <span className="text-[#D28E28]">INFRASTRUCTURE</span>
                        </h1>
                    </div>

                    {/* DESKTOP MENU */}
                    <nav className="hidden md:flex items-center gap-8 font-medium">
                        {links.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) =>
                                    `relative text-sm tracking-wide transition duration-300
                                    ${isActive
                                        ? "text-[#D28E28]"
                                        : "text-white hover:text-[#D28E28]"
                                    }
                                    after:content-[''] after:absolute after:left-0 after:-bottom-1
                                    after:w-0 after:h-[2px] after:bg-[#D28E28]
                                    hover:after:w-full after:transition-all`
                                }
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </nav>

                    {/* MOBILE BUTTON */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-white text-3xl"
                    >
                        ☰
                    </button>
                </div>
            </header>

            {/* DARK OVERLAY */}
            <div
                className={`fixed inset-0 bg-black/60 z-40 transition-opacity duration-300
                ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}
                onClick={() => setOpen(false)}
            />

            {/* MOBILE SIDE DRAWER */}
            <aside
                className={`fixed top-0 right-0 h-full w-72 bg-[#001F3F] z-50 shadow-2xl transform transition-transform duration-300
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                {/* TOP */}
                <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">
                    <h2 className="text-white font-bold text-lg">Menu</h2>

                    <button
                        onClick={() => setOpen(false)}
                        className="text-white text-2xl"
                    >
                        ✕
                    </button>
                </div>

                {/* LINKS */}
                <div className="flex flex-col px-5 py-6 gap-5">
                    {links.map((link) => (
                        <NavLink
                            key={link.path}
                            to={link.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                `text-lg transition
                                ${isActive
                                    ? "text-[#D28E28]"
                                    : "text-white hover:text-[#D28E28]"
                                }`
                            }
                        >
                            {link.name}
                        </NavLink>
                    ))}
                </div>
            </aside>
        </>
    );
};

export default Navbar;