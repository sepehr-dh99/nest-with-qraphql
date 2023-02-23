import Loading from '../../loading/loading';
import StyledMainButton from './mainButton.styles';
import { IMainButtonProps } from './mainButton.types';

const MainButton = ({ children, ...props }: IMainButtonProps) => {
  return (
    <StyledMainButton loadingIndicator={<Loading />} {...props}>
      {children}
    </StyledMainButton>
  );
};

export default MainButton;
