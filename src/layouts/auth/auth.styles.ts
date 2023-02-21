import { Stack } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import { Box } from '@mui/material';
import { IStyledLogoAnimation } from './auth.types';

// Auth Layout
export const StyledAuthLayout = styled(Stack)(({ theme }) => ({
  justifyContent: 'space-around',

  position: 'relative',

  maxWidth: '480px',
  margin: '0 auto',
  minHeight: '100vh',

  backgroundColor: theme.palette.primary.main,
}));

// curve shapes
export const StyledCurveShape = styled(Image)(() => ({
  position: 'absolute',
  zIndex: 0,
}));

export const StyledLogoAnimation = styled(Box)(({ animated = 'false' }: IStyledLogoAnimation) => ({
  animation: animated === 'true' ? `moveUp 1s ease-in-out both` : '',
  transition: 'all 2s',
  '@keyframes moveUp': {
    '0%': {
      transform: 'translateY(0)',
    },
    '100%': {
      transform: 'translateY(-32vh)',
    },
  },
}));

export const topStyledCurveShapeStyles = { top: 0, right: 0 };
export const bottomStyledCurveShapeStyles = { bottom: 0, left: 0 };
