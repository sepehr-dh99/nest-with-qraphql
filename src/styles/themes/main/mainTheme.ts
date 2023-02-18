import { createTheme } from '@mui/material/styles';

import colors from './mainTheme.module.scss';
//import { ICustomTypo } from "./mainTheme.types";

const mainTheme = createTheme({
  direction: 'rtl',
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

    grey: {
      50: colors.grey50,
      100: colors.grey100,
      200: colors.grey200,
      300: colors.grey300,
      400: colors.grey400,
      500: colors.grey500,
      600: colors.grey600,
      700: colors.grey700,
      800: colors.grey800,
      900: colors.grey900,
    },

    text: {
      primary: colors.grey700,
      secondary: colors.grey700,
    },
  },
  typography: {
    fontFamily: 'IRANYekanX',
    h3: {
      fontSize: '20px',
      fontWeight: 800,
      color: colors.grey700,
    },
    subtitle1: {
      fontSize: '11px',
      fontWeight: 300,
      component: 'span',
      // TODO: change
      color: colors.whiteText,
    },
    subtitle2: {
      fontSize: '13px',
      fontWeight: 300,
      component: 'span',
      // TODO: change
      color: colors.whiteText,
    },
    pLgLight: {
      fontSize: '16px',
      fontWeight: 300,
      color: colors.grey700,
    },
    pSmRegular: {
      fontSize: '12px',
      fontWeight: 400,
      color: colors.grey700,
    },
    label: {
      fontSize: '14px',
      fontWeight: 400,
      color: colors.grey700,
    },
  },
  components: {
    MuiButton: {
      defaultProps: {
        size: 'xLarge',
      },
      variants: [
        {
          props: { size: 'xLarge' },
          style: {
            padding: '15.75px 32px',
          },
        },
      ],
    },
  },
});

export default mainTheme;
