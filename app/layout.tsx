// app/layout.tsx
import "./globals.css";
import FuturisticBackground from "@/components/FuturisticBackground";
import NavbarWrapper from "@/components/NavbarWrapper";
import MotionWrapper from "@/components/MotionWrapper";   // Client version
import { metadata } from "./metadata";
export { metadata };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative bg-black selection:bg-cyan-400/30 selection:text-white">
        <FuturisticBackground />
        <NavbarWrapper />
        <MotionWrapper>
          {children}
        </MotionWrapper>
      </body>
    </html>
  );
}
