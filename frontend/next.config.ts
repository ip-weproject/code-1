import type { NextConfig } from "next";
import i18n  from "./next-i18next.config.js";

// Combina las configuraciones de i18n con nextConfig
const nextConfig: NextConfig = {
  i18n,
  images: {
    domains: ['images.unsplash.com'],
  },
};

// Exporta la configuración
export default nextConfig;

