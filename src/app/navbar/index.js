"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // You can replace this with any icon set

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="flex items-center justify-between px-2 lg:px-16 py-4 bg-white shadow-md relative">
            <div className="flex items-center gap-2">
                <Image src="/images/logo.png" alt="Logo" width={40} height={40} />
                <span className="text-xl font-bold">TheSound</span>
            </div>

            {/* Desktop menu */}
            <ul className="hidden md:flex items-center gap-24">
                <li>
                    <Link href="/" className="hover:text-blue-500 font-medium">
                        Home
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="hover:text-blue-500 font-medium">
                        About
                    </Link>
                </li>
                <li>
                    <Link href="/service" className="hover:text-blue-500 font-medium">
                        Services
                    </Link>
                </li>
                <li>
                    <Link href="/contact" className="hover:text-blue-500 font-medium">
                        Contact
                    </Link>
                </li>
            </ul>

            {/* CTA Button (shown on md and above) */}
            <button className="hidden md:block lg:px-6 px-3 lg:py-3 py-2 bg-blue-600 text-white font-normal lg:font-medium rounded-xl shadow hover:bg-blue-700 transition">

                <Link href="/">
                    Listen Now
                </Link>
            </button>

            {/* Mobile menu toggle */}
            <div className="md:hidden">
                <button onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile menu dropdown */}
            {menuOpen && (
                <div className="absolute top-full left-0 w-full bg-white shadow-md md:hidden z-10">
                    <ul className="flex flex-col items-start p-4 gap-4">
                        <li>
                            <Link href="/" className="hover:text-blue-500 font-medium" onClick={() => setMenuOpen(false)}>
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" className="hover:text-blue-500 font-medium" onClick={() => setMenuOpen(false)}>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href="/service" className="hover:text-blue-500 font-medium" onClick={() => setMenuOpen(false)}>
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" className="hover:text-blue-500 font-medium" onClick={() => setMenuOpen(false)}>
                                Contact
                            </Link>
                        </li>
                        <li>
                            <button className="w-full mt-2 px-4 py-2 bg-blue-600 text-white rounded-xl shadow hover:bg-blue-700 transition">
                                Listen Now
                            </button>
                        </li>
                    </ul>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
