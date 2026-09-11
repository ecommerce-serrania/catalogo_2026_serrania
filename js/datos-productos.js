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
                     Enfócalo en lo que le importa al cliente, no en la ficha técnica.
                     Bien:  "Nuestra chaqueta más vendida. Buen balance entre costo y funcionalidad."
                     Mal:   "Rompevientos con capota integrada y cortes en contraste."
   claves .......... 3 o 4 características. Van como viñetas en la ficha.
                     La primera debería ser qué se puede personalizar.
                     Ej: "Personalizable en color de chaqueta, forro y cremallera"
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
  resumen: "Nuestra chaqueta más vendida. Buen balance entre costo y funcionalidad.",
  claves: ["Personalizable en color de chaqueta, forro y cremallera", "Capota integrada", "Bolsillos internos y externos con cremallera", "Puños ajustables"],
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
  resumen: "Silueta limpia que se ve bien sobre camisa y aguanta la jornada completa.",
  claves: ["Personalizable en color de tela, forro y líneas diagonales", "Cuello alto", "Mangas ranglán para mayor movilidad", "Bolsillos externos e internos"],
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
  resumen: "La más elegante del catálogo. Reemplaza el saco sin perder formalidad.",
  claves: ["Personalizable en color de paño y forro", "Marcación láser que no se despega ni se decolora", "Cuello mao y cierre semi-invisible", "Bolsillos discretos y puños ajustables"],
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
  resumen: "Cómoda de verdad. Es la que el equipo termina usando también fuera del trabajo.",
  claves: ["Personalizable en color de tela, cortes y cremallera", "Cuello alto", "Cortes en contraste", "Bolsillos laterales con cierre"],
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
  resumen: "Para equipos que trabajan en frío real: cuartos fríos, turnos de noche, alta montaña.",
  claves: ["Personalizable en color externo, forro y cremallera", "Relleno térmico", "Capota integrada", "Puños y pretina elásticos que sellan el calor"],
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
  resumen: "Abriga sin abultar. Se usa sola o debajo de otra chaqueta cuando baja la temperatura.",
  claves: ["Personalizable en color de polar", "Polar de alta densidad", "Bolsillos en pecho y cuerpo con cremallera", "Bordado que se sostiene lavada tras lavada"],
  tela: "Polar de alta densidad",
  colores: "fleece",
  tallas: { hombre: "fleeceflex-h", mujer: "fleeceflex-m" },
  tecnicas: ["bordado"],
  minimo: 50,
  usos: ["frio", "casual"],
  destacado: false
},
{
  id: "jetline",
  nombre: "Chaqueta Jetline",
  categoria: "chaquetas",
  resumen: "Estilo bomber que la gente se pone el fin de semana. Juvenil sin perder formalidad.",
  claves: ["Personalizable en color de tela, forro y franjas del rib", "Forro térmico liviano", "Tela antifluidos", "Cuello, puños y pretina en rib"],
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
  resumen: "Impermeable y cortaviento de verdad. Resiste jornada completa a la intemperie.",
  claves: ["Personalizable en color externo y forro", "Tejido impermeable y cortaviento", "Interior térmico suave", "Cremalleras funcionales y cuello alto"],
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
  resumen: "Abriga el torso y deja los brazos libres. Para quien se mueve todo el día.",
  claves: ["Personalizable en color externo, forro y cremallera", "Aislamiento ligero tipo puffer", "Cuello alto", "Bolsillos laterales con cierre"],
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
  resumen: "La capa extra que no estorba. Se ve pulcra sobre camisa en atención al cliente.",
  claves: ["Personalizable en color de polar", "Tres bolsillos con cremallera", "Polar de alta densidad", "Retiene el calor sin restar movilidad"],
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
  resumen: "El lienzo más grande para tu marca. El más pedido para eventos y campañas.",
  claves: ["Personalizable en color de prenda y estampado", "Amplia área de marcación en pecho y espalda", "Cuello redondo", "20 colores disponibles"],
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
  resumen: "El favorito de los equipos jóvenes. Se lo llevan puesto a la casa.",
  claves: ["Personalizable en color de prenda, cordón y estampado", "Capucha ajustable", "Bolsillo canguro", "Marcación en pecho, espalda y manga"],
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
  resumen: "Fácil de poner y quitar sobre el uniforme. Cómodo en jornadas largas.",
  claves: ["Personalizable en color de prenda, cordón y cremallera", "Cremallera completa", "Capucha ajustable", "Bolsillos frontales"],
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
  resumen: "Línea limpia que combina con camisa. Oficina informal sin verse desarreglado.",
  claves: ["Personalizable en color de prenda y cremallera", "Cremallera frontal", "Cuello alto", "Bolsillos frontales"],
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
  resumen: "El punto medio entre el buzo casual y la prenda ejecutiva. Discreto y abrigado.",
  claves: ["Personalizable en color de prenda y cierre", "Cierre tipo 1/4", "Cuello alto", "Ideal para bordado discreto en pecho"],
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
  resumen: "La base de cualquier dotación. Algodón que aguanta lavadas sin deformarse.",
  claves: ["Personalizable en color de prenda y estampado", "100% algodón", "19 colores disponibles", "Marcación en pecho, espalda y manga"],
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
  resumen: "Cuando el diseño lo es todo. Tu marca en toda la prenda, sin límite de color.",
  claves: ["Diseño full color en toda la prenda", "Sin límite de tonos ni degradados", "Ideal para eventos deportivos y maratones", "Máxima visibilidad de marca"],
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
  resumen: "Profesionalismo sin corbata. La prenda de atención al cliente por excelencia.",
  claves: ["Personalizable en color de prenda, cuello y botones", "Cuello tejido que no se deforma", "20 colores disponibles", "Bordado en pecho y manga"],
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
  resumen: "Para equipos deportivos y eventos. Máxima visibilidad sin límite de diseño.",
  claves: ["Diseño full color en toda la prenda", "Sin límite de paleta ni patrones", "Cuello clásico", "Tela liviana de secado rápido"],
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
  resumen: "Formalidad con frescura. Se ve impecable después de ocho horas de uso.",
  claves: ["Personalizable en color, diseño y tipo de marcación", "100% algodón", "Manga larga o corta", "Corte estructurado que no se arruga fácil"],
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
  resumen: "El detalle que eleva un uniforme de atención al cliente. Diseño exclusivo para tu marca.",
  claves: ["Diseño full color exclusivo para tu empresa", "Textura suave y brillo sutil", "Tres tamaños disponibles", "Se usa al cuello o en el bolso"],
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
  resumen: "Para eventos al aire libre y activaciones de marca. Protege del sol y luce bien en fotos.",
  claves: ["Cinta personalizable con tu logo tejido", "Fibra natural trenzada", "Protección solar real", "Acabado artesanal"],
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
  resumen: "Repele el agua sin perder forma. Para equipos que trabajan a la intemperie.",
  claves: ["Personalizable en color y tipo de marcación", "100% poliéster impermeable", "Forro de malla", "Cierre de velcro ajustable"],
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
  resumen: "Ligera y ventilada. La más cómoda para uso diario en clima cálido.",
  claves: ["Personalizable en color y tipo de marcación", "Malla fina de 7 hilos", "Cierre de botones", "9 colores disponibles"],
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
  resumen: "Frente firme: la mejor base para un logo grande en relieve.",
  claves: ["Personalizable en color y tipo de marcación", "Soporte interno rígido que mantiene la forma", "Botón metálico forrado en la corona", "Cierre ajustable"],
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
  resumen: "Acabado premium con cierre metálico. La gorra para clientes y regalos ejecutivos.",
  claves: ["Personalizable en color y tipo de marcación", "Cierre metálico de alta densidad", "Soporte interno rígido", "10 colores disponibles"],
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
  resumen: "Portafolio para el equipo comercial. Protege el portátil y se ve bien en una reunión.",
  claves: ["Etiqueta y forro personalizables", "Compartimento acolchado para portátil", "Organizador interno forrado", "Cierre lateral de acceso rápido"],
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
  resumen: "Ligera y económica. La opción para entregar a mucha gente en un evento.",
  claves: ["Amplia área de marcación en el frente", "Cierre de cordón ajustable", "Bolsillo lateral con cremallera", "Se pliega y ocupa nada"],
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
  resumen: "El morral versátil para dotación masiva. Gran superficie para tu logo.",
  claves: ["Personalizable en color y tipo de marcación", "Dos compartimentos principales", "Tirantes acolchados", "Bolsillo frontal con cremallera"],
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
  resumen: "Morral ejecutivo para quien carga portátil todos los días.",
  claves: ["Personalizable en color y tipo de marcación", "Compartimento acolchado para portátil", "Espalda ergonómica", "Organizador interno"],
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
  resumen: "Gran capacidad para jornadas largas y trabajo en campo.",
  claves: ["Personalizable en color y tipo de marcación", "Correas de pecho y cintura", "Múltiples bolsillos externos", "Tela resistente al uso rudo"],
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
