"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard,
    Home,
    MessageSquare,
    Settings,
    LogOut,
    Menu,
    X,
    TrendingUp,
    Users,
    Plus,
    Search,
    Bell
} from "lucide-react";

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const stats = [
        { label: "Active Listings", value: "42", growth: "+12%", icon: <Home className="text-blue-600" /> },
        { label: "Total Views", value: "8.4k", growth: "+25%", icon: <TrendingUp className="text-indigo-600" /> },
        { label: "New Leads", value: "128", growth: "+18%", icon: <Users className="text-violet-600" /> },
    ];

    const menuItems = [
        { icon: <LayoutDashboard size={20} />, label: "Overview", active: true },
        { icon: <Home size={20} />, label: "Properties", active: false },
        { icon: <MessageSquare size={20} />, label: "Inquiries", active: false },
        { icon: <Settings size={20} />, label: "Settings", active: false },
    ];

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex text-slate-900">

            {/* --- Mobile Sidebar Overlay --- */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden"
                    />
                )}
            </AnimatePresence>

            {/* --- Sidebar --- */}
            <aside className={`
        fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-200 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0
        ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
      `}>
                <div className="h-full flex flex-col p-8">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black italic">S</div>
                        <span className="font-black uppercase tracking-tighter text-xl italic">Smart Estate</span>
                    </div>

                    <nav className="flex-1 space-y-2">
                        {menuItems.map((item, i) => (
                            <button
                                key={i}
                                className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${item.active ? "bg-blue-600 text-white shadow-lg shadow-blue-500/20" : "text-slate-400 hover:bg-slate-50 hover:text-slate-900"
                                    }`}
                            >
                                {item.icon}
                                <span className="text-sm uppercase tracking-widest">{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    <button className="flex items-center gap-4 px-6 py-4 text-slate-400 hover:text-rose-500 font-bold transition-colors">
                        <LogOut size={20} />
                        <span className="text-sm uppercase tracking-widest">Logout</span>
                    </button>
                </div>
            </aside>

            {/* --- Main Content --- */}
            <main className="flex-1 overflow-y-auto p-6 lg:p-12">

                {/* Header */}
                <header className="flex items-center justify-between mb-12">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 bg-white border border-slate-200 rounded-xl shadow-sm">
                            <Menu size={24} />
                        </button>
                        <h2 className="text-3xl font-black uppercase italic tracking-tighter">Dashboard</h2>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:flex items-center bg-white border border-slate-200 px-4 py-2 rounded-xl shadow-sm">
                            <Search size={18} className="text-slate-400" />
                            <input type="text" placeholder="Search..." className="bg-transparent border-none focus:outline-none px-3 text-sm font-medium" />
                        </div>
                        <button className="p-3 bg-white border border-slate-200 rounded-xl shadow-sm relative text-slate-500">
                            <Bell size={20} />
                            <span className="absolute top-3 right-3 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="w-12 h-12 bg-slate-200 rounded-xl overflow-hidden shadow-sm">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100" alt="Avatar" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                    {stats.map((stat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -5 }}
                            className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-sm flex flex-col justify-between"
                        >
                            <div className="flex justify-between items-start mb-6">
                                <div className="p-4 bg-slate-50 rounded-2xl">{stat.icon}</div>
                                <span className="text-xs font-black text-green-500 bg-green-50 px-3 py-1 rounded-full">{stat.growth}</span>
                            </div>
                            <div>
                                <p className="text-xs font-black uppercase tracking-widest text-slate-400 mb-1">{stat.label}</p>
                                <h3 className="text-4xl font-black italic">{stat.value}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- Recent Properties / Action Section --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Main List */}
                    <div className="lg:col-span-8 bg-white border border-slate-200 rounded-[3rem] p-10 shadow-sm">
                        <div className="flex items-center justify-between mb-8">
                            <h4 className="text-xl font-black uppercase italic tracking-tighter">My Properties</h4>
                            <button className="flex items-center gap-2 bg-slate-900 text-white px-5 py-2.5 rounded-xl text-xs font-black uppercase tracking-widest hover:bg-blue-600 transition-colors">
                                <Plus size={16} /> New Listing
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <table className="w-full text-left">
                                <thead>
                                    <tr className="border-b border-slate-100 italic text-slate-400 text-[10px] uppercase tracking-widest">
                                        <th className="pb-4 font-black">Property</th>
                                        <th className="pb-4 font-black">Status</th>
                                        <th className="pb-4 font-black">Price</th>
                                    </tr>
                                </thead>
                                <tbody className="text-sm">
                                    {[
                                        { name: "Oceanic Villa", status: "Active", price: "$2.4M", img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=100" },
                                        { name: "Penthouse Loft", status: "Pending", price: "$1.8M", img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=100" },
                                    ].map((row, i) => (
                                        <tr key={i} className="group cursor-pointer">
                                            <td className="py-5 flex items-center gap-4">
                                                <div className="w-12 h-12 bg-slate-100 rounded-xl overflow-hidden">
                                                    <img src={row.img} alt="house" className="w-full h-full object-cover" />
                                                </div>
                                                <span className="font-bold text-slate-700">{row.name}</span>
                                            </td>
                                            <td className="py-5">
                                                <span className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${row.status === "Active" ? "bg-blue-50 text-blue-600" : "bg-amber-50 text-amber-600"
                                                    }`}>{row.status}</span>
                                            </td>
                                            <td className="py-5 font-black text-slate-900">{row.price}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>

                    {/* Quick Support Card */}
                    <div className="lg:col-span-4 bg-blue-600 rounded-[3rem] p-10 text-white flex flex-col justify-between shadow-xl shadow-blue-500/20">
                        <div>
                            <h4 className="text-2xl font-black uppercase italic tracking-tighter mb-4">Elite Support</h4>
                            <p className="text-white/70 text-sm font-medium leading-relaxed">Need help with your listings? Our dedicated agents are available 24/7 for you.</p>
                        </div>
                        <button className="bg-white text-blue-600 w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-100 transition-all mt-10">
                            Chat With Agent
                        </button>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Dashboard;