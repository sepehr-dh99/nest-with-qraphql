import { Stack } from '@mui/material';
import { styled } from '@mui/material';
import Image from 'next/image';
import { Box } from '@mui/material';
import { IStyledLogoAnimation } from './auth.types';
import { TInlineStyles } from '@src/types/styles.type';

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

const topCurveSx: TInlineStyles = () => ({ top: 0, right: 0 });
const bottomCurveSx: TInlineStyles = () => ({ bottom: 0, left: 0 });
const logoSx: TInlineStyles = () => ({ zIndex: 5 });

const authStyles = {
  topCurveSx,
  bottomCurveSx,
  logoSx,
};

export default authStyles;
