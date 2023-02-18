import styled from '@emotion/styled';
import { LoadingButton } from '@mui/lab';

const StyledMainButton = styled(LoadingButton)(({ theme }) => ({
  borderRadius: '11px',
  boxShadow: 'none',

  '&:hover': {
    boxShadow: 'none',
  },
}));

export default StyledMainButton;
