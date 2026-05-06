import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

export const metadata: Metadata = {
  title: "Aklilu Abera | Full-Stack & AI Engineer",
  description: "Personal portfolio of Aklilu Abera - Full-Stack & AI Engineer specializing in JavaScript, React, Python, and Machine Learning",
  keywords: "Aklilu Abera, Full-Stack Developer, AI Engineer, JavaScript, React, Python, Machine Learning, Ethiopia",
  authors: [{ name: "Aklilu Abera" }],
  openGraph: {
    title: "Aklilu Abera | Full-Stack & AI Engineer",
    description: "Personal portfolio of Aklilu Abera - Full-Stack & AI Engineer",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased bg-[#07111f] text-slate-100">
        {children}
          {/* IntelliChat AI Assistant removed */}
      </body>
    </html>
  );
}
