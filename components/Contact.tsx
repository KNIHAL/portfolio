"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Contact() {
    // Mouse parallax values
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const parallaxX = useTransform(mouseX, [0, 1], [-10, 10]);
    const parallaxY = useTransform(mouseY, [0, 1], [-10, 10]);

    // Track mouse position globally
    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    return (
        <section
            id="contact"
            className="min-h-screen w-full flex items-center justify-center px-6 py-32"
        >
            <motion.div
                className="max-w-4xl mx-auto text-center select-none relative"
                style={{ x: parallaxX, y: parallaxY }} // WHOLE section parallax
            >
                {/* Background Glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 0.35, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="absolute inset-0 -z-10 bg-[radial-gradient(circle,rgba(0,150,255,0.25),transparent_70%)] blur-3xl"
                />

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_25px_rgba(0,200,255,0.25)]"
                >
                    Contact
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="mt-6 text-lg text-cyan-200/80 max-w-xl mx-auto drop-shadow-[0_0_10px_rgba(0,200,255,0.25)]"
                >
                    Let’s connect for opportunities, collaboration, or product discussions.
                </motion.p>

                {/* CTA BUTTONS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                    className="mt-14 flex flex-wrap justify-center gap-6"
                >
                    <FloatingButton
                        label="Email"
                        href="mailto:nihalpandey1205@gmail.com"
                        delay={0}
                        distance={8}
                        tilt={6}
                    />

                    <FloatingButton
                        label="LinkedIn"
                        href="https://www.linkedin.com/in/kumar-nihal-260b7a351"
                        delay={0.4}
                        distance={12}
                        tilt={8}
                    />

                    <FloatingButton
                        label="GitHub"
                        href="https://github.com/KNIHAL"
                        delay={0.8}
                        distance={10}
                        tilt={7}
                    />

                    <FloatingButton
                        label="Schedule Call"
                        href="https://cal.com/kumar-nihal"
                        delay={1.2}
                        distance={14}
                        tilt={9}
                    />

                    <FloatingButton
                        label="Resume"
                        href="/resume.pdf"
                        delay={1.6}
                        distance={9}
                        tilt={5}
                    />
                </motion.div>
            </motion.div>
        </section>
    );
}

function FloatingButton({
    label,
    href,
    delay,
    distance,
    tilt,
}: {
    label: string;
    href: string;
    delay: number;
    distance: number;
    tilt: number;
}) {
    return (
        <motion.a
            whileHover={{ scale: 1.12 }} // Hover zoom
            whileTap={{ scale: 0.95 }}

            animate={{
                y: [0, -distance, 0],
                rotate: [0, tilt, -tilt, 0], // TILT MOTION 🌊
            }}

            transition={{
                duration: 3 + Math.random() * 2,
                rotate: {
                    duration: 4 + Math.random() * 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                },
                repeat: Infinity,
                delay,
                ease: "easeInOut",
            }}

            href={href}
            target="_blank"
            className="
        px-5 py-2 rounded-xl font-medium text-sm
        text-white bg-cyan-500/15 border border-cyan-400/30
        backdrop-blur-xl
        shadow-[0_0_12px_rgba(0,200,255,0.25)]
        hover:bg-cyan-500/25 hover:border-cyan-300
        transition-all duration-300
      "
        >
            {label}
        </motion.a>
    );
}
