import { TInlineStyles } from '@src/types/styles.types';

const containerSx: TInlineStyles = () => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
});

const textSx: TInlineStyles = () => ({
  fontWeight: '500',
  fontSize: '1.2rem',
});

const otpCountdownStyles = {
  containerSx,
  textSx,
};

export default otpCountdownStyles;
