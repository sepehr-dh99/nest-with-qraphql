interface IColorShades {
  main: string;
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

declare module '@mui/material/styles' {
  interface TypographyVariants {
    pLgLight: React.CSSProperties;
    pSmRegular: React.CSSProperties;
    label: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    pLgLight?: React.CSSProperties;
    pSmRegular?: React.CSSProperties;
    label?: React.CSSProperties;
  }

  interface Palette {
    gray: IColorShades;
  }
  interface PaletteOptions {
    gray: IColorShades;
  }

  // allow typescript to use color shades in primary and secondary colors
  interface PaletteColor extends IColorShades {}
}

// Update the Typography's variant prop options
declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    pLgLight: true;
    pSmRegular: true;
    label: true;
  }
}

declare module '@mui/material/Button' {
  interface ButtonPropsSizeOverrides {
    xLarge: true;
  }
}

// TODO: please check this file
export {};
