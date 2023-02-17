declare module "@mui/material/styles" {
  interface TypographyVariants {
    pLgLight: React.CSSProperties;
    pSmRegular: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    pLgLight?: React.CSSProperties;
    pSmRegular?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    pLgLight: true;
    pSmRegular: true;
  }
}

// TODO: please check this file
export {};
