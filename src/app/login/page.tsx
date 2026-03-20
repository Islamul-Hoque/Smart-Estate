"use client";

import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, Lock, ArrowRight, Chrome, Github, ShieldCheck, UserCircle, Briefcase } from "lucide-react";

// --- Validation Schema with Zod ---
const loginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

type LoginFormData = z.infer<typeof loginSchema>;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onChange", // টাইপ করার সাথে সাথে এরর হ্যান্ডেল করবে
  });

  // Demo Login Handler (Requirement 7: Auto-fill credentials)
  const handleDemoLogin = (role: "USER" | "SELLER" | "ADMIN") => {
    const credentials = {
      USER: { email: "buyer@example.com", pass: "123456" },
      SELLER: { email: "seller@example.com", pass: "123456" },
      ADMIN: { email: "admin@example.com", pass: "123456" },
    };

    setValue("email", credentials[role].email, { shouldValidate: true });
    setValue("password", credentials[role].pass, { shouldValidate: true });
  };

  const onSubmit = async (data: LoginFormData) => {
    console.log("Login Data:", data);
    // এখানে আপনার Express Backend API কল হবে
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 py-20">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 p-8 md:p-10"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic">Login</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm font-medium">Access your Smart Estate dashboard</p>
        </div>

        {/* --- Quick Demo Login Section --- */}
        <div className="space-y-3 mb-8">
          <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1 text-center block">Quick Demo Login</label>
          <div className="grid grid-cols-3 gap-2">
            <button onClick={() => handleDemoLogin("USER")} type="button" className="flex flex-col items-center py-2 rounded-xl border border-blue-100 dark:border-blue-900/30 bg-blue-50/30 dark:bg-blue-500/5 text-blue-600 dark:text-blue-400 hover:bg-blue-100 transition-all">
              <UserCircle size={18} /> <span className="text-[9px] font-bold mt-1 uppercase">Buyer</span>
            </button>
            <button onClick={() => handleDemoLogin("SELLER")} type="button" className="flex flex-col items-center py-2 rounded-xl border border-amber-100 dark:border-amber-900/30 bg-amber-50/30 dark:bg-amber-500/5 text-amber-600 dark:text-amber-400 hover:bg-amber-100 transition-all">
              <Briefcase size={18} /> <span className="text-[9px] font-bold mt-1 uppercase">Seller</span>
            </button>
            <button onClick={() => handleDemoLogin("ADMIN")} type="button" className="flex flex-col items-center py-2 rounded-xl border border-indigo-100 dark:border-indigo-900/30 bg-indigo-50/30 dark:bg-indigo-500/5 text-indigo-600 dark:text-indigo-400 hover:bg-indigo-100 transition-all">
              <ShieldCheck size={18} /> <span className="text-[9px] font-bold mt-1 uppercase">Admin</span>
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Field */}
          <div className="space-y-1">
            <div className="relative group flex items-center">
              <Mail className="absolute left-4 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors z-10" />
              <input 
                {...register("email")} 
                placeholder="Email Address" 
                className={`w-full bg-slate-50 dark:bg-slate-800/50 border ${errors.email ? 'border-red-400' : 'border-slate-100 dark:border-slate-800'} rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-white font-medium`} 
              />
            </div>
            {errors.email && <p className="text-red-500 text-[10px] font-bold ml-1 uppercase tracking-wider">{errors.email.message}</p>}
          </div>

          {/* Password Field */}
          <div className="space-y-1">
            <div className="relative group flex items-center">
              <Lock className="absolute left-4 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors z-10" />
              <input 
                type="password" 
                {...register("password")} 
                placeholder="Password" 
                className={`w-full bg-slate-50 dark:bg-slate-800/50 border ${errors.password ? 'border-red-400' : 'border-slate-100 dark:border-slate-800'} rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-white font-medium`} 
              />
            </div>
            {errors.password && <p className="text-red-500 text-[10px] font-bold ml-1 uppercase tracking-wider">{errors.password.message}</p>}
          </div>

          {/* Login Button */}
          <motion.button 
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 transition-all mt-2 disabled:opacity-70"
          >
            {isSubmitting ? "Authenticating..." : "Login"}
            <ArrowRight size={20} />
          </motion.button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-8 gap-4">
          <div className="h-[1px] bg-slate-100 dark:bg-slate-800 flex-1" />
          <span className="text-slate-400 text-[9px] font-bold uppercase tracking-[0.2em]">Social Login</span>
          <div className="h-[1px] bg-slate-100 dark:bg-slate-800 flex-1" />
        </div>

        {/* Social Buttons */}
        <div className="grid grid-cols-2 gap-4">
          <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-bold text-xs">
            <Chrome className="w-4 h-4 text-blue-500" /> Google
          </button>
          <button className="flex items-center justify-center gap-2 py-3 px-4 rounded-xl border border-slate-100 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300 font-bold text-xs">
            <Github className="w-4 h-4" /> GitHub
          </button>
        </div>

        {/* Footer */}
        <p className="text-center mt-10 text-slate-500 dark:text-slate-400 text-sm font-medium">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-600 font-bold hover:underline">
            Register Now
          </Link>
        </p>
      </motion.div>
    </div>
  );
};

export default LoginPage;