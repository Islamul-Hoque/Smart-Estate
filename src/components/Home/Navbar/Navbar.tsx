// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { motion, AnimatePresence } from "framer-motion";
// import {
//     Menu, X, User, LogOut, LayoutDashboard,
//     Settings, Home, Search, Info, Phone,
//     ChevronDown, Building2, Bell, BookOpen, PlusCircle
// } from "lucide-react";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(false);
//     const [isScrolled, setIsScrolled] = useState(false);
//     const [isProfileOpen, setIsProfileOpen] = useState(false);

//     // Replace with your actual auth state (e.g., from Redux or Context)
//     const [isLoggedIn, setIsLoggedIn] = useState(false);
//     const pathname = usePathname();

//     useEffect(() => {
//         const handleScroll = () => setIsScrolled(window.scrollY > 20);
//         window.addEventListener("scroll", handleScroll);
//         return () => window.removeEventListener("scroll", handleScroll);
//     }, []);

//     // Requirement: Min 4 routes when logged out, Min 6 when logged in
//     const publicRoutes = [
//         { name: "Home", path: "/", icon: <Home size={18} /> },
//         { name: "Properties", path: "/properties", icon: <Search size={18} /> },
//         { name: "About", path: "/about", icon: <Info size={18} /> },
//         { name: "Contact", path: "/contact", icon: <Phone size={18} /> },
//     ];

//     const loggedInExtraRoutes = [
//         { name: "Dashboard", path: "/dashboard", icon: <LayoutDashboard size={18} /> },
//         { name: "Blog", path: "/blog", icon: <BookOpen size={18} /> },
//     ];

//     const currentRoutes = isLoggedIn ? [...publicRoutes, ...loggedInExtraRoutes] : publicRoutes;

//     return (
//         <nav
//             className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled
//                     ? "bg-white/90 dark:bg-slate-950/90 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm py-3"
//                     : "bg-transparent py-5"
//                 }`}
//         >
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center h-12">

//                     {/* Logo Section */}
//                     <Link href="/" className="flex items-center space-x-2 group">
//                         <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
//                             <Building2 className="text-white" size={24} />
//                         </div>
//                         <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
//                             SmartEstate
//                         </span>
//                     </Link>

//                     {/* Desktop Navigation */}
//                     <div className="hidden md:flex items-center space-x-1">
//                         {currentRoutes.map((route) => (
//                             <Link
//                                 key={route.path}
//                                 href={route.path}
//                                 className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${pathname === route.path
//                                         ? "text-blue-600 dark:text-blue-400"
//                                         : "text-slate-600 dark:text-slate-300 hover:text-blue-600"
//                                     }`}
//                             >
//                                 {route.name}
//                                 {pathname === route.path && (
//                                     <motion.div
//                                         layoutId="activeNav"
//                                         className="absolute inset-0 bg-blue-50 dark:bg-blue-900/20 rounded-full -z-10"
//                                     />
//                                 )}
//                             </Link>
//                         ))}

//                         <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-4" />

//                         {isLoggedIn ? (
//                             <div className="flex items-center space-x-4">
//                                 <button className="p-2 text-slate-500 hover:text-blue-600 transition-colors relative">
//                                     <Bell size={20} />
//                                     <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900" />
//                                 </button>

//                                 {/* Profile Dropdown */}
//                                 <div className="relative">
//                                     <button
//                                         onClick={() => setIsProfileOpen(!isProfileOpen)}
//                                         onMouseEnter={() => setIsProfileOpen(true)}
//                                         className="flex items-center space-x-2 p-1 pr-3 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:ring-2 hover:ring-blue-500/20 transition-all"
//                                     >
//                                         <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white">
//                                             <User size={18} />
//                                         </div>
//                                         <ChevronDown size={14} className={`transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
//                                     </button>

//                                     <AnimatePresence>
//                                         {isProfileOpen && (
//                                             <motion.div
//                                                 initial={{ opacity: 0, y: 10, scale: 0.95 }}
//                                                 animate={{ opacity: 1, y: 0, scale: 1 }}
//                                                 exit={{ opacity: 0, y: 10, scale: 0.95 }}
//                                                 onMouseLeave={() => setIsProfileOpen(false)}
//                                                 className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl py-2 overflow-hidden shadow-blue-500/10"
//                                             >
//                                                 <div className="px-4 py-3 border-b border-slate-100 dark:border-slate-800 mb-1">
//                                                     <p className="text-[10px] uppercase tracking-wider font-bold text-slate-400">Account</p>
//                                                     <p className="text-sm font-semibold truncate text-slate-700 dark:text-slate-200">User Demo</p>
//                                                 </div>
//                                                 <Link href="/dashboard/profile" className="flex items-center space-x-3 px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors">
//                                                     <User size={16} className="text-blue-500" /> <span>My Profile</span>
//                                                 </Link>
//                                                 <Link href="/dashboard/settings" className="flex items-center space-x-3 px-4 py-2.5 text-sm text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors">
//                                                     <Settings size={16} className="text-blue-500" /> <span>Settings</span>
//                                                 </Link>
//                                                 <div className="h-[1px] bg-slate-100 dark:bg-slate-800 my-1" />
//                                                 <button className="w-full flex items-center space-x-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10 transition-colors">
//                                                     <LogOut size={16} /> <span>Logout</span>
//                                                 </button>
//                                             </motion.div>
//                                         )}
//                                     </AnimatePresence>
//                                 </div>
//                             </div>
//                         ) : (
//                             <div className="flex items-center space-x-3">
//                                 <Link href="/login" className="px-4 py-2 text-sm font-semibold text-slate-600 dark:text-slate-300 hover:text-blue-600 transition-colors">
//                                     Sign In
//                                 </Link>
//                                 <Link href="/register" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/25 active:scale-95">
//                                     Register
//                                 </Link>
//                             </div>
//                         )}
//                     </div>

//                     {/* Mobile Menu Toggle */}
//                     <div className="md:hidden flex items-center space-x-4">
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             className="p-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-xl hover:bg-blue-50 transition-colors"
//                         >
//                             {isOpen ? <X size={24} /> : <Menu size={24} />}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu Overlay */}
//             <AnimatePresence>
//                 {isOpen && (
//                     <motion.div
//                         initial={{ opacity: 0, height: 0 }}
//                         animate={{ opacity: 1, height: "auto" }}
//                         exit={{ opacity: 0, height: 0 }}
//                         className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 overflow-hidden"
//                     >
//                         <div className="px-6 py-8 space-y-4">
//                             {currentRoutes.map((route) => (
//                                 <Link
//                                     key={route.path}
//                                     href={route.path}
//                                     onClick={() => setIsOpen(false)}
//                                     className={`flex items-center space-x-4 p-3 rounded-xl transition-colors ${pathname === route.path
//                                             ? "bg-blue-50 text-blue-600 dark:bg-blue-900/20 dark:text-blue-400"
//                                             : "text-slate-600 dark:text-slate-300"
//                                         }`}
//                                 >
//                                     {route.icon}
//                                     <span className="text-lg font-medium">{route.name}</span>
//                                 </Link>
//                             ))}

//                             {!isLoggedIn && (
//                                 <div className="pt-6 border-t border-slate-100 dark:border-slate-800 grid grid-cols-2 gap-4">
//                                     <Link
//                                         href="/login"
//                                         onClick={() => setIsOpen(false)}
//                                         className="py-3 text-center text-slate-600 font-semibold border border-slate-200 dark:border-slate-700 rounded-xl"
//                                     >
//                                         Login
//                                     </Link>
//                                     <Link
//                                         href="/register"
//                                         onClick={() => setIsOpen(false)}
//                                         className="py-3 text-center bg-blue-600 text-white font-semibold rounded-xl shadow-md shadow-blue-500/20"
//                                     >
//                                         Register
//                                     </Link>
//                                 </div>
//                             )}
//                         </div>
//                     </motion.div>
//                 )}
//             </AnimatePresence>
//         </nav>
//     );
// };

// export default Navbar;


"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu, X, User, LogOut, LayoutDashboard,
    Settings, Home, Search, Info, Phone,
    ChevronDown, Building2, Bell
} from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    // Demo States (Replace with your Auth Provider logic)
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const publicRoutes = [
        { name: "Home", path: "/" },
        { name: "Properties", path: "/properties" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const loggedInRoutes = [
        ...publicRoutes,
        { name: "Dashboard", path: "/dashboard" },
        { name: "Blog", path: "/blog" },
    ];

    const currentRoutes = isLoggedIn ? loggedInRoutes : publicRoutes;

    return (
        <nav
            className={`fixed top-0 w-full z-[100] transition-all duration-500 ${isScrolled
                    ? "bg-white/80 dark:bg-slate-950/80 backdrop-blur-xl border-b border-slate-200 dark:border-slate-800 shadow-sm py-3"
                    : "bg-transparent py-5"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-12">

                    {/* Logo Section */}
                    <Link href="/" className="flex items-center space-x-2 group">
                        <div className="bg-blue-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
                            <Building2 className="text-white" size={24} />
                        </div>
                        <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
                            SmartEstate
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {currentRoutes.map((route) => (
                            <Link
                                key={route.path}
                                href={route.path}
                                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-blue-50 dark:hover:bg-slate-800 ${pathname === route.path
                                        ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/20"
                                        : "text-slate-600 dark:text-slate-300 hover:text-blue-600"
                                    }`}
                            >
                                {route.name}
                            </Link>
                        ))}

                        <div className="h-6 w-[1px] bg-slate-200 dark:bg-slate-700 mx-4" />

                        {isLoggedIn ? (
                            <div className="flex items-center space-x-4">
                                <button className="p-2 text-slate-500 hover:text-blue-600 transition-colors relative">
                                    <Bell size={20} />
                                    <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white dark:border-slate-900" />
                                </button>

                                {/* Profile Dropdown */}
                                <div className="relative">
                                    <button
                                        onClick={() => setIsProfileOpen(!isProfileOpen)}
                                        className="flex items-center space-x-2 p-1 pr-3 rounded-full bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 hover:ring-2 hover:ring-blue-500/20 transition-all"
                                    >
                                        <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white">
                                            <User size={18} />
                                        </div>
                                        <ChevronDown size={14} className={`transition-transform duration-300 ${isProfileOpen ? 'rotate-180' : ''}`} />
                                    </button>

                                    <AnimatePresence>
                                        {isProfileOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                className="absolute right-0 mt-3 w-56 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl shadow-xl py-2 overflow-hidden"
                                            >
                                                <div className="px-4 py-2 border-b border-slate-100 dark:border-slate-800 mb-2">
                                                    <p className="text-xs text-slate-400">Signed in as</p>
                                                    <p className="text-sm font-semibold truncate">john.doe@example.com</p>
                                                </div>
                                                <Link href="/dashboard/profile" className="flex items-center space-x-2 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800">
                                                    <User size={16} /> <span>My Profile</span>
                                                </Link>
                                                <Link href="/dashboard/settings" className="flex items-center space-x-2 px-4 py-2 text-sm text-slate-600 dark:text-slate-300 hover:bg-blue-50 dark:hover:bg-slate-800">
                                                    <Settings size={16} /> <span>Settings</span>
                                                </Link>
                                                <button className="w-full flex items-center space-x-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/10">
                                                    <LogOut size={16} /> <span>Logout</span>
                                                </button>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        ) : (
                            <Link href="/login" className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm font-semibold transition-all shadow-lg shadow-blue-500/25">
                                Get Started
                            </Link>
                        )}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden flex items-center space-x-4">
                        <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 rounded-lg">
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="md:hidden bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {currentRoutes.map((route) => (
                                <Link
                                    key={route.path}
                                    href={route.path}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center text-lg font-medium text-slate-600 dark:text-slate-300"
                                >
                                    {route.name}
                                </Link>
                            ))}
                            {!isLoggedIn && (
                                <Link href="/login" className="block w-full text-center py-3 bg-blue-600 text-white rounded-xl font-semibold">
                                    Sign In
                                </Link>
                            )}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;