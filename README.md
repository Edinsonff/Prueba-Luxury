# Recovery Rehab Clone

Este proyecto es una prueba técnica que consiste en replicar algunas páginas del sitio web [Recovery Rehab](https://recoveryrehab.co/). Está desarrollado con **Next.js**, **Tailwind CSS**, y **React.js**, siguiendo buenas prácticas de desarrollo, optimización y diseño responsive.

---

## 🚀 Funcionalidades

1. **Páginas replicadas**:
   - Landing Page (sin la sección del mapa)
   - Luxury Rehabs
   - Chateau Recovery (accedida desde una de las tarjetas en Luxury Rehabs)

2. **Metadatos y SEO**:
   - Implementación de etiquetas de metadatos dinámicos.
   - Uso de JSON-LD para SEO.

3. **Diseño responsive**:
   - Mobile-first design para todas las vistas.

4. **Datos de prueba hardcodeados**:
   - Datos de prueba definidos en el archivo `utils/data.js` para simular la carga de información dinámica.

---

## 🛠️ Tecnologías utilizadas

- [Next.js](https://nextjs.org/) - Framework React para aplicaciones web modernas.
- [React.js](https://reactjs.org/) - Biblioteca JavaScript para construir interfaces de usuario.
- [Tailwind CSS](https://tailwindcss.com/) - Framework de CSS para diseño rápido y responsivo.
- [Lucide Icons](https://lucide.dev/) - Iconos SVG modernos.

---

## 📂 Estructura del proyecto

```
/app
  page.jsx
  RootLayout.jsx
  /components
    Header.jsx
    Footer.jsx
    Card.jsx
    GridCards,jsx
    PaginatedList.jsx
    PageHeader.jsx
    Title.jsx
    TopBar.jsx
  /coming-soon
    page.jsx  
  /luxury-rehab-centers
    [id]
      page.jsx
    page.jsx
  layout.js
  /styles
    globals.css
/utils
  metaData.js
  data.js
```

---

## 🧑‍💻 Instalación y uso

Sigue los pasos a continuación para ejecutar el proyecto localmente:

### 1. Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/recovery-rehab-clone.git
cd recovery-rehab-clone
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Configurar variables de entorno (opcional)
Crea un archivo `.env.local` en la raíz del proyecto si necesitas configurar una URL base u otras variables de entorno:
```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Iniciar el servidor de desarrollo
```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

---

## 📊 Datos de prueba

Los datos de prueba están definidos en el archivo `utils/data.js` y son utilizados para simular la carga dinámica de las páginas.

### Ejemplo de datos:
```javascript
{
  id: "0",
  title: "Ascendant Detox – NYC",
  images: [
    "https://picsum.photos/400",
    "https://picsum.photos/401",
  ],
  date: "December 15, 2021",
  location: "New York City",
  generalInfo: [
    { services: "Detox, Residential, Outpatient, Sober Living" },
    { highlights: ["Individualized treatment plans", "Holistic therapies"] },
  ],
  about: "Luxury rehab center located in NYC...",
}
```

---

## 🌟 Próximos pasos

- Implementar funcionalidad de mapa en las páginas.
- Integrar con una base de datos real o API para datos dinámicos.
- Mejorar aún más el SEO y la accesibilidad.

---

## 📝 Notas

Este proyecto es solo una **prueba técnica** y no tiene la intención de ser un producto terminado. Todos los datos y contenidos son ficticios y utilizados únicamente con fines de evaluación.

---

## 📧 Contacto
Si tienes alguna pregunta o sugerencia, no dudes en contactarme en [edin.bol123@gmail.com](mailto:edin.bol123@gmail.com).

