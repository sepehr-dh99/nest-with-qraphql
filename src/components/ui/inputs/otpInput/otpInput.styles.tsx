import { styled } from '@mui/material';
import { TInlineStyles } from '@src/types/styles.type';

const groupSx: TInlineStyles = () => ({
  display: 'flex',
  width: '100%',
  maxWidth: '360px',
  justifyContent: 'space-around',
  columnGap: '10px',
  direction: 'ltr !important',
  margin: '11.5% 0 35% 0',
});

export const StyledOtpInput = styled('input')(({ theme }) => ({
  width: '38.67px',
  height: '49px',
  border: 'none',
  borderBottom: `3px solid ${theme.palette.gray[100]} `,
  color: theme?.palette.gray[300],
  textAlign: 'center',
  fontSize: '27px',

  // TODO: change color to theme pallete
  '&:focus': {
    borderColor: '#3885b0',
    outline: 'none',
  },
}));

const otpInputStyles = {
  groupSx,
};

export default otpInputStyles;
