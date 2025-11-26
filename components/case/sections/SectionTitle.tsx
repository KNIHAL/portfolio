export function SectionTitle({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="
      text-3xl md:text-4xl font-semibold text-white
      drop-shadow-[0_0_15px_rgba(0,200,255,0.25)]
    ">
            {children}
        </h2>
    );
}
