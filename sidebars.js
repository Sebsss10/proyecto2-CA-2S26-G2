// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  tutorialSidebar: [
    // 1. Proyecto 2 (Página principal)
    {
      type: 'doc',
      id: 'intro',
      label: 'Proyecto 2 - Comunicación Asertiva',
    },
    // 2. Recolección de Información
    {
      type: 'category',
      label: 'Recolección de Información',
      items: [
        'recoleccion-informacion/justificacion',
        'recoleccion-informacion/preguntas',
        'recoleccion-informacion/evidencias',
      ],
    },
    // 3. Análisis
    {
      type: 'category',
      label: 'Análisis',
      items: [
        'analisis/flujo-negocio',
        'analisis/requisitos',
      ],
    },
    // 4. Propuesta
    {
      type: 'category',
      label: 'Propuesta',
      items: [
        'propuesta/flujo-solucion',
        'propuesta/acuerdos-tradeoffs',
        'propuesta/junta-directiva',
        'propuesta/elevator-pitch',
        'propuesta/documento-postmortem',
      ],
    },
    // 5. Tabla de Participación
    {
      type: 'doc',
      id: 'tabla-participacion/participacion',
      label: 'Tabla de Participación',
    },
  ],
};

export default sidebars;
