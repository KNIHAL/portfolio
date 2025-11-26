"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Hero() {
    return (
        <section id="home" className="min-h-[78vh] w-full flex items-center justify-center px-6">
            <div className="max-w-4xl mx-auto text-center select-none relative">
                <motion.div
                    initial={{ opacity: 0.35, scale: 0.98 }}
                    animate={{ opacity: 0.45, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[56%] w-[540px] h-[540px] bg-[radial-gradient(circle,rgba(0,180,255,0.12),transparent_70%)] blur-2xl -z-10"
                />

                <motion.h1 initial={{ y: 40, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1 }} className="text-5xl sm:text-6xl md:text-7xl font-bold text-white drop-shadow-[0_0_25px_rgba(0,200,255,0.2)]">
                    Product Builder
                    <br />
                    <span className="text-cyan-300">AI-Augmented Developer</span>
                </motion.h1>

                <motion.p initial={{ y: 30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1.2, delay: 0.2 }} className="mt-5 sm:mt-6 text-base sm:text-lg text-cyan-200/80 leading-relaxed max-w-2xl mx-auto">
                    I build real products fast — using AI, system design, and rapid prototyping to turn ideas into smooth experiences.
                </motion.p>

                <Reveal threshold={0.05}>
                    <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }} className="mt-8 flex flex-wrap justify-center gap-4">
                        <a href="#projects" className="px-6 py-2 rounded-lg text-sm font-medium text-white bg-cyan-500/18 border border-cyan-400/25 backdrop-blur-md shadow-[0_0_10px_rgba(0,200,255,0.12)] hover:scale-[1.03] transition-transform">View Projects</a>

                        <a href="/resume.pdf" target="_blank" className="px-6 py-2 rounded-lg text-sm font-medium text-white bg-purple-600/18 border border-purple-400/20 backdrop-blur-md shadow-[0_0_10px_rgba(160,0,255,0.12)] hover:scale-[1.03] transition-transform">Download Resume</a>

                        <a href="#about" className="px-6 py-2 rounded-lg text-sm font-medium text-cyan-200 border border-cyan-400/20 bg-white/4 backdrop-blur-md hover:scale-[1.03] transition-transform">About Me</a>
                    </motion.div>
                </Reveal>
            </div>
        </section>
    );
}
