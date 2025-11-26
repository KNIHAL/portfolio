"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
];

export default function Navbar() {
    return (
        <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-full max-w-6xl px-6"
        >
            <nav
                className="
          w-full flex items-center justify-between
          px-8 py-3
          backdrop-blur-xl
          bg-white/5
          border border-cyan-500/20
          rounded-2xl
          shadow-[0_0_14px_rgba(0,200,255,0.18)]

        "
            >
                {/* Left — Nav Links */}
                <div className="flex items-center gap-8">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="
                text-cyan-200 font-medium tracking-wide
                transition-all duration-300
                hover:text-white
                hover:drop-shadow-[0_0_6px_rgba(0,200,255,0.9)]
              "
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>

                {/* Right — Logo + Resume Button */}
                <div className="flex items-center gap-6">

                    {/* KNIhal Logo */}
                    <motion.div
                        whileHover={{ scale: 1.08 }}
                        className="
              text-xl font-semibold tracking-widest
              text-cyan-300
              hover:text-white
              transition-all duration-300
              drop-shadow-[0_0_6px_rgba(0,200,255,0.5)]
            "
                        style={{ fontFamily: 'monospace' }}
                    >
                        KNIhal
                    </motion.div>



                </div>
            </nav>
        </motion.div>
    );
}
