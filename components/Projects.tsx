"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
    {
        title: "Sampark",
        desc: "A multi-module digital ecosystem powering communication, operations, and workflow orchestration.",
        route: "/sampark",
        glow: "rgba(0,200,255,0.35)",
    },
    {
        title: "EcoTrack",
        desc: "A smart-city environment monitoring system with live insights and automated reporting.",
        route: "/ecotrack",
        glow: "rgba(140,0,255,0.35)",
    },
    {
        title: "eSmarty",
        desc: "Gemini Powered lightweight browser extension that enhances productivity through micro-automations.",
        route: "/esmarty",
        glow: "rgba(0,255,210,0.35)",
    }
];

export default function Projects() {
    return (
        <section
            id="projects"
            className="min-h-screen w-full flex items-center justify-center px-6 py-32"
        >
            <div className="max-w-6xl mx-auto text-center select-none relative">

                {/* Background Glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 0.35, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2
                     -translate-y-1/2 w-[800px] h-[800px]
                     bg-[radial-gradient(circle,rgba(0,150,255,0.20),transparent_70%)]
                     blur-3xl -z-10"
                />

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-6xl font-bold text-white
                     drop-shadow-[0_0_25px_rgba(0,200,255,0.25)]"
                >
                    Projects
                </motion.h2>

                {/* Cards Grid */}
                <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
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
            whileHover={{ scale: 1.03 }}
            className="
        p-8 rounded-2xl group cursor-pointer
        backdrop-blur-xl bg-white/5
        border border-cyan-500/20
        shadow-[0_0_20px_rgba(0,200,255,0.20)]
        relative overflow-hidden
      "
        >
            {/* Glow Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.35 }}
                transition={{ duration: 0.4 }}
                className="absolute inset-0 rounded-2xl blur-2xl"
                style={{
                    background: `radial-gradient(circle at 50% 40%, ${glow}, transparent 70%)`,
                }}
            />

            {/* Title */}
            <h3
                className="relative text-3xl font-semibold text-white
                   drop-shadow-[0_0_8px_rgba(0,200,255,0.35)]"
            >
                {title}
            </h3>

            {/* Description */}
            <p className="relative mt-4 text-cyan-200/80 leading-relaxed">
                {desc}
            </p>

            {/* Button */}
            <Link
                href={route}
                className="
          relative inline-block mt-6 px-6 py-2 rounded-xl
          border border-cyan-400/40
          bg-cyan-500/10 backdrop-blur-lg
          text-cyan-200 font-medium
          transition-all duration-300
          group-hover:bg-cyan-400/20
          group-hover:text-white
          shadow-[0_0_12px_rgba(0,200,255,0.25)]
        "
            >
                View Case Study →
            </Link>
        </motion.div>
    );
}
