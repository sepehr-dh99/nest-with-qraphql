export interface IBottomSheet {
  setOpen?: (state: boolean) => void;
  children: JSX.Element;
  transparent?: boolean;
  open?: boolean;
  sx?: any;
}
