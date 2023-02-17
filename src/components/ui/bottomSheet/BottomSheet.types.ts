export interface IBottomSheet {
  children: JSX.Element;
  transparent?: boolean;
  open?: boolean;
  // TODO: maybe is not correct !!
  setOpen?: Function;
}
