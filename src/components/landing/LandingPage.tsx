"use client";

import { useEffect, useState } from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { WhatIs } from "./WhatIs";
import { TrustEmpresas } from "./TrustEmpresas";
import { ActiveDrivers } from "./ActiveDrivers";
import { Reviews } from "./Reviews";
import { Footer } from "./Footer";
import { CookiesModal } from "./CookiesModal";
import type { Audience } from "./types";
import styles from "./landing.module.css";

const COOKIES_KEY = "cometta_cookies_v1";

export function LandingPage() {
  const [audience, setAudience] = useState<Audience>("conductores");
  const [cookiesOpen, setCookiesOpen] = useState(false);

  // El aviso de cookies solo aparece si el usuario no lo ha aceptado antes.
  // Se decide tras montar para no romper la hidratación (localStorage es del cliente).
  useEffect(() => {
    let seen = false;
    try {
      seen = !!localStorage.getItem(COOKIES_KEY);
    } catch {
      // localStorage no disponible (modo privado, etc.): no mostramos el aviso.
      seen = true;
    }
    if (!seen) setCookiesOpen(true);
  }, []);

  const acceptCookies = () => {
    try {
      localStorage.setItem(COOKIES_KEY, "accepted");
    } catch {
      /* noop */
    }
    setCookiesOpen(false);
  };

  const isDrivers = audience === "conductores";

  return (
    <div className={styles.page}>
      <Header audience={audience} onAudienceChange={setAudience} />
      <Hero audience={audience} />
      <WhatIs audience={audience} />
      {isDrivers ? <ActiveDrivers /> : <TrustEmpresas />}
      <Reviews audience={audience} />
      <Footer />
      {cookiesOpen && (
        <CookiesModal onAccept={acceptCookies} onClose={() => setCookiesOpen(false)} />
      )}
    </div>
  );
}
