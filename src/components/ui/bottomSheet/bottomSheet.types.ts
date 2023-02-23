import { SxProps, Theme } from '@mui/material';

export interface IBottomSheet {
  setOpen?: (state: boolean) => void;
  children: JSX.Element | JSX.Element[];
  transparent?: boolean;
  isOpen?: boolean;
  sx?: SxProps<Theme>;
  sxContent?: SxProps<Theme>;
}
