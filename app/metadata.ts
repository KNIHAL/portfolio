import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nihal | Product Builder & AI-Augmented Developer",
  description:
    "I build real products fast — combining AI, system design, and rapid execution. Explore my projects, case studies, skills, and experience as an AI-Augmented Developer and Product Builder.",
  metadataBase: new URL("https://your-domain.com"), // <-- Replace with your final domain
  openGraph: {
    title: "Nihal | Product Builder & AI-Augmented Developer",
    description:
      "I build products fast — using AI, system design, and rapid prototyping. Explore my portfolio projects and case studies.",
    url: "https://your-domain.com",
    siteName: "Nihal Portfolio",
    images: [
      {
        url: "/og", // <-- we will generate this next
        width: 1200,
        height: 630,
        alt: "Nihal Portfolio OG Image",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nihal | Product Builder & AI-Augmented Developer",
    description:
      "I build real products fast — combining AI, system design, and rapid execution.",
    images: ["/og"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
    },
  },
};
