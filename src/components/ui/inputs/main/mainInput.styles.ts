// mui
import { styled } from '@mui/system';
import { TextField } from '@mui/material';

// TODO: Have extra Border on hover input !!!
const StyledMainInput = styled(TextField)(({ theme }) => ({
  '& .MuiOutlinedInput-root': {
    borderRadius: '11px',
    overflow: 'hidden',
    borderColor: 'red',

    '&:hover': {
      '& fieldset': {
        borderColor: theme.palette.grey[200], // change the border color here ,
      },
    },

    '& fieldset': {
      borderColor: theme.palette.grey[100], // change the border color here ,
    },

    '& input': {
      backgroundColor: '#F8F8F8 !important',
    },

    '&.Mui-focused': {
      '& fieldset': {
        borderColor: theme.palette.primary.main, // change the border color here ,
      },
    },

    // On Disabled
    '&.Mui-disabled': {
      background: theme.palette.grey[50] + 90,
      cursor: 'not-allowed',

      '& input': {
        cursor: 'not-allowed',
      },
    },
  },
}));

export default StyledMainInput;
