import { TInlineStyles } from '@src/types/styles.types';
import colors from '../../../../styles/themes/main/mainTheme.module.scss';

const bottomSheetContainerSx: TInlineStyles = () => ({
  height: '55vh',
});

const bottomSheetHeaderSx: TInlineStyles = () => ({
  mb: 3,
  alignItems: 'flex-start',
});

const bottomSheetBodySx: TInlineStyles = () => ({
  alignItems: 'center',
});

const linkSx: TInlineStyles = () => ({
  color: colors.secondary400,
  cursor: 'pointer',
  width: '35%',
});

const otpSectionStyles = {
  bottomSheetContainerSx,
  bottomSheetHeaderSx,
  bottomSheetBodySx,
  linkSx,
};

export default otpSectionStyles;
