# Curso de JavaScript - Sitio Web Estático

Sitio web educativo para aprender JavaScript desde conceptos básicos hasta avanzados.

## 🌐 Sitio en Vivo

Este sitio está desplegado en GitHub Pages y es accesible en:
**https://luisbadolato.github.io/curso-javascript/**

## 🚀 Características

- ✅ **Sitio estático**: HTML, CSS y JavaScript vanilla (sin frameworks ni bundlers)
- 🌓 **Dark Mode / Light Mode**: Con persistencia en localStorage
- 📱 **Responsive Design**: Optimizado para móvil, tablet y desktop
- 🎨 **Diseño atractivo**: Con gradientes suaves y formas SVG animadas
- 🧭 **Navegación consistente**: Menú fijo en todas las páginas
- 📚 **Contenido estructurado**: Temarios y ejercicios organizados por módulos

## 📁 Estructura del Proyecto

```
ClasesJS/
├── index.html                 # Página principal con hero section
├── styles/                    # Estilos CSS
│   ├── variables.css         # Variables CSS y temas (dark/light)
│   ├── reset.css             # Reset y estilos base
│   ├── components.css        # Componentes reutilizables
│   ├── hero.css              # Estilos de la hero section
│   └── responsive.css        # Media queries y responsive
├── scripts/                   # JavaScript
│   ├── navigation.js         # Componente de navegación
│   └── theme.js              # Sistema de temas (dark/light)
├── pages/                     # Páginas HTML
│   ├── temario-global.html   # Hub principal del curso
│   ├── temario-arrays.html   # Índice del módulo de Arrays
│   └── arrays/               # Contenido del módulo de Arrays
│       ├── 01-introduccion.html
│       ├── 02-operaciones-basicas.html
│       ├── 03-metodos-busqueda.html
│       ├── 04-ordenacion-manipulacion.html
│       ├── 05-iteracion-bucles.html
│       ├── 06-metodos-transformacion.html
│       ├── 07-tecnicas-avanzadas.html
│       └── 08-buenas-practicas.html
├── assets/                    # Recursos (imágenes, iconos, etc.)
├── TemarioGlobal.md          # Documentación del temario global
├── TemarioArrays.md          # Documentación del módulo de Arrays
└── DesarrolloArrays.md       # Contenido detallado de Arrays

```

## 🎨 Sistema de Estilos

### Variables CSS
El proyecto utiliza CSS Custom Properties para gestionar colores, espaciados y temas:

- **Temas**: Light y Dark mode
- **Colores**: Sistema de colores consistente con variables
- **Espaciado**: Sistema de spacing (xs, sm, md, lg, xl, 2xl)
- **Tipografía**: Escalas de tamaño responsivas

### Componentes
- **Nav**: Navegación fija con menú responsive
- **Cards**: Tarjetas para contenido
- **Buttons**: Botones primary y outline
- **Breadcrumb**: Migas de pan para navegación
- **Content sections**: Secciones de contenido estilizadas

## 🔧 Funcionalidades JavaScript

### Navigation (navigation.js)
- Crea la navegación dinámicamente en todas las páginas
- Menú hamburguesa responsive para móviles
- Cierra el menú al hacer clic en un enlace

### Theme Manager (theme.js)
- Toggle entre light y dark mode
- Persiste la preferencia en localStorage
- Detecta preferencias del sistema operativo
- Actualiza iconos del toggle automáticamente

## 📄 Páginas del Sitio

### 1. Home (index.html)
- Hero section con gradiente
- Formas SVG animadas en el fondo
- Botón de acceso al temario global

### 2. Temario Global (temario-global.html)
- Hub principal del curso
- Cards con enlaces a cada módulo
- Secciones: Teoría y Práctica

### 3. Temario de Arrays (temario-arrays.html)
- Índice del módulo completo
- 8 secciones principales
- Enlaces a páginas de contenido detallado

### 4. Páginas de Contenido (arrays/01-08)
- Contenido teórico detallado
- Ejemplos de código
- Ejercicios prácticos
- Navegación prev/next entre páginas

## 🚀 Cómo Usar

### Desarrollo Local

1. **Abrir el proyecto**:
   - Simplemente abre `index.html` en tu navegador
   - O usa Live Server en VS Code

2. **Estructura de URLs**:
   ```
   /index.html                           → Home
   /pages/temario-global.html           → Temario Global
   /pages/temario-arrays.html           → Temario de Arrays
   /pages/arrays/01-introduccion.html   → Contenido específico
   ```

### Servidor Local (Opcional)

Si prefieres usar un servidor local:

```bash
# Python 3
python -m http.server 8000

# Node.js (con http-server)
npx http-server

# PHP
php -S localhost:8000
```

Luego accede a: `http://localhost:8000`

## 🌐 Despliegue en GitHub Pages

Este proyecto está configurado para desplegarse automáticamente en GitHub Pages mediante GitHub Actions.

### Configuración Automática

El sitio se despliega automáticamente cuando:
- Se hace push a la rama `main`
- Se puede disparar manualmente desde la pestaña "Actions" en GitHub

### Configuración Manual (Solo necesaria una vez)

Para habilitar GitHub Pages en tu repositorio:

1. Ve a **Settings** → **Pages** en tu repositorio de GitHub
2. En **Source**, selecciona **GitHub Actions**
3. El workflow `.github/workflows/deploy.yml` se encargará del resto

### URL del Sitio

Una vez desplegado, tu sitio estará disponible en:
```
https://<tu-usuario>.github.io/curso-javascript/
```

## 🎯 Módulos Disponibles

### ✅ Arrays (Completo)
- 8 secciones con contenido detallado
- Desde conceptos básicos hasta técnicas avanzadas
- Ejercicios prácticos en cada sección

### 🔜 Próximos Módulos
- Strings
- Objetos
- Condicionales
- Bucles
- Funciones
- Asincronía

## 📱 Responsive Breakpoints

- **Mobile**: < 480px
- **Tablet**: 481px - 768px
- **Desktop**: > 769px
- **Large Desktop**: > 1400px

## 🎨 Paleta de Colores

### Light Mode
- Background Primary: `#f5f6f8` (gris muy claro, no blanco puro)
- Background Secondary: `#e8eaed`
- Cards: `#ffffff` (blanco, destacan sobre el fondo)
- Content Sections: `#fafbfc` (gris suave con borde accent izquierdo)
- Text Primary: `#1a202c` (casi negro para mejor contraste)
- Text Secondary: `#4a5568`
- Accent: `#667eea`
- Gradient: `#667eea → #764ba2`

### Dark Mode
- Background Primary: `#0f1419` (muy oscuro para mayor contraste)
- Background Secondary: `#1a202c`
- Cards: `#1a202c` (destacan sobre el fondo)
- Content Sections: `#161b22` (tono diferente con borde accent izquierdo)
- Text Primary: `#f7fafc`
- Text Secondary: `#cbd5e0`
- Accent: `#9f7aea`
- Gradient: `#4c51bf → #6b46c1`

### Diferenciación Visual
- **Cards**: Fondo destacado, sombra pronunciada, hover interactivo con elevación
- **Content Sections**: Fondo sutil, borde izquierdo accent de 4px, sin hover

## 🔮 Mejoras Futuras

- [ ] Añadir más módulos (Strings, Objetos, etc.)
- [ ] Sistema de búsqueda de contenido
- [ ] Progreso de aprendizaje con localStorage
- [ ] Playground interactivo para código
- [ ] Más ejercicios con soluciones
- [ ] Sistema de comentarios/notas

## 📝 Notas

- **Sin dependencias**: Proyecto 100% vanilla
- **SEO friendly**: HTML semántico
- **Accesibilidad**: ARIA labels y navegación por teclado
- **Performance**: CSS y JS optimizados

## 👨‍💻 Autor

Curso de JavaScript - Primera Iteración

---

¡Disfruta aprendiendo JavaScript! 🚀
