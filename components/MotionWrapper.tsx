"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect } from "react";

export default function MotionWrapper({ children }: { children: React.ReactNode }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const moveX = useTransform(x, (v) => v * 0.015);
    const moveY = useTransform(y, (v) => v * 0.015);

    useEffect(() => {
        const handle = (e: MouseEvent) => {
            const halfW = window.innerWidth / 2;
            const halfH = window.innerHeight / 2;
            x.set((e.clientX - halfW) / halfW);
            y.set((e.clientY - halfH) / halfH);
        };

        window.addEventListener("mousemove", handle, { passive: true });
        return () => window.removeEventListener("mousemove", handle);
    }, []);

    return (
        <motion.div style={{ x: moveX, y: moveY }}>
            {children}
        </motion.div>
    );
}
