/** @type {import('next').NextConfig} */

// Se sirve detrás de nginx bajo /landing-v2 (junto a la landing actual en /).
// Una sola fuente de verdad: basePath namespacea páginas y assets de _next, y se
// expone como NEXT_PUBLIC_BASE_PATH para anteponerlo en los fetch del cliente
// (Next NO aplica basePath automáticamente a fetch(), solo a <Link>/assets).
const basePath = "/landing-v2";

const nextConfig = {
  // Genera una build autónoma para una imagen Docker ligera.
  output: "standalone",
  basePath,
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
