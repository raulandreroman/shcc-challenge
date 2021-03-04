import { extendTheme } from '@chakra-ui/react';

const fonts = { body: `"Heroic Condensed",-apple-system,Arial,sans-serif` };

const global = {
  html: {
    minWidth: '360px',
    scrollBehavior: 'smooth',
    fontSize: { base: '16px', md: '18px', lg: '20px' },
  },
  '#__next': { display: 'flex', flexDirection: 'column', minHeight: '100vh' },
};

const colors = { brand: '#FF1A3E' };

const CustomTheme = extendTheme({ fonts, colors, styles: { global } });

export default CustomTheme;
