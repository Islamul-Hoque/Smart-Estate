"use client";

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Search, Bed, Bath, Square, ArrowRight, MapPin, Heart, ChevronDown
} from "lucide-react";
import Link from "next/link";

const AllProperties = () => {
    // ১. মেইন ডাটা সোর্স
    const allProperties = [
        { id: 1, name: "Modernist Glass Mansion", price: 2450000, type: "Villas", loc: "Gulshan 2, Dhaka", bed: 5, bath: 4, sqft: 4200, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800" },
        { id: 2, name: "Skyline Penthouse", price: 1800000, type: "Apartments", loc: "Banani, Dhaka", bed: 3, bath: 3, sqft: 2800, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800" },
        { id: 3, name: "Eco Green Villa", price: 3200000, type: "Villas", loc: "Purbachal, Dhaka", bed: 6, bath: 5, sqft: 5500, img: "https://images.unsplash.com/photo-1600566753190-17f0bbc2a6c4?q=80&w=800" },
        { id: 4, name: "Riverfront Retreat", price: 1250000, type: "Residential", loc: "Uttara, Dhaka", bed: 4, bath: 3, sqft: 3100, img: "https://images.unsplash.com/photo-1600607687940-477a128f0a85?q=80&w=800" },
        { id: 5, name: "The Ivory Estate", price: 4500000, type: "Villas", loc: "Baridhara, Dhaka", bed: 7, bath: 6, sqft: 7200, img: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=800" },
        { id: 6, name: "Minimalist Loft", price: 950000, type: "Apartments", loc: "Dhanmondi, Dhaka", bed: 2, bath: 2, sqft: 1800, img: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?q=80&w=800" },
        { id: 7, name: "Azure Bay House", price: 2100000, type: "Residential", loc: "Cox's Bazar", bed: 4, bath: 4, sqft: 3500, img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800" },
        { id: 8, name: "Urban Edge Condo", price: 1100000, type: "Apartments", loc: "Bashundhara, Dhaka", bed: 3, bath: 2, sqft: 2200, img: "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=800" },
    ];

    // ২. ফিল্টার স্টেটসমূহ
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedType, setSelectedType] = useState("All");
    const [sortBy, setSortBy] = useState("Default");
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 6;

    // ৩. মূল ফিল্টারিং লজিক (useMemo ব্যবহার করা হয়েছে পারফরম্যান্সের জন্য)
    const filteredProperties = useMemo(() => {
        let result = allProperties.filter((item) => {
            const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                item.loc.toLowerCase().includes(searchTerm.toLowerCase());
            const matchesType = selectedType === "All" || item.type === selectedType;
            return matchesSearch && matchesType;
        });

        // সর্টিং লজিক
        if (sortBy === "Low to High") result.sort((a, b) => a.price - b.price);
        if (sortBy === "High to Low") result.sort((a, b) => b.price - a.price);

        return result;
    }, [searchTerm, selectedType, sortBy]);

    // ৪. প্যাগিনেশন ক্যালকুলেশন
    const totalPages = Math.ceil(filteredProperties.length / cardsPerPage);
    const currentCards = filteredProperties.slice((currentPage - 1) * cardsPerPage, currentPage * cardsPerPage);

    return (
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-10">

            {/* --- Search & Sort Bar --- */}
            <div className="flex flex-col md:flex-row items-center gap-4 bg-white p-4 rounded-[2.5rem] border border-slate-200 shadow-sm mb-12">
                <div className="flex-1 flex items-center gap-3 px-6 py-3 bg-slate-50 rounded-full w-full">
                    <Search size={18} className="text-slate-400" />
                    <input
                        type="text"
                        placeholder="Search by name or location..."
                        className="bg-transparent border-none focus:outline-none w-full font-bold italic text-sm"
                        onChange={(e) => { setSearchTerm(e.target.value); setCurrentPage(1); }}
                    />
                </div>

                <select
                    onChange={(e) => setSortBy(e.target.value)}
                    className="px-6 py-3 bg-white border border-slate-200 rounded-full text-[10px] font-black uppercase outline-none cursor-pointer"
                >
                    <option value="Default">Sort By: Default</option>
                    <option value="Low to High">Price: Low to High</option>
                    <option value="High to Low">Price: High to Low</option>
                </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

                {/* --- Sidebar Filter --- */}
                <aside className="hidden lg:block lg:col-span-3 space-y-8 sticky top-32 h-fit">
                    <div className="bg-white p-8 rounded-[2.5rem] border border-slate-100 shadow-sm">
                        <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue-600 mb-6">Property Type</h4>
                        <div className="space-y-4">
                            {["All", "Residential", "Villas", "Apartments"].map((type) => (
                                <button
                                    key={type}
                                    onClick={() => { setSelectedType(type); setCurrentPage(1); }}
                                    className={`w-full text-left px-4 py-3 rounded-xl text-xs font-black uppercase transition-all ${selectedType === type ? "bg-blue-600 text-white shadow-lg shadow-blue-500/30" : "text-slate-400 hover:bg-slate-50"}`}
                                >
                                    {type}
                                </button>
                            ))}
                        </div>
                    </div>
                </aside>

                {/* --- Grid Content --- */}
                <div className="lg:col-span-9">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <AnimatePresence mode="popLayout">
                            {currentCards.map((item) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500"
                                >
                                    <div className="relative aspect-[4/5] overflow-hidden">
                                        <img src={item.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt="" />
                                    </div>
                                    <div className="p-8 space-y-4">
                                        <p className="text-[9px] font-black text-blue-500 uppercase tracking-widest">{item.loc}</p>
                                        <h3 className="text-xl font-black uppercase italic tracking-tighter">{item.name}</h3>
                                        <div className="text-2xl font-black italic tracking-tighter text-slate-900 border-b border-slate-50 pb-4">
                                            ${item.price.toLocaleString()}
                                        </div>
                                        <Link href={`/properties/${item.id}`} className="flex items-center justify-between group/btn pt-2">
                                            <span className="text-[9px] font-black uppercase text-slate-400 group-hover/btn:text-blue-600 transition-all">Details View</span>
                                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all"><ArrowRight size={18} /></div>
                                        </Link>
                                    </div>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>

                    {/* --- Dynamic Pagination Buttons --- */}
                    {totalPages > 1 && (
                        <div className="mt-20 flex justify-center items-center gap-3">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => { setCurrentPage(i + 1); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                                    className={`w-12 h-12 rounded-full font-black italic transition-all ${currentPage === i + 1 ? "bg-blue-600 text-white shadow-xl shadow-blue-500/30 scale-110" : "bg-white border border-slate-200 text-slate-400"}`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllProperties;