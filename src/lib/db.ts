import { Pool } from "pg";

// Pool de conexiones a PostgreSQL reutilizado entre peticiones.
// En desarrollo Next.js recarga los módulos, así que guardamos el pool
// en globalThis para no abrir conexiones de más en cada hot-reload.
const globalForPg = globalThis as unknown as { pgPool?: Pool };

export const pool =
  globalForPg.pgPool ??
  new Pool({
    connectionString: process.env.DATABASE_URL,
    // Pequeño pool: esta landing tiene poca concurrencia.
    max: 5,
  });

if (process.env.NODE_ENV !== "production") {
  globalForPg.pgPool = pool;
}

// Helper genérico para queries tipadas.
export async function query<T = Record<string, unknown>>(
  text: string,
  params?: unknown[]
): Promise<T[]> {
  const result = await pool.query(text, params);
  return result.rows as T[];
}
