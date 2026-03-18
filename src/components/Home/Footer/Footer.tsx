"use client";

import Link from "next/link";
import {
    Building2, Facebook, Twitter, Instagram,
    Linkedin, Mail, Phone, MapPin, ArrowRight
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
        { icon: <Facebook size={20} />, href: "https://facebook.com" },
        { icon: <Twitter size={20} />, href: "https://twitter.com" },
        { icon: <Instagram size={20} />, href: "https://instagram.com" },
        { icon: <Linkedin size={20} />, href: "https://linkedin.com" },
    ];

    return (
        <footer className="bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand Section */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center space-x-2">
                            <div className="bg-blue-600 p-2 rounded-lg">
                                <Building2 className="text-white" size={20} />
                            </div>
                            <span className="text-xl font-bold text-slate-900 dark:text-white">
                                SmartEstate
                            </span>
                        </Link>
                        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
                            Experience the future of real estate with our AI-powered platform.
                            Find your dream home with smart recommendations and 3D virtual tours.
                        </p>
                        <div className="flex space-x-4">
                            {socialLinks.map((social, index) => (
                                <a
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:text-blue-600 hover:border-blue-600 transition-all duration-300"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 gap-8 lg:col-span-2">
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">
                                Platform
                            </h3>
                            <ul className="space-y-4">
                                {footerLinks.platform.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.path} className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">
                                Company
                            </h3>
                            <ul className="space-y-4">
                                {footerLinks.company.map((link) => (
                                    <li key={link.name}>
                                        <Link href={link.path} className="text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div>
                        <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-6">
                            Contact Us
                        </h3>
                        <div className="space-y-4">
                            <div className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
                                <MapPin size={18} className="text-blue-600 flex-shrink-0" />
                                <span>123 Real Estate Ave, Suite 500<br />New York, NY 10001</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                                <Phone size={18} className="text-blue-600 flex-shrink-0" />
                                <span>+1 (555) 000-0000</span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm text-slate-600 dark:text-slate-400">
                                <Mail size={18} className="text-blue-600 flex-shrink-0" />
                                <span>support@smartestate.com</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-200 dark:border-slate-900 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                    <p className="text-xs text-slate-500 dark:text-slate-500">
                        © {currentYear} SmartEstate. All rights reserved. Built with ❤️ for the AI era.
                    </p>
                    <div className="flex space-x-6">
                        {footerLinks.legal.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                className="text-xs text-slate-500 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
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