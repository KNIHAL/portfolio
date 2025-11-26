export function SectionText({ children }: { children: React.ReactNode }) {
    return (
        <p className="
      text-cyan-200/80 text-lg leading-relaxed
      drop-shadow-[0_0_8px_rgba(0,200,255,0.15)]
    ">
            {children}
        </p>
    );
}
