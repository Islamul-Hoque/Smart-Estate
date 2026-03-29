"use client";

import Link from "next/link";
import {
    Building2, Facebook, Twitter, Instagram,
    Linkedin, Mail, Phone, MapPin
} from "lucide-react";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        platform: [
            { name: "Browse Properties", path: "/properties" },
            { name: "How it Works", path: "/how-it-works" },
            { name: "Pricing", path: "/pricing" },
            { name: "AI Search Assistant", path: "/ai-search" },
        ],
        company: [
            { name: "About Us", path: "/about" },
            { name: "Our Blog", path: "/blog" },
            { name: "Careers", path: "/careers" },
            { name: "Contact Support", path: "/contact" },
        ],
        legal: [
            { name: "Privacy Policy", path: "/privacy" },
            { name: "Terms & Conditions", path: "/terms" },
            { name: "Cookie Policy", path: "/cookies" },
        ],
    };

    const socialLinks = [
        { icon: <Facebook size={18} />, href: "https://facebook.com" },
        { icon: <Twitter size={18} />, href: "https://twitter.com" },
        { icon: <Instagram size={18} />, href: "https://instagram.com" },
        { icon: <Linkedin size={18} />, href: "https://linkedin.com" },
    ];

    return (
        <footer className="bg-white dark:bg-slate-950 border-t border-slate-100 dark:border-slate-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-16">

                    {/* Brand Section */}
                    <div className="space-y-8">
                        <Link href="/" className="flex items-center space-x-3">
                            <div className="bg-blue-600 p-2.5 rounded-xl shadow-lg shadow-blue-200">
                                <Building2 className="text-white" size={22} />
                            </div>
                            <span className="text-2xl font-black uppercase italic tracking-tighter text-slate-900 dark:text-white">
                                SmartEstate
                            </span>
                        </Link>
                        <p className="text-slate-400 dark:text-slate-400 text-sm font-medium leading-relaxed italic">
                            Experience the future of real estate with our AI-powered platform. 
                            Find your dream home with smart recommendations.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    className="w-10 h-10 rounded-xl bg-slate-50 dark:bg-slate-900 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-200 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                        <div>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-8">
                                Platform
                            </h3>
                            <ul className="space-y-4">
                                {footerLinks.platform.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.path} className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-8">
                                Company
                            </h3>
                            <ul className="space-y-4">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.path} className="text-xs font-black uppercase tracking-widest text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-blue-600 mb-8">
                            Contact Us
                        </h3>
                        <div className="space-y-6">
                            <div className="flex items-start space-x-4 text-xs font-black uppercase tracking-widest text-slate-900 dark:text-slate-300 italic">
                                <MapPin size={18} className="text-blue-600 flex-shrink-0" />
                                <span>Gulshan 2, Crystal Tower<br />Dhaka, Bangladesh</span>
                            </div>
                            <div className="flex items-center space-x-4 text-xs font-black uppercase tracking-widest text-slate-900 dark:text-slate-300 italic">
                                <Phone size={18} className="text-blue-600 flex-shrink-0" />
                                <span>+880 1712 345678</span>
                            </div>
                            <div className="flex items-center space-x-4 text-xs font-black uppercase tracking-widest text-slate-900 dark:text-slate-300 italic">
                                <Mail size={18} className="text-blue-600 flex-shrink-0" />
                                <span>hello@smartestate.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-10 border-t border-slate-50 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 italic">
                        © {currentYear} SmartEstate. Built with ❤️ for the AI era.
                    </p>
                    <div className="flex space-x-8">
                        {footerLinks.legal.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-blue-600 transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;