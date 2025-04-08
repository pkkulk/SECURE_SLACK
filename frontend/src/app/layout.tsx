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

// Note: Exporting static 'metadata' might conflict with '"use client"'.
// If you need dynamic metadata based on client-side data, manage it differently (e.g., using useEffect).
// If it's truly static, you might need a separate Server Component layout for metadata
// and nest this client component layout within it. For now, we'll keep it but be aware.
/*
export const metadata: Metadata = {
  title: "Secure Slack", // Example Title
  description: "Cybersecurity Platform", // Example Description
};
*/

// --- tsParticles Options (Copied from previous example) --- // <-- Add this section
const particlesOptions = {
  preset: "links",
  background: {
    color: {
      value: "#0a192f", // Global background color
    },
  },
  particles: {
    color: {
      value: "#64ffda", // Particle color
    },
    links: {
      color: "#8892b0", // Link color
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
      value: 80, // Adjust particle count
    },
    opacity: { value: 0.4 }, // Particle opacity
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
  const [init, setInit] = useState(false); // <-- Add state for particle engine initialization

  // Initialize tsParticles engine // <-- Add useEffect
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      console.log("Initializing particles engine...");
      await loadLinksPreset(engine); // Load the links preset
    }).then(() => {
      console.log("Particles engine initialized.");
      setInit(true);
    }).catch((error) => {
        console.error("Particles engine initialization failed:", error);
    });
  }, []); // Empty dependency array ensures this runs once on mount

  // Optional: Callback when particles are loaded // <-- Add callback
  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    console.log("Particles canvas loaded:", container?.id);
    await Promise.resolve(); // Using await to match async signature if needed later
  }, []);

  return (
    <html lang="en">
      {/* Apply font variables and base styling here */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>

        {/* Particle Canvas - Fixed Background */}
        {/* Render only after the engine is initialized */}
        {init && (
          <Particles
            id="tsparticles-global" // Unique ID for the particle container
            options={particlesOptions}
            particlesLoaded={particlesLoaded} // Optional callback when canvas is ready
            // Style for fixed positioning behind all content
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1, // Ensure it's behind everything else
            }}
          />
        )}

        {/* Content Wrapper: Positioned above particles and manages layout */}
        {/* We move the flex container logic here from the body */}
        <div style={{ position: 'relative', zIndex: 1 }} className="min-h-screen flex flex-col">
          <AuthProvider> {/* AuthProvider likely doesn't need direct styling */}
            <Header />
            {/* Main content area should grow to push footer down */}
            <main className="flex-grow">
                {children}
            </main>
            <ChatbotWidget /> {/* Consider its positioning relative to the footer/content */}
            <Footer />
          </AuthProvider>
        </div>

      </body>
    </html>
  );
}