import type { ReactNode } from "react";
import { Logo } from "./Logo";
import styles from "./landing.module.css";

const COLUMNS: { title: string; links: string[] }[] = [
  { title: "Producto", links: ["Para empresas", "Para conductores", "Cobertura", "Precios"] },
  { title: "Compañía", links: ["Sobre Cometta", "Trabaja con nosotros", "Blog", "Contacto"] },
  { title: "Legal", links: ["Términos y condiciones", "Política de privacidad", "Política de cookies"] },
];

const SOCIALS: { label: string; icon: ReactNode }[] = [
  {
    label: "Instagram",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3Z" />
      </svg>
    ),
  },
  {
    label: "X",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117L17.083 19.77Z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6Z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16.5 3a5.6 5.6 0 0 0 4.5 4.5v3a8.5 8.5 0 0 1-4.5-1.3v6.3a6 6 0 1 1-6-6c.34 0 .67.03 1 .08v3.2a2.9 2.9 0 1 0 2 2.76V3h3Z" />
      </svg>
    ),
  },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} ${styles.footerGrid}`}>
        <div className={styles.footerBrand}>
          <Logo />
          <p className={styles.footerDesc}>
            La plataforma de logística que conecta comercios y domiciliarios en toda Colombia.
          </p>
          <div className={styles.socials}>
            {SOCIALS.map((s) => (
              <a key={s.label} href="#" aria-label={s.label} className={styles.socialLink}>
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {COLUMNS.map((col) => (
          <div key={col.title}>
            <div className={styles.footerColTitle}>{col.title}</div>
            <ul className={styles.footerLinks}>
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" className={styles.footerLink}>
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className={styles.footerBar}>
        <div className={`${styles.container} ${styles.footerBarInner}`}>
          <span className={styles.footerCopy}>© 2026 Cometta S.A.S. · Hecho en Colombia.</span>
          <div className={styles.footerBarLinks}>
            <a href="#" className={styles.footerBarLink}>Términos</a>
            <a href="#" className={styles.footerBarLink}>Privacidad</a>
            <a href="#" className={styles.footerBarLink}>Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
