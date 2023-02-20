import { Stack, Typography, useTheme } from '@mui/material';
import BottomSheet from '@src/components/ui/bottomSheet/BottomSheet';
import OtpCountdown from '@src/components/ui/countdown/otpCountdown/otpCountdown';
import OtpInput from '@src/components/ui/inputs/otpInput/otpInput';
import { LoginSteps } from '@src/pages/login';
import Link from 'next/link';
import { Dispatch, SetStateAction, useState } from 'react';

type OtpSectionProps = {
  phoneNumber: string;
  isOpen: boolean;
  setStep: Dispatch<SetStateAction<LoginSteps>>;
};

const OtpSection = ({ phoneNumber, isOpen = false, setStep }: OtpSectionProps) => {
  const theme = useTheme();

  const [otp, setOtp] = useState('');
  const onOtpChange = (value: string) => {
    setOtp(value);

    // TODO: Send HTTP Request to validate user OTP
    if (value.trim().length === 6) {
    }
  };

  return (
    <BottomSheet
      sxContent={{ boxShadow: '0px -6px 31px 0px #00000036' }}
      isOpen={isOpen}
      transparent
    >
      <Stack sx={{ height: '55vh' }}>
        <Stack spacing={2.5} sx={{ mb: 3, alignItems: 'flex-start' }}>
          {/* TODO: Must be create Layout TRL provider */}
          <Typography variant='h3'>کد فعال‌سازی را وارد کنید.</Typography>
          <Stack spacing={1.5}>
            <Typography variant='pSmRegular'>
              کد ۶ رقمی ارسال‌شده به شماره {phoneNumber} را وارد کنید.
            </Typography>
            {/* TODO: add variant and change color to 400 */}
            <Typography
              variant='caption'
              sx={{ color: theme.palette.secondary.main, cursor: 'pointer' }}
              onClick={(e) => setStep(LoginSteps.Login)}
            >
              تغییر شماره موبایل
            </Typography>
          </Stack>
        </Stack>

        {/* FIXME: change input font family and input format to MUI Text field */}
        <Stack spacing={2} sx={{ alignItems: 'center' }}>
          <OtpInput value={otp} valueLength={6} onChange={onOtpChange}></OtpInput>
          <OtpCountdown />
        </Stack>
      </Stack>
    </BottomSheet>
  );
};

export default OtpSection;
