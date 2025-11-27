"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
    return (
        <section
            id="about"
            className="
                min-h-screen w-full 
                flex items-center justify-center 
                px-4 sm:px-6 
                py-24 sm:py-32
            "
        >
            <div
                className="
                    max-w-6xl mx-auto
                    grid grid-cols-1 md:grid-cols-2
                    gap-12 sm:gap-16
                    items-center relative
                "
            >

                {/* Glow Background */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 0.28, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="
                        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[520px] h-[520px] sm:w-[780px] sm:h-[780px]
                        bg-[radial-gradient(circle,rgba(80,0,255,0.25),transparent_70%)]
                        blur-xl sm:blur-2xl
                        -z-10
                    "
                />

                {/* LEFT — Photo */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="flex justify-center"
                >
                    <div
                        className="
                            relative
                            w-56 h-72 sm:w-72 sm:h-96
                            rounded-3xl overflow-hidden
                            border border-cyan-400/25
                            shadow-[0_0_14px_rgba(0,200,255,0.25)]
                        "
                    >
                        <Image
                            src="/nihal.jpg"
                            alt="Nihal"
                            fill
                            className="object-cover"
                        />

                        {/* Glow Ring */}
                        <div
                            className="
                                absolute inset-0 rounded-3xl
                                bg-[radial-gradient(circle,rgba(0,200,255,0.22),transparent_70%)]
                                mix-blend-overlay
                            "
                        />
                    </div>
                </motion.div>

                {/* RIGHT — Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.9 }}
                    className="text-center md:text-left select-none px-1"
                >
                    <h2
                        className="
                            text-4xl sm:text-5xl md:text-6xl
                            font-bold text-white
                            drop-shadow-[0_0_25px_rgba(0,200,255,0.25)]
                        "
                    >
                        About Me
                    </h2>

                    <p
                        className="
                            mt-6 sm:mt-8
                            text-base sm:text-lg md:text-xl
                            text-cyan-200/80 leading-relaxed
                            drop-shadow-[0_0_10px_rgba(0,200,255,0.25)]
                        "
                    >
                        I am a{" "}
                        <span className="text-cyan-300 font-medium">
                            Product Builder
                        </span>{" "}
                        who combines system design, product thinking, and
                        rapid execution.
                        <br /><br />
                        I work like a modern tech generalist —
                        understanding problems deeply and turning ideas into real,
                        usable, smooth digital products.
                        <br /><br />
                        I use AI to accelerate execution so I can focus on
                        clarity, strategy, and decision-making.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
