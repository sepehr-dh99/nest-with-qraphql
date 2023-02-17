declare module "@mui/material/styles" {
  interface TypographyVariants {
    PlgLight: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    PlgLight?: React.CSSProperties;
  }
}

// Update the Typography's variant prop options
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    PlgLight: true;
  }
}

export {};
