/* ==========================================================================
   PALETAS DE COLORES DE TELA

   Los NOMBRES son los que maneja Serranía: son los que el cliente va a usar
   para pedir, así que deben coincidir con los de producción.

   Los CÓDIGOS de color son aproximaciones para mostrar en pantalla.
   Ajústalos con Ana María comparando contra la tela real: cambia solo el
   número que empieza por # y se actualiza en todo el sitio.

   Para agregar un color: copia una línea y cámbiala.
   ========================================================================== */

window.PALETAS = {

  /* Chaquetas técnicas — Aerofusion, Cyclone, Jetline, Skyflow, Ultra-Ice */
  "tecnica": {
    nota: "25 colores en tela externa e interna.",
    colores: [
      ["Negro",          "#111111"], ["Blanco",          "#FFFFFF"],
      ["Rojo",           "#CE1126"], ["Vinotinto",       "#6B1F2A"],
      ["Naranja",        "#F26522"], ["Naranja neón",    "#FF6A13"],
      ["Amarillo",       "#FDC500"], ["Amarillo neón",   "#DCE83A"],
      ["Beige",          "#D9C3A5"], ["Café",            "#6B4226"],
      ["Gris ratón",     "#8A8A82"], ["Gris frost",      "#C4CACC"],
      ["Gris perla",     "#DCDEDD"], ["Verde jade",      "#00A878"],
      ["Verde botella",  "#0E4F35"], ["Verde pistacho",  "#9BC96B"],
      ["Verde militar",  "#4A5A32"], ["Verde cali",      "#2FA84F"],
      ["Aguamarina",     "#6FD8CF"], ["Azul noche",      "#10203F"],
      ["Azul día",       "#2E6FD9"], ["Azul celeste",    "#8FCBE8"],
      ["Azul pacífico",  "#0F6FA3"], ["Azul rey",        "#0047BB"],
      ["Hortensia",      "#7E8FD6"]
    ]
  },

  /* Chaqueta Business — tela tipo paño */
  "business": {
    nota: "25 colores en tela externa e interna.",
    colores: [
      ["Negro",            "#111111"], ["Marfil",           "#F2EDE0"],
      ["Café oscuro",      "#4A2C1A"], ["Camel",            "#B98A52"],
      ["Camel claro",      "#D7B48C"], ["Canela",           "#9C6238"],
      ["Caramelo tostado", "#A9683A"], ["Terracota",        "#B5623C"],
      ["Beige natural",    "#E2D5BE"], ["Amarillo quemado", "#D99A2B"],
      ["Rojo bandera",     "#CE1126"], ["Vinotinto",        "#6B1F2A"],
      ["Rosado claro",     "#F2C2CE"], ["Rosado oscuro",    "#D4738C"],
      ["Fucsia",           "#C4008F"], ["Morado claro",     "#B08BD1"],
      ["Verde menta",      "#A8D8C4"], ["Verde pasto",      "#4A8B3B"],
      ["Verde militar",    "#4A5A32"], ["Gris claro",       "#C9CCCE"],
      ["Gris medio",       "#8A8F91"], ["Azul claro",       "#A9C9E8"],
      ["Azul medio",       "#4E7FB5"], ["Azul oscuro",      "#1F3A5F"],
      ["Azul marino",      "#14213D"]
    ]
  },

  /* Chaqueta Sporty */
  "sporty": {
    nota: "13 colores en tela externa e interna.",
    colores: [
      ["Blanco",         "#FFFFFF"], ["Negro",          "#111111"],
      ["Celta",          "#2E7D6B"], ["Rojo sangre",    "#8E1B1B"],
      ["Amarillo medio", "#F5C518"], ["Amarillo claro", "#F7E07A"],
      ["Verde oscuro",   "#1D4B34"], ["Verde militar",  "#4A5A32"],
      ["Gris claro",     "#C9CCCE"], ["Gris oscuro",    "#4D4D4D"],
      ["Azul oscuro",    "#1F3A5F"], ["Azul marino",    "#14213D"],
      ["Azul rey",       "#0047BB"]
    ]
  },

  /* Polar — Fleeceflex chaqueta y chaleco */
  "fleece": {
    nota: "8 colores en polar de alta densidad.",
    colores: [
      ["Negro",       "#111111"], ["Blanco",      "#FFFFFF"],
      ["Marfil",      "#F2EDE0"], ["Gris claro",  "#C9CCCE"],
      ["Beige",       "#D9C3A5"], ["Café claro",  "#A87850"],
      ["Verde pasto", "#4A8B3B"], ["Azul marino", "#1B2F6B"]
    ]
  },

  /* Chaqueta Softshell */
  "softshell": {
    nota: "3 colores en tela externa e interna.",
    colores: [
      ["Negro",       "#111111"], ["Blanco",      "#FFFFFF"],
      ["Azul oscuro", "#1F3A5F"]
    ]
  },

  /* Buzos — los cinco modelos comparten carta */
  "buzos": {
    nota: "13 colores. 50% algodón, 50% poliéster. Gramaje 210 gr.",
    colores: [
      ["Negro",             "#111111"], ["Blanco natural",   "#F5F1E8"],
      ["Azul noche",        "#10203F"], ["Azul cielo",       "#A9C9E8"],
      ["Turquesa claro",    "#8FD6D2"], ["Verde pino",       "#1F4D3A"],
      ["Rojo",              "#CE1126"], ["Borgoña",          "#6B2233"],
      ["Terracota",         "#B5623C"], ["Beige arena",      "#D9C3A5"],
      ["Rosa empolvado",    "#E3B7B7"], ["Amarillo vainilla","#F2E3A8"],
      ["Gris perla",        "#DCDEDD"]
    ]
  },

  /* Camisetas y polos — tonos de mayor rotación */
  "camisetas": {
    nota: "Los tonos de mayor rotación en dotación corporativa.",
    colores: [
      ["Negro",         "#111111"], ["Blanco",        "#FFFFFF"],
      ["Gris jaspe",    "#B7BBBD"], ["Azul marino",   "#14213D"],
      ["Azul rey",      "#0047BB"], ["Azul celeste",  "#8FCBE8"],
      ["Rojo",          "#CE1126"], ["Vinotinto",     "#6B1F2A"],
      ["Verde botella", "#0E4F35"], ["Beige",         "#D9C3A5"]
    ]
  },

  /* Gorras — básicos corporativos */
  "gorras": {
    nota: "Los tonos de mayor rotación.",
    colores: [
      ["Negro",         "#111111"], ["Blanco",        "#FFFFFF"],
      ["Azul marino",   "#14213D"], ["Azul rey",      "#0047BB"],
      ["Gris",          "#8A8F91"], ["Rojo",          "#CE1126"],
      ["Verde militar", "#4A5A32"], ["Beige",         "#D9C3A5"]
    ]
  },

  /* Camisa Canvas */
  "camisa": {
    nota: "4 acabados base. 100% algodón.",
    colores: [
      ["Azul claro",   "#8FB4D9"], ["Blanco",       "#FFFFFF"],
      ["Rayas negras", "#3A3A3A"], ["Rayas azules", "#2E4A7D"]
    ]
  },

  /* Sublimación: sin carta fija */
  "sublimacion": {
    nota: "Sin límite de color. La sublimación permite aplicar cualquier paleta, degradado o patrón sobre toda la prenda.",
    colores: []
  }
};
