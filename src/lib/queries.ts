import { query } from "./db";
import type { City, DriverApplicationInput } from "./types";

// Catálogo de ciudades activas para el selector del formulario.
export function listCities(): Promise<City[]> {
  return query<City>(
    `SELECT id, name, region FROM cities WHERE active = TRUE ORDER BY name`
  );
}

// Inserta una nueva postulación de conductor. El estado siempre nace en 'pending'.
export async function createDriverApplication(
  data: DriverApplicationInput
): Promise<{ id: number }> {
  const rows = await query<{ id: number }>(
    `INSERT INTO driver_applications
       (document_type, document_number, full_name, phone_country_code, phone, email, city_id)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING id`,
    [
      data.document_type,
      data.document_number,
      data.full_name,
      data.phone_country_code,
      data.phone,
      data.email,
      data.city_id,
    ]
  );
  return rows[0];
}
