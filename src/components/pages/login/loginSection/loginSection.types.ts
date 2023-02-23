import { LoginSteps } from '@src/pages/login';
import { Dispatch, SetStateAction } from 'react';

export type ILoginSectionProps = {
  isOpen: boolean;
  setStep: Dispatch<SetStateAction<LoginSteps>>;
  setphoneNumber: Dispatch<SetStateAction<string>>;
};
