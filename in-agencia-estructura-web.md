# IN AGENCIA — Estructura Web para Astro

> Guía de implementación: páginas, secciones y componentes

---

## MAPA DEL SITIO

```
/                         → Home (página principal)
/servicios/ads            → Servicio: Ads de Performance
/servicios/automatizacion → Servicio: Automatización
/servicios/sistemas       → Servicio: Sistemas/Funnels/Web
/casos                    → Casos de éxito (opcional, puede ir en home)
/nosotros                 → Sobre In Agencia
/contacto                 → Formulario de aplicación
/gracias                  → Thank you page post-formulario
```

**Total: 7-8 páginas**

---

## ESTRUCTURA POR PÁGINA

### 1. HOME (`/`)

| Orden | Sección | Componente | Contenido clave |
|-------|---------|------------|-----------------|
| 1 | **Hero** | `<Hero />` | Headline + subtítulo + CTA + línea de credibilidad |
| 2 | **Problema** | `<ProblemSection />` | "El problema con el 90% de las agencias" |
| 3 | **Solución** | `<SolutionSteps />` | 4 pasos: Atraer → Convertir → Automatizar → Optimizar |
| 4 | **Filtro** | `<ForWho />` | Dos columnas: "Es para ti si..." / "NO es para ti si..." |
| 5 | **Casos** | `<CaseStudies />` | 3 casos con números (cards o acordeón) |
| 6 | **Proceso** | `<ProcessTimeline />` | 5 pasos de cómo es trabajar con ustedes |
| 7 | **Garantías** | `<Guarantees />` | 4 compromisos con íconos |
| 8 | **CTA Final** | `<CtaSection />` | Cierre contundente + botón |

---

### 2. SERVICIO: ADS (`/servicios/ads`)

| Orden | Sección | Componente | Contenido clave |
|-------|---------|------------|-----------------|
| 1 | **Hero** | `<ServiceHero />` | "Publicidad que se paga sola" |
| 2 | **Problema** | `<ProblemList />` | Lista de dolores específicos de ads |
| 3 | **Solución** | `<WhatWeDo />` | Estrategia, Creativos, Optimización, Reportes |
| 4 | **Plataformas** | `<Platforms />` | Logos: Meta, Google, TikTok, LinkedIn |
| 5 | **CTA** | `<CtaSection />` | "Quiero ads que generen dinero" |

---

### 3. SERVICIO: AUTOMATIZACIÓN (`/servicios/automatizacion`)

| Orden | Sección | Componente | Contenido clave |
|-------|---------|------------|-----------------|
| 1 | **Hero** | `<ServiceHero />` | "Deja de perseguir leads" |
| 2 | **Problema** | `<ProblemList />` | Leads que se enfrían, tareas repetitivas |
| 3 | **Solución** | `<WhatWeDo />` | Respuesta inmediata, Seguimiento, CRM, Integraciones |
| 4 | **Herramientas** | `<Tools />` | Logos: GHL, Clientify, Make, Zapier |
| 5 | **CTA** | `<CtaSection />` | "Quiero un sistema que venda mientras duermo" |

---

### 4. SERVICIO: SISTEMAS (`/servicios/sistemas`)

| Orden | Sección | Componente | Contenido clave |
|-------|---------|------------|-----------------|
| 1 | **Hero** | `<ServiceHero />` | "Tu web no es un folleto" |
| 2 | **Problema** | `<ProblemList />` | Web bonita pero sin conversiones |
| 3 | **Solución** | `<WhatWeDo />` | Landing pages, Funnels, Páginas de servicio, Optimización |
| 4 | **CTA** | `<CtaSection />` | "Quiero una web que pague mi nómina" |

---

### 5. NOSOTROS (`/nosotros`)

| Orden | Sección | Componente | Contenido clave |
|-------|---------|------------|-----------------|
| 1 | **Historia** | `<Story />` | De dónde nació In Agencia (la frustración) |
| 2 | **Manifiesto** | `<Manifesto />` | Los 5 principios de In |
| 3 | **Datos** | `<Stats />` | +50 clientes, países, etc. |
| 4 | **CTA** | `<CtaSection />` | Invitación a trabajar juntos |

---

### 6. CONTACTO (`/contacto`)

| Orden | Sección | Componente | Contenido clave |
|-------|---------|------------|-----------------|
| 1 | **Intro** | `<ContactIntro />` | "Este es el primer paso" + filtro |
| 2 | **Formulario** | `<ApplicationForm />` | Nombre, email, negocio, inversión actual, qué necesita |
| 3 | **FAQ** | `<Faq />` | Preguntas frecuentes (acordeón) |

---

### 7. GRACIAS (`/gracias`)

| Orden | Sección | Componente | Contenido clave |
|-------|---------|------------|-----------------|
| 1 | **Mensaje** | `<ThankYou />` | Confirmación + qué sigue + link a casos |

---

## ESTRUCTURA DE CARPETAS ASTRO

```
src/
├── components/
│   ├── layout/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Layout.astro
│   │
│   ├── ui/
│   │   ├── Button.astro
│   │   ├── Card.astro
│   │   ├── Badge.astro
│   │   └── Icon.astro
│   │
│   ├── sections/
│   │   ├── Hero.astro
│   │   ├── ServiceHero.astro
│   │   ├── ProblemSection.astro
│   │   ├── ProblemList.astro
│   │   ├── SolutionSteps.astro
│   │   ├── WhatWeDo.astro
│   │   ├── ForWho.astro
│   │   ├── CaseStudies.astro
│   │   ├── CaseCard.astro
│   │   ├── ProcessTimeline.astro
│   │   ├── Guarantees.astro
│   │   ├── CtaSection.astro
│   │   ├── Faq.astro
│   │   ├── FaqItem.astro
│   │   ├── Manifesto.astro
│   │   ├── Stats.astro
│   │   ├── Platforms.astro
│   │   └── Tools.astro
│   │
│   └── forms/
│       └── ApplicationForm.astro
│
├── pages/
│   ├── index.astro              → Home
│   ├── nosotros.astro           → Sobre nosotros
│   ├── contacto.astro           → Contacto/Aplicar
│   ├── gracias.astro            → Thank you
│   ├── casos.astro              → Casos de éxito (opcional)
│   └── servicios/
│       ├── ads.astro
│       ├── automatizacion.astro
│       └── sistemas.astro
│
├── styles/
│   └── global.css
│
├── assets/
│   ├── images/
│   └── icons/
│
└── content/                      → (Opcional) Para manejar copy como data
    ├── casos.json
    ├── faq.json
    └── servicios.json
```

---

## COMPONENTES REUTILIZABLES

| Componente | Uso | Props principales |
|------------|-----|-------------------|
| `<Hero />` | Home | `title`, `subtitle`, `cta`, `credibility` |
| `<ServiceHero />` | Páginas de servicio | `title`, `subtitle`, `cta` |
| `<SectionHeader />` | Títulos de sección | `title`, `subtitle`, `align` |
| `<CtaSection />` | CTA en cualquier página | `title`, `description`, `buttonText`, `buttonUrl`, `variant` |
| `<CaseCard />` | Cada caso de éxito | `title`, `context`, `challenge`, `solution`, `results`, `roi` |
| `<Step />` | Pasos de proceso | `number`, `title`, `description` |
| `<FaqItem />` | Cada pregunta FAQ | `question`, `answer` |
| `<Button />` | Botones globales | `text`, `href`, `variant`, `size` |
| `<Card />` | Cards genéricas | `title`, `description`, `icon` |

---

## NAVEGACIÓN

### Header

```
Logo [IN]     Servicios ▾     Casos     Nosotros     [Agendar llamada]
                │
                ├── Ads de Performance
                ├── Automatización
                └── Sistemas y Funnels
```

### Footer

```
IN AGENCIA

Servicios               Empresa                 Contacto
─────────────────────────────────────────────────────────
Ads de Performance      Nosotros               hola@inagencia.com
Automatización          Casos de Éxito         [LinkedIn]
Sistemas y Funnels      Blog (futuro)          [Instagram]

© 2025 In Agencia. Resultados, no promesas.
```

---

## PALETA DE COLORES (Azules)

```css
:root {
  /* Azules principales */
  --blue-900: #0f172a;    /* Casi negro - fondos oscuros, texto */
  --blue-800: #1e3a5f;    /* Azul oscuro - premium, serio */
  --blue-700: #1e40af;    /* Azul profundo */
  --blue-600: #2563eb;    /* Azul principal */
  --blue-500: #3b82f6;    /* Azul eléctrico - CTAs, acentos */
  --blue-400: #60a5fa;    /* Azul medio */
  --blue-100: #dbeafe;    /* Azul claro - backgrounds */
  --blue-50: #eff6ff;     /* Azul muy claro */

  /* Neutros */
  --white: #ffffff;
  --gray-100: #f3f4f6;
  --gray-400: #9ca3af;
  --gray-600: #4b5563;
  --gray-900: #111827;

  /* Feedback */
  --success: #10b981;
  --error: #ef4444;
}
```

**EVITAR:** `#0077B5` (azul LinkedIn corporativo genérico)

---

## TIPOGRAFÍA SUGERIDA

```css
/* Headlines */
font-family: 'Inter', 'Satoshi', 'Space Grotesk', sans-serif;
font-weight: 700; /* Bold */

/* Body */
font-family: 'Inter', 'DM Sans', sans-serif;
font-weight: 400; /* Regular */

/* Tamaños sugeridos */
--text-hero: clamp(2.5rem, 5vw, 4rem);
--text-h1: clamp(2rem, 4vw, 3rem);
--text-h2: clamp(1.5rem, 3vw, 2rem);
--text-h3: clamp(1.25rem, 2vw, 1.5rem);
--text-body: 1rem;
--text-small: 0.875rem;
```

---

## PRIORIDAD DE DESARROLLO

| Fase | Páginas | Razón |
|------|---------|-------|
| **1** | Home + Contacto + Gracias | Lo mínimo para captar leads |
| **2** | 3 páginas de servicios | Profundidad para SEO y decisores |
| **3** | Nosotros + Casos (página separada) | Autoridad y confianza |
| **4** | Blog (futuro) | SEO a largo plazo |

---

## CAMPOS DEL FORMULARIO DE CONTACTO

```
Nombre completo          [input text] *
Email                    [input email] *
¿Qué tipo de negocio?    [select: E-commerce / B2B / Negocio local / Servicios / Otro] *
¿Ya inviertes en ads?    [select: No / Menos de $1K/mes / $1K-5K/mes / +$5K/mes] *
¿Qué necesitas?          [textarea] *
¿Cómo nos encontraste?   [select: Google / Referido / Redes / Otro]

[ENVIAR MI APLICACIÓN]
```

---

## INTEGRACIONES SUGERIDAS

| Herramienta | Uso |
|-------------|-----|
| **Formularios** | Formspree, Netlify Forms, o directo a GHL/Clientify |
| **Analytics** | Google Analytics 4 + Microsoft Clarity (heatmaps gratis) |
| **Calendario** | Calendly embebido o Cal.com |
| **Chat** | Opcional: WhatsApp Business o Crisp |

---

## CHECKLIST PRE-LANZAMIENTO

- [ ] Todas las páginas cargan en <3 segundos
- [ ] Formulario funciona y llega al CRM/email
- [ ] Meta tags y OG images configurados
- [ ] Favicon y logo en diferentes tamaños
- [ ] Mobile responsive (probar en dispositivos reales)
- [ ] Links de navegación funcionan
- [ ] CTAs llevan a donde deben
- [ ] Página 404 personalizada
- [ ] Google Analytics instalado
- [ ] robots.txt y sitemap.xml generados

---

## ARCHIVOS DE REFERENCIA

| Archivo | Contenido |
|---------|-----------|
| `in-agencia-copy-v2.md` | Copy completo para todas las páginas |
| `in-agencia-estructura-web.md` | Este documento (estructura técnica) |

---

**Documento de estructura para In Agencia**
Framework: Astro
Listo para implementar
