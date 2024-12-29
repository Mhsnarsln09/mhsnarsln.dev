import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { ThemeAndLanguageButtons } from "./layout.client";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Kişisel portfolyo sitesi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <main className="min-h-screen bg-base-100">
              <ThemeAndLanguageButtons />
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
