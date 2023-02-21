import { Stack, Typography, useTheme } from '@mui/material';
import BottomSheet from '@src/components/ui/bottomSheet/BottomSheet';
import { bottomSheetStyles } from '@src/components/ui/bottomSheet/bottomSheet.styles';
import OtpCountdown from '@src/components/ui/countdown/otpCountdown/otpCountdown';
import OtpInput from '@src/components/ui/inputs/otpInput/otpInput';
import { LoginSteps } from '@src/pages/login';
import { useState } from 'react';
import {
  otpBottomSheetBodyStyles,
  otpBottomSheetContainerStyles,
  otpBottomSheetHeaderStyles,
  otpLinkStyles,
} from './otp.styles';
import { OtpSectionProps } from './otp.types';

const OTP_INPUT_COUNT = 6;

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
    <BottomSheet sxContent={bottomSheetStyles} isOpen={isOpen} transparent>
      <Stack sx={otpBottomSheetContainerStyles}>
        <Stack spacing={2.5} sx={otpBottomSheetHeaderStyles}>
          <Typography variant='h3'>کد فعال‌سازی را وارد کنید.</Typography>
          <Stack spacing={1.5}>
            <Typography variant='pSmRegular'>
              کد ۶ رقمی ارسال‌شده به شماره {phoneNumber} را وارد کنید.
            </Typography>
            <Typography
              variant='caption'
              sx={otpLinkStyles}
              onClick={(e) => setStep(LoginSteps.Login)}
            >
              تغییر شماره موبایل
            </Typography>
          </Stack>
        </Stack>

        {/* FIXME: change input font family and input format to MUI Text field */}
        <Stack spacing={2} sx={otpBottomSheetBodyStyles}>
          <OtpInput value={otp} valueLength={OTP_INPUT_COUNT} onChange={onOtpChange} />
          <OtpCountdown />
        </Stack>
      </Stack>
    </BottomSheet>
  );
};

export default OtpSection;
