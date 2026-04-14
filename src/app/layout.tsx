import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import { ThemeProvider } from "@/context/ThemeContext";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: '--font-inter' });
const outfit = Outfit({ subsets: ["latin"], variable: '--font-outfit' });

export const metadata: Metadata = {
  title: "GitDocs Hub - Comprehensive Git & GitHub Cheatsheet",
  description: "A professional Git and GitHub documentation hub for developers. Search, learn, and copy commands instantly.",
  icons: {
    icon: [
      { url: "/icon.svg?v=2", type: "image/svg+xml" },
    ],
    shortcut: "/icon.svg?v=2",
    apple: "/icon.svg?v=2",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${outfit.variable} font-sans bg-[#f5f5f5] dark:bg-darkbg-500 text-gitgray-950 dark:text-gitgray-100 antialiased transition-colors duration-300`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
