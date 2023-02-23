import { ReactNode, useState } from 'react';
import Layout from '@src/layouts/layout';
import LoginSection from '@src/components/pages/login/loginSection/loginSection';
import OtpSection from '@src/components/pages/login/otpSection/otpSection';
import { ILayoutPage } from '@src/types/getLayout.types';

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
LoginPage.getLayout = (page: ILayoutPage) => {
  return <Layout variant='guest'>{page}</Layout>;
};

export default LoginPage;
