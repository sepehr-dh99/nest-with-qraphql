import { Stack } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';
import { Box } from '@mui/material';
import { TStyledLogoAnimation } from './auth.types';

// Auth Layout
const StyledAuthLayout = styled(Stack)(({ theme }) => ({
  justifyContent: 'space-around',

  position: 'relative',

  maxWidth: '480px',
  margin: '0 auto',
  minHeight: '100vh',

  backgroundColor: theme.palette.primary.main,
}));

// curve shapes
const StyledCurveShape = styled(Image)(() => ({
  position: 'absolute',
  zIndex: 0,
}));

const StyledLogoAnimation = styled(Box)(({ animated = 'false' }: TStyledLogoAnimation) => ({
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

export { StyledAuthLayout, StyledCurveShape, StyledLogoAnimation };
