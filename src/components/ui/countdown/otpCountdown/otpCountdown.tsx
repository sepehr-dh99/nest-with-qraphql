import { IconButton, Typography } from '@mui/material';
import styles from './otpCountdown.module.scss';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const COUNTDOWN_INITIAL_VALUE = 10; // seconds

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

  const formatTime = (value: number) => (value < 10 ? `0${value}` : value);

  const getTime = () => {
    const divisorForMinutes = value % (60 * 60);
    const minutes = Math.floor(divisorForMinutes / 60);

    const divisorForSeconds = divisorForMinutes % 60;
    const seconds = Math.ceil(divisorForSeconds);

    return `${formatTime(minutes)}:${formatTime(seconds)}`;
  };

  const resendOTP = () => {
    if (!isCounterFinished) return;
    setValue(COUNTDOWN_INITIAL_VALUE);

    // TODO: resend OTP for user
  };

  return (
    <div className={styles.container}>
      <Typography className={styles.text}>
        {isCounterFinished ? (
          <span>کد فعال‌سازی را دریافت نکرده‌‌اید؟</span>
        ) : (
          <span>{getTime()}</span>
        )}
      </Typography>
      <IconButton disabled={!isCounterFinished} onClick={(e) => resendOTP()} color='primary'>
        <Image src='/Icons/reset.svg' alt='reset' width={16} height={16} />
      </IconButton>
    </div>
  );
};

export default OtpCountdown;
