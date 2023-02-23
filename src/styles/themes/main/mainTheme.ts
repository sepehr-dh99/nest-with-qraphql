import { createTheme } from '@mui/material/styles';

import colors from './mainTheme.module.scss';

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

    gray: {
      main: colors.gray500,
      50: colors.gray50,
      100: colors.gray100,
      200: colors.gray200,
      300: colors.gray300,
      400: colors.gray400,
      500: colors.gray500,
      600: colors.gray600,
      700: colors.gray700,
      800: colors.gray800,
      900: colors.gray900,
    },

    text: {
      primary: colors.gray700,
      secondary: colors.gray700,
    },
  },
  typography: {
    fontFamily: 'IRANYekanX',
    h3: {
      fontSize: '20px',
      fontWeight: 800,
      color: colors.gray700,
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
      color: colors.gray700,
    },
    pSmRegular: {
      fontSize: '12px',
      fontWeight: 400,
      color: colors.gray700,
    },
    label: {
      fontSize: '14px',
      fontWeight: 400,
      color: colors.gray700,
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
