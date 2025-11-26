"use client";

import { motion } from "framer-motion";

export default function FuturisticBackground() {
    return (
        <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
            {/* Gradient Core Layer */}
            <motion.div
                initial={{ opacity: 0, scale: 1.2 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,180,255,0.18),transparent_70%)]"
            />

            {/* Infinite Moving Nebula */}
            <motion.div
                animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                }}
                transition={{
                    duration: 22,
                    repeat: Infinity,
                    ease: "linear",
                }}
                className="absolute inset-0 opacity-60 bg-[radial-gradient(800px_at_20%_30%,rgba(70,0,180,0.35),transparent),radial-gradient(900px_at_80%_60%,rgba(0,220,255,0.25),transparent)]"
            />

            {/* Soft Mist */}
            <motion.div
                animate={{
                    opacity: [0.1, 0.22, 0.1],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute inset-0 blur-xl bg-[radial-gradient(circle_at_50%_80%,rgba(0,150,255,0.20),transparent_70%)]"
            />

            {/* Parallax Glow Orbs */}
            <motion.div
                animate={{ x: [0, 40, -40, 0], y: [0, -30, 30, 0] }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute top-1/4 left-1/4 w-[450px] h-[450px] rounded-full bg-[radial-gradient(circle,rgba(0,200,255,0.18),transparent)] blur-xl"
            />

            <motion.div
                animate={{ x: [0, -30, 30, 0], y: [0, 20, -20, 0] }}
                transition={{
                    duration: 16,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute bottom-1/4 right-1/4 w-[350px] h-[350px] rounded-full bg-[radial-gradient(circle,rgba(160,0,255,0.15),transparent)] blur-xl"
            />

            {/* Starfield Layer */}
            <Stars />
        </div>
    );
}

function Stars() {
    const starElements = Array.from({ length: 140 }, (_, i) => {
        const size = Math.random() * 2 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;

        return (
            <motion.div
                key={i}
                initial={{ opacity: 0 }}
                animate={{ opacity: [0.1, 1, 0.1] }}
                transition={{
                    duration: Math.random() * 6 + 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
                className="absolute rounded-full bg-cyan-300/80"
                style={{
                    width: size,
                    height: size,
                    top: `${y}%`,
                    left: `${x}%`,
                    filter: "drop-shadow(0 0 6px rgba(0,200,255,0.9))",
                }}
            />
        );
    });

    return <div className="absolute inset-0">{starElements}</div>;
}
