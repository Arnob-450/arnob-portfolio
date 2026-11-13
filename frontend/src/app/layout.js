import "./globals.css";

export const metadata = {
  title: "Tawhid Khan Arnob | Full Stack Developer",
  description:
    "Personal portfolio of Tawhid Khan Arnob — an aspiring full-stack web developer specializing in React, Next.js, and Node.js.",
  keywords: [
    "Tawhid Khan Arnob",
    "Full Stack Developer",
    "React",
    "Next.js",
    "Node.js",
    "Portfolio",
    "Bangladesh",
  ],
  authors: [{ name: "Tawhid Khan Arnob" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-zinc-950 text-zinc-50">
        {children}
      </body>
    </html>
  );
}
