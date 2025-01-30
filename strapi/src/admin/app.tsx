import type { StrapiApp } from '@strapi/strapi/admin';
import Logo from './extension/logo.png'

export default {
  config: {
    locales: [
      'fr',
    ],
    menu: {
      logo: Logo
    },
    auth: {
      logo: Logo
    },
    head: {
      favicon: Logo
    },
    theme: {
      colors: {
        primary100: '#ffedd5',
        primary200: '#fed7aa',
        primary300: '#fdba74',
        primary400: '#fb923c',
        primary500: '#f97316',
        primary600: '#ea580c',
        primary700: '#b45309',
        primary800: '#92400e',
      },
      light: {
        colors: {
          primary100: '#ffedd5',
          primary200: '#fed7aa',
          primary300: '#fdba74',
          primary400: '#fb923c',
          primary500: '#f97316',
          primary600: '#ea580c',
          primary700: '#b45309',
          primary800: '#92400e',
          buttonPrimary600: '#ea580c',
          buttonPrimary500: '#f97316'
        }
      }
    },
    tutorials: false,
  },
  bootstrap(app: StrapiApp) {
    console.log(app);
  },
};
