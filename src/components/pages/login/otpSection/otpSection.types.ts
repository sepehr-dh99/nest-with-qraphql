import { LoginSteps } from '@src/pages/login';
import { Dispatch, SetStateAction } from 'react';

export interface IOtpSectionProps {
  phoneNumber: string;
  isOpen: boolean;
  setStep: Dispatch<SetStateAction<LoginSteps>>;
}
