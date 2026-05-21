(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const a of n)if(a.type==="childList")for(const t of a.addedNodes)t.tagName==="LINK"&&t.rel==="modulepreload"&&o(t)}).observe(document,{childList:!0,subtree:!0});function i(n){const a={};return n.integrity&&(a.integrity=n.integrity),n.referrerPolicy&&(a.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?a.credentials="include":n.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(n){if(n.ep)return;n.ep=!0;const a=i(n);fetch(n.href,a)}})();document.documentElement.classList.add("js-anim");const d={consulta:{icon:"bi-clipboard2-pulse-fill",titulo:"Consulta Médica General",descripcion:`
      La consulta médica general ofrece atención a pacientes de todas las edades: niños, adolescentes,
      adultos y adultos mayores. Nuestro equipo médico realiza diagnóstico, tratamiento y seguimiento
      de enfermedades agudas y crónicas. Se brinda orientación sobre prevención y promoción de la salud.
      <br><br>
      <strong>¿Cuándo acudir?</strong><br>
      Cuando presente fiebre, dolor, malestar general, enfermedades crónicas o necesite chequeo preventivo.
      <br><br>
      <strong>Horario:</strong> Lunes a Viernes de 8:00 am a 4:00 pm.
    `},materno:{icon:"bi-heart-pulse-fill",titulo:"Atención Materno Infantil",descripcion:`
      Brindamos atención especializada a mujeres embarazadas, madres en período de lactancia y
      recién nacidos. El servicio incluye control prenatal, parto asistido, control postnatal,
      seguimiento del recién nacido y orientación en lactancia materna.
      <br><br>
      <strong>Beneficios:</strong>
      <ul style="margin-left:1.2rem; margin-top:0.5rem; line-height:1.9;">
        <li>Detección temprana de riesgos en el embarazo</li>
        <li>Seguimiento del crecimiento del bebé</li>
        <li>Apoyo en lactancia materna exclusiva</li>
        <li>Consejería nutricional para la madre</li>
      </ul>
    `},vacunacion:{icon:"bi-capsule",titulo:"Vacunación",descripcion:`
      El programa de vacunación protege a la comunidad contra enfermedades prevenibles mediante
      el esquema nacional de vacunación del Ministerio de Salud de Guatemala.
      <br><br>
      <strong>Vacunas disponibles:</strong>
      <ul style="margin-left:1.2rem; margin-top:0.5rem; line-height:1.9;">
        <li>BCG (tuberculosis)</li>
        <li>Pentavalente (DPT + Hepatitis B + Hib)</li>
        <li>Rotavirus</li>
        <li>Neumococo</li>
        <li>MMR (sarampión, paperas, rubéola)</li>
        <li>Varicela</li>
        <li>Influenza</li>
        <li>COVID-19 (según disponibilidad)</li>
      </ul>
      <br>
      <strong>Gratuito</strong> para todos los niños y grupos prioritarios.
    `},crecimiento:{icon:"bi-graph-up-arrow",titulo:"Control de Crecimiento y Desarrollo",descripcion:`
      El control de crecimiento y desarrollo es un servicio preventivo que monitorea el estado
      físico, nutricional y cognitivo de niños y niñas desde el nacimiento hasta los 5 años.
      <br><br>
      <strong>¿Qué se evalúa?</strong>
      <ul style="margin-left:1.2rem; margin-top:0.5rem; line-height:1.9;">
        <li>Peso y talla</li>
        <li>Circunferencia cefálica</li>
        <li>Desarrollo psicomotor</li>
        <li>Alimentación y nutrición</li>
        <li>Detección de anemia y desnutrición</li>
      </ul>
      <br>
      Se recomienda llevar al niño <strong>mensualmente</strong> durante el primer año de vida.
    `},charlas:{icon:"bi-megaphone-fill",titulo:"Charlas Educativas y Prevención",descripcion:`
      Organizamos charlas, talleres y sesiones educativas dirigidas a toda la comunidad con el
      objetivo de promover hábitos saludables y prevenir enfermedades.
      <br><br>
      <strong>Temas frecuentes:</strong>
      <ul style="margin-left:1.2rem; margin-top:0.5rem; line-height:1.9;">
        <li>Higiene personal y del hogar</li>
        <li>Alimentación saludable</li>
        <li>Prevención del dengue, chikungunya y zika</li>
        <li>Enfermedades respiratorias</li>
        <li>Salud sexual y reproductiva</li>
        <li>Prevención del cáncer</li>
      </ul>
      <br>
      Las charlas son <strong>gratuitas</strong> y abiertas a toda la comunidad.
    `},emergencias:{icon:"bi-hospital-fill",titulo:"Atención de Emergencias Básicas",descripcion:`
      El centro cuenta con capacidad para atender emergencias básicas de salud que requieran
      atención inmediata antes de la referencia a un hospital.
      <br><br>
      <strong>Atenciones disponibles:</strong>
      <ul style="margin-left:1.2rem; margin-top:0.5rem; line-height:1.9;">
        <li>Heridas y laceraciones</li>
        <li>Quemaduras leves</li>
        <li>Deshidratación</li>
        <li>Crisis convulsivas</li>
        <li>Dificultad respiratoria leve</li>
        <li>Intoxicaciones leves</li>
      </ul>
      <br>
      En emergencias graves, se realiza <strong>referencia inmediata</strong> al hospital más cercano.
    `},papanicolau:{icon:"bi-file-medical-fill",titulo:"Papanicolau",descripcion:`
      El Papanicolau (PAP) es un examen sencillo, rápido e indoloro que permite detectar de forma
      temprana cambios anormales en las células del cuello uterino, lo que ayuda a prevenir el
      cáncer cervicouterino.
      <br><br>
      <strong>¿Quién debe realizárselo?</strong>
      <ul style="margin-left:1.2rem; margin-top:0.5rem; line-height:1.9;">
        <li>Mujeres de 21 a 65 años</li>
        <li>Mujeres con vida sexual activa</li>
        <li>Se recomienda cada 1 a 3 años según resultado</li>
      </ul>
      <br>
      El examen es <strong>gratuito</strong> en el centro de salud. No duele y dura pocos minutos.
    `},ivaa:{icon:"bi-search-heart",titulo:"IVAA (Inspección Visual con Ácido Acético)",descripcion:`
      El IVAA es un método de tamizaje cervical que permite identificar lesiones precancerosas
      del cuello uterino de forma rápida y sin necesidad de laboratorio.
      <br><br>
      <strong>Características del IVAA:</strong>
      <ul style="margin-left:1.2rem; margin-top:0.5rem; line-height:1.9;">
        <li>Resultado inmediato (no requiere laboratorio)</li>
        <li>Procedimiento rápido y sencillo</li>
        <li>Completamente gratuito</li>
        <li>Realizado por personal capacitado</li>
        <li>Complementa al Papanicolau</li>
      </ul>
      <br>
      Si el resultado es positivo, se brinda <strong>tratamiento o referencia</strong> adecuada.
    `},nutricion:{icon:"bi-basket2-fill",titulo:"Nutrición",descripcion:`
      El servicio de nutrición está orientado a mejorar el estado nutricional de la población,
      con especial énfasis en la niñez, mujeres embarazadas y adultos mayores.
      <br><br>
      <strong>Servicios de nutrición:</strong>
      <ul style="margin-left:1.2rem; margin-top:0.5rem; line-height:1.9;">
        <li>Evaluación nutricional individual</li>
        <li>Consejería en alimentación saludable</li>
        <li>Tratamiento de desnutrición aguda y crónica</li>
        <li>Distribución de suplementos nutricionales</li>
        <li>Educación alimentaria nutricional</li>
      </ul>
      <br>
      Una buena nutrición es la base del <strong>desarrollo físico e intelectual</strong> de los niños.
    `},comadronas:{icon:"bi-person-hearts",titulo:"Atención por Comadronas",descripcion:`
      Las comadronas son parteras tradicionales que brindan atención durante el embarazo, parto
      y posparto. El centro de salud trabaja de manera coordinada con las comadronas de la comunidad
      para garantizar una atención segura, humanizada y culturalmente respetuosa.
      <br><br>
      <strong>¿Qué hacen las comadronas?</strong>
      <ul style="margin-left:1.2rem; margin-top:0.5rem; line-height:1.9;">
        <li>Acompañamiento durante el embarazo</li>
        <li>Asistencia en el parto domiciliar</li>
        <li>Cuidados posnatales a madre y recién nacido</li>
        <li>Orientación en lactancia materna</li>
        <li>Referencia oportuna cuando hay complicaciones</li>
      </ul>
      <br>
      Las comadronas son capacitadas regularmente por el <strong>Ministerio de Salud</strong>.
    `}};(function(){const e=document.getElementById("hamburger"),i=document.getElementById("nav-menu");!e||!i||(e.addEventListener("click",function(){const o=i.classList.toggle("open");e.classList.toggle("open",o),e.setAttribute("aria-expanded",o)}),i.querySelectorAll(".nav__link").forEach(function(o){o.addEventListener("click",function(){i.classList.remove("open"),e.classList.remove("open"),e.setAttribute("aria-expanded","false")})}))})();(function(){const e=document.querySelectorAll("section[id], header[id]"),i=document.querySelectorAll(".nav__link");if(!e.length||!i.length)return;const o=new IntersectionObserver(function(n){n.forEach(function(a){a.isIntersecting&&i.forEach(function(t){t.classList.toggle("active",t.getAttribute("href")==="#"+a.target.id)})})},{rootMargin:"-50% 0px -50% 0px"});e.forEach(function(n){o.observe(n)})})();(function(){const e=document.querySelectorAll(".animate-on-scroll");if(!e.length)return;const i=new IntersectionObserver(function(o){o.forEach(function(n,a){n.isIntersecting&&(setTimeout(function(){n.target.classList.add("visible")},a*60),i.unobserve(n.target))})},{threshold:.12});e.forEach(function(o){i.observe(o)})})();function u(r){const e=d[r],i=document.getElementById("modal-overlay");!e||!i||(document.getElementById("modal-icon").innerHTML='<i class="bi '+e.icon+'"></i>',document.getElementById("modal-title").textContent=e.titulo,document.getElementById("modal-body").innerHTML=e.descripcion,i.classList.add("active"),document.body.style.overflow="hidden",setTimeout(function(){document.getElementById("modal-close").focus()},50))}function l(){const r=document.getElementById("modal-overlay");r&&(r.classList.remove("active"),document.body.style.overflow="")}(function(){const e=document.getElementById("modal-overlay"),i=document.getElementById("modal-close");!e||!i||(i.addEventListener("click",l),e.addEventListener("click",function(o){o.target===e&&l()}),document.addEventListener("keydown",function(o){o.key==="Escape"&&(l(),s())}))})();function m(r,e,i){const o=document.getElementById("lightbox"),n=document.getElementById("lightbox-img"),a=document.getElementById("lightbox-caption"),t=document.getElementById("lightbox-info");!o||!n||(n.src=r,n.alt=e||"",a&&(a.textContent=e||""),t&&(i?(t.textContent=i,t.classList.add("visible")):(t.textContent="",t.classList.remove("visible"))),o.classList.add("active"),document.body.style.overflow="hidden",setTimeout(function(){document.getElementById("lightbox-close").focus()},50))}function s(){const r=document.getElementById("lightbox");if(!r)return;r.classList.remove("active"),document.body.style.overflow="";const e=document.getElementById("lightbox-img");e&&(e.src="",e.alt="");const i=document.getElementById("lightbox-info");i&&(i.textContent="",i.classList.remove("visible"))}(function(){const e=document.getElementById("lightbox"),i=document.getElementById("lightbox-close");!e||!i||(i.addEventListener("click",s),e.addEventListener("click",function(o){o.target===e&&s()}))})();var g={ministerio:{icon:"bi-building",titulo:"Ministerio de Salud Pública y Asistencia Social",descripcion:"<ul><li>Rector del sistema de salud en Guatemala.</li><li>Gestiona hospitales nacionales y centros de salud en todo el país.</li><li>Coordina programas de vacunación, nutrición y salud materna.</li><li>Emite normas y protocolos de atención médica a nivel nacional.</li><li><strong>Línea gratuita de información:</strong> 1517</li><li><strong>Sitio web oficial:</strong> www.mspas.gob.gt</li><li>Este centro de salud depende directamente del MSPAS y aplica todas sus guías de atención.</li></ul>"},hospitales:{icon:"bi-hospital-fill",titulo:"Hospitales de Referencia Cercanos",descripcion:"<ul><li><strong>Hospital Nacional de Chimaltenango</strong> — aprox. 45 min de Santa Apolonia.</li><li><strong>Hospital de Ginecología y Obstetricia (IGSS)</strong> — para afiliadas al seguro social.</li><li><strong>Hospital Roosevelt (Ciudad de Guatemala)</strong> — casos complejos o especializados.</li><li>El Centro de Salud coordina <em>referencias y contrarreferencias</em> con estos hospitales.</li><li>En emergencia grave llama al <strong>120</strong> (Bomberos) o <strong>110</strong> (PNC).</li><li>Solicita tu carta de referencia en este centro para acceder a atención gratuita.</li></ul>"},vacunacion:{icon:"bi-capsule",titulo:"Esquema Nacional de Vacunación",descripcion:"<ul><li><strong>BCG</strong> — Al nacer (protege contra tuberculosis).</li><li><strong>Pentavalente + Rotavirus</strong> — 2, 4 y 6 meses de edad.</li><li><strong>Neumococo</strong> — 2, 4 y 12 meses de edad.</li><li><strong>MMR</strong> — 12 y 18 meses (sarampión, rubeola, paperas).</li><li><strong>VPH</strong> — Niñas de 10 a 13 años (previene cáncer cervicouterino).</li><li><strong>Influenza</strong> — Menores de 5 años y mujeres embarazadas.</li><li>Todas las vacunas son <strong>gratuitas</strong> en este centro de salud.</li><li>Trae la <em>cartilla de vacunación</em> en cada visita para mantenerla al día.</li></ul>"},materna:{icon:"bi-heart-pulse-fill",titulo:"Salud Materna y del Recién Nacido",descripcion:"<ul><li>Inicia tu <strong>control prenatal</strong> desde las primeras semanas de embarazo.</li><li>Se recomiendan mínimo <strong>8 controles</strong> durante el embarazo.</li><li>Suplementación gratuita con <strong>ácido fólico y hierro</strong> durante la gestación.</li><li>Parto institucional o acompañado por comadrona capacitada y registrada.</li><li><strong>Control postnatal</strong>: revisión de madre e hijo/a en las primeras 48 horas.</li><li>Lactancia materna exclusiva recomendada hasta los <strong>6 meses</strong>.</li><li><strong>Signos de alarma:</strong> sangrado abundante, fiebre alta, convulsiones — acude al hospital de inmediato.</li></ul>"},cancer:{icon:"bi-ribbon",titulo:"Prevención del Cáncer Cervicouterino",descripcion:"<ul><li>El cáncer cervicouterino es <strong>prevenible y detectable</strong> a tiempo.</li><li><strong>Papanicolau (PAP)</strong>: prueba gratuita para mujeres de 25 a 65 años.</li><li><strong>IVAA</strong>: Inspección Visual con Ácido Acético, prueba rápida en el centro.</li><li><strong>Vacuna VPH</strong> gratuita para niñas de 10 a 13 años.</li><li>Se recomienda realizarse la prueba <strong>cada 3 años</strong> si el resultado es normal.</li><li>Factores de riesgo: inicio temprano de vida sexual, múltiples parejas, tabaquismo.</li><li>La detección temprana aumenta la tasa de curación a más del <strong>90%</strong>.</li></ul>"},nutricion:{icon:"bi-basket2-fill",titulo:"Nutrición y Alimentación Saludable",descripcion:"<ul><li><strong>Lactancia materna exclusiva</strong> los primeros 6 meses de vida del bebé.</li><li>Incluir frutas, verduras, frijoles, maíz y cereales integrales en la dieta diaria.</li><li><strong>Signos de desnutrición</strong> en niños: bajo peso, talla baja, apatía y cabello frágil.</li><li>Suplementos de <em>micronutrientes (chispitas)</em> gratuitos para niños menores de 5 años.</li><li>Evitar alimentos ultraprocesados, altos en azúcar, sal y grasas trans.</li><li>El <strong>Programa de Vigilancia Nutricional</strong> monitorea el crecimiento infantil mensualmente.</li><li>Consulta con el personal del centro para planes de alimentación personalizados.</li></ul>"},emergencias:{icon:"bi-ambulance",titulo:"Emergencias y Primeros Auxilios",descripcion:"<ul><li><strong>Bomberos Voluntarios:</strong> 122 &nbsp;|&nbsp; <strong>Bomberos Municipales:</strong> 123</li><li><strong>PNC (Policía):</strong> 110 &nbsp;|&nbsp; <strong>CONRED:</strong> 1566</li><li><strong>RCP:</strong> 30 compresiones al pecho + 2 respiraciones de rescate. Repetir hasta recibir ayuda.</li><li><strong>Hemorragia:</strong> presionar firmemente con tela limpia sobre la herida sin retirarla.</li><li><strong>Quemaduras leves:</strong> enfriar con agua corriente fría (nunca hielo) por 10 minutos.</li><li><strong>Deshidratación:</strong> dar suero oral en sorbos pequeños y frecuentes.</li><li>El Centro de Salud atiende emergencias básicas de <strong>lunes a viernes 8:00–16:00 h</strong>.</li></ul>"},planificacion:{icon:"bi-person-hearts",titulo:"Planificación Familiar y Salud Reproductiva",descripcion:"<ul><li>Servicios de planificación familiar <strong>gratuitos y confidenciales</strong> en este centro.</li><li><strong>Métodos disponibles:</strong> pastillas anticonceptivas, inyección mensual y trimestral, condones masculinos y femeninos.</li><li><strong>DIU y métodos de larga duración</strong> disponibles con cita previa.</li><li>Consejería personalizada para parejas y mujeres en edad reproductiva.</li><li>Atención respetuosa, sin discriminación por edad, estado civil o religión.</li><li>Prevención de <em>ITS</em> (infecciones de transmisión sexual): diagnóstico y tratamiento.</li><li>Educación en salud sexual para jóvenes en coordinación con escuelas del municipio.</li></ul>"}};function p(r,e){r.preventDefault();var i=g[e],o=document.getElementById("modal-overlay");!i||!o||(document.getElementById("modal-icon").innerHTML='<i class="bi '+i.icon+'"></i>',document.getElementById("modal-title").textContent=i.titulo,document.getElementById("modal-body").innerHTML=i.descripcion,o.classList.add("active"),document.body.style.overflow="hidden",setTimeout(function(){document.getElementById("modal-close").focus()},50))}(function(){const e=document.querySelectorAll(".filtro-btn"),i=document.querySelectorAll(".video-card");!e.length||!i.length||e.forEach(function(o){o.addEventListener("click",function(){const n=o.getAttribute("data-cat");e.forEach(function(a){a.classList.remove("active")}),o.classList.add("active"),i.forEach(function(a){n==="todos"||a.getAttribute("data-cat")===n?a.classList.remove("oculto"):a.classList.add("oculto")})})})})();(function(){const e=document.getElementById("contacto-form");if(!e)return;const i={nombre:{input:document.getElementById("nombre"),error:document.getElementById("error-nombre")},telefono:{input:document.getElementById("telefono"),error:document.getElementById("error-telefono")},mensaje:{input:document.getElementById("mensaje"),error:document.getElementById("error-mensaje")}},o=document.getElementById("form-success");Object.values(i).forEach(function(a){a.input.addEventListener("input",function(){a.input.classList.remove("error"),a.error.textContent=""})}),e.addEventListener("submit",function(a){a.preventDefault();let t=!0;i.nombre.input.value.trim()||(n(i.nombre,"El nombre es obligatorio."),t=!1);const c=i.telefono.input.value.trim();c?/^[\d\s()+\-]{6,20}$/.test(c)||(n(i.telefono,"Ingresa un número de teléfono válido."),t=!1):(n(i.telefono,"El teléfono es obligatorio."),t=!1),i.mensaje.input.value.trim()?i.mensaje.input.value.trim().length<10&&(n(i.mensaje,"El mensaje debe tener al menos 10 caracteres."),t=!1):(n(i.mensaje,"El mensaje es obligatorio."),t=!1),t&&(e.reset(),o.textContent="✅ ¡Mensaje enviado correctamente! Nos pondremos en contacto contigo pronto.",o.classList.add("visible"),setTimeout(function(){o.classList.remove("visible")},6e3))});function n(a,t){a.input.classList.add("error"),a.error.textContent=t,a.input.focus()}})();(function(){const e=document.getElementById("btn-top");e&&(window.addEventListener("scroll",function(){window.scrollY>400?e.classList.add("visible"):e.classList.remove("visible")},{passive:!0}),e.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})}))})();window.openModal=u;window.closeModal=l;window.openLightbox=m;window.closeLightbox=s;window.openEnlaceInfo=p;
