// Tipos y catálogos para el formulario de postulación de conductores.

export interface City {
  id: number;
  name: string;
  region: string;
}

// Datos que envía el formulario público (status se fuerza a 'pending' en el servidor).
export interface DriverApplicationInput {
  document_type: string;
  document_number: string;
  full_name: string;
  phone_country_code: string;
  phone: string;
  email: string | null;
  city_id: number;
}

// Tipos de documento aceptados (deben coincidir con el CHECK de la tabla).
export const DOCUMENT_TYPES: { value: string; label: string }[] = [
  { value: "CC", label: "Cédula de ciudadanía" },
  { value: "CE", label: "Cédula de extranjería" },
  { value: "PASAPORTE", label: "Pasaporte" },
  { value: "PEP", label: "Permiso especial (PEP)" },
];

// Indicativos de país para el teléfono. Colombia por defecto.
export const COUNTRY_CODES: { value: string; label: string }[] = [
  { value: "+57", label: "🇨🇴 +57" },
  { value: "+58", label: "🇻🇪 +58" },
  { value: "+593", label: "🇪🇨 +593" },
  { value: "+51", label: "🇵🇪 +51" },
  { value: "+507", label: "🇵🇦 +507" },
  { value: "+1", label: "🇺🇸 +1" },
  { value: "+52", label: "🇲🇽 +52" },
  { value: "+34", label: "🇪🇸 +34" },
  { value: "+55", label: "🇧🇷 +55" },
  { value: "+56", label: "🇨🇱 +56" },
  { value: "+54", label: "🇦🇷 +54" },
];
