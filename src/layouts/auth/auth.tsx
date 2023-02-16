import { useTheme } from "@mui/material";
import LandingLogo from "@src/components/ui/landingLogo/landingLogo";
import AuthLayoutStyle from "./auth.styles";

const AuthLayout = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  const theme = useTheme();

  return (
    // <Box sx={{ ...rootStyles, bgcolor: theme.palette.primary.main }}>

    <AuthLayoutStyle>
      <LandingLogo />
      {children}
    </AuthLayoutStyle>
    // </Box>
  );
};

export default AuthLayout;
