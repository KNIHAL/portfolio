"use client";

import { useEffect } from "react";

export default function PerformanceHints() {
    useEffect(() => {
        // preconnect to key CDNs (helps LCP for fonts/images hosted elsewhere)
        const preconnect = (href: string) => {
            const link = document.createElement("link");
            link.rel = "preconnect";
            link.href = href;
            document.head.appendChild(link);
        };

        preconnect("https://fonts.gstatic.com");
        preconnect("https://fonts.googleapis.com");
    }, []);

    return null;
}
