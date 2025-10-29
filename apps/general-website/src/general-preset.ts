import { definePreset } from '@primeng/themes';
import Aura from '@primeng/themes/aura';

const GeneralWebsitePreset = definePreset(Aura, {
  //Your customizations, see the following sections for examples
  darkModeSelector: undefined,
  colorScheme: 'light',
  semantic: {
    primary: {
      50: '#d24d27',
      100: '#d24d27',
      200: '#d24d27',
      300: '#d24d27',
      400: '#d24d27',
      500: '#d24d27',
      600: '#d24d27',
      700: '#d24d27',
      800: '#d24d27',
      900: '#d24d27',
      950: '#d24d27',
    },
    focusRing: {
      width: '2px',
      style: 'dashed',
      color: '{primary.color}',
      offset: '1px',
    },
  },
});

export default GeneralWebsitePreset;
