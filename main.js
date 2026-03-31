// ─── TRANSLATIONS ───────────────────────────────────────────────
const translations = {
  en: {
    "nav.services": "Services",
    "nav.work": "Work",
    "nav.about": "About",
    "nav.cta": "Book a call",
    "hero.eyebrow": "BI & Automation Consultant · Miami · LATAM",
    "hero.headline1": "Your business runs",
    "hero.headline2": "on manual work",
    "hero.headline3": "that ",
    "hero.headline4": "should run itself.",
    "hero.sub": "Stop managing your business with spreadsheets and gut feel. I help small and mid-size businesses in Miami and Latin America replace manual work with automated systems — real-time dashboards, AI workflows, automatic reporting, and data-driven decisions. No IT team required.",
    "hero.cta": "Book a free 30-min call",
    "hero.cta2": "See my work",
    "problem.label": "The problem",
    "problem.text": "Your team spends hours every week on tasks a system could do in seconds.",
    "problem.strong1": "Reports built manually. Data scattered across apps. Decisions made on gut feel.",
    "problem.strong2": "The gap is not technology — it's implementation. And that's exactly what I fix.",
    "services.label": "What I do",
    "services.title": "Four ways I can help your business",
    "s1.name": "BI & Visibility",
    "s1.price": "Starting at $1,500",
    "s1.desc": "Real-time dashboards connected to your existing data — POS, spreadsheets, CRM. You see revenue, costs, and margins without opening a single spreadsheet.",
    "s1.time": "2-week delivery",
    "s2.name": "Process Automation",
    "s2.price": "Starting at $3,500",
    "s2.desc": "I map your manual workflows and automate them with n8n — the open-source platform that connects your apps without expensive subscriptions. Reports, alerts, data sync, all running automatically.",
    "s2.time": "3–5 week delivery",
    "s3.name": "AI Integration",
    "s3.price": "Starting at $2,500",
    "s3.desc": "AI-powered tools built for your business — chatbots that answer customer questions, lead qualification, automatic content for social media, and intelligent internal assistants.",
    "s3.time": "3–4 week delivery",
    "s4.name": "Full Partner",
    "s4.price": "From $1,200 / month",
    "s4.desc": "Ongoing systems, dashboards, automation, and AI tools as your business grows. One point of contact. Everything connected. Always improving.",
    "s4.time": "Ongoing retainer",
    "services.cta": "Not sure which one fits? Let's talk",
    "work.label": "Real work. Real businesses.",
    "work.title": "Three projects.\nThree industries.",
    "w1.industry": "Education · Barcelona, Spain",
    "w1.problem": "Fragmented Excel-based system with no unified view across CRM, ERP, and marketing.",
    "w1.desc": "Built a fully automated Microsoft 365 pipeline connecting all data sources into a single Power BI environment. Marketing and operations teams went from weekly manual reports to real-time dashboards accessible to every stakeholder.",
    "w2.industry": "Retail / Import · Miami & Argentina",
    "w2.problem": "Multi-channel retail with inventory across locations, dual-currency costs, and zero margin visibility.",
    "w2.desc": "End-to-end BI system connecting Google Sheets to Power BI: full inventory control, real margin visibility by SKU and channel, and automated financial reporting. The owner now has a clear picture of profitability for the first time.",
    "w3.industry": "Sports Academy · Miami, FL",
    "w3.problem": "Academy managed entirely by intuition — no data on retention, revenue, or coaching performance.",
    "w3.desc": "Designed a BI system surfacing retention rates, revenue by age category, attendance trends, and coach performance. The director now has a management tool — not just a spreadsheet.",
    "about.label": "Who you're working with",
    "about.bio1": "Before going independent, I spent <strong>3 years inside the corporate world</strong> — working as a data analyst at <strong>Planeta Formación</strong> in Barcelona, part of Grupo Planeta, one of Europe's largest international media groups. There I worked alongside large cross-functional teams to migrate a fragmented, Excel-based reporting system to a fully automated Microsoft 365 pipeline — integrating CRM, ERP, and marketing data for thousands of students across multiple countries.",
    "about.bio2": "That experience taught me how enterprise-level systems are built. <strong>Then I went independent — and brought that same thinking to small businesses.</strong>",
    "about.bio3": "Since then I've worked on <strong>20+ projects</strong> across retail, hospitality, sports, and logistics — helping business owners in Miami and Latin America replace manual operations with automated systems that actually scale. No IT department needed. No six-figure software budget. Just clean data, smart workflows, and dashboards your team will actually use.",
    "about.stack": "Stack",
    "stat1": "Years corporate BI experience",
    "stat2": "Projects delivered",
    "stat3": "Industries served",
    "stat4": "Languages",
    "contact.eyebrow": "Ready to start?",
    "contact.title": "Ready to see your<br>business clearly?",
    "contact.sub": "Let's start with a free 30-minute call. No pitch, no commitment — just a conversation about your operations and where automation can save you the most time.",
    "contact.cta": "Schedule a call →",
    "contact.d1": "Miami, FL · LATAM",
    "contact.d2": "English & Spanish",
    "contact.d3": "Response within 24h"
  },
  es: {
    "nav.services": "Servicios",
    "nav.work": "Proyectos",
    "nav.about": "Sobre mí",
    "nav.cta": "Agendar llamada",
    "hero.eyebrow": "Consultor BI & Automatización · Miami · LATAM",
    "hero.headline1": "Tu negocio funciona",
    "hero.headline2": "con trabajo manual",
    "hero.headline3": "que ",
    "hero.headline4": "debería funcionar solo.",
    "hero.sub": "Dejá de gestionar tu negocio con planillas y corazonadas. Ayudo a pequeñas y medianas empresas en Miami y América Latina a reemplazar el trabajo manual con sistemas automatizados — dashboards en tiempo real, flujos de trabajo con IA, reportes automáticos y decisiones basadas en datos. Sin equipo de IT.",
    "hero.cta": "Agendá una llamada gratuita de 30 min",
    "hero.cta2": "Ver proyectos",
    "problem.label": "El problema",
    "problem.text": "Tu equipo gasta horas cada semana en tareas que un sistema podría hacer en segundos.",
    "problem.strong1": "Reportes armados a mano. Datos dispersos en distintas apps. Decisiones tomadas por intuición.",
    "problem.strong2": "La brecha no es tecnológica — es de implementación. Y eso es exactamente lo que yo soluciono.",
    "services.label": "Lo que hago",
    "services.title": "Cuatro formas de ayudar a tu negocio",
    "s1.name": "BI & Visibilidad",
    "s1.price": "Desde $1,500",
    "s1.desc": "Dashboards en tiempo real conectados a tus datos actuales — POS, planillas, CRM. Ves ingresos, costos y márgenes sin abrir una sola planilla.",
    "s1.time": "Entrega en 2 semanas",
    "s2.name": "Automatización de Procesos",
    "s2.price": "Desde $3,500",
    "s2.desc": "Mapeo tus flujos de trabajo manuales y los automatizo con n8n — la plataforma open-source que conecta tus apps sin suscripciones costosas. Reportes, alertas y sincronización de datos, todo funcionando solo.",
    "s2.time": "Entrega en 3–5 semanas",
    "s3.name": "Integración con IA",
    "s3.price": "Desde $2,500",
    "s3.desc": "Herramientas con IA diseñadas para tu negocio — chatbots que responden preguntas de clientes, calificación de leads, contenido automático para redes sociales y asistentes internos inteligentes.",
    "s3.time": "Entrega en 3–4 semanas",
    "s4.name": "Socio Estratégico",
    "s4.price": "Desde $1,200 / mes",
    "s4.desc": "Sistemas, dashboards, automatización e IA en constante evolución a medida que crece tu negocio. Un solo punto de contacto. Todo conectado. Siempre mejorando.",
    "s4.time": "Retainer mensual",
    "services.cta": "¿No sabés cuál es el tuyo? Hablemos",
    "work.label": "Trabajo real. Negocios reales.",
    "work.title": "Tres proyectos.\nTres industrias.",
    "w1.industry": "Educación · Barcelona, España",
    "w1.problem": "Sistema fragmentado en Excel sin visibilidad unificada de CRM, ERP y marketing.",
    "w1.desc": "Construí un pipeline automatizado en Microsoft 365 conectando todas las fuentes de datos en un único entorno de Power BI. Los equipos de marketing y operaciones pasaron de reportes semanales manuales a dashboards en tiempo real accesibles para todos.",
    "w2.industry": "Retail / Importación · Miami & Argentina",
    "w2.problem": "Retail multicanal con stock en distintas ubicaciones, costos en dos monedas y cero visibilidad de márgenes.",
    "w2.desc": "Sistema BI end-to-end conectando Google Sheets con Power BI: control de inventario completo, visibilidad real de márgenes por SKU y canal, y reportes financieros automatizados. El dueño tiene claridad sobre su rentabilidad por primera vez.",
    "w3.industry": "Academia Deportiva · Miami, FL",
    "w3.problem": "Academia gestionada completamente por intuición — sin datos sobre retención, ingresos ni rendimiento de los entrenadores.",
    "w3.desc": "Diseñé un sistema BI que muestra tasas de retención, ingresos por categoría de edad, tendencias de asistencia y performance por entrenador. El director ahora tiene una herramienta de gestión real — no solo una planilla.",
    "about.label": "Con quién vas a trabajar",
    "about.bio1": "Antes de volverme independiente, pasé <strong>3 años en el mundo corporativo</strong> — como analista de datos en <strong>Planeta Formación</strong> en Barcelona, parte de Grupo Planeta, uno de los grupos internacionales de medios más grandes de Europa. Ahí trabajé junto a equipos cross-funcionales para migrar un sistema de reportes fragmentado en Excel a un pipeline automatizado en Microsoft 365 — integrando datos de CRM, ERP y marketing para miles de estudiantes en múltiples países.",
    "about.bio2": "Esa experiencia me enseñó cómo se construyen los sistemas a escala enterprise. <strong>Luego me lancé de forma independiente — y traje esa misma mentalidad a los negocios pequeños.</strong>",
    "about.bio3": "Desde entonces trabajé en <strong>más de 20 proyectos</strong> en retail, hospitalidad, deporte y logística — ayudando a dueños de negocios en Miami y América Latina a reemplazar operaciones manuales con sistemas que realmente escalan. Sin departamento de IT. Sin presupuesto millonario de software. Solo datos limpios, flujos inteligentes y dashboards que tu equipo va a usar de verdad.",
    "about.stack": "Stack",
    "stat1": "Años de experiencia BI corporativa",
    "stat2": "Proyectos entregados",
    "stat3": "Industrias atendidas",
    "stat4": "Idiomas",
    "contact.eyebrow": "¿Listo para empezar?",
    "contact.title": "¿Listo para ver tu<br>negocio con claridad?",
    "contact.sub": "Empecemos con una llamada gratuita de 30 minutos. Sin pitch, sin compromiso — solo una conversación sobre tus operaciones y dónde la automatización puede ahorrarte más tiempo.",
    "contact.cta": "Agendar llamada →",
    "contact.d1": "Miami, FL · LATAM",
    "contact.d2": "Inglés & Español",
    "contact.d3": "Respuesta en menos de 24h"
  }
};

// ─── LANGUAGE SWITCHER ──────────────────────────────────────────
let currentLang = 'en';

function toggleLang() {
  currentLang = currentLang === 'en' ? 'es' : 'en';
  applyTranslations();
  document.getElementById('langToggle').textContent = currentLang === 'en' ? 'ES' : 'EN';
  document.documentElement.lang = currentLang;
}

function applyTranslations() {
  const t = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      el.innerHTML = t[key];
    }
  });
}

// ─── NAV SCROLL ─────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ─── SCROLL REVEAL ──────────────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => observer.observe(el));

// ─── SMOOTH SCROLL ──────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
