"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function Contact() {
    // Global parallax
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const parallaxX = useTransform(mouseX, [0, 1], [-8, 8]);
    const parallaxY = useTransform(mouseY, [0, 1], [-8, 8]);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set(e.clientX / window.innerWidth);
            mouseY.set(e.clientY / window.innerHeight);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section
            id="contact"
            className="min-h-screen w-full flex items-center justify-center px-4 sm:px-6 py-24 sm:py-32"
        >
            <motion.div
                className="max-w-3xl mx-auto text-center select-none relative"
                style={{ x: parallaxX, y: parallaxY }}
            >
                {/* Background Glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 0.25, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="
                        absolute inset-0 -z-10 
                        bg-[radial-gradient(circle,rgba(0,150,255,0.18),transparent_70%)]
                        blur-xl sm:blur-2xl
                    "
                />

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl sm:text-5xl md:text-6xl font-bold text-white drop-shadow-[0_0_25px_rgba(0,200,255,0.25)]"
                >
                    Contact
                </motion.h2>

                {/* Subtitle */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="mt-4 sm:mt-6 text-base sm:text-lg text-cyan-200/80 max-w-xl mx-auto"
                >
                    Let’s connect for collaboration, opportunities, or product discussions.
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="
                        mt-12 sm:mt-14 
                        flex flex-wrap justify-center 
                        gap-4 sm:gap-6
                    "
                >
                    <FloatingButton
                        label="Email"
                        href="mailto:nihalpandey1205@gmail.com"
                        delay={0}
                        distance={8}
                        tilt={5}
                    />

                    <FloatingButton
                        label="LinkedIn"
                        href="https://www.linkedin.com/in/kumar-nihal-260b7a351"
                        delay={0.35}
                        distance={11}
                        tilt={7}
                    />

                    <FloatingButton
                        label="GitHub"
                        href="https://github.com/KNIHAL"
                        delay={0.7}
                        distance={9}
                        tilt={6}
                    />

                    <FloatingButton
                        label="Schedule Call"
                        href="https://cal.com/kumar-nihal"
                        delay={1.05}
                        distance={12}
                        tilt={8}
                    />

                    <FloatingButton
                        label="Resume"
                        href="/resume.pdf"
                        delay={1.4}
                        distance={7}
                        tilt={4}
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
            whileHover={{ scale: 1.10 }}
            whileTap={{ scale: 0.94 }}

            animate={{
                y: [0, -distance, 0],
                rotate: [0, tilt, -tilt, 0],
            }}

            transition={{
                duration: 3 + Math.random() * 1.5,
                rotate: {
                    duration: 4 + Math.random() * 2,
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
                px-4 sm:px-5
                py-2 sm:py-2.5
                rounded-xl font-medium text-sm sm:text-base
                text-white bg-cyan-500/15 border border-cyan-400/25
                backdrop-blur-xl
                shadow-[0_0_10px_rgba(0,200,255,0.20)]
                hover:bg-cyan-500/25 hover:border-cyan-300
                transition-all duration-300
            "
        >
            {label}
        </motion.a>
    );
}
