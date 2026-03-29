"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, User, Globe } from "lucide-react";

// --- Validation Schema ---
const contactSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters"),
    email: z.string().email("Invalid email address"),
    subject: z.string().min(5, "Subject must be at least 5 characters"),
    message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactFormData = z.infer<typeof contactSchema>;

const ContactPage = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
        mode: "onChange",
    });

    const onSubmit = async (data: ContactFormData) => {
        console.log("Contact Message:", data);
        // এখানে আপনার Backend API (POST /api/contact) কল হবে
        alert("Message sent successfully!");
        reset();
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-950 py-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* Header Section */}
                {/* Header Section */}
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter italic"
                    >
                        Get In Touch
                    </motion.h2> {/* এখানে স্পেসটি সরিয়ে দেওয়া হয়েছে */}
                    <p className="text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto font-medium">
                        Have questions about a property or want to list your estate? Our team is here to help you 24/7.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

                    {/* Contact Info Cards */}
                    <div className="space-y-6 lg:col-span-1">
                        {[
                            { icon: <Phone className="text-blue-500" />, title: "Call Us", detail: "+880 1234 567890" },
                            { icon: <Mail className="text-blue-500" />, title: "Email Us", detail: "support@smartestate.com" },
                            { icon: <MapPin className="text-blue-500" />, title: "Head Office", detail: "123 Business Avenue, Dhaka, BD" },
                            { icon: <Globe className="text-blue-500" />, title: "Website", detail: "www.smartestate.com" },
                        ].map((info, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-slate-900 p-6 rounded-[2rem] border border-slate-100 dark:border-slate-800 flex items-center gap-5 shadow-sm"
                            >
                                <div className="w-12 h-12 bg-blue-50 dark:bg-blue-500/10 rounded-2xl flex items-center justify-center shrink-0">
                                    {info.icon}
                                </div>
                                <div>
                                    <h4 className="text-[10px] font-black uppercase tracking-widest text-slate-400">{info.title}</h4>
                                    <p className="text-slate-900 dark:text-white font-bold">{info.detail}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 dark:border-slate-800 shadow-2xl shadow-blue-500/5"
                    >
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Name */}
                                <div className="space-y-1">
                                    <div className="relative flex items-center group">
                                        <User className="absolute left-4 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors z-10" />
                                        <input
                                            {...register("name")}
                                            placeholder="Your Name"
                                            className={`w-full bg-slate-50 dark:bg-slate-800/50 border ${errors.name ? 'border-red-400' : 'border-slate-100 dark:border-slate-800'} rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-white font-medium`}
                                        />
                                    </div>
                                    {errors.name && <p className="text-red-500 text-[10px] font-bold ml-1 uppercase">{errors.name.message}</p>}
                                </div>

                                {/* Email */}
                                <div className="space-y-1">
                                    <div className="relative flex items-center group">
                                        <Mail className="absolute left-4 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors z-10" />
                                        <input
                                            {...register("email")}
                                            placeholder="Email Address"
                                            className={`w-full bg-slate-50 dark:bg-slate-800/50 border ${errors.email ? 'border-red-400' : 'border-slate-100 dark:border-slate-800'} rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-white font-medium`}
                                        />
                                    </div>
                                    {errors.email && <p className="text-red-500 text-[10px] font-bold ml-1 uppercase">{errors.email.message}</p>}
                                </div>
                            </div>

                            {/* Subject */}
                            <div className="space-y-1">
                                <div className="relative flex items-center group">
                                    <MessageSquare className="absolute left-4 w-5 h-5 text-slate-400 group-focus-within:text-blue-500 transition-colors z-10" />
                                    <input
                                        {...register("subject")}
                                        placeholder="Subject"
                                        className={`w-full bg-slate-50 dark:bg-slate-800/50 border ${errors.subject ? 'border-red-400' : 'border-slate-100 dark:border-slate-800'} rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-white font-medium`}
                                    />
                                </div>
                                {errors.subject && <p className="text-red-500 text-[10px] font-bold ml-1 uppercase">{errors.subject.message}</p>}
                            </div>

                            {/* Message */}
                            <div className="space-y-1">
                                <textarea
                                    {...register("message")}
                                    rows={5}
                                    placeholder="Tell us how we can help..."
                                    className={`w-full bg-slate-50 dark:bg-slate-800/50 border ${errors.message ? 'border-red-400' : 'border-slate-100 dark:border-slate-800'} rounded-3xl py-4 px-6 outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all dark:text-white font-medium resize-none`}
                                />
                                {errors.message && <p className="text-red-500 text-[10px] font-bold ml-1 uppercase">{errors.message.message}</p>}
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                disabled={isSubmitting}
                                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-5 rounded-2xl shadow-xl shadow-blue-500/20 flex items-center justify-center gap-3 transition-all disabled:opacity-70"
                            >
                                {isSubmitting ? "Sending..." : "Send Message"}
                                <Send size={20} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-16 w-full h-[400px] bg-slate-200 dark:bg-slate-800 rounded-[3rem] overflow-hidden relative border border-slate-100 dark:border-slate-800 shadow-inner">
                    <iframe
                        title="Google Map"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d116834.00977793444!2d90.34924180479155!3d23.78077774447477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka%2C%20Bangladesh!5e0!3m2!1sen!2sbd!4v1709292000000!5m2!1sen!2sbd"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        allowFullScreen={true}
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="grayscale dark:invert-[0.9] dark:hue-rotate-180 opacity-80 hover:opacity-100 transition-opacity"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;