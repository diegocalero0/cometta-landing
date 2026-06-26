import styles from "./landing.module.css";

const BRANDS = [
  "Mercaluna",
  "Andina Foods",
  "FarmaYa",
  "Bodega Norte",
  "TostaoExpress",
  "ElectroSur",
  "Donde Pepe",
  "Frutería La 70",
];

export function TrustEmpresas() {
  return (
    <section className={styles.sectionWhite}>
      <div className={`${styles.container} ${styles.sectionPad}`}>
        <div className={styles.trustHead}>
          <span className={styles.eyebrow}>Quiénes confían en nosotros</span>
          <h2 className={styles.trustTitle}>
            +3.200 comercios despachan con Cometta cada día.
          </h2>
        </div>

        <div className={styles.logoGrid}>
          {BRANDS.map((b) => (
            <div key={b} className={styles.logoCell}>
              {b}
            </div>
          ))}
        </div>

        <div className={styles.trustStats}>
          <TrustStat num="12 M+" label="Pedidos entregados" />
          <TrustStat num="99,2%" label="Entregas a tiempo" />
          <TrustStat num="4,8★" label="Satisfacción de comercios" />
        </div>
      </div>
    </section>
  );
}

function TrustStat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className={styles.trustStatNum}>{num}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}
