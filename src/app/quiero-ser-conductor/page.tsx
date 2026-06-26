import Link from "next/link";
import { listCities } from "@/lib/queries";
import { Logo } from "@/components/landing/Logo";
import { DriverForm } from "./DriverForm";
import styles from "./page.module.css";

// Carga las ciudades en el servidor (SSR) y renderiza el formulario.
export const dynamic = "force-dynamic";

export const metadata = {
  title: "Quiero ser conductor — Cometta",
  description:
    "Postúlate para ser conductor de Cometta. Recibe pedidos cerca de ti y gana en cada entrega.",
};

export default async function QuieroSerConductorPage() {
  const cities = await listCities();

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <Link href="/" aria-label="Volver a Cometta">
            <Logo />
          </Link>
          <Link href="/" className={styles.backLink}>
            ← Volver al inicio
          </Link>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.intro}>
          <span className={styles.badge}>Para conductores</span>
          <h1 className={styles.title}>Quiero ser conductor</h1>
          <p className={styles.lede}>
            Déjanos tus datos y nuestro equipo te contactará para guiarte en el proceso de
            registro. Empieza a recibir pedidos cerca de ti.
          </p>
        </div>

        <div className={styles.card}>
          <DriverForm cities={cities} />
        </div>
      </main>
    </div>
  );
}
