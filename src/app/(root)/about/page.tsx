"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Zap, Heart, Shield, Sparkles } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900 selection:bg-blue-100 selection:text-blue-600 transition-colors duration-500">
      
      {/* --- Floating Gradient Background (Subtle) --- */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-100/50 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-50/50 rounded-full blur-[120px]" />
      </div>

      {/* --- Section 1: Minimalist Intro --- */}
      <section className="pt-40 pb-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-600/5 border border-blue-600/10 text-blue-600">
            <Sparkles size={14} className="fill-blue-600" />
            <span className="text-[10px] font-black uppercase tracking-[0.3em]">The New Era of Living</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter uppercase italic leading-[0.85]">
            Art of <br />
            <span className="text-blue-600">Possibility.</span>
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 pt-12 items-end">
            <p className="text-xl md:text-2xl text-slate-500 font-medium max-w-xl leading-relaxed italic">
              We aren&apos;t just an agency. We are a technology company that happens to love architecture and human stories.
            </p>
            <div className="flex gap-12 border-t border-slate-200 pt-8">
              <div>
                <h4 className="text-3xl font-black italic">12K+</h4>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Properties</p>
              </div>
              <div>
                <h4 className="text-3xl font-black italic">4.9</h4>
                <p className="text-[10px] font-black uppercase text-slate-400 tracking-widest">Trust Score</p>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- Section 2: Interactive Bento Grid --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          
          {/* Large Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-8 bg-white border border-slate-200 rounded-[3rem] p-12 flex flex-col justify-between group overflow-hidden relative shadow-sm hover:shadow-2xl transition-all duration-500"
          >
            <div className="relative z-10">
              <Globe className="mb-6 text-blue-600" size={40} />
              <h3 className="text-4xl font-black uppercase italic tracking-tighter mb-4">Global Network, <br /> Local Soul.</h3>
              <p className="max-w-md text-slate-500 font-medium">From Manhattan penthouses to Bali eco-villas, we provide a seamless bridge to your next chapter.</p>
            </div>
            <div className="absolute -right-20 -bottom-20 w-96 h-96 bg-blue-50 rounded-full group-hover:scale-150 transition-transform duration-1000" />
            <ArrowUpRight className="absolute top-10 right-10 text-slate-300 group-hover:text-blue-600 group-hover:rotate-45 transition-all" size={32} />
          </motion.div>

          {/* Small Feature Card */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-4 bg-blue-600 rounded-[3rem] p-12 text-white flex flex-col justify-center shadow-xl shadow-blue-500/20"
          >
            <Zap size={40} className="mb-6 fill-white" />
            <h3 className="text-3xl font-black uppercase italic tracking-tighter mb-4">AI Search</h3>
            <p className="opacity-80 font-medium">Find your dream home with 98% accuracy matching.</p>
          </motion.div>

          {/* Bottom Card 1 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-5 bg-white border border-slate-200 rounded-[3rem] p-10 flex items-center gap-6 shadow-sm hover:shadow-xl transition-all"
          >
            <div className="w-16 h-16 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-500">
               <Heart size={30} fill="currentColor" />
            </div>
            <div>
               <h4 className="font-black uppercase italic text-xl">Loved by 8k+</h4>
               <p className="text-slate-500 text-sm">Verified happy homeowners.</p>
            </div>
          </motion.div>

          {/* Bottom Card 2 */}
          <motion.div 
            whileHover={{ y: -10 }}
            className="md:col-span-7 bg-slate-900 rounded-[3rem] p-10 flex items-center justify-between text-white shadow-xl"
          >
            <div className="flex items-center gap-6">
               <Shield size={30} className="text-blue-400" />
               <h4 className="font-black uppercase italic text-xl tracking-tighter">Blockchain Security</h4>
            </div>
            <button className="bg-white/10 hover:bg-white/20 px-6 py-3 rounded-2xl text-[10px] font-black uppercase tracking-widest backdrop-blur-md">Learn More</button>
          </motion.div>

        </div>
      </section>

      {/* --- Section 3: Clean CTA --- */}
      <section className="py-40 text-center px-6">
        <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter italic mb-12">
          Ready to <span className="text-blue-600">Elevate?</span>
        </h2>
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-slate-900 text-white px-16 py-8 rounded-[2rem] font-black uppercase tracking-[0.2em] text-xs hover:bg-blue-600 transition-all shadow-2xl"
        >
          Explore Properties
        </motion.button>
      </section>

    </div>
  );
};

export default AboutPage;