import { LoadingButton } from '@mui/lab';
import { styled } from '@mui/material';

const StyledMainButton = styled(LoadingButton)(({ theme }) => ({
  borderRadius: '11px',
  boxShadow: 'none',

  '&:hover': {
    boxShadow: 'none',
  },
}));

export default StyledMainButton;
