import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export const metadata = {
  title: "Tawhid Khan Arnob | Aspiring Full Stack Web Developer",
  description:
    "Personal portfolio of Tawhid Khan Arnob — Aspiring Full Stack Web Developer studying Software Engineering at Daffodil International University.",
  keywords: [
    "Tawhid Khan Arnob",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Portfolio",
    "Bangladesh",
  ],
  authors: [{ name: "Tawhid Khan Arnob" }],
  icons: {
    icon: [
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: [
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <body className="min-h-full flex flex-col bg-[#08090D] text-[#F5F5F7] selection:bg-violet-600/40 selection:text-white overflow-x-hidden relative">
        {/* Layered Cosmic Atmosphere Background (Fixed at z-0, always visibly luminous) */}
        <div className="cosmic-ambient-background" aria-hidden="true">
          <div className="cosmic-grid-pattern" />
          <div className="cosmic-orb-violet-hero" />
          <div className="cosmic-orb-cyan-hero" />
          <div className="cosmic-orb-mid-violet" />
          <div className="cosmic-orb-lower-cyan" />
          <div className="cosmic-orb-bottom-violet" />
        </div>

        {/* Foreground Content Stack (z-10 above ambient background) */}
        <div className="relative z-10 flex flex-col min-h-screen">
          {children}
        </div>
      </body>
    </html>
  );
}
