# Cometta Landing

Landing page **informativa** de Cometta, construida con **Next.js (App Router) +
React** y renderizado del lado del servidor (SSR). Comparte el design system del
backoffice (tokens, tipografía Geist, colores de marca).

## Funcionalidad

- Landing **responsive y mobile-first** con un toggle de audiencia
  **conductores ⇄ empresas** que cambia el hero, las features, la sección
  intermedia y las reseñas.
- Aviso de **cookies** con persistencia en `localStorage` (`cometta_cookies_v1`).
- Conexión a PostgreSQL (`pg`) **lista pero sin uso** todavía, apuntando a la misma
  base de datos que el backoffice en la red `cometta_shared_network`.

## Stack

- Next.js 14 (App Router, SSR, output standalone)
- React 18 + TypeScript
- PostgreSQL vía `pg` (sin ORM) — solo el pool de conexión
- CSS plano + CSS Modules

## Estructura

```
src/
  app/
    layout.tsx              # metadata + fuentes Geist
    page.tsx                # Server Component -> <LandingPage />
    globals.css             # design tokens + base + keyframes
  components/landing/       # Header, Hero, WhatIs, Reviews, Footer, modal…
    landing.module.css      # estilos mobile-first (:hover + media queries)
  lib/db.ts                 # pool pg (sin uso por ahora)
```

## Puesta en marcha

### Local (desarrollo)

```bash
cp .env.example .env        # ajusta DATABASE_URL (host localhost:5434 en local)
npm install
npm run dev                 # http://localhost:3000
```

### Docker (producción)

El contenedor escucha en el puerto interno 3000 y se publica en el **3005**.
Requiere que la red `cometta_shared_network` ya exista (la crea el compose de la
base de datos).

```bash
cp .env.example .env        # DATABASE_URL con host "postgres:5432"
docker compose up --build   # http://localhost:3005
```

## Puertos

| Proyecto   | Puerto |
| ---------- | ------ |
| backoffice | 3004   |
| landing    | 3005   |
