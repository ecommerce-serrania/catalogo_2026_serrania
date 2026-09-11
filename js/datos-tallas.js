/* ==========================================================================
   TABLAS DE TALLAS
   Fuente: PDF "TABLA DE MEDIDAS - CHAQUETAS" (documento técnico vigente).

   CÓMO EDITAR UNA MEDIDA
   Busca la prenda, busca la talla, cambia el número. Nada más.
   Los valores van en el mismo orden que las columnas de arriba.

   CÓMO AGREGAR UNA TALLA
   Copia una línea completa y cambia la letra y los números.

   "revisar: true" marca las tablas donde corregí un dato del PDF original
   porque rompía la progresión. Están explicadas en el README.
   ========================================================================== */

window.TALLAS = {

  /* ===== CHAQUETAS ===== */

  "cyclone-h": {
    esquema: "chaqueta-capota",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "S":[55,71,77], "M":[57.5,74,80.5], "L":[59,75.5,81.5], "XL":[61,78,83] }
  },
  "cyclone-m": {
    esquema: "chaqueta-capota",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XS":[49,58.5,69], "S":[51,59.5,69.5], "M":[52.5,63,71] },
    aviso: "Tallas L y XL pendientes de medición."
  },

  "aerofusion-h": {
    esquema: "chaqueta",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XXS":[52,67,60], "XS":[53.5,69,60], "S":[55.5,71,61], "M":[57.5,73.5,62],
             "L":[59.5,76,63], "XL":[61.5,77,64], "2XL":[63,78,64.5] }
  },
  "aerofusion-m": {
    esquema: "chaqueta",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XS":[50,56.5,70], "S":[51.5,58.5,70], "M":[53,62,71], "L":[55.5,64.5,72], "XL":[58,66.5,74.5] }
  },

  "business-h": {
    esquema: "chaqueta",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XS":[52.5,67,60], "S":[54.5,68.5,61.5], "M":[56.5,70,63],
             "L":[58.5,71.5,64.5], "XL":[60.5,73,66], "2XL":[62.5,74.5,67.5] }
  },
  "business-m": {
    esquema: "chaqueta",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XS":[46,59,59], "S":[48,60.5,60], "M":[50,62,61],
             "L":[53,63.5,62], "XL":[57,65,63], "2XL":[61,66.5,63] }
  },

  "sporty-h": {
    esquema: "chaqueta",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XXS":[53,61.5,60], "XS":[54,62.5,60.5], "S":[56,63.5,61], "M":[57,65,62],
             "L":[60.5,65.5,62], "XL":[63,66.5,63], "2XL":[64,67.5,64] }
  },
  "sporty-m": {
    esquema: "chaqueta",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "S":[52,59.5,59], "M":[53.5,61.5,60], "L":[57,63,60.5], "XL":[59.5,64.5,61.5] }
  },

  "jetline-h": {
    esquema: "chaqueta",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XS":[57,63,61], "S":[59.5,65,64], "M":[61,66,64.5], "L":[61.5,69,65.5], "XL":[64,70,66.5] }
  },
  "jetline-m": {
    esquema: "chaqueta",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XS":[57,63,61], "S":[59.5,65,64], "M":[61,66,64.5], "L":[61.5,69,65.5], "XL":[64,70,66.5] },
    revisar: true,
    aviso: "Tabla idéntica a la de hombre en el documento técnico. Confirmar con producción."
  },

  "softshell-h": {
    esquema: "chaqueta",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XS":[53,65.5,59.5], "S":[54,66.5,60.5], "M":[56.5,67.5,62.5], "L":[58.5,69.5,65], "XL":[60,71,67] },
    revisar: true
  },
  "softshell-m": {
    esquema: "chaqueta",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XS":[48,60,58.5], "S":[49.5,61.5,59.5], "M":[51,62.5,60.5], "L":[52,64,61.5], "XL":[53,65,62.5] },
    revisar: true
  },

  "ultraice-u": {
    esquema: "chaqueta-capota",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "S":[54,62,62], "M":[56,65,63], "L":[58,66,63], "XL":[61,69,66] }
  },

  "fleeceflex-h": {
    esquema: "chaqueta",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "S":[54,62,62], "M":[56,65,63], "L":[58,66,63], "XL":[61,69,66] }
  },
  "fleeceflex-m": {
    esquema: "chaqueta",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "S":[54,62,62], "M":[56,65,63], "L":[58,66,63], "XL":[61,69,66] },
    revisar: true,
    aviso: "Tabla idéntica a la de hombre en el documento técnico. Confirmar con producción."
  },

  /* ===== CHALECOS ===== */

  "skyflow-u": {
    esquema: "chaleco",
    columnas: ["Ancho pecho", "Largo"],
    filas: { "S":[54,62], "M":[56.5,64.5], "L":[59,66.5], "XL":[61,69] }
  },

  "chaleco-fleece-u": {
    esquema: "chaleco",
    columnas: ["Ancho pecho", "Largo"],
    filas: { "S":[55,63] },
    aviso: "Tallas M, L y XL pendientes de medición."
  },

  /* ===== BUZOS ===== */

  "buzo-basico-u": {
    esquema: "buzo",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XS":[49.5,63,57.5], "S":[50,67,57.5], "M":[53.5,69.5,57.5], "L":[58,71,57.5], "XL":[63,76,58.5] }
  },

  "buzo-capota-u": {
    esquema: "buzo-capota",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XS":[49,65,57.5], "S":[50,67,57.5], "M":[53.5,69,57.5], "L":[58,71,57.5], "XL":[63,76,58.5] }
  },

  "buzo-abierto-capota-h": {
    esquema: "buzo-capota",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "S":[48,65.5,61], "M":[52,70.5,62], "L":[59,73,62], "XL":[63.5,76.5,62] }
  },
  "buzo-abierto-capota-m": {
    esquema: "buzo-capota",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XS":[49,53,59.5], "S":[50,59,60], "M":[52.5,59,60], "L":[56,64,60], "XL":[57,65,60] }
  },

  "buzo-abierto-sincapota-h": {
    esquema: "buzo",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XS":[48.5,65,60], "S":[50,65,60.5], "M":[54.5,69.5,61],
             "L":[59.5,71.5,61], "XL":[64.5,76.5,61.5], "2XL":[67,78.5,62.5] }
  },
  "buzo-abierto-sincapota-m": {
    esquema: "buzo",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XS":[49,53,59.5], "S":[50,59,60], "M":[52.5,59,60], "L":[56,64,60], "XL":[57,65,60] },
    revisar: true,
    aviso: "En el documento técnico esta tabla aparece rotulada como hombre. Confirmar con producción."
  },

  "buzo-cuelloalto-h": {
    esquema: "buzo",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "S":[51,68.5,61], "M":[54.5,70,61], "L":[59.5,73,61], "XL":[65.5,79,61.5] }
  },
  "buzo-cuelloalto-m": {
    esquema: "buzo",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "XS":[48,59,60], "S":[50.5,60,60.5], "M":[51.5,61.5,61], "L":[55,63,62], "XL":[57.5,65,62.5] }
  },

  /* ===== CAMISETAS Y POLOS ===== */

  "polo-h": {
    esquema: "polo",
    columnas: ["Ancho pecho", "Largo"],
    filas: { "S":[50,69], "M":[52,72], "L":[54,75], "XL":[56,78], "2XL":[59,81] },
    revisar: true
  },
  "polo-m": {
    esquema: "polo",
    columnas: ["Ancho pecho", "Largo"],
    filas: { "S":[43,70], "M":[45,73], "L":[47,76], "XL":[49,79] },
    revisar: true
  },

  /* ===== CAMISAS ===== */

  "camisa-h": {
    esquema: "camisa",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "S":[44,68,58], "M":[45.5,70,59.5], "L":[47,72,61], "XL":[49,73.5,62.5] }
  },
  "camisa-m": {
    esquema: "camisa",
    columnas: ["Ancho pecho", "Largo", "Largo manga"],
    filas: { "S":[45.5,59,58], "M":[47.5,60.5,58.5], "L":[50.5,63,60], "XL":[53.5,65.5,62] }
  },

  /* ===== PANTALONES (en el documento técnico, aún no en el catálogo) ===== */

  "pantalon-h": {
    esquema: "pantalon",
    columnas: ["Contorno cintura", "Contorno cadera", "Largo"],
    filas: { "XS":[48,66,60], "S":[49,69,60], "M":[54,70,61], "L":[56.5,70,61], "XL":[65.5,77,61] }
  },
  "pantalon-m": {
    esquema: "pantalon",
    columnas: ["Contorno cintura", "Contorno cadera", "Largo"],
    filas: { "4":[31,40,100], "6":[32,41,101], "8":[35,42,101], "10":[36,43.5,101],
             "12":[38,44,102], "14":[39.5,46.5,106], "16":[42,49,106],
             "18":[43,51,107], "20":[44,52,108], "22":[45,53,109] }
  },

  /* ===== UNIFORME ANTIFLUIDOS (en el documento técnico) ===== */

  "uniforme-camiseta-h": {
    esquema: "polo",
    columnas: ["Ancho pecho", "Largo"],
    filas: { "S":[55.5,65], "M":[58.5,67.5], "L":[60.5,69], "XL":[62.5,70] }
  },
  "uniforme-pantalon-h": {
    esquema: "pantalon",
    columnas: ["Contorno cadera", "Largo"],
    filas: { "S":[48,109], "M":[53,110], "L":[54,110.5], "XL":[55.5,113] }
  }
};


/* Instrucciones que se muestran debajo de cada tabla */
window.TALLAS_INSTRUCCIONES = [
  "Toma como referencia una prenda con la que te sientas cómodo.",
  "Extiéndela completamente sobre una superficie plana.",
  "Con un flexómetro o metro, toma las medidas como se indica en el dibujo.",
  "Define tu talla con la tabla de medidas."
];

window.TALLAS_NOTA = "Las medidas están en centímetros y pueden variar hasta ±2 cm.";
