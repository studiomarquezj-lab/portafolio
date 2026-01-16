
import { CheckCircle2, XCircle } from "lucide-react";

export const AGENCY_CONTENT = {
    brand: {
        name: "In Agencia",
        tagline: "Arquitectura de Sistemas de Adquisición de Clientes",
        description: "No somos una agencia de marketing. Somos una firma de arquitectura de crecimiento. Diseñamos sistemas de adquisición que convierten inversión en crecimiento real.",
        logo: {
            light: "/images/in-svg-blanco.svg",
            dark: "/images/in-svg-negro.svg",
        }
    },
    routes: [
        { name: "Inicio", path: "/" },
        { name: "Consultoría B2B", path: "/b2b" },
        { name: "Growth Services", path: "/servicios" },
        { name: "Portafolio", path: "/portafolio" }, // Added Portfolio
        { name: "Casos de Estudio", path: "/casos" },
        { name: "Metodología", path: "/metodologia" }
    ],
    portfolio: {
        title: "The Proof Cabinet",
        subtitle: "No mostramos logos. Mostramos evidencia.",
        intro: "Aquí encontrarás dashboards reales, capturas de sistemas en operación, audios de clientes y documentación. Porque la autoridad no se dice, se demuestra.",
        quote: "Each proof answers one question: Does this system work in the real world?"
    },
    home: {
        hero: {
            eyebrow: "LA INFRAESTRUCTURA DE LOS $10M+",
            title: "Escala tu empresa B2B sin depender de agencias de marketing.",
            subtitle: "Dejamos de vender 'servicios' para instalar Sistemas de Adquisición Propietarios. Inversión predecible, retorno matemático, propiedad total.",
            cta: "Ver el Sistema (Agendar Auditoría)",
            guarantee: "Garantía de Entrega de Infraestructura: Si no instalamos tu sistema operativo en 60 días, trabajamos gratis hasta lograrlo."
        },
        problem: {
            title: "El Marketing Tradicional está Muerto.",
            items: [
                "Agencias que solo 'queman' presupuesto en Ads sin estrategia de fondo",
                "Leads de baja calidad que saturan a tu equipo comercial",
                "Dependencia total de plataformas que cambian sus reglas cada mes",
                "Falta de visibilidad real sobre el ROI de cada dólar invertido"
            ],
            conclusion: "No necesitas más piezas de contenido. Necesitas una máquina de adquisición."
        },
        difference: {
            title: "La Diferencia entre Sobrevivir y Dominar",
            agency_title: "El Ciclo de la Agencia Tradicional",
            consultancy_title: "El Sistema 'In Agencia'",
            items: [
                {
                    title: "Enfoque",
                    agency: "Venden horas/hombre y tareas tácticas",
                    consultancy: "Instalamos activos digitales permanentes"
                },
                {
                    title: "Control",
                    agency: "Ellos tienen las llaves de tu crecimiento",
                    consultancy: "Tú eres el dueño total de la infraestructura"
                },
                {
                    title: "Métricas",
                    agency: "Clicks, Impresiones y Alcance (Vanidad)",
                    consultancy: "Cacu, LTV y Pipeline de Ventas Real"
                }
            ],
            conclusion: "No somos externos. Somos tu departamento de arquitectura de crecimiento."
        },
        offer: {
            title: "Nuestra Oferta 'Grand Slam'",
            desc: "Instalamos tu infraestructura comercial completa, capacitamos a tu equipo y entregamos el control total. No es un servicio mensual, es un activo para tu balance general.",
            points: [
                "Diseño de Arquitectura de Adquisición Custom",
                "Implementación de Funnels de Alta Conversión",
                "Configuración de Tracking de Precisión Quirúrgica",
                "Transferencia de Operación y Documentación de Sistemas"
            ]
        },
        proof: {
            title: "Evidencia que No Deja Espacio a la Duda",
            subtitle: "Sistemas operando hoy en 4 países, generando millones en pipeline:",
            cases: [
                { name: "Sonepar", desc: "Digitalización de flujo corporativo B2B con resultados sostenibles por 3+ años." },
                { name: "Acceso Crediticio", desc: "Automatización de calificación y entrega de leads calificados a escala nacional." },
                { name: "One Stop Services", desc: "Sistema de captación High-Ticket con flujo constante de citas consultivas." }
            ]
        },
        selection: {
            title: "¿En qué liga estás jugando hoy?",
            b2b: {
                title: "Corporativo & Industrial",
                desc: "Necesitas predecibilidad, control del pipeline y un sistema que no dependa de la rotación de tu equipo.",
                cta: "Arquitectura Corporativa"
            },
            services: {
                title: "Servicios High-Ticket",
                desc: "Necesitas leads calificados ayer. Velocidad, escala y una oferta irresistible que obligue al mercado a comprar.",
                cta: "Escalar a $100k/mes"
            }
        },
        philosophy: {
            quote: "Si tu empresa no tiene un sistema de adquisición predecible, no tienes una empresa, tienes un hobby caro."
        }
    },
    b2b: {
        title: "Consultoría B2B",
        subtitle: "Sistemas de Adquisición para Empresas de Servicios",
        intro: "Diseñamos sistemas que tu empresa puede operar, medir y escalar. Sin dependencia. Sin improvisación.",
        problem: {
            title: "El verdadero problema del crecimiento B2B",
            desc: "El problema no es conseguir leads. El problema es no tener un sistema claro, KPIs compartidos, procesos documentados y control real del pipeline. Sin sistema, cada campaña es un riesgo."
        },
        solution: {
            title: "Qué hacemos en In Agencia (B2B)",
            desc: "No vendemos 'marketing'. Diseñamos infraestructura de adquisición.",
            features: [
                "Diagnóstico profundo del modelo comercial",
                "Arquitectura del sistema de adquisición",
                "Funnels orientados a decisión B2B",
                "Automatización operativa y comercial",
                "Dashboards de KPIs",
                "Documentación y transferencia del sistema"
            ]
        },
        case_study: {
            title: "Caso de implementación: Sonepar",
            type: "Corporación B2B",
            relation: "+3 años de operación continua",
            challenge: "Estructurar un sistema de adquisición y control comercial sostenible.",
            architecture: ["Ads alineados al ciclo B2B", "Procesos claros de calificación", "Integración con operación comercial", "Métricas accionables"],
            result: ["Sistema operativo a largo plazo", "Retención sostenida", "Control total del proceso"],
            note: "Este no es un testimonio. Es un documento de implementación."
        },
        ownership: {
            title: "Ownership y salida limpia",
            points: [
                "Tú controlas la infraestructura",
                "Tú decides cómo escalar",
                "Tú no dependes de la agencia"
            ],
            guarantee: "Si el sistema no cumple los KPIs definidos, puedes finalizar el proyecto sin penalidad y conservar todos los activos desarrollados."
        },
        footer: "In Agencia no reemplaza a tu equipo. Lo potencia con sistema."
    },
    services: {
        title: "Growth para Servicios",
        subtitle: "Leads, citas y control del flujo comercial",
        intro: "Diseñamos sistemas de generación de leads para servicios high ticket que necesitan resultados ahora.",
        problem: {
            title: "El problema real",
            desc: "Más tráfico no significa más ventas. Sin sistema: los leads no califican, las citas se caen, el seguimiento falla y el crecimiento es inconsistente."
        },
        solution: {
            title: "Launch → Leads → Control",
            points: ["Funnel optimizado para conversión", "Ads orientados a intención real", "Automatización de seguimiento", "Visualización clara del flujo de leads"],
            note: "No improvisamos. Lanzamos con estructura."
        },
        guarantee: {
            title: "Launch-to-Leads Guarantee",
            desc: "Si en los primeros 30 días no logramos generar un flujo consistente de leads calificados:",
            options: ["Seguimos trabajando sin costo hasta lograrlo", "Devolvemos tu inversión"],
            note: "Condiciones claras. Sistema completo. Sin letra pequeña."
        },
        proof: {
            title: "Prueba real",
            desc: "Audio real de One Stop Services explicando los resultados obtenidos.",
            quote: "Este es el tipo de reacción que buscamos provocar cuando el sistema empieza a funcionar."
        },
        target: {
            title: "Para quién es",
            points: ["Servicios high ticket", "Equipos listos para cerrar", "Presupuesto para escalar", "Mentalidad de sistema"],
            warning: "Si solo quieres 'probar', este no es tu lugar."
        }
    },
    methodology: {
        title: "Metodología In Agencia",
        subtitle: "Ingeniería de sistemas de adquisición",
        principle: "Todo sistema de adquisición es una pieza de ingeniería. No una campaña creativa.",
        steps: [
            { title: "1. Diagnóstico", desc: "Modelo de negocio, cuellos de botella, capacidad comercial." },
            { title: "2. Arquitectura", desc: "Diseño completo del sistema de adquisición." },
            { title: "3. Implementación", desc: "Funnels, Ads y automatización integrados." },
            { title: "4. Control", desc: "Dashboards, KPIs y optimización." },
            { title: "5. Transferencia", desc: "Documentación y ownership del sistema." }
        ],
        approach: "No vendemos ejecución infinita. Diseñamos sistemas que pueden sostenerse sin nosotros. Ese es el verdadero crecimiento."
    },
    cases: {
        title: "Casos de Estudio",
        subtitle: "Sistemas reales. Resultados medibles.",
        intro: "Aquí no mostramos promesas. Mostramos arquitectura aplicada.",
        structure: ["Contexto del negocio", "Problema real de crecimiento", "Arquitectura del sistema", "Resultado + aprendizaje transferible"],
        filters: ["B2B", "Servicios"],
        note: "Cada caso es una página profunda, no un resumen superficial."
    },
    metrics: {
        successColor: "#10B981"
    }
}
