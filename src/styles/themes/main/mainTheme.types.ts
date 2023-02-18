declare module "@mui/material/styles" {
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
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    pLgLight: true;
    pSmRegular: true;
    label: true;
  }
}

declare module "@mui/material/Button" {
  interface ButtonPropsSizeOverrides {
    xLarge: true;
  }
}

// TODO: please check this file
export {};
