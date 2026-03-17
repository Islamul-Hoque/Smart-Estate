"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import { useState } from "react";

// shadcn components
import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
} from "@/components/ui/sheet";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ModeToggle } from "@/components/mode-toggle";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "Explore", href: "/explore" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();

    // 🔐 Replace with real auth later
    const isLoggedIn = true;

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/70 backdrop-blur">
            <div className="container mx-auto flex h-16 items-center justify-between px-4">

                {/* Logo */}
                <Link href="/" className="text-xl font-bold text-primary">
                    SmartEstate
                </Link>

                {/* Desktop Menu */}
                <nav className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition ${pathname === link.href
                                    ? "text-primary"
                                    : "text-muted-foreground hover:text-primary"
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {isLoggedIn && (
                        <Link href="/dashboard" className="text-sm font-medium hover:text-primary">
                            Dashboard
                        </Link>
                    )}
                </nav>

                {/* Right Side */}
                <div className="hidden md:flex items-center gap-4">
                    <ModeToggle />

                    {isLoggedIn ? (
                        <DropdownMenu>
                            <DropdownMenuTrigger>
                                <Avatar className="cursor-pointer">
                                    <AvatarFallback>SE</AvatarFallback>
                                </Avatar>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end">
                                <DropdownMenuItem>
                                    <Link href="/profile">Profile</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Link href="/settings">Settings</Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    Logout
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    ) : (
                        <>
                            <Button variant="ghost">
                                <Link href="/login">Login</Link>
                            </Button>
                            <Button>
                                <Link href="/register">Register</Link>
                            </Button>
                        </>
                    )}
                </div>

                {/* Mobile Menu */}
                <div className="md:hidden flex items-center gap-2">
                    <ModeToggle />

                    <Sheet>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu size={20} />
                            </Button>
                        </SheetTrigger>

                        <SheetContent side="left" className="w-64">
                            <div className="flex flex-col gap-4 mt-6">
                                {navLinks.map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm font-medium"
                                    >
                                        {link.name}
                                    </Link>
                                ))}

                                {isLoggedIn && (
                                    <Link href="/dashboard">Dashboard</Link>
                                )}

                                <hr />

                                {isLoggedIn ? (
                                    <>
                                        <Link href="/profile">Profile</Link>
                                        <Link href="/settings">Settings</Link>
                                        <button className="text-left">Logout</button>
                                    </>
                                ) : (
                                    <>
                                        <Link href="/login">Login</Link>
                                        <Link href="/register">Register</Link>
                                    </>
                                )}
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
}