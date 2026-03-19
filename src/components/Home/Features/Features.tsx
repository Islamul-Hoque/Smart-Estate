"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShieldCheck, Zap, MapPin, Search, Headphones, Star } from "lucide-react";

const features = [
    {
        title: "Verified Listings",
        desc: "Every property in our database is manually verified by our team for your security.",
        icon: <ShieldCheck className="w-6 h-6" />,
        color: "from-blue-500 to-indigo-600",
    },
    {
        title: "Smart Search AI",
        desc: "Find the perfect home in seconds using our advanced AI-driven search filters.",
        icon: <Search className="w-6 h-6" />,
        color: "from-indigo-500 to-purple-600",
    },
    {
        title: "Instant Booking",
        desc: "Experience a seamless and secure booking process with integrated online payments.",
        icon: <Zap className="w-6 h-6" />,
        color: "from-purple-500 to-pink-600",
    },
    {
        title: "24/7 Support",
        desc: "Our dedicated support team is available around the clock to assist with your needs.",
        icon: <Headphones className="w-6 h-6" />,
        color: "from-sky-500 to-blue-600",
    },
];

const phoneSlides = [
    "https://images.unsplash.com/photo-1582407947304-fd86f028f716?q=80&w=600",
    "https://images.unsplash.com/photo-1598228723793-52759bba239c?q=80&w=600",
    "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=600",
    "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600",
    "https://images.unsplash.com/photo-1651898896620-b9c8b360cb34?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",

];

const Features = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        if (isDragging) return;
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % phoneSlides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [isDragging]);

    const onDragEnd = (event: any, info: any) => {
        setIsDragging(false);
        const offset = info.offset.x;
        const velocity = info.velocity.x;

        if (offset < -50 || velocity < -500) {
            setCurrentSlide((prev) => (prev + 1) % phoneSlides.length);
        } else if (offset > 50 || velocity > 500) {
            setCurrentSlide((prev) => (prev - 1 + phoneSlides.length) % phoneSlides.length);
        }
    };

    return (
        <section className="py-32 bg-slate-50 dark:bg-slate-950/50 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">

                <div className="text-center max-w-2xl mx-auto mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: false }}
                        className="text-4xl md:text-5xl font-black text-slate-900 dark:text-white leading-tight"
                    >
                        Unlock a <span className="text-blue-600">Smart</span> Way of Living
                    </motion.h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">

                    {/* --- Left Side: Draggable Mobile Mockup --- */}
                    <div className="relative flex justify-center order-2 lg:order-1 pt-12 lg:pt-0">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-[300px] h-[600px] md:w-[320px] md:h-[640px] bg-slate-950 rounded-[3rem] border-[14px] border-slate-900 shadow-[0_50px_100px_rgba(37,99,235,0.15)] overflow-hidden z-10 cursor-grab active:cursor-grabbing"
                        >
                            {/* Notch */}
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-slate-900 rounded-b-2xl z-30 flex items-center justify-center">
                                <div className="w-10 h-1 bg-slate-800 rounded-full" />
                            </div>

                            {/* Phone Content Slider with Drag */}
                            <div className="relative w-full h-full">
                                <AnimatePresence mode="wait">
                                    <motion.img
                                        key={currentSlide}
                                        src={phoneSlides[currentSlide]}
                                        alt="SmartEstate Preview"
                                        drag="x"
                                        dragConstraints={{ left: 0, right: 0 }}
                                        onDragStart={() => setIsDragging(true)}
                                        onDragEnd={onDragEnd}
                                        initial={{ opacity: 0, x: 100 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -100 }}
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        className="absolute inset-0 w-full h-full object-cover select-none"
                                    />
                                </AnimatePresence>
                            </div>

                            {/* Minimal App Overlay */}
                            <div className="absolute bottom-8 left-6 right-6 bg-white/10 backdrop-blur-xl p-4 rounded-2xl text-white z-20 border border-white/20 pointer-events-none">
                                <div className="flex justify-between items-center mb-1">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-blue-300">Top Rated</span>
                                    <div className="flex items-center gap-1 text-yellow-400">
                                        <Star size={10} fill="currentColor" /> <span className="text-[10px] text-white font-bold">4.9</span>
                                    </div>
                                </div>
                                <h4 className="text-sm font-bold truncate">Premium Modern Villa</h4>
                                <p className="text-xs opacity-80">$4,500 / Month</p>
                            </div>

                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none z-20" />
                        </motion.div>

                        <div className="absolute -inset-10 bg-gradient-to-br from-blue-500/10 to-indigo-500/10 blur-[100px] -z-10 animate-pulse" />
                    </div>

                    {/* --- Right Side: Better Hover Effect Features --- */}
                    <div className="relative space-y-12 order-1 lg:order-2">
                        {/* Vertical Path Line */}
                        <div className="absolute left-6 top-6 bottom-6 w-0.5 bg-slate-100 dark:bg-slate-800 hidden md:block">
                            <motion.div
                                initial={{ height: 0 }}
                                whileInView={{ height: "100%" }}
                                transition={{ duration: 1.5, delay: 0.5 }}
                                className="w-full bg-gradient-to-b from-blue-500 to-indigo-600"
                            />
                        </div>

                        {features.map((feature, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: 50 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: false, amount: 0.8 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                className="relative pl-0 md:pl-20 group"
                            >
                                {/* Floating Icon Bullet */}
                                <div className={`hidden md:flex absolute left-0 top-0 w-14 h-14 bg-gradient-to-br ${feature.color} text-white rounded-2xl items-center justify-center shadow-lg group-hover:scale-125 group-hover:rotate-[15deg] transition-all duration-500 z-10 border-4 border-white dark:border-slate-950`}>
                                    <motion.div
                                        animate={{ y: [0, -2, 0] }}
                                        transition={{ duration: 2, repeat: Infinity }}
                                    >
                                        {feature.icon}
                                    </motion.div>
                                </div>

                                {/* Premium Card Content */}
                                <div className="relative p-8 rounded-[2.5rem] bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 transition-all duration-500 group-hover:border-blue-500/30 group-hover:shadow-[0_20px_50px_rgba(37,99,235,0.1)] group-hover:-translate-y-2 overflow-hidden">

                                    {/* Corner Glow Effect */}
                                    <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity duration-500`} />

                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2 flex items-center gap-3">
                                        <span className={`md:hidden p-2.5 bg-gradient-to-br ${feature.color} rounded-xl text-white`}>{feature.icon}</span>
                                        <span className="group-hover:text-blue-600 transition-colors duration-300">{feature.title}</span>
                                    </h3>
                                    <p className="text-slate-500 dark:text-slate-400 leading-relaxed text-sm group-hover:text-slate-600 dark:group-hover:text-slate-300 transition-colors duration-300">
                                        {feature.desc}
                                    </p>

                                    {/* Bottom Animated Indicator */}
                                    <div className="absolute bottom-0 left-8 right-8 h-1 bg-gradient-to-r from-transparent via-blue-500/20 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                                </div>
                            </motion.div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Features;