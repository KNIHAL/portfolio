"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        title: "Sampark",
        desc: "A multi-module digital ecosystem powering communication, operations, and workflow orchestration.",
        route: "/sampark",
        glow: "rgba(0,200,255,0.32)",
    },
    {
        title: "EcoTrack",
        desc: "A smart-city environment monitoring system with live insights and automated reporting.",
        route: "/ecotrack",
        glow: "rgba(140,0,255,0.28)",
    },
    {
        title: "eSmarty",
        desc: "A Gemini-powered browser extension that helps debug, summarize, and automate tasks instantly in the same tab.",
        route: "/esmarty",
        glow: "rgba(0,255,210,0.28)",
    }
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="
                min-h-screen w-full
                flex items-center justify-center
                px-4 sm:px-6 py-24 sm:py-32
            "
        >
            <div className="max-w-6xl mx-auto text-center select-none relative">

                {/* LIGHTER GLOW FOR MOBILE SMOOTHNESS */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 0.25, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="
                        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2
                        w-[480px] h-[480px] sm:w-[760px] sm:h-[760px]
                        bg-[radial-gradient(circle,rgba(0,150,255,0.18),transparent_70%)]
                        blur-xl sm:blur-2xl
                        -z-10
                    "
                />

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="
                        text-4xl sm:text-5xl md:text-6xl
                        font-bold text-white
                        drop-shadow-[0_0_22px_rgba(0,200,255,0.25)]
                    "
                >
                    Projects
                </motion.h2>

                {/* Cards Grid */}
                <div
                    className="
                        mt-12 sm:mt-16
                        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
                        gap-6 sm:gap-8
                    "
                >
                    {projects.map((p, i) => (
                        <ProjectCard key={i} {...p} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function ProjectCard({
    title,
    desc,
    route,
    glow,
}: {
    title: string;
    desc: string;
    route: string;
    glow: string;
}) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}

            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}  // MOBILE TAP FEEDBACK

            className="
                p-5 sm:p-7
                rounded-2xl group cursor-pointer
                backdrop-blur-xl bg-white/5
                border border-cyan-500/15
                shadow-[0_0_14px_rgba(0,200,255,0.18)]
                relative overflow-hidden
            "
        >

            {/* Card Glow Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.28 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 rounded-2xl blur-xl"
                style={{
                    background: `radial-gradient(circle at 50% 40%, ${glow}, transparent 70%)`,
                }}
            />

            {/* Title */}
            <h3
                className="
                    relative text-2xl sm:text-3xl
                    font-semibold text-white
                    drop-shadow-[0_0_6px_rgba(0,200,255,0.25)]
                "
            >
                {title}
            </h3>

            {/* Description */}
            <p
                className="
                    relative mt-3 sm:mt-4
                    text-sm sm:text-base
                    text-cyan-200/80 leading-relaxed
                "
            >
                {desc}
            </p>

            {/* Button */}
            <Link
                href={route}
                className="
                    relative inline-block mt-5 sm:mt-6
                    px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl
                    border border-cyan-400/30
                    bg-cyan-500/10 backdrop-blur-lg
                    text-cyan-200 font-medium text-sm sm:text-base
                    transition-all duration-300
                    group-hover:bg-cyan-400/20
                    group-hover:text-white
                    shadow-[0_0_10px_rgba(0,200,255,0.20)]
                "
            >
                View Case Study →
            </Link>
        </motion.div>
    );
}
