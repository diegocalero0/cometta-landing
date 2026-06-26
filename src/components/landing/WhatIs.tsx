import type { ReactNode } from "react";
import type { Audience } from "./types";
import styles from "./landing.module.css";

type Feature = { icon: ReactNode; title: string; text: string };

const iconProps = {
  width: 22,
  height: 22,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PinIcon = (
  <svg {...iconProps}>
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const DRIVER_FEATURES: Feature[] = [
  { icon: PinIcon, title: "Pedidos cerca de ti", text: "Recibe solicitudes según tu ubicación y acepta solo las que te convengan." },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="6" width="20" height="13" rx="2" />
        <path d="M2 10h20" />
        <path d="M7 15h.01" />
      </svg>
    ),
    title: "Pagos rápidos",
    text: "Retira tus ganancias en menos de 48 horas, sin trámites largos.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </svg>
    ),
    title: "Horario flexible",
    text: "Tú decides cuándo conectarte. Trabaja medio tiempo o jornada completa.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
    title: "Soporte y respaldo",
    text: "Seguro por viaje y un equipo de soporte disponible cuando lo necesites.",
  },
];

const COMPANY_FEATURES: Feature[] = [
  {
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="3" width="7" height="9" rx="1" />
        <rect x="14" y="3" width="7" height="5" rx="1" />
        <rect x="14" y="12" width="7" height="9" rx="1" />
        <rect x="3" y="16" width="7" height="5" rx="1" />
      </svg>
    ),
    title: "Panel de operaciones",
    text: "Crea, asigna y monitorea cada pedido desde un solo lugar, en tiempo real.",
  },
  { icon: PinIcon, title: "Rastreo en vivo", text: "Sigue a cada conductor en el mapa y comparte el estado con tus clientes." },
  {
    icon: (
      <svg {...iconProps}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Red de conductores",
    text: "Accede a miles de repartidores verificados sin contratar flota propia.",
  },
  {
    icon: (
      <svg {...iconProps}>
        <rect x="2" y="5" width="20" height="14" rx="2" />
        <path d="M2 10h20" />
      </svg>
    ),
    title: "Pagos y conciliación",
    text: "Cobros, comisiones y reportes claros al final de cada periodo.",
  },
];

export function WhatIs({ audience }: { audience: Audience }) {
  const isDrivers = audience === "conductores";
  const features = isDrivers ? DRIVER_FEATURES : COMPANY_FEATURES;

  return (
    <section className={styles.sectionPage}>
      <div className={`${styles.container} ${styles.sectionPad}`}>
        <div className={styles.sectionHead}>
          <span className={styles.eyebrow}>¿Qué es Cometta?</span>
          {isDrivers ? (
            <>
              <h2 className={styles.sectionTitle}>La app que convierte tu moto en ingresos.</h2>
              <p className={styles.sectionLede}>
                Cometta conecta a conductores con miles de comercios. Conéctate cuando
                quieras, recibe pedidos cercanos y gana por cada entrega.
              </p>
            </>
          ) : (
            <>
              <h2 className={styles.sectionTitle}>La plataforma de logística para tu comercio.</h2>
              <p className={styles.sectionLede}>
                Cometta conecta tu negocio con una red de conductores verificados para
                entregar más rápido, con cobertura nacional y sin montar tu propia flota.
              </p>
            </>
          )}
        </div>

        <div className={styles.featureGrid}>
          {features.map((f) => (
            <div key={f.title} className={styles.featureCard}>
              <span className={styles.featureIcon}>{f.icon}</span>
              <h3 className={styles.featureTitle}>{f.title}</h3>
              <p className={styles.featureText}>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
