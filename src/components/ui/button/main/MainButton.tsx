import StyledMainButton from './mainButton.styles';
import { MainButtonProps } from './mainButton.types';

const MainButton = ({ children, ...props }: MainButtonProps) => {
  return <StyledMainButton {...props}>{children}</StyledMainButton>;
};

export default MainButton;
