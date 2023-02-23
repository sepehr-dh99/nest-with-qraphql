import React, { FormEvent } from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { IRPhoneNumberReg } from '@src/utils/regex';
import { Stack, Typography } from '@mui/material';
import MainInput from '@src/components/ui/inputs/main/mainInput';
import MainButton from '@src/components/ui/button/main/mainButton';
import BottomSheet from '@src/components/ui/bottomSheet/bottomSheet';
import { LoginSteps } from '@src/pages/login';
import bottomSheetStyles from '@src/components/ui/bottomSheet/bottomSheet.styles';
import { ILoginSectionProps } from './loginSection.types';
import loginSectionSyles from './loginSection.styles';

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required('شماره تماس را وارد کنید')
    .matches(IRPhoneNumberReg, { message: 'شماره تماس را به درستی وارد کنید' }),
});

const LoginSection = ({ isOpen = true, setStep, setphoneNumber }: ILoginSectionProps) => {
  const formik = useFormik({
    validationSchema,
    initialValues: {
      phoneNumber: '',
    },
    onSubmit: (values) => {
      setphoneNumber(values.phoneNumber);
      setStep(LoginSteps.OTP);
    },
  });

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    formik.handleSubmit();
  };

  return (
    <BottomSheet sxContent={bottomSheetStyles.shadowSx()} isOpen={isOpen} transparent>
      <Stack sx={loginSectionSyles.containerSx()}>
        <Stack spacing={2.5} sx={loginSectionSyles.headerSx()}>
          {/* TODO: Must be create Layout RTL provider */}
          <Typography variant='h3'>به هم میهن خوش آمدید</Typography>
          <Typography variant='pSmRegular'>
            لطفاً شماره موبایل‌ خود را وارد کنید تا کد فعال‌سازی برا‌یتان ارسال شود
          </Typography>
        </Stack>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <MainInput
              id='phoneNumber'
              name='phoneNumber'
              label='شماره همراه'
              placeholder='مثلا ۰۹۱۲۳۴۵۶۷۸۹'
              onChange={formik.handleChange}
              value={formik.values.phoneNumber}
              error={!!formik.errors.phoneNumber}
            />
            <MainButton type='submit' variant='contained' size='xLarge'>
              مرحله بعدی
            </MainButton>
          </Stack>
        </form>
      </Stack>
    </BottomSheet>
  );
};

export default LoginSection;
