"use client";

import React from "react";
import Link from "next/link";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Home, ArrowLeft, Globe, Search, Telescope, Sparkles } from "lucide-react";

const NotFoundPage = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [10, -10]);
  const rotateY = useTransform(x, [-100, 100], [-10, 10]);

  function handleMouse(event: React.MouseEvent) {
    const rect = event.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(event.clientX - centerX);
    y.set(event.clientY - centerY);
  }

  return (
    <div 
      onMouseMove={handleMouse}
      // bg-slate-50 (লাইট) এবং dark:bg-slate-950 (ডার্ক) ব্যবহার করা হয়েছে
      className="min-h-screen bg-slate-50 dark:bg-slate-950 flex items-center justify-center p-6 overflow-hidden relative transition-colors duration-500"
    >
      {/* --- Dynamic Background Glows --- */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-blue-400/20 dark:bg-blue-600/10 blur-[150px] rounded-full animate-pulse" />
        <div className="absolute bottom-1/4 right-1/3 w-96 h-96 bg-indigo-400/20 dark:bg-indigo-600/10 blur-[150px] rounded-full animate-pulse delay-700" />
      </div>

      <motion.div 
        style={{ rotateX, rotateY, perspective: 1000 }}
        className="max-w-4xl w-full relative z-10"
      >
        {/* --- Main 3D Card --- */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-white/40 dark:bg-white/5 backdrop-blur-3xl border border-white dark:border-white/10 p-12 md:p-20 rounded-[4rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)] dark:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] relative overflow-hidden text-center"
        >
          {/* Top Decorative Line */}
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-50" />

          {/* Icon Section */}
          <div className="relative mb-12 flex justify-center">
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative"
            >
              <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-8 rounded-[2.5rem] shadow-2xl shadow-blue-500/20">
                <Telescope size={64} className="text-white stroke-[1.5px]" />
              </div>
              <motion.div 
                animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 text-amber-500"
              >
                <Sparkles size={32} />
              </motion.div>
            </motion.div>
          </div>

          {/* Text Section */}
          <div className="space-y-6">
            <motion.h1 
              // লাইট মোডে টেক্সট স্লেট কালার, ডার্ক মোডে হোয়াইট
              className="text-[8rem] md:text-[12rem] font-black leading-none tracking-tighter text-slate-900/10 dark:text-white/5 select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10 italic"
            >
              404
            </motion.h1>
            
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white uppercase italic tracking-tighter leading-none">
              The Listing <span className="text-blue-600 underline decoration-blue-500/30 underline-offset-8">Is Hidden</span>
            </h2>

            <p className="text-slate-500 dark:text-slate-400 max-w-md mx-auto text-lg font-medium leading-relaxed">
              Looks like this property has drifted away. Don&apos;t worry, we can guide you back to civilization.
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mt-12 relative z-20">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-10 py-5 bg-blue-600 text-white font-black uppercase tracking-widest text-xs rounded-2xl overflow-hidden shadow-xl shadow-blue-500/20"
              >
                <span className="relative z-10 flex items-center gap-3">
                  <Home size={18} /> Return To Base
                </span>
              </motion.button>
            </Link>

            <button 
              onClick={() => window.history.back()}
              className="px-10 py-5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-900 dark:text-white font-black uppercase tracking-widest text-xs rounded-2xl hover:bg-slate-50 dark:hover:bg-white/10 transition-all flex items-center gap-3"
            >
              <ArrowLeft size={18} /> Go Back
            </button>
          </div>
        </motion.div>

        {/* Footer Meta */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 opacity-40">
           <div className="flex items-center gap-2 text-slate-900 dark:text-white">
              <Globe size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">Smart Estate Network</span>
           </div>
           <div className="flex items-center gap-2 text-slate-900 dark:text-white">
              <Search size={14} />
              <span className="text-[10px] font-black uppercase tracking-[0.2em]">AI Powered Search</span>
           </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;