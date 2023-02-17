import { Box } from "@mui/material";
import LandingLogo from "@src/components/ui/landingLogo/landingLogo";
import { AuthLayoutStyle, CurveShapeStyle } from "./auth.styles";

const AuthLayout = ({ children }: { children: JSX.Element | JSX.Element[] }) => {
  return (
    <AuthLayoutStyle>
      {/* Shape Curve in top of page */}
      <CurveShapeStyle src="/images/authCurveTop.svg" alt="curve shape bottom" height={275} width={275} sx={{ top: 0, right: 0 }} />

      {/* Shape Curve in bottom of page */}
      <CurveShapeStyle src="/images/authCurveBottom.svg" alt="curve shape bottom" height={200} width={200} sx={{ bottom: 0, left: 0 }} />

      {/* Landing Logo */}
      <Box sx={{ zIndex: 5 }}>
        <LandingLogo />
      </Box>

      {/* children */}
      {children}
    </AuthLayoutStyle>
  );
};

export default AuthLayout;
