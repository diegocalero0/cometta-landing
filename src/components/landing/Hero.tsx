import Link from "next/link";
import type { Audience } from "./types";
import styles from "./landing.module.css";

type Props = { audience: Audience };

export function Hero({ audience }: Props) {
  const isDrivers = audience === "conductores";

  return (
    <section className={styles.sectionWhite}>
      <div className={`${styles.container} ${styles.hero}`}>
        <div className={styles.heroGrid}>
          {isDrivers ? <DriversCopy /> : <CompaniesCopy />}
          {isDrivers ? <PhoneMock /> : <DashboardMock />}
        </div>
      </div>
    </section>
  );
}

function DriversCopy() {
  return (
    <div>
      <span className={styles.badge}>Para conductores</span>
      <h1 className={styles.heroTitle}>Gana en cada entrega, a tu ritmo.</h1>
      <p className={styles.heroText}>
        Únete a la red de conductores de Cometta. Recibe pedidos cerca de ti y cobra
        rápido, con horarios que tú eliges.
      </p>
      <div className={styles.heroCtas}>
        <Link href="/quiero-ser-conductor" className={styles.btnPrimary}>
          Quiero ser conductor
        </Link>
        <a href="#" className={styles.btnSecondary}>
          Ver cómo funciona
        </a>
      </div>
      <div className={styles.heroStats}>
        <Stat num="$ 1.850.000" label="Ingreso mensual prom." />
        <Stat num="48h" label="Retiro de pagos" />
        <Stat num="4,9★" label="Calificación de la app" />
      </div>
    </div>
  );
}

function CompaniesCopy() {
  return (
    <div>
      <span className={styles.badge}>Para empresas</span>
      <h1 className={styles.heroTitle}>Entregas que tus clientes recuerdan.</h1>
      <p className={styles.heroText}>
        Despacha, rastrea y entrega desde un solo panel. Conecta tu comercio con la red de
        conductores de Cometta, sin montar tu propia flota.
      </p>
      <div className={styles.heroCtas}>
        <a href="#" className={styles.btnPrimary}>
          Solicitar demo
        </a>
        <a href="#" className={styles.btnSecondary}>
          Hablar con ventas
        </a>
      </div>
      <div className={styles.heroStats}>
        <Stat num="3.200+" label="Comercios aliados" />
        <Stat num="48" label="Ciudades" />
        <Stat num="99,2%" label="Entregas a tiempo" />
      </div>
    </div>
  );
}

function Stat({ num, label }: { num: string; label: string }) {
  return (
    <div>
      <div className={styles.statNum}>{num}</div>
      <div className={styles.statLabel}>{label}</div>
    </div>
  );
}

function PhoneMock() {
  return (
    <div className={styles.mockWrap}>
      <div className={styles.phone}>
        <div
          style={{
            background: "var(--gray-50)",
            borderRadius: 33,
            overflow: "hidden",
            position: "relative",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "14px 20px 8px",
              fontSize: 12,
              fontWeight: 600,
              color: "var(--text-strong)",
              fontFamily: "var(--font-mono)",
            }}
          >
            <span>9:41</span>
            <span style={{ display: "inline-flex", gap: 5, alignItems: "center" }}>
              <svg
                width="16"
                height="11"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                strokeLinecap="round"
              >
                <path d="M5 13l4 4L19 7" />
              </svg>
            </span>
          </div>
          <div
            style={{
              position: "relative",
              height: 240,
              background: "var(--gray-150)",
              overflow: "hidden",
            }}
          >
            <svg viewBox="0 0 286 240" width="100%" height="240" style={{ display: "block" }}>
              <line x1="0" y1="60" x2="286" y2="40" stroke="#dee2e6" strokeWidth="8" />
              <line x1="0" y1="150" x2="286" y2="170" stroke="#dee2e6" strokeWidth="10" />
              <line x1="70" y1="0" x2="90" y2="240" stroke="#e9ecef" strokeWidth="8" />
              <line x1="200" y1="0" x2="220" y2="240" stroke="#e9ecef" strokeWidth="8" />
              <path
                d="M52 200 C 90 150, 120 140, 150 110 S 210 70, 236 52"
                fill="none"
                stroke="#7c3aed"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="2 9"
              />
              <circle cx="52" cy="200" r="7" fill="#4ade2a" stroke="#fff" strokeWidth="3" />
              <circle cx="236" cy="52" r="9" fill="#7c3aed" stroke="#fff" strokeWidth="3" />
            </svg>
          </div>
          <div
            style={{
              margin: "-26px 12px 14px",
              position: "relative",
              background: "var(--gray-0)",
              border: "1px solid var(--border-default)",
              borderRadius: 18,
              boxShadow: "var(--shadow-md)",
              padding: 16,
            }}
          >
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  height: 22,
                  padding: "0 9px",
                  background: "var(--brand-green-soft)",
                  color: "var(--brand-green-ink)",
                  borderRadius: 999,
                  fontSize: 11,
                  fontWeight: 600,
                }}
              >
                Nuevo pedido
              </span>
              <span style={{ fontFamily: "var(--font-mono)", fontSize: 11, color: "var(--text-muted)" }}>
                2,4 km
              </span>
            </div>
            <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
              <RouteStop color="var(--brand-green)" title="Mercaluna · Cra 70" sub="Recoger pedido" />
              <RouteStop color="var(--brand-purple)" title="Calle 33 #18-22" sub="Entregar a Laura R." />
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: 16,
                paddingTop: 14,
                borderTop: "1px solid var(--border-subtle)",
              }}
            >
              <div>
                <div style={{ fontSize: 11, color: "var(--text-muted)" }}>Ganas</div>
                <div style={{ fontFamily: "var(--font-mono)", fontSize: 20, fontWeight: 600, color: "var(--text-strong)" }}>
                  $ 6.400
                </div>
              </div>
              <span
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  height: 38,
                  padding: "0 20px",
                  background: "var(--brand-purple)",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 600,
                  borderRadius: 10,
                }}
              >
                Aceptar
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function RouteStop({ color, title, sub }: { color: string; title: string; sub: string }) {
  return (
    <div style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
      <span
        style={{
          width: 9,
          height: 9,
          marginTop: 4,
          borderRadius: 999,
          background: color,
          flex: "none",
        }}
      />
      <div>
        <div style={{ fontSize: 13, fontWeight: 600, color: "var(--text-strong)" }}>{title}</div>
        <div style={{ fontSize: 12, color: "var(--text-muted)" }}>{sub}</div>
      </div>
    </div>
  );
}

function DashboardMock() {
  const bars = [38, 54, 46, 72, 60, 88, 66];
  return (
    <div className={styles.mockWrap}>
      <div className={styles.dashboard}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingBottom: 14,
            borderBottom: "1px solid var(--border-subtle)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <svg width="22" height="22" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path d="M6 29C6 29 9.5 19.5 17.5 14.5C24.5 10.2 29 6 29 6" stroke="#4ade2a" strokeWidth="2.6" strokeLinecap="round" />
              <path d="M10.5 27C10.5 27 13.5 20 19.5 16" stroke="#7c3aed" strokeWidth="2.6" strokeLinecap="round" opacity="0.5" />
              <circle cx="25.5" cy="9.5" r="6.5" fill="#7c3aed" />
              <circle cx="27.8" cy="7.2" r="1.8" fill="#fff" opacity="0.85" />
            </svg>
            <span style={{ fontSize: 14, fontWeight: 600, color: "var(--text-strong)" }}>
              Panel de operaciones
            </span>
          </div>
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              height: 22,
              padding: "0 9px",
              background: "var(--brand-green-soft)",
              color: "var(--brand-green-ink)",
              borderRadius: 999,
              fontSize: 11,
              fontWeight: 600,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--brand-green)" }} />
            En vivo
          </span>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10, marginTop: 14 }}>
          <MetricCell label="En ruta" value="128" />
          <MetricCell label="Entregados" value="1.904" />
          <MetricCell label="A tiempo" value="99%" valueColor="var(--brand-green-ink)" />
        </div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 8, height: 70, marginTop: 16, padding: "0 2px" }}>
          {bars.map((h, i) => (
            <div
              key={i}
              style={{
                flex: 1,
                height: `${h}%`,
                background: h >= 72 ? "var(--brand-purple)" : "var(--brand-purple-soft)",
                borderRadius: "4px 4px 0 0",
              }}
            />
          ))}
        </div>
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column" }}>
          <OrderRow id="#PED-2841" name="Andina Foods" status="En ruta" tone="purple" />
          <OrderRow id="#PED-2840" name="FarmaYa" status="Entregado" tone="green" />
        </div>
      </div>
    </div>
  );
}

function MetricCell({ label, value, valueColor }: { label: string; value: string; valueColor?: string }) {
  return (
    <div style={{ border: "1px solid var(--border-subtle)", borderRadius: 10, padding: 12 }}>
      <div style={{ fontSize: 11, color: "var(--text-muted)" }}>{label}</div>
      <div style={{ fontFamily: "var(--font-mono)", fontSize: 22, fontWeight: 600, color: valueColor ?? "var(--text-strong)" }}>
        {value}
      </div>
    </div>
  );
}

function OrderRow({ id, name, status, tone }: { id: string; name: string; status: string; tone: "purple" | "green" }) {
  const isGreen = tone === "green";
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "10px 2px",
        borderTop: "1px solid var(--border-subtle)",
      }}
    >
      <span style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-body)" }}>{id}</span>
      <span style={{ fontSize: 12, color: "var(--text-muted)" }}>{name}</span>
      <span
        style={{
          display: "inline-flex",
          height: 20,
          padding: "0 8px",
          alignItems: "center",
          background: isGreen ? "var(--brand-green-soft)" : "var(--brand-purple-soft)",
          color: isGreen ? "var(--brand-green-ink)" : "var(--brand-purple-active)",
          borderRadius: 999,
          fontSize: 11,
          fontWeight: 600,
        }}
      >
        {status}
      </span>
    </div>
  );
}
