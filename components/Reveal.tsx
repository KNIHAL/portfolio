"use client";

import { motion } from "framer-motion";
import React from "react";

export default function Reveal({
    children,
    className = "",
    threshold = 0.18,
}: {
    children: React.ReactNode;
    className?: string;
    threshold?: number;
}) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            viewport={{ once: true, amount: threshold }}
        >
            {children}
        </motion.div>
    );
}
