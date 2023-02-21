import { LoginSteps } from '@src/pages/login';
import { Dispatch, SetStateAction } from 'react';

export type OtpSectionProps = {
  phoneNumber: string;
  isOpen: boolean;
  setStep: Dispatch<SetStateAction<LoginSteps>>;
};
