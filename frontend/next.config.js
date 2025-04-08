// next.config.js <-- This is typically a JavaScript file

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.americanbankingnews.com', // Hostname from the error
        },
               {
          protocol: 'https',
          hostname: 'www.americanbankingnews.com', // Hostname from the error
        },
        // Add other allowed hostnames here
      ],
    },
    // ... other configurations
  };
  
  module.exports = nextConfig; // Standard JavaScript module export