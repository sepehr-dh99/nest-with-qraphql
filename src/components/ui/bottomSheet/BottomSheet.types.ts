export interface IBottomSheet {
  setOpen?: (state: boolean) => void;
  children: JSX.Element | JSX.Element[];
  transparent?: boolean;
  open?: boolean;
  sx?: any;
}
