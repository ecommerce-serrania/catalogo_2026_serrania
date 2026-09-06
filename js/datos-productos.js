/* ==========================================================================
   CATÁLOGO DE PRODUCTOS

   PARA AGREGAR UN PRODUCTO NUEVO:
   1. Copia un bloque completo (desde { hasta },)
   2. Pégalo al final, antes del corchete de cierre ]
   3. Cambia los valores
   4. Sube las 3 fotos a img/productos/ con el nombre del "id"
      Ejemplo: id "cyclone"  →  cyclone-1.webp, cyclone-2.webp, cyclone-3.webp

   CAMPOS
   id .............. nombre corto sin tildes ni espacios. Define las fotos y el enlace.
   nombre .......... como se ve en pantalla
   categoria ....... chaquetas | chalecos | buzos | camisetas | camisas | accesorios | maletas
   resumen ......... una línea, máximo 20 palabras. Sale en la tarjeta y en Google.
   claves .......... 3 o 4 características. Van como viñetas en la ficha.
   tela ............ composición y gramaje. Deja "" si no aplica.
   colores ......... nombre de la paleta en datos-colores.js
   tallas .......... { hombre:"clave", mujer:"clave", unisex:"clave" } de datos-tallas.js
                     Deja {} si el producto no lleva tabla de tallas.
   tecnicas ........ bordado | sublimacion | dtf | vinilo | vinilo-gamuzado | serigrafia | laser
   minimo .......... unidades mínimas
   usos ............ etiquetas para el filtro: formal | casual | deportivo | frio | impermeable | exterior
   destacado ....... true para que salga en la portada
   ========================================================================== */

window.PRODUCTOS = [

/* ========================= CHAQUETAS ========================= */
{
  id: "cyclone",
  nombre: "Chaqueta Cyclone",
  categoria: "chaquetas",
  resumen: "Rompevientos con capota integrada y cortes en contraste, para equipos que trabajan a la intemperie.",
  claves: ["Capota integrada", "Cierre frontal semi-invisible", "Bolsillos internos y externos con cremallera", "Puños ajustables"],
  tela: "",
  colores: "full",
  tallas: { hombre: "cyclone-h", mujer: "cyclone-m" },
  tecnicas: ["bordado", "vinilo", "dtf"],
  minimo: 50,
  usos: ["exterior", "impermeable", "casual"],
  destacado: true
},
{
  id: "aerofusion",
  nombre: "Chaqueta Aerofusion",
  categoria: "chaquetas",
  resumen: "Cuello alto y mangas ranglán con líneas diagonales personalizables. Silueta limpia para uso corporativo.",
  claves: ["Cuello alto", "Cierre semi-invisible", "Mangas ranglán", "Bolsillos externos e internos"],
  tela: "",
  colores: "full",
  tallas: { hombre: "aerofusion-h", mujer: "aerofusion-m" },
  tecnicas: ["bordado", "vinilo", "dtf"],
  minimo: 50,
  usos: ["formal", "casual"],
  destacado: true
},
{
  id: "business",
  nombre: "Chaqueta Business",
  categoria: "chaquetas",
  resumen: "Cuello mao y acabado en paño. La opción más formal del catálogo, ideal para marcación a láser.",
  claves: ["Cuello mao", "Cierre semi-invisible", "Puños ajustables", "Bolsillos discretos"],
  tela: "",
  colores: "business",
  tallas: { hombre: "business-h", mujer: "business-m" },
  tecnicas: ["laser", "bordado"],
  minimo: 50,
  usos: ["formal"],
  destacado: true
},
{
  id: "sporty",
  nombre: "Chaqueta Sporty",
  categoria: "chaquetas",
  resumen: "Cuello alto y cortes en contraste. Versátil entre la oficina y las actividades de equipo.",
  claves: ["Cuello alto", "Cremallera semi-invisible", "Cortes en contraste", "Bolsillos laterales con cierre"],
  tela: "",
  colores: "sporty",
  tallas: { hombre: "sporty-h", mujer: "sporty-m" },
  tecnicas: ["bordado", "vinilo", "dtf", "serigrafia"],
  minimo: 50,
  usos: ["deportivo", "casual"],
  destacado: false
},
{
  id: "ultra-ice",
  nombre: "Chaqueta Ultra-Ice",
  categoria: "chaquetas",
  resumen: "Acolchada con capota integrada. Diseñada para operación en frío y trabajo nocturno.",
  claves: ["Relleno térmico", "Capota integrada", "Mangas ranglán", "Puños y pretina elásticos"],
  tela: "",
  colores: "full",
  tallas: { unisex: "ultraice-u" },
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["frio", "exterior"],
  destacado: true
},
{
  id: "fleeceflex",
  nombre: "Chaqueta Fleeceflex",
  categoria: "chaquetas",
  resumen: "Polar liviano y abrigado. Funciona sola o como capa interna de otra chaqueta.",
  claves: ["Polar de alta densidad", "Cuello alto", "Cremallera con contraste", "Bolsillos en pecho y cuerpo"],
  tela: "Polar de alta densidad",
  colores: "fleece",
  tallas: { hombre: "fleeceflex-h", mujer: "fleeceflex-m" },
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["frio", "casual"],
  destacado: false
},
{
  id: "jetline",
  nombre: "Chaqueta Jetline",
  categoria: "chaquetas",
  resumen: "Bomber con forro térmico liviano y acabados en rib con franjas decorativas.",
  claves: ["Tela antifluidos", "Forro térmico liviano", "Cuello, puños y pretina en rib", "Detalles internos de color"],
  tela: "",
  colores: "full",
  tallas: { hombre: "jetline-h", mujer: "jetline-m" },
  tecnicas: ["bordado", "vinilo", "dtf"],
  minimo: 50,
  usos: ["casual", "frio"],
  destacado: false
},
{
  id: "softshell",
  nombre: "Chaqueta Softshell",
  categoria: "chaquetas",
  resumen: "Técnica de alto rendimiento: impermeable, cortaviento e interior térmico. Sobria y estructurada.",
  claves: ["Tejido impermeable y cortaviento", "Interior térmico suave", "Cuello alto", "Cremalleras funcionales"],
  tela: "",
  colores: "full",
  tallas: { hombre: "softshell-h", mujer: "softshell-m" },
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["impermeable", "exterior", "formal"],
  destacado: true
},

/* ========================= CHALECOS ========================= */
{
  id: "skyflow",
  nombre: "Chaleco Skyflow",
  categoria: "chalecos",
  resumen: "Acolchado tipo puffer con costuras horizontales y cuello alto. Abriga sin restar movilidad.",
  claves: ["Aislamiento ligero", "Costuras horizontales", "Cuello alto", "Cremallera completa y bolsillos laterales"],
  tela: "",
  colores: "full",
  tallas: { unisex: "skyflow-u" },
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["frio", "casual"],
  destacado: false
},
{
  id: "chaleco-fleece-flex",
  nombre: "Chaleco Fleece Flex",
  categoria: "chalecos",
  resumen: "Polar de alta densidad con tres bolsillos con cremallera. Cómodo sobre camisa formal.",
  claves: ["Polar de alta densidad", "Tres bolsillos con cremallera", "Textura suave al tacto", "Retiene el calor corporal"],
  tela: "Polar de alta densidad",
  colores: "fleece",
  tallas: { unisex: "chaleco-fleece-u" },
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["frio", "formal"],
  destacado: false
},

/* ========================= BUZOS ========================= */
{
  id: "buzo-basico",
  nombre: "Buzo básico",
  categoria: "buzos",
  resumen: "Cuello redondo, sin complicaciones. El lienzo más económico para una marcación grande.",
  claves: ["Cuello redondo", "Puños y pretina en rib", "Amplia área de marcación", "20 colores disponibles"],
  tela: "50% algodón, 50% poliéster. Gramaje 210 gr.",
  colores: "algodon",
  tallas: { unisex: "buzo-basico-u" },
  tecnicas: ["dtf", "serigrafia", "bordado", "vinilo"],
  minimo: 50,
  usos: ["casual"],
  destacado: true
},
{
  id: "buzo-capota",
  nombre: "Buzo con capota",
  categoria: "buzos",
  resumen: "Hoodie cerrado con capucha ajustable y bolsillo canguro. El favorito de los equipos jóvenes.",
  claves: ["Capucha ajustable", "Bolsillo canguro", "Puños y pretina en rib", "Marcación en pecho, espalda y manga"],
  tela: "50% algodón, 50% poliéster. Gramaje 210 gr.",
  colores: "algodon",
  tallas: { unisex: "buzo-capota-u" },
  tecnicas: ["dtf", "serigrafia", "bordado", "vinilo"],
  minimo: 50,
  usos: ["casual"],
  destacado: true
},
{
  id: "buzo-abierto-capota",
  nombre: "Buzo abierto con capota",
  categoria: "buzos",
  resumen: "Hoodie con cremallera completa y capucha ajustable. Fácil de poner sin despeinar.",
  claves: ["Cremallera completa", "Capucha ajustable", "Bolsillos frontales", "Diseño urbano y relajado"],
  tela: "50% algodón, 50% poliéster. Gramaje 210 gr.",
  colores: "algodon",
  tallas: { hombre: "buzo-abierto-capota-h", mujer: "buzo-abierto-capota-m" },
  tecnicas: ["dtf", "serigrafia", "bordado", "vinilo"],
  minimo: 50,
  usos: ["casual"],
  destacado: false
},
{
  id: "buzo-abierto-sin-capota",
  nombre: "Buzo abierto sin capota",
  categoria: "buzos",
  resumen: "Cremallera frontal y línea limpia. Combina con camisa para un look de oficina informal.",
  claves: ["Cremallera frontal", "Cuello alto", "Bolsillos frontales", "Diseño sobrio"],
  tela: "50% algodón, 50% poliéster. Gramaje 210 gr.",
  colores: "algodon",
  tallas: { hombre: "buzo-abierto-sincapota-h", mujer: "buzo-abierto-sincapota-m" },
  tecnicas: ["dtf", "serigrafia", "bordado", "vinilo"],
  minimo: 50,
  usos: ["casual", "formal"],
  destacado: false
},
{
  id: "buzo-cuello-alto",
  nombre: "Buzo cuello alto",
  categoria: "buzos",
  resumen: "Cierre tipo 1/4 y cuello alto. El punto medio entre el buzo casual y la prenda ejecutiva.",
  claves: ["Cierre tipo 1/4", "Cuello alto", "Puños y pretina en rib", "Bordado discreto en pecho"],
  tela: "50% algodón, 50% poliéster. Gramaje 210 gr.",
  colores: "algodon",
  tallas: { hombre: "buzo-cuelloalto-h", mujer: "buzo-cuelloalto-m" },
  tecnicas: ["bordado", "dtf", "vinilo"],
  minimo: 50,
  usos: ["formal", "casual"],
  destacado: true
},

/* ========================= CAMISETAS Y POLOS ========================= */
{
  id: "camiseta-cuello-redondo",
  nombre: "Camiseta cuello redondo",
  categoria: "camisetas",
  resumen: "Algodón 100%, corte clásico. La prenda base para eventos, campañas y dotación diaria.",
  claves: ["100% algodón", "Corte clásico unisex", "19 colores disponibles", "Marcación en pecho, espalda y manga"],
  tela: "100% algodón. Gramaje 150 gr.",
  colores: "camiseta",
  tallas: {},
  tecnicas: ["dtf", "serigrafia", "bordado", "vinilo"],
  minimo: 50,
  usos: ["casual"],
  destacado: true
},
{
  id: "camiseta-sublimada",
  nombre: "Camiseta sublimada",
  categoria: "camisetas",
  resumen: "Personalización full color en toda la prenda: pecho, mangas y laterales, sin límite de diseño.",
  claves: ["Sublimación en toda la prenda", "Sin límite de colores ni degradados", "Ideal para eventos deportivos", "Máxima visibilidad de marca"],
  tela: "100% poliéster",
  colores: "sublimacion",
  tallas: {},
  tecnicas: ["sublimacion"],
  minimo: 50,
  usos: ["deportivo", "casual"],
  destacado: false
},
{
  id: "camiseta-polo",
  nombre: "Camiseta tipo polo",
  categoria: "camisetas",
  resumen: "Cuello clásico y estructura ajustada. Profesionalismo sin sacrificar comodidad.",
  claves: ["Cuello tejido clásico", "Estructura ajustada", "20 colores disponibles", "Bordado en pecho y manga"],
  tela: "50% algodón, 50% poliéster. Gramaje 210 gr.",
  colores: "polo",
  tallas: { hombre: "polo-h", mujer: "polo-m" },
  tecnicas: ["bordado", "dtf", "vinilo"],
  minimo: 50,
  usos: ["formal", "casual"],
  destacado: true
},
{
  id: "polo-sublimada",
  nombre: "Camiseta polo sublimada",
  categoria: "camisetas",
  resumen: "Polo con sublimación total. Cualquier paleta o patrón gráfico sobre toda la prenda.",
  claves: ["Sublimación full color", "Cuello clásico", "Sin límites de diseño", "Alta visibilidad para equipos"],
  tela: "100% poliéster",
  colores: "sublimacion",
  tallas: {},
  tecnicas: ["sublimacion"],
  minimo: 50,
  usos: ["deportivo", "casual"],
  destacado: false
},

/* ========================= CAMISAS ========================= */
{
  id: "camisa-canvas",
  nombre: "Camisa Canvas",
  categoria: "camisas",
  resumen: "Corte estructurado en algodón, disponible en manga larga y corta. Formalidad con frescura.",
  claves: ["100% algodón", "Corte estructurado", "Manga larga o corta", "Bordado o estampado en pecho"],
  tela: "100% algodón",
  colores: "camisa",
  tallas: { hombre: "camisa-h", mujer: "camisa-m" },
  tecnicas: ["bordado", "sublimacion"],
  minimo: 50,
  usos: ["formal"],
  destacado: true
},

/* ========================= ACCESORIOS ========================= */
{
  id: "panoleta-satin",
  nombre: "Pañoleta tipo satín",
  categoria: "accesorios",
  resumen: "Accesorio en satín con diseño personalizable. Complementa uniformes de atención al cliente.",
  claves: ["Textura suave y brillo sutil", "Diseño full color personalizable", "Tres tamaños disponibles", "Se usa al cuello o en bolso"],
  tela: "Satín",
  colores: "sublimacion",
  tallas: {},
  medidas: [["Pequeña", "45 × 45 cm"], ["Mediana", "70 × 70 cm"], ["Grande", "85 × 85 cm"]],
  tecnicas: ["sublimacion"],
  minimo: 200,
  usos: ["formal"],
  destacado: false
},
{
  id: "sombrero-panamericano",
  nombre: "Sombrero panamericano",
  categoria: "accesorios",
  resumen: "Sombrero en fibra natural con cinta tejida personalizable. Para eventos al aire libre.",
  claves: ["Fibra natural trenzada", "Cinta personalizable con logo", "Protección solar", "Acabado artesanal"],
  tela: "Fibra natural",
  colores: "",
  tallas: {},
  tecnicas: ["bordado"],
  minimo: 50,
  usos: ["exterior", "casual"],
  destacado: false
},
{
  id: "gorra-impermeable",
  nombre: "Gorra impermeable",
  categoria: "accesorios",
  resumen: "Poliéster impermeable con forro de malla y cierre de velcro. Repele el agua sin perder forma.",
  claves: ["100% poliéster impermeable", "Forro de malla", "Cierre broche con velcro", "7 colores disponibles"],
  tela: "100% poliéster",
  colores: "gorra-impermeable",
  tallas: {},
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["exterior", "impermeable"],
  destacado: false
},
{
  id: "gorra-malla-fina",
  nombre: "Gorra malla fina",
  categoria: "accesorios",
  resumen: "Malla fina de 7 hilos con cierre de botones. Ligera y ventilada para uso diario.",
  claves: ["100% poliéster", "Malla fina de 7 hilos", "Cierre de botones", "9 colores disponibles"],
  tela: "100% poliéster",
  colores: "gorra-malla-fina",
  tallas: {},
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["casual", "exterior"],
  destacado: false
},
{
  id: "gorra-malla-unicolor",
  nombre: "Gorra malla unicolor",
  categoria: "accesorios",
  resumen: "Estructura rígida y frente firme. La mejor base para logos grandes en relieve.",
  claves: ["Soporte interno rígido de polietileno", "Botón metálico forrado en la corona", "Cierre ajustable", "13 colores disponibles"],
  tela: "100% poliéster",
  colores: "gorra-malla-unicolor",
  tallas: {},
  tecnicas: ["bordado", "vinilo", "dtf"],
  minimo: 50,
  usos: ["casual", "exterior"],
  destacado: false
},
{
  id: "gorra-flex-hebilla",
  nombre: "Gorra flex hebilla",
  categoria: "accesorios",
  resumen: "Cierre metálico de alta densidad y estructura firme. El acabado más pulido de la línea.",
  claves: ["100% poliéster", "Soporte interno rígido", "Cierre metálico de alta densidad", "10 colores disponibles"],
  tela: "100% poliéster",
  colores: "gorra-flex",
  tallas: {},
  tecnicas: ["bordado", "vinilo"],
  minimo: 50,
  usos: ["casual", "formal"],
  destacado: false
},

/* ========================= MALETAS ========================= */
{
  id: "maleta-elegance",
  nombre: "Maleta Elegance",
  categoria: "maletas",
  resumen: "Portafolio con compartimento acolchado para portátil y organizador interno forrado.",
  claves: ["Compartimento para portátil", "Organizador interno forrado", "Etiqueta personalizable", "Cierre lateral de acceso rápido"],
  tela: "",
  colores: "",
  tallas: {},
  tecnicas: ["bordado", "dtf"],
  minimo: 50,
  usos: ["formal"],
  destacado: false
},
{
  id: "maleta-dynamix",
  nombre: "Maleta Dynamix",
  categoria: "maletas",
  resumen: "Tula con cordón ajustable y bolsillo lateral. Ligera, plegable y económica para eventos.",
  claves: ["Cierre de cordón ajustable", "Bolsillo lateral con cremallera", "Se pliega fácilmente", "Amplia área de marcación"],
  tela: "",
  colores: "",
  tallas: {},
  tecnicas: ["dtf", "serigrafia", "vinilo"],
  minimo: 50,
  usos: ["deportivo", "casual"],
  destacado: false
},
{
  id: "maleta-rover",
  nombre: "Maleta Rover",
  categoria: "maletas",
  resumen: "Morral clásico de dos compartimentos. El más versátil para dotación masiva.",
  claves: ["Dos compartimentos principales", "Bolsillo frontal con cremallera", "Tirantes acolchados", "Gran superficie para logo"],
  tela: "",
  colores: "",
  tallas: {},
  tecnicas: ["bordado", "dtf", "serigrafia"],
  minimo: 50,
  usos: ["casual"],
  destacado: false
},
{
  id: "maleta-office-pro",
  nombre: "Maleta Office Pro",
  categoria: "maletas",
  resumen: "Morral ejecutivo con espalda acolchada y compartimento protegido para portátil.",
  claves: ["Compartimento acolchado para portátil", "Espalda ergonómica", "Organizador interno", "Acabado ejecutivo"],
  tela: "",
  colores: "",
  tallas: {},
  tecnicas: ["bordado", "dtf"],
  minimo: 50,
  usos: ["formal"],
  destacado: false
},
{
  id: "maleta-navigator",
  nombre: "Maleta Navigator",
  categoria: "maletas",
  resumen: "Morral outdoor de gran capacidad con correas de pecho y cintura. Para jornadas largas.",
  claves: ["Gran capacidad", "Correas de pecho y cintura", "Múltiples bolsillos externos", "Tela resistente"],
  tela: "",
  colores: "",
  tallas: {},
  tecnicas: ["bordado", "dtf"],
  minimo: 50,
  usos: ["exterior", "deportivo"],
  destacado: false
}

];


/* ==========================================================================
   CATEGORÍAS — controlan el menú y el orden en que aparecen
   ========================================================================== */
window.CATEGORIAS = [
  { id: "chaquetas",  nombre: "Chaquetas"  },
  { id: "chalecos",   nombre: "Chalecos"   },
  { id: "buzos",      nombre: "Buzos"      },
  { id: "camisetas",  nombre: "Camisetas y polos" },
  { id: "camisas",    nombre: "Camisas"    },
  { id: "accesorios", nombre: "Accesorios" },
  { id: "maletas",    nombre: "Maletas"    }
];

/* Etiquetas de uso para el filtro */
window.USOS = [
  { id: "formal",      nombre: "Corporativo formal" },
  { id: "casual",      nombre: "Casual"             },
  { id: "deportivo",   nombre: "Deportivo"          },
  { id: "frio",        nombre: "Clima frío"         },
  { id: "impermeable", nombre: "Impermeable"        },
  { id: "exterior",    nombre: "Trabajo exterior"   }
];

/* Técnicas de personalización */
window.TECNICAS = {
  "bordado":          { nombre: "Bordado",          detalle: "Con o sin relieve" },
  "sublimacion":      { nombre: "Sublimación",      detalle: "Full color en toda la prenda" },
  "dtf":              { nombre: "DTF",              detalle: "Impresión digital" },
  "vinilo":           { nombre: "Vinilo",           detalle: "Colores, texturas y brillos" },
  "vinilo-gamuzado":  { nombre: "Vinilo gamuzado",  detalle: "Textura en terciopelo" },
  "serigrafia":       { nombre: "Serigrafía",       detalle: "Impresión a tinta" },
  "laser":            { nombre: "Láser",            detalle: "Marcación grabada" }
};


/* ==========================================================================
   TIPOS DE ESTAMPADO
   Las fotos van en img/estampados/ con el nombre del "id" y extensión .webp
   Ejemplo:  id "bordado"  ->  img/estampados/bordado.webp
   Mientras no exista la foto, se muestra solo el texto.
   ========================================================================== */
window.ESTAMPADOS = [
  { id: "bordado",         nombre: "Bordado",         detalle: "Con o sin relieve. El acabado más duradero y el más usado en prendas ejecutivas." },
  { id: "sublimacion",     nombre: "Sublimación",     detalle: "Diseños a full color en toda la prenda, sin límite de tonos ni degradados." },
  { id: "dtf",             nombre: "DTF",             detalle: "Impresión digital de alta definición. Ideal para logos con muchos colores." },
  { id: "serigrafia",      nombre: "Serigrafía",      detalle: "Impresión a tinta. Rinde mejor el costo en tirajes grandes con pocos colores." },
  { id: "vinilo",          nombre: "Vinilo",          detalle: "Infinita variedad de colores, texturas, brillos y efectos visuales." },
  { id: "vinilo-gamuzado", nombre: "Vinilo gamuzado", detalle: "Textura en terciopelo, con relieve suave al tacto." },
  { id: "laser",           nombre: "Láser",           detalle: "Marcación grabada sobre la tela. Acabado sobrio y discreto." }
];

/* ==========================================================================
   EMPAQUE
   Las fotos van en img/empaque/ con el nombre del "id" y extensión .webp
   ========================================================================== */
window.EMPAQUE = [
  { id: "cintillo",      nombre: "Cintillo personalizable", detalle: "Cartón 100% reciclado con certificación FSC. Lleva tu marca impresa y presenta la prenda doblada." },
  { id: "bolsa-de-tela", nombre: "Bolsa de tela",           detalle: "100% reutilizable y reciclable, personalizable con tu logo. Convierte la entrega en un segundo punto de contacto con la marca." }
];
