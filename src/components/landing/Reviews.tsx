import type { Audience } from "./types";
import styles from "./landing.module.css";

type Review = { text: string; initials: string; name: string; role: string };

const DRIVER_REVIEWS: Review[] = [
  {
    text: "“Me organizo el día como quiero y los pagos llegan rapidísimo. Llevo seis meses y no me cambio.”",
    initials: "JR",
    name: "Julián Ramírez",
    role: "Domiciliario · Medellín",
  },
  {
    text: "“Los pedidos siempre están cerca, no pierdo tiempo dando vueltas por la ciudad.”",
    initials: "CM",
    name: "Carlos Mejía",
    role: "Domiciliario · Bogotá",
  },
  {
    text: "“El soporte responde y el seguro me da tranquilidad en la calle. Se siente serio.”",
    initials: "DR",
    name: "Daniela Ríos",
    role: "Domiciliaria · Cali",
  },
];

const COMPANY_REVIEWS: Review[] = [
  {
    text: "“Reducimos a la mitad el tiempo de entrega desde que usamos Cometta. El panel es clarísimo.”",
    initials: "MG",
    name: "Mariana Gómez",
    role: "Gerente · Mercaluna",
  },
  {
    text: "“Pasamos de tener flota propia a despachar con domiciliarios verificados. Más cobertura, menos costos.”",
    initials: "AP",
    name: "Andrés Patiño",
    role: "Operaciones · Andina Foods",
  },
  {
    text: "“La conciliación de pagos que antes nos tomaba días ahora sale en un clic.”",
    initials: "LR",
    name: "Laura Restrepo",
    role: "Administración · FarmaYa",
  },
];

export function Reviews({ audience }: { audience: Audience }) {
  const reviews = audience === "conductores" ? DRIVER_REVIEWS : COMPANY_REVIEWS;

  return (
    <section className={styles.sectionPage}>
      <div className={`${styles.container} ${styles.sectionPad}`}>
        <div className={styles.reviewsHead}>
          <span className={styles.eyebrow}>Reseñas</span>
          <h2 className={styles.reviewsTitle}>Lo que dicen quienes ya usan Cometta</h2>
        </div>

        <div className={styles.reviewGrid}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.reviewCard}>
              <Stars />
              <p className={styles.reviewText}>{r.text}</p>
              <div className={styles.reviewAuthor}>
                <span className={styles.avatar}>{r.initials}</span>
                <div>
                  <div className={styles.authorName}>{r.name}</div>
                  <div className={styles.authorRole}>{r.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Stars() {
  return (
    <div className={styles.stars}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="m12 2 3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2Z" />
        </svg>
      ))}
    </div>
  );
}
