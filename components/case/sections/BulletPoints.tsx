export function BulletPoints({ items }: { items: string[] }) {
    return (
        <ul className="space-y-3">
            {items.map((item, i) => (
                <li key={i} className="text-cyan-200/80 text-lg">
                    • {item}
                </li>
            ))}
        </ul>
    );
}
