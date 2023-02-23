import { alpha, SxProps, Theme } from '@mui/material';
import { TInlineStyles } from '@src/types/styles.type';

const shadowSx: TInlineStyles = () => ({
  boxShadow: '0px -6px 31px 0px #00000036',
});

const containerSx: TInlineStyles = () => ({
  position: 'relative',
  height: '100%',
  justifyContent: 'flex-end',
});

const parentSx: TInlineStyles<SxProps<Theme>> = (theme, sx) => ({
  zIndex: theme?.zIndex.appBar,
  position: 'absolute',
  inset: 0,
  justifyContent: 'flex-end',
  ...sx,
});

const contentSx: TInlineStyles<SxProps<Theme>> = (theme, sxContent) => ({
  bgcolor: theme?.palette.background.paper,
  borderRadius: '2rem 2rem 0 0',
  position: 'relative',
  transition: '0.5s',
  maxHeight: '100vh',
  zIndex: 5,
  py: 4,
  px: 3,
  ...sxContent,
});

const bgSx: TInlineStyles<boolean> = (theme, transparent) => ({
  position: 'absolute',
  inset: 0,
  bgcolor: alpha(theme?.palette.common.black!, transparent ? 0 : 0.4),
});

const bottomSheetStyles = {
  containerSx,
  shadowSx,
  parentSx,
  bgSx,
  contentSx,
};

export default bottomSheetStyles;
