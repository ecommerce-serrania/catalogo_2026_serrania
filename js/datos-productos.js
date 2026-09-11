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
  resumen: "Nuestra chaqueta más vendida. El mejor equilibrio entre precio y desempeño.",
  claves: ["Eliges el color de la tela, del forro y de la cremallera", "Capucha incorporada, no se pierde ni se desprende", "Bolsillos por dentro y por fuera, todos con cremallera", "Puños que se ajustan para que no entre el viento"],
  detalle: "Es la chaqueta que más pedimos rehacer cada año, y por algo: protege del viento y la llovizna sin volverse pesada, y se ve igual de bien sobre una camisa que sobre una camiseta. La personalización a tres niveles (tela, forro y cremallera) permite que dos empresas pidan la misma referencia y ninguna se parezca a la otra.",
  tela: "",
  colores: "tecnica",
  tallas: { unisex: "cyclone-u", mujer: "cyclone-m" },
  tecnicas: ["bordado", "vinilo", "dtf"],
  minimo: 50,
  usos: ["exterior", "impermeable", "casual"],
  destacado: true
},
{
  id: "aerofusion",
  nombre: "Chaqueta Aerofusion",
  categoria: "chaquetas",
  resumen: "Se ve bien sobre camisa y aguanta la jornada completa sin estorbar.",
  claves: ["Eliges el color de la tela, del forro y de las líneas del diseño", "Cuello alto que abriga sin necesidad de bufanda", "Corte que deja mover los brazos con total libertad", "Bolsillos por dentro y por fuera"],
  detalle: "La pensamos para equipos que pasan del escritorio a la calle varias veces al día. Tiene una silueta limpia, sin volumen, que no desentona en una reunión y al mismo tiempo aguanta el trajín. Las líneas diagonales del diseño se pueden pedir en otro color, y ese detalle basta para que la prenda se lea como propia de tu empresa.",
  tela: "",
  colores: "tecnica",
  tallas: { unisex: "aerofusion-u", mujer: "aerofusion-m" },
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
  claves: ["Eliges el color de la tela y del forro", "Tu logo grabado a láser: no se despega ni se decolora nunca", "Cuello alto sin solapas, se ve formal sin necesidad de corbata", "Bolsillos discretos y puños que se ajustan"],
  detalle: "Para equipos directivos, atención a clientes o eventos donde la primera impresión pesa. La tela tipo paño le da caída y cuerpo, muy lejos del aspecto deportivo de una chaqueta corriente. El grabado a láser deja la marca integrada en la tela en lugar de aplicada encima, y ese acabado es el que hace que la prenda se vea costosa.",
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
  claves: ["Eliges el color de la tela, de los cortes y de la cremallera", "Cuello alto que protege del frío de la mañana", "Cortes en otro color que rompen el bloque y estilizan", "Bolsillos laterales con cremallera, para que no se caiga nada"],
  detalle: "Es la prenda que más nos piden repetir cuando una empresa quiere que la dotación se use y no se guarde. Liviana, suave por dentro y con una caída que favorece a cualquier contextura. Funciona igual en planta que en oficina, y es la que más se ve puesta un sábado en la calle, que para nosotros es la mejor señal de que una prenda quedó bien.",
  tela: "",
  colores: "sporty",
  tallas: { unisex: "sporty-u", mujer: "sporty-m" },
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
  claves: ["Eliges el color exterior, el del forro y el de la cremallera", "Relleno térmico que abriga sin volverse rígida", "Capucha incorporada", "Puños y cintura elásticos que sellan el calor adentro"],
  detalle: "Cuando el frío no es un detalle sino una condición de trabajo, esta es la respuesta. El relleno mantiene el calor del cuerpo sin obligar a ponerse tres capas debajo, y los elásticos en puños y cintura evitan que el aire entre por los extremos, que es por donde realmente se pierde el calor. Pensada para turnos completos a la intemperie.",
  tela: "",
  colores: "tecnica",
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
  claves: ["Eliges el color del polar", "Polar denso que retiene el calor del cuerpo", "Bolsillos en pecho y a los lados, con cremallera", "El bordado se mantiene intacto lavada tras lavada"],
  detalle: "Es la prenda más versátil del catálogo: sola en una oficina con aire acondicionado, o como capa interior cuando arrecia el frío. Al ser delgada no estorba debajo de otra chaqueta, y al ser densa abriga más de lo que su apariencia sugiere. La recomendamos con bordado porque el polar recibe el hilo muy bien y el resultado dura años.",
  tela: "Polar de alta densidad",
  colores: "fleece",
  tallas: { unisex: "fleeceflex-u", mujer: "fleeceflex-m" },
  tecnicas: ["bordado"],
  minimo: 50,
  usos: ["frio", "casual"],
  destacado: false
},
{
  id: "jetline",
  nombre: "Chaqueta Jetline",
  categoria: "chaquetas",
  resumen: "Estilo urbano que la gente se pone el fin de semana. Juvenil sin perder formalidad.",
  claves: ["Eliges el color de la tela, del forro y de las franjas", "Forro térmico liviano: abriga sin sentirse pesada", "Tela que repele líquidos y se limpia fácil", "Cuello, puños y cintura en tejido elástico"],
  detalle: "La pedimos mucho para aniversarios de empresa y lanzamientos, porque tiene un aire de chaqueta de colección más que de dotación. Las franjas del cuello, los puños y la cintura se pueden pedir en los colores de tu marca, y ese detalle la vuelve inconfundible. Abriga bien sin el volumen de una chaqueta acolchada.",
  tela: "",
  colores: "tecnica",
  tallas: { unisex: "jetline-u", mujer: "jetline-m" },
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
  claves: ["Eliges el color exterior y el del forro", "Repele el agua y bloquea el viento", "Interior suave y térmico, no necesita otra capa debajo", "Cuello alto y cremalleras que aguantan el uso diario"],
  detalle: "Es la más técnica del catálogo y la que elegimos cuando el cliente nos dice que su equipo trabaja afuera llueva o truene. La tela tiene tres capas: repele el agua por fuera, corta el viento en el medio y abriga por dentro. Eso permite usar una sola prenda donde normalmente harían falta dos.",
  tela: "",
  colores: "softshell",
  tallas: { unisex: "softshell-u", mujer: "softshell-m" },
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
  resumen: "Abriga el torso y deja los brazos libres. Ideal para quien se mueve todo el día.",
  claves: ["Eliges el color exterior, el del forro y el de la cremallera", "Relleno ligero que abriga sin restar movilidad", "Cuello alto que protege el pecho y el cuello", "Bolsillos laterales con cremallera"],
  detalle: "El chaleco resuelve un problema concreto: quien carga, conduce o manipula herramienta todo el día necesita abrigo en el tronco pero libertad en los brazos. Este mantiene el calor donde importa y se puede usar sobre camisa, sobre buzo o bajo una chaqueta cuando el clima cambia.",
  tela: "",
  colores: "tecnica",
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
  claves: ["Eliges el color del polar", "Tres bolsillos con cremallera: dos a los lados y uno en el pecho", "Polar denso, suave al tacto", "Retiene el calor sin restar movilidad"],
  detalle: "Pensado para quien atiende público en espacios con aire acondicionado o para equipos en campo que necesitan abrigo ligero. Sobre una camisa se ve ordenado y profesional, nunca deportivo. El bolsillo vertical del pecho es el detalle práctico que más agradecen quienes cargan celular o carnet todo el día.",
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
  claves: ["Eliges el color de la prenda y el del estampado", "Área amplia para marcar en el pecho y en la espalda", "Cuello redondo clásico, sin cierres ni cordones", "13 colores disponibles"],
  detalle: "Cuando el objetivo es que la marca se vea de lejos, este es el formato. Sin capucha ni cremallera que interrumpan, el frente y la espalda quedan completamente libres para un diseño grande. Es también el más económico del catálogo, lo que lo vuelve la opción natural para entregas masivas en campañas y eventos.",
  tela: "50% algodón, 50% poliéster. Gramaje 210 gr.",
  colores: "buzos",
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
  claves: ["Eliges el color de la prenda, del cordón y del estampado", "Capucha con cordón ajustable", "Bolsillo delantero tipo canguro", "Se puede marcar en pecho, espalda y manga"],
  detalle: "Es la prenda que mejor mide si una dotación fue bien elegida: si el equipo se la lleva puesta fuera del trabajo, acertaste. Cómoda, abrigada y con ese aire relajado que la gente busca. El cordón de la capucha se puede pedir en el color de tu marca, un detalle pequeño que se nota mucho.",
  tela: "50% algodón, 50% poliéster. Gramaje 210 gr.",
  colores: "buzos",
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
  claves: ["Eliges el color de la prenda, del cordón y de la cremallera", "Cremallera de arriba abajo", "Capucha con cordón ajustable", "Bolsillos delanteros"],
  detalle: "La ventaja sobre el buzo cerrado es práctica: se pone y se quita sin despeinar ni tener que sacarse el carnet, y permite regular la temperatura durante el día abriendo o cerrando. Para turnos largos donde la temperatura cambia, es la opción más cómoda.",
  tela: "50% algodón, 50% poliéster. Gramaje 210 gr.",
  colores: "buzos",
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
  claves: ["Eliges el color de la prenda y el de la cremallera", "Cremallera de arriba abajo", "Cuello alto, sin capucha", "Bolsillos delanteros"],
  detalle: "Para empresas que quieren la comodidad de un buzo pero sin el aire juvenil de la capucha. Sobre una camisa se ve ordenado, y es una de las pocas prendas de este tipo que funciona en una reunión con cliente. Una buena opción intermedia cuando el código de vestimenta no es formal pero tampoco del todo libre.",
  tela: "50% algodón, 50% poliéster. Gramaje 210 gr.",
  colores: "buzos",
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
  claves: ["Eliges el color de la prenda y el del cierre", "Cierre corto en el cuello, se abre solo hasta el pecho", "Cuello alto que se puede llevar arriba o doblado", "Ideal para un bordado pequeño en el pecho"],
  detalle: "Esta prenda resuelve el caso del equipo que necesita algo abrigado pero que no puede verse deportivo. El cierre corto le da un aire pulido y el cuello alto se puede llevar de dos formas según la ocasión. Con un bordado discreto en el pecho pasa perfectamente por prenda ejecutiva.",
  tela: "50% algodón, 50% poliéster. Gramaje 210 gr.",
  colores: "buzos",
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
  claves: ["Eliges el color de la prenda y el del estampado", "100% algodón, fresca para clima cálido", "Cuello que no se estira con el uso", "Se puede marcar en pecho, espalda y manga"],
  detalle: "Es la prenda que más fabricamos y la que más exige consistencia: una camiseta que se deforma en el tercer lavado arruina la percepción de toda la dotación. Usamos algodón de buen gramaje y cuello reforzado precisamente por eso. Sirve para todo: eventos, uso diario, campañas, entregas masivas.",
  tela: "100% algodón. Gramaje 150 gr.",
  colores: "camisetas",
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
  claves: ["Diseño a todo color sobre la prenda completa", "Sin límite de tonos ni de degradados", "El diseño no se agrieta ni se despega: queda dentro de la tela", "Tela liviana, de secado rápido"],
  detalle: "Aquí la prenda deja de ser un fondo para el logo y se convierte en el diseño completo. La tinta se integra a la fibra, así que no hay una capa encima que se pueda cuartear o despegar con el uso. Es la opción para equipos deportivos, maratones corporativas y todo lo que necesite verse a distancia.",
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
  claves: ["Eliges el color de la prenda, del cuello y de los botones", "Cuello tejido que mantiene la forma", "Tela que respira, cómoda para todo el día", "El bordado en el pecho le da acabado ejecutivo"],
  detalle: "Es el punto exacto entre la camiseta y la camisa: suficientemente formal para atender a un cliente y suficientemente cómoda para ocho horas de pie. El cuello es lo que más se degrada con el uso en un polo barato, así que trabajamos uno tejido aparte que conserva la forma. Con bordado pequeño en el pecho se ve impecable.",
  tela: "50% algodón, 50% poliéster. Gramaje 210 gr.",
  colores: "camisetas",
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
  claves: ["Diseño a todo color sobre la prenda completa", "Sin límite de paleta ni de patrones", "Cuello clásico de polo", "Tela liviana, de secado rápido"],
  detalle: "Combina la formalidad del cuello de polo con la libertad total de la sublimación. La usan sobre todo equipos de torneos corporativos y marcas que patrocinan eventos, donde hace falta que el diseño se vea completo y a distancia sin renunciar a un corte pulcro.",
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
  claves: ["Eliges el color, el diseño y el tipo de marcación", "100% algodón, fresca todo el día", "Manga larga o corta, según el clima", "Corte estructurado que no se arruga fácil"],
  detalle: "Para equipos comerciales, recepción y dirección: es la prenda más formal del catálogo y la que mejor sostiene una jornada completa sin verse ajada. El algodón deja respirar la piel, algo que se agradece en clima cálido, y el corte estructurado mantiene la línea limpia aunque se pase el día sentado.",
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
  claves: ["Diseño a todo color, exclusivo para tu empresa", "Textura suave y brillo discreto", "Tres tamaños disponibles", "Se usa al cuello, en el pelo o en el bolso"],
  detalle: "Es el accesorio que transforma un uniforme correcto en uno memorable. Lo piden sobre todo hoteles, aerolíneas y empresas de servicio donde la presentación del personal es parte de la experiencia del cliente. Al ser un diseño exclusivo, nadie más va a tener esa pañoleta.",
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
  resumen: "Para eventos al aire libre y activaciones. Protege del sol y luce bien en fotos.",
  claves: ["Cinta personalizable con tu marca tejida", "Fibra natural trenzada a mano", "Protección solar real, no decorativa", "Acabado artesanal colombiano"],
  detalle: "Funciona en dos frentes: protege de verdad en jornadas al sol y se ve muy bien en el registro fotográfico del evento. La cinta se teje con el nombre o el símbolo de tu marca en repetición, un acabado bastante más fino que estampar un logo encima.",
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
  claves: ["Eliges el color y el tipo de marcación", "La tela repele el agua en vez de absorberla", "Forro de malla que deja transpirar la cabeza", "Cierre de velcro, se ajusta a cualquier talla"],
  detalle: "La diferencia con una gorra corriente se nota el primer día de lluvia: esta no se empapa ni pierde la forma del frente. El forro de malla evita que el calor se acumule, que es el motivo real por el que la gente se quita la gorra a media jornada.",
  tela: "100% poliéster",
  colores: "gorras",
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
  claves: ["Eliges el color y el tipo de marcación", "Malla que deja pasar el aire", "Cierre de botones ajustable", "Muy liviana, casi no se siente"],
  detalle: "Para tierra caliente es la que recomendamos sin dudar. La malla permite que el aire circule y evita el calor acumulado que hace insoportable una gorra cerrada. Liviana, cómoda y con buen espacio al frente para el bordado.",
  tela: "100% poliéster",
  colores: "gorras",
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
  claves: ["Eliges el color y el tipo de marcación", "Estructura interna que mantiene el frente erguido", "Botón superior forrado en la misma tela", "Cierre ajustable"],
  detalle: "Cuando el logo es el protagonista, esta es la gorra. El refuerzo interno mantiene el frente recto y sin arrugas, que es la condición para que un bordado grande o un aplique en relieve se vean como deben. En una gorra blanda, ese mismo logo se deforma.",
  tela: "100% poliéster",
  colores: "gorras",
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
  claves: ["Eliges el color y el tipo de marcación", "Cierre metálico resistente, no de plástico", "Estructura interna que mantiene la forma", "Acabado cuidado en cada costura"],
  detalle: "Es la que elegimos cuando la gorra no es dotación sino obsequio. El cierre metálico y los acabados marcan la diferencia frente a una gorra promocional corriente, y eso se percibe en la mano antes incluso de ponérsela. Para clientes, aliados y reconocimientos internos.",
  tela: "100% poliéster",
  colores: "gorras",
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
  claves: ["Etiqueta y forro interno personalizables", "Compartimento acolchado para el computador", "Organizador interno forrado para cables y documentos", "Acceso lateral rápido, sin abrir toda la maleta"],
  detalle: "Pensada para quien visita clientes: entra a una reunión y la maleta acompaña la imagen en vez de restarle. El acolchado protege el computador de golpes reales y el organizador interno evita el revoltijo de cables. El forro se puede personalizar, así la marca aparece también al abrirla.",
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
  claves: ["Amplio espacio para marcar en el frente", "Cierre de cordón, se ajusta jalando", "Bolsillo lateral con cremallera", "Se dobla y ocupa prácticamente nada"],
  detalle: "Cuando hay que entregar cientos de unidades sin disparar el presupuesto, esta es la respuesta. Es liviana, se pliega para el transporte y tiene una superficie frontal grande donde la marca se ve completa. Muy usada en congresos, ferias y jornadas deportivas.",
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
  claves: ["Eliges el color y el tipo de marcación", "Dos compartimentos amplios", "Tirantes acolchados, cómoda de cargar", "Bolsillo frontal con cremallera"],
  detalle: "Es el morral de uso general: sirve para el trabajo, para estudiar y para el fin de semana, y esa versatilidad hace que se use de verdad en vez de quedarse guardado. Los tirantes acolchados marcan la diferencia cuando se carga a diario.",
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
  claves: ["Eliges el color y el tipo de marcación", "Compartimento acolchado para el computador", "Espalda acolchada que reparte el peso", "Organizador interno para cables y accesorios"],
  detalle: "Para equipos que se mueven con el computador a cuestas todos los días. La espalda acolchada reparte el peso y evita el dolor de hombros al final de la jornada, algo que se agradece más de lo que parece. Acabado sobrio, apto para entrar a una oficina de cliente.",
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
  claves: ["Eliges el color y el tipo de marcación", "Correas de pecho y cintura que estabilizan la carga", "Varios bolsillos externos de acceso rápido", "Tela resistente al uso rudo"],
  detalle: "La de mayor capacidad del catálogo, pensada para trabajo de campo, visitas técnicas y jornadas fuera de la oficina. Las correas de pecho y cintura hacen que el peso no cuelgue de los hombros sino que se reparta en el cuerpo, que es lo que permite cargarla varias horas sin molestia.",
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
