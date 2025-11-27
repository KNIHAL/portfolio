"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const certificates = [
    {
        title: "Oracle Certified GenAI Professional",
        badge: "/cert-oracle.png",
        glow: "rgba(0,200,255,0.30)",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3EF30EE595871CD689B3C5A847BB7E8F68777A2D9900C7CB20D5B7E3686F5EF4",
    },
    {
        title: "AWS Introduction to Artificial Intelligence",
        badge: "/cert-aws-ai.png",
        glow: "rgba(160,0,255,0.28)",
        link: "https://www.credly.com/earner/earned/badge/f31f2a17-e94b-413f-bce6-2ab765d51ca6",
    },
    {
        title: "AWS Machine Learning Foundations",
        badge: "/cert-aws-ml.png",
        glow: "rgba(0,255,200,0.28)",
        link: "https://www.credly.com/earner/earned/badge/22f4c4aa-8847-4fad-ab48-a571901183cc",
    },
];

export default function Certificates() {
    return (
        <section
            id="certificates"
            className="
                min-h-screen w-full
                flex items-center justify-center
                px-4 sm:px-6 py-24 sm:py-32
            "
        >
            <div className="max-w-6xl mx-auto text-center select-none relative">

                {/* Glow */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 0.25, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                    className="
                        absolute inset-0 -z-10 
                        bg-[radial-gradient(circle,rgba(60,0,255,0.22),transparent_70%)] 
                        blur-xl sm:blur-2xl
                    "
                />

                {/* Title */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    className="
                        text-4xl sm:text-5xl md:text-6xl
                        font-bold text-white
                        drop-shadow-[0_0_22px_rgba(0,200,255,0.25)]
                    "
                >
                    Certificates
                </motion.h2>

                {/* Grid */}
                <div
                    className="
                        mt-12 sm:mt-16
                        grid grid-cols-2 sm:grid-cols-3 
                        gap-6 sm:gap-8
                    "
                >
                    {certificates.map((c, i) => (
                        <CertificateCard key={i} {...c} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function CertificateCard({
    title,
    badge,
    glow,
    link,
}: {
    title: string;
    badge: string;
    glow: string;
    link: string;
}) {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}

            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}

            className="
                p-4 sm:p-6
                rounded-2xl cursor-pointer
                backdrop-blur-xl bg-white/5
                border border-cyan-500/15
                shadow-[0_0_12px_rgba(0,200,255,0.18)]
                relative overflow-hidden
                text-center
            "
        >
            {/* Glow Overlay */}
            <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.28 }}
                transition={{ duration: 0.35 }}
                className="absolute inset-0 rounded-2xl blur-xl"
                style={{
                    background: `radial-gradient(circle at 50% 40%, ${glow}, transparent 70%)`,
                }}
            />

            {/* Badge */}
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-3 sm:mb-4">
                <Image
                    src={badge}
                    alt={title}
                    fill
                    className="object-contain"
                />
            </div>

            {/* Title */}
            <h3
                className="
                    relative 
                    text-sm sm:text-base md:text-lg 
                    font-semibold text-white
                    drop-shadow-[0_0_6px_rgba(0,200,255,0.25)]
                "
            >
                {title}
            </h3>
        </motion.a>
    );
}
