"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-4 sm:px-6"
        >
            <nav
                className="
                    w-full flex items-center justify-between
                    px-6 py-3
                    backdrop-blur-xl bg-white/5
                    border border-cyan-500/20 rounded-2xl
                    shadow-[0_0_18px_rgba(0,200,255,0.25)]
                "
            >
                {/* Left — Logo */}
                <div
                    className="hover:text-white transition
                                hover:drop-shadow-[0_0_6px_rgba(0,200,255,0.9)] text-xl font-semibold tracking-widest text-cyan-300 drop-shadow-[0_0_6px_rgba(0,200,255,0.5)]"
                    style={{ fontFamily: "monospace" }}
                >
                    KNIhal
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="
                                text-cyan-200 text-sm font-medium
                                hover:text-white transition
                                hover:drop-shadow-[0_0_6px_rgba(0,200,255,0.9)]
                            "
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="md:hidden text-cyan-300"
                    onClick={() => setOpen(!open)}
                >
                    <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: open ? 90 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-2xl"
                    >
                        ☰
                    </motion.div>
                </button>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.4 }}
                        className="
                            md:hidden mt-3 px-6 py-5
                            rounded-2xl backdrop-blur-xl bg-white/5
                            border border-cyan-500/20
                            shadow-[0_0_18px_rgba(0,200,255,0.25)]
                        "
                    >
                        <div className="flex flex-col gap-4">
                            {navItems.map((item) => (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setOpen(false)}
                                    className="
                                        text-cyan-200 font-medium text-base
                                        hover:text-white transition
                                        hover:drop-shadow-[0_0_4px_rgba(0,200,255,0.6)]
                                    "
                                >
                                    {item.name}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}
