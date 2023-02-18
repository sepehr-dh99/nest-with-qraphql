import { LoadingButtonProps } from '@mui/lab';
import { ReactNode } from 'react';

export interface MainButtonProps extends LoadingButtonProps {
  children: ReactNode;
}
