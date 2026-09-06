/* ==========================================================================
   FUNCIONES COMPARTIDAS
   Menú, buscador, bandeja de cotización, enlaces de WhatsApp y esquemas SVG.
   No necesitas editar este archivo para administrar el catálogo.
   ========================================================================== */

/* ---------- Utilidades ---------- */
const $  = (s, ctx = document) => ctx.querySelector(s);
const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));

function escapar(t){
  return String(t).replace(/[&<>"']/g, c => (
    { "&":"&amp;", "<":"&lt;", ">":"&gt;", '"':"&quot;", "'":"&#39;" }[c]
  ));
}

function normalizar(t){
  return String(t).toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function producto(id){ return window.PRODUCTOS.find(p => p.id === id); }

function nombreCategoria(id){
  const c = window.CATEGORIAS.find(c => c.id === id);
  return c ? c.nombre : id;
}

/* ---------- WhatsApp ---------- */
function enlaceWhatsapp(mensaje){
  return "https://wa.me/" + window.CONFIG.whatsapp + "?text=" + encodeURIComponent(mensaje);
}
function waGeneral(){ return enlaceWhatsapp(window.CONFIG.msgGeneral); }
function waProducto(nombre){
  return enlaceWhatsapp(window.CONFIG.msgProducto.replace("{producto}", nombre));
}

/* ---------- Iconos ---------- */
const ICONOS = {
  whatsapp: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.7.1-.2.3-.7 1-.9 1.2-.2.2-.3.2-.6.1-.3-.2-1.2-.5-2.3-1.4-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6l.5-.5c.1-.2.2-.3.3-.5 0-.2 0-.4 0-.5 0-.2-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.5.1-.8.4-.3.3-1 1-1 2.5s1.1 2.9 1.2 3.1c.1.2 2.1 3.2 5 4.5.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.4.2-.7.2-1.2.2-1.4-.1-.1-.3-.2-.6-.3z"/><path d="M12 2C6.5 2 2 6.5 2 12c0 1.8.5 3.4 1.3 4.9L2 22l5.2-1.3c1.4.8 3 1.2 4.8 1.2 5.5 0 10-4.5 10-10S17.5 2 12 2zm0 18.2c-1.6 0-3.1-.4-4.4-1.2l-.3-.2-3.1.8.8-3-.2-.3c-.8-1.3-1.3-2.9-1.3-4.5C3.5 7.3 7.3 3.5 12 3.5S20.5 7.3 20.5 12 16.7 20.2 12 20.2z"/></svg>',
  buscar: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg>',
  menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
  izq: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m15 5-7 7 7 7"/></svg>',
  der: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m9 5 7 7-7 7"/></svg>',
  mas: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m4 12 5.5 5.5L20 7"/></svg>',
  montana: '<svg viewBox="0 0 100 60" fill="currentColor" aria-hidden="true"><path d="M2 58 L30 6 L48 34 L60 16 L78 42 Q88 56 74 58 Z"/></svg>',
  pausa: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><rect x="7" y="5" width="3.4" height="14" rx="1"/><rect x="13.6" y="5" width="3.4" height="14" rx="1"/></svg>',
  play:  '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l11-6.5z"/></svg>'
};

/* ---------- Rutas de imagen ---------- */
function rutaFoto(id, n){ return "img/productos/" + id + "-" + n + ".webp"; }

function etiquetaFoto(p, n){
  const vistas = ["vista frontal", "detalle de personalización", "vista posterior"];
  return p.nombre + " personalizada — " + (vistas[n-1] || "vista " + n);
}

/* Marca de reemplazo mientras no exista la foto */
function fotoConRespaldo(id, n, alt, clase){
  return '<img src="' + rutaFoto(id, n) + '" alt="' + escapar(alt) + '"'
       + (clase ? ' class="' + clase + '"' : '')
       + ' loading="lazy" decoding="async"'
       + ' onerror="this.outerHTML=\'<div class=&quot;sin-foto&quot;>Foto ' + n + ' pendiente</div>\'">';
}

/* ==========================================================================
   ESQUEMAS DE MEDICIÓN  (dibujos A / B / C de la tabla de tallas)
   ========================================================================== */
const ESQUEMAS = {
  "chaqueta": `<svg viewBox="0 0 120 150" fill="none" stroke="#0B3A47" stroke-width="1.6">
    <path d="M42 22 55 16h10l13 6 22 12-8 22-10-4v70H36V52l-10 4-8-22z"/>
    <path d="M60 22v92" stroke-dasharray="3 3"/>
    <path d="M30 66h60" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <path d="M46 24v90" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <path d="M88 30 104 96" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <circle cx="94" cy="60" r="7" fill="#fff"/><text x="94" y="63.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">A</text>
    <circle cx="36" cy="30" r="7" fill="#fff"/><text x="36" y="33.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">B</text>
    <circle cx="108" cy="34" r="7" fill="#fff"/><text x="108" y="37.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">C</text>
  </svg>`,

  "chaqueta-capota": `<svg viewBox="0 0 120 150" fill="none" stroke="#0B3A47" stroke-width="1.6">
    <path d="M44 26c0-12 6-18 16-18s16 6 16 18"/>
    <path d="M44 26 30 34l-9 22 10 4v56h58V60l10-4-9-22-14-8z"/>
    <path d="M60 26v90" stroke-dasharray="3 3"/>
    <path d="M30 70h60" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <path d="M44 30v86" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <path d="M88 34 104 100" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <circle cx="94" cy="64" r="7" fill="#fff"/><text x="94" y="67.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">A</text>
    <circle cx="34" cy="36" r="7" fill="#fff"/><text x="34" y="39.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">B</text>
    <circle cx="108" cy="38" r="7" fill="#fff"/><text x="108" y="41.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">C</text>
  </svg>`,

  "chaleco": `<svg viewBox="0 0 120 150" fill="none" stroke="#0B3A47" stroke-width="1.6">
    <path d="M44 22 55 16h10l11 6 16 10v96H28V32z"/>
    <path d="M60 22v96" stroke-dasharray="3 3"/>
    <path d="M32 68h56" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <path d="M46 26v92" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <circle cx="92" cy="62" r="7" fill="#fff"/><text x="92" y="65.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">A</text>
    <circle cx="36" cy="30" r="7" fill="#fff"/><text x="36" y="33.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">B</text>
  </svg>`,

  "buzo": `<svg viewBox="0 0 120 150" fill="none" stroke="#0B3A47" stroke-width="1.6">
    <path d="M46 22c3 5 8 7 14 7s11-2 14-7l22 12-8 24-10-4v62H36V54l-10 4-8-24z"/>
    <path d="M30 66h60" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <path d="M46 26v90" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <path d="M88 32 104 96" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <circle cx="94" cy="60" r="7" fill="#fff"/><text x="94" y="63.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">A</text>
    <circle cx="36" cy="30" r="7" fill="#fff"/><text x="36" y="33.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">B</text>
    <circle cx="108" cy="36" r="7" fill="#fff"/><text x="108" y="39.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">C</text>
  </svg>`,

  "buzo-capota": `<svg viewBox="0 0 120 150" fill="none" stroke="#0B3A47" stroke-width="1.6">
    <path d="M46 24c0-11 6-16 14-16s14 5 14 16"/>
    <path d="M46 24 28 34l-8 24 10 4v54h60V62l10-4-8-24-18-10z"/>
    <path d="M42 78h36v20H42z"/>
    <path d="M30 68h60" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <path d="M46 30v86" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <path d="M88 34 104 98" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <circle cx="94" cy="62" r="7" fill="#fff"/><text x="94" y="65.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">A</text>
    <circle cx="34" cy="36" r="7" fill="#fff"/><text x="34" y="39.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">B</text>
    <circle cx="108" cy="38" r="7" fill="#fff"/><text x="108" y="41.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">C</text>
  </svg>`,

  "polo": `<svg viewBox="0 0 120 150" fill="none" stroke="#0B3A47" stroke-width="1.6">
    <path d="M48 20 42 24l-22 12 8 18 12-4v72h40V50l12 4 8-18-22-12-6-4z"/>
    <path d="M48 20 60 34 72 20" /><path d="M56 34h8v14h-8z"/>
    <path d="M32 62h56" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <path d="M42 28v94" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <circle cx="92" cy="58" r="7" fill="#fff"/><text x="92" y="61.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">A</text>
    <circle cx="32" cy="32" r="7" fill="#fff"/><text x="32" y="35.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">B</text>
  </svg>`,

  "camisa": `<svg viewBox="0 0 120 150" fill="none" stroke="#0B3A47" stroke-width="1.6">
    <path d="M46 18 36 24 20 34l8 20 10-4v72h44V50l10 4 8-20-16-10-10-6z"/>
    <path d="M46 18 60 30 74 18"/><path d="M60 30v88" stroke-dasharray="3 3"/>
    <path d="M32 62h56" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <path d="M42 26v96" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <path d="M86 30 102 96" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <circle cx="92" cy="58" r="7" fill="#fff"/><text x="92" y="61.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">A</text>
    <circle cx="32" cy="30" r="7" fill="#fff"/><text x="32" y="33.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">B</text>
    <circle cx="106" cy="34" r="7" fill="#fff"/><text x="106" y="37.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">C</text>
  </svg>`,

  "pantalon": `<svg viewBox="0 0 120 150" fill="none" stroke="#0B3A47" stroke-width="1.6">
    <path d="M34 18h52v14l-4 106H64l-4-72-4 72H38l-4-106z"/>
    <path d="M34 32h52"/>
    <path d="M34 22h52" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <path d="M34 44h52" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <path d="M96 20v118" stroke="#2E6FD9" stroke-dasharray="4 3"/>
    <circle cx="60" cy="12" r="7" fill="#fff"/><text x="60" y="15.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">A</text>
    <circle cx="26" cy="44" r="7" fill="#fff"/><text x="26" y="47.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">B</text>
    <circle cx="108" cy="78" r="7" fill="#fff"/><text x="108" y="81.5" font-size="8" fill="#0B3A47" text-anchor="middle" stroke="none">C</text>
  </svg>`
};

/* ==========================================================================
   CABECERA: menú y buscador
   ========================================================================== */
function montarCabecera(activo){
  const nav = $("#nav");
  if (nav){
    nav.innerHTML = window.CATEGORIAS.map(c =>
      '<a href="index.html?categoria=' + c.id + '"' +
      (activo === c.id ? ' class="activo" aria-current="page"' : '') +
      '>' + escapar(c.nombre) + '</a>'
    ).join("");
  }

  const btnMenu = $("#btn-menu");
  if (btnMenu && nav){
    btnMenu.addEventListener("click", () => {
      const abierto = nav.classList.toggle("abierto");
      btnMenu.setAttribute("aria-expanded", abierto);
    });
  }

  const wa = $("#wa-flotante");
  if (wa) wa.href = waGeneral();

  montarBuscador();
}

function montarBuscador(){
  const campo = $("#buscar");
  const caja  = $("#sugerencias");
  if (!campo || !caja) return;

  function cerrar(){ caja.classList.add("oculto"); caja.innerHTML = ""; }

  campo.addEventListener("input", () => {
    const q = normalizar(campo.value.trim());
    if (q.length < 2) return cerrar();

    const hits = window.PRODUCTOS.filter(p =>
      normalizar(p.nombre + " " + p.resumen + " " + nombreCategoria(p.categoria) + " " + p.claves.join(" ")).includes(q)
    ).slice(0, 7);

    caja.innerHTML = hits.length
      ? hits.map(p =>
          '<a href="producto.html?id=' + p.id + '">' + escapar(p.nombre) +
          '<span>' + escapar(nombreCategoria(p.categoria)) + '</span></a>'
        ).join("")
      : '<p class="vacio">No encontramos prendas con ese nombre. Escribe al asesor y te ayudamos.</p>';

    caja.classList.remove("oculto");
  });

  campo.addEventListener("keydown", e => {
    if (e.key === "Escape") { cerrar(); campo.blur(); }
    if (e.key === "Enter"){
      const primero = caja.querySelector("a");
      if (primero) window.location.href = primero.href;
    }
  });

  document.addEventListener("click", e => {
    if (!caja.contains(e.target) && e.target !== campo) cerrar();
  });
}

/* ==========================================================================
   BANDEJA DE COTIZACIÓN
   Guarda la selección mientras el visitante navega y arma un solo mensaje.
   ========================================================================== */
const Cotizacion = {
  clave: "serrania_cotizacion",
  items: [],

  cargar(){
    try { this.items = JSON.parse(sessionStorage.getItem(this.clave)) || []; }
    catch(e){ this.items = []; }
    this.pintar();
  },

  guardar(){
    try { sessionStorage.setItem(this.clave, JSON.stringify(this.items)); } catch(e){}
    this.pintar();
  },

  tiene(id){ return this.items.includes(id); },

  alternar(id){
    const i = this.items.indexOf(id);
    if (i >= 0) this.items.splice(i, 1);
    else this.items.push(id);
    this.guardar();
    return this.tiene(id);
  },

  quitar(id){
    this.items = this.items.filter(x => x !== id);
    this.guardar();
  },

  vaciar(){ this.items = []; this.guardar(); },

  mensaje(){
    const lista = this.items.map((id, n) => {
      const p = producto(id);
      return (n + 1) + ". " + (p ? p.nombre : id);
    }).join("\n");
    return window.CONFIG.msgLista.replace("{lista}", lista);
  },

  pintar(){
    const barra = $("#bandeja");
    if (!barra) return;

    const n = this.items.length;
    document.body.classList.toggle("con-bandeja", n > 0);
    barra.classList.toggle("visible", n > 0);
    if (!n) return;

    barra.innerHTML =
      '<div class="contenedor"><div class="bandeja-fila">' +
        '<div class="bandeja-texto">' +
          '<strong>' + n + (n === 1 ? " prenda seleccionada" : " prendas seleccionadas") + '</strong>' +
          '<span>Envía todo en un solo mensaje</span>' +
        '</div>' +
        '<div class="bandeja-items">' +
          this.items.map(id => {
            const p = producto(id);
            return '<span class="chip">' + escapar(p ? p.nombre : id) +
                   '<button type="button" data-quitar="' + id + '" aria-label="Quitar ' +
                   escapar(p ? p.nombre : id) + '">×</button></span>';
          }).join("") +
        '</div>' +
        '<a class="btn btn-primario" href="' + enlaceWhatsapp(this.mensaje()) + '" target="_blank" rel="noopener">' +
          ICONOS.whatsapp + 'Pedir cotización</a>' +
        '<button type="button" class="btn btn-linea-claro btn-chico" id="vaciar-bandeja">Vaciar</button>' +
      '</div></div>';

    $$("[data-quitar]", barra).forEach(b =>
      b.addEventListener("click", () => {
        Cotizacion.quitar(b.dataset.quitar);
        document.dispatchEvent(new CustomEvent("cotizacion:cambio"));
      })
    );

    const vaciar = $("#vaciar-bandeja", barra);
    if (vaciar) vaciar.addEventListener("click", () => {
      Cotizacion.vaciar();
      document.dispatchEvent(new CustomEvent("cotizacion:cambio"));
    });
  }
};

/* ==========================================================================
   TABLA DE TALLAS  (se usa en la ficha de producto)
   ========================================================================== */
function dibujarTallas(mapa, contenedor){
  const claves = Object.entries(mapa).filter(([, v]) => v && window.TALLAS[v]);
  if (!claves.length){ contenedor.innerHTML = ""; return false; }

  const etiqueta = { hombre:"Hombre", mujer:"Mujer", unisex:"Unisex" };

  const pestanas = claves.length > 1
    ? '<div class="tallas-pestanas" role="tablist">' + claves.map(([g], i) =>
        '<button type="button" role="tab" data-genero="' + g + '" aria-selected="' + (i===0) + '">' +
        (etiqueta[g] || g) + '</button>').join("") + '</div>'
    : "";

  contenedor.innerHTML =
    '<h2>Guía de tallas</h2>' + pestanas + '<div id="tallas-cuerpo"></div>' +
    '<div class="tallas-ayuda">' +
      '<ol>' + window.TALLAS_INSTRUCCIONES.map(i => '<li>' + escapar(i) + '</li>').join("") + '</ol>' +
      '<p class="tallas-nota">' + escapar(window.TALLAS_NOTA) + '</p>' +
    '</div>';

  function pintar(clave){
    const t = window.TALLAS[clave];
    const cuerpo = $("#tallas-cuerpo", contenedor);

    cuerpo.innerHTML =
      (t.aviso ? '<p class="tallas-aviso">' + escapar(t.aviso) + '</p>' : '') +
      '<div class="tallas-caja">' +
        '<div class="tallas-esquema">' + (ESQUEMAS[t.esquema] || "") + '</div>' +
        '<div class="tabla-envoltura"><table class="tallas">' +
          '<thead><tr><th scope="col">Talla</th>' +
            t.columnas.map(c => '<th scope="col">' + escapar(c) + '</th>').join("") +
          '</tr></thead><tbody>' +
          Object.entries(t.filas).map(([talla, medidas]) =>
            '<tr><th scope="row">' + escapar(talla) + '</th>' +
            medidas.map(m => '<td>' + m + ' cm</td>').join("") + '</tr>'
          ).join("") +
        '</tbody></table></div>' +
      '</div>';
  }

  pintar(claves[0][1]);

  $$(".tallas-pestanas button", contenedor).forEach(b =>
    b.addEventListener("click", () => {
      $$(".tallas-pestanas button", contenedor).forEach(o => o.setAttribute("aria-selected", "false"));
      b.setAttribute("aria-selected", "true");
      pintar(mapa[b.dataset.genero]);
    })
  );

  return true;
}

/* ---------- Arranque ---------- */
document.addEventListener("DOMContentLoaded", () => Cotizacion.cargar());


/* ==========================================================================
   CINTA DE MARCAS
   Reparte las marcas en dos filas y duplica cada una para que el bucle
   se vea continuo, sin salto al reiniciar.
   ========================================================================== */
function claveMarca(nombre){
  return normalizar(nombre).replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

function montarMarcas(){
  // Franja compacta apoyada en el borde inferior del hero
  pintarCinta($("#marcas-hero"), true);
  // Banda completa, más abajo en la página
  pintarCinta($("#marcas"), false);
}

function pintarCinta(caja, compacta){
  if (!caja || !window.MARCAS || !window.MARCAS.length) return;

  function pieza(nombre){
    const archivo = "img/marcas/" + claveMarca(nombre) + ".png";
    return '<div class="marca">' +
      '<img src="' + archivo + '" alt="' + escapar(nombre) + '" loading="lazy" decoding="async" ' +
      'onerror="this.outerHTML=\'<span class=&quot;marca-texto&quot;>' + escapar(nombre) + '</span>\'">' +
    '</div>';
  }

  function fila(marcas, inversa){
    return '<div class="cinta' + (inversa ? ' cinta-inversa' : '') + '" aria-hidden="' + !!inversa + '">' +
      '<div class="cinta-pista">' +
        // se pinta dos veces para que el bucle empalme sin salto
        marcas.map(pieza).join("") + marcas.map(pieza).join("") +
      '</div></div>';
  }

  if (compacta){
    // Una sola fila: en el hero conviene que respire
    caja.innerHTML =
      '<div class="contenedor"><p class="cinta-rotulo">' + escapar(window.MARCAS_TITULO) + '</p></div>' +
      fila(window.MARCAS, false) + mando();
    activarMandoCinta(caja);
    return;
  }

  const mitad = Math.ceil(window.MARCAS.length / 2);
  caja.innerHTML =
    '<div class="contenedor marcas-cabeza">' +
      '<h2 class="display">' + escapar(window.MARCAS_TITULO) + '</h2>' +
      '<p>' + escapar(window.MARCAS_SUBTITULO) + '</p>' +
    '</div>' +
    fila(window.MARCAS.slice(0, mitad), false) +
    fila(window.MARCAS.slice(mitad), true) + mando();
  activarMandoCinta(caja);
}

/* Barra de control de la cinta de marcas */
function mando(){
  return '<div class="cinta-mando">' +
    '<button type="button" data-cinta="atras" aria-label="Retroceder marcas">' + ICONOS.izq + '</button>' +
    '<button type="button" data-cinta="pausa" aria-label="Pausar el movimiento">' + ICONOS.pausa + '</button>' +
    '<button type="button" data-cinta="adelante" aria-label="Avanzar marcas">' + ICONOS.der + '</button>' +
  '</div>';
}

/* Permite pausar y mover la cinta a mano sin perder el movimiento automático */
function activarMandoCinta(caja){
  const cintas   = $$(".cinta", caja);
  const btnPausa = $('[data-cinta="pausa"]', caja);
  if (!btnPausa || !cintas.length) return;
  let pausado = false;

  function tomarControl(){
    cintas.forEach(c => {
      if (c.classList.contains("a-mano")) return;
      // Congela la posición actual antes de pasar a desplazamiento manual
      const pista = $(".cinta-pista", c);
      let x = 0;
      try { x = Math.abs(new DOMMatrix(getComputedStyle(pista).transform).m41) || 0; } catch (e) {}
      c.classList.add("a-mano");
      pista.style.animation = "none";
      pista.style.transform = "none";
      c.scrollLeft = x;
    });
    pausado = true;
    btnPausa.innerHTML = ICONOS.play;
    btnPausa.setAttribute("aria-label", "Reanudar el movimiento");
  }

  function soltarControl(){
    cintas.forEach(c => {
      const pista = $(".cinta-pista", c);
      c.classList.remove("a-mano");
      c.scrollLeft = 0;
      pista.style.animation = "";
      pista.style.transform = "";
    });
    pausado = false;
    btnPausa.innerHTML = ICONOS.pausa;
    btnPausa.setAttribute("aria-label", "Pausar el movimiento");
  }

  $('[data-cinta="atras"]', caja).addEventListener("click", () => {
    tomarControl();
    cintas.forEach(c => c.scrollBy({ left: -320, behavior: "smooth" }));
  });
  $('[data-cinta="adelante"]', caja).addEventListener("click", () => {
    tomarControl();
    cintas.forEach(c => c.scrollBy({ left: 320, behavior: "smooth" }));
  });
  btnPausa.addEventListener("click", () => pausado ? soltarControl() : tomarControl());
}


/* ==========================================================================
   VISOR DE IMAGEN AMPLIADA
   Se abre al hacer clic en la foto de la ficha de producto.
   ========================================================================== */
const Visor = {
  fotos: [],     // rutas de las imágenes que existen
  titulo: "",
  i: 0,
  caja: null,

  crear(){
    if (this.caja) return;
    const d = document.createElement("div");
    d.className = "visor";
    d.id = "visor";
    d.setAttribute("role", "dialog");
    d.setAttribute("aria-modal", "true");
    d.setAttribute("aria-label", "Imagen ampliada");
    d.innerHTML =
      '<div class="visor-barra">' +
        '<span class="visor-titulo" id="visor-titulo"></span>' +
        '<span id="visor-contador"></span>' +
        '<button type="button" class="visor-cerrar" id="visor-cerrar" aria-label="Cerrar">&times;</button>' +
      '</div>' +
      '<div class="visor-marco">' +
        '<button type="button" class="visor-flecha visor-izq" id="visor-izq" aria-label="Imagen anterior">' + ICONOS.izq + '</button>' +
        '<img id="visor-img" src="" alt="">' +
        '<button type="button" class="visor-flecha visor-der" id="visor-der" aria-label="Imagen siguiente">' + ICONOS.der + '</button>' +
      '</div>' +
      '<div class="visor-pie" id="visor-pie"></div>';
    document.body.appendChild(d);
    this.caja = d;

    $("#visor-cerrar", d).addEventListener("click", () => this.cerrar());
    $("#visor-izq", d).addEventListener("click", () => this.ir(this.i - 1));
    $("#visor-der", d).addEventListener("click", () => this.ir(this.i + 1));

    // Tocar el fondo cierra; tocar la imagen no
    d.addEventListener("click", e => { if (e.target === d) this.cerrar(); });

    document.addEventListener("keydown", e => {
      if (!d.classList.contains("abierto")) return;
      if (e.key === "Escape")     this.cerrar();
      if (e.key === "ArrowLeft")  this.ir(this.i - 1);
      if (e.key === "ArrowRight") this.ir(this.i + 1);
    });

    // Deslizar con el dedo
    let x0 = null;
    d.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
    d.addEventListener("touchend", e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 50) this.ir(this.i + (dx < 0 ? 1 : -1));
      x0 = null;
    });
  },

  abrir(fotos, titulo, desde){
    if (!fotos.length) return;
    this.crear();
    this.fotos = fotos;
    this.titulo = titulo;

    $("#visor-titulo").textContent = titulo;
    $("#visor-pie").innerHTML = fotos.map((f, n) =>
      '<button type="button" data-visor="' + n + '" aria-label="Ver imagen ' + (n + 1) + '">' +
      '<img src="' + f + '" alt=""></button>').join("");
    $$("[data-visor]").forEach(b =>
      b.addEventListener("click", () => this.ir(+b.dataset.visor)));

    this.caja.classList.add("abierto");
    document.body.classList.add("visor-abierto");
    this.ir(desde || 0);
    $("#visor-cerrar").focus();
  },

  ir(n){
    this.i = Math.max(0, Math.min(this.fotos.length - 1, n));
    $("#visor-img").src = this.fotos[this.i];
    $("#visor-img").alt = this.titulo + " — imagen " + (this.i + 1);
    $("#visor-contador").textContent = (this.i + 1) + " de " + this.fotos.length;
    $("#visor-izq").disabled = this.i === 0;
    $("#visor-der").disabled = this.i === this.fotos.length - 1;
    $$("[data-visor]").forEach(b => b.setAttribute("aria-current", +b.dataset.visor === this.i));
    const solaUna = this.fotos.length < 2;
    $("#visor-izq").hidden = solaUna;
    $("#visor-der").hidden = solaUna;
    $("#visor-pie").hidden = solaUna;
  },

  cerrar(){
    if (!this.caja) return;
    this.caja.classList.remove("abierto");
    document.body.classList.remove("visor-abierto");
  }
};

/* Conecta el carrusel de la ficha con el visor.
   Solo se abre sobre fotos reales, no sobre los recuadros de "foto pendiente". */
function activarVisor(p){
  const marco = $(".carrusel-marco");
  if (!marco) return;

  // Guarda la prenda actual: al cambiar de ficha se actualiza el dato,
  // no se agrega otro detector encima del anterior.
  marco._prenda = p;
  if (marco.dataset.visorListo) return;
  marco.dataset.visorListo = "1";

  marco.addEventListener("click", e => {
    if (e.target.tagName !== "IMG") return;
    const imgs = $$("#carrusel-pista img");
    const reales = imgs.map(im => im.getAttribute("src"));
    if (!reales.length) return;
    const prenda = marco._prenda;
    Visor.abrir(reales, prenda ? prenda.nombre : "", Math.max(0, imgs.indexOf(e.target)));
  });
}


/* ==========================================================================
   TARJETA DE PRODUCTO
   Definida aquí para que la portada y la ficha usen exactamente la misma.
   ========================================================================== */
function tarjeta(p){
  const paleta = window.PALETAS[p.colores];
  const puntos = paleta && paleta.colores.length
    ? '<div class="tarjeta-colores" aria-label="' + paleta.colores.length + ' colores disponibles">' +
        paleta.colores.slice(0, 7).map(c =>
          '<span class="punto" style="background:' + c[1] + '" title="' + escapar(c[0]) + '"></span>').join("") +
        (paleta.colores.length > 7 ? '<span class="punto-mas">+' + (paleta.colores.length - 7) + '</span>' : '') +
      '</div>'
    : "";

  const dentro = Cotizacion.tiene(p.id);
  const fotos = [1, 2, 3];

  return '<article class="tarjeta">' +
    // La foto es un contenedor, no un enlace: un <a> no puede llevar botones dentro.
    // El enlace es una capa invisible que cubre la foto, por debajo de los controles.
    '<div class="tarjeta-foto" data-carrusel>' +
      '<div class="tarjeta-pista">' +
        fotos.map(n => fotoConRespaldo(p.id, n, etiquetaFoto(p, n))).join("") +
      '</div>' +
      '<a class="tarjeta-enlace" href="producto.html?id=' + p.id + '" aria-label="Ver ' + escapar(p.nombre) + '"></a>' +
      (p.destacado ? '<span class="marcador">Más pedida</span>' : '') +
      '<button type="button" class="tarjeta-flecha tarjeta-izq" data-paso="-1" aria-label="Foto anterior">' + ICONOS.izq + '</button>' +
      '<button type="button" class="tarjeta-flecha tarjeta-der" data-paso="1" aria-label="Foto siguiente">' + ICONOS.der + '</button>' +
      '<div class="tarjeta-puntos">' +
        fotos.map((n, i) => '<button type="button" data-punto="' + i + '" class="' + (i === 0 ? 'activo' : '') +
          '" aria-label="Ver foto ' + n + '"></button>').join("") +
      '</div>' +
    '</div>' +
    '<div class="tarjeta-cuerpo">' +
      '<p class="tarjeta-categoria">' + escapar(nombreCategoria(p.categoria)) + '</p>' +
      '<h3><a href="producto.html?id=' + p.id + '">' + escapar(p.nombre) + '</a></h3>' +
      '<p>' + escapar(p.resumen) + '</p>' + puntos +
      '<div class="tarjeta-pie">' +
        '<a class="btn btn-linea btn-chico" href="producto.html?id=' + p.id + '">Ver ficha</a>' +
        '<button type="button" class="btn btn-chico ' + (dentro ? 'btn-oscuro' : 'btn-linea') + '" data-agregar="' + p.id + '">' +
          (dentro ? ICONOS.check + 'Agregada' : ICONOS.mas + 'Cotizar') + '</button>' +
      '</div>' +
    '</div></article>';
}

/* Enciende el carrusel de todas las tarjetas de un contenedor */
function activarCarruselTarjetas(contenedor){
  const lento = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  $$("[data-carrusel]", contenedor).forEach(caja => {
    const pista  = $(".tarjeta-pista", caja);
    const puntos = $$(".tarjeta-puntos button", caja);
    const total  = puntos.length;
    if (!pista || total < 2) return;

    let i = 0, reloj = null, x0 = null, movido = false, aMano = false;

    function ir(n){
      i = (n + total) % total;
      pista.style.transform = "translateX(-" + (i * 100) + "%)";
      puntos.forEach((d, k) => d.classList.toggle("activo", k === i));
    }

    function detener(){ clearInterval(reloj); reloj = null; }

    // Computador: avanza solo mientras el mouse esté encima
    caja.addEventListener("mouseenter", () => {
      if (lento) { ir(1); return; }
      if (!aMano && !reloj) reloj = setInterval(() => ir(i + 1), 1300);
    });
    caja.addEventListener("mouseleave", () => {
      detener();
      aMano = false;   // al salir vuelve a comportarse solo
      ir(0);
    });

    // Flechas y puntos: el visitante toma el control
    $$("[data-paso], [data-punto]", caja).forEach(b =>
      b.addEventListener("click", e => {
        e.preventDefault();
        e.stopPropagation();
        aMano = true;
        detener();
        ir(b.dataset.punto !== undefined ? +b.dataset.punto : i + (+b.dataset.paso));
      })
    );

    // Celular: se desliza con el dedo
    caja.addEventListener("touchstart", e => {
      x0 = e.touches[0].clientX; movido = false;
    }, { passive: true });

    caja.addEventListener("touchmove", e => {
      if (x0 === null) return;
      if (Math.abs(e.touches[0].clientX - x0) > 10) movido = true;
    }, { passive: true });

    caja.addEventListener("touchend", e => {
      if (x0 === null) return;
      const dx = e.changedTouches[0].clientX - x0;
      if (Math.abs(dx) > 40) ir(i + (dx < 0 ? 1 : -1));
      x0 = null;
    });

    // Si deslizó, no abre la ficha: solo cambia de foto
    const enlace = $(".tarjeta-enlace", caja);
    if (enlace) enlace.addEventListener("click", e => {
      if (movido) { e.preventDefault(); movido = false; }
    });
  });
}


/* ==========================================================================
   ESTAMPADOS Y EMPAQUE
   ========================================================================== */
function bloqueMedio(item, carpeta){
  const ruta = "img/" + carpeta + "/" + item.id + ".webp";
  return '<figure class="medio">' +
    '<img src="' + ruta + '" alt="' + escapar(item.nombre) + ' sobre prenda Serranía" ' +
    'loading="lazy" decoding="async" ' +
    'onerror="this.outerHTML=\'<span class=&quot;medio-sin-foto&quot;></span>\'">' +
    '<figcaption class="medio-texto">' +
      '<strong>' + escapar(item.nombre) + '</strong>' +
      '<span>' + escapar(item.detalle) + '</span>' +
    '</figcaption>' +
  '</figure>';
}

function montarEstampados(){
  const caja = $("#estampados");
  if (!caja || !window.ESTAMPADOS) return;
  caja.innerHTML = window.ESTAMPADOS.map(e => bloqueMedio(e, "estampados")).join("");
}

function montarEmpaque(){
  const caja = $("#empaque");
  if (!caja || !window.EMPAQUE) return;
  caja.innerHTML = window.EMPAQUE.map(e => bloqueMedio(e, "empaque")).join("");
}
