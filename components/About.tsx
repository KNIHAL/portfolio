"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="min-h-screen w-full flex items-center justify-center px-6 py-32"
        >
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">

                {/* Glow Background */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 0.35, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 
                     w-[800px] h-[800px]
                     bg-[radial-gradient(circle,rgba(80,0,255,0.30),transparent_70%)]
                     blur-3xl -z-10"
                />

                {/* LEFT — Your Photo */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="flex justify-center"
                >
                    <div className="relative w-70 h-100 rounded-4xl overflow-hidden border border-cyan-400/30 shadow-[0_0_25px_rgba(0,200,255,0.35)]">
                        <Image
                            src="/nihal.jpg"
                            alt="Nihal"
                            fill
                            className="object-cover"
                        />

                        {/* Glow Ring */}
                        <div className="absolute inset-0 rounded-3xl bg-[radial-gradient(circle,rgba(0,200,255,0.25),transparent_70%)] mix-blend-overlay" />
                    </div>
                </motion.div>

                {/* RIGHT — Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="text-center md:text-left select-none"
                >
                    <h2 className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_25px_rgba(0,200,255,0.25)]">
                        About Me
                    </h2>

                    <p className="mt-8 text-lg md:text-xl text-cyan-200/80 leading-relaxed drop-shadow-[0_0_10px_rgba(0,200,255,0.35)]">
                        I am a <span className="text-cyan-300 font-medium">Product Builder</span>
                        who combines system design, product thinking, and rapid execution.
                        <br /><br />
                        I work like a modern tech generalist — designing clean systems,
                        understanding problems deeply, and turning ideas into real products.
                        <br /><br />
                        I use AI to accelerate
                        execution and focus more on clarity, strategy, and decision-making.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
