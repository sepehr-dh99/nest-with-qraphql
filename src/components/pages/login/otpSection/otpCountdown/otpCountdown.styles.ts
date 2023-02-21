import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';

export const otpCountdownContainer: SxProps<Theme> = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
};

export const otpCountdownText: SxProps<Theme> = {
  fontWeight: '500',
  fontSize: '12px',
};
