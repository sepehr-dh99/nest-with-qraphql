import { Stack } from '@mui/material';
import { styled } from '@mui/system';
import Image from 'next/image';

// Auth Layout
const AuthLayoutStyle = styled(Stack)(({ theme }) => ({
  justifyContent: 'space-around',

  position: 'relative',

  maxWidth: '480px',
  margin: '0 auto',
  minHeight: '100vh',

  backgroundColor: theme.palette.primary.main,
}));

// curve shapes
const CurveShapeStyle = styled(Image)(() => ({
  position: 'absolute',
  zIndex: 0,
}));

export { AuthLayoutStyle, CurveShapeStyle };
