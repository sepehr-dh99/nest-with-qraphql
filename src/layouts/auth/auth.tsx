import LandingLogo from '@src/components/ui/landingLogo/landingLogo';
import { StyledAuthLayout, StyledCurveShape, StyledLogoAnimation } from './auth.styles';
import authStyles from './auth.styles';

import { useRouter } from 'next/router';

const animatedRoutes = ['/login'];

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
        sx={authStyles.topCurveSx()}
        priority
      />

      {/* Shape Curve in bottom of page */}
      <StyledCurveShape
        src='/images/authCurveBottom.svg'
        alt='curve shape bottom'
        height={200}
        width={200}
        sx={authStyles.bottomCurveSx()}
        priority
      />

      {/* Landing Logo */}
      <StyledLogoAnimation animated={isLogoAnimated ? 'true' : 'false'} sx={authStyles.logoSx()}>
        <LandingLogo />
      </StyledLogoAnimation>

      {/* children */}
      {children}
    </StyledAuthLayout>
  );
};

export default AuthLayout;
