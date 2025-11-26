"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/Reveal";

export default function CaseLayout({
    title,
    subtitle,
    children,
}: {
    title: string;
    subtitle: string;
    children: React.ReactNode;
}) {
    return (
        <section className="min-h-screen w-full px-6 py-20 sm:py-28 relative">
            {/* subtle overlay glow */}
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(0,120,200,0.08),transparent_40%)] blur-[90px]" />

            <div className="max-w-4xl mx-auto select-none">
                <Reveal>
                    <div className="mb-8 sm:mb-12">
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_22px_rgba(0,200,255,0.2)]"
                        >
                            {title}
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.6, delay: 0.08 }}
                            className="mt-4 text-cyan-200/80 text-base sm:text-lg max-w-2xl"
                        >
                            {subtitle}
                        </motion.p>

                        <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/25 to-transparent" />
                    </div>
                </Reveal>

                <div className="space-y-16 sm:space-y-20">{children}</div>
            </div>
        </section>
    );
}
