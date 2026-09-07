/* ==========================================================================
   PALETAS DE COLORES DE TELA
   Cada producto apunta a una paleta por su nombre clave.
   Para cambiar un color: edita el hex. Para agregar uno: copia una línea.
   Los hex son aproximados del catálogo impreso — ajústalos con tu proveedor.
   ========================================================================== */

window.PALETAS = {

  /* Paleta amplia — chaquetas técnicas y chalecos acolchados */
  "full": {
    nota: "28 colores. Tela externa e interna.",
    colores: [
      ["Café",           "#5B3A29"], ["Rojo",          "#CE1126"],
      ["Naranja",        "#F26522"], ["Naranja neón",  "#FF6A13"],
      ["Verde limón",    "#4CBB17"], ["Verde",         "#009639"],
      ["Verde oscuro",   "#1D4B34"], ["Azul cielo",    "#7FB2D9"],
      ["Azul rey",       "#0047BB"], ["Azul oscuro",   "#14213D"],
      ["Fucsia",         "#C4008F"], ["Lila",          "#C48BC4"],
      ["Gris",           "#A6A6A6"], ["Blanco",        "#FFFFFF"],
      ["Beige",          "#E8C4AE"], ["Vinotinto",     "#6B1F2A"],
      ["Amarillo",       "#FDB913"], ["Verde lima",    "#8DC63F"],
      ["Verde bosque",   "#1F5C2E"], ["Verde militar", "#3A4A2A"],
      ["Turquesa",       "#00C4B3"], ["Azul claro",    "#1B9CE5"],
      ["Azul marino",    "#1B2F6B"], ["Morado",        "#6A1B9A"],
      ["Morado oscuro",  "#4A1259"], ["Gris oscuro",   "#4D4D4D"],
      ["Gris carbón",    "#333333"], ["Negro",         "#111111"]
    ]
  },

  /* Chaquetas en tela deportiva */
  "sporty": {
    nota: "17 colores. Tela externa e interna.",
    colores: [
      ["Rojo",          "#CE1126"], ["Azul acero",    "#6E8FB5"],
      ["Azul rey",      "#0047BB"], ["Azul oscuro",   "#14213D"],
      ["Verde salvia",  "#A8BFA0"], ["Marfil",        "#F2EAD6"],
      ["Negro",         "#111111"], ["Gris oscuro",   "#4D4D4D"],
      ["Gris claro",    "#D6D6D6"], ["Blanco",        "#FFFFFF"],
      ["Café claro",    "#B08355"], ["Verde militar", "#3A4A2A"],
      ["Café",          "#6B4226"], ["Vinotinto",     "#6B1F2A"],
      ["Rosa",          "#F2B8C6"], ["Beige",         "#E0CBA8"],
      ["Verde bosque",  "#1F5C2E"]
    ]
  },

  /* Chaqueta Business — tela tipo paño */
  "business": {
    nota: "13 colores. Tela externa e interna.",
    colores: [
      ["Beige",        "#E8D5BE"], ["Rosa palo",    "#E8B4C0"],
      ["Verde limón",  "#9ACD32"], ["Morado",       "#6A1B9A"],
      ["Rojo",         "#CE1126"], ["Café",         "#8B5A2B"],
      ["Negro",        "#111111"], ["Ocre",         "#C98A3C"],
      ["Azul cielo",   "#7FB2D9"], ["Magenta",      "#B5359C"],
      ["Verde oscuro", "#1D4B34"], ["Naranja",      "#E8871E"],
      ["Café oscuro",  "#5B3A29"]
    ]
  },

  /* Polar — Fleeceflex y chaleco Fleece Flex */
  "fleece": {
    nota: "10 colores. Solo tela externa.",
    colores: [
      ["Blanco",         "#FFFFFF"], ["Gris",        "#B3B3B3"],
      ["Rojo",           "#CE1126"], ["Naranja",     "#D2691E"],
      ["Crema",          "#F5EFE3"], ["Negro",       "#111111"],
      ["Azul marino",    "#1B2F6B"], ["Verde",       "#009639"],
      ["Beige",          "#D9B99B"], ["Gris oscuro", "#5A5A5A"]
    ]
  },

  /* Buzos — algodón/poliéster 210 gr */
  "algodon": {
    nota: "20 colores. 50% algodón, 50% poliéster. Gramaje 210 gr.",
    colores: [
      ["Rosa",          "#F5C2D0"], ["Verde oscuro",  "#1D4B34"],
      ["Verde salvia",  "#A8BFA0"], ["Verde",         "#3BA55C"],
      ["Lila",          "#C48BC4"], ["Rojo",          "#CE1126"],
      ["Marfil",        "#F2EAD6"], ["Café",          "#6B4226"],
      ["Beige",         "#D9BE9B"], ["Blanco",        "#FFFFFF"],
      ["Morado",        "#5B2A86"], ["Café oscuro",   "#4A2C1A"],
      ["Café claro",    "#B08355"], ["Azul rey",      "#0047BB"],
      ["Azul claro",    "#4FA3E3"], ["Celeste",       "#7FD4F5"],
      ["Azul marino",   "#1B2F6B"], ["Gris claro",    "#D6D6D6"],
      ["Gris oscuro",   "#5A5A5A"], ["Negro",         "#111111"]
    ]
  },

  /* Camiseta cuello redondo — algodón 150 gr */
  "camiseta": {
    nota: "19 colores. 100% algodón. Gramaje 150 gr.",
    colores: [
      ["Gris claro",    "#D6D6D6"], ["Gris oscuro",   "#5A5A5A"],
      ["Azul marino",   "#1B2F6B"], ["Negro",         "#111111"],
      ["Blanco",        "#FFFFFF"], ["Amarillo",      "#F5D547"],
      ["Rosa palo",     "#F5C6BC"], ["Celeste",       "#A8D8E8"],
      ["Menta",         "#9FDCC5"], ["Azul rey",      "#0047BB"],
      ["Verde",         "#00A651"], ["Rosa",          "#F2A9C4"],
      ["Rojo",          "#CE1126"], ["Café",          "#8B5A2B"],
      ["Beige",         "#E0CBA8"], ["Verde militar", "#5A6B4A"],
      ["Vinotinto",     "#6B1F2A"], ["Naranja",       "#F26522"],
      ["Morado",        "#8E24AA"]
    ]
  },

  /* Camiseta tipo polo */
  "polo": {
    nota: "20 colores. 50% algodón, 50% poliéster. Gramaje 210 gr.",
    colores: [
      ["Blanco hueso",  "#EFEFE9"], ["Blanco",        "#FFFFFF"],
      ["Negro",         "#111111"], ["Azul marino",   "#1B2F6B"],
      ["Lila",          "#C4A8DB"], ["Azul rey",      "#0047BB"],
      ["Azul acero",    "#6E8FB5"], ["Celeste",       "#00AEEF"],
      ["Vinotinto",     "#6B1F2A"], ["Rojo",          "#CE1126"],
      ["Gris",          "#8C8C8C"], ["Rosa palo",     "#F2B8C6"],
      ["Rosa",          "#F27FA5"], ["Naranja",       "#F26522"],
      ["Amarillo",      "#FDB913"], ["Amarillo claro","#F5E1A4"],
      ["Gris topo",     "#8B8371"], ["Verde oscuro",  "#1D4B34"],
      ["Verde",         "#00A651"], ["Verde limón",   "#4CBB17"]
    ]
  },

  /* Camisa Canvas */
  "camisa": {
    nota: "4 acabados base. 100% algodón. Más colores y diseños por sublimación.",
    colores: [
      ["Azul claro",     "#8FB4D9"], ["Blanco",          "#FFFFFF"],
      ["Rayas negras",   "#3A3A3A"], ["Rayas azules",    "#2E4A7D"]
    ]
  },

  /* Gorras */
  "gorra-impermeable": {
    nota: "7 colores. 100% poliéster.",
    colores: [
      ["Azul rey",    "#0047BB"], ["Azul marino", "#14213D"],
      ["Rojo",        "#CE1126"], ["Gris oscuro", "#4D4D4D"],
      ["Gris",        "#A6A6A6"], ["Blanco",      "#FFFFFF"],
      ["Negro",       "#111111"]
    ]
  },

  "gorra-malla-fina": {
    nota: "9 colores. 100% poliéster, malla fina 7 hilos.",
    colores: [
      ["Verde",       "#00A651"], ["Amarillo",    "#FDD017"],
      ["Azul rey",    "#0047BB"], ["Rojo",        "#CE1126"],
      ["Rosa",        "#F5C2D0"], ["Azul acero",  "#6E8FB5"],
      ["Gris oscuro", "#4D4D4D"], ["Gris claro",  "#C4C4C4"],
      ["Negro",       "#111111"]
    ]
  },

  "gorra-malla-unicolor": {
    nota: "13 colores. 100% poliéster con soporte interno rígido.",
    colores: [
      ["Amarillo",      "#FDD017"], ["Verde militar", "#4A5A32"],
      ["Verde",         "#00A651"], ["Celeste",       "#29ABE2"],
      ["Azul marino",   "#14213D"], ["Fucsia",        "#EC008C"],
      ["Rojo",          "#CE1126"], ["Beige",         "#E8DCC0"],
      ["Gris oscuro",   "#4D4D4D"], ["Gris topo",     "#BEB9A8"],
      ["Gris claro",    "#C4C4C4"], ["Blanco",        "#FFFFFF"],
      ["Negro",         "#111111"]
    ]
  },

  "gorra-flex": {
    nota: "10 colores. 100% poliéster con cierre de hebilla metálica.",
    colores: [
      ["Amarillo",    "#FDD017"], ["Verde",       "#3BA55C"],
      ["Celeste",     "#29ABE2"], ["Azul marino", "#14213D"],
      ["Rosa",        "#F5C2D0"], ["Rojo",        "#CE1126"],
      ["Gris oscuro", "#4D4D4D"], ["Gris claro",  "#C4C4C4"],
      ["Blanco",      "#FFFFFF"], ["Negro",       "#111111"]
    ]
  },

  /* Sublimación total */
  "sublimacion": {
    nota: "Sin límite de color. La sublimación permite aplicar cualquier paleta, degradado o patrón sobre toda la prenda.",
    colores: []
  }
};
