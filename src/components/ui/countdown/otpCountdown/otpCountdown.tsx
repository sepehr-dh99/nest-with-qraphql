import { useEffect, useState } from 'react';

import Image from 'next/image';
import { Box, IconButton, Typography } from '@mui/material';
import { otpCountdownContainer, otpCountdownText } from './otpCountdown.styles';

const COUNTDOWN_INITIAL_VALUE = 10; // seconds

const formatTime = (value: number) => (value < 10 ? `0${value}` : value);

const getTime = (value: number) => {
  const divisorForMinutes = value % (60 * 60);
  const minutes = Math.floor(divisorForMinutes / 60);

  const divisorForSeconds = divisorForMinutes % 60;
  const seconds = Math.ceil(divisorForSeconds);

  return `${formatTime(minutes)}:${formatTime(seconds)}`;
};

const OtpCountdown = () => {
  const [value, setValue] = useState(COUNTDOWN_INITIAL_VALUE);
  const isCounterFinished = value === 0;

  useEffect(() => {
    if (isCounterFinished) return;
    const interval = setInterval(() => {
      setValue((prev) => --prev);
    }, 1000);

    return () => clearInterval(interval);
  }, [value]);

  const resendOTP = () => {
    if (!isCounterFinished) return;
    setValue(COUNTDOWN_INITIAL_VALUE);

    // TODO: resend OTP for user
  };

  return (
    <Box sx={otpCountdownContainer}>
      {isCounterFinished ? (
        <Typography sx={otpCountdownText}>کد فعال‌سازی را دریافت نکرده‌‌اید؟</Typography>
      ) : (
        <Typography sx={otpCountdownText}>{getTime(value)}</Typography>
      )}
      <IconButton disabled={!isCounterFinished} onClick={(e) => resendOTP()} color='primary'>
        <Image src='/Icons/reset.svg' alt='reset' width={16} height={16} />
      </IconButton>
    </Box>
  );
};

export default OtpCountdown;
