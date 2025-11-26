import { ImageResponse } from "next/og";

export const runtime = "edge";

export const size = {
    width: 1200,
    height: 630,
};

export const contentType = "image/png";

export async function GET() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: "linear-gradient(135deg, #020617 0%, #0a0f24 25%, #111b3d 50%, #1f2756 75%, #2d3b99 100%)",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                    textAlign: "center",
                    fontFamily: "sans-serif",
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                {/* Animated background elements */}
                <div
                    style={{
                        position: "absolute",
                        top: "-50%",
                        left: "-50%",
                        width: "200%",
                        height: "200%",
                        background: "radial-gradient(circle, rgba(127, 231, 255, 0.1) 0%, transparent 70%)",
                        animation: "pulse 8s ease-in-out infinite",
                    }}
                />

                {/* Grid pattern */}
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundImage: "linear-gradient(rgba(127, 231, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(127, 231, 255, 0.1) 1px, transparent 1px)",
                        backgroundSize: "50px 50px",
                        opacity: 0.3,
                    }}
                />

                {/* Main content container */}
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "60px",
                        borderRadius: "20px",
                        background: "rgba(15, 23, 42, 0.7)",
                        backdropFilter: "blur(10px)",
                        border: "1px solid rgba(127, 231, 255, 0.2)",
                        boxShadow: "0 20px 40px rgba(0, 0, 0, 0.3), 0 0 80px rgba(127, 231, 255, 0.1)",
                        maxWidth: "90%",
                        position: "relative",
                        zIndex: 10,
                    }}
                >
                    {/* Main title with gradient */}
                    <div
                        style={{
                            fontSize: 100,
                            fontWeight: 900,
                            marginBottom: 25,
                            background: "linear-gradient(45deg, #7fe7ff, #4facfe, #00f2fe)",
                            backgroundClip: "text",
                            color: "transparent",
                            textShadow: "0 0 30px rgba(127, 231, 255, 0.5)",
                            letterSpacing: "-2px",
                        }}
                    >
                        NIHAL
                    </div>

                    {/* Role badge */}
                    <div
                        style={{
                            fontSize: 36,
                            background: "linear-gradient(45deg, #7fe7ff, #4facfe)",
                            padding: "12px 30px",
                            borderRadius: "50px",
                            marginBottom: 30,
                            fontWeight: 700,
                            boxShadow: "0 10px 20px rgba(127, 231, 255, 0.2)",
                            border: "2px solid rgba(255, 255, 255, 0.1)",
                        }}
                    >
                        Product Builder • AI-Augmented Developer
                    </div>

                    {/* Tagline */}
                    <div
                        style={{
                            fontSize: 32,
                            maxWidth: "800px",
                            opacity: 0.95,
                            lineHeight: 1.4,
                            color: "#e2e8f0",
                            fontWeight: 500,
                            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
                            marginBottom: 20,
                        }}
                    >
                        Building real products with speed, clarity & system design
                    </div>

                    {/* Decorative elements */}
                    <div
                        style={{
                            display: "flex",
                            gap: "15px",
                            marginTop: "20px",
                        }}
                    >
                        {["🚀", "⚡", "🎯", "🔮"].map((emoji, index) => (
                            <div
                                key={index}
                                style={{
                                    fontSize: 28,
                                    background: "rgba(127, 231, 255, 0.1)",
                                    padding: "10px 15px",
                                    borderRadius: "12px",
                                    border: "1px solid rgba(127, 231, 255, 0.2)",
                                    animation: `bounce 2s infinite ${index * 0.2}s`,
                                }}
                            >
                                {emoji}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Bottom gradient accent */}
                <div
                    style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "8px",
                        background: "linear-gradient(90deg, #7fe7ff, #4facfe, #00f2fe)",
                        boxShadow: "0 -4px 20px rgba(127, 231, 255, 0.3)",
                    }}
                />

                {/* Floating particles */}
                <div
                    style={{
                        position: "absolute",
                        top: "20%",
                        right: "10%",
                        width: "100px",
                        height: "100px",
                        background: "radial-gradient(circle, rgba(127, 231, 255, 0.3) 0%, transparent 70%)",
                        borderRadius: "50%",
                        filter: "blur(10px)",
                        animation: "float 6s ease-in-out infinite",
                    }}
                />
                <div
                    style={{
                        position: "absolute",
                        bottom: "30%",
                        left: "15%",
                        width: "60px",
                        height: "60px",
                        background: "radial-gradient(circle, rgba(79, 172, 254, 0.2) 0%, transparent 70%)",
                        borderRadius: "50%",
                        filter: "blur(8px)",
                        animation: "float 4s ease-in-out infinite reverse",
                    }}
                />
            </div>
        ),
        size
    );
}