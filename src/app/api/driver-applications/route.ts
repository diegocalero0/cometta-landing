import { NextResponse } from "next/server";
import { createDriverApplication } from "@/lib/queries";
import { parseDriverApplicationInput } from "@/lib/validation";

// Endpoint público: recibe las postulaciones del formulario de la landing.
// No requiere sesión (la landing no tiene auth). El estado nace en 'pending'.
export async function POST(request: Request) {
  const body = await request.json().catch(() => ({}));
  const parsed = parseDriverApplicationInput(body);
  if ("error" in parsed) {
    return NextResponse.json({ error: parsed.error }, { status: 400 });
  }

  try {
    const result = await createDriverApplication(parsed.data);
    return NextResponse.json({ ok: true, id: result.id }, { status: 201 });
  } catch (e) {
    return NextResponse.json(
      { error: "No se pudo registrar la postulación. Intenta de nuevo." },
      { status: 500 }
    );
  }
}
