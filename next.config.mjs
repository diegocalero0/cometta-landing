/** @type {import('next').NextConfig} */
const nextConfig = {
  // Genera una build autónoma para una imagen Docker ligera.
  output: "standalone",
  // Se sirve detrás de nginx bajo /landing-v2 (junto a la landing actual en /).
  // basePath namespaces las páginas y los assets de _next bajo ese prefijo.
  basePath: "/landing-v2",
};

export default nextConfig;
