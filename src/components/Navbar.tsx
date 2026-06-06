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
            <header className="fixed top-0 left-0 w-full z-[999] bg-[#002B5B] shadow-lg">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    {/* LOGO */}
                    <div className="flex items-center gap-3">
                        <img
                            src="/images/logo.jpg"
                            className="h-10 bg-white p-1 rounded"
                            alt="logo"
                        />
                        <h1 className="text-white font-bold text-lg">
                            GGS <span className="text-[#D28E28]">INFRA</span>
                        </h1>
                    </div>

                    {/* DESKTOP */}
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

                    {/* HAMBURGER */}
                    <button
                        onClick={() => setOpen(true)}
                        className="md:hidden text-white text-3xl"
                    >
                        ☰
                    </button>
                </div>
            </header>

            {/* OVERLAY */}
            {open && (
                <div
                    onClick={() => setOpen(false)}
                    className="fixed inset-0 bg-black/60 z-[998]"
                />
            )}

            {/* MOBILE MENU */}
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-[#001F3F] z-[999] transition-transform duration-300
                ${open ? "translate-x-0" : "translate-x-full"}`}
            >
                <div className="flex justify-between items-center px-5 py-5 border-b border-white/10">
                    <h2 className="text-white font-bold">Menu</h2>
                    <button
                        onClick={() => setOpen(false)}
                        className="text-white text-2xl"
                    >
                        ✕
                    </button>
                </div>

                <div className="flex flex-col gap-6 px-6 py-6">
                    {links.map((l) => (
                        <NavLink
                            key={l.path}
                            to={l.path}
                            onClick={() => setOpen(false)}
                            className={({ isActive }) =>
                                isActive
                                    ? "text-[#D28E28]"
                                    : "text-white"
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