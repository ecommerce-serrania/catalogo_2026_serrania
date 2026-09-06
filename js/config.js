/* ==========================================================================
   CONFIGURACIÓN GENERAL
   Este es el único archivo que necesitas tocar para datos de contacto.
   ========================================================================== */

window.CONFIG = {

  // ---- CONTACTO -----------------------------------------------------------
  // Número de WhatsApp en formato internacional, SIN + ni espacios.
  // Ejemplo Colombia: 573160537301
  whatsapp: "573160537301",

  correo: "recursoshumanos@serrania.co",

  // ---- MARCA --------------------------------------------------------------
  marca: "Serranía",
  sitio: "https://serrania.co",
  descripcionSitio: "Prendas corporativas personalizadas para empresas. Chaquetas, buzos, camisetas y accesorios con bordado, sublimación y estampado. Desde 50 unidades.",

  // ---- REGLAS COMERCIALES -------------------------------------------------
  minimoGeneral: 50,          // unidades mínimas por defecto
  mostrarPrecios: false,      // ponlo en true si algún día publicas precios

  // ---- MENSAJES DE WHATSAPP -----------------------------------------------
  // {producto} y {lista} se reemplazan solos.
  msgGeneral: "Hola Serranía, quiero cotizar prendas corporativas para mi empresa.",
  msgProducto: "Hola Serranía, quiero cotizar la {producto}.\n\nCantidad aproximada: \nColor: \nTécnica de marca: ",
  msgLista: "Hola Serranía, quiero cotizar estas prendas:\n\n{lista}\n\nEmpresa: \nCantidad aproximada por prenda: "
};
