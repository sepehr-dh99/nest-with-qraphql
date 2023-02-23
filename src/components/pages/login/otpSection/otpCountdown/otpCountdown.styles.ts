import { TInlineStyles } from '@src/types/styles.type';

const containerSx: TInlineStyles = () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

const textSx: TInlineStyles = () => ({
  fontWeight: '500',
  fontSize: '12px',
});

const otpCountdownStyles = {
  containerSx,
  textSx,
};

export default otpCountdownStyles;
