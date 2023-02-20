export interface IBottomSheet {
  setOpen?: (state: boolean) => void;
  children: JSX.Element | JSX.Element[];
  transparent?: boolean;
  isOpen?: boolean;
  sx?: any;
  sxContent?: any;
}
