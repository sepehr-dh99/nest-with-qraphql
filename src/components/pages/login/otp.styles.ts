import { Theme } from '@emotion/react';
import { SxProps } from '@mui/material';
import colors from '../../../styles/themes/main/mainTheme.module.scss';

export const otpBottomSheetContainerStyles: SxProps<Theme> = {
  height: '55vh',
};

export const otpBottomSheetHeaderStyles: SxProps<Theme> = {
  mb: 3,
  alignItems: 'flex-start',
};

export const otpBottomSheetBodyStyles: SxProps<Theme> = {
  alignItems: 'center',
};

export const otpLinkStyles: SxProps<Theme> = {
  color: colors.secondary400,
  cursor: 'pointer',
  width: '35%',
};
