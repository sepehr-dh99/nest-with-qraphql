import { Stack, Typography } from '@mui/material';
import Image from 'next/image';

const LandingLogo = () => {
  return (
    <Stack alignItems='center'>
      <Image src='/images/logo-full.svg' alt='logo' width={225} height={70} priority />
      <Typography variant='subtitle1' component='span'>
        اپلیکشن جامع هم میهن برای هم میهن
      </Typography>
    </Stack>
  );
};

export default LandingLogo;
