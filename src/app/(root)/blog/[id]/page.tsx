"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    Bed, Bath, Square, MapPin, Heart, Share2,
    CheckCircle2, Phone, Mail, ArrowLeft
} from "lucide-react";
import Link from "next/link";

const PropertyDetails = ({ params }: { params: { id: string } }) => {
    // এখানে আইডি অনুযায়ী ডাটা ফেচ হবে, এখন ডামি ডাটা দিচ্ছি
    const property = {
        id: params.id,
        name: "Modernist Glass Mansion",
        price: "$2,450,000",
        location: "Gulshan 2, Dhaka, Bangladesh",
        description: "Experience the pinnacle of luxury living in this architectural masterpiece. Featuring floor-to-ceiling glass walls, a private infinity pool, and a smart home system that controls everything from lighting to climate.",
        beds: 5,
        baths: 4,
        sqft: 4200,
        features: ["Smart Home System", "Infinity Pool", "Private Gym", "24/7 Security", "Garden Terrace"],
        images: [
            "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200",
            "https://images.unsplash.com/photo-1600607687940-477a128f0a85?q=80&w=800"
        ],
        agent: {
            name: "Zayan Ahmed",
            role: "Elite Property Consultant",
            img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=100"
        }
    };

    return (
        <div className="bg-[#F8FAFC] min-h-screen pb-20">
            {/* Top Navigation / Action Bar */}
            <div className="max-w-[1400px] mx-auto px-6 py-8 flex justify-between items-center">
                <Link href="/properties" className="flex items-center gap-2 text-xs font-black uppercase tracking-widest text-slate-400 hover:text-blue-600 transition-all">
                    <ArrowLeft size={16} /> Back to Gallery
                </Link>
                <div className="flex gap-4">
                    <button className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm text-slate-400 hover:text-rose-500 transition-all"><Heart size={20} /></button>
                    <button className="p-4 bg-white rounded-2xl border border-slate-100 shadow-sm text-slate-400 hover:text-blue-600 transition-all"><Share2 size={20} /></button>
                </div>
            </div>

            {/* Hero Image Gallery */}
            <div className="max-w-[1400px] mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-6 h-[600px]">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="md:col-span-8 h-full rounded-[3.5rem] overflow-hidden">
                    <img src={property.images[0]} className="w-full h-full object-cover" alt="" />
                </motion.div>
                <div className="md:col-span-4 grid grid-rows-2 gap-6 h-full">
                    <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="rounded-[2.5rem] overflow-hidden">
                        <img src={property.images[1]} className="w-full h-full object-cover" alt="" />
                    </motion.div>
                    <div className="bg-slate-900 rounded-[2.5rem] flex items-center justify-center text-white p-10 relative overflow-hidden group">
                        <p className="text-xl font-black italic uppercase tracking-tighter z-10">View All 12 Photos</p>
                        <div className="absolute inset-0 bg-blue-600 opacity-0 group-hover:opacity-90 transition-all duration-500"></div>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-[1400px] mx-auto px-6 mt-16 grid grid-cols-1 lg:grid-cols-12 gap-16">

                {/* Left Side: Details */}
                <div className="lg:col-span-8 space-y-12">
                    <div>
                        <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-4">
                            <MapPin size={14} /> {property.location}
                        </div>
                        <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none mb-6">
                            {property.name}
                        </h1>
                        <div className="text-4xl font-black italic text-slate-900 border-b border-slate-100 pb-10">
                            {property.price}
                        </div>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-8 bg-white p-10 rounded-[3rem] border border-slate-100">
                        <div className="text-center">
                            <Bed size={24} className="mx-auto text-blue-600 mb-2" />
                            <p className="text-xs font-black uppercase text-slate-400">Bedrooms</p>
                            <h4 className="text-xl font-black italic">{property.beds}</h4>
                        </div>
                        <div className="text-center border-x border-slate-100">
                            <Bath size={24} className="mx-auto text-blue-600 mb-2" />
                            <p className="text-xs font-black uppercase text-slate-400">Bathrooms</p>
                            <h4 className="text-xl font-black italic">{property.baths}</h4>
                        </div>
                        <div className="text-center">
                            <Square size={24} className="mx-auto text-blue-600 mb-2" />
                            <p className="text-xs font-black uppercase text-slate-400">Square Ft</p>
                            <h4 className="text-xl font-black italic">{property.sqft}</h4>
                        </div>
                    </div>

                    {/* Description */}
                    <div className="space-y-6">
                        <h4 className="text-2xl font-black uppercase italic tracking-tighter">About the Property</h4>
                        <p className="text-slate-500 text-lg leading-relaxed font-medium italic">"{property.description}"</p>
                    </div>

                    {/* Features */}
                    <div className="space-y-6">
                        <h4 className="text-2xl font-black uppercase italic tracking-tighter">Elite Amenities</h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                            {property.features.map((f, i) => (
                                <div key={i} className="flex items-center gap-3 p-4 bg-white border border-slate-50 rounded-2xl italic font-bold text-sm">
                                    <CheckCircle2 size={18} className="text-blue-600" /> {f}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Side: Contact Sidebar */}
                <div className="lg:col-span-4">
                    <div className="bg-white p-10 rounded-[3.5rem] border border-slate-100 shadow-sm sticky top-32">
                        <h4 className="text-xl font-black uppercase italic tracking-tighter mb-8">Request a Private Tour</h4>

                        {/* Agent Info */}
                        <div className="flex items-center gap-4 mb-10 pb-8 border-b border-slate-50">
                            <img src={property.agent.img} className="w-16 h-16 rounded-2xl object-cover" alt="" />
                            <div>
                                <p className="text-lg font-black italic uppercase tracking-tighter leading-none">{property.agent.name}</p>
                                <p className="text-[10px] font-black uppercase text-blue-600 tracking-widest mt-1">{property.agent.role}</p>
                            </div>
                        </div>

                        <form className="space-y-4">
                            <input type="text" placeholder="Your Name" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 italic font-bold text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
                            <input type="email" placeholder="Email Address" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 italic font-bold text-sm focus:ring-2 focus:ring-blue-600 outline-none" />
                            <textarea rows={4} placeholder="Message" className="w-full bg-slate-50 border-none rounded-2xl px-6 py-4 italic font-bold text-sm focus:ring-2 focus:ring-blue-600 outline-none"></textarea>
                            <button className="w-full bg-blue-600 text-white py-5 rounded-2xl font-black uppercase tracking-[0.2em] text-[10px] hover:bg-slate-900 transition-all shadow-xl shadow-blue-100">
                                Send Inquiry
                            </button>
                        </form>

                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <button className="flex items-center justify-center gap-2 py-4 bg-slate-50 rounded-2xl text-slate-600 hover:bg-slate-100 transition-all font-black uppercase text-[9px] tracking-widest">
                                <Phone size={14} /> Call Agent
                            </button>
                            <button className="flex items-center justify-center gap-2 py-4 bg-slate-50 rounded-2xl text-slate-600 hover:bg-slate-100 transition-all font-black uppercase text-[9px] tracking-widest">
                                <Mail size={14} /> Whatsapp
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PropertyDetails;