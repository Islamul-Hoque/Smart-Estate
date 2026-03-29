"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
    { id: "01", question: "How do I start searching for a property?", answer: "Simply use our advanced search bar on the homepage. You can filter by location, price range, and property type to find your perfect match instantly." },
    { id: "02", question: "Is there any service fee for buyers?", answer: "Our platform is completely free for property seekers. We only charge a small commission from sellers once a deal is successfully closed." },
    { id: "03", question: "Can I book a virtual 3D tour?", answer: "Yes, most of our premium listings include a 3D virtual tour option. Look for the badge on the property details page." },
    { id: "04", question: "How do I contact an agent directly?", answer: "Each property listing has an inquiry button. Clicking it will allow you to send a direct message or call the assigned agent." }
];

// --- Staggered Fast Right-to-Left Animation ---
const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1, // একটির পর একটি দ্রুত আসবে (দেরি কমানো হয়েছে)
        },
    },
};

const itemVariants = {
    hidden: { opacity: 0, x: 50 }, // ডান দিক থেকে শুরু হবে (দূরত্ব কমানো হয়েছে)
    visible: { 
        opacity: 1, 
        x: 0, 
        transition: { 
            duration: 0.3, // এনিমেশন স্পিড বাড়ানো হয়েছে
            ease: "easeOut" 
        } 
    }
};

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <section className="py-24 px-6 lg:px-12 bg-[#F8FAFC] overflow-hidden">
            <div className="max-w-[1400px] mx-auto">
                
                {/* --- Heading --- */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    className="text-center mb-20 space-y-4"
                >
                    <h2 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter text-slate-900">
                        Frequently Asked <br /> 
                        <span className="text-blue-600">Questions</span>
                    </h2>
                    <p className="text-slate-400 font-medium italic max-w-2xl mx-auto text-sm">
                        "Find quick answers to your most common inquiries instantly."
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    
                    {/* --- Left Side: Illustration --- */}
                    <motion.div 
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        className="lg:col-span-5"
                    >
                        <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm aspect-square flex items-center justify-center overflow-hidden">
                            <motion.img 
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                src="https://img.freepik.com/free-vector/questions-concept-illustration_114360-1513.jpg" 
                                alt="FAQ"
                                className="w-full h-full object-contain"
                            />
                        </div>
                    </motion.div>

                    {/* --- Right Side: Staggered Fast Scroll Animation --- */}
                    <motion.div 
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }} // অল্প ভিউতেই এনিমেশন শুরু হবে
                        variants={containerVariants}
                        className="lg:col-span-7 space-y-4"
                    >
                        {faqs.map((faq, index) => (
                            <motion.div 
                                key={index}
                                variants={itemVariants}
                                className={`group border rounded-[2.5rem] transition-all duration-300 ${
                                    openIndex === index 
                                    ? "border-blue-600 bg-white shadow-xl shadow-blue-50" 
                                    : "border-slate-200 bg-transparent hover:border-slate-300"
                                }`}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full flex items-center justify-between p-8 text-left"
                                >
                                    <div className="flex items-center gap-6">
                                        <span className={`text-[10px] font-black italic ${openIndex === index ? "text-blue-600" : "text-slate-300"}`}>
                                            {faq.id}
                                        </span>
                                        <span className="text-xs md:text-sm font-black uppercase tracking-widest text-slate-900 leading-tight">
                                            {faq.question}
                                        </span>
                                    </div>
                                    <div className={`p-2 rounded-xl transition-all ${openIndex === index ? "bg-blue-600 text-white" : "bg-slate-100 text-slate-400"}`}>
                                        {openIndex === index ? <Minus size={16} /> : <Plus size={16} />}
                                    </div>
                                </button>

                                <AnimatePresence>
                                    {openIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.2 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="px-8 pb-8 ml-14 text-slate-500 text-[11px] font-medium leading-relaxed italic border-t border-slate-50 pt-6">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Faq;