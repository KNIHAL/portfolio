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
        <section
            className="
                min-h-screen w-full 
                px-4 sm:px-6 
                py-24 sm:py-32 
                relative
            "
        >
            {/* Futuristic Mist Glow */}
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 0.28, scale: 1 }}
                transition={{ duration: 2 }}
                className="
                    absolute inset-0 -z-10
                    bg-[radial-gradient(circle,rgba(0,150,255,0.14),transparent_70%)]
                    blur-2xl
                "
            />

            <div className="max-w-4xl mx-auto select-none">
                {/* Heading Block */}
                <Reveal>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="mb-10 sm:mb-14"
                    >
                        <h1
                            className="
                                text-4xl sm:text-5xl md:text-6xl
                                font-bold 
                                text-white
                                drop-shadow-[0_0_25px_rgba(0,200,255,0.25)]
                                leading-tight
                            "
                        >
                            {title}
                        </h1>

                        <p
                            className="
                                mt-4 
                                text-base sm:text-lg md:text-xl 
                                text-cyan-200/80 
                                leading-relaxed 
                                drop-shadow-[0_0_12px_rgba(0,200,255,0.2)]
                                max-w-2xl
                            "
                        >
                            {subtitle}
                        </p>

                        <div
                            className="
                                mt-6 
                                h-[1px] w-full 
                                bg-gradient-to-r 
                                from-transparent 
                                via-cyan-400/30 
                                to-transparent
                            "
                        />
                    </motion.div>
                </Reveal>

                {/* Content */}
                <div className="space-y-16 sm:space-y-20 md:space-y-24">
                    {children}
                </div>
            </div>
        </section>
    );
}
