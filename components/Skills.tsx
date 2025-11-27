"use client";

import { motion } from "framer-motion";

const skills = [
    {
        category: "Product Thinking",
        items: [
            "Problem Breakdown",
            "User Experience Flow",
            "Feature Prioritization",
            "Rapid Decision Making",
        ],
    },
    {
        category: "System & Architecture",
        items: [
            "Modular System Design",
            "API Flows & Integration",
            "Scalable Architecture",
            "Data Flow Mapping",
        ],
    },
    {
        category: "AI-Augmented Engineering",
        items: [
            "AI-Powered Coding",
            "Debugging with AI",
            "Prompt Engineering",
            "Rapid Prototyping",
        ],
    },
    {
        category: "Execution & Delivery",
        items: [
            "Project Coordination",
            "Task Structuring",
            "Fast Iteration Cycles",
            "Quality Optimization",
        ],
    },
];

export default function Skills() {
    return (
        <section
            id="skills"
            className="
                min-h-screen w-full 
                flex items-center justify-center 
                px-4 sm:px-6 py-24 sm:py-32
            "
        >
            <div className="max-w-6xl mx-auto text-center select-none relative">

                {/* Glow Background */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 0.25, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="
                        absolute inset-0 -z-10 
                        bg-[radial-gradient(circle,rgba(0,150,255,0.16),transparent_70%)] 
                        blur-xl sm:blur-2xl
                    "
                />

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="
                        text-4xl sm:text-5xl md:text-6xl 
                        font-bold text-white
                        drop-shadow-[0_0_25px_rgba(0,200,255,0.25)]
                    "
                >
                    Skills
                </motion.h2>

                {/* Grid */}
                <div
                    className="
                        mt-12 sm:mt-16
                        grid grid-cols-1 md:grid-cols-2 
                        gap-6 sm:gap-10
                    "
                >
                    {skills.map((block, i) => (
                        <SkillBlock key={i} {...block} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function SkillBlock({
    category,
    items,
}: {
    category: string;
    items: string[];
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
                p-6 sm:p-8 rounded-2xl text-left
                backdrop-blur-xl bg-white/5 
                border border-cyan-500/15
                shadow-[0_0_16px_rgba(0,200,255,0.18)]
                hover:shadow-[0_0_22px_rgba(0,200,255,0.30)]
                transition-all duration-300
            "
        >
            <h3
                className="
                    text-xl sm:text-2xl 
                    font-semibold text-white
                    drop-shadow-[0_0_8px_rgba(0,200,255,0.35)]
                    mb-4
                "
            >
                {category}
            </h3>

            <ul className="space-y-2.5">
                {items.map((item, i) => (
                    <motion.li
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: i * 0.1 }}
                        className="text-cyan-200/80 text-sm sm:text-base leading-relaxed"
                    >
                        • {item}
                    </motion.li>
                ))}
            </ul>
        </motion.div>
    );
}
