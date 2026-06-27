import Link from "next/link";
import type { ReactNode } from "react";
import { Logo } from "@/components/landing/Logo";
import styles from "./page.module.css";

export const metadata = {
  title: "Política de Privacidad — Cometta",
  description:
    "Cómo Cometta, operado por Devapps S.A.S., recolecta, usa y protege tus datos personales, en cumplimiento con la legislación colombiana.",
};

// Encabezado de cada sección numerada (01, 02, …).
function Section({ num, title, children }: { num: string; title: string; children: ReactNode }) {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>
        <span className={styles.num}>{num}</span>
        {title}
      </h2>
      {children}
    </section>
  );
}

function ContactCard({ items }: { items: { label: string; value: string }[] }) {
  return (
    <div className={styles.contactCard}>
      {items.map((it) => (
        <div key={it.label} className={styles.contactItem}>
          <div className={styles.contactLabel}>{it.label}</div>
          <div className={styles.contactValue}>{it.value}</div>
        </div>
      ))}
    </div>
  );
}

export default function PoliticaDePrivacidadPage() {
  return (
    <div className={styles.page}>
      <nav className={styles.nav}>
        <div className={styles.navInner}>
          <Link href="/" aria-label="Volver a Cometta">
            <Logo />
          </Link>
          <span className={styles.navMeta}>LEGAL · v1.0</span>
        </div>
      </nav>

      <header className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.tag}>Documento Legal</span>
          <h1 className={styles.title}>Política de Privacidad</h1>
          <p className={styles.subtitle}>
            En Cometta, operado por Devapps S.A.S., nos tomamos en serio la protección de tus
            datos personales. Esta política describe cómo recolectamos, usamos y protegemos tu
            información, en cumplimiento con la legislación colombiana vigente.
          </p>
          <div className={styles.metaRow}>
            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>Vigente desde</div>
              <div className={styles.metaValue}>04 de Mayo, 2026</div>
            </div>
            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>Versión</div>
              <div className={styles.metaValue}>1.0</div>
            </div>
            <div className={styles.metaItem}>
              <div className={styles.metaLabel}>Jurisdicción</div>
              <div className={styles.metaValue}>Colombia</div>
            </div>
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <Section num="01" title="Identificación del Responsable">
          <p className={styles.p}>
            El responsable del tratamiento de tus datos personales es{" "}
            <strong>Devapps S.A.S.</strong>, sociedad legalmente constituida bajo las leyes de
            la República de Colombia, propietaria y operadora de la plataforma Cometta.
          </p>
          <ContactCard
            items={[
              { label: "Razón Social", value: "Devapps S.A.S." },
              { label: "NIT", value: "901229451-1" },
              { label: "Dirección", value: "Calle 50 #53-70" },
              { label: "Correo", value: "business@devapps.com.co" },
              { label: "Teléfono", value: "+57 318 978 0016" },
            ]}
          />
        </Section>

        <Section num="02" title="Marco Legal">
          <p className={styles.p}>
            Esta política se rige por la legislación colombiana en materia de protección de
            datos personales, en particular:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Ley 1581 de 2012</strong> — Régimen General de Protección de Datos
              Personales.
            </li>
            <li>
              <strong>Decreto 1377 de 2013</strong> — Reglamentación parcial de la Ley 1581 de
              2012.
            </li>
            <li>
              <strong>Decreto 1074 de 2015</strong> — Decreto Único Reglamentario del Sector
              Comercio, Industria y Turismo.
            </li>
            <li>
              <strong>Constitución Política de Colombia, Artículo 15</strong> — Derecho al
              habeas data.
            </li>
          </ul>
        </Section>

        <Section num="03" title="Datos que Recolectamos">
          <p className={styles.p}>
            Para el correcto funcionamiento de la plataforma, podemos recolectar los siguientes
            tipos de datos personales:
          </p>
          <h3 className={styles.subheading}>Datos de identificación</h3>
          <ul className={styles.list}>
            <li>Nombre completo</li>
            <li>Número de documento de identidad</li>
            <li>Fecha de nacimiento</li>
          </ul>
          <h3 className={styles.subheading}>Datos de contacto</h3>
          <ul className={styles.list}>
            <li>Dirección de residencia o entrega</li>
            <li>Número de teléfono</li>
            <li>Correo electrónico</li>
          </ul>
          <h3 className={styles.subheading}>Datos transaccionales y de uso</h3>
          <ul className={styles.list}>
            <li>Historial de pedidos y preferencias</li>
            <li>Información de pago (procesada a través de pasarelas autorizadas)</li>
            <li>Ubicación geográfica (cuando es necesaria para el despacho)</li>
            <li>Datos de navegación y uso de la plataforma</li>
          </ul>
        </Section>

        <Section num="04" title="Finalidad del Tratamiento">
          <p className={styles.p}>
            Los datos personales que recolectamos serán utilizados para las siguientes
            finalidades:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Generación y gestión de pedidos:</strong> procesar, asignar, despachar y
              entregar los pedidos solicitados a través de la plataforma.
            </li>
            <li>
              <strong>Comunicaciones operativas:</strong> notificarte sobre el estado de tus
              pedidos, cambios en el servicio o asuntos relacionados con tu cuenta.
            </li>
            <li>
              <strong>Marketing y comunicaciones comerciales:</strong> enviarte información
              sobre promociones, ofertas, nuevos servicios y contenido relevante de Cometta y
              sus aliados, siempre que hayas otorgado tu consentimiento previo.
            </li>
            <li>
              <strong>Mejora del servicio:</strong> analizar el uso de la plataforma para
              optimizar la experiencia del usuario.
            </li>
            <li>
              <strong>Cumplimiento legal:</strong> atender requerimientos de autoridades
              competentes y dar cumplimiento a obligaciones legales aplicables.
            </li>
          </ul>
        </Section>

        <Section num="05" title="Tus Derechos como Titular">
          <p className={styles.p}>
            De acuerdo con la Ley 1581 de 2012, como titular de tus datos personales tienes los
            siguientes derechos:
          </p>
          <ul className={styles.list}>
            <li>
              <strong>Conocer, actualizar y rectificar</strong> tus datos personales frente a
              Devapps S.A.S.
            </li>
            <li>
              <strong>Solicitar prueba</strong> de la autorización otorgada para el tratamiento
              de tus datos.
            </li>
            <li>
              <strong>Ser informado</strong>, previa solicitud, respecto del uso que se le ha
              dado a tus datos personales.
            </li>
            <li>
              <strong>Presentar quejas</strong> ante la Superintendencia de Industria y Comercio
              (SIC) por infracciones a la normativa vigente.
            </li>
            <li>
              <strong>Revocar la autorización</strong> y/o solicitar la supresión del dato
              cuando el tratamiento no respete los principios, derechos y garantías
              constitucionales y legales.
            </li>
            <li>
              <strong>Acceder de forma gratuita</strong> a tus datos personales que hayan sido
              objeto de tratamiento.
            </li>
          </ul>
        </Section>

        <Section num="06" title="Ejercicio de los Derechos">
          <p className={styles.p}>
            Para ejercer cualquiera de los derechos mencionados, puedes contactarnos a través
            del correo electrónico{" "}
            <a href="mailto:business@devapps.com.co" className={styles.link}>
              business@devapps.com.co
            </a>
            , indicando claramente el derecho que deseas ejercer y adjuntando una copia de tu
            documento de identidad.
          </p>
          <p className={styles.p}>
            Daremos respuesta a tu solicitud dentro de los plazos establecidos por la ley:{" "}
            <strong>diez (10) días hábiles</strong> para consultas y{" "}
            <strong>quince (15) días hábiles</strong> para reclamos, contados a partir del día
            siguiente al de su recepción.
          </p>
        </Section>

        <Section num="07" title="Seguridad de la Información">
          <p className={styles.p}>
            Devapps S.A.S. implementa medidas técnicas, humanas y administrativas razonables
            para proteger tus datos personales contra adulteración, pérdida, consulta, uso o
            acceso no autorizado o fraudulento. Esto incluye protocolos de cifrado, controles de
            acceso y auditorías periódicas a nuestros sistemas.
          </p>
        </Section>

        <Section num="08" title="Conservación de los Datos">
          <p className={styles.p}>
            Tus datos personales serán conservados durante el tiempo necesario para cumplir con
            las finalidades descritas en esta política, así como para atender obligaciones
            legales, contables o fiscales aplicables. Una vez cumplidas dichas finalidades, los
            datos serán suprimidos de manera segura.
          </p>
        </Section>

        <Section num="09" title="Modificaciones">
          <p className={styles.p}>
            Devapps S.A.S. se reserva el derecho de modificar esta Política de Privacidad en
            cualquier momento. Cualquier cambio será comunicado a través de la plataforma o por
            los medios de contacto registrados. Te recomendamos revisar periódicamente esta
            política para mantenerte informado sobre la forma en que protegemos tus datos.
          </p>
        </Section>

        <Section num="10" title="Contacto">
          <p className={styles.p}>
            Si tienes preguntas, comentarios o inquietudes sobre esta política o sobre el
            tratamiento de tus datos personales, puedes contactarnos a través de los siguientes
            medios:
          </p>
          <ContactCard
            items={[
              { label: "Correo electrónico", value: "business@devapps.com.co" },
              { label: "Teléfono", value: "+57 318 978 0016" },
              { label: "Dirección física", value: "Calle 50 #53-70" },
            ]}
          />
        </Section>
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerInner}>
          <span className={styles.footerText}>© 2026 Devapps S.A.S. · Cometta</span>
          <span className={styles.footerStatus}>
            <span className={styles.statusDot} />
            Documento Vigente
          </span>
        </div>
      </footer>
    </div>
  );
}
