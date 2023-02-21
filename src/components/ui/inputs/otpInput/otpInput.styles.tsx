import { SxProps } from '@mui/material';
import { Theme } from '@mui/system';

const otpInputGroupStyles: SxProps<Theme> = {
  display: 'flex',
  width: '100%',
  maxWidth: '360px',
  justifyContent: 'space-around',
  columnGap: '10px',
  direction: 'ltr !important',
  margin: '40px 0 35% 0',

  input: {
    width: '38.67px',
    height: '49px',
    border: 'none',
    borderBottom: '3px solid #eee',
    color: '#a3a3a3',
    textAlign: 'center',
    fontSize: '27px',

    '&:focus': {
      borderColor: '#3885b0',
      outline: 'none',
    },
  },
};

export { otpInputGroupStyles };
