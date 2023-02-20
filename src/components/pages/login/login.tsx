import React, { Dispatch, FormEvent, SetStateAction, useState } from 'react';

import * as Yup from 'yup';
import { useFormik } from 'formik';
import { AlertProps } from '@mui/material/Alert';
import { IRPhoneNumberReg } from '@src/utils/regex';
import { Snackbar, Stack, Typography } from '@mui/material';
import MainInput from '@src/components/ui/inputs/main/mainInput';
import MainButton from '@src/components/ui/button/main/mainButton';
import BottomSheet from '@src/components/ui/bottomSheet/BottomSheet';
import StyledAlert from '@src/components/ui/alert/main/mainAlert.styles';
import { useRouter } from 'next/router';
import { LoginSteps } from '@src/pages/login';

type LoginSectionProps = {
  isOpen: boolean;
  setStep: Dispatch<SetStateAction<LoginSteps>>;
  setphoneNumber: Dispatch<SetStateAction<string>>;
};

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <StyledAlert elevation={6} ref={ref} variant='filled' {...props} />;
});

const validationSchema = Yup.object().shape({
  phoneNumber: Yup.string()
    .required('شماره تماس را وارد کنید')
    .matches(IRPhoneNumberReg, { message: 'شماره تماس را به درستی وارد کنید' }),
});

const SNACKBAR_AUTOCLOSE_MS = 3000;

const LoginSection = ({ isOpen = true, setStep, setphoneNumber }: LoginSectionProps) => {
  const [openSnackBar, setOpenSnackBar] = useState(false);

  const formik = useFormik({
    validationSchema: validationSchema,
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
    setOpenSnackBar(!!formik.errors.phoneNumber);
  };

  const handleClose = () => {
    setOpenSnackBar(false);
  };

  return (
    <BottomSheet
      sxContent={{ boxShadow: '0px -6px 31px 0px #00000036' }}
      isOpen={isOpen}
      transparent
    >
      <Stack sx={{ height: '55vh' }}>
        <Stack spacing={2.5} sx={{ mb: 3 }}>
          {/* TODO: Must be create Layout TRL provider */}
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

      {/* snackbar */}
      {/* TODO: Fix positioning and width of the snackbar  */}
      <Snackbar open={openSnackBar} autoHideDuration={SNACKBAR_AUTOCLOSE_MS} onClose={handleClose}>
        <Alert severity='error' sx={{ width: '100%' }} onClose={handleClose}>
          شماره همراه را به درستی وارد کنید
        </Alert>
      </Snackbar>
    </BottomSheet>
  );
};

// // TODO :  must be check !!!
// LoginPage.getLayout = (page: ReactNode | any) => {
//   return <Layout variant='guest'>{page}</Layout>;
// };

export default LoginSection;
