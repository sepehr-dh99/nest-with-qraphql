import { styled } from '@mui/material';
import MuiAlert from '@mui/material/Alert';

const StyledAlert = styled(MuiAlert)(({ theme }) => ({
  '& .MuiAlert-icon': {
    marginRight: '0',
    marginLeft: '12px',
  },
}));

export default StyledAlert;
