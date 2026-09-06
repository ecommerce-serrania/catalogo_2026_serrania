# Catálogo web Serranía

Catálogo de prendas corporativas. HTML, CSS y JavaScript puro: sin frameworks, sin instalaciones, sin paso de compilación.

**31 referencias · 7 técnicas de marca · funciona en celular y computador**

---

## Contenido del repositorio

```
index.html            Portada y rejilla del catálogo
producto.html         Plantilla única de ficha. Sirve para todos los productos.
css/estilos.css       Todo el diseño
js/
  config.js           WhatsApp y correo          ← lo tocas una vez
  datos-productos.js  El catálogo                ← lo tocas seguido
  datos-tallas.js     Las tablas de medidas      ← lo tocas a veces
  datos-colores.js    Las paletas de tela        ← lo tocas a veces
  datos-marcas.js     Las marcas cliente         ← lo tocas a veces
  comunes.js          Menú, buscador, bandeja, visor   ← no lo toques
  catalogo.js         Lógica de la portada             ← no lo toques
  producto.js         Lógica de la ficha               ← no lo toques
img/logo.png          Logo del menú
img/hero.jpg          Fondo del hero en computador
img/hero-movil.jpg    Fondo del hero en celular
img/productos/        Fotos de las prendas
img/marcas/           Logos de clientes
img/estampados/       Fotos de los tipos de estampado
img/empaque/          Fotos del cintillo y la bolsa de tela
robots.txt            Para buscadores
sitemap.xml           Mapa del sitio
README.md             Este manual
```

**Importante:** `index.html` busca el diseño y los datos en las carpetas `css` y `js`. Los tres tienen que estar juntos. Si subes solo el HTML, el sitio se ve roto.

---

## Puesta en marcha

### 1. Subir los archivos

Descomprime el ZIP, entra a la carpeta y selecciona **todo su contenido**: los dos HTML, las carpetas `css`, `js` e `img`, y los archivos sueltos. Arrástralos a GitHub → Commit changes.

Si al arrastrar no te sube las carpetas, hazlo por partes: primero los archivos sueltos, confirma; después arrastra la carpeta `css` sola, confirma; luego `js`; luego `img`. GitHub respeta la estructura cuando arrastras una carpeta entera.

Al terminar, en la raíz del repositorio debes ver: `index.html`, `producto.html`, `css`, `js`, `img`, `robots.txt`, `sitemap.xml` y `README.md`.

### 2. Publicar el sitio

Settings → Pages → Source: rama `main`, carpeta `/root`. Guarda.

En dos minutos el sitio queda en línea en `tuusuario.github.io/nombre-del-repo`.

### 3. Poner el número de WhatsApp

Abre `js/config.js` → lápiz de editar.

```js
whatsapp: "573160537301",
```

Formato internacional, sin `+` ni espacios. Todos los botones del sitio se actualizan solos.

### 4. Conectar el dominio

Lo recomendable es un subdominio como `catalogo.serrania.co`, que no interfiere con la tienda.

1. **En GitHub:** Settings → Pages → en "Custom domain" escribe `catalogo.serrania.co` y guarda. Esto crea solo un archivo `CNAME`; no lo subas a mano.
2. **En el panel DNS de tu dominio:** agrega un registro tipo **CNAME**, nombre `catalogo`, valor `tuusuario.github.io`
3. **Espera** entre 10 minutos y unas horas a que propague.
4. Vuelve a Settings → Pages y activa **"Enforce HTTPS"**. Esa casilla solo se habilita cuando el DNS ya resolvió.

---

## Cómo editar el catálogo

Cada cosa vive en su archivo:

| Archivo | Qué contiene |
|---|---|
| `js/config.js` | WhatsApp y correo |
| `js/datos-productos.js` | El catálogo |
| `js/datos-tallas.js` | Las tablas de medidas |
| `js/datos-colores.js` | Las paletas de tela |
| `js/datos-marcas.js` | Las marcas cliente |

El texto de "Por qué nos eligen" y las preguntas frecuentes están escritos directo en `index.html` y se editan como texto normal.

### Agregar un producto

En `js/datos-productos.js`, copia un bloque completo (desde `{` hasta `},`), pégalo al final antes del `];` y cambia los valores:

```js
{
  id: "chaqueta-nueva",            // sin tildes ni espacios. Define el nombre de las fotos.
  nombre: "Chaqueta Nueva",
  categoria: "chaquetas",          // chaquetas | chalecos | buzos | camisetas | camisas | accesorios | maletas
  resumen: "Una línea corta, máximo 20 palabras.",
  claves: ["Característica 1", "Característica 2", "Característica 3"],
  tela: "100% poliéster",          // deja "" para no mostrar esta fila
  colores: "full",                 // nombre de una paleta de datos-colores.js
  tallas: { hombre: "cyclone-h" }, // claves de datos-tallas.js, o {} si no lleva
  tecnicas: ["bordado", "vinilo"], // bordado | sublimacion | dtf | vinilo | serigrafia | laser
  minimo: 50,
  usos: ["formal", "casual"],      // formal | casual | deportivo | frio | impermeable | exterior
  destacado: false                 // true le pone la etiqueta "Más pedida"
},
```

Sube tres fotos a `img/productos/` con el nombre del `id`. Aparece solo en la rejilla, el buscador, los filtros, su categoría y las prendas relacionadas.

### Cambiar una medida de tallas

En `js/datos-tallas.js`. Busca la prenda, cambia el número. Van en el mismo orden que las columnas.

```js
"cyclone-h": {
  esquema: "chaqueta-capota",
  columnas: ["Ancho pecho", "Largo", "Largo manga"],
  filas: { "S":[55,71,77], "M":[57.5,74,80.5], "L":[59,75.5,81.5], "XL":[61,78,83] }
}
```

Si una prenda tiene tabla de hombre y de mujer, en la ficha aparecen como dos pestañas automáticamente.

### Cambiar un color

En `js/datos-colores.js`. Edita el código hexadecimal. El nombre sale al pasar el mouse sobre el círculo, y eso importa: un comprador pide "Azul rey", no "el azul de la fila 2".

```js
["Azul rey", "#0047BB"],
```

### Agregar una marca cliente

En `js/datos-marcas.js`. Agrega el nombre a la lista. Si no subes su logo, se muestra en texto.

---

## Las imágenes

### El logo y el fondo del hero

| Archivo | Formato | Detalle |
|---|---|---|
| `img/logo.png` | PNG transparente, alto 68 px | Va sobre fondo blanco, así que el logo debe ser oscuro |
| `img/hero.jpg` | 1920 × 1080, máx. 300 KB | La acción va a la **derecha**: el titular ocupa la izquierda |
| `img/hero-movil.jpg` | 900 × 1200 vertical, máx. 200 KB | Encuadre centrado |

El hero lleva una capa oscura encima para que el titular blanco se lea. En computador el degradado va en diagonal, más denso a la izquierda; en celular va de arriba abajo.

Si no subes las dos imágenes del hero, se ve con el color azul de la marca y no se rompe nada. El logo sí hace falta: sin él queda un hueco en el menú.

### Preparar las fotos

- **WebP**, 1200 × 1500 px vertical, **máximo 150 KB** cada una.
- Convierte en **squoosh.app** sin instalar nada.
- Nombre en minúscula, sin tildes ni espacios: el `id` del producto + guion + número.

```
cyclone-1.webp   cyclone-2.webp   cyclone-3.webp
```

Los servidores distinguen mayúsculas: `Cyclone-1.webp` no funciona.

Las tres tomas sugeridas: pareja completa de frente, detalle de la marcación, espalda o vista lateral.

### Subirlas

Entra a `img/productos` → Agregar archivo → Cargar archivos → arrastra las fotos → Commit. Hasta 100 archivos por tanda, 25 MB por archivo.

**Empieza por una sola prenda.** Sube las tres fotos de Cyclone, espera dos minutos y recarga con `Ctrl + Shift + R`. Si aparecen, sube el resto con confianza. Si no, el problema está en el nombre y lo descubriste con tres archivos en vez de noventa y nueve.

Mientras no subas una foto, la prenda muestra un recuadro que dice "Foto 1 pendiente". Nada se rompe.

### Los tipos de estampado

Van en `img/estampados/`, WebP de 800 × 600 px, máximo 120 KB. Son primeros planos del logo aplicado sobre la tela. El nombre sale del `id` de la lista `ESTAMPADOS` al final de `js/datos-productos.js`:

```
bordado.webp    sublimacion.webp    dtf.webp    serigrafia.webp
vinilo.webp     vinilo-gamuzado.webp    laser.webp
```

### El empaque

Van en `img/empaque/`, WebP de 900 × 600 px: `cintillo.webp` y `bolsa-de-tela.webp`.

Mientras no subas estas fotos, los bloques se muestran con el color de marca y el texto encima. No se rompe nada.

### Los logos de marcas

Van en `img/marcas/`, PNG con fondo transparente, alto 120 px, máximo 20 KB. El nombre sale de la marca en minúscula, sin tildes, con guiones:

| Marca | Archivo |
|---|---|
| Porsche | `porsche.png` |
| Banco AV Villas | `banco-av-villas.png` |
| Colcafé | `colcafe.png` |

Salen en escala de grises y recuperan el color al pasar el mouse, para que 48 logos no compitan con las fotos de las prendas.

---

## Qué hace el sitio

**Bandeja de cotización.** El visitante marca varias prendas mientras navega y las envía en un solo mensaje de WhatsApp con la lista numerada. Para quien arma un kit de dotación (chaqueta + polo + gorra), evita escribir tres veces.

**Carrusel en la tarjeta.** En computador, al pasar el mouse sobre una prenda del catálogo las tres fotos se van alternando solas. En celular se deslizan con el dedo. El clic sigue llevando a la ficha, y si el visitante desliza en vez de tocar, no se abre nada.

**Visor de imagen.** En la ficha, al hacer clic sobre la foto se abre a pantalla completa. Se navega con flechas, teclado o deslizando el dedo. Cierra con Esc, con la X o tocando fuera.

**Una URL por producto.** Cada prenda tiene su propia dirección, que Google indexa por separado:

```
tusitio.com/producto.html?id=cyclone
tusitio.com/index.html?categoria=chaquetas
```

Cuando agregues productos, actualiza `sitemap.xml` copiando una línea `<url>` y cambiando el id.

**Buscador, filtros por categoría y por uso, guías de talla con dibujo de medición, cinta de marcas cliente.** Todo funciona en celular.

---

## Pendientes de producción

Estos datos salieron del PDF técnico de medidas y conviene que producción los valide:

| Prenda | Qué decía el documento | Qué quedó |
|---|---|---|
| Camiseta polo hombre | S: pecho 69, largo 50 | Columnas invertidas: pecho 50, largo 69 |
| Camiseta polo mujer | S: pecho 61, M: 45 | S: 43, siguiendo la progresión |
| Softshell hombre | S: manga 67,5 entre 59,5 y 62,5 | 60,5 cm |
| Softshell mujer | XL largo "65M" | 65 cm |
| Buzo abierto sin capota | Dos tablas rotuladas "hombre" | La segunda quedó como mujer |
| Jetline mujer | Idéntica a la de hombre | Se dejó igual, con aviso en la ficha |
| Fleece Flex mujer | Idéntica a la de hombre | Se dejó igual, con aviso en la ficha |
| Cyclone mujer | Fila L vacía, sin XL | Solo XS, S y M, con aviso |
| Chaleco Fleece Flex | Solo talla Small | Solo Small, con aviso |

**Sin definir:** el criterio de "largo de manga" cambia entre prendas. En Cyclone hombre va de 77 a 83 cm (medida desde el cuello) y en Aerofusion hombre de 60 a 64 cm (desde la axila), pero ambas usan la misma letra C y el mismo dibujo. Conviene unificarlo.

**Sin tabla de tallas:** Camiseta cuello redondo, Camiseta sublimada y Polo sublimada. Su ficha invita a escribir al asesor. Cuando tengas las medidas se agregan igual que cualquier otra.

**Referencias retiradas del catálogo:** Eclipse y Urban Legend. Si algún día vuelven, se agregan como cualquier producto nuevo siguiendo las instrucciones de arriba.

---

## Sobre el buscador de Google

Cada producto tiene su propia URL con título, descripción, imagen de compartir y datos estructurados de tipo Product, todo generado automáticamente desde `datos-productos.js`.

Las URLs llevan parámetro (`?id=cyclone`). Google las indexa, aunque posicionan algo menos que rutas limpias tipo `/chaquetas/cyclone/`. Si el tráfico de buscadores se vuelve prioritario, se puede agregar un generador que convierta los mismos datos en páginas estáticas, sin cambiar nada de cómo administras el catálogo.
