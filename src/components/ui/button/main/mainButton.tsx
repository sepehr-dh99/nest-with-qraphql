import StyledMainButton from './mainButton.styles';
import { IMainButtonProps } from './mainButton.types';

const MainButton = ({ children, ...props }: IMainButtonProps) => {
  return <StyledMainButton {...props}>{children}</StyledMainButton>;
};

export default MainButton;
