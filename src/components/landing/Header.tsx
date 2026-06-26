import { Logo } from "./Logo";
import type { Audience } from "./types";
import styles from "./landing.module.css";

type Props = {
  audience: Audience;
  onAudienceChange: (a: Audience) => void;
};

export function Header({ audience, onAudienceChange }: Props) {
  return (
    <header className={styles.header}>
      <div className={`${styles.container} ${styles.headerInner}`}>
        <Logo />

        <div role="tablist" aria-label="Audiencia" className={styles.toggle}>
          <button
            type="button"
            role="tab"
            aria-selected={audience === "conductores"}
            onClick={() => onAudienceChange("conductores")}
            className={`${styles.toggleBtn} ${
              audience === "conductores" ? styles.toggleBtnActive : ""
            }`}
          >
            Para conductores
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={audience === "empresas"}
            onClick={() => onAudienceChange("empresas")}
            className={`${styles.toggleBtn} ${
              audience === "empresas" ? styles.toggleBtnActive : ""
            }`}
          >
            Para empresas
          </button>
        </div>

        <div className={styles.headerActions}>
          <a href="#" className={styles.loginLink}>
            Ingresar
          </a>
          <a href="#" className={styles.ctaBtn}>
            Crear cuenta
          </a>
        </div>
      </div>
    </header>
  );
}
