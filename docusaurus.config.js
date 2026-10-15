import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Proyecto 2 - Comunicación Asertiva',
  tagline: 'Negociación Técnica en Equipos de Desarrollo de Software',
  favicon: 'img/favicon.ico',

  url: 'https://Sebsss10.github.io',
  baseUrl: '/proyecto2-CA-2S26-G2/',

  organizationName: 'Sebsss10',
  projectName: 'proyecto2-CA-2S26-G2',

  onBrokenLinks: 'warn',

  // Configuración de Markdown e integración con Mermaid
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  // Activación del tema de Mermaid para Docusaurus
  themes: ['@docusaurus/theme-mermaid'],

  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          routeBasePath: '/',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Proyecto 2 - Comunicación Asertiva',
        items: [],
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
