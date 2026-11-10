import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  // Las imágenes sociales y los iconos leen fuentes de assets/ y fotos de public/ con fs: que viajen con el servidor.
  outputFileTracingIncludes: {
    "/*": ["./assets/fuentes/**", "./public/retrato/**", "./public/projects/**"],
  },
  partialPrefetching: true,
  experimental: {
    // Needed because Spanish and English each have their own root layout.
    globalNotFound: true,
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
