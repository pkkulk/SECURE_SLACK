// src/app/layout.tsx
"use client"; // <-- Add this: Necessary for hooks and client-side particles

import { useEffect, useState, useCallback } from "react"; // <-- Add this
import Particles, { initParticlesEngine } from "@tsparticles/react"; // <-- Add this
import { loadLinksPreset } from "@tsparticles/preset-links"; // <-- Add this
import type { Container } from "@tsparticles/engine"; // <-- Add this

import Header from "./components/Navigation/Header";
import Footer from "./components/Navigation/Footer";
import { Geist, Geist_Mono } from "next/font/google";
import ChatbotWidget from "./components/ChatbotWidget";
import "./globals.css";
import { AuthProvider } from "./context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const particlesOptions = {
  preset: "links",
  background: {
    color: {
      value: "#0a192f",
    },
  },
  particles: {
    color: {
      value: "#64ffda", 
    },
    links: {
      color: "#8892b0", 
      distance: 150,
      enable: true,
      opacity: 0.3,
      width: 1,
    },
    move: {
      enable: true,
      speed: 0.8,
    },
    number: {
      density: { enable: true, area: 800 },
      value: 80, 
    },
    opacity: { value: 0.4 }, 
    shape: { type: "circle" },
    size: { value: { min: 1, max: 3 } },
  },
  detectRetina: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [init, setInit] = useState(false); 
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log("Initializing particles engine...");
      await loadLinksPreset(engine); 
    }).then(() => {
      console.log("Particles engine initialized.");
      setInit(true);
    }).catch((error) => {
        console.error("Particles engine initialization failed:", error);
    });
  }, []); 
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles canvas loaded:", container?.id);
    await Promise.resolve(); 
  }, []);

  return (
    <html lang="en">
     
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

     
        {init && (
          <Particles
            id="tsparticles-global" 
            options={particlesOptions}
            particlesLoaded={particlesLoaded} 
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1,
            }}
          />
        )}

             <div style={{ position: 'relative', zIndex: 1 }} className="min-h-screen flex flex-col">
          <AuthProvider> 
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <ChatbotWidget /> 
            <Footer />
          </AuthProvider>
        </div>

      </body>
    </html>
  );
}