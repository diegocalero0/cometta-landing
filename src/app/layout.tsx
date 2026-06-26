import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cometta — Entregas que tus clientes recuerdan",
  description:
    "Cometta es la plataforma de logística que conecta comercios y conductores en toda Colombia. Despacha, rastrea y entrega desde un solo panel.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        {/* Fuentes Geist desde Google Fonts (igual que el design system) */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
