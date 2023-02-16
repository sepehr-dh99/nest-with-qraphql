import { TypographyOptions } from "@mui/material/styles/createTypography";
declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    PlgLight: true;
  }
}

export interface ICustomTypo extends TypographyOptions {
  PlgLight: React.CSSProperties;
}
