// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  tutorialSidebar: [
    // 1. Proyecto 2
    {
      type: 'doc',
      id: 'index', // Nombre de tu archivo principal/portada en docs/ (ej. 'index' o 'intro')
      label: 'Proyecto 2 - Comunicación Asertiva',
    },
    // 2. Recolección de Información
    {
      type: 'category',
      label: 'Recolección de Información',
      items: [
        '01-recoleccion-informacion/flujo-negocio',
        '01-recoleccion-informacion/preguntas',
      ],
    },
    // 3. Análisis
    {
      type: 'category',
      label: 'Análisis',
      items: [
        '02-analisis/junta-directiva',
      ],
    },
    // 4. Propuesta
    {
      type: 'category',
      label: 'Propuesta',
      items: [
        '03-propuesta/flujo-solucion',
        '03-propuesta/acuerdos-tradeoffs',
        '03-propuesta/elevator-pitch',
      ],
    },
    // 5. Tabla de Participación
    {
      type: 'doc',
      id: '02-analisis/participacion',
      label: 'Tabla de Participación',
    },
  ],
};

export default sidebars;
