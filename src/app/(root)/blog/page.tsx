"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User, Tag, Search } from "lucide-react";
import Link from "next/link";

const BlogPage = () => {
    const blogs = [
        {
            id: 1,
            title: "Top 10 Locations for Real Estate Investment in 2026",
            excerpt: "Discover the most promising neighborhoods in Dhaka that promise high returns on your investment...",
            author: "Admin",
            date: "Mar 20, 2026",
            category: "Investment",
            img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=800"
        },
        {
            id: 2,
            title: "Modern Interior Trends for Minimalist Penthouses",
            excerpt: "Learn how to transform your apartment with the latest minimalist design trends from European architects...",
            author: "Sarah J.",
            date: "Mar 15, 2026",
            category: "Interior",
            img: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?q=80&w=800"
        },
        {
            id: 3,
            title: "A Beginner's Guide to Smart Home Automation",
            excerpt: "Everything you need to know about making your villa smart, from automated lighting to AI security...",
            author: "Tech Guru",
            date: "Mar 10, 2026",
            category: "Smart Home",
            img: "https://images.unsplash.com/photo-1558002038-103792e01041?q=80&w=800"
        }
    ];

    return (
        <div className="bg-[#F8FAFC] min-h-screen py-20 px-6 lg:px-12">
            {/* --- Header Section --- */}
            <div className="max-w-[1400px] mx-auto text-center mb-20">
                <motion.h4
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[10px] font-black uppercase tracking-[0.4em] text-blue-600 mb-4"
                >
                    Insights & Articles
                </motion.h4>
                <motion.h2
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter leading-none"
                >
                    Elite <span className="text-blue-600">Journal</span>
                </motion.h2>
            </div>

            {/* --- Blog Grid --- */}
            <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {blogs.map((blog, i) => (
                    <motion.article
                        key={blog.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 }}
                        className="group bg-white rounded-[3rem] overflow-hidden border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500"
                    >
                        {/* Image */}
                        <div className="relative aspect-[16/10] overflow-hidden">
                            <img src={blog.img} alt={blog.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" />
                            <div className="absolute top-6 left-6">
                                <span className="bg-white/90 backdrop-blur-md px-4 py-2 rounded-full text-[9px] font-black uppercase tracking-widest shadow-sm">
                                    {blog.category}
                                </span>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-10 space-y-6">
                            <div className="flex items-center gap-6 text-slate-400 text-[9px] font-black uppercase tracking-widest">
                                <span className="flex items-center gap-2"><Calendar size={14} className="text-blue-600" /> {blog.date}</span>
                                <span className="flex items-center gap-2"><User size={14} className="text-blue-600" /> {blog.author}</span>
                            </div>

                            <h3 className="text-2xl font-black uppercase italic tracking-tighter leading-tight group-hover:text-blue-600 transition-colors">
                                {blog.title}
                            </h3>

                            <p className="text-slate-400 text-sm font-medium leading-relaxed italic">
                                "{blog.excerpt}"
                            </p>

                            <Link href={`/blog/${blog.id}`} className="flex items-center justify-between group/btn pt-4 border-t border-slate-50">
                                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 group-hover/btn:text-blue-600 transition-all">Read Story</span>
                                <div className="w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center group-hover/btn:bg-blue-600 group-hover/btn:text-white transition-all">
                                    <ArrowRight size={20} />
                                </div>
                            </Link>
                        </div>
                    </motion.article>
                ))}
            </div>

            {/* --- Newsletter --- */}
            <div className="max-w-[1000px] mx-auto mt-32 bg-slate-900 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden group">
                <div className="relative z-10">
                    <h3 className="text-4xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6">
                        Stay Ahead of the Market
                    </h3>
                    <p className="text-slate-400 text-sm font-bold uppercase tracking-widest mb-10 italic">Subscribe to our newsletter for exclusive insights.</p>
                    <div className="flex flex-col md:flex-row gap-4 max-w-lg mx-auto bg-white/5 p-2 rounded-[2rem] border border-white/10">
                        <input type="email" placeholder="Your email address" className="bg-transparent border-none focus:outline-none px-6 py-4 text-white w-full italic font-bold" />
                        <button className="bg-blue-600 text-white px-10 py-4 rounded-[1.5rem] font-black uppercase tracking-widest text-[10px] hover:bg-white hover:text-blue-600 transition-all">Join</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;