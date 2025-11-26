"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

interface NavbarWrapperProps {
    // agar Navbar ko activePath pass karna hai
    activePath: string;
}

export default function NavbarWrapper() {
    const pathname = usePathname();
    return <Navbar />;
}
