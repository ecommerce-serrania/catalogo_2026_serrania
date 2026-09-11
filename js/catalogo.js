/* ==========================================================================
   PÁGINA DE CATÁLOGO
   Filtros por categoría y por uso, más búsqueda desde la URL.
   ========================================================================== */

const estado = { categoria: "todas", usos: [], texto: "" };

/* ---------- Filtrado ---------- */
function filtrar(){
  const q = normalizar(estado.texto);

  return window.PRODUCTOS.filter(p => {
    if (estado.categoria !== "todas" && p.categoria !== estado.categoria) return false;
    if (estado.usos.length && !estado.usos.some(u => p.usos.includes(u))) return false;
    if (q && !normalizar(p.nombre + " " + p.resumen + " " + p.claves.join(" ")).includes(q)) return false;
    return true;
  });
}

function pintarRejilla(){
  const rejilla = $("#rejilla");
  const lista = filtrar();

  rejilla.innerHTML = lista.length
    ? lista.map(tarjeta).join("")
    : '<div class="vacio-resultado">' +
        '<h3>Ninguna prenda coincide con esos filtros</h3>' +
        '<p>Quita algún filtro o escríbenos: fabricamos también sobre diseño propio.</p>' +
        '<a class="btn btn-primario" href="' + waGeneral() + '" target="_blank" rel="noopener">' +
          ICONOS.whatsapp + 'Hablar con un asesor</a>' +
      '</div>';

  const conteo = $("#conteo");
  if (conteo) conteo.textContent = lista.length + (lista.length === 1 ? " prenda" : " prendas");

  $$("[data-agregar]", rejilla).forEach(b =>
    b.addEventListener("click", () => {
      Cotizacion.alternar(b.dataset.agregar);
      pintarRejilla();
    })
  );

  activarCarruselTarjetas(rejilla);
}

/* ---------- Barra de filtros ---------- */
function pintarFiltros(){
  // La barra de filtros se retiró: la navegación va por el menú superior
  if (!$("#filtro-categorias")) return;

  $("#filtro-categorias").innerHTML =
    '<button type="button" class="pastilla" data-categoria="todas" aria-pressed="' +
      (estado.categoria === "todas") + '">Todas</button>' +
    window.CATEGORIAS.map(c =>
      '<button type="button" class="pastilla" data-categoria="' + c.id + '" aria-pressed="' +
      (estado.categoria === c.id) + '">' + escapar(c.nombre) + '</button>'
    ).join("");

  $("#filtro-usos").innerHTML = window.USOS.map(u =>
    '<button type="button" class="pastilla" data-uso="' + u.id + '" aria-pressed="' +
    estado.usos.includes(u.id) + '">' + escapar(u.nombre) + '</button>'
  ).join("");

  $$("[data-categoria]").forEach(b =>
    b.addEventListener("click", () => {
      estado.categoria = b.dataset.categoria;
      actualizarUrl();
      pintarFiltros();
      pintarRejilla();
    })
  );

  $$("[data-uso]").forEach(b =>
    b.addEventListener("click", () => {
      const u = b.dataset.uso;
      const i = estado.usos.indexOf(u);
      if (i >= 0) estado.usos.splice(i, 1); else estado.usos.push(u);
      pintarFiltros();
      pintarRejilla();
    })
  );
}

function actualizarUrl(){
  const url = new URL(window.location);
  if (estado.categoria === "todas") url.searchParams.delete("categoria");
  else url.searchParams.set("categoria", estado.categoria);
  history.replaceState(null, "", url);

  const titulo = estado.categoria === "todas"
    ? "Catálogo completo"
    : nombreCategoria(estado.categoria);
  $("#titulo-catalogo").textContent = titulo;
}

/* ---------- Arranque ---------- */
document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const cat = params.get("categoria");
  if (cat === "todas") estado.categoria = "todas";
  else if (cat && window.CATEGORIAS.some(c => c.id === cat)) estado.categoria = cat;

  const q = params.get("q");
  if (q) estado.texto = q;

  montarCabecera(estado.categoria);
  animarCifras();
  pintarFiltros();
  actualizarUrl();
  pintarRejilla();

  document.addEventListener("cotizacion:cambio", pintarRejilla);

  if (cat) {
    const destino = $("#catalogo");
    if (destino) destino.scrollIntoView({ behavior: "auto", block: "start" });
  }
});
