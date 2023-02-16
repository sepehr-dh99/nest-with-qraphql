import { useTheme } from "@mui/system";

import LandingLogo from "@src/components/ui/landingLogo/landingLogo";

import PleaseWaitSpinner from "@src/components/ui/pleaseWaitSpinner/pleaseWaitSpinner";
import AuthLayout from "@src/layouts/auth/auth";

export default function Home() {
  const theme = useTheme();

  // root styles until desktop version

  // method to open bottom sheet

  return (
    <AuthLayout>
      {/* Bottom sheet */}

      <PleaseWaitSpinner
        sx={{ position: "absolute", bottom: 0, left: 0, right: 0 }}
      />
    </AuthLayout>
  );
}
