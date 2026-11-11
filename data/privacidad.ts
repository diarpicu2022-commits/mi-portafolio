import { EMAIL, NAME, type Locale } from "@/data/portfolio";

/**
 * Política de privacidad. Fuente única: la página /privacidad, /en/privacy y los archivos de docs/legal
 * (generados con `npx tsx scripts/privacidad-md.ts`) salen de aquí.
 * BORRADOR TÉCNICO. Antes de publicarlo para terceros lo revisa un abogado.
 */

export const QUEST_KEYS = ["diecu-visited", "diecu-sound", "diecu-night"] as const;

const VERCEL_DOC = "https://vercel.com/docs/analytics/privacy-policy";

export type Bloque = { titulo: string; parrafos: string[]; lista?: string[] };
export type Politica = {
  version: string;
  vigencia: string;
  titulo: string;
  aviso: string;
  bloques: Bloque[];
  borrar: { boton: string; hecho: string; vacio: string };
  volver: string;
};

export const privacidad: Record<Locale, Politica> = {
  es: {
    version: "1.0",
    vigencia: "10 de noviembre de 2026",
    titulo: "Política de privacidad",
    aviso: "",
    bloques: [
      {
        titulo: "Responsable",
        parrafos: [
          `El responsable del tratamiento es ${NAME}, autor de este portafolio.`,
          `El contacto para cualquier asunto de privacidad es ${EMAIL}.`,
        ],
      },
      {
        titulo: "Qué datos se tratan",
        parrafos: [
          "Este sitio no tiene cuentas, ni base de datos, ni un servidor propio que reciba información de los visitantes. Solo se tratan estos datos.",
        ],
        lista: [
          "Formulario de contacto. No envía nada a ningún servidor. Abre la aplicación de correo del visitante con el mensaje redactado. Si el visitante decide enviarlo, el responsable recibe el nombre, la dirección de correo y el contenido del mensaje.",
          `Medición de visitas con Vercel Web Analytics, solo en el sitio publicado. No usa cookies. Cada visita registra fecha y hora, página y ruta, página de origen, parámetros de la dirección filtrados, ubicación aproximada (país, región y ciudad), sistema operativo, navegador y tipo de dispositivo. La visita se identifica con un valor calculado a partir de la petición que se descarta a las 24 horas. La dirección IP no se asocia a los registros. Fuente: ${VERCEL_DOC}.`,
          `Mapa 2D (/quest). Guarda en el almacenamiento local del navegador las zonas visitadas, la preferencia de sonido y el modo noche, con las claves ${QUEST_KEYS.join(", ")}. Estos datos no salen del dispositivo.`,
        ],
      },
      {
        titulo: "Finalidad",
        parrafos: [
          "Los mensajes se usan solo para responder a quien escribe. La medición de visitas sirve para conocer de forma agregada cuántas personas visitan el sitio y qué páginas consultan. El almacenamiento local sirve para recordar el progreso del mapa entre visitas.",
        ],
      },
      {
        titulo: "Autorización",
        parrafos: [
          "Al enviar un mensaje desde su propio correo, el visitante autoriza el tratamiento de los datos que incluye para la finalidad descrita. Los datos de medición se agrupan en estadísticas y no identifican a nadie.",
        ],
      },
      {
        titulo: "Con quién se comparten",
        parrafos: [
          "Los datos no se venden ni se ceden a terceros. Intervienen como proveedores Vercel Inc., que aloja el sitio y presta la medición de visitas desde Estados Unidos, y los servicios de correo del visitante y del responsable.",
        ],
      },
      {
        titulo: "Conservación",
        parrafos: [
          "Los mensajes se conservan mientras sean necesarios para responder y se eliminan cuando el titular lo solicite. El identificador de visita de Vercel se descarta a las 24 horas. El progreso del mapa permanece en el navegador hasta que el visitante lo borre.",
        ],
      },
      {
        titulo: "Seguridad",
        parrafos: [
          "El sitio se sirve por HTTPS. No se guardan datos de visitantes en servidores propios.",
        ],
      },
      {
        titulo: "Derechos del titular",
        parrafos: ["De acuerdo con el artículo 8 de la Ley 1581 de 2012, el titular puede:"],
        lista: [
          "Conocer, actualizar y rectificar sus datos.",
          "Solicitar prueba de la autorización otorgada.",
          "Ser informado sobre el uso que se ha dado a sus datos.",
          "Revocar la autorización y solicitar la supresión de sus datos.",
          "Acceder en forma gratuita a sus datos.",
          "Presentar quejas ante la Superintendencia de Industria y Comercio.",
        ],
      },
      {
        titulo: "Cómo ejercerlos",
        parrafos: [
          `Escriba a ${EMAIL} indicando su nombre y la solicitud. Las consultas se atienden en un máximo de diez días hábiles y los reclamos en un máximo de quince días hábiles, según los artículos 14 y 15 de la Ley 1581 de 2012.`,
          "El progreso del mapa se puede borrar en cualquier momento con el botón de esta página o desde la configuración del navegador.",
        ],
      },
      {
        titulo: "Cookies",
        parrafos: [
          "Este sitio no usa cookies propias ni de terceros. Por eso no muestra un aviso de cookies.",
        ],
      },
      {
        titulo: "Menores de edad",
        parrafos: ["El sitio no está dirigido a menores de edad y no recoge datos de ellos de forma intencional."],
      },
      {
        titulo: "Marco legal",
        parrafos: [
          "Ley 1581 de 2012 y Decreto 1377 de 2013, compilado en el Decreto 1074 de 2015, de la República de Colombia.",
        ],
      },
      {
        titulo: "Cambios",
        parrafos: [
          "Cualquier cambio se publica en esta página con una nueva versión y fecha de vigencia. Si cambia la finalidad del tratamiento, se pedirá de nuevo la autorización.",
        ],
      },
    ],
    borrar: {
      boton: "Borrar el progreso del mapa",
      hecho: "Listo. El progreso, el sonido y el modo noche del mapa se borraron de este navegador.",
      vacio: "Este navegador no tenía progreso del mapa guardado.",
    },
    volver: "Volver al portafolio",
  },
  en: {
    version: "1.0",
    vigencia: "November 10, 2026",
    titulo: "Privacy policy",
    aviso: "",
    bloques: [
      {
        titulo: "Data controller",
        parrafos: [
          `The data controller is ${NAME}, author of this portfolio.`,
          `The contact for any privacy matter is ${EMAIL}.`,
        ],
      },
      {
        titulo: "What data is processed",
        parrafos: [
          "This site has no accounts, no database and no server of its own that receives visitor information. Only the data described below is processed.",
        ],
        lista: [
          "Contact form. It sends nothing to any server. It opens the visitor's email app with the message drafted. If the visitor chooses to send it, the controller receives the name, the email address and the content of the message.",
          `Visit measurement with Vercel Web Analytics, only on the published site. It does not use cookies. Each visit records date and time, page and route, referrer, filtered query parameters, approximate location (country, region and city), operating system, browser and device type. The visit is identified by a value derived from the request that is discarded after 24 hours. The IP address is not associated with the records. Source: ${VERCEL_DOC}.`,
          `2D map (/en/quest). It stores in the browser's local storage the visited zones, the sound preference and night mode, under the keys ${QUEST_KEYS.join(", ")}. This data never leaves the device.`,
        ],
      },
      {
        titulo: "Purpose",
        parrafos: [
          "Messages are used only to reply to the sender. Visit measurement shows, in aggregate, how many people visit the site and which pages they read. Local storage remembers the map progress between visits.",
        ],
      },
      {
        titulo: "Authorization",
        parrafos: [
          "By sending a message from their own email, the visitor authorizes the processing of the data it contains for the purpose described. Measurement data is aggregated and does not identify a person.",
        ],
      },
      {
        titulo: "Who receives the data",
        parrafos: [
          "Data is not sold or transferred to third parties. Vercel Inc., which hosts the site and provides visit measurement from the United States, and the email services of the visitor and the controller act as providers.",
        ],
      },
      {
        titulo: "Retention",
        parrafos: [
          "Messages are kept while they are needed to reply and are deleted when the data subject asks. Vercel's visit identifier is discarded after 24 hours. Map progress stays in the browser until the visitor deletes it.",
        ],
      },
      {
        titulo: "Security",
        parrafos: ["The site is served over HTTPS. No visitor data is stored on servers of its own."],
      },
      {
        titulo: "Rights of the data subject",
        parrafos: ["Under article 8 of Colombian Law 1581 of 2012, the data subject may:"],
        lista: [
          "Know, update and correct their data.",
          "Request proof of the authorization given.",
          "Be informed of how their data has been used.",
          "Revoke the authorization and request deletion of their data.",
          "Access their data free of charge.",
          "File complaints with the Superintendence of Industry and Commerce.",
        ],
      },
      {
        titulo: "How to exercise them",
        parrafos: [
          `Write to ${EMAIL} with your name and your request. Inquiries are answered within ten business days and claims within fifteen business days, under articles 14 and 15 of Law 1581 of 2012.`,
          "Map progress can be deleted at any time with the button on this page or from the browser settings.",
        ],
      },
      {
        titulo: "Cookies",
        parrafos: ["This site uses no first-party or third-party cookies. That is why it shows no cookie banner."],
      },
      {
        titulo: "Minors",
        parrafos: ["The site is not aimed at minors and does not knowingly collect their data."],
      },
      {
        titulo: "Legal framework",
        parrafos: [
          "Law 1581 of 2012 and Decree 1377 of 2013, compiled in Decree 1074 of 2015, of the Republic of Colombia.",
        ],
      },
      {
        titulo: "Changes",
        parrafos: [
          "Any change is published on this page with a new version and effective date. If the purpose of processing changes, authorization will be requested again.",
        ],
      },
    ],
    borrar: {
      boton: "Delete map progress",
      hecho: "Done. Map progress, sound and night mode were deleted from this browser.",
      vacio: "This browser had no saved map progress.",
    },
    volver: "Back to the portfolio",
  },
};

export const privacyPath: Record<Locale, string> = { es: "/privacidad", en: "/en/privacy" };
