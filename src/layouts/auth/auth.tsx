import { Box } from '@mui/material';
import LandingLogo from '@src/components/ui/landingLogo/landingLogo';
import { StyledAuthLayout, StyledCurveShape, StyledLogoAnimation } from './auth.styles';
import { useRouter } from 'next/router';

const animatedRoutes = ['/login', '/otp'];

const AuthLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  const { pathname } = useRouter();
  const isLogoAnimated: boolean = !!animatedRoutes.includes(pathname);

  return (
    <StyledAuthLayout>
      {/* Shape Curve in top of page */}
      <StyledCurveShape
        src='/images/authCurveTop.svg'
        alt='curve shape bottom'
        height={275}
        width={275}
        sx={{ top: 0, right: 0 }}
      />

      {/* Shape Curve in bottom of page */}
      <StyledCurveShape
        src='/images/authCurveBottom.svg'
        alt='curve shape bottom'
        height={200}
        width={200}
        sx={{ bottom: 0, left: 0 }}
      />

      {/* Landing Logo */}
      <StyledLogoAnimation animated={isLogoAnimated ? 'true' : 'false'} sx={{ zIndex: 5 }}>
        <LandingLogo />
      </StyledLogoAnimation>

      {/* children */}
      {children}
    </StyledAuthLayout>
  );
};

export default AuthLayout;
