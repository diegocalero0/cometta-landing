import styles from "./landing.module.css";

const CITIES = [
  { name: "Bogotá", pct: 100, value: "4.120" },
  { name: "Medellín", pct: 72, value: "2.980" },
  { name: "Cali", pct: 43, value: "1.760" },
  { name: "Barranquilla", pct: 30, value: "1.240" },
];

export function ActiveDrivers() {
  return (
    <section className={styles.sectionWhite}>
      <div className={`${styles.container} ${styles.sectionPad}`}>
        <div className={styles.activeCard}>
          <div>
            <span className={styles.activeLabel}>
              <span className={styles.pulseDot} />
              Activos en este momento
            </span>
            <div className={styles.activeCounter}>12.480</div>
            <p className={styles.activeText}>
              Domiciliarios conectados ahora mismo, entregando en 48 ciudades del país. Únete y
              empieza a recibir pedidos hoy.
            </p>
            <div className={styles.activeStats}>
              <ActiveStat num="64.300" label="Entregas hoy" />
              <ActiveStat num="$ 6.400" label="Pago prom. / entrega" />
              <ActiveStat num="48" label="Ciudades" />
            </div>
          </div>

          <div className={styles.activeDivider} />

          <div className={styles.cityPanel}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "12px 14px",
              }}
            >
              <span style={{ fontSize: 13, fontWeight: 600, color: "var(--text-strong)" }}>
                Conductores por ciudad
              </span>
              <span style={{ fontSize: 12, color: "var(--text-muted)" }}>Ahora</span>
            </div>
            {CITIES.map((c) => (
              <div key={c.name} className={styles.cityRow}>
                <span className={styles.cityName}>{c.name}</span>
                <div className={styles.cityBarTrack}>
                  <div className={styles.cityBarFill} style={{ width: `${c.pct}%` }} />
                </div>
                <span className={styles.cityValue}>{c.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ActiveStat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className={styles.activeStatNum}>{num}</div>
      <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{label}</div>
    </div>
  );
}
