export function InfoGrid({ items }: { items: { label: string; value: string }[] }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item, i) => (
                <div
                    key={i}
                    className="
            p-5 rounded-xl bg-white/5 backdrop-blur-xl
            border border-cyan-400/20
            shadow-[0_0_12px_rgba(0,200,255,0.15)]
          "
                >
                    <p className="text-cyan-300 text-sm font-semibold tracking-wide">
                        {item.label}
                    </p>
                    <p className="text-white text-lg mt-1">{item.value}</p>
                </div>
            ))}
        </div>
    );
}
