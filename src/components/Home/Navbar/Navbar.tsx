"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    const isLoggedIn = true; // replace later

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-white dark:bg-black">
            <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-4">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-blue-600">
                    SmartEstate
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium ${pathname === link.href
                                    ? "text-blue-600"
                                    : "text-gray-600 hover:text-blue-600"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {isLoggedIn && (
                        <Link href="/dashboard" className="text-sm hover:text-blue-600">
                            Dashboard
                        </Link>
                    )}
                </nav>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-4">
                    {isLoggedIn ? (
                        <div className="relative group">
                            <div className="w-9 h-9 flex items-center justify-center rounded-full bg-blue-600 text-white cursor-pointer">
                                SE
                            </div>

                            {/* Dropdown */}
                            <div className="absolute right-0 mt-2 w-40 bg-white dark:bg-gray-900 shadow-md rounded-md hidden group-hover:block">
                                <Link href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                                    Profile
                                </Link>
                                <Link href="/settings" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                                    Settings
                                </Link>
                                <button className="w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                                    Logout
                                </button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <Link href="/login" className="text-sm">
                                Login
                            </Link>
                            <Link
                                href="/register"
                                className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm"
                            >
                                Register
                            </Link>
                        </>
                    )}
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setMenuOpen(!menuOpen)}>
                        {menuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white dark:bg-black border-t px-4 py-4 space-y-3">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="block">
                            {link.name}
                        </Link>
                    ))}

                    {isLoggedIn && <Link href="/dashboard">Dashboard</Link>}

                    <hr />

                    {isLoggedIn ? (
                        <>
                            <Link href="/profile">Profile</Link>
                            <Link href="/settings">Settings</Link>
                            <button>Logout</button>
                        </>
                    ) : (
                        <>
                            <Link href="/login">Login</Link>
                            <Link href="/register">Register</Link>
                        </>
                    )}
                </div>
            )}
        </header>
    );
}