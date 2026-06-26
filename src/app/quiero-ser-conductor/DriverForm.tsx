"use client";

import { useState } from "react";
import Link from "next/link";
import { COUNTRY_CODES, DOCUMENT_TYPES, type City } from "@/lib/types";
import styles from "./page.module.css";

interface Values {
  document_type: string;
  document_number: string;
  full_name: string;
  phone_country_code: string;
  phone: string;
  email: string;
  city_id: string;
}

const INITIAL: Values = {
  document_type: "",
  document_number: "",
  full_name: "",
  phone_country_code: "+57",
  phone: "",
  email: "",
  city_id: "",
};

export function DriverForm({ cities }: { cities: City[] }) {
  const [values, setValues] = useState<Values>(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [done, setDone] = useState(false);

  function set<K extends keyof Values>(key: K, value: string) {
    setValues((v) => ({ ...v, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    // basePath no se aplica a fetch() automáticamente: lo anteponemos a mano.
    const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
    const res = await fetch(`${base}/api/driver-applications`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ...values,
        email: values.email.trim() || null,
        city_id: values.city_id ? Number(values.city_id) : null,
      }),
    });

    setSubmitting(false);

    if (res.ok) {
      setDone(true);
    } else {
      const data = await res.json().catch(() => ({}));
      setError(data.error ?? "No se pudo enviar tu postulación. Intenta de nuevo.");
    }
  }

  if (done) {
    return (
      <div className={styles.success}>
        <span className={styles.successIcon} aria-hidden="true">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20 6 9 17l-5-5" />
          </svg>
        </span>
        <h2 className={styles.successTitle}>¡Gracias por postularte!</h2>
        <p className={styles.successText}>
          Recibimos tus datos. Nuestro equipo te contactará pronto para continuar con el
          proceso de registro.
        </p>
        <Link href="/" className={styles.btnPrimary}>
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label className={styles.label} htmlFor="document_type">
          Tipo de documento <span className={styles.req}>*</span>
        </label>
        <select
          id="document_type"
          className={styles.control}
          value={values.document_type}
          onChange={(e) => set("document_type", e.target.value)}
          required
        >
          <option value="">Selecciona</option>
          {DOCUMENT_TYPES.map((d) => (
            <option key={d.value} value={d.value}>
              {d.label}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="document_number">
          Número de documento <span className={styles.req}>*</span>
        </label>
        <input
          id="document_number"
          className={styles.control}
          inputMode="numeric"
          placeholder="Ej. 1094567890"
          value={values.document_number}
          onChange={(e) => set("document_number", e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="full_name">
          Nombre completo <span className={styles.req}>*</span>
        </label>
        <input
          id="full_name"
          className={styles.control}
          placeholder="Ej. Juan Pérez"
          value={values.full_name}
          onChange={(e) => set("full_name", e.target.value)}
          required
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="phone">
          Teléfono <span className={styles.req}>*</span>
        </label>
        <div className={styles.phoneRow}>
          <select
            aria-label="Indicativo de país"
            className={`${styles.control} ${styles.countrySelect}`}
            value={values.phone_country_code}
            onChange={(e) => set("phone_country_code", e.target.value)}
            required
          >
            {COUNTRY_CODES.map((c) => (
              <option key={c.value} value={c.value}>
                {c.label}
              </option>
            ))}
          </select>
          <input
            id="phone"
            className={styles.control}
            inputMode="tel"
            placeholder="3001234567"
            value={values.phone}
            onChange={(e) => set("phone", e.target.value)}
            required
          />
        </div>
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="email">
          Correo <span className={styles.optional}>(opcional)</span>
        </label>
        <input
          id="email"
          type="email"
          className={styles.control}
          placeholder="tucorreo@ejemplo.com"
          value={values.email}
          onChange={(e) => set("email", e.target.value)}
        />
      </div>

      <div className={styles.field}>
        <label className={styles.label} htmlFor="city_id">
          Ciudad <span className={styles.req}>*</span>
        </label>
        <select
          id="city_id"
          className={styles.control}
          value={values.city_id}
          onChange={(e) => set("city_id", e.target.value)}
          required
        >
          <option value="">Selecciona</option>
          {cities.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name} · {c.region}
            </option>
          ))}
        </select>
      </div>

      {error && <p className={styles.error}>{error}</p>}

      <button type="submit" className={styles.btnPrimary} disabled={submitting}>
        {submitting ? "Enviando…" : "Enviar postulación"}
      </button>
    </form>
  );
}
