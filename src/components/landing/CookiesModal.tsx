import styles from "./landing.module.css";

type Props = {
  onAccept: () => void;
  onClose: () => void;
};

export function CookiesModal({ onAccept, onClose }: Props) {
  return (
    <div className={styles.cookiesOverlay} role="dialog" aria-modal="true" aria-labelledby="cookies-title">
      <div className={styles.cookiesCard}>
        <div className={styles.cookiesRow}>
          <span className={styles.cookiesIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z" />
              <path d="M8.5 8.5h.01" />
              <path d="M16 15.5h.01" />
              <path d="M12 12h.01" />
            </svg>
          </span>
          <div>
            <h3 id="cookies-title" className={styles.cookiesTitle}>
              Usamos cookies
            </h3>
            <p className={styles.cookiesText}>
              Utilizamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar
              el contenido. Puedes aceptar o cerrar este aviso.
            </p>
          </div>
        </div>
        <div className={styles.cookiesActions}>
          <button type="button" onClick={onClose} className={styles.btnGhost}>
            Cerrar
          </button>
          <button type="button" onClick={onAccept} className={styles.btnSolid}>
            Aceptar
          </button>
        </div>
      </div>
    </div>
  );
}
