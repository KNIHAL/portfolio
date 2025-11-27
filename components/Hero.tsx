"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function Hero() {
    return (
        <section
            id="home"
            className="
                min-h-[78vh] w-full flex items-center justify-center 
                px-4 sm:px-6
            "
        >
            <div className="max-w-4xl mx-auto text-center select-none relative">

                {/* Glow */}
                <motion.div
                    initial={{ opacity: 0.3, scale: 0.96 }}
                    animate={{ opacity: 0.45, scale: 1 }}
                    transition={{ duration: 2 }}
                    className="
                        absolute left-1/2 top-1/2 
                        -translate-x-1/2 -translate-y-[56%] 
                        w-[360px] h-[360px] sm:w-[540px] sm:h-[540px]
                        bg-[radial-gradient(circle,rgba(0,180,255,0.12),transparent_70%)] 
                        blur-xl sm:blur-2xl
                        -z-10
                    "
                />

                {/* Title */}
                <motion.h1
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1 }}
                    className="
                        text-4xl sm:text-6xl font-bold 
                        leading-tight text-white
                        drop-shadow-[0_0_25px_rgba(0,200,255,0.2)]
                    "
                >
                    Hey, I’m <span className="text-cyan-300">Nihal</span>
                </motion.h1>

                {/* Roles */}
                <motion.h2
                    initial={{ y: 40, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 0.1 }}
                    className="
                        text-lg sm:text-xl 
                        text-cyan-200/80 mt-3
                        drop-shadow-[0_0_15px_rgba(0,200,255,0.14)]
                    "
                >
                    Product Builder • AI-Augmented Developer
                </motion.h2>

                {/* Description */}
                <motion.p
                    initial={{ y: 30, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 1.1, delay: 0.2 }}
                    className="
                        mt-4 sm:mt-6 
                        text-base sm:text-lg 
                        text-cyan-200/80 leading-relaxed 
                        max-w-2xl mx-auto
                    "
                >
                    I build real products fast — combining system design and AI-powered speed to turn ideas into smooth, usable experiences.
                </motion.p>

                {/* Buttons */}
                <Reveal threshold={0.05}>
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.75, delay: 0.35 }}
                        className="
                            mt-8 sm:mt-10 
                            flex flex-wrap mobile-center gap-3 sm:gap-4 justify-center
                        "
                    >
                        {/* Projects */}
                        <a
                            href="#projects"
                            className="
                                px-4 py-2 sm:px-6 sm:py-2.5 
                                rounded-lg text-sm sm:text-base font-medium text-white
                                bg-cyan-500/18 border border-cyan-400/25 backdrop-blur-md
                                shadow-[0_0_8px_rgba(0,200,255,0.14)]
                                hover:scale-[1.03] transition-transform
                            "
                        >
                            View Projects
                        </a>

                        {/* Resume */}
                        <a
                            href="/resume.pdf"
                            target="_blank"
                            className="
                                px-4 py-2 sm:px-6 sm:py-2.5 
                                rounded-lg text-sm sm:text-base font-medium text-white
                                bg-purple-600/18 border border-purple-400/25 backdrop-blur-md
                                shadow-[0_0_8px_rgba(160,0,255,0.14)]
                                hover:scale-[1.03] transition-transform
                            "
                        >
                            Download Resume
                        </a>

                        {/* About */}
                        <a
                            href="#about"
                            className="
                                px-4 py-2 sm:px-6 sm:py-2.5 
                                rounded-lg text-sm sm:text-base font-medium text-cyan-200
                                border border-cyan-400/20 bg-white/5 backdrop-blur-md
                                hover:scale-[1.03] transition-transform
                            "
                        >
                            About Me
                        </a>
                    </motion.div>
                </Reveal>
            </div>
        </section>
    );
}
