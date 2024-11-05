import type { NextConfig } from "next";
// import i18n  from "./next-i18next.config.js";

// Combina las configuraciones de i18n con nextConfig
const nextConfig: NextConfig = {
  output: 'export',
  // i18n,
  images: {
    domains: ['images.unsplash.com'],
    unoptimized: true,
  },
};

// Exporta la configuración
export default nextConfig;

