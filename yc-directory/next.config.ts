import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //Permitir imagenes de origenes remotos, permitir SVG
  images: {
    dangerouslyAllowSVG:true,
    remotePatterns: [{
      // Se agregan los patrones de URL remotos para las imágenes
      // Ejemplo: /^https:\/\/images\.example\.com\/(.*)$/i,
      protocol: 'https',
      hostname: '*',
    }]
  }

};

export default nextConfig;
