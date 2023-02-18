import styled from '@emotion/styled';
import MuiAlert from '@mui/material/Alert';

const StyledAlert = styled(MuiAlert)(({ theme }) => ({
  '& .MuiAlert-icon': {
    marginRight: '0',
    marginLeft: '12px',
  },
}));

export default StyledAlert;
