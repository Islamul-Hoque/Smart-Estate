"use client";

import React from "react";
import { motion } from "framer-motion";
import { Bed, Bath, Maximize, MapPin, Heart } from "lucide-react";

const properties = [
    {
        id: 1,
        title: "Modern Family Villa",
        location: "Gulshan, Dhaka",
        price: "$850,000",
        beds: 4,
        baths: 3,
        sqft: "2,400",
        image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=1000&auto=format&fit=crop",
        tag: "For Sale"
    },
    {
        id: 2,
        title: "Luxury Penthouse",
        location: "Banani, Dhaka",
        price: "$1,200,000",
        beds: 5,
        baths: 4,
        sqft: "3,800",
        image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1000&auto=format&fit=crop",
        tag: "Featured"
    },
    {
        id: 3,
        title: "Skyline Apartment",
        location: "Dhanmondi, Dhaka",
        price: "$450,000",
        beds: 3,
        baths: 2,
        sqft: "1,650",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1000&auto=format&fit=crop",
        tag: "New Build"
    }
];

const FeaturedProperties = () => {
    return (
        <section className="py-24 px-6 lg:px-12 bg-white">
            <div className="max-w-[1400px] mx-auto">
                
                {/* --- Header --- */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="space-y-4">
                        <motion.span 
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-blue-600 font-bold uppercase tracking-[0.3em] text-xs"
                        >
                            Exclusive Listings
                        </motion.span>
                        <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-none tracking-tighter uppercase italic">
                            Featured <span className="text-blue-600">Properties</span>
                        </h2>
                    </div>
                    <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-lg shadow-slate-200"
                    >
                        Explore All
                    </motion.button>
                </div>

                {/* --- Properties Grid --- */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {properties.map((property, index) => (
                        <motion.div
                            key={property.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="group bg-white rounded-[2.5rem] border border-slate-100 overflow-hidden hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
                        >
                            {/* Image Wrapper */}
                            <div className="relative h-[280px] overflow-hidden">
                                <img 
                                    src={property.image} 
                                    alt={property.title} 
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-[10px] font-black uppercase tracking-widest text-slate-900">
                                    {property.tag}
                                </div>
                                <button className="absolute top-6 right-6 p-3 bg-white/20 backdrop-blur-md hover:bg-white rounded-full text-white hover:text-red-500 transition-all border border-white/30">
                                    <Heart size={18} fill="currentColor" className="text-transparent hover:text-red-500" />
                                </button>
                                <div className="absolute bottom-6 left-6 text-white">
                                    <p className="text-2xl font-black italic tracking-tighter drop-shadow-lg">{property.price}</p>
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 space-y-6">
                                <div className="space-y-2">
                                    <h3 className="text-xl font-black text-slate-900 uppercase tracking-tight group-hover:text-blue-600 transition-colors">
                                        {property.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-slate-400">
                                        <MapPin size={14} className="text-blue-500" />
                                        <span className="text-xs font-medium italic">{property.location}</span>
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="h-[1px] w-full bg-slate-50"></div>

                                {/* Specs */}
                                <div className="flex justify-between items-center">
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="flex items-center gap-2 text-slate-900 font-bold">
                                            <Bed size={16} className="text-blue-500" />
                                            <span className="text-sm">{property.beds}</span>
                                        </div>
                                        <span className="text-[10px] uppercase font-bold text-slate-400">Beds</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1 border-x border-slate-100 px-8">
                                        <div className="flex items-center gap-2 text-slate-900 font-bold">
                                            <Bath size={16} className="text-blue-500" />
                                            <span className="text-sm">{property.baths}</span>
                                        </div>
                                        <span className="text-[10px] uppercase font-bold text-slate-400">Baths</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-1">
                                        <div className="flex items-center gap-2 text-slate-900 font-bold">
                                            <Maximize size={16} className="text-blue-500" />
                                            <span className="text-sm">{property.sqft}</span>
                                        </div>
                                        <span className="text-[10px] uppercase font-bold text-slate-400">Sqft</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProperties;