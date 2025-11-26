import Image from "next/image";

export function ImageFrame({ src, alt }: { src: string; alt: string }) {
    return (
        <div className="
      w-full rounded-2xl overflow-hidden 
      border border-cyan-400/20 
      shadow-[0_0_20px_rgba(0,200,255,0.15)] 
      bg-white/5 backdrop-blur-xl
    ">
            <Image src={src} alt={alt} width={1600} height={900} className="object-cover" />
        </div>
    );
}
