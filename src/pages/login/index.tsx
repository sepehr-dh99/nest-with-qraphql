import LoginSection from '@src/components/pages/login/login';
import OtpSection from '@src/components/pages/login/otp';
import Layout from '@src/layouts/Layout';
import { ReactNode, useState } from 'react';

export enum LoginSteps {
  Login = 'Login',
  OTP = 'OTP',
}

const LoginPage = () => {
  const [phoneNumber, setphoneNumber] = useState('');
  const [step, setStep] = useState<LoginSteps>(LoginSteps.Login);

  const loginProps = {
    isOpen: step === LoginSteps.Login,
    setStep,
    setphoneNumber,
  };

  const otpProps = {
    isOpen: step === LoginSteps.OTP,
    setStep,
    phoneNumber,
  };

  return (
    <>
      <LoginSection {...loginProps} />
      <OtpSection {...otpProps} />
    </>
  );
};

// TODO :  must be check !!!
LoginPage.getLayout = (page: ReactNode | any) => {
  return <Layout variant='guest'>{page}</Layout>;
};

export default LoginPage;
