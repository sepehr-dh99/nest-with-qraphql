import { createTheme } from "@mui/material/styles";

import colors from "./mainTheme.module.scss";

const mainTheme = createTheme({
  palette: {
    primary: {
      main: colors.primary500,
      50: colors.primary50,
      100: colors.primary100,
      200: colors.primary200,
      300: colors.primary300,
      400: colors.primary400,
      500: colors.primary500,
      600: colors.primary600,
      700: colors.primary700,
      800: colors.primary800,
      900: colors.primary900,
    },
    secondary: {
      main: colors.secondary500,
      50: colors.secondary50,
      100: colors.secondary100,
      200: colors.secondary200,
      300: colors.secondary300,
      400: colors.secondary400,
      500: colors.secondary500,
      600: colors.secondary600,
      700: colors.secondary700,
      800: colors.secondary800,
      900: colors.secondary900,
    },
  },
  typography: {
    fontFamily: "IRANYekanX",
  },
});

export default mainTheme;
