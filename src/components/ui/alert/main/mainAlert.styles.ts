import { styled } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const StyledAlert = styled(MuiAlert)(({ theme }) => ({
  '& .MuiAlert-icon': {
    marginRight: '0',
    marginLeft: '1.2rem',
  },
}));

export default StyledAlert;
