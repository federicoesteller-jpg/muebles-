# Mueblista — Roadmap

## Páginas principales

| Estado | Página | Archivo | Notas |
|--------|--------|---------|-------|
| ✅ | Inicio / catálogo | `public/index.html` | Filtros de categoría, condición, precio y ordenación funcionales |
| ✅ | Detalle de producto | `public/producto.html` | Galería, lightbox, ofertas, entrega, tienda — carga dinámica por `?id=` |
| ✅ | Chat / mensajes | `public/chat.html` | Typing indicator, ticks, oferta rápida, sugerencias |
| ✅ | Notificaciones | `public/notificaciones.html` | Filtros, badge dinámico, oferta recibida |
| ✅ | Panel del vendedor | `public/panel.html` | KPI, vistas SPA, botones conectados, escape handler |
| ✅ | Perfil de usuario | `public/perfil.html` | Tabs, favoritos desde localStorage, ajustes, referidos |
| ✅ | Publicar anuncio | `public/publicar.html` | 3 pasos, foto upload, borrador auto-guardado, preview en vivo |
| ✅ | Tienda (perfil público) | `public/tienda.html` | Catálogo con filtros, valoraciones, horario dinámico, contacto |
| ✅ | Favoritos | `public/favoritos.html` | Grid de cards, estado vacío, quitar/limpiar, badge nav |
| ✅ | Login / registro | `public/login.html` | Login + registro, fortaleza contraseña, social login, validación inline |
| ✅ | Login tiendas | `public/panel-login.html` | Acceso al panel, demo login, testimonial, responsive |

## Páginas de contenido / legales

| Estado | Página | Archivo | Notas |
|--------|--------|---------|-------|
| ✅ | Cómo funciona | `public/como-funciona.html` | Hero, tabs comprador/vendedor, 4 pasos, protección de compra, FAQ, CTA |
| ✅ | Quiénes somos | `public/quienes-somos.html` | Historia, valores, equipo, compromisos, stats, animaciones reveal |
| ✅ | Sostenibilidad | `public/sostenibilidad.html` | Hero, contador de impacto, problema, comparativa, compromisos, CTA verde |
| ✅ | Ayuda / FAQ | `public/ayuda.html` | Búsqueda, categorías, FAQ filtrable, formulario de contacto, artículos populares |
| ✅ | Guía de envíos | `public/guia-envios.html` | Empaquetar, etiqueta, transportistas, seguro, seguimiento, recogida en mano, incidencias |
| ✅ | Guía de estado | `public/guia-estado.html` | 5 estados del artículo con criterios, ejemplos visuales, errores comunes |
| ✅ | Guía de fotos | `public/guia-fotos.html` | 7 secciones: preparación, luz, encuadre, shots, defectos, edición, checklist interactivo |
| ✅ | Guía de precio | `public/guia-precio.html` | Metodología de precio, rangos por categoría, errores frecuentes, calculadora orientativa |
| ✅ | Qué vender | `public/que-vender.html` | Categorías permitidas, prohibidos, estado mínimo, consecuencias, CTA |
| ✅ | Niveles de vendedor | `public/niveles.html` | 5 niveles (Nuevo→Top), requisitos, perks, cálculo, tabla resumen, FAQ |
| ✅ | Venta en lotes | `public/lotes.html` | Hero, ejemplo con desglose de precios, pasos, comparativa, tips, CTA |
| ✅ | Detalle de lote | `public/lote.html` | Layout producto-panel, items del lote en grid, vendedor, protección de compra |
| ✅ | Recordatorios | `public/recordatorios.html` | Timeline 7/14/30/60 días, email preview, toggles de configuración, FAQ |
| ✅ | Referidos | `public/referidos.html` | Código de referido, stats, cómo funciona, recompensas, historial, FAQ |
| ✅ | Términos y condiciones | `public/terminos.html` | 12 secciones, índice lateral clickeable, placeholders legales |
| ✅ | Privacidad | `public/privacidad.html` | 10 secciones, grid de derechos del usuario (6 derechos) |
| ✅ | Cookies | `public/cookies.html` | Tabla de cookies, toggles funcionales por categoría, instrucciones por navegador |
| ✅ | Devoluciones | `public/devoluciones.html` | 9 secciones, tablas de plazos, proceso step-by-step, cajas informativas |

## Funcionalidades transversales

| Estado | Funcionalidad | Notas |
|--------|---------------|-------|
| ✅ | Favoritos con localStorage | `favoritos.js` — badge en nav, toggle en cards |
| ✅ | Filtros de categoría en catálogo | Sofás, sillas, camas, lámparas… |
| ✅ | Filtros de condición y precio | Segunda mano, nuevo, rangos de precio |
| ✅ | Ordenación por precio | Menor a mayor / mayor a menor |
| ✅ | Routing de productos por `?id=` | Cada producto carga sus propios datos |
| ✅ | Relacionados dinámicos | Se generan desde la BD JS, excluyen el producto actual |
| ✅ | Sistema de ofertas (demo) | Estados: enviada, aceptada, rechazada, contraoferta |
| ✅ | Selector de entrega con desglose | Recogida en tienda / envío a domicilio |
| ✅ | Lightbox con teclado y swipe | Flechas, Escape, touch |
| ✅ | Cookie banner | `cookie-banner.js` |
| ✅ | Búsqueda funcional | Nav search + hero search filtran el catálogo en tiempo real; se sincronizan con `state.query` |
| ✅ | Filtro por ciudad | Ciudad extraída de `.card-store`, select de filtros + hero select + city-cards conectados |
| ✅ | Responsive / móvil | Hamburguesa en nav, menú desplegable fixed, grids de 1–2 col en móvil, footer adaptado |
| ⬜ | Autenticación real | Supabase Auth — email/password + OAuth (Google) |
| ⬜ | Base de datos real | Supabase — tablas: productos, usuarios, pedidos, favoritos, mensajes |
| ⬜ | API routes Next.js | Endpoints en `app/api/` — publicar, comprar, ofertas, mensajes |
| ✅ | Flujo de compra (estático) | `checkout.html` + `pedido-confirmado.html` — entrega, pago demo, resumen, confirmación animada |
| ⬜ | Sistema de pagos real | Stripe — checkout seguro, retención hasta confirmar entrega |
| ⬜ | Subida de imágenes | Supabase Storage — sustituir URLs Unsplash por fotos reales |
| ⬜ | Deploy en Vercel | CI/CD desde `main`, variables de entorno, dominio |
| ⬜ | SEO y meta tags | Open Graph por producto, `<title>` dinámico, sitemap |
