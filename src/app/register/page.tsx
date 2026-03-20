"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { User, Mail, Lock, ArrowRight, Camera, X, ShoppingBag, Store } from "lucide-react";

// --- Validation Schema ---
const registerSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be at least 6 characters"),
    role: z.enum(["USER", "SELLER"], {
        errorMap: () => ({ message: "Please select a role" }),
    }),
});

type RegisterFormData = z.infer<typeof registerSchema>;

const RegisterPage = () => {
    const [imagePreview, setImagePreview] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors, isSubmitting },
    } = useForm<RegisterFormData>({
        resolver: zodResolver(registerSchema),
        mode: "onChange", 
        defaultValues: { role: "USER" },
    });

    const selectedRole = watch("role");

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            setImagePreview(URL.createObjectURL(file));
        }
    };

    const onSubmit = async (data: RegisterFormData) => {
        console.log("Registered Data:", data);
        // ব্যাকএন্ড API কল এখানে হবে
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 p-6 py-20">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-md w-full bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-100 dark:border-slate-800 p-8 md:p-10"
            >
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Register</h2>
                    <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">Create your Smart Estate account</p>
                </div>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                    {/* --- Image Upload --- */}
                    <div className="flex flex-col items-center">
                        <div className="relative group">
                            <div
                                onClick={() => fileInputRef.current?.click()}
                                className="w-24 h-24 rounded-3xl bg-slate-100 dark:bg-slate-800 border-2 border-dashed border-slate-300 dark:border-slate-700 flex items-center justify-center cursor-pointer overflow-hidden hover:border-blue-500 transition-all shadow-inner"
                            >
                                {imagePreview ? (
                                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                ) : (
                                    <Camera className="w-8 h-8 text-slate-400 group-hover:text-blue-500 transition-colors" />
                                )}
                            </div>
                            {imagePreview && (
                                <button type="button" onClick={() => setImagePreview(null)} className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full shadow-lg hover:bg-red-600 transition-colors">
                                    <X className="w-3 h-3" />
                                </button>
                            )}
                        </div>
                        <input type="file" ref={fileInputRef} onChange={handleImageChange} className="hidden" accept="image/*" />
                        <span className="text-[10px] font-bold text-slate-400 uppercase mt-2 tracking-widest">Avatar</span>
                    </div>

                    {/* --- Role Selection (Removed Admin) --- */}
                    <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 ml-1">Account Type</label>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { id: "USER", label: "Buyer", icon: <ShoppingBag size={18} /> },
                                { id: "SELLER", label: "Seller/Agent", icon: <Store size={18} /> },
                            ].map((role) => (
                                <button
                                    key={role.id}
                                    type="button"
                                    onClick={() => setValue("role", role.id as any, { shouldValidate: true })}
                                    className={`flex items-center justify-center gap-3 py-4 rounded-2xl border-2 transition-all ${selectedRole === role.id
                                            ? "border-blue-500 bg-blue-50 dark:bg-blue-500/10 text-blue-600 shadow-lg shadow-blue-500/10"
                                            : "border-slate-100 dark:border-slate-800 text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                                        }`}
                                >
                                    {role.icon}
                                    <span className="text-xs font-bold">{role.label}</span>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* --- Input Fields (Single Row Each) --- */}
                    <div className="space-y-4">
                        {/* Full Name */}
                        <div className="space-y-1">
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    {...register("name")}
                                    placeholder="Full Name"
                                    className={`w-full bg-slate-50 dark:bg-slate-800/50 border ${errors.name ? 'border-red-400' : 'border-slate-100 dark:border-slate-800'} rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-white`}
                                />
                            </div>
                            {errors.name && <p className="text-red-500 text-[10px] font-bold ml-1 uppercase">{errors.name.message}</p>}
                        </div>

                        {/* Email */}
                        <div className="space-y-1">
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    {...register("email")}
                                    placeholder="Email Address"
                                    className={`w-full bg-slate-50 dark:bg-slate-800/50 border ${errors.email ? 'border-red-400' : 'border-slate-100 dark:border-slate-800'} rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-white`}
                                />
                            </div>
                            {errors.email && <p className="text-red-500 text-[10px] font-bold ml-1 uppercase">{errors.email.message}</p>}
                        </div>

                        {/* Password */}
                        <div className="space-y-1">
                            <div className="relative group">
                                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
                                <input
                                    type="password"
                                    {...register("password")}
                                    placeholder="Password"
                                    className={`w-full bg-slate-50 dark:bg-slate-800/50 border ${errors.password ? 'border-red-400' : 'border-slate-100 dark:border-slate-800'} rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-white`}
                                />
                            </div>
                            {errors.password && <p className="text-red-500 text-[10px] font-bold ml-1 uppercase">{errors.password.message}</p>}
                        </div>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.01 }}
                        whileTap={{ scale: 0.99 }}
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-2 transition-all mt-4 disabled:opacity-70"
                    >
                        {isSubmitting ? "Processing..." : "Create Account"}
                        <ArrowRight size={20} />
                    </motion.button>
                </form>

                <p className="text-center mt-8 text-slate-500 dark:text-slate-400 text-sm">
                    Already a member? <Link href="/login" className="text-blue-600 font-bold hover:underline">Login</Link>
                </p>
            </motion.div>
        </div>
    );
};

export default RegisterPage;