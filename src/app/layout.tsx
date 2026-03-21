import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AnimatedBackgroundMesh from "@/components/AnimatedBackgroundMesh";

import CustomCursor from "@/components/CustomCursor";
import PerformanceManager from "@/components/PerformanceManager";
import WhatsAppButton from "@/components/WhatsAppButton";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["700", "400"],
  display: 'swap',
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  weight: ["400", "700"],
  display: 'swap',
});

import { BGPattern } from "@/components/ui/bg-pattern";

export const metadata: Metadata = {
  title: "Vedastra AI Labs | AI-Powered Digital Agency",
  description: "Next-generation digital products, AI agents, and automation built by Vedastra AI Labs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable}`}>
      <body className="bg-black text-white font-body antialiased min-h-screen">
        <CustomCursor />
        {/* Global Cinematic Grain Overlay */}
        <div className="grain-overlay" />
        {/* Main Content Container */}
        <div className="max-w-[1600px] mx-auto min-h-screen relative flex flex-col my-4">
          <Navbar />
          <main className="flex-grow z-10 w-full relative">
            <PerformanceManager>
              <SmoothScrollProvider>
                {children}
              </SmoothScrollProvider>
            </PerformanceManager>
          </main>
          <Footer />
        </div>
        <WhatsAppButton />
      </body>
    </html>
  );
}
