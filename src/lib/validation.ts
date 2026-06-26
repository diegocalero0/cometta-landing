import { DOCUMENT_TYPES, type DriverApplicationInput } from "./types";

type ParseResult = { data: DriverApplicationInput } | { error: string };

const VALID_DOC_TYPES = DOCUMENT_TYPES.map((d) => d.value);
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Valida y normaliza el payload del formulario público de conductores.
export function parseDriverApplicationInput(body: unknown): ParseResult {
  if (typeof body !== "object" || body === null) {
    return { error: "Cuerpo inválido" };
  }
  const b = body as Record<string, unknown>;

  const document_type = String(b.document_type ?? "").trim();
  const document_number = String(b.document_number ?? "").trim();
  const full_name = String(b.full_name ?? "").trim();
  const phone_country_code = String(b.phone_country_code ?? "").trim();
  const phone = String(b.phone ?? "").trim();
  const emailRaw = String(b.email ?? "").trim();
  const city_id = Number(b.city_id);

  if (!VALID_DOC_TYPES.includes(document_type)) {
    return { error: "Selecciona un tipo de documento válido" };
  }
  if (!document_number) return { error: "El número de documento es obligatorio" };
  if (!full_name) return { error: "El nombre es obligatorio" };
  if (!phone_country_code) return { error: "Selecciona el indicativo del país" };
  if (!phone) return { error: "El teléfono es obligatorio" };
  if (emailRaw && !EMAIL_RE.test(emailRaw)) {
    return { error: "El correo no tiene un formato válido" };
  }
  if (!Number.isInteger(city_id)) return { error: "Selecciona una ciudad" };

  return {
    data: {
      document_type,
      document_number,
      full_name,
      phone_country_code,
      phone,
      email: emailRaw || null,
      city_id,
    },
  };
}
