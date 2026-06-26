import { LandingPage } from "@/components/landing/LandingPage";

// Server Component: Next.js lo renderiza en el servidor (SSR) y luego
// hidrata la parte interactiva (LandingPage es un Client Component).
export default function Page() {
  return <LandingPage />;
}
