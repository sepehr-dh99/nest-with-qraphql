import { styled } from '@mui/material';
import { TInlineStyles } from '@src/types/styles.types';

const groupSx: TInlineStyles = () => ({
  display: 'flex',
  width: '100%',
  maxWidth: '36rem',
  justifyContent: 'space-around',
  columnGap: '1rem',
  direction: 'ltr !important',
  margin: '11.5% 0 35% 0',
});

export const StyledOtpInput = styled('input')(({ theme }) => ({
  width: '3.867rem',
  height: '4.9rem',
  border: 'none',
  borderBottom: `0.3rem solid ${theme.palette.gray[100]} `,
  color: theme?.palette.gray[300],
  textAlign: 'center',
  fontSize: '2.7rem',

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
