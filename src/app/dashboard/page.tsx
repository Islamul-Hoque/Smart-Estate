"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
    LayoutDashboard, Home, MessageSquare, Settings, LogOut, Menu, 
    TrendingUp, Users, Plus, Search, Bell, ShieldCheck, Heart, 
    CreditCard, CheckCircle, Clock 
} from "lucide-react";

const Dashboard = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    // --- ROLE CONFIGURATION (Dummy for now) ---
    // Change this to: "ADMIN", "AGENT", or "USER" to see the magic.
    const userRole = "AGENT"; 

    // --- DYNAMIC SIDEBAR ITEMS BASED ON ROLE ---
    const getMenuItems = () => {
        const commonItems = [
            { icon: <LayoutDashboard size={20} />, label: "Overview", active: true },
        ];

        if (userRole === "ADMIN") {
            return [
                ...commonItems,
                { icon: <Users size={20} />, label: "Manage Users" },
                { icon: <ShieldCheck size={20} />, label: "Verify Listings" },
                { icon: <TrendingUp size={20} />, label: "System Reports" },
                { icon: <Settings size={20} />, label: "Global Settings" },
            ];
        }

        if (userRole === "AGENT") {
            return [
                ...commonItems,
                { icon: <Home size={20} />, label: "My Listings" },
                { icon: <Plus size={20} />, label: "Add Property" },
                { icon: <MessageSquare size={20} />, label: "Inquiries" },
                { icon: <Settings size={20} />, label: "Profile Settings" },
            ];
        }

        // Default: USER
        return [
            ...commonItems,
            { icon: <Heart size={20} />, label: "Wishlist" },
            { icon: <Clock size={20} />, label: "Recent Views" },
            { icon: <CreditCard size={20} />, label: "My Payments" },
            { icon: <Settings size={20} />, label: "Settings" },
        ];
    };

    // --- DYNAMIC STATS BASED ON ROLE ---
    const getStats = () => {
        if (userRole === "ADMIN") {
            return [
                { label: "Total Revenue", value: "$452k", growth: "+15%", icon: <CreditCard className="text-blue-600" /> },
                { label: "Total Users", value: "2.4k", growth: "+8%", icon: <Users className="text-indigo-600" /> },
                { label: "Pending Verification", value: "14", growth: "Alert", icon: <ShieldCheck className="text-rose-600" /> },
            ];
        }
        if (userRole === "AGENT") {
            return [
                { label: "Active Listings", value: "12", growth: "+2", icon: <Home className="text-blue-600" /> },
                { label: "Lead Inquiries", value: "84", growth: "+12%", icon: <MessageSquare className="text-violet-600" /> },
                { label: "Total Earnings", value: "$14.2k", growth: "+20%", icon: <TrendingUp className="text-emerald-600" /> },
            ];
        }
        return [
            { label: "Saved Homes", value: "08", growth: "View All", icon: <Heart className="text-rose-600" /> },
            { label: "Booked Tours", value: "03", growth: "Upcoming", icon: <Clock className="text-blue-600" /> },
            { label: "Points Earned", value: "1.2k", growth: "Loyalty", icon: <TrendingUp className="text-indigo-600" /> },
        ];
    };

    const menuItems = getMenuItems();
    const stats = getStats();

    return (
        <div className="min-h-screen bg-[#F8FAFC] flex text-slate-900">

            {/* Mobile Sidebar Overlay */}
            <AnimatePresence>
                {isSidebarOpen && (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setSidebarOpen(false)}
                        className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-40 lg:hidden" />
                )}
            </AnimatePresence>

            {/* --- SIDEBAR --- */}
            <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white border-r border-slate-100 transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static 
                ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}>
                
                <div className="h-full flex flex-col p-8">
                    <div className="flex items-center gap-3 mb-12">
                        <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-black italic shadow-lg shadow-blue-200">S</div>
                        <span className="font-black uppercase tracking-tighter text-xl italic">Smart Estate</span>
                    </div>

                    <div className="mb-6 px-4">
                        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                            Role: {userRole}
                        </span>
                    </div>

                    <nav className="flex-1 space-y-2">
                        {menuItems.map((item, i) => (
                            <button key={i} className={`w-full flex items-center gap-4 px-6 py-4 rounded-2xl font-bold transition-all ${item.active ? "bg-slate-900 text-white shadow-xl shadow-slate-200" : "text-slate-400 hover:bg-slate-50 hover:text-slate-900"}`}>
                                {item.icon}
                                <span className="text-[11px] font-black uppercase tracking-widest">{item.label}</span>
                            </button>
                        ))}
                    </nav>

                    <button className="flex items-center gap-4 px-6 py-4 text-slate-400 hover:text-rose-500 font-bold transition-colors mt-auto border-t border-slate-50 pt-6">
                        <LogOut size={20} />
                        <span className="text-[11px] font-black uppercase tracking-widest">Logout</span>
                    </button>
                </div>
            </aside>

            {/* --- MAIN CONTENT --- */}
            <main className="flex-1 overflow-y-auto p-6 lg:p-12">
                
                {/* Header */}
                <header className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
                    <div>
                        <div className="flex items-center gap-4">
                            <button onClick={() => setSidebarOpen(true)} className="lg:hidden p-2 bg-white border border-slate-200 rounded-xl"><Menu size={24} /></button>
                            <h2 className="text-4xl font-black uppercase italic tracking-tighter">Welcome Back</h2>
                        </div>
                        <p className="text-slate-400 font-medium italic mt-1 ml-1">Here is what's happening today.</p>
                    </div>

                    <div className="flex items-center gap-4 self-end md:self-auto">
                        <div className="hidden md:flex items-center bg-white border border-slate-200 px-5 py-3 rounded-2xl shadow-sm">
                            <Search size={18} className="text-slate-400" />
                            <input type="text" placeholder="Search data..." className="bg-transparent border-none focus:outline-none px-3 text-sm font-bold italic" />
                        </div>
                        <button className="p-4 bg-white border border-slate-200 rounded-2xl relative text-slate-500 hover:bg-slate-50 transition-all">
                            <Bell size={20} />
                            <span className="absolute top-4 right-4 w-2 h-2 bg-rose-500 rounded-full border-2 border-white"></span>
                        </button>
                        <div className="w-14 h-14 bg-white p-1 border-2 border-blue-600 rounded-2xl overflow-hidden">
                            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100" alt="Avatar" className="w-full h-full object-cover rounded-xl" />
                        </div>
                    </div>
                </header>

                {/* Stats Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                    {stats.map((stat, i) => (
                        <motion.div key={i} whileHover={{ y: -5 }} className="bg-white p-10 rounded-[3rem] border border-slate-100 shadow-sm flex flex-col justify-between group hover:border-blue-100 transition-all">
                            <div className="flex justify-between items-start mb-8">
                                <div className="p-5 bg-slate-50 rounded-2xl group-hover:bg-blue-50 transition-colors">{stat.icon}</div>
                                <span className="text-[10px] font-black text-emerald-500 bg-emerald-50 px-4 py-1.5 rounded-full uppercase tracking-widest">{stat.growth}</span>
                            </div>
                            <div>
                                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">{stat.label}</p>
                                <h3 className="text-5xl font-black italic tracking-tighter">{stat.value}</h3>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* --- ROLE BASED ACTION SECTIONS --- */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Data List Section */}
                    <div className="lg:col-span-8 bg-white border border-slate-100 rounded-[3.5rem] p-12 shadow-sm">
                        <div className="flex items-center justify-between mb-10">
                            <h4 className="text-2xl font-black uppercase italic tracking-tighter">
                                {userRole === "ADMIN" ? "System Logs" : userRole === "AGENT" ? "My Properties" : "Recent Activity"}
                            </h4>
                            {userRole !== "USER" && (
                                <button className="flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-slate-900 transition-all shadow-lg shadow-blue-100">
                                    <Plus size={16} /> {userRole === "ADMIN" ? "Add User" : "New Listing"}
                                </button>
                            )}
                        </div>

                        {/* Dummy Table */}
                        <div className="space-y-6">
                            {[1, 2, 3].map((_, i) => (
                                <div key={i} className="flex items-center justify-between p-6 bg-slate-50/50 rounded-3xl border border-slate-50 hover:border-blue-100 transition-all cursor-pointer">
                                    <div className="flex items-center gap-5">
                                        <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-slate-300 border border-slate-100 italic font-black">IMG</div>
                                        <div>
                                            <p className="font-black italic text-lg uppercase tracking-tighter leading-none">Sample Item Title {i+1}</p>
                                            <p className="text-[10px] font-bold text-slate-400 mt-2 uppercase tracking-widest flex items-center gap-1"><Clock size={10}/> 2 hours ago</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-black text-blue-600 italic">$2,500</p>
                                        <span className="text-[8px] font-black uppercase bg-white px-2 py-1 rounded-md border border-slate-100">Status: OK</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Quick Info Card */}
                    <div className="lg:col-span-4 space-y-8">
                        <div className="bg-slate-900 rounded-[3.5rem] p-10 text-white relative overflow-hidden group">
                            <div className="relative z-10">
                                <h4 className="text-3xl font-black uppercase italic tracking-tighter mb-4 leading-none text-blue-400">
                                    {userRole === "USER" ? "Become an \nAgent?" : "Need \nAssistance?"}
                                </h4>
                                <p className="text-slate-400 text-xs font-bold leading-relaxed mb-10">
                                    Experience the elite level of management with Smart Estate.
                                </p>
                                <button className="w-full py-5 bg-white text-slate-900 rounded-2xl font-black uppercase tracking-widest text-[10px] hover:bg-blue-600 hover:text-white transition-all">
                                    {userRole === "USER" ? "Upgrade Now" : "Contact Support"}
                                </button>
                            </div>
                            <div className="absolute -right-10 -bottom-10 opacity-10 group-hover:rotate-12 transition-transform duration-700">
                                <ShieldCheck size={200} />
                            </div>
                        </div>
                    </div>

                </div>
            </main>
        </div>
    );
};

export default Dashboard;