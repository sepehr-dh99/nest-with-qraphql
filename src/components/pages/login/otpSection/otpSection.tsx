import { Stack, Typography } from '@mui/material';
import BottomSheet from '@src/components/ui/bottomSheet/bottomSheet';
import bottomSheetStyles from '@src/components/ui/bottomSheet/bottomSheet.styles';
import OtpCountdown from '@src/components/pages/login/otpSection/otpCountdown/otpCountdown';
import OtpInput from '@src/components/ui/inputs/otpInput/otpInput';
import { LoginSteps } from '@src/pages/login';
import { useState } from 'react';
import otpSectionStyles from './otpSection.styles';
import { IOtpSectionProps } from './otpSection.types';

const OTP_INPUT_COUNT = 6;

const OtpSection = ({ phoneNumber, isOpen = false, setStep }: IOtpSectionProps) => {
  const [otp, setOtp] = useState('');
  const onOtpChange = (value: string) => {
    setOtp(value);

    if (value.trim().length === 6) {
      // TODO: Send HTTP Request to validate user OTP
    }
  };

  const prevStep = () => {
    setOtp('');
    setStep(LoginSteps.Login);
  };

  return (
    <BottomSheet sxContent={bottomSheetStyles.shadowSx()} isOpen={isOpen} transparent>
      <Stack sx={otpSectionStyles.bottomSheetContainerSx()}>
        <Stack spacing={2.5} sx={otpSectionStyles.bottomSheetHeaderSx()}>
          <Typography variant='h3'>کد فعال‌سازی را وارد کنید.</Typography>
          <Stack spacing={1.5}>
            <Typography variant='pSmRegular'>
              کد ۶ رقمی ارسال‌شده به شماره {phoneNumber} را وارد کنید.
            </Typography>
            <Typography variant='caption' sx={otpSectionStyles.linkSx()} onClick={prevStep}>
              تغییر شماره موبایل
            </Typography>
          </Stack>
        </Stack>

        <Stack spacing={2} sx={otpSectionStyles.bottomSheetBodySx()}>
          <OtpInput value={otp} valueLength={OTP_INPUT_COUNT} onChange={onOtpChange} />
          <OtpCountdown />
        </Stack>
      </Stack>
    </BottomSheet>
  );
};

export default OtpSection;
