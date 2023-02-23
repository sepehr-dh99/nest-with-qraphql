import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material';

const StyledMainButton = styled(LoadingButton)(({ theme }) => ({
  borderRadius: '1.1rem',
  boxShadow: 'none',

  '&:hover': {
    boxShadow: 'none',
  },
}));

export default StyledMainButton;
