/* ==========================================================================
   FICHA DE PRODUCTO
   Lee ?id= de la URL y arma toda la página desde datos-productos.js
   ========================================================================== */

let indiceFoto = 0;
let totalFotos = 3;

function pintarCarrusel(p){
  const marco = $("#carrusel-pista");
  marco.innerHTML = Array.from({ length: totalFotos }, (_, i) =>
    fotoConRespaldo(p.id, i + 1, etiquetaFoto(p, i + 1))
  ).join("");

  $("#carrusel-puntos").innerHTML = Array.from({ length: totalFotos }, (_, i) =>
    '<button type="button" data-ir="' + i + '" aria-current="' + (i === 0) + '" ' +
    'aria-label="Ver foto ' + (i + 1) + '"></button>'
  ).join("");

  $("#miniaturas").innerHTML = Array.from({ length: totalFotos }, (_, i) =>
    '<button type="button" data-ir="' + i + '" aria-current="' + (i === 0) + '" ' +
    'aria-label="Ver foto ' + (i + 1) + '">' +
    fotoConRespaldo(p.id, i + 1, "") + '</button>'
  ).join("");

  $$("[data-ir]").forEach(b => b.addEventListener("click", () => irAFoto(+b.dataset.ir)));
  $("#flecha-izq").addEventListener("click", () => irAFoto(indiceFoto - 1));
  $("#flecha-der").addEventListener("click", () => irAFoto(indiceFoto + 1));

  // Deslizar con el dedo en móvil
  let x0 = null;
  marco.addEventListener("touchstart", e => { x0 = e.touches[0].clientX; }, { passive: true });
  marco.addEventListener("touchend", e => {
    if (x0 === null) return;
    const d = e.changedTouches[0].clientX - x0;
    if (Math.abs(d) > 45) irAFoto(indiceFoto + (d < 0 ? 1 : -1));
    x0 = null;
  });

  irAFoto(0);
}

function irAFoto(i){
  indiceFoto = Math.max(0, Math.min(totalFotos - 1, i));
  $("#carrusel-pista").style.transform = "translateX(-" + (indiceFoto * 100) + "%)";
  $$("[data-ir]").forEach(b => b.setAttribute("aria-current", +b.dataset.ir === indiceFoto));
  $("#flecha-izq").disabled = indiceFoto === 0;
  $("#flecha-der").disabled = indiceFoto === totalFotos - 1;
}

function pintarColores(p){
  const caja = $("#bloque-colores");
  const paleta = window.PALETAS[p.colores];

  if (!paleta){ caja.remove(); return; }

  if (!paleta.colores.length){
    caja.innerHTML = '<h2>Personalización de color</h2><p class="paleta-nota">' +
      escapar(paleta.nota) + '</p>';
    return;
  }

  caja.innerHTML =
    '<h2>Colores disponibles</h2>' +
    '<div class="paleta">' +
      paleta.colores.map(c =>
        '<span class="muestra" style="background:' + c[1] + '" title="' + escapar(c[0]) +
        '" role="img" aria-label="' + escapar(c[0]) + '"></span>'
      ).join("") +
    '</div>' +
    '<p class="paleta-nota">' + escapar(paleta.nota) +
    ' Sujeto a disponibilidad de telas en inventario.</p>';
}

function pintarTecnicas(p){
  const caja = $("#bloque-tecnicas");
  if (!p.tecnicas || !p.tecnicas.length){ caja.remove(); return; }

  caja.innerHTML =
    '<h2>Técnicas de marca recomendadas</h2>' +
    '<div class="tecnicas">' +
      p.tecnicas.map(t => {
        const d = window.TECNICAS[t];
        if (!d) return "";
        return '<div class="tecnica"><strong>' + escapar(d.nombre) + '</strong>' +
               '<span>' + escapar(d.detalle) + '</span></div>';
      }).join("") +
    '</div>';
}

function pintarDatos(p){
  const filas = [
    ["Mínimo de pedido", p.minimo + " unidades"],
    ["Categoría", nombreCategoria(p.categoria)]
  ];
  if (p.tela) filas.push(["Tela", p.tela]);

  $("#bloque-datos").innerHTML =
    '<h2>Ficha técnica</h2><div class="datos">' +
      filas.map(([k, v]) =>
        '<div class="dato"><span>' + escapar(k) + '</span><strong>' + escapar(v) + '</strong></div>'
      ).join("") +
    '</div>';
}

function pintarMedidasSimples(p){
  const caja = $("#bloque-tallas");
  caja.innerHTML =
    '<h2>Medidas</h2><div class="tabla-envoltura"><table class="tallas">' +
      '<thead><tr><th scope="col">Tamaño</th><th scope="col">Medida</th></tr></thead><tbody>' +
      p.medidas.map(m =>
        '<tr><th scope="row">' + escapar(m[0]) + '</th><td>' + escapar(m[1]) + '</td></tr>'
      ).join("") +
    '</tbody></table></div>';
}

function pintarRelacionados(p){
  const otros = window.PRODUCTOS
    .filter(o => o.categoria === p.categoria && o.id !== p.id)
    .slice(0, 4);

  if (!otros.length){ $("#relacionados").remove(); return; }

  const rejilla = $("#rejilla-relacionados");
  rejilla.innerHTML = otros.map(tarjeta).join("");

  $$("[data-agregar]", rejilla).forEach(b =>
    b.addEventListener("click", () => { Cotizacion.alternar(b.dataset.agregar); pintarRelacionados(p); }));

  activarCarruselTarjetas(rejilla);
}

function pintarSeo(p){
  const titulo = p.nombre + " personalizada para empresas | " + window.CONFIG.marca;
  document.title = titulo;

  const meta = (sel, valor) => { const el = $(sel); if (el) el.setAttribute("content", valor); };
  meta('meta[name="description"]', p.resumen + " Desde " + p.minimo + " unidades. Personalización con logo.");
  meta('meta[property="og:title"]', titulo);
  meta('meta[property="og:description"]', p.resumen);
  meta('meta[property="og:image"]', window.CONFIG.sitio + "/" + rutaFoto(p.id, 1));
  meta('meta[property="og:url"]', window.location.href);

  const canon = $('link[rel="canonical"]');
  if (canon) canon.href = window.CONFIG.sitio + "/producto.html?id=" + p.id;

  const datos = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": p.nombre,
    "description": p.resumen,
    "image": [window.CONFIG.sitio + "/" + rutaFoto(p.id, 1)],
    "brand": { "@type": "Brand", "name": window.CONFIG.marca },
    "category": nombreCategoria(p.categoria)
  };
  const s = document.createElement("script");
  s.type = "application/ld+json";
  s.textContent = JSON.stringify(datos);
  document.head.appendChild(s);
}

function pintarAcciones(p){
  const caja = $("#acciones-ficha");

  function render(){
    const dentro = Cotizacion.tiene(p.id);
    caja.innerHTML =
      '<a class="btn btn-primario btn-bloque" href="' + waProducto(p.nombre) + '" target="_blank" rel="noopener">' +
        ICONOS.whatsapp + 'Hablar con un asesor</a>' +
      '<button type="button" class="btn btn-bloque ' + (dentro ? 'btn-oscuro' : 'btn-linea') + '" id="btn-cotizar">' +
        (dentro ? ICONOS.check + 'Agregada a la cotización' : ICONOS.mas + 'Agregar a mi cotización') +
      '</button>';

    $("#btn-cotizar").addEventListener("click", () => { Cotizacion.alternar(p.id); render(); });
  }

  render();
  document.addEventListener("cotizacion:cambio", render);
}

/* ---------- Arranque ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const id = new URLSearchParams(window.location.search).get("id");
  const p = producto(id);

  if (!p){
    $("#ficha").innerHTML =
      '<div class="vacio-resultado" style="grid-column:1/-1">' +
        '<h3>No encontramos esa prenda</h3>' +
        '<p>Puede que el enlace esté desactualizado.</p>' +
        '<a class="btn btn-oscuro" href="index.html">Ver el catálogo completo</a>' +
      '</div>';
    montarCabecera();
    return;
  }

  montarCabecera(p.categoria);
  pintarSeo(p);

  $("#miga-categoria").textContent = nombreCategoria(p.categoria);
  $("#miga-categoria").href = "index.html?categoria=" + p.categoria;
  $("#miga-producto").textContent = p.nombre;

  $("#nombre").textContent = p.nombre;
  $("#categoria").textContent = nombreCategoria(p.categoria);
  $("#resumen").textContent = p.resumen;
  $("#claves").innerHTML = p.claves.map(c => '<li>' + escapar(c) + '</li>').join("");

  pintarCarrusel(p);
  activarVisor(p);
  pintarColores(p);
  pintarTecnicas(p);
  pintarDatos(p);
  pintarAcciones(p);
  pintarRelacionados(p);

  const cajaTallas = $("#bloque-tallas");
  if (p.medidas)                 pintarMedidasSimples(p);
  else if (!dibujarTallas(p.tallas || {}, cajaTallas)) {
    cajaTallas.innerHTML =
      '<h2>Guía de tallas</h2>' +
      '<p class="paleta-nota">La tabla de medidas de esta prenda está en revisión. ' +
      'Escríbenos y te la enviamos al instante.</p>';
  }
});
