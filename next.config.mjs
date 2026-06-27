/** @type {import('next').NextConfig} */

// La landing es definitiva y se sirve en la raíz (/) detrás de nginx.
// NEXT_PUBLIC_BASE_PATH queda vacío; se conserva porque el formulario de
// conductores lo antepone a sus fetch() (inocuo cuando es "").
const basePath = "";

const nextConfig = {
  // Genera una build autónoma para una imagen Docker ligera.
  output: "standalone",
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
